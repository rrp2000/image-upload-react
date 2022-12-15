const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")

const app = express()

app.use(fileUpload())
app.use(cors())

app.post("/upload",(req,res)=>{
    if(!req.files)
    {
        return res.status(400).json({msg:"no file"})
    }
    const file = req.files.file
    // console.log(file)
    console.log(__dirname)
    
    // file.mv(`${__dirname}/client/public/uploads/${file.name}`,err=>{
    file.mv(`C:/Users/spacespider/Documents/practice/client/public/uploads/${file.name}`,err=>{
        if(err){
            console.log(err)
            return res.status(500).send(err)
        }

        res.json({fileName:file.name,filePath:`uploads/${file.name}`})
    })
})

app.listen(4000,()=>{console.log("running...........")})