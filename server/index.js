const debug =require('debug')('server:debug');
import config from 'config';
import express from 'express';
import path from 'path';

const app = express();
const port = config.get('port');

app.use(express.static(path.join(__dirname, '../dist')));
app.listen(port, () => {
    debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
    console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
});

module.exports.port=config.get('port');