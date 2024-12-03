'use client'
import Image from "next/image";
import Navbar from "@/app/assets/components/Navbar"

import { Logo, LogoText } from "./assets/images";

export default function Home() {


  return (
    <main className="bg-black relative text-white px-20">
      <Particles/>
      <Navbar/>
      
      <section id="home" className="flex h-screen flex-col items-center justify-center bg-[#151515]">
        <div className="w-full flex flex-col items-center justify-center -space-y-8">
          <Image src={Logo} alt="Logo" width={200} height={200}/>
          <Image src={LogoText} alt="Logo" width={200} height={200}/>
        </div>
      </section>
      <section className="flex h-screen flex-col items-center justify-center space-y-4 bg-[#2c2c2c]">
        <div className="bg-[#D9D9D9] w-1/2 h-2/5">
          {/* video */}
        </div>
        <div className="w-1/2 px-12 flex flex-col justify-center items-centerspace-y-2 text-center">
          <h1 className="text-lg font-medium">Look up. The sky's the limit</h1>
          {/* <div className="w-1/2"> */}
            <p>At Dric Designs, the sky’s the limit. Any design, website, or video
              is possible, and we're here to make it happen. With your vision and our execution,
              we can make your dreams come true.
            </p>
          {/* </div> */}
        </div>
      </section>

    </main>
  );
}
