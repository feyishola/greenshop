// import React, { useEffect } from 'react';
// import flowervase1 from '../assets/flowervase1.svg';
// import Glide from '@glidejs/glide';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';

// const Home = () => {

//   useEffect(() => {
//     new Glide('.glide', {
//       type: 'carousel',
//       startAt: 0,
//       perView: 1,
//       autoplay: 3000,
//       breakpoints: {
//         768: { perView: 1 }, // 1 slide on mobile
//         1024: { perView: 1 } // 1 slide on medium screens
//       }
//     }).mount();
//   }, []);

//   return (
//     <div className="w-full">
//       <div className="glide">
//         {/* Glide track */}
//         <div className="glide__track" data-glide-el="track">
//           <ul className="glide__slides">
//             {/* Slide 1 */}
//             <li className="glide__slide">
//               <div className='hero w-full h-[450px] flex flex-col md:flex-row bg-[#F5F5F5] mt-[10px]'>
//                 <div className='flex-grow font-custom px-5 md:px-0'>
//                   <p>Welcome to GreenShop</p>
//                   <div className='w-full md:w-[530px] h-[140px]'>
//                     <p className='text-[50px] md:text-[70px] font-black leading-tight'>
//                       Let’s Make a Better Planet
//                     </p>
//                   </div>
//                 </div>
//                 <div className='w-[518px] relative flex flex-row'>
                    
//                     <img src={flowervase1} width={'135px'} height={'135px'} className='absolute bottom-8 left-5'/>
//                     <img src={flowervase1}/>
//                 </div>
//               </div>
//             </li>
//             {/* Duplicate the content for Slide 2 and Slide 3 */}
//             <li className="glide__slide">
//               <div className='hero w-full h-[450px] flex flex-col md:flex-row bg-[#F5F5F5] mt-[10px]'>
//                 <div className='flex-grow font-custom px-5 md:px-0'>
//                   <p>Welcome to GreenShop</p>
//                   <div className='w-full md:w-[530px] h-[140px]'>
//                     <p className='text-[50px] md:text-[70px] font-black leading-tight'>
//                       Let’s Make a Better Planet
//                     </p>
//                   </div>
//                 </div>
//                 <div className='w-[518px] relative flex flex-row'>
                    
//                     <img src={flowervase1} width={'135px'} height={'135px'} className='absolute bottom-8 left-5'/>
//                     <img src={flowervase1}/>
//                 </div>
//               </div>
//             </li>
//             <li className="glide__slide">
//               <div className='hero w-full h-[450px] flex flex-col md:flex-row bg-[#F5F5F5] mt-[10px]'>
//                 <div className='flex-grow font-custom px-5 md:px-0'>
//                   <p>Welcome to GreenShop</p>
//                   <div className='w-full md:w-[530px] h-[140px]'>
//                     <p className='text-[50px] md:text-[70px] font-black leading-tight'>
//                       Let’s Make a Better Planet
//                     </p>
//                   </div>
//                 </div>
//                 <div className='w-[518px] relative flex flex-row'>
                    
//                     <img src={flowervase1} width={'135px'} height={'135px'} className='absolute bottom-8 left-5'/>
//                     <img src={flowervase1}/>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>

//         {/* Glide controls and indicators */}
//         <div className="glide__bullets" data-glide-el="controls[nav]">
//           <button className="glide__bullet" data-glide-dir="=0"></button>
//           <button className="glide__bullet" data-glide-dir="=1"></button>
//           <button className="glide__bullet" data-glide-dir="=2"></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from 'react';
import flowervase1 from '../assets/flowervase1.svg';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const Home = () => {
  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: false, // Disable autoplay for testing
      breakpoints: {
        768: { perView: 1 }, // 1 slide on mobile
        1024: { perView: 1 } // 1 slide on medium screens
      }
    });

    glide.mount();

    const handleResize = () => {
      glide.update(); // Update Glide on resize
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      glide.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className="glide w-full h-auto bg-[#F5F5F5] mt-[10px] p-4 md:p-8">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {/* Slide 1 */}
            <div className="glide__slide flex flex-row">
              <div className="flex-grow font-custom mb-6 md:mb-0">
                <p className="text-sm md:text-base">Welcome to GreenShop</p>
                <div className="w-full md:w-[530px] h-auto">
                  <p className="text-3xl md:text-[70px] font-black leading-tight">Let’s Make a Better Planet</p>
                </div>
              </div>
              <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
                <img
                  src={flowervase1}
                  className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
                  alt="flower vase small"
                />
                <img
                  src={flowervase1}
                  className="w-[200px] md:w-[518px] h-auto"
                  alt="flower vase large"
                />
              </div>
            </div>
            {/* Slide 2 */}
            <div className="glide__slide flex flex-row">
              <div className="flex-grow font-custom mb-6 md:mb-0">
                <p className="text-sm md:text-base">Welcome to GreenShop</p>
                <div className="w-full md:w-[530px] h-auto">
                  <p className="text-3xl md:text-[70px] font-black leading-tight">Let’s Make a Better Planet</p>
                </div>
              </div>
              <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
                <img
                  src={flowervase1}
                  className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
                  alt="flower vase small"
                />
                <img
                  src={flowervase1}
                  className="w-[200px] md:w-[518px] h-auto"
                  alt="flower vase large"
                />
              </div>
            </div>
            {/* Slide 3 */}
            <div className="glide__slide flex flex-row">
              <div className="flex-grow font-custom mb-6 md:mb-0">
                <p className="text-sm md:text-base">Welcome to GreenShop</p>
                <div className="w-full md:w-[530px] h-auto">
                  <p className="text-3xl md:text-[70px] font-black leading-tight">Let’s Make a Better Planet</p>
                </div>
              </div>
              <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
                <img
                  src={flowervase1}
                  className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
                  alt="flower vase small"
                />
                <img
                  src={flowervase1}
                  className="w-[200px] md:w-[518px] h-auto"
                  alt="flower vase large"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="glide__bullets" data-glide-el="controls">
          <button className="glide__bullet glide__bullet--active" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
    </div>
  );
}

export default Home;

