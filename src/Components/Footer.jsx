import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing! 🎉');
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Shop', id: '/shop' },
    { name: 'About Us', id: '/about' },
    { name: 'Contact', id: '/contact' },
    { name: 'Wishlist', id: '/wishlist' }
  ];

  const customerService = [
    { name: 'Shipping & Delivery', href: '#' },
    { name: 'Returns & Refunds', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ];

  return (
    <>
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-rose-400 mb-4">Véla</h3>
            <p className="text-gray-300 mb-6">Glow Inside & Out</p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe to newsletter"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-rose-400 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="w-full bg-rose-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-rose-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => navigate(link.id)}
                    className="text-gray-300 hover:text-rose-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-rose-400 mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {customerService.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-rose-400 mb-4">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-rose-400 mt-1 flex-shrink-0" />
                <a href="mailto:hello@vela.ng" className="text-gray-300 hover:text-rose-400 transition-colors">
                  hello@vela.ng
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-rose-400 mt-1 flex-shrink-0" />
                <a href="tel:+234XXXXXXXXX" className="text-gray-300 hover:text-rose-400 transition-colors">
                  +234 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-rose-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-900 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-900 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-lg">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-900 transition-colors"
                aria-label="Twitter"
              >
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Véla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};
export default Footer;








// import { Mail, MapPin, Phone } from 'lucide-react';
// import { useState } from 'react';
// import '../Styles/Footer.css';

// const Footer = ({ navigate }) => {
//   const [email, setEmail] = useState('');

//   const handleSubscribe = () => {
//     if (email) {
//       alert('Thank you for subscribing! 🎉');
//       setEmail('');
//     }
//   };

//   const quickLinks = [
//     { name: 'Shop', id: 'shop' },
//     { name: 'About Us', id: 'about' },
//     { name: 'Contact', id: 'contact' },
//     { name: 'Wishlist', id: 'wishlist' }
//   ];

//   const customerService = [
//     { name: 'Shipping & Delivery', href: '#' },
//     { name: 'Returns & Refunds', href: '#' },
//     { name: 'Privacy Policy', href: '#' },
//     { name: 'Terms & Conditions', href: '#' }
//   ];

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-grid">
//           {/* Brand Section */}
//           <div>
//             <h3 className="footer-brand-title">Véla</h3>
//             <p className="footer-brand-tagline">Glow Inside & Out</p>
//             <div className="footer-newsletter">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Subscribe to newsletter"
//                 className="footer-newsletter-input"
//               />
//               <button
//                 onClick={handleSubscribe}
//                 className="footer-newsletter-button"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="footer-section-title">Quick Links</h3>
//             <ul className="footer-links-list">
//               {quickLinks.map(link => (
//                 <li key={link.id}>
//                   <button
//                     onClick={() => navigate(link.id)}
//                     className="footer-link-button"
//                   >
//                     {link.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h3 className="footer-section-title">Customer Service</h3>
//             <ul className="footer-links-list">
//               {customerService.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={item.href}
//                     className="footer-link"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="footer-section-title">Connect</h3>
//             <ul className="footer-contact-list">
//               <li className="footer-contact-item">
//                 <Mail size={20} className="footer-contact-icon" />
//                 <a href="mailto:hello@vela.ng" className="footer-contact-link">
//                   hello@vela.ng
//                 </a>
//               </li>
//               <li className="footer-contact-item">
//                 <Phone size={20} className="footer-contact-icon" />
//                 <a href="tel:+234XXXXXXXXX" className="footer-contact-link">
//                   +234 XXX XXX XXXX
//                 </a>
//               </li>
//               <li className="footer-contact-item">
//                 <MapPin size={20} className="footer-contact-icon" />
//                 <span className="footer-contact-text">Lagos, Nigeria</span>
//               </li>
//             </ul>

//             {/* Social Media Icons */}
//             <div className="footer-social">
//               <a
//                 href="#"
//                 className="footer-social-link"
//                 aria-label="Instagram"
//               >
//                 <span className="footer-social-icon">📷</span>
//               </a>
//               <a
//                 href="#"
//                 className="footer-social-link"
//                 aria-label="Facebook"
//               >
//                 <span className="footer-social-icon">📘</span>
//               </a>
//               <a
//                 href="#"
//                 className="footer-social-link"
//                 aria-label="Twitter"
//               >
//                 <span className="footer-social-icon">🐦</span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="footer-bottom">
//           <p className="footer-copyright">
//             &copy; {new Date().getFullYear()} Véla. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;