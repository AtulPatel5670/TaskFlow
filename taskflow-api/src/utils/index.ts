import { Request, Response } from 'express';

export const logger = (req: Request, res: Response, next: Function) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

export const formatResponse = (data: any, message: string = 'Success', status: number = 200) => {
    return {
        status,
        message,
        data,
    };
};