import express from 'express';
const app = express();
import { data } from './secure/app';
import * as path from 'path';

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public"));

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(__dirname, "public/home.pug");
})

app.listen(data[0].port, () => {
    console.log(`Your server is running on ${data[0].port}`)
})