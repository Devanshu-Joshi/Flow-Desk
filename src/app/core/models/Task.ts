export interface Task {
    id?: string;
    title: string;
    status: 'Incomplete' | 'Completed' | 'InProgress';
    dueDate: string;
    createdAt: number;
    userId: string;
}