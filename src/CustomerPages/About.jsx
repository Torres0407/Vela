import { Award, Heart, Leaf, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router';
import Footer from '../Components/Footer';

const About = () => {
    const navigate = useNavigate();
  const values = [
    {
      icon: <Heart size={48} className="text-rose-600" />,
      title: "Self-Love First",
      description: "We believe beauty starts from within. Our products are designed to help you embrace and celebrate your natural radiance."
    },
    {
      icon: <Sparkles size={48} className="text-rose-600" />,
      title: "Timeless Elegance",
      description: "Every piece in our collection is carefully curated to bring sophistication and grace to your everyday life."
    },
    {
      icon: <Users size={48} className="text-rose-600" />,
      title: "Community Driven",
      description: "We're more than a brand—we're a community of confident individuals who support and inspire each other."
    },
    {
      icon: <Award size={48} className="text-rose-600" />,
      title: "Premium Quality",
      description: "We never compromise on quality. From materials to craftsmanship, excellence is our standard."
    },
    {
      icon: <ShieldCheck size={48} className="text-rose-600" />,
      title: "Hypoallergenic",
      description: "All our jewelry is made with hypoallergenic materials, ensuring comfort for even the most sensitive skin."
    },
    {
      icon: <Leaf size={48} className="text-rose-600" />,
      title: "Conscious Beauty",
      description: "Our skincare products are cruelty-free, paraben-free, and made with natural ingredients you can trust."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Vision",
      description: "Véla was born from a simple belief: beauty should be effortless, accessible, and empowering."
    },
    {
      year: "2021",
      title: "First Collection",
      description: "We launched our debut jewelry line, featuring elegant designs that quickly became customer favorites."
    },
    {
      year: "2022",
      title: "Expanding Horizons",
      description: "Added premium skincare to our collection, creating a complete beauty experience for our community."
    },
    {
      year: "2023",
      title: "Going Global",
      description: "Reached thousands of customers across Nigeria and beyond, building a loyal community of Véla lovers."
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description: "Committed to eco-friendly packaging and ethical sourcing, because beauty should never harm our planet."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200 py-20 sm:py-32 overflow-hidden">
        <div className="absolute w-96 h-96 bg-rose-900 opacity-5 rounded-full -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-rose-900 opacity-5 rounded-full -bottom-48 -right-48"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-rose-950 mb-6">
            About Véla
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
            Where Beauty Meets Balance
          </p>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Véla is where beauty meets balance. We celebrate confidence, radiance, and refined simplicity 
                through carefully curated jewelry and skincare designed to help you shine naturally.
              </p>
              <p>
                Founded with a passion for empowering individuals to embrace their authentic beauty, Véla has 
                grown into a trusted name for those seeking quality, elegance, and self-care. We believe that 
                true beauty radiates from within, and our mission is to provide products that enhance your 
                natural glow—both inside and out.
              </p>
              <p>
                Every piece tells a story of self-love. Because elegance should feel effortless.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-rose-50 rounded-2xl p-8 sm:p-12">
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-rose-900 mb-4">
                ✨ Glow Inside & Out
              </p>
              <p className="text-gray-600 text-lg">Our guiding philosophy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-rose-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800">
            Our Journey
          </h2>
          <div className="space-y-12">
            {timeline.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center group"
              >
                <div className="flex-shrink-0 w-32">
                  <div className="text-4xl font-serif font-bold text-rose-900 group-hover:scale-110 transition-transform">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-rose-50 p-6 rounded-xl group-hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-serif font-semibold text-rose-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-rose-900 to-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif mb-8">Our Mission</h2>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8">
            To empower every individual to embrace their unique beauty with confidence, 
            offering premium jewelry and skincare that celebrate self-love and authenticity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur px-6 py-3 rounded-full">
              Empowerment
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur px-6 py-3 rounded-full">
              Quality
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur px-6 py-3 rounded-full">
              Authenticity
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur px-6 py-3 rounded-full">
              Elegance
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 text-gray-800">
            Why Choose Véla?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-serif font-semibold text-rose-900 mb-4">
                For Jewelry Lovers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Hypoallergenic materials safe for sensitive skin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Timeless designs that never go out of style</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Premium quality at accessible prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Perfect for everyday wear and special occasions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-serif font-semibold text-rose-900 mb-4">
                For Skincare Enthusiasts
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Natural ingredients you can trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Dermatologically tested formulas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Cruelty-free and paraben-free products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 text-xl">✓</span>
                  <span>Suitable for all skin types</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-6">
            Join the Véla Family
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Experience the perfect blend of elegance and self-care. Discover products that help you 
            shine from the inside out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/shop')}
              className="bg-rose-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-rose-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Shop Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-rose-900 border-2 border-rose-900 px-10 py-4 rounded-lg font-bold hover:bg-rose-50 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;