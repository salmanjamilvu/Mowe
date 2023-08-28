import React from 'react'
import LocationIcon from '../../assets/Svgs/location.svg'
import DressIcon from '../../assets/Svgs/Dress.svg'
import ClockIcon from '../../assets/Svgs/clock.svg'
import GiftIcon from '../../assets/Svgs/gift.svg'
import ShareIcon from '../../assets/Svgs/share.svg'
import UserIcon from '../../assets/Svgs/User.svg'
import PlayIcon from '../../assets/Svgs/play.svg'
import MenuIcon from '../../assets/Svgs/menu.svg'
import MuteIcon from '../../assets/Svgs/mute.svg'
import PauseIcon from '../../assets/Svgs/pause.svg'


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
    <div style={{backgroundImage: `url(${image})`}} className=' w-full bg-no-repeat bg-cover bg-center'>
        <div className='container mx-auto py-20'>
            <p className=' text-right text-gray-500 mr-8 -mb-6'>Hola Yolanda!</p>
            <div className='flex justify-end items-center gap-4'>
                <img src={PauseIcon} alt="" />
                <img src={PlayIcon} alt="" />
                <img src={MuteIcon} alt="" />
                <img src={MenuIcon} alt="" className='mt-4' />
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className='md:col-span-2 sm:col-span12 col-span-12 mt-16'>
                    <div className='flex justify-center md:flex-col sm:flex-row flex-row'>
                        <div className='mx-auto'>
                            <img src={LocationIcon} alt="" className='bg-black rounded-full p-4 mx-auto' />
                            <p className='bg-black px-3 py-2 rounded-3xl mx-auto text-white w-fit mt-4'>Ubicacion</p>
                        </div>

                        <div className='mx-auto md:mt-24 sm:mt-0 mt-0'>
                            <img src={ClockIcon} alt="" className='bg-black rounded-full p-4 mx-auto' />
                            <p className='bg-black px-3 py-2 rounded-3xl mx-auto text-white w-fit mt-4'>Countdown</p>
                        </div>

                        <div className='mx-auto md:mt-24 sm:mt-0 mt-0'>
                            <img src={DressIcon} alt="" className='bg-black rounded-full p-4 mx-auto' />
                            <p className='bg-black px-3 py-2 rounded-3xl mx-auto text-white w-fit mt-4'>Dresscode</p>
                        </div>
                    </div>
                    
                </div>
                <div className='md:col-span-8 sm:col-span12 col-span-12 md:py-0 sm:py-20 py-20'>
                    <div className='text-center text-white'>
                        <h1 className='font-bold text-5xl'>{data.message}</h1>
                        <h2 className='font-bold text-4xl mt-5'>{data.date} {data.time}</h2>
                    </div>
                </div>
                <div className='md:col-span-2 sm:col-span12 col-span-12 mt-16'>
                    <div className='flex justify-center md:flex-col sm:flex-row flex-row'>
                        <div className='mx-auto'>
                            <img src={GiftIcon} alt="" className='bg-black rounded-full p-4 mx-auto' />
                            <p className='bg-black px-3 py-2 rounded-3xl mx-auto text-white w-fit mt-4'>Regalo</p>
                        </div>

                        <div className='mx-auto md:mt-24 sm:mt-0 mt-0'>
                            <img src={ShareIcon} alt="" className='bg-black rounded-full p-4 mx-auto' />
                            <p className='bg-black px-3 py-2 rounded-3xl mx-auto text-white w-fit mt-4'>RRSS</p>
                        </div>

                        <div className='mx-auto md:mt-24 sm:mt-0 mt-0'>
                            <img src={UserIcon} alt="" className='bg-black rounded-full p-4 mx-auto w-16' />
                            <p className='bg-black px-3 py-2 rounded-3xl mx-auto text-white w-fit mt-4'>Frrsback</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='flex gap-4 justify-center items-center text-center md:mt-8 sm:mt-14 mt-14 md:flex-row sm:flex-col flex-col'>
                <button className="bg-black text-white text-const font-bold rounded-full md:w-auto sm:w-1/2 w-1/2 lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10" onClick={previousStep}>Previous Step</button>
                <button className='bg-lightGreen text-white font-bold rounded-full md:w-auto sm:w-1/2 w-1/2 lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10'>Learn more</button>
                <button className='bg-black text-white text-const font-bold rounded-full md:w-auto sm:w-1/2 w-1/2 lg:py-4 md:py-3 sm:py-2 lg:px-16 md:px-12 sm:px-10 py-2 px-10' onClick={nextStep}>Next Step</button>
            </div>
        </div>
    </div>
  )
}

export default PreviewResult
