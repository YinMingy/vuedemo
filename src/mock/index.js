const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/todo/todolists', 'get', require('./json/todolist'));
Mock.mock('/user/userInfo','get',require('./json/login_form'));
