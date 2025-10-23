// VPromotions.jsx
import { Calendar, Edit, MoreVertical, Plus, Search, Tag, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function VPromotions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'active', 'upcoming', 'expired'

  // Sample promotion data
  const promotions = [
    {
      id: 1,
      title: 'Summer Skincare Sale',
      type: 'Percentage',
      value: '20%',
      status: 'active',
      startDate: '2025-10-20',
      endDate: '2025-10-30',
      description: 'Get 20% off all skincare products this summer!',
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free',
      type: 'BOGO',
      value: '1+1',
      status: 'upcoming',
      startDate: '2025-11-01',
      endDate: '2025-11-10',
      description: 'Buy one serum and get another free!',
    },
    {
      id: 3,
      title: 'Clearance Sale',
      type: 'Percentage',
      value: '50%',
      status: 'expired',
      startDate: '2025-09-01',
      endDate: '2025-09-10',
      description: 'Up to 50% off on selected products.',
    },
  ];

  // Quick stats
  const stats = [
    {
      label: 'Active Promotions',
      value: promotions.filter(p => p.status === 'active').length,
      color: 'bg-green-500',
      icon: Tag,
    },
    {
      label: 'Upcoming',
      value: promotions.filter(p => p.status === 'upcoming').length,
      color: 'bg-blue-500',
      icon: Calendar,
    },
    {
      label: 'Expired',
      value: promotions.filter(p => p.status === 'expired').length,
      color: 'bg-red-500',
      icon: Calendar,
    },
  ];

  const statusBadge = (status) => {
    const badges = {
      active: 'bg-green-100 text-green-800',
      upcoming: 'bg-blue-100 text-blue-800',
      expired: 'bg-red-100 text-red-800',
    };
    const labels = {
      active: 'Active',
      upcoming: 'Upcoming',
      expired: 'Expired',
    };
    return { class: badges[status], label: labels[status] };
  };

  // Filter promotions
  const filteredPromotions = promotions.filter((promo) => {
    const matchesSearch = promo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || promo.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Promotions</h1>
              <p className="text-sm text-gray-600 mt-1">Manage your store promotions</p>
            </div>
            <button className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold flex items-center gap-2 shadow-lg">
              <Plus size={20} />
              Add Promotion
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search promotions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="all">All Promotions</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="expired">Expired</option>
          </select>
        </div>

        {/* Promotions Grid */}
        {filteredPromotions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPromotions.map((promo) => {
              const badge = statusBadge(promo.status);
              return (
                <div key={promo.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                  <div className="p-4 relative">
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white p-2 rounded-lg shadow-md">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{promo.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{promo.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badge.class}`}>{badge.label}</span>
                      <span className="text-sm font-semibold text-gray-700">{promo.type}: {promo.value}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Start: {promo.startDate}</span>
                      <span>End: {promo.endDate}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 p-4 border-t border-gray-100">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                      <Edit size={16} />
                      <span className="text-sm font-medium">Edit</span>
                    </button>
                    <button className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-600 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                      <Trash2 size={16} />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Empty State
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Tag size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No promotions found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterStatus('all');
              }}
              className="text-rose-600 hover:text-rose-700 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
