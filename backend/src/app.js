import express from 'express';
import funcionariosRoutes from './modules/funcionarios/routes.js';

const app = express();
app.use(express.json());

app.use('/funcionarios', funcionariosRoutes);

export default app;