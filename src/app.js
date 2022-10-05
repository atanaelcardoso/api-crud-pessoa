import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import router from './routes/index.js'
app.use(router);

// insonia app que ele usa
// cors forma de seguransa , npm i cors -s, npm i https -s,npm i fs -s
//estatus de seguranca 'https://pt.rakko.tools/tools/46/' dendro dele ele fez as pasta cors, https ,fs
app.listen(3000, () => console.log("Api Rodando."))

https.createServer({
  cert: fs.readFileSync('src/SSL/code.crt'),
  key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () => console.log("Rodando em https"));
