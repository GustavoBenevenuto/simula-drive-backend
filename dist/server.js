"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata"); // Usa por causa dos decorators
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = __importDefault(require("./routes"));
require("./database");
var AppError_1 = __importDefault(require("./errors/AppError"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(function (erro, request, response, next) {
    // Quer dizer que o erro foi originado pelo AppError, então é um erro que já conhecemos
    if (erro instanceof AppError_1.default) {
        return response.status(erro.statusCode).json({
            status: 'Erro',
            message: erro.mensagem,
        });
    }
    // A partir daqui é um erro desconhecido, que será necessário o uso do console para poder identificar
    console.error('💣💣 ERRO 💣💣');
    console.error(erro);
    return response.status(500).json({
        status: 'Erro',
        message: 'Erro interno no serviror',
    });
});
app.listen(process.env.PORT || 3333, function () {
    console.log(' ');
    console.log('Servidor rodando... 🚀');
    console.log('http://localhost:3333/');
    console.log(' ');
});
