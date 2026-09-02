/*
import dotenv from 'dotenv'

const result = dotenv.config();

const requiredEnv = [
    'GOOGLE_APPLICATION_CREDENTIALS',
];

requiredEnv.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`MISSING KEY: ${key}`);
    }
});
*/

//Arquivo criado na abordagem inicial de usar firebase-key como .env, entretanto optamos por utilizar diretamente na pasta por meio de fs,
//Será utilizado posteriormente quando começarmos a utilizar .env