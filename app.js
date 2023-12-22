const express = require('express')
const fs = require('fs')

const app = express()

app.use(function(req, res, next) {
    const date = new Date()
    fs.appendFile('Server logs.txt', `Server logs: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${req.ip} : ${req.port}, ${req.url} \n`, (err) => {
        if (err) throw err;
        console.log('Logs appended to file.');
      })
      next();
});


app.get('/', function(req, res){
    res.sendFile(__dirname + '/templates/index.html')
})


app.listen(8000, function(){
    console.log('Listening on port 8000')
})