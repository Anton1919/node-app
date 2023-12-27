import fs from 'fs'
import path from 'path'

if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as arguments')
    process.exit(0)
}

const fileName = process.argv[2]
const linesQty = parseInt(process.argv[3])

if (isNaN(linesQty)) {
    console.log('Lines qty must be a number')
    process.exit(0)
}

const writeStream = fs.createWriteStream(path.join('./files', fileName))

for (let i = 1; i <= linesQty; i++) {
    writeStream.write(`Line number ${i}\n`)
}

writeStream.end(() => console.log('End program'))