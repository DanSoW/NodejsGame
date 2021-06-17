
var express = require('express'); //подключение модуля express
var app = express();              //создание экземлпяра приложения express
var serv = require('http').Server(app); //добавление в качестве http сервера express app

app.get('/', function (req, res) { //обработка get запроса
    res.sendFile(__dirname + '/client/index.html'); //выдача файл на get запрос
});

app.use('/client', express.static(__dirname + '/client')); //установка используемых файлов

serv.listen(2000); //начало прослушивание по порту 2000

var io = require('socket.io')(serv, {});

io.sockets.on('connection', function (socket) { //подключение сокетов
    console.log('socket connection');

    /*
     * Приём данных с клиентской части приложения
    socket.on('happy', function (data) {
        console.log(data.reason);
    });*/

    /*
     * Отправка данных клиентской части приложения
    socket.emit('serverMsg', {
        msg: 'Hello'
    });
    */

});