import stream from "stream";
import fs from 'fs'

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase()
        console.log(upperCased)
        cb(null, upperCased)
    }
})

const reverseStrStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const reversedStr = chunk.toString().split('').reverse().join('')
        console.log(reversedStr)
        cb(null, reversedStr)
    }
})

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseStrStream)
    .pipe(process.stdout)
