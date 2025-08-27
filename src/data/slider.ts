 import ban1 from "../images/banner1.png";
import ban2 from "../images/banner2.png";
import ban3 from "../images/banner3.png";
import ban4 from "../images/banner4.png";

 export const  slides = [
    { title: "Fresh vegetables directly from trusted Nilgiris farms.", img: ban1 ,coverPosition:"object-center"},
    { title: "Modern cold storage & export-grade packaging for freshness.", img: ban2 ,coverPosition:"object-top"},
    { title: "Fast and secure shipping to global destinations.", img: ban3 ,coverPosition:"object-center"},
    { title: "Promoting healthy living while supporting local farmers.", img: ban4 ,coverPosition:"object-center"},
  ];
  
  export const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
