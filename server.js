const express = require('express');
const path = require('path');
const next = require('next');
const bodyParser = require('body-parser');
const compression = require('compression');
const expressWinston = require('express-winston');
const useragent = require('express-useragent');

const routes = require('./server/routes');
const Api = require("./server/api");

const expressWinstonAccessLogConfig = require('./server/serverConfig/expressWinstonAccessLogConfig');
const expressWinstonErrorLogConfig = require('./server/serverConfig/expressWinstonErrorLogConfig');
const RedirectMiddleware = require('./server/middlewares/RedirectMiddleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();
    server.use(expressWinston.logger(expressWinstonAccessLogConfig));
    server.use(compression());
    server.use(useragent.express());
    server.enable('trust proxy');
    server.use(bodyParser.json());
    server.use(express.static(path.join(__dirname, 'public')));

    server.use(Api);

    server.use((req, res, next) => {
      const redirectMiddleware = new RedirectMiddleware();
      redirectMiddleware.handleRequest(req, res, next);
    });

    server.use(handler);

    server.use(expressWinston.errorLogger(expressWinstonErrorLogConfig));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
