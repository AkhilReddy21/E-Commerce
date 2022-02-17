const express = require('express');

const { addCategory, getCategories } = require('../controllers/category');
const { requireSignin, adminMiddleware } = require('../middleware');
const router = express.Router();

router.post('/category/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getcategories', getCategories);


module.exports = router;