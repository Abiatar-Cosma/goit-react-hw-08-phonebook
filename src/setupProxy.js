const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/users',
    createProxyMiddleware({
      target: 'https://connections-api.goit.global/',
      changeOrigin: true,
    })
  );
  app.use(
    '/contacts',
    createProxyMiddleware({
      target: 'https://connections-api.goit.global/',
      changeOrigin: true,
    })
  );
};
