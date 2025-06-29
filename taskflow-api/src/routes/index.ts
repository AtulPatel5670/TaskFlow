import { Router } from 'express';
import ProjectController from '../controllers/projectController';
import TaskController from '../controllers/taskController';
import UserController from '../controllers/userController';

const router = Router();

// Project routes
router.post('/projects', ProjectController.create);
router.get('/projects', ProjectController.getAll);
router.get('/projects/:id', ProjectController.getById);
router.put('/projects/:id', ProjectController.update);
router.delete('/projects/:id', ProjectController.delete);

// Task routes
router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.get('/tasks/:id', TaskController.getById);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

// User routes
router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getById);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

export default router;