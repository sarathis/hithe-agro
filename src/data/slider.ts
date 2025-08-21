 import beans from "../images/beans.jpg";
import carrot from "../images/carrot.jpg";
import garlic from "../images/garlics.jpg";

 export const  slides = [
    { title: "Fresh Garlic", img: garlic },
    { title: "Organic Carrots", img: carrot },
    { title: "Nilgiris Beans", img: beans },
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
