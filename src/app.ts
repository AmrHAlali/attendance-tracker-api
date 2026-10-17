import express from "express";
import studentRoutes from "./routes/students/student.routes.ts";
import logger from "./middlewares/logger.middleware.ts";
import healthRoutes from "./routes/health/health.routes.ts";

const app = express();

// Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes:
app.use('/api/students', studentRoutes);
app.use('/api/health', healthRoutes);

export { app }
export default app;