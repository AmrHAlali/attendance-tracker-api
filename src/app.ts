import express from "express";
import studentRoutes from "./routes/students/student.routes.ts";
import morgan from "morgan";
import helmet from "helmet";
import healthRoutes from "./routes/health/health.routes.ts";
import { register } from "./controllers/auth.controller.ts";

const app = express();

// Middlewares:
app.use(helmet()); // Security middleware
app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded requests

// Routes:
app.use('/api/students', studentRoutes);
app.use('/api/health', healthRoutes);

// TODO : Add authentication routes
app.post('/api/auth/register', register);

export { app }
export default app;