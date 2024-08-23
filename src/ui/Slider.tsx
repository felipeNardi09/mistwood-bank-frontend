import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slides = [
  {
    title: "Welcome to Mistwood",
    text: "Mistwood Bank was founded to revolutionize banking with a secure and intuitive digital experience. Combining technological innovation with a deep understanding of modern financial needs, Mistwood Bank offers simplified and accessible financial solutions for everyone.",
  },
  {
    title: "Account",
    text: "Our accounts offer secure, user-friendly digital banking with no hidden fees. Enjoy instant transfers and access to your funds through our app. Tailored to fit your financial needs, Mistwood Bank accounts provide a seamless and efficient banking experience.",
  },
  {
    title: "Branches",
    text: "We have branches located in New York, Tokyo, Paris, and Melbourne, offering personalized customer service and support. Our branches provide a seamless blend of digital and in-person banking to meet your needs globally.",
  },
  {
    title: "Loans",
    text: "We offer flexible and competitive loans tailored to your financial goals. Whether you're planning a major purchase or consolidating debt, our loans feature competitive rates, transparent terms, and personalized service to help you achieve your aspirations with confidence.",
  },
  {
    title: "Cards",
    text: "Mistwood Bank's credit and debit cards offer convenience and security with global acceptance. Enjoy features like cashback rewards, fraud protection, and contactless payments, tailored to simplify your spending and enhance your financial management.",
  },
];

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      className="group"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="px-4 py-3">
            <h1 className="m-4 text-xl font-semibold">{slide.title}</h1>
            <p className="px-12 text-justify text-lg font-medium">
              {slide.text}
            </p>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button-next hidden text-dark group-hover:block"></div>
      <div className="swiper-button-prev hidden text-dark group-hover:block"></div>
    </Swiper>
  );
}
