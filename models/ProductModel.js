const mysql = require('mysql2/promise')

module.exports = {
    async execute(query, params = []) {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        return await connection.execute(query, params)
    },
    async getAllProducts() {
        const [rows] = await this.execute('SELECT * FROM products')
        return rows
    }
}
