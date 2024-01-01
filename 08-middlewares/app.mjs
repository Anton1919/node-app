import express from 'express'
import morgan from 'morgan'

const app = express()

const PORT = 8000

app.use(morgan('dev'))

app.use(express.json())

app.use((req, res) => {
    console.log(req.body)
    return res.send('This is Express server')
})

app.listen(PORT, () => console.log('Server started'))