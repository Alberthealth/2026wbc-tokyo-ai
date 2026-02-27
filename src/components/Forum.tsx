import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Plus, X, Loader2, User, Clock, Home, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { ForumMessage, ForumTab } from '../types';

const TABS: ForumTab[] = [
  { id: 'match1', title: '3/5', match: '中華隊 vs 澳洲隊' },
  { id: 'match2', title: '3/6', match: '中華隊 vs 日本隊' },
  { id: 'match3', title: '3/7', match: '中華隊 vs 捷克隊' },
  { id: 'match4', title: '3/8', match: '中華隊 vs 韓國隊' },
];

// Mock API service
const mockApiService = {
  fetchMessages: async (tabId: string): Promise<ForumMessage[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate some initial mock data
    const now = Date.now();
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `${tabId}-${i}`,
      content: `這是關於 ${TABS.find(t => t.id === tabId)?.match} 的第 ${15 - i} 則留言。加油！`,
      timestamp: now - i * 1000 * 60 * 10, // 10 minutes apart
      author: `球迷${Math.floor(Math.random() * 1000)}`
    }));
  },
  
  postMessage: async (tabId: string, content: string): Promise<ForumMessage> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, this would be a POST request
    return {
      id: Math.random().toString(36).substr(2, 9),
      content,
      timestamp: Date.now(),
      author: '我 (測試帳號)'
    };
  }
};

export default function Forum() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [messages, setMessages] = useState<Record<string, ForumMessage[]>>({});
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Load messages for the active tab if not already loaded
  useEffect(() => {
    if (!messages[activeTab] && !isLoading[activeTab]) {
      loadMessages(activeTab);
    }
  }, [activeTab]);

  const loadMessages = async (tabId: string) => {
    setIsLoading(prev => ({ ...prev, [tabId]: true }));
    try {
      const data = await mockApiService.fetchMessages(tabId);
      setMessages(prev => ({
        ...prev,
        [tabId]: data.sort((a, b) => b.timestamp - a.timestamp).slice(0, 50)
      }));
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setIsLoading(prev => ({ ...prev, [tabId]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || submitStatus === 'loading') return;

    setSubmitStatus('loading');
    try {
      const newMessage = await mockApiService.postMessage(activeTab, newComment);
      
      setMessages(prev => {
        const currentTabMessages = prev[activeTab] || [];
        const updatedMessages = [newMessage, ...currentTabMessages];
        // Keep only the latest 50 messages
        return {
          ...prev,
          [activeTab]: updatedMessages.slice(0, 50)
        };
      });
      
      setNewComment('');
      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsAdding(false);
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const currentMessages = useMemo(() => messages[activeTab] || [], [messages, activeTab]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center mb-6 bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
        <Link to="/" className="flex items-center gap-2 text-zinc-600 font-bold hover:text-zinc-900 transition-colors">
          <Home className="w-5 h-5" />
          <span>首頁</span>
        </Link>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-600 font-bold hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>回到上一頁</span>
        </button>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-zinc-900 mb-2 flex items-center justify-center gap-2">
          <MessageSquare className="text-emerald-600 w-8 h-8" />
          賽事討論區
        </h2>
        <p className="text-zinc-500">即時分享賽事心得，為中華隊加油！</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setIsAdding(false);
            }}
            className={`px-6 py-3 rounded-2xl font-bold transition-all flex flex-col items-center ${
              activeTab === tab.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105'
                : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
            }`}
          >
            <span className="text-xs opacity-80">{tab.title}</span>
            <span className="text-sm">{tab.match}</span>
          </button>
        ))}
      </div>

      {/* Action Area */}
      <div className="mb-6">
        <AnimatePresence mode="wait">
          {!isAdding ? (
            <motion.button
              key="add-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setIsAdding(true)}
              className="w-full py-4 bg-white border-2 border-dashed border-emerald-300 rounded-2xl text-emerald-600 font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 hover:border-emerald-400 transition-all"
            >
              <Plus className="w-5 h-5" />
              新增留言
            </motion.button>
          ) : (
            <motion.form
              key="add-form"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-zinc-900 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-600" />
                  發表新留言
                </h3>
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="p-1 hover:bg-zinc-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-zinc-400" />
                </button>
              </div>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="說點什麼吧..."
                className="w-full h-32 p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all mb-4 resize-none"
                required
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-6 py-2 text-zinc-500 font-bold hover:bg-zinc-100 rounded-xl transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={submitStatus === 'loading' || !newComment.trim()}
                  className={`px-8 py-2 rounded-xl font-bold flex items-center gap-2 transition-all ${
                    submitStatus === 'loading'
                      ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200'
                  }`}
                >
                  {submitStatus === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {submitStatus === 'loading' ? '送出中...' : '送出留言'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="mt-2 text-center text-emerald-600 text-sm font-bold">留言成功！</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-2 text-center text-red-600 text-sm font-bold">送出失敗，請稍後再試。</p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Message List */}
      <div className="space-y-4">
        {isLoading[activeTab] ? (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="font-medium">正在載入留言...</p>
          </div>
        ) : currentMessages.length > 0 ? (
          <div className="grid gap-4">
            <AnimatePresence initial={false}>
              {currentMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-zinc-400" />
                      </div>
                      <span className="font-bold text-zinc-900 text-sm">{msg.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {new Date(msg.timestamp).toLocaleString('zh-TW', {
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                  <p className="text-zinc-700 leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </motion.div>
              ))}
            </AnimatePresence>
            {currentMessages.length >= 50 && (
              <p className="text-center text-zinc-400 text-xs py-4">僅顯示最新 50 則留言</p>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-zinc-200">
            <MessageSquare className="w-12 h-12 text-zinc-200 mx-auto mb-4" />
            <p className="text-zinc-400 font-medium">目前還沒有留言，快來搶頭香！</p>
          </div>
        )}
      </div>
    </div>
  );
}
