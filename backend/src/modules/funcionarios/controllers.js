import { db } from '../../../configs/firestoreConfig.js';
import { FieldValue } from 'firebase-admin/firestore';

export async function cadastrarFuncionario(req, res) {
    try {
        const { nome, cargo, id_projeto, id_setor } = req.body;

        if (!nome || !cargo) {
            return res.status(400).json({ erro: 'Nome e cargo são obrigatórios.' });
        }

        const novoFuncionario = {
            nome,
            cargo,
            id_projeto: id_projeto || null,
            id_setor: id_setor || null,
            data_cadastro: FieldValue.serverTimestamp()
        };

        const docRef = await db.collection('funcionarios').add(novoFuncionario);
        
        return res.status(201).json({ 
            mensagem: 'Funcionário cadastrado com sucesso!', 
            funcionarioId: docRef.id 
        });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao cadastrar funcionário', detalhes: error.message });
    }
}