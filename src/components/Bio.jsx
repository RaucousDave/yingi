import bioImg from "../assets/about.JPG"
import {LazyLoading} from "react-lazy-load-image-component";

export default function Bio() {
  return (
    <section className="bg-cream py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

        {/* Image – soft and artistic */}
        <div className="w-full md:w-[70%] h-[400px] md:h-[400px] mx-auto md:mx-0 flex justify-center">
          <img
            src={bioImg}
            alt="Yingi"
            effect="blur"
            className="object-cover md:w-full md:h-full rounded-[2rem] shadow-2xl"
          />
        </div>

        {/* Bio Text */}
        <div>
          <h2 className="text-5xl font-bold text-burnt font-heading mb-4">About Yingi</h2>
          <p className="text-base leading-relaxed font-body text-gray-700">
            Yingi is more than a voice—she’s a vessel of heritage, emotion, and soul. A singer, songwriter, and performer from Port Harcourt, Nigeria, her sound carries the heartbeat of the Ijaw people, wrapped in velvet vocals and storytelling that stirs the spirit.

From the bustling waterside streets of Borokiri to the quiet charm of GRA, Yingi’s upbringing is a tale of contrast—and it breathes through her art. Though trained in International Business at Bells University, her true education has always been in melody, rhythm, and feeling.
<br/><br/>
Since her 2021 debut, Yingi has been rising with grace and purpose. Her 2024 EP, <em>Waterside Girl</em>, painted a vivid picture of her cultural landscape, resonating deeply with her community and beyond. In 2025, she returned with Asawana—an ode to growth, identity, and home.
<br/><br/>
With every lyric and note, Yingi opens a door to her world—a place where tradition meets soul, and every song is a story worth feeling.
          </p>
        </div>

      </div>
    </section>
  );
}