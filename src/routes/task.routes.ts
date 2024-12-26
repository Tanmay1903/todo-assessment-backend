import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.get('/', taskController.getAllTasks);
taskRoutes.post('/', taskController.createTask);
taskRoutes.put('/:id', taskController.updateTask);
taskRoutes.delete('/:id', taskController.deleteTask);

export default taskRoutes;
