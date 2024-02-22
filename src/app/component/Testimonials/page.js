import Image from "next/image"

import Group61 from "/public/image/Group61.png"
import image from "/public/image/image.png"

export default function Testimonials(){
 return(
  <>
  
     <div className="bg-white  h-[440px]">
       <div className="flex justify-between">
           <div className="ml-40 mt-8">
           <h1>Testimonials</h1>
           <h1 className="text-4xl font-bold font-abc mt-4 ">What people say<br />
           about Us.
           </h1>

           <Image  src={Group61}  alt="group61" className=" mt-24 text-3xl  "   />
           </div>

           <div className="mr-40 mt-8 ">
            <Image  src={image} alt="image" className="w-10 h-10   mr-96"      />
            <p className="ml-8 font-semibold  ">“On the Windows talking painted pasture yet its<br /> express parties use. Sure last upon he same as<br /> knew next. Of believed or diverted no.”</p>
            <div className="mt-8">
            <h1 className="ml-8 font-semibold  ">Mike taylor</h1>
            <h1 className="ml-8 font-semibold">Delhi, Hindustan</h1>
            </div>

             <div className="mt-8 ml-20">
             <h1 className="font-semibold">Chris Thomas</h1>
             <h1 className="font-semibold">CEO of Red Button</h1>
             </div>

           </div>
       </div>
      </div> 
  
  
  </>
 )
}