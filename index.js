
const express = require('express');
const path = require('path');


const app = express();
app.set('view engine', 'ejs')
app.set('views', __dirname + '/public')

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index', { title: 'index' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'about' })
})
app.get('/contact_me', (req, res) => {
  res.render('contact_me', { title: 'contact-me' })
})
app.use((req, res) => {
  res.status(404).render('404', { title: "404" })

})
// // 路由定义
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/contact_me', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'contact_me.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// // 404 页面
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
// });

// 启动服务器
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
