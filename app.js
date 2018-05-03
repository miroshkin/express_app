const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('It is time to get an extra mile!');
});

app.listen(3000);
