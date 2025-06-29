export interface Project {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: 'active' | 'completed' | 'on-hold';
    teamId: number;
}

export interface Task {
    id: number;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status: 'pending' | 'in-progress' | 'completed';
    projectId: number;
    assigneeId: number;
    dependencies?: number[];
}

export interface User {
    id: number;
    username: string;
    email: string;
    role: 'admin' | 'member';
}

export interface Comment {
    id: number;
    taskId: number;
    userId: number;
    content: string;
    createdAt: Date;
}

export interface Notification {
    id: number;
    userId: number;
    message: string;
    read: boolean;
    createdAt: Date;
}