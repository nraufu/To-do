import express from 'express';
import Auth from '../controllers/auth' ;
import validations from '../middlewares/validators';

const router = express.Router();

router.post('/signup/', validations.auth, Auth.createUser);
router.post('/login/', validations.auth, Auth.login);

export default router;
