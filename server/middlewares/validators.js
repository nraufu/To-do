import Joi from "joi";

const validations = {
    auth(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().trim().email().required(),
            password: Joi.string().trim().required().label('A valid password'),
        });

        const { error } = schema.validate(req.body);
        if (error) { return res.status(400).json({ status: 400, error: error.details[0].message }); }
        next();
    },

    tasks(req, res, next) {
        const schema = Joi.object({
            title: Joi.string().trim().min(10).required(),
            description: Joi.string().trim().min(10).required(),
            priority: Joi.string().valid("Low", "Medium", "High").required(),
            userId: Joi.optional()
        });

        const { error } = schema.validate(req.body);
        if (error) { return res.status(400).json({ status: 400, error: error.details[0].message }); }
        next();
    },
}

export default validations;
