const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose');

const app = express();                                //set up express app


//connect to the database name "mydriver" 
mongoose.connect('mongodb://localhost/mydriver', { useNewUrlParser: true }); 
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);




app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });


  
  
app.use(express.static('public'));


//add bodyParser middleware to handle the data coming from the post request through req.body (must be before routes)
app.use(bodyParser.json());


//to get access to the api file for routes 
app.use('/api', require ('./routes/api'));         



//error handeling middleware
// app.use(function(err, next, req, res){
//     console.log(err);
// });


//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('hey connected');
})