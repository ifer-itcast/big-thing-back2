const express = require('express');
const cors = require('cors');
const app = express();
const expressJWT = require('express-jwt');
const config = require('./config');

// #1 跨域处理
app.use(cors());

// #2 解析 POST 请求
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// #3 统一响应，优化 res.send
app.use(require('./middleware/optimizeSend'));

// #4 解析 token
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }));

// !#5 自己设计接口
app.use('/api', require('./router/user'));
app.use('/my', require('./router/userinfo'));

// #6 错误处理
app.use(require('./middleware/errorHandler'));

app.listen(3007, () => console.log('api server running at http://127.0.0.1:3007'));