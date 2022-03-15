import resizeFunc from "../../resizingImages/imageResizing";
import {promises as fs} from 'fs'
describe('resizing images suite',()=>{
    
    it('take an image name & resize & put it in chachedImages folder',async()=>{

        const imgPath = `${__dirname}/../../../imgs/relaxing.jpg`;
        const width = 300;
        const height = 300;
        const outImgPath = `${__dirname}/../../../cachedImages/relaxing.jpg`;
        
        await resizeFunc(imgPath,width,height,outImgPath);
        await fs.access(imgPath)

    })
})