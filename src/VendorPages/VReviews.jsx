// VReviews.jsx
import {
    CheckCircle,
    Image as ImageIcon,
    MessageSquare,
    MoreVertical,
    Search,
    Send,
    Star,
    ThumbsUp
} from 'lucide-react';
import { useState } from 'react';

export default function VReviews() {
  const [filterRating, setFilterRating] = useState('all'); // all, 5, 4, 3, 2, 1
  const [searchQuery, setSearchQuery] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Overall rating stats
  const ratingStats = {
    average: 4.7,
    total: 248,
    distribution: [
      { stars: 5, count: 180, percentage: 73 },
      { stars: 4, count: 42, percentage: 17 },
      { stars: 3, count: 15, percentage: 6 },
      { stars: 2, count: 7, percentage: 3 },
      { stars: 1, count: 4, percentage: 1 }
    ]
  };

  // Summary cards
  const summaryCards = [
    {
      label: 'Positive Reviews',
      value: '222',
      percentage: '90%',
      icon: ThumbsUp,
      color: 'bg-green-500',
      trend: '+5.2%'
    },
    {
      label: 'Needs Response',
      value: '12',
      percentage: '5%',
      icon: MessageSquare,
      color: 'bg-yellow-500',
      trend: 'Urgent'
    },
    {
      label: 'With Photos',
      value: '64',
      percentage: '26%',
      icon: ImageIcon,
      color: 'bg-blue-500',
      trend: '+8%'
    },
    {
      label: 'Response Rate',
      value: '94%',
      percentage: 'of all reviews',
      icon: CheckCircle,
      color: 'bg-purple-500',
      trend: 'Excellent'
    }
  ];

  // Reviews data
  const reviews = [
    {
      id: 1,
      customer: {
        name: 'Amaka Johnson',
        avatar: 'AJ',
        verified: true
      },
      rating: 5,
      product: 'Vitamin C Glow Serum',
      productCategory: 'Skincare',
      date: '2 days ago',
      text: 'Absolutely love this serum! My skin has never looked better. The glow is real and it absorbs so quickly. Will definitely repurchase!',
      helpful: 24,
      images: ['🖼️', '🖼️'],
      hasReply: true,
      reply: {
        text: 'Thank you so much for your wonderful feedback, Amaka! We\'re thrilled to hear about your glowing results! 💖',
        date: '1 day ago'
      }
    },
    {
      id: 2,
      customer: {
        name: 'Chioma Eze',
        avatar: 'CE',
        verified: true
      },
      rating: 4,
      product: 'Rose Gold Necklace',
      productCategory: 'Jewelry',
      date: '3 days ago',
      text: 'Beautiful necklace! The rose gold finish is stunning. Only giving 4 stars because the chain is a bit shorter than I expected, but still lovely.',
      helpful: 18,
      images: ['🖼️'],
      hasReply: false,
      reply: null
    },
    {
      id: 3,
      customer: {
        name: 'Blessing Okafor',
        avatar: 'BO',
        verified: true
      },
      rating: 5,
      product: 'Cotton T-Shirt',
      productCategory: 'Clothing',
      date: '5 days ago',
      text: 'Perfect fit and super comfortable! The fabric quality is excellent and it washes really well. Highly recommend!',
      helpful: 15,
      images: [],
      hasReply: true,
      reply: {
        text: 'We\'re so happy you love the t-shirt, Blessing! Thanks for the detailed review! 😊',
        date: '4 days ago'
      }
    },
    {
      id: 4,
      customer: {
        name: 'Funmi Adebayo',
        avatar: 'FA',
        verified: false
      },
      rating: 3,
      product: 'Night Repair Cream',
      productCategory: 'Skincare',
      date: '1 week ago',
      text: 'It\'s okay. Does the job but nothing spectacular. A bit pricey for what you get. Expected more hydration.',
      helpful: 8,
      images: [],
      hasReply: false,
      reply: null
    },
    {
      id: 5,
      customer: {
        name: 'Zainab Mohammed',
        avatar: 'ZM',
        verified: true
      },
      rating: 5,
      product: 'Hydrating Face Cleanser',
      productCategory: 'Skincare',
      date: '1 week ago',
      text: 'This cleanser is amazing! Gentle yet effective. My sensitive skin loves it and it doesn\'t dry out my face at all.',
      helpful: 32,
      images: ['🖼️', '🖼️', '🖼️'],
      hasReply: true,
      reply: {
        text: 'Your feedback means the world to us! So glad it works well with your sensitive skin! 🌸',
        date: '6 days ago'
      }
    },
    {
      id: 6,
      customer: {
        name: 'Tunde Bakare',
        avatar: 'TB',
        verified: true
      },
      rating: 2,
      product: 'Silver Bracelet',
      productCategory: 'Jewelry',
      date: '2 weeks ago',
      text: 'Disappointed with the quality. The silver plating started coming off after just a week. Not worth the price.',
      helpful: 5,
      images: ['🖼️'],
      hasReply: false,
      reply: null
    },
    {
      id: 7,
      customer: {
        name: 'Ada Nwosu',
        avatar: 'AN',
        verified: true
      },
      rating: 5,
      product: 'Summer Dress',
      productCategory: 'Clothing',
      date: '2 weeks ago',
      text: 'Gorgeous dress! The color is even more vibrant in person. Perfect for Lagos weather - light and breathable!',
      helpful: 21,
      images: ['🖼️', '🖼️'],
      hasReply: true,
      reply: {
        text: 'You look stunning in it! Thank you for sharing photos! 💃',
        date: '1 week ago'
      }
    }
  ];

  const renderStars = (rating, size = 16) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            size={size}
            className={star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  const getSentiment = (rating) => {
    if (rating >= 4) return { label: 'Positive', class: 'bg-green-100 text-green-800' };
    if (rating === 3) return { label: 'Neutral', class: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Negative', class: 'bg-red-100 text-red-800' };
  };

  const filteredReviews = reviews.filter(review => {
    const matchesRating = filterRating === 'all' || review.rating === parseInt(filterRating);
    const matchesSearch =
      review.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRating && matchesSearch;
  });

  const handleSendReply = (reviewId) => {
    if (replyText.trim()) {
      console.log('Sending reply to review:', reviewId, replyText);
      setReplyingTo(null);
      setReplyText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Reviews & Feedback</h1>
              <p className="text-sm text-gray-600 mt-1">Manage customer reviews and ratings</p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Rating Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Rating Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-gray-900 mb-2">{ratingStats.average}</div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(ratingStats.average), 20)}
              </div>
              <p className="text-gray-600">Based on {ratingStats.total} reviews</p>
            </div>

            <div className="space-y-3">
              {ratingStats.distribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm font-semibold text-gray-700">{dist.stars}</span>
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full transition-all"
                      style={{ width: `${dist.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-16 text-right">
                    {dist.count} ({dist.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {summaryCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                  <div className={`${card.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{card.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{card.value}</p>
                  <p className="text-xs text-gray-500">{card.percentage}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Rating Filter */}
            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
              <button
                onClick={() => setFilterRating('all')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap ${
                  filterRating === 'all'
                    ? 'bg-rose-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {[5, 4, 3, 2, 1].map(rating => (
                <button
                  key={rating}
                  onClick={() => setFilterRating(rating.toString())}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap flex items-center gap-1 ${
                    filterRating === rating.toString()
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {rating}
                  <Star size={14} className="fill-current" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.map(review => {
            const sentiment = getSentiment(review.rating);
            const isReplying = replyingTo === review.id;

            return (
              <div key={review.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {review.customer.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{review.customer.name}</span>
                        {review.customer.verified && (
                          <CheckCircle size={16} className="text-blue-500 fill-blue-500" />
                        )}
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${sentiment.class}`}>
                          {sentiment.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(review.rating)}
                        <span className="text-xs text-gray-500">• {review.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-700 font-medium">{review.product}</span>
                        <span className="text-xs text-gray-500">• {review.productCategory}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={20} className="text-gray-400" />
                  </button>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4">{review.text}</p>

                {/* Review Images */}
                {review.images.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-3xl cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        {img}
                      </div>
                    ))}
                  </div>
                )}

                {/* Review Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <ThumbsUp size={16} />
                    <span className="text-sm">Helpful ({review.helpful})</span>
                  </button>
                  {!review.hasReply && (
                    <button
                      onClick={() => setReplyingTo(review.id)}
                      className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-semibold flex items-center gap-2"
                    >
                      <MessageSquare size={16} />
                      Reply
                    </button>
                  )}
                </div>

                {/* Vendor Reply */}
                {review.hasReply && review.reply && (
                  <div className="mt-4 ml-16 bg-rose-50 border-l-4 border-rose-600 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Store size={20} className="text-rose-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-900">Beauty Store</span>
                          <span className="text-xs text-gray-500">• {review.reply.date}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{review.reply.text}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reply Input */}
                {isReplying && (
                  <div className="mt-4 ml-16">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write your response..."
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 mb-3"
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={() => setReplyingTo(null)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSendReply(review.id)}
                        className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors text-sm font-semibold flex items-center gap-2"
                      >
                        <Send size={16} />
                        Send Reply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredReviews.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Star size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No reviews found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterRating('all');
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

// Store icon component (you can use lucide-react's Store)
const Store = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);