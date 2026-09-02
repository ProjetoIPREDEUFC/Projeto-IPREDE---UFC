import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

// Lê o arquivo JSON de credenciais (compatível com o padrão ES Modules)
const serviceAccount = JSON.parse(
    fs.readFileSync(new URL('./firebase-key.json', import.meta.url))
);

const app = initializeApp({
    credential: cert(serviceAccount)
});

export const db = getFirestore(app);