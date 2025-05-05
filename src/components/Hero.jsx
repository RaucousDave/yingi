import heroImg from "../assets/Yingi...JPG";
import {Music} from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-sage text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-heading">
            Meet <span className="text-highlight">Yingi</span>
          </h1>
          <p className="text-base text-white/90 font-body">
            A voice with soul. A journey told in rhythm and emotion. Dive into the soundscape of a rising star.
          </p>
          <a
            href="#music"
            className="flex gap-2 bg-burnt hover:bg-orange-700 text-white w-[50%] font-medium px-6 py-3 rounded-full transition shadow-lg font-body"
          >
            Explore the Music <Music/>
            
          </a>
        </div>

        {/* Image with overlay flair */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-highlight">
            <img
              src={heroImg}
              alt="Yingi"
              className="object-cover w-full h-[400px] md:h-[500px]"
            />
          </div>

          {/* Glow/Backdrop light effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-burnt/30 to-highlight/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
