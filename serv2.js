var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
var suggession = require("./feedback.js")
var Person = require('./person.js');
var order=require('./order.js')
app.use(express.static('public'))
//this is at the bottom
app.use('/form1',(req,res) => {
   res.sendfile(__dirname+'/form1.html');
})
app.use('/home',(req,res) => {
    var newPerson = new Person ({
        name: req.body.name,
        pass:req.body.pass,
    });
    newPerson.save((err) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error:' + err);
        }
        else {
            res.sendFile(__dirname+"/reset.html")
        }

    });
});
app.use('/home',(req,res) => {
    var newPerson = new Person ({
        name: req.body.name,
        pass:req.body.pass,
    });
    newPerson.save((err) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error:' + err);
        }
        else {
            res.sendFile(__dirname+"/reset.html")
        }

    });
});
app.use('/bill.html',(req,res) => {
    var neworder = new order ({
        name: req.body.fname,
        email:req.body.email,
        address:req.body.address,
        pass:req.body.pass,
    });
    neworder.save((err) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error:' + err);
        }
        else {
            res.sendFile(__dirname+"/reset.html")
        }

    });
});

app.use('/sugg',(req,res) => {
    var newsuggession = new suggession ({
        sugg:req.body.sugg,
    });
    newsuggession.save((err) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error:' + err);
        }
        else {
            res.sendFile(__dirname+"/test.html")
        }

    });
});
app.use('/about',(req,res)=>{
    res.sendFile(__dirname+"/about.html")
})


app.use('/alldata',(req, res) => { Person.find((err, allPeople )=> {
    if(err){
        res.type('html').status(500);
        res.send('Error:' + err);
    }
    else if(allPeople.length == 0) {
        res.type('html').status(200);
        res.send('There are no peope');
    }
    else {
        res.render('allshow', { people: allPeople});
    }
      });
});



app.use('/cars.html',(req,res)=>{
    res.sendFile(__dirname+'/car.html')
})

app.use('/bike.html',(req,res)=>{
    res.sendFile(__dirname+'/bike2.html')
})
app.use('/buy.html',(req,res)=>{
    res.sendFile(__dirname+"/buy.html")
})


app.listen(3000)