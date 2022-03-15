import sharp from 'sharp'
const resizeFunc = async(imagePath:string,width:number,height:number,outImgPath:string)=>{
   await sharp(imagePath)
    .resize(width,height)
    .toFile(outImgPath)
  }
  
export default resizeFunc;