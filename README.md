## react-router+redux开发的招聘求职webApp
`cnpm install -g create-react-app --save`<br>
`create-react-app myAppName`<br>
`npm run eject 弹出webpack自定义配置,注意是不可逆的`<br>
`cnpm install express --save`<br>
`cnpm install -g nodemon 安装后台自动重启服务工具`

### mongodb安装
###### 官网下载后，直接点击安装，安装路径F:\mongodb\
`F:\mongodb\bin\mongod.exe`<br>
 `mongod -dbpath "F:\mongodb\data\db"`<br>
 `F:\mongodb\data\db\log\MongoDB.log 建一个空文件MongoDB.log 作日志输出文件`<br>
 `mongod --config "F:\mongodb\mongo.conf"`<br>
 `mongod --config "F:\mongodb\mongo.conf" --install --serviceName "MongoDB"`<br>
` net start MongoDB `

###### mongo.conf配置文件：
`dbpath=F:\mongodb\data #数据库路径`<br>
`logpath=F:\mongodb\data\db\log\MongoDB.log #日志输出文件路径`<br>
`logappend=true #错误日志采用追加模式`<br>
`journal=true #启用日志文件，默认启用`<br>
`quiet=true #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false`<br>
`port=27017 #端口号 默认为27017`

###### npm --save || --save-dev
`cnpm install antd-mobile@next --save-dev`<br>
`cnpm install cookie-parser --save      express插件 基于cookie用户验证，express依赖cookie-parser 解析cookie`<br>
`cnpm install body-parser --save        express插件 解析post请求过来的json`<br>
`cnpm install prop-types  --save        react v15.5.0版本开始,参数校验库分离成单独库了`<br>
`cnpm install browser-cookies --save    在浏览器客户端管理cookie的插件`<br>
`cnpm install socket.io --save           socket.io基于 WebSocket 的 C-S 服务器端实时通信库`<br>
`cnpm install socket.io-client --save    socket.io基于 WebSocket 的 C-S 浏览器客户端实时通信库`<br>

###### emoji表情包
`src/component/chat/chat-icon-img.js 用img图片做emoji表情版本，chat.js用的是纯emoji做表情,
要看img表情包版本，直接把chat-icon-img.js改成chat.js，原先的chat.js先改其他名，免文件冲突
src/index-icon-img.css 改成 index.css,原生index.css和上面一致
然后直接运行即可`<br>

##### 项目运行 npm start