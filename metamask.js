const gatherer = require('./')
const config = require('./config')

async function run() {
  return await gatherer(config)
}

run()
.then(console.dir)
.catch(console.error)
