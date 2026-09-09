import { conexao } from "../conexao.js";

async function buscarPedido() {
    console.log('DAO de Limite De Pedido')
        const sql5 = `SELECT * FROM Pedido;`

        const conn5 = await conexao()
            try{                
                const [rows, fields] = await conn5.query(sql5);
                await conn5.end()
                return rows
            } catch(err) {
                return err.message
            }
}

export { buscarPedido }