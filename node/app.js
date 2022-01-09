const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2/promise');

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