const express = require('express');
const cluster = require('cluster');
const {
    cpus
} = require('os');
const process = require('process');
console.log(cpus().length);

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        //event loop is blocked. ..
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(9000);
    res.send(`Ding ding ding ${process.pid}`);
});

console.log('Running server.js...');
console.log(`Worker process started ${process.pid}`);
app.listen(3000);