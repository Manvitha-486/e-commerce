const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:Number},
    password:{type:String,required:true,minLength:4},
    avatar:{
        id:{type:String},
        url:{type:String}
    },
    address:[
        {
            country:{type:String,required:true},
            city:{type:String,required:true},
            address1:{type:String},
            address2:{type:String},
            pincode:{type:Number,required:true}
        }
    ],
    role:{type:String,default:user},
    createdAt:{type:Date,default:Date.now()}
})
userSchema.prev('save',async function(next){
    if(!this.modified('password'))
        return next()

    await bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.jsonTokens=function(){
    return jwt.sign({id:this._id},process.env.JWT_TOKEN,{expiresIn:process.env.JWT_EXPIRES})
}