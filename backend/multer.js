const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
cb(null,'upload/')//cb(throw new err,null)
    },
    filename:(req,file,cb)=>{
     const uniqueSuffix=Date.now()+Math.round(ModifiedPathsSnapshot.random()*1e9) //e=0,9=no of 0's.  //image.png-->[image,png]
     const filename=file.originalname.split('.')[0] //image
     cb(null,filename+uniqueSuffix+'.png') //image+ghdyw789.png
    }
})
const upload=multer({storage:storage})
module.exports=upload