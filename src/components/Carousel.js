import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <CarouselContainer
      slidesPerView={1}
      slidesPerGroup={1}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      grabCursor={true}
      navigation={true}
      autoplay={{ delay: 5000 }}
      loop={true}
      pagination={{ clickable: true }}
      speed={300}
      keyboard={{
        enabled: true,
      }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Image_Links.map((image, i) => {
        return (
          <Slide key={i} image={image}>
            <Caption>Image</Caption>
          </Slide>
        );
      })}
      ...
    </CarouselContainer>
  );
};

const CarouselContainer = styled(Swiper)`
  width: 100%;
  height: 300px;
  @media (max-width: 800px) {
    height: 450px;
  }
`;

const Slide = styled(SwiperSlide)`
  /* img {
    width: 100%;
    height: 100%;
  } */
  display: grid;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;
const Caption = styled.div`
  font-size: 25px;
  color: aliceblue;
  place-self: center;
`;
export default Carousel;

const Image_Links = [
  "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1715351190944-a32bc9a900ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ,
  "https://images.unsplash.com/photo-1715351190944-a32bc9a900ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ,
  "https://images.unsplash.com/photo-1715351190944-a32bc9a900ab?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ,
];
