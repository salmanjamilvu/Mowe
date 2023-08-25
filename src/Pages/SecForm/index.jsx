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
        color: { r: 255, g: 0, b: 0, a: 1 },
        text: '',
        border: ''
    })
    const color = `rgba(${secUserData.color.r}, ${secUserData.color.g}, ${secUserData.color.b}, ${secUserData.color.a})`
    console.log(IMG)
  return (
    <div style={{backgroundImage: `url(${secUserData.bgImage})`}} className=' w-full h-screen bg-no-repeat bg-cover bg-center'>
        <div className='container pt-12 mx-auto'>
            <div className='bg-white rounded-xl px-8 py-7 w-fit flex ml-auto'>
                <div className='flex gap-7'>
                    <button onClick={()=> setStep(0)}>Image</button>
                    <button onClick={()=> setStep(1)}>Color</button>
                    <button onClick={()=> setStep(2)}>Text</button>
                    <button onClick={()=> setStep(3)}>Border</button>
                </div>
            </div>
            <div className='grid grid-cols-12 mt-10'>
                <div className='col-span-9'>
                    <div className='rounded-xl w-2/5 p-2' style={{backgroundImage: `url(${secUserData.border})`}}>
                        <div className='py-10 px-8 text-center rounded-xl' style={{backgroundColor: `${color}`}}>
                            <pre className=' text-white text-2xl'> {secUserData.text} </pre>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    {step === 0 ? <AddImages setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData} step={step}  /> : null}
                    {step === 1 ? <AddColor  setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData}  /> : null}
                    {step === 2 ? <AddText setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData}  /> : null}
                    {step === 3 ? <AddBorder setStep={setStep} setSecUserData={setSecUserData} secUserData={secUserData}  /> : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecForm
