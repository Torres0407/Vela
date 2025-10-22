// VMessages.jsx
import {
    Archive,
    CheckCheck,
    Image as ImageIcon,
    MoreVertical,
    Paperclip,
    Search,
    Send,
    Smile,
    Star
} from 'lucide-react';
import { useState } from 'react';

export default function VMessages() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, unread, archived

  // Sample conversations data
  const conversations = [
    {
      id: 1,
      customer: {
        name: 'Amaka Johnson',
        avatar: 'AJ',
        email: 'amaka.j@email.com'
      },
      lastMessage: 'Thank you! When will my order arrive?',
      timestamp: '2 mins ago',
      unread: 2,
      isOnline: true,
      archived: false,
      messages: [
        { id: 1, sender: 'customer', text: 'Hello! I just placed an order #ORD-2847', time: '10:30 AM', read: true },
        { id: 2, sender: 'vendor', text: 'Hi Amaka! Thank you for your order. We\'re processing it now.', time: '10:32 AM', read: true },
        { id: 3, sender: 'customer', text: 'Great! How long does shipping usually take?', time: '10:35 AM', read: true },
        { id: 4, sender: 'vendor', text: 'Typically 2-3 business days within Lagos.', time: '10:36 AM', read: true },
        { id: 5, sender: 'customer', text: 'Thank you! When will my order arrive?', time: '10:45 AM', read: false }
      ]
    },
    {
      id: 2,
      customer: {
        name: 'Chioma Eze',
        avatar: 'CE',
        email: 'chioma.eze@email.com'
      },
      lastMessage: 'Do you have the serum in stock?',
      timestamp: '15 mins ago',
      unread: 1,
      isOnline: true,
      archived: false,
      messages: [
        { id: 1, sender: 'customer', text: 'Hi! I\'m interested in the Vitamin C Serum', time: '09:15 AM', read: true },
        { id: 2, sender: 'vendor', text: 'Hello! Yes, we have it in stock. It\'s ₦12,500', time: '09:20 AM', read: true },
        { id: 3, sender: 'customer', text: 'Do you have the serum in stock?', time: '09:30 AM', read: false }
      ]
    },
    {
      id: 3,
      customer: {
        name: 'Blessing Okafor',
        avatar: 'BO',
        email: 'blessing.o@email.com'
      },
      lastMessage: 'Perfect! I\'ll place my order soon.',
      timestamp: '1 hour ago',
      unread: 0,
      isOnline: false,
      archived: false,
      messages: [
        { id: 1, sender: 'customer', text: 'Can I get a discount on bulk orders?', time: '08:00 AM', read: true },
        { id: 2, sender: 'vendor', text: 'Yes! We offer 10% off for orders of 5+ products', time: '08:05 AM', read: true },
        { id: 3, sender: 'customer', text: 'Perfect! I\'ll place my order soon.', time: '08:10 AM', read: true }
      ]
    },
    {
      id: 4,
      customer: {
        name: 'Funmi Adebayo',
        avatar: 'FA',
        email: 'funmi.a@email.com'
      },
      lastMessage: 'Thank you so much! Really appreciate it.',
      timestamp: '3 hours ago',
      unread: 0,
      isOnline: false,
      archived: false,
      messages: [
        { id: 1, sender: 'customer', text: 'My order arrived! Everything looks great', time: 'Yesterday', read: true },
        { id: 2, sender: 'vendor', text: 'That\'s wonderful to hear! Thank you for your feedback', time: 'Yesterday', read: true },
        { id: 3, sender: 'customer', text: 'Thank you so much! Really appreciate it.', time: 'Yesterday', read: true }
      ]
    },
    {
      id: 5,
      customer: {
        name: 'Zainab Mohammed',
        avatar: 'ZM',
        email: 'zainab.m@email.com'
      },
      lastMessage: 'Could you recommend a product for dry skin?',
      timestamp: '1 day ago',
      unread: 1,
      isOnline: false,
      archived: false,
      messages: [
        { id: 1, sender: 'customer', text: 'Could you recommend a product for dry skin?', time: '2 days ago', read: false }
      ]
    }
  ];

  // Quick reply templates
  const quickReplies = [
    'Thank you for your message!',
    'Your order is being processed.',
    'Delivery takes 2-3 business days.',
    'Yes, we have that in stock!',
    'Let me check that for you.'
  ];

  // Filter conversations
  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = 
      conv.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = true;
    if (filterStatus === 'unread') matchesFilter = conv.unread > 0;
    if (filterStatus === 'archived') matchesFilter = conv.archived;
    
    return matchesSearch && matchesFilter;
  });

  // Get total unread count
  const totalUnread = conversations.filter(c => c.unread > 0).length;

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedConversation) {
      // Add message logic here
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Messages</h1>
              <p className="text-sm text-gray-600 mt-1">
                {totalUnread > 0 ? `${totalUnread} unread conversation${totalUnread > 1 ? 's' : ''}` : 'All caught up!'}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="w-full lg:w-96 bg-white rounded-xl shadow-sm flex flex-col">
            {/* Search and Filter */}
            <div className="p-4 border-b border-gray-200 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filterStatus === 'all' 
                      ? 'bg-rose-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('unread')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filterStatus === 'unread' 
                      ? 'bg-rose-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Unread {totalUnread > 0 && `(${totalUnread})`}
                </button>
                <button
                  onClick={() => setFilterStatus('archived')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filterStatus === 'archived' 
                      ? 'bg-rose-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Archived
                </button>
              </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map(conv => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left ${
                    selectedConversation?.id === conv.id ? 'bg-rose-50 border-l-4 border-l-rose-600' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {conv.customer.avatar}
                      </div>
                      {conv.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{conv.customer.name}</h3>
                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{conv.timestamp}</span>
                      </div>
                      <p className={`text-sm truncate ${conv.unread > 0 ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                        {conv.lastMessage}
                      </p>
                    </div>

                    {/* Unread Badge */}
                    {conv.unread > 0 && (
                      <div className="flex-shrink-0 w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                </button>
              ))}

              {/* Empty State */}
              {filteredConversations.length === 0 && (
                <div className="p-12 text-center">
                  <Search size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No conversations found</h3>
                  <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-white rounded-xl shadow-sm flex flex-col hidden lg:flex">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {selectedConversation.customer.avatar}
                      </div>
                      {selectedConversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">{selectedConversation.customer.name}</h2>
                      <p className="text-xs text-gray-500">
                        {selectedConversation.isOnline ? 'Online' : `Last seen ${selectedConversation.timestamp}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Star">
                      <Star size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Archive">
                      <Archive size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="More">
                      <MoreVertical size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {selectedConversation.messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.sender === 'vendor' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            message.sender === 'vendor'
                              ? 'bg-rose-600 text-white rounded-br-none'
                              : 'bg-white text-gray-900 rounded-bl-none shadow-sm'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                        <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500 ${
                          message.sender === 'vendor' ? 'justify-end' : 'justify-start'
                        }`}>
                          <span>{message.time}</span>
                          {message.sender === 'vendor' && (
                            <CheckCheck size={14} className={message.read ? 'text-blue-500' : 'text-gray-400'} />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => setMessageInput(reply)}
                        className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Paperclip size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <ImageIcon size={20} className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Smile size={20} className="text-gray-600" />
                    </button>
                    <button
                      onClick={handleSendMessage}
                      className="bg-rose-600 text-white p-2 rounded-lg hover:bg-rose-700 transition-colors"
                      disabled={!messageInput.trim()}
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Empty State
              <div className="flex-1 flex items-center justify-center text-center p-8">
                <div>
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={40} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}