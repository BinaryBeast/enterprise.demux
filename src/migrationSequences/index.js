const { Migration } = require('demux-postgres')

const createTables = new Migration(
    "createTables", // name
    "public", // schema
    "migrationSequences/createTables.sql", // SQL file
)
  
module.exports = [{
    migrations: [createTables],
    sequenceName: "init"
}]