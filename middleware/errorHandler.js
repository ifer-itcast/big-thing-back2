const joi = require('@hapi/joi');
module.exports = (err, req, res, next) => {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err);
    // token 解析失败
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！');
    // 未知错误
    res.cc(err);
}