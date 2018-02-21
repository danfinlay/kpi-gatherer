const cheerio = require ('cheerio')

const stats = [
  {
    name: 'Chrome install count',
    url: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?authuser=2',
    selector: 'noscript',
    cleanup: (page) => {
      const selector = 'span.e-f-ih'
      console.log(`chrome parsed internal html: ${page}`)
      const $ = cheerio.load(page)
      console.log('chrome cleanup ' + $.text())
      const value = $(selector).text()
      console.log('chrome value ' + value)
      const result = parseInt(value.replace(',', ''))
      return result
    },
  },
  {
    name: 'Firefox install count',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/',
    selector: '#react-view > div > div > div > div > div.Addon-header-wrapper > section.Card.Addon-header-meta-and-ratings.Card--photon.Card--no-header.Card--no-footer > div > div > div > dl:nth-child(1) > dd<Paste>',
    cleanup: (value) => {
      if (!value) return value
      const result = parseInt(value.replace(',', ''))
      return result
    },
  },
	{
		name: 'Opera install count',
		url: 'https://addons.opera.com/en/extensions/details/metamask/',
		selector: '#main > div > div > section > dl > dd:nth-child(2)',
    cleanup: (value) => {
      console.log('opera cleaning up ', value)
      const result = parseInt(value.replace(',', ''))
      return result
    },
	},
]

module.exports = stats
