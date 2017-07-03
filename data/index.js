const { readFileSync } = require('fs');
module.exports = (() => require('./webpages').map(({ title, url, short_description, content_cache }) => ({
  title,
  url,
  short_description,
  content : readFileSync(`./data/pages/${content_cache}`, { encoding : 'utf8' })
})))();
