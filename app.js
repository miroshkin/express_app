const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const message = 'Hello , world!!!'
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.render(hello, {name: req.body.username});
});

app.listen(3000, () => {
  console.log('The application is running on localhost: 3000');
});
