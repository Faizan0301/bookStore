const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://faizanrednwhite:12345@cluster0.r0d9zrs.mongodb.net/bookStore')
const db = mongoose.connection
db.on('connected',(err)=>{
    if(err){
        console.log("Database not connected.");
        return false
    }
    console.log("Database conneceted...");
})
module.exports=db