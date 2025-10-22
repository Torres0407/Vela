import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={28} className="text-rose-600" />,
      title: "Email Us",
      details: "hello@vela.ng",
      subtext: "We'll respond within 24 hours",
      link: "mailto:hello@vela.ng"
    },
    {
      icon: <Phone size={28} className="text-rose-600" />,
      title: "Call Us",
      details: "+234 XXX XXX XXXX",
      subtext: "Mon-Fri, 9AM - 6PM WAT",
      link: "tel:+234XXXXXXXXX"
    },
    {
      icon: <MapPin size={28} className="text-rose-600" />,
      title: "Visit Us",
      details: "Lagos, Nigeria",
      subtext: "Appointments available",
      link: null
    },
    {
      icon: <Clock size={28} className="text-rose-600" />,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      subtext: "Sat: 10AM - 4PM",
      link: null
    }
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day return policy on all unworn jewelry and unopened skincare products."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard delivery within Lagos takes 1-3 business days. Other locations in Nigeria take 3-7 business days."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! We offer complimentary gift wrapping on all orders. Just add a note at checkout."
    },
    {
      question: "Are your jewelry pieces hypoallergenic?",
      answer: "Absolutely! All our jewelry is made with hypoallergenic materials suitable for sensitive skin."
    }
  ];

  const socialLinks = [
    { icon: <Instagram size={24} />, name: "Instagram", handle: "@VelaBeauty", link: "#" },
    { icon: <Facebook size={24} />, name: "Facebook", handle: "Véla Beauty", link: "#" },
    { icon: <Twitter size={24} />, name: "Twitter", handle: "@VelaBeauty", link: "#" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-rose-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose-950 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-rose-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg font-serif font-semibold text-rose-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-800 font-medium hover:text-rose-900 transition-colors block mb-1"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-800 font-medium mb-1">{info.details}</p>
                )}
                <p className="text-sm text-gray-600">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <ContactForm/>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-rose-900 mb-6">
                  How We Can Help
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Product Inquiries</h4>
                      <p className="text-gray-600 text-sm">Questions about our jewelry or skincare products</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Order Support</h4>
                      <p className="text-gray-600 text-sm">Track orders, returns, and exchanges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Custom Orders</h4>
                      <p className="text-gray-600 text-sm">Personalized jewelry and bulk orders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">General Feedback</h4>
                      <p className="text-gray-600 text-sm">Share your experience or suggestions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-rose-900 to-rose-800 p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Connect With Us
                </h3>
                <p className="mb-6 text-rose-100">
                  Follow us on social media for updates, exclusive offers, and inspiration
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex items-center gap-4 p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                    >
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-sm text-rose-100">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-rose-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-rose-50 rounded-xl p-6 group cursor-pointer hover:shadow-md transition-shadow"
              >
                <summary className="font-semibold text-lg text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-rose-600 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Still have questions?{' '}
              <a href="mailto:hello@vela.ng" className="text-rose-900 font-semibold hover:underline">
                Email us directly
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-center text-rose-900 mb-8">
            Find Us
          </h2>
          <div className="bg-rose-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin size={64} className="text-rose-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg font-semibold">Lagos, Nigeria</p>
              <p className="text-gray-600">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
};
