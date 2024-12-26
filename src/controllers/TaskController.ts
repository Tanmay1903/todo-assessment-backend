import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { ICreateTaskDTO, IUpdateTaskDTO } from '../types/task';

const prisma = new PrismaClient();

export class TaskController {
  async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await prisma.task.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return res.json(tasks);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const { title, color }: ICreateTaskDTO = req.body;

      if (!title || !color) {
        return res.status(400).json({ error: 'Title and color are required' });
      }

      const task = await prisma.task.create({
        data: {
          title,
          color,
        },
      });

      return res.status(201).json(task);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create task' });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData: IUpdateTaskDTO = req.body;

      const task = await prisma.task.update({
        where: { id },
        data: updateData,
      });

      return res.json(task);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update task' });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await prisma.task.delete({
        where: { id },
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete task' });
    }
  }
}
