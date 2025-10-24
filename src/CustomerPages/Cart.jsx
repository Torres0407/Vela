import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer";

const Cart = () => {
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Rose Gold Necklace",
      price: 120,
      image: "/images/necklace1.jpg",
      quantity: 1
    },
    {
      id: 2,
      name: "Crystal Earrings",
      price: 80,
      image: "/images/earrings1.jpg",
      quantity: 2
    }
  ]);

  const applyPromo = () => {
    if (promoCode.trim() !== "" && !discountApplied) {
      alert("Promo code applied! 🎉");
      setCartItems(prev =>
        prev.map(item => ({ ...item, price: item.price - 10 })) // simple discount example
      );
      setDiscountApplied(true);
      setPromoCode("");
    } else {
      alert("Invalid or already applied!");
    }
  };

  const incrementQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const proceedToCheckout = () => {
    navigate("/checkout");
  };

  const continueShopping = () => {
    navigate("/shop");
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 bg-rose-50 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-rose-900 mb-4">
          Your Cart
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Review items before proceeding to checkout.
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-lg font-serif font-semibold text-rose-900">
                  {item.name}
                </h4>
                <p className="text-gray-700">₦{item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="bg-rose-50 text-rose-600 px-3 py-1 rounded hover:bg-rose-100"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="bg-rose-50 text-rose-600 px-3 py-1 rounded hover:bg-rose-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-rose-600 hover:text-rose-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-stone-50 p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-2xl font-serif font-semibold text-rose-900 mb-4">
            Cart Summary
          </h3>

          {/* Promo Code */}
          <div className="space-y-2">
            <label className="block font-semibold">Have a promo code?</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
              />
              <button
                onClick={applyPromo}
                className="bg-rose-900 text-white px-4 py-2 rounded-lg hover:bg-rose-800 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Subtotal & Delivery */}
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery:</span>
            <span>TBD</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          {/* Buttons */}
          <button
            onClick={proceedToCheckout}
            className="w-full bg-rose-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-rose-800 transition-colors"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={continueShopping}
            className="w-full bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
