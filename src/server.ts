import express from 'express';
const app = express();
import { data } from '../secure/app';
import * as path from 'path';
import cors from 'cors';

app.use(cors());

app.set("views", path.join(__dirname, "./public"));
app.set("view engine", "pug");

app.use('/public', express.static(__dirname + "/public"));

app.get('/', (req: express.Request, res: express.Response) => {
    res.render('home');
})

app.listen(data[0].port, () => {
    console.log(`Your server is running on ${data[0].port}`);
    console.log(`http://localhost:${data[0].port}`)
})