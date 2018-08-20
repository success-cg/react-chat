const mongoose = require('mongoose');
const DB_url = 'mongodb://127.0.0.1:27017/talk';

mongoose.connect(DB_url);
mongoose.connection.on('connected', (err, doc) => {
  console.log(`mongodb 数据库已经连接， 地址为${DB_url}`);
});
