import dotenv from 'dotenv'

const result = dotenv.config();

const requiredEnv = [
    'FIREBASE_CONFIGURATION',
];

requiredEnv.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`MISSING KEY: ${key}`);
    }
});