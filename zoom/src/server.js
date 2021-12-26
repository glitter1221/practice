import express from 'express';

const app = express();
const port = process.env.PORT | 3000;

app.listen(port).then(() => console.log(`server connected on ${port}!`));

console.log('hell0!');