import {useRef} from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Bio from "./components/Bio"
import Gallery from "./components/Gallery"
import Music from "./components/Music"
import Contact from "./components/Contact"
import Press from "./components/Press"

export default function App(){
  const heroRef = useRef(null);
  const bioRef = useRef(null);
  const galleryRef = useRef(null);
  const musicRef = useRef(null);
  const pressRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return(
    <>
    <Navbar scrollToSection={scrollToSection} refs={{heroRef, bioRef, galleryRef, musicRef, pressRef, contactRef }} />
      <div ref={heroRef}><Hero /></div>
      <div ref={bioRef} ><Bio /></div>
      <div ref={galleryRef}><Gallery /></div>
      <div ref={musicRef} ><Music /></div>
      <div ref={pressRef}><Press /></div>
      <div ref={contactRef} className=""><Contact /></div>
    </>
  )
}