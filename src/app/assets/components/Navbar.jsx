'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/app/assets/images";
import { inria_serif } from "@/app/assets/fonts";

import { useLenis } from "@studio-freight/react-lenis";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const lenis = useLenis();

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    let prevVal = scrollY.getPrevious();
    if (latest > prevVal && latest > 150) {
      setHidden(true);
    } else setHidden(false);
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, top: 0, x: "-50%" },
        hidden: { y: "-100%", top: 0, x: "-50%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "linear" }}
      className={`w-full fixed left-1/2 z-[200] -translate-x-1/2 duration-300`}
    >
      <nav className="flex w-full items-center justify-center bg-[#17191c]/50  shadow-2xl backdrop-blur-lg duration-300 p-5 px-20">
        <Image className="translate-x-1 h-[40px] w-auto 2xl:h-[35px] 3xl:h-12 mr-auto" src={Logo} alt="logo"/>
        <ul className={` ${inria_serif.className} flex fixed gap-8 text-base xl:text-base 2xl:text-lg 3xl:text-xl`}>
          {["Home", "Our Offer", "Works", "Contact"].map((link) => (
            <li
              key={link}
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                lenis.scrollTo("#" + link.replace(/\s+/g, "").toLowerCase());
              }}
            >
              {link}
            </li>
          ))}
        </ul>
        {/* <Link href="/contact" className="bg-[#333333]">
          Contact
        </Link> */}
      </nav>
    </motion.div>
  );
};
