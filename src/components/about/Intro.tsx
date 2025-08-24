
interface IIntro{
    image:string;
}
const Intro=(param:IIntro)=>{
    return (<>    <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-left">
            At <span className="font-semibold">Hithe Agro</span>, we are
            passionate about bringing fresh and organic produce from the farms
            of Nilgiris directly to your home. With years of expertise in
            sustainable farming, we ensure quality, trust, and a better
            lifestyle for our customers.
          </p>
          <p className="text-gray-700 leading-relaxed text-left">
            Our mission is to promote healthy living while supporting local
            farmers. We believe in transparency, sustainability, and delivering
            the best nature has to offer. 🌱
          </p>
          <img
            src={param.image}
            alt="About us"
            className="rounded-2xl shadow-lg mt-8"
          />
        </div>
</>);
}

export default Intro;