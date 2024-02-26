import express from 'express';
import "express-async-errors";
import morgan from 'morgan';
const app = express();
const port = 3001;
app.use(morgan("dev"));
let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
app.get('/', (req, res) => {
    res.status(200).json(planets);
});
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
