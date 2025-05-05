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
            Yingi is a soulful singer, performer, and songwriter from Port Harcourt, Nigeria.
            Her music blends powerful vocals with heartfelt storytelling rooted in her Ijaw heritage.
            <br /><br />
            From the vibrant waterside streets of Borokiri to the quiet elegance of GRA,
            Yingi embodies the duality of her upbringing. Though she studied International Business
            at Bells University, her heart beats for music and creative expression.
            <br /><br />
            Since her debut in 2021, she’s been on a steady rise. Her 2024 <em>Waterside Girl EP</em>
            introduced fans to her cultural soundscape, earning love from her community.
            In 2025, she followed up with <em>Asawana</em> — another celebration of her roots and growth.
            <br /><br />
            With every song, Yingi invites you into her world — a space where culture, emotion,
            and sound collide.
          </p>
        </div>

      </div>
    </section>
  );
}