import Image from "next/image"

import Group7 from "/public/image/Group7.png"
import Group11 from "/public/image/Group11.png"
import Group12 from "/public/image/Group12.png"
import Rectangle17 from "/public/image/Rectangle17.jpg"
import leaf1 from "/public/image/leaf1.png"
import send2 from "/public/image/send2.png"
import map1 from "/public/image/map1.png"
import building1 from "/public/image/building1.png"




export default function BookTrip(){
 return(
  <>
  <div className=" h-[680px]  bg-white">
   <div className="flex justify-between">
    <div className="">
      <div className="ml-28 py-8">
       <h1 className=" font-semibold font-abc">Easy and Fast</h1>
      <h1 className="text-5xl mt-6 font-abc font-bold ">Book your next trip <br/>
      in 3 easy steps</h1>
      </div>

      <div className="flex gap-4 mt-4 ml-28 ">
       <div>
        <Image src={Group7} alt="Group7" className=" h-10 w-10 " />
       </div>

        <div className="">
         <h1 className=" font-semibold font-abc ">Choose Destination</h1>
         <p>Lorem ipsum dolor sit amet, consectetur<br />
         adipiscing elit. Urna, tortor tempus.  </p>
        </div>
         </div>


      <div className="flex gap-4  ">
       <div className=" mt-8 ml-28">
        <Image src={Group11} alt="group11" className=" h-10 w-10 " />
       </div>

        <div className=" mt-5">
         <h1 className="  font-semibold font-abc ">Make Payment</h1>
         <p>Lorem ipsum dolor sit amet, consectetur<br />
         adipiscing elit. Urna, tortor tempus.  </p>
        </div>
      </div>


      <div className="flex gap-4 mt-8 ml-28 ">
       <div>
        <Image src={Group12} alt="group" className=" h-10 w-10 " />
       </div>

        <div className="">
         <h1 className="font-semibold font-abc">Reach Airport on Selected Date</h1>
         <p>Lorem ipsum dolor sit amet, consectetur<br />
         adipiscing elit. Urna, tortor tempus.  </p>
        </div>
      </div>
      </div>


       <div className="  mr-52 mt-24 "> 
        <div className="  w-[420px] h-[420px]  bg-white  rounded-3xl shadow-xl ease-in duration-300  even:shadow-orange-600 odd:shadow-blue-400   ">
        <Image  src={Rectangle17} alt="rectangel" className="w-[370px] h-[250px] ml-6 py-4 rounded-3xl " />
        <h1 className="ml-4" >Trip To Greece</h1>
         
         
        <div className="flex justify-start">
          <div className="mt-2 ml-4"><h1>14-29 June |</h1></div>
          <div className="mt-2 ml-4"> by Amit kannaujia </div>
        </div>

           <div className="flex justify-start gap-4  mt-6    ">
            <div >
             <Image src={leaf1} alt="leaf" className=" w-4 h-4 mt-1 ml-4 "      />
            </div>

            <div>
             <Image src={map1} alt="map" className=" w-4 h-4 mt-1 ml-4"      />
            </div>

            <div>
             <Image src={send2} alt="send" className=" w-4 h-4  mt-1  ml-4"      />
            </div>
           </div>
           
              
             <div className="flex justify-start gap-1"  >
              <div>
               <Image  src={building1}  alt="building" className="w-4 h-4  mt-5  ml-4 "  />
              </div>

              <div>
               <h1 className=" mt-5  ml-4">24 people going</h1>
              </div>

             </div>



        </div> 
      </div>


</div>






  </div>

  </>
 )
}