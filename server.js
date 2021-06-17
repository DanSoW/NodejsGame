
var express = require('express'); //����������� ������ express
var app = express();              //�������� ���������� ���������� express
var serv = require('http').Server(app); //���������� � �������� http ������� express app

app.get('/', function (req, res) { //��������� get �������
    res.sendFile(__dirname + '/client/index.html'); //������ ���� �� get ������
});

app.use('/client', express.static(__dirname + '/client')); //��������� ������������ ������

serv.listen(2000); //������ ������������� �� ����� 2000

var io = require('socket.io')(serv, {});

io.sockets.on('connection', function (socket) { //����������� �������
    console.log('socket connection');

    /*
     * ���� ������ � ���������� ����� ����������
    socket.on('happy', function (data) {
        console.log(data.reason);
    });*/

    /*
     * �������� ������ ���������� ����� ����������
    socket.emit('serverMsg', {
        msg: 'Hello'
    });
    */

});