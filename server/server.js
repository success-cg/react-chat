const express = require('express');
const userRouter = require('./user.js');

const app = express();
const PORT = 9093;


app.get('/', (req, res) => {
  res.send('<h1>home world</h1>');
});

// 设置前缀/user
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`打开浏览器，访问 localhost:${PORT}`);
});