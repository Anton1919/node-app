const express = require('express')
const {
    deleteCommentByIdHandler,
    getCommentByIdHandler,
    postCommentsHandler,
    getCommentsHandler
} = require('../controllers/comments')

const router = express.Router()

router.get('/', getCommentsHandler)
router.post('/', postCommentsHandler)
router.get('/:id', getCommentByIdHandler)
router.delete('/:id', deleteCommentByIdHandler)

module.exports = router

