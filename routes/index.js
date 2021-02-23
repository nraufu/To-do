import express from 'express';
import tasksRouter from './tasks';
import authRouter from './users';
import verifyAuth from '../middlewares/verifyToken';

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({message: 'Welcome To My TO-DO App 👋'});
});

router.use('/task/', verifyAuth, tasksRouter);
router.use('/auth/', authRouter);

export default router;
