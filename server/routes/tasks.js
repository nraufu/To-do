import express from 'express';
import Tasks from '../controllers/tasks' ;
import validations from '../middlewares/validators';

const router = express.Router();

router.post('/', validations.tasks, Tasks.createTask);
router.get('/', Tasks.getTasks);
router.get('/:id', Tasks.getTask);
router.patch('/:id', validations.tasks,Tasks.editTask);
router.delete('/:id', Tasks.deleteTask);

export default router;
