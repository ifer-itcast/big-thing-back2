const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({
    extended: false
}));

// 统一响应
app.use((req, res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        });
    };
    next();
});

const userRouter = require('./router/user');
app.use('/api', userRouter);

app.listen(3007, () => console.log('api server running at http://127.0.0.1:3007'));