// Footer.jsx
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold font-heading mb-4 text-highlight">Let's Stay in Touch</h2>
          <p className="text-lg font-body text-gray-300">
            Reach out for bookings, inquiries, or collaborations anytime.
          </p>
        </div>

        <div className="flex justify-center gap-8 flex-wrap text-gray-300">
          <a
            href="mailto:narrieharry@yahoo.com"
            className="flex items-center gap-2 hover:text-highlight transition-colors"
          >
            <Mail className="w-5 h-5" />
            narrieharry@yahoo.com
          </a>

          <a
            href="tel:+2348012345678"
            className="flex items-center gap-2 hover:text-highlight transition-colors"
          >
            <Phone className="w-5 h-5" />
            08160565101, 08179485248
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.instagram.com/yingi_d_artiste"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
           <a
            href="https://www.instagram.com/yingi_d_artiste"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6"/> 
          </a>
          <a
            href="https://www.facebook.com/share/1AXtRXwDsx/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@yingi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
          </a>
        </div>

        {/* Footer bottom */}
        <div className="text-sm text-gray-500 pt-8 border-t border-gray-700">
          <p>&copy; 2025 Yingi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
