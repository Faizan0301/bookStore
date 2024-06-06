const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authName:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const user=mongoose.model('userTbl',userSchema)
module.exports=user