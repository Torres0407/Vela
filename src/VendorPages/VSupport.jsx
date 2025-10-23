// VSupport.jsx
import { CheckCircle, Clock, Eye, MessageCircle, Plus } from 'lucide-react';
import { useState } from 'react';

export default function VSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'open', 'inProgress', 'resolved'

  // Sample support tickets
  const tickets = [
    {
      id: '#TCK-1001',
      customer: 'Amaka Johnson',
      email: 'amaka.j@email.com',
      subject: 'Order not received',
      status: 'open',
      date: '2025-10-22',
      time: '5 mins ago',
      messages: 2,
    },
    {
      id: '#TCK-1002',
      customer: 'Chioma Eze',
      email: 'chioma.eze@email.com',
      subject: 'Wrong item delivered',
      status: 'inProgress',
      date: '2025-10-21',
      time: '1 hour ago',
      messages: 1,
    },
    {
      id: '#TCK-1003',
      customer: 'Blessing Okafor',
      email: 'blessing.o@email.com',
      subject: 'Refund request',
      status: 'resolved',
      date: '2025-10-20',
      time: '3 hours ago',
      messages: 3,
    },
  ];

  const statusBadge = (status) => {
    const badges = {
      open: 'bg-yellow-100 text-yellow-800',
      inProgress: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
    };
    const labels = {
      open: 'Open',
      inProgress: 'In Progress',
      resolved: 'Resolved',
    };
    return { class: badges[status], label: labels[status] };
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) || ticket.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || ticket.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Quick stats
  const stats = [
    { label: 'Open Tickets', value: tickets.filter(t => t.status === 'open').length, color: 'bg-yellow-500', icon: Clock },
    { label: 'In Progress', value: tickets.filter(t => t.status === 'inProgress').length, color: 'bg-blue-500', icon: MessageCircle },
    { label: 'Resolved', value: tickets.filter(t => t.status === 'resolved').length, color: 'bg-green-500', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Support</h1>
            <p className="text-sm text-gray-600 mt-1">Manage customer support tickets</p>
          </div>
          <button className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold flex items-center gap-2 shadow-lg">
            <Plus size={20} />
            New Ticket
          </button>
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
            <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tickets..."
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
            <option value="all">All Tickets</option>
            <option value="open">Open</option>
            <option value="inProgress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>

        {/* Tickets Table */}
        {filteredTickets.length > 0 ? (
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Ticket ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Customer</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Subject</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Messages</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map(ticket => {
                  const badge = statusBadge(ticket.status);
                  return (
                    <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-mono font-semibold text-gray-900">{ticket.id}</td>
                      <td className="py-4 px-6">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900">{ticket.customer}</span>
                          <span className="text-xs text-gray-500">{ticket.email}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900">{ticket.subject}</td>
                      <td className="py-4 px-6 text-gray-900">{ticket.messages}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.class}`}>{badge.label}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{ticket.date}</td>
                      <td className="py-4 px-6 flex gap-2">
                        <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                          <Eye size={16} /> View
                        </button>
                        <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                          <CheckCircle size={16} /> Close
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          // Empty State
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <MessageCircle size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tickets found</h3>
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
