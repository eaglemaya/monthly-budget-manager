const routes = require('next-routes');

const pageNameConfig = require('./serverConfig/pageNameConfig');

const paths = routes()
/**
 * (name, pattern, page) whereas page is the folder path under pages folder
 */
// home page
  .add(pageNameConfig.SITE_INDEX_INDEX, '/', 'home')
module.exports = paths;
