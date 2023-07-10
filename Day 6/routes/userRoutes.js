const express = require("express");
const router = express.Router();
const {getHome,getSignup, postSignup } = require('../controllers/userControllers')


router.get('/', getHome );

router.get('/signup', getSignup);

router.post('/signup',postSignup)

module.exports = router;
