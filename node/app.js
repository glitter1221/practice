const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded( { extended: false }));

const database = [
    { id: 1, title: '글1' },
    { id: 2, title: '글2' },
    { id: 3, title: '글3' },
]

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/vies/index.html'));
});

app.get('/database', function(req, res) {
    res.send(database);
});

app.get('/database:id', function(req, res) {
    const id = req.params.id; // 웹에서 호출해온 데이터이기 때문에 string
    const data = database.find((findId) => findId.id === Number(id));
    res.send(data);
});

app.post('/database', function(req, res) {
    const title = req.body.title;
    database.push({
        id: database.length + 1,
        title
    });
    res.send('추가가 완료되었습니다.');
});

app.put('/database', function(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    database[id - 1].title = title;
    res.send('변경이 완료되었습니다.');
});

app.delete('/database:id', function(req, res) {
    const id = req.params.id;
    database.splice(id - 1, 1);
    res.send('삭제가 완료되었습니다.');
});

app.listen(port, () => {
    console.log(`connected on ${port}!`);
});