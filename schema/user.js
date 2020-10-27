const joi = require('@hapi/joi');

const username = joi.string().alphanum().min(1).max(10).required();
const password = joi.string().pattern(/^[\S]{6,12}$/).required();

const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();

// 登录和注册的校验规则
exports.reg_login_schema = {
    body: {
        username,
        password
    }
};

// 更新用户信息的规则
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email
    }
};