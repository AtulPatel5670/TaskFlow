import { Server } from 'socket.io';
import http from 'http';

const initWebSocketServer = (app) => {
    const server = http.createServer(app);
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });

        // Handle other events here
        socket.on('message', (data) => {
            console.log('Message received:', data);
            // Broadcast the message to other clients
            socket.broadcast.emit('message', data);
        });
    });

    return { io, server };
};

export default initWebSocketServer;