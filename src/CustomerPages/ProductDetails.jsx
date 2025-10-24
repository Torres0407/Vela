import { useNavigate } from "react-router";
import Footer from "../Components/Footer";

const ProductDetail = () => {
  const navigate = useNavigate();

  const product = {
    name: "Rose Gold Necklace",
    price: 120,
    images: ["/images/necklace1.jpg", "/images/necklace2.jpg"],
    description:
      "Elegant rose gold necklace crafted with love. Perfect for everyday wear or special occasions."
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.name} ${idx + 1}`}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          ))}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-serif font-bold text-rose-900">
            {product.name}
          </h1>
          <p className="text-2xl text-rose-900 font-semibold">${product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/cart")}
              className="bg-rose-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-rose-800 transition-colors"
            >
              Add to Cart
            </button>
            <button className="bg-rose-50 text-rose-900 border-2 border-rose-900 px-6 py-3 rounded-lg font-semibold hover:bg-rose-100 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
