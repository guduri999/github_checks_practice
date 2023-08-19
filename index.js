var express = require('express')
var app = express();

app.get('/', (req, res) => {
    res.json({ response: "index route response" })

})

app.get('/one', (req, res) => {
    res.json({ response: "first route" })
})

app.listen(8000, () => { console.log("port is running in 8000") })