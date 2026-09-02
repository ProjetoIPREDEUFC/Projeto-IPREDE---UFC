//middleware de tratamento de erros, toda vez que ocorrer um erro, o next indicao o express para mandar para esse arquivo
//puxa as informações do erro, como status e message, mas talvez tenha que customizar o erro de acordo com a necessidade, como em services
function errorHandler(err, req, res, next) {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: statusCode,
        success: false,
        message: err.message || 'Erro interno no servidor'
    });
}

export default errorHandler