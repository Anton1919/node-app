const {comments} = require('./data')
const fs = require('fs')
const qs = require('querystring')

const getHome = (req, res) => {
    fs.readFile('./files/comment-form.html', (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader("Content-Type", 'text/plain')
            res.end('Server error while loading HTML file')
        } else {
            res.statusCode = 200
            res.setHeader("Content-Type", 'text/html')
            res.end(data)
        }
    })
}

const getHtml = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1>Hello html page !</h1>')
    res.write('</div></body></html>')
    res.end()
}

const getComments = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(comments))
}

const postComment = (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            try {
                const comment = qs.parse(body)
                comments.push(comment)
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.write('<h1>Comment received</h1>')
                res.write('<a href="/">Submit one more</a>')
                res.end()
            } catch (e) {
                res.statusCode = 400
                console.log('Invalid Form data')
            }
        })

    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = ''

        req.on('data', (chunk) => {
            return commentJSON += chunk
        })
        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON))
                res.statusCode = 200
                res.end('Comment received')
            } catch (e) {
                res.statusCode = 400
                res.end('Invalid JSON')
            }
        })
    } else {
        res.statusCode = 400
        res.end('Data must be in JSON format or as Form')
    }
}

const notFoundPage = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1>Not found page !</h1>')
    res.write('</div></body></html>')
    res.end()
}

module.exports = {
    getHome,
    getHtml,
    getComments,
    postComment,
    notFoundPage
}