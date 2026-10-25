import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Download, 
  Database, 
  Globe, 
  FileJson, 
  Eye, 
  Layers, 
  Search,
  Sparkles,
  BookOpen,
  FolderTree,
  Filter,
  CheckCircle2,
  Terminal,
  Code
} from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface JsonLinksHubProps {
  onViewJson: (title: string, dataUrl: string) => void;
}

export const JsonLinksHub: React.FC<JsonLinksHubProps> = ({ onViewJson }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedClassForQuery, setSelectedClassForQuery] = useState('class-9');
  const [selectedSubjectForQuery, setSelectedSubjectForQuery] = useState('class-9-math');
  const [selectedChapterForQuery, setSelectedChapterForQuery] = useState('c9-math-ch1');
  const [activeViewMode, setActiveViewMode] = useState<'both' | 'all-in-one' | 'individual' | 'cascading'>('both');
  const [activeGroupFilter, setActiveGroupFilter] = useState<string>('all');

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://curriculum.nctb';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Calculate totals
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

  // Individual class definitions with precalculated stats
  const INDIVIDUAL_CLASSES = CURRICULUM_DATA.map((c) => {
    let chCount = 0;
    let lCount = 0;
    c.subjects.forEach((s) => {
      chCount += s.chapters.length;
      s.chapters.forEach((ch) => {
        lCount += ch.lessons.length;
      });
    });

    const isSecondaryOrHsc = [9, 10, 11, 12].includes(c.numeric);

    return {
      classId: c.id,
      numeric: c.numeric,
      name: c.name,
      nameBangla: c.nameBangla,
      stageBangla: c.stageBangla,
      description: c.description,
      subjectCount: c.subjects.length,
      chapterCount: chCount,
      lessonCount: lCount,
      isSecondaryOrHsc,
      primaryApiUrl: `/api/classes/${c.numeric}`,
      aliasApiUrl: `/api/classes/${c.id}`,
      staticJsonUrl: `/data/${c.id}.json`,
      downloadUrl: `/api/download/${c.id}.json`
    };
  });

  // Cascading & Dropdown endpoints
  const STEP_ENDPOINTS = [
    {
      id: 'classes-list',
      step: '১ম ড্রপডাউন',
      title: 'সকল শ্রেণির সংক্ষিপ্ত তালিকা (Classes Summary)',
      description: 'ড্রপডাউন ১ লোড করার জন্য ৭টি শ্রেণির নাম (বাংলা ও ইংরেজি), আইডি ও স্টেজ।',
      method: 'GET',
      path: '/api/classes',
      staticUrl: '/data/classes.json',
      badge: 'Dropdown 1'
    },
    {
      id: 'subjects-by-class',
      step: '২য় ড্রপডাউন',
      title: 'শ্রেণিভিত্তিক বইয়ের তালিকা (Subjects by Class)',
      description: 'নির্বাচিত শ্রেণির আওতাভুক্ত সকল বিষয় ও পাঠ্যবই ফেচ করার এন্ডপয়েন্ট।',
      method: 'GET',
      path: `/api/subjects?classId=${selectedClassForQuery}`,
      staticUrl: `/data/${selectedClassForQuery}.json`,
      badge: 'Dropdown 2'
    },
    {
      id: 'subjects-group-filter',
      step: 'গ্রুপ ফিল্টার',
      title: 'বিভাগভিত্তিক বিষয় ফিল্টার (Science, Humanities, Business)',
      description: '৯ম-১২শ শ্রেণির বিজ্ঞান, মানবিক বা ব্যবসায় শিক্ষা বিভাগের বই পৃথক করার এন্ডপয়েন্ট।',
      method: 'GET',
      path: `/api/subjects?classId=${selectedClassForQuery}&group=science`,
      badge: 'Stream Filter'
    },
    {
      id: 'chapters-by-subject',
      step: '৩য় ড্রপডাউন',
      title: 'বিষয়ভিত্তিক অধ্যায়সমূহের তালিকা (Chapters by Subject)',
      description: 'নির্বাচিত বইয়ের প্রতিটি অধ্যায়ের নাম, নম্বর ও লেসন কাউন্ট ফেচ করার এন্ডপয়েন্ট।',
      method: 'GET',
      path: `/api/chapters?subjectId=${selectedSubjectForQuery}`,
      badge: 'Dropdown 3'
    },
    {
      id: 'lessons-by-chapter',
      step: '৪র্থ ড্রপডাউন',
      title: 'অধ্যায়ভিত্তিক লেসন পয়েন্টস (Lessons / Topics)',
      description: 'নির্বাচিত অধ্যায়ের অন্তর্গত প্রতিটি লেসন পয়েন্ট, টপিক নাম ও পয়েন্ট নম্বর।',
      method: 'GET',
      path: `/api/lessons?chapterId=${selectedChapterForQuery}`,
      badge: 'Dropdown 4'
    },
    {
      id: 'cascade-universal',
      step: 'ক্যাসকেডিং',
      title: 'ইউনিভার্সাল ক্যাসকেডিং এন্ডপয়েন্ট (Cascade Route)',
      description: 'classId, subjectId ও chapterId প্যারামিটার অনুযায়ী এক কলেই পরবর্তী অপশন রিটার্ন করে।',
      method: 'GET',
      path: `/api/cascade?classId=${selectedClassForQuery}&subjectId=${selectedSubjectForQuery}&chapterId=${selectedChapterForQuery}`,
      badge: 'Cascade API'
    },
    {
      id: 'search-query',
      step: 'সার্চ',
      title: 'কারিকুলাম সার্চ এন্ডপয়েন্ট (Live Search API)',
      description: 'বাংলা বা ইংরেজিতে যেকোনো শব্দ, অধ্যায় বা টপিক পয়েন্ট রিয়েলটাইম সার্চ করার এন্ডপয়েন্ট।',
      method: 'GET',
      path: '/api/search?q=সেট',
      badge: 'Search API'
    }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
          <Database className="w-3.5 h-3.5" />
          <span>NCTB API এন্ডপয়েন্ট আর্কিটেকচার</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          কারিকুলাম API এন্ডপয়েন্ট ডিরেক্টরি
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          আপনার সুবিধার্থে <strong className="text-white">সবগুলো ক্লাস একসাথে</strong> পেতে একটি মাস্টার এন্ডপয়েন্ট এবং <strong className="text-white">প্রতিটি ক্লাস আলাদা আলাদাভাবে</strong> পেতে ডেডিকেটেড এন্ডপয়েন্ট সাজানো হয়েছে। যেকোনো ক্লায়েন্ট অ্যাপ বা ব্যাকএন্ডে সরাসরি <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-300 font-mono text-xs">GET</code> রিকোয়েস্টে ফুল ডেটা ফেচ করা যাবে।
        </p>

        {/* View mode filter buttons */}
        <div className="flex flex-wrap gap-2 pt-4">
          <button
            onClick={() => setActiveViewMode('both')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeViewMode === 'both'
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            সকল ভিউ একসাথে (মাস্টার + পৃথক ক্লাস)
          </button>
          <button
            onClick={() => setActiveViewMode('all-in-one')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeViewMode === 'all-in-one'
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            ১. সবগুলো ক্লাস একসাথে (Unified Endpoint)
          </button>
          <button
            onClick={() => setActiveViewMode('individual')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeViewMode === 'individual'
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            ২. আলাদা আলাদা ক্লাস এন্ডপয়েন্ট (7 Dedicated Endpoints)
          </button>
          <button
            onClick={() => setActiveViewMode('cascading')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeViewMode === 'cascading'
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            ৩. ড্রপডাউন ও ক্যাসকেডিং API (Step-by-step)
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. MASTER UNIFIED ALL-IN-ONE ENDPOINT (সবগুলো ক্লাস একসাথে) */}
      {/* ========================================================================= */}
      {(activeViewMode === 'both' || activeViewMode === 'all-in-one') && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
              ১
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>সবগুলো ক্লাস একসাথে (Master Unified All-Classes Endpoint)</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-normal">
                  একক API কলে সমগ্র ডেটাবেজ
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                ৬ষ্ঠ শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত ৭টি শ্রেণির ১৪৬টি বই, ৮৮২টি অধ্যায় ও ১,২৬৪টি লেসন পয়েন্ট একসাথে রিটার্ন করে।
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl border-2 border-emerald-500/40 p-6 space-y-5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider">
                    GET
                  </span>
                  <span className="text-white font-bold text-lg font-mono">
                    /api/curriculum
                  </span>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    (অল্টারনেটিভ: <code className="text-emerald-400">/api/classes/all</code> ও <code className="text-emerald-400">/api/all</code>)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  সম্পূর্ণ কারিকুলাম স্ট্রাকচার, মোট কাউন্ট, স্ট্যাটিস্টিক্স এবং মেটাডাটা সহ প্রমিত JSON ফরম্যাটে ডেটা প্রদান করে।
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onViewJson('সম্পূর্ণ কারিকুলাম JSON (All Classes Combined)', '/api/curriculum')}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>লাইভ প্রিভিউ</span>
                </button>

                <a
                  href={`${baseUrl}/api/curriculum`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                  <span>ব্রাউজারে খুলুন</span>
                </a>

                <a
                  href="/data/curriculum.json"
                  download="nctb-curriculum-complete.json"
                  className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ডাউনলোড (.json)</span>
                </a>
              </div>
            </div>

            {/* Quick Stats in Master Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] text-slate-400">মোট শ্রেণি</div>
                <div className="text-lg font-bold text-emerald-400 font-mono">৭টি শ্রেণি</div>
                <div className="text-[10px] text-slate-500">৬ষ্ঠ থেকে দ্বাদশ (HSC)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] text-slate-400">মোট পাঠ্যবই / বিষয়</div>
                <div className="text-lg font-bold text-teal-400 font-mono">{totalSubjects}টি বই</div>
                <div className="text-[10px] text-slate-500">আবশ্যিক, বিজ্ঞান, মানবিক ও বাণিজ্য</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] text-slate-400">মোট অধ্যায়</div>
                <div className="text-lg font-bold text-cyan-400 font-mono">{totalChapters}টি অধ্যায়</div>
                <div className="text-[10px] text-slate-500">প্রতিটি বইয়ের পূর্ণ তালিকা</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-[11px] text-slate-400">লেসন পয়েন্টস</div>
                <div className="text-lg font-bold text-indigo-400 font-mono">{totalLessons}টি পয়েন্ট</div>
                <div className="text-[10px] text-slate-500">শিখনফল ও টপিক সারসংক্ষেপ</div>
              </div>
            </div>

            {/* URL Copy Boxes */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>মাস্টার এন্ডপয়েন্ট লিঙ্কসমূহ (কপি করে সরাসরি ব্যবহার করুন):</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {/* Dynamic API Route */}
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">REST API Endpoint:</span>
                    <span className="font-mono text-emerald-300 truncate select-all">{baseUrl}/api/curriculum</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`${baseUrl}/api/curriculum`, 'master-api')}
                    className="shrink-0 px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold flex items-center space-x-1 transition"
                  >
                    {copiedId === 'master-api' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'master-api' ? 'কপি!' : 'কপি'}</span>
                  </button>
                </div>

                {/* Direct Static JSON Route */}
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Static JSON CDN URL:</span>
                    <span className="font-mono text-emerald-300 truncate select-all">{baseUrl}/data/curriculum.json</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`${baseUrl}/data/curriculum.json`, 'master-static')}
                    className="shrink-0 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold flex items-center space-x-1 transition"
                  >
                    {copiedId === 'master-static' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === 'master-static' ? 'কপি!' : 'কপি'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. DEDICATED INDIVIDUAL PER-CLASS ENDPOINTS (আলাদা আলাদা ক্লাস এন্ডপয়েন্ট) */}
      {/* ========================================================================= */}
      {(activeViewMode === 'both' || activeViewMode === 'individual') && (
        <div className="space-y-5 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm">
                ২
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <span>আলাদা আলাদা ক্লাস এন্ডপয়েন্ট (7 Dedicated Per-Class Endpoints)</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 font-normal">
                    ক্লাস ৬ থেকে ১২ পৃথকভাবে
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  আপনি যদি সমগ্র ডেটাবেজ লোড না করে শুধুমাত্র নির্দিষ্ট কোনো একটি ক্লাসের পূর্ণ তথ্য (বই, অধ্যায় ও লেসন সহ) চান:
                </p>
              </div>
            </div>

            {/* Quick URL Schema badge */}
            <div className="text-xs font-mono bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-teal-300 self-start sm:self-center">
              GET /api/classes/:classId
            </div>
          </div>

          {/* Explanation Banner */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
              <span>
                <strong>নোট:</strong> প্রতিটি ক্লাসের এন্ডপয়েন্ট সংখ্যা (যেমন: <code className="text-emerald-300">/api/classes/9</code>) অথবা স্লাগ (যেমন: <code className="text-emerald-300">/api/classes/class-9</code>) দুটোই সাপোর্ট করে।
              </span>
            </div>
            <div className="text-slate-400">
              ঐচ্ছিক ফিল্টার: <code className="bg-slate-950 px-1 py-0.5 rounded text-amber-300">?group=science</code> বা <code className="bg-slate-950 px-1 py-0.5 rounded text-amber-300">?group=humanities</code>
            </div>
          </div>

          {/* Cards for each of the 7 classes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDIVIDUAL_CLASSES.map((c) => {
              const fullNumericUrl = `${baseUrl}${c.primaryApiUrl}`;
              const isCopied = copiedId === `class-card-${c.classId}`;

              return (
                <div
                  key={c.classId}
                  className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-slate-700 transition p-5 space-y-4 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-medium">
                        {c.stageBangla}
                      </span>
                      <span className="font-mono text-xs text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">
                        Class {c.numeric}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {c.nameBangla}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {c.description}
                    </p>

                    {/* Stats pills */}
                    <div className="flex items-center space-x-2 text-xs pt-1">
                      <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono">
                        {c.subjectCount}টি বিষয়
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono">
                        {c.chapterCount}টি অধ্যায়
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono">
                        {c.lessonCount}টি লেসন
                      </span>
                    </div>
                  </div>

                  {/* Route Box */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-mono">এন্ডপয়েন্ট:</span>
                        <span className="font-mono text-teal-400 font-bold">{c.primaryApiUrl}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono truncate">
                        অল্টারনেটিভ: {c.aliasApiUrl}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <button
                        onClick={() => copyToClipboard(fullNumericUrl, `class-card-${c.classId}`)}
                        className="flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 font-semibold border border-teal-500/30 transition"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'কপি হয়েছে' : 'API লিঙ্ক কপি'}</span>
                      </button>

                      <button
                        onClick={() => onViewJson(`${c.nameBangla} - সম্পূর্ণ ক্লাস ডাটা`, c.primaryApiUrl)}
                        className="flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>প্রিভিউ</span>
                      </button>

                      <a
                        href={fullNumericUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium border border-slate-700 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>ব্রাউজারে</span>
                      </a>

                      <a
                        href={c.staticJsonUrl}
                        download={`nctb-${c.classId}.json`}
                        className="flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium border border-slate-700 transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>JSON ফাইল</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. STEP-BY-STEP CASCADING & DROPDOWN ENDPOINTS */}
      {/* ========================================================================= */}
      {(activeViewMode === 'both' || activeViewMode === 'cascading') && (
        <div className="space-y-5 pt-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
              ৩
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>ড্রপডাউন ও ক্যাসকেডিং এন্ডপয়েন্টসমূহ (Step-by-step Cascading APIs)</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-normal">
                  ধাপে ধাপে ডিপেন্ডেন্ট ড্রপডাউন ফেচ
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                ব্যবহারকারী ড্রপডাউনে একটি অপশন সিলেক্ট করলে পরবর্তী ড্রপডাউনের অপশন ফেচ করার জন্য নিচের এন্ডপয়েন্টগুলো ব্যবহার করুন:
              </p>
            </div>
          </div>

          {/* Dynamic Selector Controls for Testing URLs */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center gap-4 text-xs">
            <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>টেস্ট প্যারামিটার পরিবর্তন করুন:</span>
            </span>

            <div className="flex items-center space-x-2">
              <span className="text-slate-400">শ্রেণি:</span>
              <select
                value={selectedClassForQuery}
                onChange={(e) => setSelectedClassForQuery(e.target.value)}
                className="bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="class-6">৬ষ্ঠ শ্রেণি (class-6)</option>
                <option value="class-7">৭ম শ্রেণি (class-7)</option>
                <option value="class-8">৮ম শ্রেণি (class-8)</option>
                <option value="class-9">৯ম শ্রেণি (class-9)</option>
                <option value="class-10">১০ম শ্রেণি (class-10)</option>
                <option value="class-11">একাদশ শ্রেণি (class-11)</option>
                <option value="class-12">দ্বাদশ শ্রেণি (class-12)</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-slate-400">বিষয় ID:</span>
              <input
                type="text"
                value={selectedSubjectForQuery}
                onChange={(e) => setSelectedSubjectForQuery(e.target.value)}
                className="bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 font-mono text-xs w-36"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-slate-400">অধ্যায় ID:</span>
              <input
                type="text"
                value={selectedChapterForQuery}
                onChange={(e) => setSelectedChapterForQuery(e.target.value)}
                className="bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 font-mono text-xs w-36"
              />
            </div>
          </div>

          {/* List of step endpoints */}
          <div className="space-y-3">
            {STEP_ENDPOINTS.map((endpoint) => {
              const fullUrl = `${baseUrl}${endpoint.path}`;
              const isCopied = copiedId === endpoint.id;

              return (
                <div
                  key={endpoint.id}
                  className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-slate-700 transition p-4 sm:p-5 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-mono font-bold text-xs">
                        {endpoint.method}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {endpoint.step}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {endpoint.title}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onViewJson(endpoint.title, endpoint.path)}
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>প্রিভিউ</span>
                      </button>

                      <a
                        href={fullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                        <span>ব্রাউজারে খুলুন</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300">
                    {endpoint.description}
                  </p>

                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="font-mono text-xs text-indigo-300/90 truncate flex-1 select-all">
                      {fullUrl}
                    </div>
                    <button
                      onClick={() => copyToClipboard(fullUrl, endpoint.id)}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold transition shrink-0"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'কপি হয়েছে' : 'লিঙ্ক কপি'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
