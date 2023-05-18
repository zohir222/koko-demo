const express = require('express') ;
const userRouter = require('./routes/users');

const app = express();

app.use(express.json());

app.get("/" , (req,res)=>{
    res.json("kokokokkksdl!!!!!!!!");
});



app.use("/user"  , userRouter ) ;

const port  = process.env.PORT || 3012 ;

app.listen(port , ()=>{
    console.log("running " + port );
})