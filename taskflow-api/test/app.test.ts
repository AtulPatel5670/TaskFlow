import request from 'supertest';
import app from '../src/app';

describe('TaskFlow API', () => {
    it('should return a 200 status for the root endpoint', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should create a new project', async () => {
        const newProject = {
            name: 'Test Project',
            description: 'A project for testing purposes',
            teamId: 1,
        };

        const response = await request(app)
            .post('/api/projects')
            .send(newProject)
            .set('Accept', 'application/json');

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(newProject.name);
    });

    it('should retrieve all projects', async () => {
        const response = await request(app).get('/api/projects');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should return a 404 for a non-existent project', async () => {
        const response = await request(app).get('/api/projects/9999');
        expect(response.status).toBe(404);
    });

    // Additional tests can be added here for other endpoints and functionalities
});