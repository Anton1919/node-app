const express = require('express')
const {
    getUsersHandler,
    getUserByIdHandler,
    postUsersHandler
} = require('../controllers/users')

const router = express.Router()

router.get('/', getUsersHandler)
router.post('/', postUsersHandler)
router.get('/:id', getUserByIdHandler)

module.exports = router

