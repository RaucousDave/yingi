import { useState } from "react";
import { Menu, X, House, Music, Image, Info, Mail, Newspaper } from "lucide-react";

export default function Navbar({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-burnt font-black tracking-wide text-3xl font-heading">YINGI</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-body">
         <button
            onClick={() => scrollToSection(refs.heroRef)}
            className="flex items-center gap-1 hover:text-burnt transition"
          >
            <House className="w-4 h-4" /> Home
          </button>
          <button
            onClick={() => scrollToSection(refs.bioRef)}
            className="flex items-center gap-1 hover:text-burnt transition"
          >
            <Info className="w-4 h-4" /> Bio
          </button>
          <button
            onClick={() => scrollToSection(refs.galleryRef)}
            className="flex items-center gap-1 hover:text-burnt transition"
          >
            <Image className="w-4 h-4" /> Gallery
          </button>
          <button
            onClick={() => scrollToSection(refs.musicRef)}
            className="flex items-center gap-1 hover:text-burnt transition"
          >
            <Music className="w-4 h-4" /> Music
          </button>
           <button
            onClick={() => scrollToSection(refs.pressRef)}
            className="flex items-center gap-1 hover:text-burnt transition"
          >
            <Newspaper className="w-4 h-4" /> Press
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="flex items-center gap-1 hover:text-burnt transition"
          >
            <Mail className="w-4 h-4" /> Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-burnt focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-cream shadow-lg z-40 py-7 px-3 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col space-y-6 p-6 text-gray-800 text-lg font-body">
         <button
            onClick={() => { scrollToSection(refs.heroRef); setIsOpen(false); }}
            className="flex items-center gap-2 hover:text-burnt"
          >
            <House className="w-5 h-5" /> Home
          </button>
          <button
            onClick={() => { scrollToSection(refs.bioRef); setIsOpen(false); }}
            className="flex items-center gap-2 hover:text-burnt"
          >
            <Info className="w-5 h-5" /> Bio
          </button>
          <button
            onClick={() => { scrollToSection(refs.galleryRef); setIsOpen(false); }}
            className="flex items-center gap-2 hover:text-burnt"
          >
            <Image className="w-5 h-5" /> Gallery
          </button>
          <button
            onClick={() => { scrollToSection(refs.musicRef); setIsOpen(false); }}
            className="flex items-center gap-2 hover:text-burnt"
          >
            <Music className="w-5 h-5" /> Music
          </button>
          <button
            onClick={() => { scrollToSection(refs.pressRef); setIsOpen(false); }}
            className="flex items-center gap-2 hover:text-burnt"
          >
            <Newspaper className="w-5 h-5" /> Press
          </button>
          <button
            onClick={() => { scrollToSection(refs.contactRef); setIsOpen(false); }}
            className="flex items-center gap-2 hover:text-burnt"
          >
            <Mail className="w-5 h-5" /> Contact
          </button>
        </div>
      </div>

      {/* Backdrop (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
