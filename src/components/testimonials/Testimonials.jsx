
// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css'

const data=[
  {
    avatar:'',
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore eius modi vero obcaecati nemo doloribus! Atque recusandae autem sequi amet reiciendis. Error nihil, vel provident nemo soluta nesciunt nam.'
  },
  {
    avatar:'',
    name:'Mark Parker',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore eius modi vero obcaecati nemo doloribus! Atque recusandae autem sequi amet reiciendis. Error nihil, vel provident nemo soluta nesciunt nam.'
  },
  {
    avatar:'',
    name:'Modi Huk',
    review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore eius modi vero obcaecati nemo doloribus! Atque recusandae autem sequi amet reiciendis. Error nihil, vel provident nemo soluta nesciunt nam.'
  }
]

const Testimonials = () => {
  return (
    <section id="#testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className="client_review">
                  {review}
                </small>
            </SwiperSlide>
          )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials