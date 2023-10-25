import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(8001, () => {
    console.log("Server is hosted at port 8001")
})