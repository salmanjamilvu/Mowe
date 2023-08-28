import React, { useState } from 'react'
import BgImg from '../../assets/Images/EventCreation.jpg'
import FirstSetpForm from './components/FirstSetpForm'
import SecStepForm from './components/SecStepForm'
import ThirStepForm from './components/ThirStepForm'
import FouStepForm from './components/FouStepForm'
import PreviewResult from '../previewPage/PreviewResult'
import ComingSoon from './components/ComingSoon'
import SecForm from '../SecForm'
import Logo from '../../assets/Svgs/AppLogo.svg'

const MainForm = () => {
  const [step, setStep] = useState(0);
  return (
    <>
    {step === 4 ?
      <PreviewResult setStep={setStep} step={step} /> :
        step === 6 ? <SecForm  /> : 
          <div style={{backgroundImage: `url(${BgImg})`}} className='bg-no-repeat bg-cover'>
            <div className='ml-20'>
            <img src={Logo} alt="" className='w-40' />
            </div>
            <div className='pt-8 pb-40'>
              {step === 0 ? <FirstSetpForm setStep={setStep} step={step}  /> : null}
              {step === 1 ? <SecStepForm setStep={setStep} step={step} /> : null}
              {step === 2 ? <ThirStepForm setStep={setStep} step={step} /> : null}
              {step === 3 ? <FouStepForm setStep={setStep} step={step} /> : null}
              {step === 5 ? <ComingSoon setStep={setStep} step={step} /> : null}
            </div>
          </div>
      
    }
    </>
  )
}

export default MainForm
