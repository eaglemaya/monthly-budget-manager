const url = require('url');

class RedirectMiddleware {
  handleRequest(req, res, next) {
    // const token = req.query._token || null;
    // if (token) {
    //   const baseUrl = url.format({
    //     protocol: req.protocol,
    //     host: req.get('host')
    //   });
    //
    //   const urlObj = new url.URL(req.originalUrl, baseUrl);
    //   urlObj.searchParams.delete('_token');
    //   const redirectUrl = url.format(urlObj);
    //
    //   console.log('-- url to redirect to ---', redirectUrl);
    //   res.cookie('jwtToken' ,token);
    //   res.redirect(url.format(redirectUrl));
    //   return;
    // }
    next();
  }
}

module.exports = RedirectMiddleware;
