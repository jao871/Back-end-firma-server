import express from 'express'
import cors from 'cors'
import { buscarClientes } from '../DAO/Buscas/buscar_cliente.js'
import { buscarPedido_produto } from '../DAO/Buscas/pedido_produto.js'
import	{ buscarPedido } from '../DAO/Buscas/pedido.js'
import { buscarProduto } from '../DAO/Buscas/produto.js'
import { buscarLimite } from '../DAO/Buscas/limiteCredito.js'
import { buscarEndereco } from '../DAO/Buscas/endereco.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/cliente', async (req, res) => {
    try {
        const clientes = await buscarClientes()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/pedido_produto', async (req,res) => {
    try {
        const clientes = await buscarPedido_produto()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar pedido_produto', detalhes: erro.message })
    }
})

app.get('/pedido', async (req,res) => {
    try {
        const clientes = await buscarPedido()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar pedido', detalhes: erro.message })
    }
})

app.get('/produto', async (req,res) => {
    try {
        const clientes = await buscarProduto()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar produto', detalhes: erro.message })
    }
})

app.get('/limiteCredito', async (req,res) => {
    try {
        const clientes = await buscarLimite()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar limite de Credito', detalhes: erro.message })
    }
})


app.get('/endereco', async (req,res) => {
    try {
        const clientes = await buscarEndereco()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar Endereços', detalhes: erro.message })
    }
})




app.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000')
})