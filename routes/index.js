import express from 'express';
import tasksRouter from './tasks';

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({message: 'Welcome To My TO-DO App 👋'});
});

router.use('/task/', tasksRouter);

export default router;
