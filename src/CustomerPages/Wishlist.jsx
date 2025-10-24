import { useNavigate } from "react-router";
import Footer from "../Components/Footer";

const Wishlist = () => {
  const navigate = useNavigate();

  const wishlistItems = [
    {
      id: 1,
      name: "Rose Gold Necklace",
      price: 120,
      image: "/images/necklace1.jpg"
    },
    {
      id: 2,
      name: "Crystal Earrings",
      price: 80,
      image: "/images/earrings1.jpg"
    },
    {
      id: 3,
      name: "Luxury Skincare Set",
      price: 150,
      image: "/images/skincare1.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 bg-rose-50 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose-900 mb-4">
          Your Wishlist
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Save your favorite products to view and purchase later.
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {wishlistItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map(item => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-serif font-semibold text-rose-900 mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-gray-700 mb-4 text-center">${item.price}</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => navigate("/cart")}
                    className="bg-rose-900 text-white px-6 py-2 rounded-lg hover:bg-rose-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button className="text-rose-600 hover:text-rose-800 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-rose-50 rounded-2xl">
            <p className="text-2xl font-serif text-rose-900 mb-4">
              Your Wishlist is Empty
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-rose-900 text-white px-8 py-3 rounded-lg hover:bg-rose-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Wishlist;
