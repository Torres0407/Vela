import { Headphones, Lock, Truck } from 'lucide-react';
import { useNavigate } from 'react-router';
import Footer from '../Components/Footer';

export default function Homepage({ products = [], onFilterCategory }){
  const featuredProducts = products.slice(0, 6);
  const navigate = useNavigate();

  
  const testimonials = [
    { name: "Amara O.", review: "Absolutely stunning jewelry! I get compliments every time. Quality is amazing and it arrived perfectly packaged." },
    { name: "Chioma N.", review: "Love this necklace! It's elegant and goes with everything. Shipping was fast too." },
    { name: "Tunde A.", review: "Excellent craftsmanship! I'm very happy with my purchase and will order again." }
  ];

  const trustFeatures = [
    {
      icon: <Lock size={40} className="text-rose-600" />,
      title: "Secure Checkout",
      description: "Your payment information is fully protected with top-notch security."
    },
    {
      icon: <Truck size={40} className="text-rose-600" />,
      title: "Fast & Reliable Delivery",
      description: "We ensure your orders are shipped quickly and arrive safely to your door."
    },
    {
      icon: <Headphones size={40} className="text-rose-600" />,
      title: "24/7 Support",
      description: "Our team is always available to assist you, anytime, anywhere."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-rose-300 py-20 sm:py-28 overflow-hidden">
        <div className="absolute w-96 h-96 sm:w-[500px] sm:h-[500px] bg-rose-900 opacity-10 rounded-full -top-32 sm:-top-48 -right-32 sm:-right-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-rose-950 mb-6 animate-fade-in">
            Glow Inside & Out
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-8 animate-fade-in">
            Discover timeless jewelry and radiant skincare
          </p>
          <button
            onClick={() =>  navigate('/shop')}
            className="bg-rose-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-rose-800 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 text-gray-800">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => {
                onFilterCategory('jewelry');
                  navigate('/shop');
              }}
              className="bg-gradient-to-br from-rose-50 to-rose-300 p-12 sm:p-16 rounded-xl text-center hover:-translate-y-2 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-rose-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-rose-950 relative z-10">💎 Jewelry</h3>
              <p className="text-gray-700 relative z-10">Elegant pieces that tell your story</p>
            </button>
            
            <button
              onClick={() => {
                onFilterCategory('skincare');
                  navigate('/shop');
              }}
              className="bg-gradient-to-br from-rose-50 to-rose-300 p-12 sm:p-16 rounded-xl text-center hover:-translate-y-2 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-rose-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-rose-950 relative z-10">✨ Skincare</h3>
              <p className="text-gray-700 relative z-10">Nurture your natural radiance</p>
            </button>

             <button
              onClick={() => {
                onFilterCategory('clothing');
                  navigate('/shop');
              }}
              className="bg-gradient-to-br from-rose-50 to-rose-300 p-12 sm:p-16 rounded-xl text-center hover:-translate-y-2 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-rose-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-rose-950 relative z-10">✨ Clothing</h3>
              <p className="text-gray-700 relative z-10">Drip like never before </p>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <button
                key={product.id}
                onClick={() =>  navigate('/product-detail', product)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all text-left"
              >
                <div className="h-72 bg-rose-50 flex items-center justify-center text-7xl">
                  {product.icon}
                </div>
                <div className="p-6">
                  <div className="text-xs text-rose-900 uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-serif mb-3">{product.name}</h3>
                  <div className="text-yellow-500 mb-3">★★★★★</div>
                  <div className="text-2xl font-bold text-rose-900">
                    ₦{product.price.toLocaleString()}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-8 text-gray-800">
            Our Story
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-700 mb-8">
            Véla celebrates confidence, radiance, and refined simplicity through carefully curated jewelry and skincare designed to help you shine naturally. Every piece tells a story of self-love. Because elegance should feel effortless.
          </p>
          <div className="text-center">
            <button
              onClick={() =>  navigate('/about')}
              className="bg-rose-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-rose-800 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

     {/* Testimonials */}
<section className="py-20 relative overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('./assets/jj.png')" }}
  ></div>

  {/* Optional overlay */}
  <div className="absolute inset-0 bg-white/80"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12 text-rose-900">
      What Our Customers Say
    </h2>
    <div className="overflow-hidden">
      <div className="flex gap-8 animate-scroll">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-8 bg-white/90 rounded-xl shadow-lg border border-gray-100"
          >
            <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
            <h4 className="font-semibold text-rose-900">— {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Trust Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-rose-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-serif text-rose-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-4 text-gray-800">
            Follow Us on Instagram
          </h2>
          <p className="text-center mb-10 text-gray-600">@VelaBeauty</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="bg-rose-100 h-40 rounded-xl hover:scale-105 transition-transform cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-rose-400 to-rose-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">Join Our Circle</h2>
          <p className="text-lg mb-8">Be the first to know about new collections and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className=" px-6 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none text-gray-800 focus:outline-none max-w-md"
            />
            <button className="bg-rose-900 text-white px-8 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full font-bold hover:bg-rose-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

       <Footer/>
    </div>

  );
};













