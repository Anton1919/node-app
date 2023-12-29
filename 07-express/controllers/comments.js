const getCommentsHandler = (req, res) => {
    res.send('Comment route')
}
const postCommentsHandler = (req, res) => {
    res.send('Post comments route')
}
const getCommentByIdHandler = (req, res) => {
    res.send(`Comment by id №: ${req.params.id}`)
}
const deleteCommentByIdHandler = (req, res) => {
    res.send(`Comment deleted by id №: ${req.params.id}`)
}

module.exports = {
    getCommentsHandler,
    postCommentsHandler,
    getCommentByIdHandler,
    deleteCommentByIdHandler: deleteCommentByIdHandler
}