
import Image from "next/image"

import Group48 from "/public/image/Group48.jpg"
import Group51 from "/public/image/Group51.png"
import Group49 from "/public/image/Group49.png"
import Group45 from "/public/image/Group45.png"



export default function Service(){
 return(
  <>
  <div className=" h-[600px]  bg-white  mt-20 ">
   <div>
   
    <h1 className=" text-center px-4 mt-6 font-abc font-bold ">CATEGORY</h1> <br />
    <h1 className="text-4xl text-center mt-2 font-abc font-bold ">We Offer Best Services</h1>
  </div>

    <div className="flex justify-between mt-24 "> 
     <div className="bg-white h-50 w-80 px-4 py-8 ml-8  shadow-lg rounded-xl  ease-in duration-300  even:shadow-orange-600 odd:shadow-rose-400 ">
     <Image src={Group48} alt="group48" className=" w-20 h-20 ml-24 text-center mb-4     "   />
      <h1 className="text-center font-bold " >Calculated Weather </h1>
      <p className="text-center mt-3 text-sm " >Built Wicket longer<br/> admire do barton <br/>  vanity itself do in it.</p>
     </div>

     <div className="bg-white h-50 w-80 px-4 py-8 ml-8 shadow-lg rounded-xl ease-in duration-300  even:shadow-green-600 odd:shadow-rose-400 ">
     <Image src={Group51} alt="group51" className=" w-24 h-20 ml-24 text-center mb-4     "   />
      <h1 className="text-center font-bold " >Calculated Weather </h1>
      <p className="text-center mt-3 text-sm " >Engrossed listening.<br /> Park gate sell they <br /> west hard for the.<br/> </p>
     </div>

     <div className="bg-white h-50 w-80 px-4 py-8 ml-6 shadow-lg rounded-xl ease-in duration-300  even:shadow-green-600 odd:shadow-yellow-400 ">
     <Image src={Group45} alt="image" className=" w-18 h-18 ml-24 text-center mb-4     "   />
      <h1 className="text-center font-bold mt-4" >Local Events </h1>
      <p className="text-center mt-3 text-sm">Barton vanity itself do<br /> in it. Preferd to men it <br/> engrossed listening. </p>
     </div>


     <div className="bg-white h-50 w-80 px-4 py-8 ml-8 mr-4 shadow-lg rounded-xl *:ease-in duration-300  even:shadow-blue-600 odd:shadow-rose-400 ">
     <Image src={Group49} alt="group49" className=" w-20 h-20 ml-24 text-center mb-4     "   />
      <h1 className="text-center  font-bold" >Customization </h1>
      <p className="text-center mt-3 text-sm " >We deliver outsourced<br/> aviation services for <br/>military customers.</p>
     </div>

     
  </div>
  
  </div>

  </>
 )
}