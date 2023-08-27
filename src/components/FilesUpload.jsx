import React from 'react'
import { useDropzone } from 'react-dropzone';

const FilesUpload = ({uploadedFile, setuploadedFile}) => {
    
    const handleDrop = (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          if (file.type.startsWith('image/')) {
            const firstImage = acceptedFiles.find((file) => file.type.startsWith('image/'))
            if (firstImage) {
              const imageUrl = URL.createObjectURL(firstImage)
              setuploadedFile({
                image: imageUrl,
                video: ''
              })
            }
            
          } else if (file.type.startsWith('video/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
              setuploadedFile({
                image: '',
                video: event.target.result
              })
            };
            reader.readAsDataURL(file);
          } 
        });
      };
    
      const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*, video/*',
        maxFiles: 1,
        onDrop: handleDrop,
        
      });
  return (
    <div className="max-w-md mx-auto p-2 border border-gray-300 border-dashed rounded-lg">
      <div {...getRootProps()} className="dropzone">
        <div className='flex justify-center items-center w-full h-72 rounded-xl bg-contain bg-center bg-no-repeat' style={{backgroundImage: `url(${uploadedFile.image})`}}>
          <input {...getInputProps()}/>
          {uploadedFile.video && (
            <div>
              <h2 className="text-lg font-semibold mt-4 mb-2">Uploaded Video</h2>
              <video controls className="max-w-full h-40">
                <source src={uploadedFile.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {uploadedFile.image === '' && uploadedFile.video === '' ? <p className="text-center text-gray-600">
            Drag and drop. Video max: 15 sec
          </p> : null}
          
        </div>
        <div className='flex justify-end'>
          <button className='mt-4 bg-black text-white rounded-full lg:py-3 md:py-2 sm:py-2 lg:px-12 md:px-10 sm:px-6 py-2 px-6'>Cargar</button>
        </div>
      </div>
    </div>
  )
}

export default FilesUpload
