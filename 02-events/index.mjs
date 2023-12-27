import {EventEmitter} from "events";

const myEmitter = new EventEmitter()

myEmitter.on('timeout', (param) => {
    console.log(`timeout event ${param}`)
})

myEmitter.emit('timeout', 'hey!')