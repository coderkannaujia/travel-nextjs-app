import Image from "next/image"
import Link from "next/link"
import plane from "/public/image/plane.jpg"
import girls from "/public/image/girls.png"
import Playbutton from "/public/image/Playbutton.jpg"
import Decore from "/public/image/Decore.png"



export default function Header(){
return (
<>

<section className=" header h-[850px] bg-white ">

<div className=" flex justify-between  relative">
    <div className=""> 
    {/* <Image src="/girls.png" width="800" height="600" className="  mr-48  absolute " ></Image> */}
     {/* <img class="  w-150  h-150 mr-52  " src="girls.png" /> */}
    <div className=" flex justify-around   absolute gap-72 py-2 px-2  ">
    <div className=""> <ul><li><a href="#" className="font-semibold text-2xl ml-10 ">AMIT</a></li></ul> </div>


 <div>
  <ul className="flex  space-x-7 font-bold  gap-10">
   <li><Link href="/component/Destination">Desination</Link></li>
   <li><a href="#">Hotel</a></li>
   <li><Link href="/component/logos">Flights</Link></li>
   <li><a href="#">Booking</a></li>
   <li><a href="#">Login</a></li>
   <li><a href="#">Signup</a></li>
   <li><a href="#">EN</a></li>
  </ul>
</div>


 </div>

 </div>
  

 {/* ///////// plane image ///// */}
 <Image class="origin-top-left  absolute   ml-[540px]  mt-96" src={plane}  alt="plane" />

{/* ///// girl image /////////////// */}
 <Image class="  w-150  h-150 mr-52 absolute ml-[468px] mt-28 " src={girls} alt="girls"  />

 <Image class=" origin-top-left  absolute   ml-[1110px]  mt-56   " src={plane}  alt="plane" />

     <div className="mt-44 ml-10 ">
     <h1 className=" text-orange-500 text-xl  font-semibold ">Best Destinations around the world</h1>
   <h1 className="font-abc text-blue-950 text-7xl mt-6 font-bold ">Travel, enjoy<br />
   and live a new<br />
    and full life</h1>


    <p className="mt-4 text-md font-abc w-2/3 ">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>


    <div className="flex justify-start gap-2 ">
     <div>
      <button className="bg-wdc-yello  text-white  py-3 px-6  rounded-md mt-6">Find out more</button> 
      </div>
      <div className=" inline-flex h-20 mt-6 bg-white px-2  rounded-md ">
      <Image src={Playbutton} alt="playbutton"  className=" w-24 h-24 " />
     <h1 className=" mt-4 "><a href="#">Play demo</a></h1>
      </div>
     
    </div>
 
     </div>
    

    

    <Image class="w-130  h-90 " src={Decore} alt="decore" />
  

    </div>
 </section>
</>
 )
}








































































































































































// import Image from "next/image"
// import { FaPlay } from "react-icons/fa";

// export default function Navbar(){

//  return(
// <>
// {/* bg-pink-200 */}
// {/* <div className=" flex justify-around bg-white py-6 px-4   ">
//   <div className="">
//    <ul><li><a href="#" className="font-semibold text-2xl ">Jadoo</a></li></ul></div>


//  <div>
//   <ul className="flex gap-4 space-x-7 font-bold ">
//    <li><a href="#">Desination</a></li>
//    <li><a href="#">Hotel</a></li>
//    <li><a href="#">Flights</a></li>
//    <li><a href="#">Booking</a></li>
//    <li><a href="#">Login</a></li>
//    <li><a href="#">Signup</a></li>
//    <li><a href="#">EN</a></li>
//   </ul>

//  </div>
//  </div> */}

//  <section className=" header h-[860px]  bg-indigo-500 ">


// <div className=" flex justify-around bg-red-500  py-6 px-4   ">
//   <div className="">
//    <ul><li><a href="#" className="font-semibold text-2xl ">Jadoo</a></li></ul></div>


//  <div>
//   <ul className="flex gap-4 space-x-7 font-bold ">
//    <li><a href="#">Desination</a></li>
//    <li><a href="#">Hotel</a></li>
//    <li><a href="#">Flights</a></li>
//    <li><a href="#">Booking</a></li>
//    <li><a href="#">Login</a></li>
//    <li><a href="#">Signup</a></li>
//    <li><a href="#">EN</a></li>
//   </ul>

//  </div>
//  </div>




//   <div className=" flex justify-around ">
//    <div className="py-40 ml-20 ">
//    <h1 className=" text-orange-500 text-xl font-semibold ">Best Destinations around the world</h1>
//    <h1 className="font-abc text-blue-950 text-7xl mt-4 font-bold ">Travel, enjoy<br />
//      and live a new<br />
//     and full life</h1>
//     <p className="mt-4 text-md font-abc w-2/3 ">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

//     <div className="flex justify-start gap-2 ">
//      <div>
//       <button className="bg-wdc-yello  text-white  py-3 px-6  rounded-md mt-6">Find out more</button> 
//       </div>
//       <div className=" inline-flex h-20 mt-6 bg-white px-2  rounded-md ">
//      <Image src="/Play button.jpg"  width="90" height="100" className="  "></Image>
//      <h1 className=" mt-4 "><a href="#">Play demo</a></h1>
//       </div>
     
//     </div>

// </div>
//     {/* <h1 className= "text-5xl font-abc  ">my name amit</h1> */}

  
//     {/* <div className="flex content-center w- items-center rounded-full "> */}
//     <div className="flex  relative">
//     <div> 
//     {/* <Image src="/girls.png" width="800" height="600" className="  mr-48  absolute " ></Image> */}
//      <img class="  w-150  h-150 mr-52 absolute ml-[180px] mb-40 " src="amt.png" />

//     </div>
 
//     {/* <img class="  w-150  h-150 mr-52 " src="Decore.png" /> */}
//     <img class="  w-130  h-90 mr-52 " src="Decore.png" />
//     </div>





//     </div>
//  </section>
// </>
//  )
// }