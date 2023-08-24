import React, { useState } from 'react'
import IMG from '../../../assets/Images/CarouselImage.png'
import { Col, Row, Button } from 'antd';

function SecStepForm({setStep, step}) {
  const [image, setImag] = useState("")
  const handleClick = e => {
    setImag(e.target.src)
    localStorage.setItem('userImage', e.target.src);
  };
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
          <Row>
            <Col span={8}>
              <div className='overflow-y-scroll h-2/5'>
                <img src={IMG} alt="" className='object-contain	h-auto rounded-lg' onClick={handleClick} />
                <img src={IMG} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
                <img src={IMG} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
                <img src={IMG} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />

              </div>
            </Col>
            <Col span={16}>
              <div className=' w-auto h-auto'>
                <img src={image} alt="" className='object-cover h-80 w-full rounded-lg'/>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mt-4'>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 rounded-full" onClick={previousStep}>Previous Step</Button>
          <Button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 rounded-full' onClick={nextStep}>Next Step</Button>
        </div>
    </div>
  )
}

export default SecStepForm
