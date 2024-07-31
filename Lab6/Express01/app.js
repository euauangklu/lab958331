const express = require('express')
let url = require('url');

const app = express()
app.get('/Lab6_2', function(req, res){
    var q = url.parse(req.url, true).query;
    var txt = q.Name + ":" + q.Realname + " " + q.Surname + "</br>" + q.Login + " " + q.Date + ":" + q.month + " " + q.day + ", " + q.year;
    res.send(txt)
})
app.listen(9999,function(){
    console.log("Server is running on PORT 9999")
})