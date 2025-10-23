// VProfile.jsx
import {
    Bell,
    Camera,
    Check,
    CreditCard,
    Eye,
    EyeOff,
    Facebook,
    Globe,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Save,
    Shield,
    Store,
    Twitter,
    Upload
} from 'lucide-react';
import { useState } from 'react';

export default function VProfile() {
  const [activeTab, setActiveTab] = useState('shop'); // shop, contact, payments, notifications, security
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form states
  const [shopInfo, setShopInfo] = useState({
    name: 'Beauty Store',
    description: 'Premium skincare and beauty products for the modern Nigerian woman. We offer authentic products with fast delivery across Lagos.',
    logo: null,
    banner: null,
    category: 'Beauty & Cosmetics'
  });

  const [contactInfo, setContactInfo] = useState({
    email: 'hello@beautystore.ng',
    phone: '+234 901 234 5678',
    address: '123 Lekki Phase 1, Lagos, Nigeria',
    website: 'www.beautystore.ng',
    instagram: '@beautystore',
    facebook: 'beautystoreng',
    twitter: '@beautystore'
  });

  const [businessHours, setBusinessHours] = useState({
    monday: { open: '09:00', close: '18:00', closed: false },
    tuesday: { open: '09:00', close: '18:00', closed: false },
    wednesday: { open: '09:00', close: '18:00', closed: false },
    thursday: { open: '09:00', close: '18:00', closed: false },
    friday: { open: '09:00', close: '18:00', closed: false },
    saturday: { open: '10:00', close: '16:00', closed: false },
    sunday: { open: '00:00', close: '00:00', closed: true }
  });

  const [paymentSettings, setPaymentSettings] = useState({
    bankName: 'GTBank',
    accountNumber: '0123456789',
    accountName: 'Beauty Store Ltd',
    minimumPayout: '50000'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailOrders: true,
    emailMessages: true,
    emailPromotions: false,
    pushOrders: true,
    pushMessages: true,
    pushPromotions: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const tabs = [
    { id: 'shop', label: 'Shop Info', icon: Store },
    { id: 'contact', label: 'Contact & Hours', icon: Phone },
    { id: 'payments', label: 'Payment Details', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const handleSave = () => {
    // Save logic here
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleImageUpload = (type) => {
    // Image upload logic
    console.log('Upload', type);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Shop Profile & Settings</h1>
              <p className="text-sm text-gray-600 mt-1">Manage your store information and preferences</p>
            </div>
            <button
              onClick={handleSave}
              className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-all font-semibold flex items-center gap-2 shadow-lg"
            >
              {saveSuccess ? (
                <>
                  <Check size={20} />
                  Saved!
                </>
              ) : (
                <>
                  <Save size={20} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:w-64 space-y-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {/* Shop Info Tab */}
            {activeTab === 'shop' && (
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Shop Information</h2>
                  <p className="text-sm text-gray-600 mb-6">Update your shop details and branding</p>
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Shop Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center text-3xl font-bold text-rose-600">
                      BS
                    </div>
                    <button
                      onClick={() => handleImageUpload('logo')}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Upload size={18} />
                      <span className="text-sm font-semibold">Upload Logo</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Recommended: 200x200px, PNG or JPG</p>
                </div>

                {/* Banner Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Shop Banner</label>
                  <div className="w-full h-40 bg-gradient-to-r from-rose-200 via-purple-200 to-pink-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <button
                      onClick={() => handleImageUpload('banner')}
                      className="px-6 py-3 bg-white hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2 shadow-md"
                    >
                      <Camera size={20} />
                      <span className="font-semibold">Upload Banner</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Recommended: 1200x400px, PNG or JPG</p>
                </div>

                {/* Shop Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Shop Name</label>
                  <input
                    type="text"
                    value={shopInfo.name}
                    onChange={(e) => setShopInfo({ ...shopInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    value={shopInfo.category}
                    onChange={(e) => setShopInfo({ ...shopInfo, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option>Beauty & Cosmetics</option>
                    <option>Skincare</option>
                    <option>Hair Care</option>
                    <option>Wellness</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Shop Description</label>
                  <textarea
                    value={shopInfo.description}
                    onChange={(e) => setShopInfo({ ...shopInfo, description: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <p className="text-xs text-gray-500 mt-2">Tell customers about your shop and what makes it special</p>
                </div>
              </div>
            )}

            {/* Contact & Hours Tab */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-4 text-gray-400" size={20} />
                        <textarea
                          value={contactInfo.address}
                          onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                          rows={2}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="url"
                          value={contactInfo.website}
                          onChange={(e) => setContactInfo({ ...contactInfo, website: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Social Media</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Instagram</label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          value={contactInfo.instagram}
                          onChange={(e) => setContactInfo({ ...contactInfo, instagram: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="@username"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook</label>
                      <div className="relative">
                        <Facebook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          value={contactInfo.facebook}
                          onChange={(e) => setContactInfo({ ...contactInfo, facebook: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="username"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Twitter</label>
                      <div className="relative">
                        <Twitter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          value={contactInfo.twitter}
                          onChange={(e) => setContactInfo({ ...contactInfo, twitter: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="@username"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h2>
                  
                  <div className="space-y-3">
                    {Object.entries(businessHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center gap-4">
                        <div className="w-28">
                          <span className="text-sm font-semibold text-gray-700 capitalize">{day}</span>
                        </div>
                        <div className="flex-1 flex items-center gap-3">
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => setBusinessHours({
                              ...businessHours,
                              [day]: { ...hours, open: e.target.value }
                            })}
                            disabled={hours.closed}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:bg-gray-100"
                          />
                          <span className="text-gray-500">to</span>
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => setBusinessHours({
                              ...businessHours,
                              [day]: { ...hours, close: e.target.value }
                            })}
                            disabled={hours.closed}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:bg-gray-100"
                          />
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={hours.closed}
                              onChange={(e) => setBusinessHours({
                                ...businessHours,
                                [day]: { ...hours, closed: e.target.checked }
                              })}
                              className="w-4 h-4 text-rose-600 rounded focus:ring-rose-500"
                            />
                            <span className="text-sm text-gray-600">Closed</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Payment Details Tab */}
            {activeTab === 'payments' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Details</h2>
                <p className="text-sm text-gray-600 mb-6">Manage your bank account for receiving payouts</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name</label>
                    <select
                      value={paymentSettings.bankName}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, bankName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option>GTBank</option>
                      <option>Access Bank</option>
                      <option>First Bank</option>
                      <option>Zenith Bank</option>
                      <option>UBA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={paymentSettings.accountNumber}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, accountNumber: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="0123456789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Account Name</label>
                    <input
                      type="text"
                      value={paymentSettings.accountName}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, accountName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      disabled
                    />
                    <p className="text-xs text-gray-500 mt-2">This is automatically verified from your bank</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Payout Amount (₦)</label>
                    <input
                      type="number"
                      value={paymentSettings.minimumPayout}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, minimumPayout: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="50000"
                    />
                    <p className="text-xs text-gray-500 mt-2">Minimum amount before automatic payout</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                    <div className="flex gap-3">
                      <CreditCard size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Secure Payment Processing</h4>
                        <p className="text-sm text-blue-700">Your banking information is encrypted and secure. Payouts are processed within 24-48 hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Notification Preferences</h2>
                <p className="text-sm text-gray-600 mb-6">Choose how you want to receive updates</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="font-medium text-gray-900">New Orders</p>
                          <p className="text-sm text-gray-600">Get notified when you receive a new order</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailOrders}
                          onChange={(e) => setNotificationSettings({ ...notificationSettings, emailOrders: e.target.checked })}
                          className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                        />
                      </label>

                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="font-medium text-gray-900">Customer Messages</p>
                          <p className="text-sm text-gray-600">Receive emails for new customer messages</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailMessages}
                          onChange={(e) => setNotificationSettings({ ...notificationSettings, emailMessages: e.target.checked })}
                          className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                        />
                      </label>

                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="font-medium text-gray-900">Promotions & Updates</p>
                          <p className="text-sm text-gray-600">Marketing emails and platform updates</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailPromotions}
                          onChange={(e) => setNotificationSettings({ ...notificationSettings, emailPromotions: e.target.checked })}
                          className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Push Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="font-medium text-gray-900">New Orders</p>
                          <p className="text-sm text-gray-600">Instant alerts for new orders</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.pushOrders}
                          onChange={(e) => setNotificationSettings({ ...notificationSettings, pushOrders: e.target.checked })}
                          className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                        />
                      </label>

                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="font-medium text-gray-900">Customer Messages</p>
                          <p className="text-sm text-gray-600">Instant alerts for new messages</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.pushMessages}
                          onChange={(e) => setNotificationSettings({ ...notificationSettings, pushMessages: e.target.checked })}
                          className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                        />
                      </label>

                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="font-medium text-gray-900">Promotions & Updates</p>
                          <p className="text-sm text-gray-600">Platform updates and tips</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.pushPromotions}
                          onChange={(e) => setNotificationSettings({ ...notificationSettings, pushPromotions: e.target.checked })}
                          className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Security Settings</h2>
                <p className="text-sm text-gray-600 mb-6">Keep your account secure</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={securitySettings.currentPassword}
                            onChange={(e) => setSecuritySettings({ ...securitySettings, currentPassword: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={securitySettings.newPassword}
                          onChange={(e) => setSecuritySettings({ ...securitySettings, newPassword: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="Enter new password"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={securitySettings.confirmPassword}
                          onChange={(e) => setSecuritySettings({ ...securitySettings, confirmPassword: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                          placeholder="Confirm new password"
                        />
                      </div>

                      <button className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <Shield size={24} className="text-green-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-gray-900 mb-1">2FA is Enabled</p>
                            <p className="text-sm text-gray-600">Your account is protected with two-factor authentication</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Chrome on Windows</p>
                          <p className="text-sm text-gray-600">Lagos, Nigeria • Active now</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Current
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Mobile App on iPhone</p>
                          <p className="text-sm text-gray-600">Lagos, Nigeria • 2 hours ago</p>
                        </div>
                        <button className="text-red-600 hover:text-red-700 text-sm font-semibold">
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-red-600 mb-2">Danger Zone</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Delete Account</p>
                          <p className="text-sm text-gray-600">Permanently delete your shop and all data</p>
                        </div>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}