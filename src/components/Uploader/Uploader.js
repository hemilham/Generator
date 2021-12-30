import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./uploader.scss";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function Uploader() {

    <style type="text/css">
    {`
      FileUploader {
      background-color: #010617;
      border: solid 2px black;
      
    }

    h2{
        color:white;
        font-size:2.5rem;
      }

    `}
  </style>

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
      <>
        <div className="App">
            <h1>Drop Your Files Here</h1>
                <div >
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                </div>
                
            <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
        </div>
      </>

  );
}
