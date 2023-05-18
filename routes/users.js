const express = require('express') ;
const router = express.Router() ;

router.get("/api" , async ( req , res ) => {
    res.json("hello user ") ;
} );

module.exports = router ;