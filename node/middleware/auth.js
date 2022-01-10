const jwt = require('jsonwebtoken');
const database = require('../database.js');

const validUser = (res, req, next) => {
    const { access_token } = req.cookie;
    if (!access_token) {
        res.status(401).send('access token이 없습니다.');
    }

    try {
        const decoded = jwt.verify(access_token, 'secure');
        console.log(`decoded = ${decoded}`);
        const userInfo = database.find((data) => data.username === username);
        console.log(`userInfo = ${userInfo}`);
        if (!userInfo) {
            throw '유효한 access token이 아닙니다.';
        }

        next();
    } catch (err) {
        res.status(401).send('유효한 access token이 아닙니다.');
    }
};