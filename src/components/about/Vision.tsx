interface IVision{
    title:string;
    vision:string;
    mission:string;
}
const Vision=(param:IVision)=>{
    return (<>
     <div className="bg-green-100 rounded-2xl p-8 shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
             {param.title}
            </h3>
            <p className="text-gray-700 text-left text-justify">
             {param.vision}
            </p>
            <br/>
             <p className="text-gray-700 text-left text-justify">
            {param.mission}
            </p>
          </div>
    </>);
}

export default Vision;