import React from 'react'

const PreviewResult = ({setStep, step}) => {
    const data = JSON.parse(localStorage.getItem('userData'))
    const image = localStorage.getItem('userImage')
    
    const previousStep = () =>{
        setStep(step-1)
      }
      const nextStep = () =>{
        setStep(step+1)
      }
  return (
    <div style={{backgroundImage: `url(${image})`}} className=' w-full h-screen bg-no-repeat bg-cover bg-center'>
        <div className='container mx-auto pt-20'>
            <div className="grid grid-cols-12 gap-4">
                <div className='col-span-2'>col-span-2</div>
                <div className='col-span-8'>
                    <div className='text-center text-stone-500'>
                        <h1 className='font-bold text-5xl'>{data.message}</h1>
                        <h2 className='font-bold text-4xl mt-5'>{data.date} {data.time}</h2>
                    </div>
                    <div className='flex gap-4 justify-center pt-80'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full" onClick={previousStep}>Previous Step</button>
                        <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full'>Learn more</button>
                        <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full' onClick={nextStep}>Next Step</button>
                    </div>
                </div>
                <div className='col-span-2'>col-span-2</div>
            </div>
        </div>
    </div>
  )
}

export default PreviewResult
