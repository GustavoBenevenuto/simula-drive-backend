import dotenv from 'dotenv';
import 'reflect-metadata'; // Usa por causa dos decorators
import express,{Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import routes from './routes';
import './database';
import AppError from './errors/AppError';

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes);

app.use((erro: AppError, request : Request,  response : Response, next : NextFunction) => {
    // Quer dizer que o erro foi originado pelo AppError, então é um erro que já conhecemos
    if(erro instanceof AppError){
        return response.status(erro.statusCode).json({
            status: 'Erro',
            message: erro.mensagem,
        });
    }
    
    // A partir daqui é um erro desconhecido, que será necessário o uso do console para poder identificar
    console.error(erro);
    
    return response.status(500).json({
        status : 'Erro',
        message: 'Erro interno no serviror',
    })
});

app.listen(3333, () => {
    console.log(' ');
    console.log('Servidor rodando... 🚀');
    console.log('http://localhost:3333/');
    console.log(' ');
});