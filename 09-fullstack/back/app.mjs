import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

const PORT = 8000

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const personData = {
    name: 'Anton',
    isDeveloper: true,
    id: 1
}

app.use((req, res) => {
    console.log(req.body)
    return res.json(personData)
})

app.listen(PORT, () => console.log('Server started'))