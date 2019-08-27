
console.log("");
console.log("-- Starting Demux --")
console.log("");

const massive = require("massive")
//const { massive } = require("demux-postgres")
const { BaseActionWatcher } = require("demux")
const { MassiveActionHandler } = require("demux-postgres")
const { NodeosActionReader } = require("demux-eos")

const handlerVersions = require("./handlerVersions")
const migrationSequences = require("./migrationSequences")

console.log(migrationSequences);

const dbConfig = {
    host: '127.0.0.1',
    port: 5432,
    database: 'enterprise',
    user: 'postgres',
    password: 'docker'
}

massive(dbConfig).then((db) => {
    const actionReader = new NodeosActionReader("http://localhost:8888", 0)
    const actionHandler = new MassiveActionHandler(
        handlerVersions,
        db,
        migrationSequences,
        { dbSchema: "public" }
    )
    const actionWatcher = new BaseActionWatcher(actionReader, actionHandler, 500)
    actionWatcher.watch()
})