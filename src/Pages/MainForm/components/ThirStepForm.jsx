import React, { useState } from 'react'
import FilesUpload from '../../../components/FilesUpload';

const ThirStepForm = ({setStep, step}) => {
  
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const [uploadedImage2, setUploadedImage2] = useState(null);
  const [selectedVideo2, setSelectedVideo2] = useState(null);

  localStorage.setItem('uploadedImage', JSON.stringify(uploadedImage));
  localStorage.setItem('uploadedImage2', JSON.stringify(uploadedImage2));

  // localStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
  // localStorage.setItem('selectedVideo2', JSON.stringify(selectedVideo2));


  const previousStep = () =>{
    setStep(step-1)
  }
  const nextStep = () =>{
    setStep(step+1)
  }
  return (
    <div className=' bg-teal-50 p-8 w-3/5 mx-auto rounded-xl'>
      <p className='text-lg pb-3'>firstly, let’s make it epic! choose the intro for your invitation:</p>
      <div className='container bg-white rounded-xl h-96 rounded-full'>
        <div className='grid grid-cols-2 gap-4'>
          
            <FilesUpload
              uploadedImage={uploadedImage}
              selectedVideo={selectedVideo}
              setUploadedImage={setUploadedImage}
              setSelectedVideo={setSelectedVideo}
            />
          
          <FilesUpload
              uploadedImage={uploadedImage2}
              selectedVideo={selectedVideo2}
              setUploadedImage={setUploadedImage2}
              setSelectedVideo={setSelectedVideo2}
            />
        </div>
      </div>
      <div className='mt-4'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full" onClick={previousStep}>Previous Step</button>
        <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full' onClick={nextStep}>Next Step</button>
      </div>
  </div>
  )
}

export default ThirStepForm
