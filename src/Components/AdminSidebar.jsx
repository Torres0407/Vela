import {
    BarChart3,
    ChevronRight,
    Headphones,
    LayoutDashboard,
    Package,
    Settings,
    ShoppingCart,
    Store,
    Users
} from 'lucide-react';

const AdminSidebar = ({ activeTab, onNavigate }) => {
  const menuItems = [
    { 
      id: '/admin/dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard,
      description: 'Overview & metrics'
    },
    { 
      id: '/admin/users', 
      label: 'User Management', 
      icon: Users,
      description: 'Customers & vendors',
      badge: '24'
    },
    { 
      id: '/admin/vendors', 
      label: 'Vendor Management', 
      icon: Store,
      description: 'Vendor shops & approvals',
      badge: '3'
    },
    { 
      id: '/admin/products', 
      label: 'Product Management', 
      icon: Package,
      description: 'All products'
    },
    { 
      id: '/admin/orders', 
      label: 'Order Management', 
      icon: ShoppingCart,
      description: 'All orders & disputes',
      badge: '12'
    },
    { 
      id: '/admin/analytics', 
      label: 'Analytics & Reports', 
      icon: BarChart3,
      description: 'Sales & insights'
    },
    { 
      id: '/admin/support', 
      label: 'Support Tickets', 
      icon: Headphones,
      description: 'Customer support',
      badge: '5'
    },
    { 
      id: '/admin/settings', 
      label: 'Platform Settings', 
      icon: Settings,
      description: 'Configuration'
    }
  ];

  return (
    <div className="w-72 bg-white h-screen sticky top-0 shadow-lg flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-serif font-bold text-rose-900">Véla Admin</h1>
        <p className="text-sm text-gray-500 mt-1">Super Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full group relative flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-900 to-rose-800 text-white shadow-lg shadow-rose-900/30'
                    : 'text-gray-700 hover:bg-rose-50'
                }`}
              >
                <Icon 
                  size={22} 
                  className={`mt-0.5 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-gray-500 group-hover:text-rose-900'
                  }`}
                />
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{item.label}</span>
                    {item.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-rose-100 text-rose-900'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-0.5 ${
                    isActive ? 'text-rose-100' : 'text-gray-500'
                  }`}>
                    {item.description}
                  </p>
                </div>
                {isActive && (
                  <ChevronRight 
                    size={18} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white animate-pulse"
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer - Admin Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 bg-rose-50 rounded-xl">
          <div className="w-10 h-10 bg-gradient-to-br from-rose-900 to-rose-700 rounded-full flex items-center justify-center text-white font-bold">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Super Admin</p>
            <p className="text-xs text-gray-500 truncate">admin@vela.ng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;