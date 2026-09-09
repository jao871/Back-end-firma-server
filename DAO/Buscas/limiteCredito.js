import { conexao } from "../conexao.js";

async function buscarLimite() {
    console.log('DAO de Limite De Creditos')
        const sql2 = `SELECT * FROM LimiteDeCredito;`

        const conn2 = await conexao()
            try{                
                const [rows, fields] = await conn2.query(sql2);
                await conn2.end()
                return rows
            } catch(err) {
                return err.message
            }
}

export { buscarLimite }