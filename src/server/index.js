const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getComments = (request, response) => {
  pool.query('SELECT * FROM comments', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addComment = (request, response) => {
  const { name, comment } = request.body;

  pool.query(
    'INSERT INTO comments (name, comment) VALUES ($1, $2)',
    [name, comment],
    error => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .json({ status: 'success', message: 'Comment added.' });
    }
  );
};

app
  .route('/comments')
  .get(getComments)
  .post(addComment);

app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening');
});
