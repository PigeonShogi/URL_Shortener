const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('URL', urlSchema)