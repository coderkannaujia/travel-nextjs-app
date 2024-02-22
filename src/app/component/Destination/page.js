
import Image from "next/image"
import temple7 from "/public/image/temple7.jpg"
import navigation1 from "/public/image/navigation1.png"
import temple3 from "/public/image/temple3.jpg"
import temple4 from "/public/image/temple4.jpg"


export default function Desination(){
 return(
  <>
  <div className=" h-[780px]  bg-white   ">
   <div>
   <h1 className=" text-center px-4 mt-6 font-abc font-bold ">Top Selling</h1> <br />
    <h1 className="text-4xl text-center mt-2 font-abc font-bold ">Top Destinations</h1>
  </div>

    <div className="flex  justify-around  mt-24 bg-white h-[500px] boder-2  "> 
   
      <div className=" w-[400px] h-[457px] bg-white rounded-2xl shadow-xl  ease-in duration-300  even:shadow-orange-600 odd:shadow-rose-400  "> 
       <Image  src={temple7} alt="temple" className=" w-[380px] h-[300px]  mt-3 ml-2 rounded-xl  "  />
       <div className=" flex justify-between ">
        <div><h1 className="mt-8 ml-4  font-abc ">Kedarnath Uttarakhand,temple</h1></div>
        <div><h1 className="mt-8 mr-8" > $ 5,42k </h1></div>
       </div>
          
       <div className=" flex justify-start space-x-2 mt-3 gap-3 ">
        <div><Image  src={navigation1} alt="navigation"  className="ml-4 " /></div>
        <div><h1 className=" mb-2 font-abc " > 10 Days Trip </h1></div>
       </div>
       </div>

         
       <div className=" w-[400px] h-[457px] bg-white  rounded-2xl shadow-xl ease-in duration-300  even:shadow-orange-600 odd:shadow-rose-400  "> 
       <Image  src={temple3} alt="temple" className=" w-[380px] h-[300px]  mt-3 ml-2 rounded-xl  "  />
       <div className=" flex justify-between ">
        <div><h1 className="mt-8 ml-4  font-abc ">Jagannath Puri Odisha, temple</h1></div>
        <div><h1 className="mt-8 mr-8" > $ 5,42k </h1></div>
       </div>
          
       <div className=" flex justify-start space-x-2 mt-3 gap-3 ">
        <div><Image  src={navigation1}  className="ml-4 " /></div>
        <div><h1 className=" mb-2 font-abc " > 10 Days Trip </h1></div>
       </div>
       </div>



       <div className=" w-[400px] h-[457px] bg-white  rounded-2xl shadow-xl ease-in duration-300  even:shadow-orange-600 odd:shadow-yellow-400  "> 
       <Image  src={temple4} className=" w-[380px] h-[300px]  mt-3 ml-2 rounded-xl  "  />
       <div className=" flex justify-between ">
        <div><h1 className="mt-8 ml-4  font-abc ">Radhe krihna Vrindavan, temple</h1></div>
        <div><h1 className="mt-8 mr-8" > $ 5,42k </h1></div>
       </div>
          
       <div className=" flex justify-start space-x-2 mt-3 gap-3 ">
        <div><Image  src={navigation1}  className="ml-4 " /></div>
        <div><h1 className=" mb-2 font-abc " > 10 Days Trip </h1></div>
       </div>
       </div>



    </div>
  




  </div>

  </>
 )
}