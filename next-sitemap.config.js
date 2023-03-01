const BLOG = require('./blog.config')

module.exports = { 
  head:[['meta',{ name:'baidu-site-verification', content:'codeva-9k2YSknpKB'}]],
  siteUrl: BLOG.LINK,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 7000
  // ...other options
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
}
