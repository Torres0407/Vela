import { useState } from 'react';

export default function CustomerProfile() {
  const [activeTab, setActiveTab] = useState('account');

  // Dummy data
  const [userInfo, setUserInfo] = useState({
    name: 'Chinonye Okubor',
    email: 'chinonye@vela.ng',
    phone: '+234 904 662 4920'
  });

  const orders = [
    { id: '001', item: 'Gold Necklace', status: 'Delivered', date: '2025-10-20' },
    { id: '002', item: 'Skin Care Set', status: 'Pending', date: '2025-10-25' }
  ];

  const wishlist = [
    { id: '101', name: 'Silver Earrings' },
    { id: '102', name: 'Luxury Handbag' }
  ];

  const addresses = [
    { id: 'a1', label: 'Home', details: '123 Lagos Street, Lagos, Nigeria' },
    { id: 'a2', label: 'Office', details: '456 Victoria Island, Lagos, Nigeria' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <h1 className="text-4xl font-serif font-bold text-rose-900 mb-8 text-center">My Profile</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 font-medium rounded-xl ${activeTab === 'account' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-900 hover:bg-rose-100'}`}
          onClick={() => setActiveTab('account')}
        >
          Account Info
        </button>
        <button
          className={`px-4 py-2 font-medium rounded-xl ${activeTab === 'orders' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-900 hover:bg-rose-100'}`}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
        <button
          className={`px-4 py-2 font-medium rounded-xl ${activeTab === 'wishlist' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-900 hover:bg-rose-100'}`}
          onClick={() => setActiveTab('wishlist')}
        >
          Wishlist
        </button>
        <button
          className={`px-4 py-2 font-medium rounded-xl ${activeTab === 'addresses' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-900 hover:bg-rose-100'}`}
          onClick={() => setActiveTab('addresses')}
        >
          Addresses
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'account' && (
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-rose-50 p-6 rounded-xl">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div className="bg-rose-50 p-6 rounded-xl">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div className="bg-rose-50 p-6 rounded-xl">
              <label className="block text-gray-700 font-semibold mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div className="bg-rose-50 p-6 rounded-xl">
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-rose-50 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-semibold">{order.item}</p>
                  <p className="text-gray-600 text-sm">Order ID: {order.id}</p>
                  <p className="text-gray-600 text-sm">Date: {order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-rose-50 p-4 rounded-xl flex justify-between items-center">
                <p className="font-semibold">{item.name}</p>
                <button className="text-rose-600 font-semibold hover:underline">Remove</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'addresses' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {addresses.map((addr) => (
              <div key={addr.id} className="bg-rose-50 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-semibold">{addr.label}</p>
                  <p className="text-gray-600 text-sm">{addr.details}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-rose-600 font-semibold hover:underline">Edit</button>
                  <button className="text-red-600 font-semibold hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
