'use client'
import Image from "next/image";
import Navbar from "@/app/assets/components/Navbar"
import SmoothScroll from "@/app/assets/components/SmoothScroll"
import { Logo, LogoText, Rocketship, TaperedLine, Curve, StarryParticles } from "./assets/images";
import { inria_serif, hurricane } from "./assets/fonts";

export default function Home() {

  return (
    <SmoothScroll>
      {/* <CustomScrollbar/> */}
      <video className="z-0 fixed top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
            <source src="/videos/particles.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <main className="z-10  relative text-white px-20" suppressHydrationWarning >
        <Navbar/>
        
        
        <section id="home" className="flex h-screen flex-col items-center justify-center bg-[#151515]"> {/* bg-[#151515] */}
          <div className="w-full flex flex-col items-center justify-center -space-y-8">
            {/* <div>
            <Image src={Rocketship} alt="Rocketship" layout="fixed" width={950} height={950} objectFit="cover"
              className="5"
            />
            </div> */}
            <Image src={Logo} alt="Logo" width={200} height={200} className="select-none"/>
            <Image src={LogoText} alt="Logo" width={200} height={200} className="select-none"/>
            <p className={`${inria_serif.className} text-sm text-white font-medium translate-y-8`}>Modern, Exquisite Websites.</p>
          </div>
        </section>
        <section className="flex h-screen flex-col items-center justify-center bg-[#111111] "> {/* bg-[#111111] */}
          <div className="z-10 bg-[#D9D9D9] drop-shadow-glow w-1/2 h-2/5 mb-4">
            {/* video */}
          </div>
          <div className="z-10 w-1/2 px-12 flex flex-col justify-center items-centerspace-y-2 text-center">
            <h1 className="text-lg font-semibold">Look up. The sky's the limit</h1>
            <p className="text-base font-medium">At Dric Designs, the sky’s the limit. Any design, website, or video
              is possible, and we're here to make it happen. With your vision and our execution,
              we can make your dreams come true.
            </p>
          </div>
          <Image src={Rocketship} alt="Rocketship" layout="fixed" width={950} height={950} objectFit="cover"
            className="absolute z-0 -translate-x-10 rotate-[30deg] blur-lg opacity-60 contrast-125 select-none"
          />
        </section>

        <section className="flex h-screen flex-col items-center justify-center bg-[#151515]"> {/* bg-[#111111] */}
          <div className="z-10 w-1/2 px-12 flex flex-col justify-center items-centerspace-y-2 text-center">
            <h1 className="text-4xl font-medium">Kick back and let us do the work.</h1>
            <p className="text-lg font-normal px-16">
              There’s no need to have you stressing over the website. 
              Our team is at work to ensure your product is delivered smoothly.
            </p>
          </div>
        </section>
        <section id="works" className="flex h-screen flex-col items-center p-12 bg-[#111111]"> {/* bg-[#111111] */}
          <Image src={StarryParticles} alt="Starry Particles" layout="fixed" width={2000} height={2000} objectFit="cover" 
            className="absolute z-0 -translate-y-72 mix-blend-screen opacity-50 blur-[2px] contrast-125 select-none"
          />
          <div className="z-10 px-12 w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <h1 className={`${hurricane.className} z-10 text-8xl font-bold mb-12`}>Past Websites & Designs</h1>
              <Image src={TaperedLine} alt="Tapered Line" layout="fixed" width={230} height={230} objectFit="cover"
                className="absolute z-0 translate-y-16 translate-x-[31rem] select-none"
              />
            </div>

            <div className="grid grid-cols-3 grid-flow-row gap-y-12 gap-x-12 w-full h-full">
              <div className="z-10 bg-[#D9D9D9] drop-shadow-glow2 w-92 h-48">
                {/* picture of websites */}
              </div>
              <div className="z-10 bg-[#D9D9D9] drop-shadow-glow2 w-92 h-48">
                {/* picture of websites */}
              </div>
              <div className="z-10 bg-[#D9D9D9] drop-shadow-glow2 w-92 h-48">
                {/* picture of websites */}
              </div>
              <div className="z-10 bg-[#D9D9D9] drop-shadow-glow2 w-92 h-48">
                {/* picture of websites */}
              </div>
              <div className="z-10 bg-[#D9D9D9] drop-shadow-glow2 w-92 h-48">
                {/* picture of websites */}
              </div>
              <div className="z-10 bg-[#D9D9D9] drop-shadow-glow2 w-92 h-48">
                {/* picture of websites */}
              </div>
            </div>
            <div className="z-10 pt-48 pb-80 flex flex-col space-y-4 items-center">
              <h1 className="text-3xl font-bold">Check Other Designs</h1>
              <button 
              className="bg-[#272727] hover:bg-[#1f1f1f] hover:scale-105 py-4 px-5 text-white font-bold rounded-2xl w-1/2 transition-all duration-200 ease-in-out ">Visit</button>
            </div>
          </div>
        </section>
        <section className="flex h-screen flex-col items-center justify-center bg-[#151515]"> {/* bg-[#111111] */}
          <div className="z-10 w-2/3 px-20 flex flex-col justify-center items-center space-y-2 text-center">
            <Image src={Curve} alt="Tapered Line" layout="fixed" width={1358} height={1358} objectFit="cover"
              className="absolute z-0 translate-y-3 select-none"
            />
            <div className="z-10 flex flex-col space-y-8">
              <h1 className="text-4xl font-bold">Ready to Take Your Business</h1>
              <h1 className="text-4xl font-bold">to The NEXT Level?</h1>
            </div>
            <button 
              className="z-10 bg-[#272727] hover:bg-[#1f1f1f] py-4 px-5 text-white font-bold  w-2/6 transition-all duration-200 ease-in-out ">
                Schedule an Appointment
              </button>
          </div>
        </section>
        <footer className="z-10 w-full bg-[#111111] flex items-center justify-center p-5 ">
          <div className="grid grid-cols-3 gap-x-24 justify-items-center items-center">
            <h1 className="text-6xl font-bold text-white">Join Us</h1>
            <div className="flex flex-col justify-center items-center">
              <Image src={Logo} alt="Logo" width={200} height={200} className="select-none"/>
              <Image src={LogoText} alt="Logo" width={200} height={200} className="-translate-y-8 select-none"/>

              <p className="text-base text-white">© 2024 Dric Designs. All Rights Reserved.</p>
            </div>
            <h1 className="text-6xl font-bold text-white transition-all duration-500 ease-in-out">Contact</h1>
          </div>
        </footer>
      </main>
      
    </SmoothScroll>
  );
}
