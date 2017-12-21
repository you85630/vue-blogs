const mongoose = require('mongoose')
const db = mongoose.connection

const topNavSchema = new mongoose.Schema({
  title: String,
  link: String
})

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/nodeDemo', {
  useMongoClient: true
})

db.on('error', () => {
  console.log('数据库连接出错')
})

db.once('open', () => {
  console.log('数据库已连接')
})

const Model = {
  topNav: mongoose.model('topNav', topNavSchema)
}

module.exports = Model
