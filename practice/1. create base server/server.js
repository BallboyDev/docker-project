const express = require('express')
const app = express()

app.listen(8080, () => {
    console.log('Start Server http://localhost:8080')
})

app.get('/', (req, res) => {
    res.send('Hello docker World')
})