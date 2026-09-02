import express from 'express';
//mesma motivação da importação do repository
import * as controller from "./controller.js"
import validarProjeto from "./validation.js" 

const router = express.Router();
router.post('/adicionar', validarProjeto, controller.adicionarProjeto);

export default router;
