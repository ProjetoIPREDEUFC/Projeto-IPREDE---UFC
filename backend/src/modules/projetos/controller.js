import * as service from "./service.js"

async function adicionarProjeto(req, res, next) {
    try {
        const projeto = await service.criarProjeto(req.body);

        return res.status(201).json({
            status: 201,
            sucess: true,
            projeto,
            message: `Projeto ${projeto.id} adicionado com sucesso`

        });
    }
    catch (error) {
        next(error);
    }

}

export {adicionarProjeto}