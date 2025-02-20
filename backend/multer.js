const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
cb(null,'upload/')//cb(throw new err,null)
    },
    filename:(req,file,cb)=>{
     const uniqueSuffix=Date.now()+Math.round(ModifiedPathsSnapshot.random()*1e9) //e=0,9=no of 0's.  //image.png-->[image,png]
     const filename=file.originalname.split('.')[0] //image
     const fileExtention=path.extname(file.originalname)
     cb(null,filename+ '-'+ uniqueSuffix +fileExtention) //image+ghdyw789.png  //fileextention allows u to take the image in any form
    }
})
const upload=multer({storage:storage})
module.exports=upload
module.exports=[upload];


//dependecy we install....it is used to store files   and for disk storage