var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var pug =require('pug');
var port = 8080;

var app = express();
app.use(function(req,res,next){
    console.log('Time',Date.now());
    next();
});

app.set("view engine", 'pug');

const numbers=[
    {"qid":1, "sequence":"3, 1, 4, 1, 5","answer":9},
    {"qid":2, "sequence":"1, 1, 2, 3, 5","answer":8},
    {"qid":3, "sequence":"1, 4, 9, 16, 25","answer":36},
    {"qid":4, "sequence":"2, 3, 5, 7, 11","answer":13},
    {"qid":5, "sequence":"1, 2, 4, 8, 16","answer":32},
];


app.use(bodyParser.json ());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'views')));

app.get('/', function(req,res){
    res.render('index',{numbers:numbers[0],score:0,step:0});
})
app.post('/',function(req,res){
    
   //let indx = parseInt(req.body.indx);
   let ans = parseInt(req.body.txtinput);
   let step = parseInt(req.body.step);
   let score = parseInt(req.body.score);
   //res.send("Hellow World");

   if (ans === numbers[step].answer)
        score++;
   if(step+1 == numbers.length){
        res.render('index',{done:true,score:score,step:step+1});
        
    }
   else{
      
        step+=1;
        res.render('index',{numbers:numbers[step],score:score,step:step});  
   }
        
})

app.listen(port);
console.log("Server running on port" +port);
module.exports =app;