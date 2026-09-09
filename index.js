import express from 'express'
import { buscarClientes } from './DAO/Buscas/buscar_cliente.js'
import { buscarLimite } from './DAO/Buscas/limiteCredito.js'
import { buscarEndereco } from './DAO/Buscas/endereco.js'
import { buscarProduto } from './DAO/Buscas/produto.js'
import { buscarPedido } from './DAO/Buscas/pedido.js'
import { buscarPedido_produto } from './DAO/Buscas/pedido_produto.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API rodando 🚀',
        rotas: ['/cliente', '/pedido', '/pedido_produto', '/produto', '/endereco', '/limiteCredito']
    })
})


app.get('/cliente', async (req, res) => {
    try {
        const clientes = await buscarClientes()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/pedido', async (req, res) => {
    try {
        const pedido = await buscarPedido()
        res.json(pedido)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/pedido_produto', async (req, res) => {
    try {
        const pedido_produto = await buscarPedido_produto()
        res.json(pedido_produto)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/produto', async (req, res) => {
    try {
        const produto = await buscarProduto()
        res.json(produto)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/endereco', async (req, res) => {
    try {
        const endereco = await buscarEndereco()
        res.json(endereco)
    } catch(erro) {
        res.status(500).json({ erro: 'Erro ao Listar clientes', detalhes: erro.message})
    }
}) 

app.get('/limiteCredito', async(req, res) => {
    try {
        const limiteCredito = await buscarLimite()
        res.json(limiteCredito)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar o limite de credito', detalhes: erro.message })
    }
})

app.listen(3000, () => {
  console.log('Server rodando: http://localhost:3000')
})
