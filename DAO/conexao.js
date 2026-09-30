import mysql from 'mysql2/promise'

async function conexao() {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'firma_db'
    })
}

export { conexao }