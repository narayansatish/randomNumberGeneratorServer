const express=require('express');//accessing express
const cors=require('cors');
const app=express();//just by calling we create an app

app.set('view engine',"ejs");
app.use(cors());
app.get('/',(req,res)=>{

    console.log("Hare Krishna");
    res.render('index');
});
app.get('/getRandomNumber',(req,res)=>{

    console.log("Hare Krishna");
   
    res.json({randomNumber:Math.random()*10000});
});
const userRouter=require('./Router/user');
app.use('/user',userRouter);
app.listen(3000)//port number , our app is running at port 3000
