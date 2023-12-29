const express = require('express')
const commentsRouter = require("./comments");
const usersRouter = require("./users");
const rootRouter = require('./root')

const router = express.Router()

router.use('/comments', commentsRouter)
router.use('/users', usersRouter)
router.get('/', rootRouter)

module.exports = router