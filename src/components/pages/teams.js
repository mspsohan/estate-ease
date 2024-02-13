import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import image1 from "../../assets/sheriefelarafa-270x340.png"
import image2 from "../../assets/monaghaly-270x340.png"
import image3 from "../../assets/modymagdy-270x340.png"
import image4 from "../../assets/marcoghaly-270x340.png"
import { FaFacebook, FaSkype, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const Teams = () => {
   const breakpoints = {
      // when window width is >= 320px
      480: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 480px
      680: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30
      },
      // when window width is >= 640px
      1280: {
         slidesPerView: 4,
         spaceBetween: 30
      }
   }

   return (
      <div className='container mx-auto'>
         <div className="text-center mb-10">
            <h2 className="text-lg text-gray-700 mb-8">WE HAVE PROFESSIONAL AGENTS</h2>
            <p className="text-3xl font-bold text-gray-900 mb-4">MEET OUR AGENTS</p>
         </div>
         <Swiper
            breakpoints={breakpoints}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className='shadow flex flex-col justify-center items-center pb-5'>
                  <div className='w-80 h-96'>
                     <Image width="fill" height="fill" src={image1} alt="Location Icon" className="w-full h-96 flex justify-center items-center object-cover" />
                  </div>
                  <div className='h-28 w-full rounded bg-black relative text-white text-center'>
                     <h2 className='pt-6 hover:text-amber-500'>Sherief El Arafa</h2>
                     <p>5 Properties</p>
                     <div className='-mb-12 h-10 bg-amber-800 w-full rounded z-30 flex justify-center items-center'>
                        <ul className='bg-amber-800 flex gap-5' style={{ margin: 'auto' }}>
                           <li><a href="https://facebook.com"><FaFacebook className='text-2xl' /></a></li>
                           <li><a href="https://twitter.com"><FaTwitter className='text-2xl' /></a></li>
                           <li><a href="https://skype.com"><FaSkype className='text-2xl' /></a></li>
                           <li><a href="https://whatsapp.com"><FaWhatsapp className='text-2xl' /></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='shadow flex flex-col justify-center items-center pb-5'>
                  <div className='w-80 h-96'>
                     <Image width="fill" height="fill" src={image2} alt="Location Icon" className="w-full h-96 flex justify-center items-center object-cover" />
                  </div>
                  <div className='h-28 w-full rounded bg-black relative text-white text-center'>
                     <h2 className='pt-6 hover:text-amber-500'>Marco Ghaly</h2>
                     <p>5 Properties</p>
                     <div className='-mb-12 h-10 bg-amber-800 w-full rounded z-30 flex justify-center items-center'>
                        <ul className='bg-amber-800 flex gap-5' style={{ margin: 'auto' }}>
                           <li><a href="https://facebook.com"><FaFacebook className='text-2xl' /></a></li>
                           <li><a href="https://twitter.com"><FaTwitter className='text-2xl' /></a></li>
                           <li><a href="https://skype.com"><FaSkype className='text-2xl' /></a></li>
                           <li><a href="https://whatsapp.com"><FaWhatsapp className='text-2xl' /></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='shadow flex flex-col justify-center items-center pb-5'>
                  <div className='w-80 h-96'>
                     <Image width="fill" height="fill" src={image3} alt="Location Icon" className="w-full h-96 flex justify-center items-center object-cover" />
                  </div>
                  <div className='h-28 w-full rounded bg-black relative text-white text-center'>
                     <h2 className='pt-6 hover:text-amber-500'>Mona Ghaly</h2>
                     <p>5 Properties</p>
                     <div className='-mb-12 h-10 bg-amber-800 w-full rounded z-30 flex justify-center items-center'>
                        <ul className='bg-amber-800 flex gap-5' style={{ margin: 'auto' }}>
                           <li><a href="https://facebook.com"><FaFacebook className='text-2xl' /></a></li>
                           <li><a href="https://twitter.com"><FaTwitter className='text-2xl' /></a></li>
                           <li><a href="https://skype.com"><FaSkype className='text-2xl' /></a></li>
                           <li><a href="https://whatsapp.com"><FaWhatsapp className='text-2xl' /></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='shadow flex flex-col justify-center items-center pb-5'>
                  <div className='w-80 h-96'>
                     <Image width="fill" height="fill" src={image4} alt="Location Icon" className="w-full h-96 flex justify-center items-center object-cover" />
                  </div>
                  <div className='h-28 w-full rounded bg-black relative text-white text-center'>
                     <h2 className='pt-6 hover:text-amber-500'>Mody Magdy</h2>
                     <p>5 Properties</p>
                     <div className='-mb-12 h-10 bg-amber-800 w-full rounded z-30 flex justify-center items-center'>
                        <ul className='bg-amber-800 flex gap-5' style={{ margin: 'auto' }}>
                           <li><a href="https://facebook.com"><FaFacebook className='text-2xl' /></a></li>
                           <li><a href="https://twitter.com"><FaTwitter className='text-2xl' /></a></li>
                           <li><a href="https://skype.com"><FaSkype className='text-2xl' /></a></li>
                           <li><a href="https://whatsapp.com"><FaWhatsapp className='text-2xl' /></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Teams;