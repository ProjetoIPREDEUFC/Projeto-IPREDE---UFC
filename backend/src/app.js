import express from 'express'
import errorHandler from './middlewares/errorHandler.js';
import rotasProjetos from './modules/projetos/routes.js'
const app = express();

app.use(express.json());
app.use('/projetos',rotasProjetos);
app.use(errorHandler);

export default app