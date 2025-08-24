import Slider from "react-slick";
import { slides ,slideSettings} from "../../data/slider";

const Banner=({})=>{
    return (<>
    <Slider {...slideSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.img}
                alt={slide.title}
                loading="lazy" 
                className={`w-full h-[600px] object-cover ${slide.coverPosition}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-end p-6">
                <h2 className="text-4xl text-white font-bold">{slide.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
    </>);
}

export default Banner;