const Pool = require("pg").Pool

// Connecting the db
const pool = new Pool({
    username: "postgres",
    password: "0000",
    host: "localhost",
    port: 5432,
    database: "tododb"
})

module.exports = pool;