const express = require('express');
const cors = require('cors');
const recordset = require("./recordset.js");
const bodyParser =require("body-parser");
const path = require('path');
const port = 4000;



const app = express();

app.use(express.urlencoded({ extended: false }));

const urlencodedParser = express.urlencoded({ extended: false })
app.use(cors({
    origin: '*'									
}));

app.use(express.static(path.join(__dirname,'public')));
// app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, 'public'))
// 	});

app.get('/',function(req,res){
    //res.sendFile(path.resolve(__dirname, 'public/dict.html'));
    recordset.findByWord(req.query.keyword, (err, data) => {
        if (err) {
            res.sendFile(path.resolve(__dirname, 'public/dict.html'));
        } 
        else res.send(data);
      });
});

app.listen(port, () => {
    console.log("server is running on: "+port);
});