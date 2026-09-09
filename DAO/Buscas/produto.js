import { conexao } from "../conexao.js";

async function buscarProduto() {
    console.log('DAO de Limite De Produto')
        const sql4 = `SELECT * FROM Produto;`

        const conn4 = await conexao()
            try{                
                const [rows, fields] = await conn4.query(sql4);
                await conn4.end()
                return rows
            } catch(err) {
                return err.message
            }
}

export { buscarProduto }