import React, { useState } from 'react'
import IMG from '../../assets/Images/CarouselImage.png'

const SecForm = () => {
    const [bgImage, setBgImage] = useState('')
    const handleClick = e => {
        setBgImage(e.target.src)
        localStorage.setItem('SecBgImage', e.target.src);
    };
  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className=' w-full h-screen bg-no-repeat bg-cover bg-center'>
        <div className='container pt-12 mx-auto'>
            <div className='bg-white rounded-xl px-8 py-7 w-fit flex ml-auto'>
                <div className='flex gap-7'>
                    <button>Image</button>
                    <button>Color</button>
                    <button>Text</button>
                    <button>Border</button>
                </div>
            </div>
            <div className='grid grid-cols-12 mt-10'>
                <div className='col-span-9'></div>
                <div className='col-span-3 overflow-y-scroll h-4/5 bg-white rounded-xl p-5'>
                    <img src={IMG} alt="" className='object-contain h-auto rounded-lg' onClick={handleClick} />
                    <img src={IMG} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
                    <img src={IMG} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
                    <img src={IMG} alt="" className='object-contain	h-auto rounded-lg mt-3' onClick={handleClick} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecForm
