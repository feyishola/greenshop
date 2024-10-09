import React from 'react';
import flower1 from '../assets/image_14-removebg-preview.svg';
import flower2 from '../assets/image_15-removebg-preview.svg';
import strokes from '../assets/twostrokes.svg';

const Offers = () => {
  return (
    <div className='w-full h-auto md:h-[302px] flex flex-col md:flex-row justify-between font-custom px-5 md:px-0'>
        <div className='w-full md:w-[586px] h-[250px] flex flex-row justify-between relative bg-secondary-color'>
            <img src={flower1} width={'292px'} height={'292px'} alt='flower1' className='absolute bottom-0 -left-16 md:left-0'/>
            <div className='w-[292px] pr-5 md:pr-[30px] absolute top-0 right-0 text-end'>
                <h3 className='pt-5 text-end text-[17px] font-bold'>SUMMER CACTUS <br/> & SUCCULENTS</h3>
                <p className='text-[11px] md:text-[12px] pt-3 pb-5'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <button className='bg-primary-color w-[140px] h-10 text-white p-1 rounded-md'>Find more</button>
            </div>
            <img src={strokes} alt='strokes' className='absolute bottom-0 left-0'/>
        </div>
        <div className='w-full md:w-[586px] h-[250px] flex flex-row justify-between relative bg-secondary-color mt-12 md:mt-0'>
            <img src={flower2} width={'292px'} height={'292px'} alt='flower1' className='absolute bottom-0 -left-16 md:left-0'/>
            <div className='w-[292px] pr-5 md:pr-[30px] absolute top-0 right-0 text-end'>
                <h3 className='pt-5 text-end text-[17px] font-bold'>SUMMER CACTUS <br/> & SUCCULENTS</h3>
                <p className='text-[11px] md:text-[12px] pt-3 pb-5'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <button className='bg-primary-color w-[140px] h-10 text-white p-1 rounded-md'>Find more</button>
            </div>
            <img src={strokes} alt='strokes' className='absolute bottom-0 left-0'/>
        </div>
    </div>
  )
}

export default Offers