import mongoose from 'mongoose';

const Users = mongoose.model('users', new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    email: String,
    password: String
}));

export default Users;
