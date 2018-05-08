const express = require('express');

const app = express();

const message = 'Hello , world!!!'

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "TestUserName"});
});

app.get('/sandbox', (req, res) => {
    res.render('sandbox', {"message" : message});
});

app.listen(3000, () => {
  console.log('The application is running on localhost: 3000');
});
