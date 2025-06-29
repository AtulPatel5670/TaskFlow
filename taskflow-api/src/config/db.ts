import { createConnection } from 'typeorm';
import { Project } from '../models/Project';
import { Task } from '../models/Task';
import { User } from '../models/User';

const connection = createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Project, Task, User],
    synchronize: true,
    logging: false,
}).then(() => {
    console.log('Database connection established successfully.');
}).catch(error => {
    console.error('Database connection failed:', error);
});

export default connection;