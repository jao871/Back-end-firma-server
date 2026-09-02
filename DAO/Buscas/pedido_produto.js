import { conexao } from "../conexao.js";

async function buscarPedido_produto() {
    console.log('DAO de Limite De Pedido_produtio')
        const sql6 = `SELECT * FROM Pedido_produto;`

        const conn6 = await conexao()
            try{                
                const [rows, fields] = await conn5.query(sql6);
                await conn6.end()
                return rows
            } catch(err) {
                return err.message
            }
}

export { buscarPedido_produto }