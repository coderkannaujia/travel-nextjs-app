import Image from "next/image"
import image27 from "/public/image/image27.png"
import image28 from "/public/image/image28.png"
import image29 from "/public/image/Image29.png"
import image30 from "/public/image/image30.png"
import image31 from "/public/image/image31.png"


export default function Logos(){
 return(
 <>

 <div className="h-[200px] bg-white ">

{/* 
<div className="h-[200px] bg-blue-500 mt-4 "> */}

  <div className="flex justify-between gap-6  py-18">
   <div className="mt-16">
      <Image src={image27} alt="image27" className="w-28 h-32  ml-16"  />
   </div>

   <div className="mt-16">
      <Image src={image28} alt="image28" className="w-28 h-32"  />
   </div>

   <div className="mt-16">
      <Image src={image29}  alt="image29"  className="w-28 h-32" />
   </div>

   <div className="mt-16">
      <Image src={image30}    alt="image30" className="w-22 h-22  mt-12 "  />
   </div>

   <div className="mt-16">
      <Image src={image31} alt="image31" className="w-22 h-22 mt-12 mr-16 "  />
   </div>

  </div>
 {/* </div> */}











 </div>
 </>
 )
}