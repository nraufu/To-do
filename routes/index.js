import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({message: 'Welcome To My TO-DO App 👋'});
});

export default router;
