const express=require("express");
const app=express();
const path=require("path");
const mysql=require("mysql");
const dotenv=require('dotenv');
dotenv.config({path: './.env'});
const hbs=require("hbs");
const bodyParser = require('body-parser');
const port=process.env.PORT || 1100;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//engine templates path
const view_path=path.join(__dirname,"/template/views");
// {name:name, email:email, password:hashedPassword}
const staticpath=path.join(__dirname,"/web"); 
app.use(express.static(staticpath));
app.set("views",view_path);
app.set('view engine', 'hbs');
// hbs.registerPartials(partial_path);
app.use("/",require("./routes/hbs"));




const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("database is connected!");
    }
});




app.post("/account",async (req,res)=>{
    
    try {
       const {name,email,password}=req.body;
       db.query('SELECT * FROM `ecommerce`.userData WHERE email=?',[email],async (err,results)=>{
             if(err){
                 console.log(err);
             }else if(password>=0){
                 return res.render("index");
            
             }

             db.query('INSERT INTO `ecommerce`.userData SET ?',{name:name, email:email, password:password},(err,results)=>{
                 if(err){
                     console.log(err);
                 }else{
                     return res.render('index');
                 }
             });
       })
    } catch (error) {
        console.log(error)
    }
})




app.listen(port,()=>{
    console.log("server is started on port " +port)
});
