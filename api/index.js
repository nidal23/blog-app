const express = require('express');
const app = express();

app.post('/register', (req, res) => {
    res.json('test ok')
})

app.listen(4000, () => {
    console.log('listening on port 4000')
})