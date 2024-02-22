import Image from "next/image"

import Group46 from "/public/image/Group46.png"

export default function Subscribe(){
 return (
  <>
   <div className="h-[450px] bg-white  mt-6  ">


     <div className="h-[400px] w-[1000px] ml-36 bg-indigo-50 rounded-full shadow-lg ease-in duration-300  even:shadow-orange-600 odd:shadow-rose-400  ">
      <div className="py-32">
       <h1 className="text-center text-xl font-semibold  font-abc ">Subscribe to get information, latest news and other<br/>
       interesting offers about Jadoo
       </h1>
      </div>

      <div className="flex justify-start gap-8 mb-10 ml-72">
        <div className="flex justify-start gap-4 bg-white w-64 rounded-md shadow-lg ease-in duration-300  even:shadow-orange-600 odd:shadow-rose-400 " >
         <div> <Image src={Group46} className=" w-4 h-4  ml-16 mt-3" /></div>
        <div className="mt-2"><a href="#">your email</a></div>
        </div>

         <div>
          <button className="bg-orange-500 py-3 px-4  text-white rounded-xl ">Subscribe</button>
         </div>
       </div>



     </div>

    







   </div>
  </>
 )
}