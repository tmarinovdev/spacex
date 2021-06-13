const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3001;

app.use(
  "/api_to_external",
  createProxyMiddleware({
    target:
      "https://api.spacexdata.com/v3/launches",
    headers: {
      accept: "application/json",
      method: "GET",
    },
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^/api_to_external': ''
    }
  })
);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});