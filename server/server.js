const express = require('express');
const mongoose = require('mongoose');

const app = new express();
const PORT = 9093;
const DB_url = 'mongodb://127.0.0.1:27017/talk';

mongoose.connect(DB_url);
mongoose.connection.on('connected', (err, doc) => {
  console.log(`mongodb 数据库已经连接， 地址为${DB_url}`);
});

const User = mongoose.model('user', new mongoose.Schema({
  name: { type: String, require: true },
  age: { type: Number, require: true }
}));

/*创建数据*/
// User.create({ name: 'ly', age: 18 }, (err, doc) => {
//   if (err) return console.error(err);
//   else console.log(doc);
// });

/*删除数据*/
// User.remove({}, () => {
//   console.log('delete success');
// });

/*查找全部，find返回一个数组，所有符合条件的数据都查出来*/
// User.find({ name: 'ly' }, (err, doc) => {
//   if (err) return console.error(err);
//   else console.log(doc);
// });

/*查找一个，findOne返回第一个符合条件的数据，格式为Object*/
// User.findOne({ name: 'ly' }, (err, doc) => {
//   if (err) return console.error(err);
//   else console.log(doc);
// });

/*更新*/
// User.update({ name: 'ly' }, { age: 22 }, (err, doc) => {
//   if (err) return console.error(err);
//   else console.log(doc);
// });

app.get('/', (req, res) => {
  res.send('<h1>home world</h1>');
});

app.get('/api/data', (req, res) => {
  User.findOne({}, (err, doc) => {
    if (err) return console.error(err);
    else res.json(doc);
  });
});

app.listen(PORT, () => {
  console.log(`打开浏览器，访问 localhost:${PORT}`);
});