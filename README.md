# node_playGround
This respo is a nodejs taster <br>
That uses http to build a server

## Express
- app.use 是 Express 的核心，用来处理全局逻辑，如：
  - 静态文件服务。
  - 全局中间件（如日志、身份验证）。
  - 未匹配路由（404）。
  - 错误处理。
- res.sendFile(path)
  -  express.static：用于定义一个目录，使其中的所有文件都能直接通过 URL 访问，适合处理大批量的静态文件。
  - res.sendFile：用于单独发送某个文件，适合动态路由中指定特定文件。

## EJS
```js
consr app = express()

// 设置 (固定写法)
app.set('view engine', 'ejs')
app.set('views', __dirname + "/templates") // 设置模版文件的存放位置



// 渲染
app.get('/', (req,res)=>{
  // 准备数据
const list = ['a', 'b', 'c']
  res.render(模版名称, 数据)
})
```

