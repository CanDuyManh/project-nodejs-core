const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

app.use(morgan('dev'));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());

app.use('/static', express.static(path.join(__dirname, '/public')));

// app.use('/v1', routesV1);

/**
 * @api {get} /user/:id Request User information
 * @apiName demo api doc
 * @apiGroup Nothing
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})