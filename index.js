// install express js
import express from "express";
import { json } from "express/lib/response";
const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello viewers');
})

app.post('/', (req, res) => {
    const body = req.body;
    res.send("post request" + JSON.stringify(body));
})

app.listen(port, () => {
    console.log("Listen to port" + port);
})