const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

const persons = [
  { id: 'aa', name: 'Pavel', surname: 'Kepka', email: 'kepi@kepi.name' },
  { id: 'bb', name: 'Jana', surname: 'Kantorová', email: 'janca.kantoj@gmail.com' },
];

app.get('/api/persons', cors(), async (req, res, next) => {
  res.json(persons);
});

app.options('/api/persons', cors());

app.post('/api/persons', cors(), async (req, res, next) => {
  persons.push({
    ...req.body,
    id: String((new Date()).getTime()),
  });
  res.json({ success: true });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
