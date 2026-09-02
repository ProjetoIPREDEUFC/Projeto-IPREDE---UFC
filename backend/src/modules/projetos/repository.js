import {db} from '../../configs/firestoreConfig.js';
import Projeto from "./model.js"

const collection = db.collection('projetos')

async function criar(data){
    
    //primeiro adiciona o documento no firestore
    const docRef = await collection.add(data.toFirestore());
    //depois pega a referencia do documento e retorna o documento para utilizar na resposta da requisição
    const savedDoc = await docRef.get();
    return Projeto.fromFirestore(savedDoc);
    
}


export {criar};