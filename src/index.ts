import resizeFunc from "./resizingImages/imageResizing";

import {promises as fs} from 'fs'

import express  from "express";
const fsp = require('fs');

const app = express()
const port = 3000
app.listen(port,()=>{
  console.log(`server run on port ${port}`);
  
})

app.get('/',(req,res)=>{
  res.send('Starting Page (home end point)')
})

app.get('/api/images',async (req,res)=>{
  try{
    const width = await Number(req.query.width)
    const height = await Number(req.query.height)
    const imgName = await req.query.filename
    const imgPath = await `${__dirname}/../imgs/${imgName}.jpg`;
    if(imgPath){
      await fs.access(imgPath);
      await resizeFunc(`${imgPath}`,width,height,`${__dirname}/../cachedImages/${imgName}_${width}_${height}.jpg`)

    await fsp.readFile(`${__dirname}/../cachedImages/${imgName}_${width}_${height}.jpg`,(err:string,data:string)=> {
        if(err) res.send('Error with resizing the image');
        ;
        res.writeHead(200, {'Content-Type': 'image/jpg' });
        
        res.end(data) 
      });

    }
  }catch(error){
    console.log(error);
    
  }

})


export default app;