const http = require('http')
const {getComments, getHome, getHtml, postComment, notFoundPage} = require('./handlers')

const PORT = 8000

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res)
    }
    if (req.method === 'GET' && req.url === '/html') {
        return getHtml(req, res)
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res)
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res)
    }

    notFoundPage(req, res)
})

server.listen(PORT, () => {
    console.log('listen successful')
})