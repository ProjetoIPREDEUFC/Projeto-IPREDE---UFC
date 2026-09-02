import { Timestamp } from 'firebase-admin/firestore';
class Projeto {
    constructor({ id, nome, descricao, data_inicio, data_final, status, orcamento_previsto, orcamento_real, id_setor, id_lider }) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.data_inicio = data_inicio instanceof Timestamp ? data_inicio : Timestamp.fromDate(new Date(data_inicio));
        this.data_final = data_final instanceof Timestamp ? data_final : Timestamp.fromDate(new Date(data_final));
        this.status = status
        this.orcamento_previsto = orcamento_previsto
        this.orcamento_real = orcamento_real ?? 0
        this.id_setor = id_setor
        this.id_lider = id_lider
    }
    //função para enviar pro firestore, sem o id, já que o firestore que cria o id
    toFirestore() {
        return {
            nome: this.nome,
            descricao: this.descricao,
            data_inicio: this.data_inicio,
            data_final: this.data_final,
            status: this.status,
            orcamento_previsto: this.orcamento_previsto,
            orcamento_real: this.orcamento_real,
            id_setor: this.id_setor,
            id_lider: this.id_lider
        }
    }
    //função que retorna em json, essa função foi feita exclusivamente só pra poder devolver pro front a data legivel, pois se não, o express mandava até o nanosseconds
    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            data_inicio: this.data_inicio.toDate().toISOString(),
            data_final: this.data_final.toDate().toISOString(),
            status: this.status,
            orcamento_previsto: this.orcamento_previsto,
            orcamento_real: this.orcamento_real,
            id_setor: this.id_setor,
            id_lider: this.id_lider
        };
    }
    //função para receber do firestore, no qual tem que puxar o id do snapshot
    static fromFirestore(docSnapshot) {
        const data = docSnapshot.data();
        return new Projeto({ id: docSnapshot.id, ...data });
    }
}

export default Projeto;