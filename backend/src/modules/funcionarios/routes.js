import express from 'express';
import { cadastrarFuncionario } from './controllers.js';

const router = express.Router();

router.post('/cadastrar', cadastrarFuncionario);

export default router;