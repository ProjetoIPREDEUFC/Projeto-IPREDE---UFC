//middleware de validação, está na pasta de modulo por nao ser um middleware generico universal como errorhandler, e sim algo especifico do modulo
function validarProjeto(req, res, next) {
  const { nome, descricao, data_inicio, data_final, status, orcamento_previsto, id_setor, id_lider } = req.body;

  if (!nome || !descricao || !data_inicio || !data_final || !status || !orcamento_previsto || !id_setor || !id_lider) {
    const erro = new Error("Campos obrigatórios faltando");
    erro.statusCode = 400;
    return next(erro);
  }

    if (typeof nome !== 'string') {
    const erro = new Error("nome deve ser texto");
    erro.statusCode = 400;
    return next(erro);
  }

  if (typeof descricao !== 'string') {
    const erro = new Error("descricao deve ser texto");
    erro.statusCode = 400;
    return next(erro);
  }

  if (typeof status !== 'string') {
    const erro = new Error("status deve ser texto");
    erro.statusCode = 400;
    return next(erro);
  }

  if (typeof orcamento_previsto !== 'number') {
    const erro = new Error("orcamento_previsto deve ser um número");
    erro.statusCode = 400;
    return next(erro);
  }

  if (typeof id_setor !== 'number') {
    const erro = new Error("id_setor deve ser um número");
    erro.statusCode = 400;
    return next(erro);
  }

  if (typeof id_lider !== 'string') {
    const erro = new Error("id_lider deve ser texto");
    erro.statusCode = 400;
    return next(erro);
  }

  if (isNaN(Date.parse(data_inicio)) || isNaN(Date.parse(data_final))) {
    const erro = new Error("Datas inválidas");
    erro.statusCode = 400;
    return next(erro);
  }

  if (new Date(data_final) < new Date(data_inicio)) {
    const erro = new Error("data_final não pode ser anterior a data_inicio");
    erro.statusCode = 400;
    return next(erro);
  }

  if (orcamento_previsto <= 0) {
    const erro = new Error("orcamento_previsto deve ser maior que zero");
    erro.statusCode = 400;
    return next(erro);
  }

  next();
}

export default validarProjeto;