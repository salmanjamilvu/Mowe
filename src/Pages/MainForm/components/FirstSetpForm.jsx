import React from 'react'

const FirstSetpForm = ({setStep, step}) => {
    const setChange = ()=>{

        setStep(step+1)
    }
  return (
    <div className=' bg-teal-50 p-8 w-3/5 mx-auto rounded-xl'>
        <div className='container bg-white rounded-xl h-60 justify-center flex flex-col'>
            <div className='text-center'>
                <img src="" alt="" />
                <h2 className=' text-xl font-bold'>Welcome to your wedding invitation designer!</h2>
                <p className=' text-lg'>if you’re ready, let’s design the perfect invitation for the Big Day!</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full mt-4" onClick={setChange}>Start</button>
            </div>
        </div>
    </div>
  )
}

export default FirstSetpForm
