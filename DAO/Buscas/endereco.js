import { conexao } from "../conexao.js";

async function buscarEndereco() {
    console.log('DAO de Endereço')
        const sql3 = `SELECT * FROM Endereco;`

        const conn3 = await conexao()
            try{                
                const [rows, fields] = await conn3.query(sql3);
                await conn3.end()
                return rows
            } catch(err) {
                return err.message
            }
}

export { buscarEndereco }