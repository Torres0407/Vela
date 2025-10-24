import { useState } from "react";
import Footer from "../Components/Footer";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("Card");

  const completeOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  const selectPayment = (method) => {
    setSelectedPayment(method);
  };

  return (
    <div id="checkout" className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-serif font-bold text-rose-900 mb-8 text-center">
          Checkout
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="bg-stone-50 p-8 rounded-2xl shadow-lg">
            <form onSubmit={completeOrder} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-rose-900">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 XXX XXX XXXX"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-rose-900">
                  Shipping Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    required
                    className="p-3 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-gray-700">State</label>
                    <select
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:ring-rose-200 focus:ring-2 focus:outline-none"
                    >
                      <option value="">Select State</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                      <option value="rivers">Rivers</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-rose-900">
                  Payment Method
                </h3>
                <div className="flex gap-4">
                  {["Card", "Bank Transfer", "Pay on Delivery"].map((method) => (
                    <div
                      key={method}
                      className={`flex-1 p-4 rounded-xl border-2 cursor-pointer text-center ${
                        selectedPayment === method
                          ? "border-rose-900 bg-rose-100"
                          : "border-rose-200"
                      }`}
                      onClick={() => selectPayment(method)}
                    >
                      <div className="text-2xl mb-2">
                        {method === "Card"
                          ? "💳"
                          : method === "Bank Transfer"
                          ? "🏦"
                          : "💵"}
                      </div>
                      <div>{method}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-rose-800 transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-serif font-semibold text-rose-900 mb-6">
              Order Summary
            </h3>
            <div id="checkoutSummary" className="space-y-4">
              {/* Items will be dynamically injected here */}
            </div>
            <div className="flex justify-between font-medium mt-4">
              <span>Subtotal:</span>
              <span id="subtotal">₦0</span>
            </div>
            <div className="flex justify-between font-medium mt-2">
              <span>Delivery:</span>
              <span id="delivery">TBD</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total:</span>
              <span id="total">₦0</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
