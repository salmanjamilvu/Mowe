import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';

const FilesUpload = ({uploadedImage, selectedVideo, setUploadedImage, setSelectedVideo}) => {
    const [files, setFiles] = useState([]);
    const handleDrop = (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          setFiles(acceptedFiles);
          if (file.type.startsWith('image/')) {
            const firstImage = acceptedFiles.find((file) => file.type.startsWith('image/'));
            if (firstImage) {
              const imageUrl = URL.createObjectURL(firstImage);
              setSelectedVideo(null);
              setUploadedImage(imageUrl);
            }
            
          } else if (file.type.startsWith('video/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
              setUploadedImage(null);
              setSelectedVideo(event.target.result);
            };
            reader.readAsDataURL(file);
          } 
        });
      };
    
      const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*, video/*',
        onDrop: handleDrop,
        
      });
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg">
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p className="text-center text-gray-600">
                Drag 'n' drop some files here, or click to select files
              </p>
              <div className="mt-4">
              {uploadedImage && (
                <div className="mb-2">
                  <img src={uploadedImage} alt="Uploaded" className="max-w-full h-40" />
                </div>
              )}
              {selectedVideo && (
                <div>
                  <h2 className="text-lg font-semibold mt-4 mb-2">Uploaded Video</h2>
                  <video controls className="max-w-full h-40">
                    <source src={selectedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
            </div>
            <div className="mt-4">
              {files.map((file) => (
                <div key={file.name} className="mb-2">
                  <p className="text-gray-800">{file.name}</p>
                </div>
              ))}
            </div>
          </div>
  )
}

export default FilesUpload
