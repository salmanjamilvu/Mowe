import React, { useState } from 'react'
import AddImages from './components/AddImages';
import AddColor from './components/AddColor'
import AddText from './components/AddText'
import AddBorder from './components/AddBorder'
import IMG from '../../assets/Images/CarouselImage.png'

const SecForm = () => {
    const [step, setStep] = useState(0);
    const [secUserData, setSecUserData] = useState({
        bgImage: IMG,
        color: { r: 36, g: 71, b: 83, a: 0.7 },
        text: '',
        border: ''
    })
    const color = `rgba(${secUserData.color.r}, ${secUserData.color.g}, ${secUserData.color.b}, ${secUserData.color.a})`
    
  return (
    <div style={{backgroundImage: `url(${secUserData.bgImage})`}} className='w-full bg-no-repeat bg-cover bg-center h-7xl min-h-screen max-h-7xl pb-20'>
        <div className='container lg:w-4/5 md:w-3/4 sm:w-4/5 w-11/12 pt-12 mx-auto'>
            <div className='grid grid-cols-12 mt-10 '>
                <div className='xl:col-span-9 lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 lg:order-none md:order-2 order-2'>
                    <div className='lg:w-2/4 lg:mt-32 md:mt-10 sm:mt-10 mt-10'>
                        <div className='rounded-xl p-2' style={{backgroundImage: `url(${secUserData.border})`}}>
                            <div className='py-10 px-8 text-center rounded-xl' style={{backgroundColor: `${color}`}}>
                                <pre className=' text-white text-2xl'> {secUserData.text} </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-4 md:col-span-12 sm:col-span-12 col-span-12 lg:order-none md:order-1 order-1'>
                    <div className='bg-white rounded-xl px-8 py-7 flex ml-auto mb-12'>
                        <div className='flex gap-7 justify-center text-center mx-auto'>
                            <button onClick={()=> setStep(0)}>Image</button>
                            <button onClick={()=> setStep(1)}>Color</button>
                            <button onClick={()=> setStep(2)}>Text</button>
                            <button onClick={()=> setStep(3)}>Border</button>
                        </div>
                    </div>
                    {step === 0 ? <AddImages setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData} step={step}  /> : null}
                    {step === 1 ? <AddColor  setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData} step={step}  /> : null}
                    {step === 2 ? <AddText setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData} step={step}  /> : null}
                    {step === 3 ? <AddBorder setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData} step={step}  /> : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecForm
