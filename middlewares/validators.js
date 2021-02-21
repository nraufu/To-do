import Joi from "joi";

const validations = {
    tasks(req, res, next) {
        const schema = Joi.object({
            title: Joi.string().trim().min(10).required(),
            description: Joi.string().trim().min(10).required(),
            priority: Joi.string().valid("Low", "Medium", "High").required()
        });

        const { error } = schema.validate(req.body);
        if (error) { return res.status(400).send({ status: 400, error: error.details[0].message }); }
        next();
    },
}

export default validations;
