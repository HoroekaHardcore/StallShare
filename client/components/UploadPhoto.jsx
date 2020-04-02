
import React from 'react';
import {useDropzone} from 'react-dropzone';
import PublishIcon from '@material-ui/icons/Publish';

export default function UploadPhoto(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <PublishIcon className="icon-upload"/>
        <p>Click to select a stall photo to upload</p>
      </div>
      <aside>
        
        {/* <ul>{files}</ul> */}
      </aside>
    </section>
  );
}
