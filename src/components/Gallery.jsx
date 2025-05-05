import img1 from  "../assets/about.JPG";
import img2 from "../assets/Gallery-1.JPEG";
import img3 from "../assets/Gallery-2.JPEG";
import img4 from "../assets/Gallery-3.JPG";
import img5 from  "../assets/Gallery-4.JPG";
import img6 from "../assets/Gallery-5.JPG";

import {LazyLoadImage} from "react-lazy-load-image-component";

const galleryImages = [img1,img2, img3, img4, img5, img6]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-sage py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-highlight mb-10 text-center font-heading">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group h-96"
            >
              <img
                src={src}
                alt={`Yingi Gallery ${index + 1}`}
                effect="blur"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
