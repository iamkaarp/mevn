const debug =require('debug')('server:debug');
import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import book from './route/book.js';

const app = express();
const port = config.get('port');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.use(express.static(path.join(__dirname, '../dist')));

app.route('/book')
    .get(book.getBooks);
app.route('/book/:id')
    .get(book.getBook);

app.listen(port, () => {
    debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
    console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
});

module.exports = app;
module.exports.port=config.get('port');