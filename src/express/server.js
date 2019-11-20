const express = require('express');
const app = express();
const users = require('../mock/json/login_form.json');
const todolists = require('../mock/json/todolist');

app.get('/', (req, res) => {
    res.end('Hello World!');
});
// 获取所有todolists
app.get('/api/todolists', (req, res) => {
    res.json(todolists).end();
});
//获取所有账户
app.get('/api/users', (req, res) => {
    res.json(users).end();
});
//获取特定用户名
app.get('/api/users/:username', (req, res) => {
    let user = users.valueOf(b => b.username === parseInt(req.params.username));
    if(!user) return res.status(404).json({msg: 'The user with the given account not find.'});
    res.send(user).end();
});

const server = app.listen(8090, function() {
    console.log('Listening on port %d', server.address().port);
});
