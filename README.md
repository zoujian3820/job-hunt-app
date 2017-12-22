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