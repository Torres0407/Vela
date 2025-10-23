import { BarChart3, ChevronLeft, ChevronRight, DollarSign, HelpCircle, LayoutDashboard, LogOut, Megaphone, MessageSquare, Package, ShoppingBag, Star, Store } from "lucide-react";
import { useNavigate } from "react-router";

export default function VendorSidebar({ currentPage = 'dashboard', isCollapsed, setIsCollapsed }){
  const navigate = useNavigate();
  const menuItems = [
    { 
      id: '/vendor/dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard,
      description: 'Overview & stats'
    },
    { 
      id: '/vendor/products', 
      label: 'My Products', 
      icon: Package,
      description: 'Manage inventory'
    },
    { 
      id: '/vendor/orders', 
      label: 'Orders', 
      icon: ShoppingBag,
      badge: '12',
      description: 'Customer orders'
    },
    { 
      id: '/vendor/messages', 
      label: 'Messages', 
      icon: MessageSquare,
      badge: '3',
      description: 'Customer inbox'
    },
    { 
      id: '/vendor/profile', 
      label: 'Shop Profile', 
      icon: Store,
      description: 'Store settings'
    },
    { 
      id: '/vendor/earnings', 
      label: 'Earnings', 
      icon: DollarSign,
      description: 'Revenue & payouts'
    },
    { 
      id: '/vendor/analytics', 
      label: 'Analytics', 
      icon: BarChart3,
      description: 'Sales reports'
    },
    { 
      id: '/vendor/reviews', 
      label: 'Reviews', 
      icon: Star,
      description: 'Customer feedback'
    },
    { 
      id: '/vendor/promotions', 
      label: 'Promotions', 
      icon: Megaphone,
      description: 'Deals & ads'
    },
    { 
      id: '/vendor/support', 
      label: 'Support', 
      icon: HelpCircle,
      description: 'Get help'
    }
  ];

  return (
    <aside 
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-900 text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out fixed left-0 top-0 z-20 shadow-xl`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        {!isCollapsed && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-rose-400">Véla</h2>
            <p className="text-xs text-gray-400 mt-0.5">Vendor Portal</p>
          </div>
        )}
        {isCollapsed && (
          <div className="mx-auto">
            <span className="text-2xl font-serif font-bold text-rose-400">V</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors ml-auto"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => navigate && navigate(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 relative
                    ${isActive 
                      ? 'bg-rose-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }
                    ${isCollapsed ? 'justify-center' : ''}
                  `}
                  title={isCollapsed ? item.label : ''}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  
                  {!isCollapsed && (
                    <>
                      <div className="flex-1 text-left">
                        <p className="text-sm font-semibold">{item.label}</p>
                        {!isActive && (
                          <p className="text-xs text-gray-400">{item.description}</p>
                        )}
                      </div>
                      
                      {item.badge && (
                        <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  
                  {isCollapsed && item.badge && (
                    <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <button
          className={`
            w-full flex items-center gap-3 px-3 py-3 rounded-lg 
            text-gray-300 hover:bg-red-900 hover:text-white transition-all duration-200
            ${isCollapsed ? 'justify-center' : ''}
          `}
          title={isCollapsed ? 'Logout' : ''}
        >
          <LogOut size={20} className="flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-semibold">Logout</span>}
        </button>
      </div>
    </aside>
  );
};