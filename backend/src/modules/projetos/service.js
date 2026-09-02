//importa todas as funções nomeadas, ai quando adicionar nao tem que fazer import {criar,editar,excluir,etc}, utilizando o repository como um objeto(repository.criar)
import * as repository from  "./repository.js"
import Projeto from "./model.js"

async function criarProjeto(data){
    //validação extra, pois o middleware só protege a rota, isso aqui serve pra proteger a função, caso ela seja utilizada em algo sem ser a rota
    if (!data.nome || !data.descricao || !data.data_inicio || !data.data_final || !data.status || !data.orcamento_previsto || !data.id_setor || !data.id_lider){
        const erro = new Error("Campos obrigatórios faltando");
        //status code diferente de 500 por ser um erro de bad request
        erro.statusCode = 400;
        throw erro
    }
    const projeto = new Projeto(data);
    const projetoCriado = await repository.criar(projeto);
    return projetoCriado;
}
export {criarProjeto};