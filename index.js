const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const routes = {
    '/': 'index.html',
    '/contact_me': 'contact_me.html',
    '/about': 'about.html',
  };

  const fileName = routes[req.url] || '404.html'; // 如果路径不存在，使用 404 页面
  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    } else {
      res.statusCode = fileName === '404.html' ? 404 : 200; // 根据文件是否是 404.html 设置状态码
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(8080, () => console.log('Server is running on port 8080'));
