const debug =require('debug')('server:debug');
import config from 'config';
import express from 'express';
import path from 'path';

import books from './route/books.js';

const app = express();
const port = config.get('port');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());
app.use(express.json({ type: 'application/json'}));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/book', books);


app.listen(port, () => {
    debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
    console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
});

module.exports = app;
module.exports.port=config.get('port');