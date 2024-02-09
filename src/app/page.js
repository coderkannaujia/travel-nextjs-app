"use client"
import Image from 'next/image'
import Navbar from './component/navbar/page'
import Service from './component/header/page'
import Desination from './component/Destination/page'
import BookTrip from './component/BookTrip/page'
import Testimonials from './component/Testimonials/page'
import Logos from './component/logos/page'
import Subscribe from './component/subscribe/page'
import Footer from './component/footer/page'
import Link from 'next/link'
import {useRouter} from "next/navigation"


export default function Home() {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <Service />
      <Desination />
      <BookTrip />
      <Testimonials />
      <Logos />
      <Subscribe />
      <Footer />
     
    </>
  )
}
