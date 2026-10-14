import React from 'react';
import { BookOpen, Code2, Database, Download, Sparkles, Layers, Search } from 'lucide-react';

interface NavbarProps {
  activeTab: 'dropdown' | 'links' | 'snippets' | 'explorer' | 'deploy';
  setActiveTab: (tab: 'dropdown' | 'links' | 'snippets' | 'explorer' | 'deploy') => void;
  onDownloadFull: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onDownloadFull }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0f19]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white font-bold text-xl">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-white tracking-tight">NCTB JSON API</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ক্লাস ৬ - ১২
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                পাঠ্যবই, অধ্যায় ও লেসন পয়েন্ট ড্রপডাউন ফেচিং লিঙ্ক হাব
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('dropdown')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dropdown'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span className="hidden md:inline">ড্রপডাউন টেস্ট</span>
              <span className="md:hidden">ড্রপডাউন</span>
            </button>

            <button
              onClick={() => setActiveTab('links')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'links'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Database className="w-4 h-4" />
              <span className="hidden md:inline">JSON লিঙ্ক ও API</span>
              <span className="md:hidden">JSON লিঙ্ক</span>
            </button>

            <button
              onClick={() => setActiveTab('snippets')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'snippets'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span className="hidden md:inline">কোড স্নিপেট</span>
              <span className="md:hidden">কোড</span>
            </button>

            <button
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'explorer'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">পাঠ্যক্রম ব্রাউজার</span>
              <span className="md:hidden">ব্রাউজ</span>
            </button>

            <button
              onClick={() => setActiveTab('deploy')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'deploy'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-indigo-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline">Vercel & GitHub</span>
              <span className="md:hidden">ডিপ্লয়</span>
            </button>
          </nav>

          {/* Download Action */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={onDownloadFull}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
              title="সম্পূর্ণ কারিকুলাম JSON ফাইল ডাউনলোড করুন"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full JSON</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
