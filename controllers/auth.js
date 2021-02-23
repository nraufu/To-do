import bcrypt from 'bcrypt';
import Users from "../models/users";
import { assignToken } from "../helpers/assignToken";

class User {
    async createUser(req, res){
        const {email, password} = req.body;
        const user = await Users.findOne({ email });
        if (user) return res.status(409).json({ status: 409, error: "User Already Exists" });
        const hashPassword = bcrypt.hashSync(password, 5);
        const newUser = new Users({
            email,
            password: hashPassword
        });
        const currentUser = await newUser.save();
        const token = assignToken({ user_id: currentUser._id, email: currentUser.email });
        return res.status(201).json({status: 201, message: "Successfully registered!", token: token});
    }

    async login(req, res) {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) return res.status(400).json({ status: 400, error: "Account not registered" });
        const isPasswordTrue = bcrypt.compareSync(password, user.password);
        if (!isPasswordTrue) return res.status(400).json({ status: 400, error: "Incorrect Password" });
        const token = assignToken({ user_id: user._id, email: user.email });
        return res.status(200).json({ status: 200, message: "successfully Logged In", token: token });
    }
}

export default new User();
