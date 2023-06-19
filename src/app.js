const express = require("express")
const app = express()
const port = 3000

// database
const { db } = require('./utils/database')
// db.authenticate()
//   .then(() => console.log('Database Conectada!'))
//   .catch(err => console.log(err))

db.sync()
    .then(() => {
        console.log('Database synced')
    })
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('helllo word')
})
app.listen(8000, () => {
    console.log("server started at port 8000")
})