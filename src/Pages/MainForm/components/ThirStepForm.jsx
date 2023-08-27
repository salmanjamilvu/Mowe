import React, { useState } from 'react'
import FilesUpload from '../../../components/FilesUpload';

const ThirStepForm = ({setStep, step}) => {
  
  const [uploadedFile1, setUploadedFile1] = useState({
    image: '',
    video: ''
  });

  const [uploadedFile2, setUploadedFile2] = useState({
    image: '',
    video: ''
  });

  localStorage.setItem('uploadedFile1', JSON.stringify(uploadedFile1.image));
  localStorage.setItem('uploadedFile2', JSON.stringify(uploadedFile2.image));

  // localStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
  // localStorage.setItem('selectedVideo2', JSON.stringify(selectedVideo2));


  const previousStep = () =>{
    setStep(step-1)
  }
  const nextStep = () =>{
    if (((uploadedFile1.image || uploadedFile1.video) && (uploadedFile2.image || uploadedFile2.video)) !== '') {
      setStep(step+1)      
    }else{
      alert("Please Upload the Image or Video")
    }

  }
  return (
    <div className=' bg-transWhite mx-auto rounded-xl md:p-10 sm:p-10 p-5 lg:w-3/5 md:w-3/4 sm:w-4/5 w-11/12'>
      <h2 className=' text-2xl font-bold'>Carga tu fotos</h2>
      <p className='pb-6'>Para empezar, vamos a subir 2 vídeos o fotos. El principal se mostrará en la portada de la invitación y el secundario en el apartado “cuenta atrás”. Si no encuentras la foto perfecta, no te preocupes, vas a poder modificarla después.</p>
      <div className='container bg-white rounded-xl p-6'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='sm:col-span-2 md:col-span-1 col-span-2'>
            <p className='text-center text-lg mb-3'>Foto/Video Principal</p>
            <FilesUpload
              uploadedFile={uploadedFile1}
              setuploadedFile={setUploadedFile1}
            />
          </div>
          <div className='sm:col-span-2 md:col-span-1 col-span-2'>
            <p className='text-center text-lg mb-3'>Foto/Video Principal</p>
            <FilesUpload
              uploadedFile={uploadedFile2}
              setuploadedFile={setUploadedFile2}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <button className="bg-white text-const font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={previousStep}>Previous Step</button>
        <button className='bg-lightGreen text-white font-bold rounded-full lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10' onClick={nextStep}>Next Step</button>
      </div>
  </div>
  )
}

export default ThirStepForm
