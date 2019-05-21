const express = require('express');
const cors = require('cors');

const app = express();

const persons = [
  { id: 'aa', name: 'Pavel', surname: 'Kepka', email: 'kepi@kepi.name' },
  { id: 'bb', name: 'Jana', surname: 'Kantorová', email: 'janca.kantoj@gmail.com' },
];

app.get('/api/persons', cors(), async (req, res, next) => {
  res.json(persons);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
