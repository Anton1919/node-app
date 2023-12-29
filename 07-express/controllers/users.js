const getUsersHandler = (req, res) => {
    res.send(`Get users`)
}

const postUsersHandler = (req, res) => {
    res.send('Post users route')
}

const getUserByIdHandler = (req, res) => {
    res.send(`User by id №: ${req.params.id}`)
}

module.exports = {
    getUsersHandler,
    postUsersHandler,
    getUserByIdHandler
}