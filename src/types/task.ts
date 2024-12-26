export interface ITask {
  id: string;
  title: string;
  color: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateTaskDTO {
  title: string;
  color: string;
}

export interface IUpdateTaskDTO {
  title?: string;
  color?: string;
  completed?: boolean;
}
