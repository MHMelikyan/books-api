const express = require('express')
const mongoose = require('mongoose')
const booksRouter = require('./controller/books')
require('dotenv').config()
const app = express()

//middleware
app.use(express.json())
app.use('/books', booksRouter)
//route 1
app.get('/', (req,res)=>{
    res.send('Hello World')
})
app.get('/books', (req, res) => {
    res.send('Books Page')
  })

//conection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>console.log('DB connected'))
 .catch(err =>console.error(err));
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log( `listening on port ${PORT}`))
