import axios from 'axios'
import React, { useState } from 'react'
import "./image.css"
const Image = () => {

    let [file,setFile] = useState("")
    let [uplodedFile, setUploadedFile] = useState({
        fileName:"",
        filePath:""
    })

    const handleChange = (event)=>{
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        let form = new FormData()
        form.append("file",file)
        axios.post("/upload", form
        ).then(res=>{
            setUploadedFile({
                fileName:res.data.fileName,
                filePath:res.data.filePath
            })
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='uploader'>
        <input type="file" onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
        {uplodedFile && <div>
            {console.log(uplodedFile.fileName)}
            <img src={uplodedFile.filePath} alt=""/>
        </div>}
    </div>
  )
}

export default Image