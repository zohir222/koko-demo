const express = require('express') ;
const app = express();

app.get("/" , (req,res)=>{
    res.send("kokokokkksdl");
});

const port  = process.env.PORT || 3012 ;

app.listen(port , ()=>{
    console.log("running " + port );
})