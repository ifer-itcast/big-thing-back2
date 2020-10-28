const express = require('express');
const expressJoi = require('@escook/express-joi');
const router = express.Router();

const artcate_handler = require('../router_handler/artcate');
const { add_cate_schema } = require('../schema/artcate');

// 获取文章分类
router.get('/cates', artcate_handler.getArticleCates);

// 新增文章分类
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates);

module.exports = router;