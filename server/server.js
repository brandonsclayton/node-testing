
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    error: 'Page not found',
    name: 'App'
  });
});

// GET /users return
// Return array of user objects
// Give users a name prop and age prop
app.get('/users', (req, res) => {
  let users = [
    {
      name: 'Brandon',
      age: 31,
    }, {
      name: 'Melodie',
      age: 24,
    }
  ];

  res.status(200)
      .send(users);
})


app.listen(3000);

module.exports.app = app;
