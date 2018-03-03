const cheerio = require ('cheerio')

const stats = [
  {
    name: 'Chrome install count',
    url: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?authuser=2',
    selector: 'noscript',
    cleanup: (page) => {
      const selector = 'span.e-f-ih'
      const $ = cheerio.load(page)
      const value = $(selector).text()
      const result = parseInt(value.replace(/,/g, ''))
      return result
    },
  },
  {
    name: 'Firefox install count',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/',
    selector: '.MetadataCard-content',
    cleanup: (value) => {
      if (!value) return value
      const result = parseInt(value.replace(/,/g, ''))
      return result
    },
  },
  {
    name: 'Opera install count',
    url: 'https://addons.opera.com/en/extensions/details/metamask/',
    selector: '#main > div > div > section > dl > dd:nth-child(2)',
    cleanup: (value) => {
      const result = parseInt(value.replace(/,/g, ''))
      return result
    },
	},
]

module.exports = stats
