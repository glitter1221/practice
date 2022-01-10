const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2/promise');

const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { validUser } = require('./middleware/auth.js');
const database = require('./database.js');

const port = process.env.PORT || 3000;
let connection;

app.use(express.json());
app.use(express.urlencoded( { extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/vies/index.html'));
});

app.get('/database', async function(req, res) {
    const [rows, fields] = await connection.execute('select * from user');
    res.send(rows);
});

app.get('/database:id', async function(req, res) {
    const id = req.params.id; // 웹에서 호출해온 데이터이기 때문에 string
    const [rows, fiels] = await connection.execute('select * from user where id=?', [id]);
    res.send(rows);
});

app.post('/database', async function(req, res) {
    const [name, age] = req.body;
    const [rows, fields] = await connection.execute(`insert into user(name, age) values (?, ?)`, [name, age]);
    //?,? : prepare statement
    res.send('추가가 완료되었습니다.');
});

app.put('/database', async function(req, res) {
    const [id, name, age] = req.body;
    const [rows, fields] = await connection.execute(`update user set name=?, age=? where id=?`, [name, age, id]);
    res.send('변경이 완료되었습니다.');
});

app.delete('/database:id', function(req, res) {
    const id = req.params.id;
    const [rows, fields] = await connection.execute(`delete from user where id=?`, [id]);
    res.send('삭제가 완료되었습니다.');
});

app.listen(port, async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'myapp',
        password: '1111'
    });

    console.log(`connected on ${port}!`);
});

//user

app.use(cookieParser());

app.get('/users', (res, req) => {
    res.send(database);
});

app.get('/secure_data', validUser, (req, res) => {
    res.send('인증된 사용자만 볼 수 있는 API');
});

app.get('/test', validUser, (req, res) => {
    res.send('인증된 사용자만 볼 수 있음');
});

app.post('signup', async (res, req) => {
    const { username, password, age, birthday } = req.body;
    const hash = await argon2.hash(password);
    database.push({
        username,
        password: hash,
        age,
        birthday
    });
    console.log("추가가 완료되었습니다.");
});

app.post('/login', async (res, req) => {
    const {username, password } = req.body;
    const user = database.filter((user) => {
        return user.username === username;
    });
    if (user.length === 0) {
        res.status(403).send('해당 id가 없습니다.');
    };

    if (!(await argon2.verify(user[0].password, password))) {
        res.status(403).send('패스워드가 틀렸습니다');
    };

    const access_token = jwt.sign({ username }, 'secure');
    console.log(`access token = ${access_token}`);

    res.cookies('access_token', access_token, {
        httpOnly: true
    });

    res.send('로그인 성공!');
});

