import Carousel from 'react-bootstrap/Carousel';

import s1 from "../Img/s1.png"
import s2 from "../Img/s2.png"
import s3 from "../Img/s3.png"
function CarouselFadeExample() {
  return (
    <Carousel fade className='h-[25vh] lg:h-60 w-[103%] ml-[-7vw] min-[766px]:ml-[-2.4vw] min-[765px]:mt-[-13.5vw] min-[1366px]:ml-[-2.5vw]'>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={s2} className='h-52 scale-[2.1] lg:scale-110 lg:h-60 w-full object-cover' alt="" />
        <Carousel.Caption className='text-black'>

          <h3 className='text-white font-bold text-xs lg:text-base'>NIT-H Health Management</h3>
          <p className='text-white font-bold text-xs lg:text-base'>First In NIT-H For Our Colleagues,Friends And Peoples.</p>
        </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={s1} className='h-52 scale-[1.9] lg:scale-110 lg:h-60 w-full object-cover' alt="" />
        <Carousel.Caption className='text-black'>

          <h3 className='text-white font-bold text-xs lg:text-base'>The Future of Healthcare</h3>
          <p className='text-white font-bold text-xs lg:text-base'> Embracing Online Doctor Consultations</p>
        </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={s3} className='h-52 scale-[2.4] lg:scale-110 lg:h-60 w-[102%] object-cover' alt="" />
        <Carousel.Caption className='text-black'>

          <h3 className='font-bold text-xs lg:text-base'>New Update Will Arrive Soon</h3>
          <p className='font-bold text-xs lg:text-base'>With New Feautre Of Live Ambulance Location Traking.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;