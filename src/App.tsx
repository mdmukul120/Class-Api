/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { DropdownSimulator } from './components/DropdownSimulator';
import { JsonLinksHub } from './components/JsonLinksHub';
import { CodeSnippets } from './components/CodeSnippets';
import { CurriculumBrowser } from './components/CurriculumBrowser';
import { VercelDeployGuide } from './components/VercelDeployGuide';
import { JsonViewerModal } from './components/JsonViewerModal';
import { CURRICULUM_DATA } from './data/curriculumData';
import { 
  Database, 
  Layers, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  ExternalLink,
  Code2,
  FileJson
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dropdown' | 'links' | 'snippets' | 'explorer' | 'deploy'>('dropdown');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    dataUrl: string;
  }>({
    isOpen: false,
    title: '',
    dataUrl: ''
  });

  // Calculate high-level stats
  const totalClasses = CURRICULUM_DATA.length;
  let totalSubjects = 0;
  let totalChapters = 0;
  let totalLessons = 0;

  CURRICULUM_DATA.forEach(c => {
    totalSubjects += c.subjects.length;
    c.subjects.forEach(s => {
      totalChapters += s.chapters.length;
      s.chapters.forEach(ch => {
        totalLessons += ch.lessons.length;
      });
    });
  });

  const handleDownloadFull = () => {
    const jsonString = JSON.stringify(CURRICULUM_DATA, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nctb-curriculum-class-6-12-complete.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOpenJsonModal = (title: string, dataUrl: string) => {
    setModalState({
      isOpen: true,
      title,
      dataUrl
    });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadFull={handleDownloadFull}
      />

      {/* Hero Stats Ribbon */}
      <section className="bg-slate-900/60 border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white">NCTB কারিকুলাম ডেটাসেট রেডি:</span>
              <span className="text-slate-400 hidden sm:inline">
                ক্লাস ৬ থেকে ১২ পর্যন্ত ড্রপডাউন ফেচিং লিংক ও পূর্ণাঙ্গ হায়ারার্কি
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs">
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-400">শ্রেণি:</span>
                <span className="font-bold text-emerald-400 font-mono">{totalClasses} টি</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-400">বই / বিষয়:</span>
                <span className="font-bold text-teal-400 font-mono">{totalSubjects} টি</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-400">অধ্যায়:</span>
                <span className="font-bold text-cyan-400 font-mono">{totalChapters} টি</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-400">লেসন পয়েন্টস:</span>
                <span className="font-bold text-indigo-400 font-mono">{totalLessons} টি</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dropdown' && <DropdownSimulator />}
        {activeTab === 'links' && <JsonLinksHub onViewJson={handleOpenJsonModal} />}
        {activeTab === 'snippets' && <CodeSnippets />}
        {activeTab === 'explorer' && <CurriculumBrowser />}
        {activeTab === 'deploy' && <VercelDeployGuide />}
      </main>

      {/* JSON Viewer Modal */}
      <JsonViewerModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        dataUrl={modalState.dataUrl}
      />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-10 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm text-white">NCTB Curriculum JSON Hub</span>
                <p className="text-[11px] text-slate-500">
                  জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড অনুমোদিত শ্রেণি ৬-১২ কারিকুলাম ও ড্রপডাউন API
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab('dropdown')}
                className="hover:text-emerald-400 transition"
              >
                ড্রপডাউন টেস্ট
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveTab('links')}
                className="hover:text-emerald-400 transition"
              >
                JSON লিঙ্কসমূহ
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveTab('snippets')}
                className="hover:text-emerald-400 transition"
              >
                কোড স্নিপেট
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveTab('explorer')}
                className="hover:text-emerald-400 transition"
              >
                পাঠ্যক্রম ব্রাউজার
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveTab('deploy')}
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition"
              >
                Vercel ডিপ্লয়
              </button>
              <span>•</span>
              <button
                onClick={handleDownloadFull}
                className="text-emerald-400 hover:text-emerald-300 font-semibold transition"
              >
                ডাউনলোড (.json)
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <p>
              CORS Enabled • রেডি ফর ওয়েব, অ্যান্ড্রয়েড, আইওএস ও যেকোনো ব্যাকএন্ড ইন্টিগ্রেশন
            </p>
            <p>
              ক্লাস ৬, ৭, ৮, ৯, ১০ (SSC), ১১ (HSC ১ম) ও ১২ (HSC ২য়) পূর্ণাঙ্গ হাইয়ারার্কি
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
