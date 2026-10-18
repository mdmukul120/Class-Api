import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Download, 
  Code, 
  Database, 
  Globe, 
  FileJson, 
  Eye, 
  Layers, 
  Search,
  Sparkles
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

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://curriculum.nctb';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const API_ENDPOINTS = [
    {
      id: 'full-curriculum',
      title: 'সম্পূর্ণ কারিকুলাম JSON (Class 6 - 12 Full Data)',
      description: 'ক্লাস ৬ থেকে ১২ পর্যন্ত সকল বই, অধ্যায় এবং লেসন পয়েন্টের পূর্ণ ডাটাবেজ। একক কলে সম্পূর্ণ ডেটা লোড করার জন্য।',
      method: 'GET',
      path: '/api/curriculum',
      staticUrl: '/data/curriculum.json',
      category: 'Core Database',
      sampleParams: ''
    },
    {
      id: 'classes-list',
      title: 'শ্রেণিসমূহের তালিকা (Classes List - Dropdown 1)',
      description: 'সকল শ্রেণির নাম (বাংলা ও ইংরেজি), আইডি, স্টেজ এবং মোট বইয়ের সংখ্যা। ড্রপডাউন ১-এ লোড করার জন্য আদর্শ।',
      method: 'GET',
      path: '/api/classes',
      staticUrl: '/data/classes.json',
      category: 'Dropdown 1',
      sampleParams: ''
    },
    {
      id: 'subjects-by-class',
      title: 'শ্রেণিভিত্তিক বইয়ের তালিকা (Subjects by Class - Dropdown 2)',
      description: 'নির্দিষ্ট শ্রেণির বিপরীতে সকল পাঠ্যবই ও বিষয় ফেচ করার এন্ডপয়েন্ট। classId প্যারামিটারে নির্দিষ্ট শ্রেণির আইডি পাস করুন।',
      method: 'GET',
      path: `/api/subjects?classId=${selectedClassForQuery}`,
      staticUrl: `/data/${selectedClassForQuery}.json`,
      category: 'Dropdown 2',
      hasParamControl: 'class'
    },
    {
      id: 'subjects-by-stream',
      title: 'বিভাগভিত্তিক ফিল্টার (Subjects by Group / Stream - Science, Humanities, Business)',
      description: '৯ম-১০ম ও একাদশ-দ্বাদশ (HSC) শ্রেণির বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা বা আবশ্যিক গ্রুপ ফিল্টার করার এন্ডপয়েন্ট। group=science, group=humanities, group=business, group=compulsory পাস করুন।',
      method: 'GET',
      path: `/api/subjects?classId=${selectedClassForQuery}&group=science`,
      category: 'Stream Filter',
      sampleParams: 'group=science'
    },
    {
      id: 'chapters-by-subject',
      title: 'বিষয়ভিত্তিক অধ্যায়সমূহের তালিকা (Chapters by Subject - Dropdown 3)',
      description: 'নির্বাচিত বইয়ের প্রতিটি অধ্যায়ের নাম, নম্বর ও লেসন কাউন্ট ফেচ করার এন্ডপয়েন্ট।',
      method: 'GET',
      path: `/api/chapters?subjectId=${selectedSubjectForQuery}`,
      category: 'Dropdown 3',
      hasParamControl: 'subject'
    },
    {
      id: 'lessons-by-chapter',
      title: 'অধ্যায়ভিত্তিক লেসন পয়েন্টস (Lessons / Topics - Dropdown 4)',
      description: 'নির্বাচিত অধ্যায়ের অন্তর্গত প্রতিটি লেসন পয়েন্ট, টপিক নাম, পয়েন্ট নম্বর (১.১, ১.২...) ও সারসংক্ষেপ ফেচ করার এন্ডপয়েন্ট।',
      method: 'GET',
      path: `/api/lessons?chapterId=${selectedChapterForQuery}`,
      category: 'Dropdown 4',
      hasParamControl: 'chapter'
    },
    {
      id: 'cascade-universal',
      title: 'ক্যাসকেডিং অল-ইন-ওয়ান এন্ডপয়েন্ট (Universal Cascading Route)',
      description: 'যেকোনো প্যারামিটার (classId, subjectId, chapterId) অনুযায়ী সরাসরি সংশ্লিষ্ট ড্রপডাউন অপশনসমূহ রিটার্ন করে।',
      method: 'GET',
      path: `/api/cascade?classId=${selectedClassForQuery}&subjectId=${selectedSubjectForQuery}&chapterId=${selectedChapterForQuery}`,
      category: 'Universal Cascade',
      sampleParams: ''
    },
    {
      id: 'search-query',
      title: 'কারিকুলাম সার্চ এন্ডপয়েন্ট (Live Search API)',
      description: 'বাংলা বা ইংরেজিতে যেকোনো শব্দ, অধ্যায় বা টপিক পয়েন্ট সার্চ করার এন্ডপয়েন্ট।',
      method: 'GET',
      path: '/api/search?q=সেট',
      category: 'Search API',
      sampleParams: ''
    }
  ];

  const INDIVIDUAL_CLASS_FILES = CURRICULUM_DATA.map((c) => {
    let chCount = 0;
    let lCount = 0;
    c.subjects.forEach((s) => {
      chCount += s.chapters.length;
      s.chapters.forEach((ch) => {
        lCount += ch.lessons.length;
      });
    });
    return {
      classId: c.id,
      title: `${c.nameBangla} (${c.name})`,
      size: `${c.subjects.length}টি বিষয়, ${chCount}টি অধ্যায়, ${lCount}টি লেসন পয়েন্ট`,
      url: `/data/${c.id}.json`
    };
  });

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
          <Database className="w-3.5 h-3.5" />
          <span>JSON লিঙ্ক ও API এন্ডপয়েন্ট ডিরেক্টরি</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          সরাসরি ফেচ করার JSON লিঙ্কসমূহ
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          নিচের প্রতিটি এন্ডপয়েন্ট যেকোনো ফ্রন্টএন্ড বা ব্যাকএন্ডে (React, Vue, Flutter, Android, iOS, PHP, Python) সরাসরি <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-300 font-mono text-xs">fetch()</code> করা যাবে। সবকটিতে <strong className="text-white">CORS Enabled</strong> রয়েছে।
        </p>
      </div>

      {/* Dynamic Selector Controls for Testing URLs */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center gap-4 text-xs">
        <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>টেস্ট প্যারামিটার সিলেক্ট করুন:</span>
        </span>

        <div className="flex items-center space-x-2">
          <span className="text-slate-400">শ্রেণি:</span>
          <select
            value={selectedClassForQuery}
            onChange={(e) => setSelectedClassForQuery(e.target.value)}
            className="bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-emerald-500"
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

      {/* Main Endpoints List */}
      <div className="space-y-4">
        {API_ENDPOINTS.map((endpoint) => {
          const fullUrl = `${baseUrl}${endpoint.path}`;
          const isCopied = copiedId === endpoint.id;

          return (
            <div
              key={endpoint.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-slate-700 transition p-5 sm:p-6 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">
                    {endpoint.method}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {endpoint.category}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {endpoint.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onViewJson(endpoint.title, endpoint.path)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>প্রিভিউ দেখুন</span>
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

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {endpoint.description}
              </p>

              {/* URL Display Box */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="font-mono text-xs text-emerald-300/90 truncate flex-1 select-all">
                  {fullUrl}
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => copyToClipboard(fullUrl, endpoint.id)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'কপি হয়েছে!' : 'লিঙ্ক কপি করুন'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section: Individual Class Direct JSON Files (Offline / Static) */}
      <div className="space-y-5 pt-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <FileJson className="w-5 h-5 text-emerald-400" />
            <span>শ্রেণিভিত্তিক একক JSON ফাইল ডাউনলোড ও স্ট্যাটিক লিঙ্ক</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            আপনি যদি পুরো ডেটাবেজের বদলে শুধুমাত্র নির্দিষ্ট কোনো একটি শ্রেণির সম্পূর্ণ বই ও অধ্যায়ের JSON ফাইল নিতে চান:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDIVIDUAL_CLASS_FILES.map((item) => {
            const staticFullUrl = `${baseUrl}${item.url}`;
            const isCopied = copiedId === item.classId;

            return (
              <div
                key={item.classId}
                className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 space-y-3 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {item.classId}.json
                  </span>
                </div>

                <div className="text-xs text-slate-400">{item.size}</div>

                <div className="flex items-center space-x-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => copyToClipboard(staticFullUrl, item.classId)}
                    className="flex-1 flex items-center justify-center space-x-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                  >
                    {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{isCopied ? 'কপি হয়েছে' : 'লিঙ্ক কপি'}</span>
                  </button>

                  <a
                    href={item.url}
                    download
                    className="flex items-center justify-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/20 transition"
                  >
                    <Download className="w-3 h-3" />
                    <span>ডাউনলোড</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
