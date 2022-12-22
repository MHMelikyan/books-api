const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({

 "id": Number,
 "title": String,
 "description": String,
 "year": Number,
 "quantity": String,
 "imageURL": String
      
    
})

module.exports = mongoose.model('Books', booksSchema)