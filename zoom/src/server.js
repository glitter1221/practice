import express from 'express';

const app = express();
const port = process.env.PORT | 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));

app.listen(port).then(() => console.log(`server connected on ${port}!`));

console.log('hell0!');