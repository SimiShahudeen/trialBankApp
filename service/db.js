const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trialDataBase', { useNewUrlParser: true})
const Trial = mongoose.model("Trial", {
  acno: Number,
  psw: String
})

module.exports = {
  Trial
}