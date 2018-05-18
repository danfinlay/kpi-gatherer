const gatherer = require('./')
const config = require('./config')

async function run() {
  return await gatherer(config)
}

run()
.then((results) => {
  console.dir(results)
  return results
})
.then((results) => {
  const total = results.reduce((total, item) => {
    total += item.value
    return total
  }, 0)
  console.dir(`Total: ${total}`)
})
.catch(console.error)
