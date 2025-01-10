
const express = require('express');
const path = require('path');

const app = express();

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 路由定义
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact_me', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact_me.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// 404 页面
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 启动服务器
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
