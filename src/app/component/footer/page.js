import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


export default function Footer(){
 return (
  <>

<footer class="  bg-text h-[500px] mt-10 relative ">
   <div className="flex justify-between ">
      <div className="ml-10">
       <h1 className="text-3xl font-bold font-abc">Jadoo.</h1>
       <p className="mt-4">Book your trip in minute, get full<br />
       Control for much longer.
       </p>
      </div>

      <div>
       <h1 className="font-semibold text-xl">Company</h1>
       <ul className="mt-4">
        <li className="mt-2"><a href="#">About</a></li>
        <li className="mt-2"><a href="#">Careers</a></li>
        <li className="mt-2"><a href="#">Mobile</a></li>
       </ul>
      </div>

      <div>
       <h1 className="font-semibold text-xl">Contact</h1>
       <ul className="mt-4">
        <li className="mt-2"><a href="#">Help/FAQ</a></li>
        <li className="mt-2"><a href="#">Press</a></li>
        <li className="mt-2"><a href="#">Affilates</a></li>
       </ul>
      </div>

      <div>
       <h1 className="font-semibold text-xl">More</h1>
       <ul className="mt-4">
        <li className="mt-2"><a href="#">Airlinefees</a></li>
        <li className="mt-2"><a href="#">Airline</a></li>
        <li className="mt-2"><a href="#">Low fare tips</a></li>
       </ul>
      </div>


      <div className="flex justify-between gap-4   ">
        <div>
         <FaFacebookSquare  className="w-8 h-8  " />
        </div>

        <div>
        <FaInstagram  className="w-8 h-8" />

        </div>


        <div>
        <FaSquareTwitter className="w-8 h-8 mr-10 "/><br />
        </div>
         {/* <h1 className="mr-14 mt-2">Discover our app</h1> */}
        </div>

            
   </div>
   <h1 className="text-center mt-40 text-2xl">All rights reserved@jadoo.co</h1>
</footer>
  </>
 )
}

