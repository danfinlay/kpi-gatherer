const request = require('request-promise')
const cheerio = require ('cheerio')

module.exports = async function (config) {

	const results = await Promise.all(config.map(promiseFromConfig))
	return results

}

function promiseFromConfig(config) {
	return request(config.url)
	.then((page) => {
		if ('selector' in config) {
			const $ = cheerio.load(page)
			const result = $(config.selector).html()
			return result
		}
		return page
	})
	.then((page) => {
		if ('cleanup' in config) {
			const result = config.cleanup(page)
			return result
		}
		return page
	})
	.then((result) => {
		return {
			name: config.name,
			value: result,
    }
	})
}

