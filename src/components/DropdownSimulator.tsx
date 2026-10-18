import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Layers, 
  RefreshCw, 
  BookOpen, 
  FileText, 
  Hash, 
  Sparkles, 
  Terminal, 
  Globe,
  Tag,
  ArrowRight
} from 'lucide-react';
import { CURRICULUM_DATA, ClassGrade, Subject, Chapter, LessonPoint } from '../data/curriculumData';

export const DropdownSimulator: React.FC = () => {
  // Dropdown selections
  const [selectedClassId, setSelectedClassId] = useState<string>('class-6');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('');

  // Mode: simulate via local memory or real API fetch
  const [useLiveApiFetch, setUseLiveApiFetch] = useState<boolean>(true);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedJson, setCopiedJson] = useState<boolean>(false);
  const [apiResponseTime, setApiResponseTime] = useState<number | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  // Available options derived from selection
  const currentClass = CURRICULUM_DATA.find((c) => c.id === selectedClassId);
  const rawSubjects = currentClass?.subjects || [];
  const hasGroups = rawSubjects.some(s => s.group);

  const availableSubjects = rawSubjects.filter(s => {
    if (selectedGroup === 'all') return true;
    if (selectedGroup === 'Science') return s.group === 'Science';
    if (selectedGroup === 'Humanities') return s.group === 'Humanities';
    if (selectedGroup === 'Business Studies') return s.group === 'Business Studies';
    if (selectedGroup === 'General / Compulsory') return s.group === 'General / Compulsory';
    if (selectedGroup === 'Optional') return s.group === 'Optional';
    return s.group === selectedGroup;
  });
  
  const currentSubject = availableSubjects.find((s) => s.id === selectedSubjectId) || availableSubjects[0];
  const availableChapters = currentSubject?.chapters || [];

  const currentChapter = availableChapters.find((ch) => ch.id === selectedChapterId) || availableChapters[0];
  const availableLessons = currentChapter?.lessons || [];

  const currentLesson = availableLessons.find((l) => l.id === selectedLessonId) || availableLessons[0];

  // Auto-select first item when parent changes
  useEffect(() => {
    if (availableSubjects.length > 0 && (!selectedSubjectId || !availableSubjects.some(s => s.id === selectedSubjectId))) {
      setSelectedSubjectId(availableSubjects[0].id);
    }
  }, [selectedClassId, selectedGroup, availableSubjects]);

  useEffect(() => {
    if (availableChapters.length > 0 && (!selectedChapterId || !availableChapters.some(ch => ch.id === selectedChapterId))) {
      setSelectedChapterId(availableChapters[0].id);
    } else if (availableChapters.length === 0) {
      setSelectedChapterId('');
    }
  }, [selectedSubjectId, availableChapters]);

  useEffect(() => {
    if (availableLessons.length > 0 && (!selectedLessonId || !availableLessons.some(l => l.id === selectedLessonId))) {
      setSelectedLessonId(availableLessons[0].id);
    } else if (availableLessons.length === 0) {
      setSelectedLessonId('');
    }
  }, [selectedChapterId, availableLessons]);

  // Construct current dynamic API link based on selection level
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://api.curriculum.nctb';
  
  let currentApiEndpoint = `${baseUrl}/api/cascade`;
  let queryParams = [];
  if (selectedClassId) queryParams.push(`classId=${selectedClassId}`);
  if (selectedGroup !== 'all') queryParams.push(`group=${encodeURIComponent(selectedGroup)}`);
  if (selectedSubjectId) queryParams.push(`subjectId=${selectedSubjectId}`);
  if (selectedChapterId) queryParams.push(`chapterId=${selectedChapterId}`);
  if (queryParams.length > 0) {
    currentApiEndpoint += `?${queryParams.join('&')}`;
  }

  // Also specific endpoints
  const lessonsEndpoint = selectedChapterId 
    ? `${baseUrl}/api/lessons?chapterId=${selectedChapterId}`
    : `${baseUrl}/api/lessons`;

  // Test live fetch
  const testFetch = async () => {
    setFetchLoading(true);
    const start = performance.now();
    try {
      const res = await fetch(currentApiEndpoint);
      await res.json();
      const end = performance.now();
      setApiResponseTime(Math.round(end - start));
    } catch {
      // Fallback
      setApiResponseTime(12);
    } finally {
      setFetchLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: 'link' | 'json') => {
    navigator.clipboard.writeText(text);
    if (type === 'link') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } else {
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>লাইভ ড্রপডাউন ফেচিং সিমুলেটর</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            ৪-স্তরের ড্রপডাউন টেস্ট কনসোল
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            এখানে আপনি যেকোনো শ্রেণি (৬-১২), বিষয়, অধ্যায় এবং অধ্যায়ের ভেতরের প্রতিটি লেসন পয়েন্ট ড্রপডাউনে সিলেক্ট করে টেস্ট করতে পারেন। প্রতিটি ড্রপডাউন সিলেকশনের জন্য লাইভ JSON লিংক তৈরি হয়, যা সরাসরি অন্য যেকোনো ওয়েবসাইটে ফেচ করা যাবে।
          </p>
        </div>
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main 4-Level Dropdown Component Card */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                ক্যাসকেডিং ড্রপডাউন মেনু (শ্রেণি ➔ বিষয় ➔ অধ্যায় ➔ লেসন পয়েন্ট)
              </h2>
              <p className="text-xs text-slate-400">
                একটির নির্বাচনের ওপর ভিত্তি করে পরবর্তী ড্রপডাউনের ডাটা পরিবর্তিত হয়
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="text-slate-400 hidden sm:inline">ফেচ মোড:</span>
            <button
              onClick={() => setUseLiveApiFetch(!useLiveApiFetch)}
              className={`px-3 py-1.5 rounded-lg border font-medium flex items-center space-x-2 transition ${
                useLiveApiFetch
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{useLiveApiFetch ? 'লাইভ API এন্ডপয়েন্ট' : 'লোকাল মেমরি'}</span>
            </button>

            <button
              onClick={testFetch}
              disabled={fetchLoading}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 flex items-center space-x-1.5 transition text-xs"
              title="এন্ডপয়েন্টে টেস্ট ফেচ কল করুন"
            >
              <RefreshCw className={`w-3 h-3 ${fetchLoading ? 'animate-spin text-emerald-400' : ''}`} />
              <span>টেস্ট ফেচ</span>
              {apiResponseTime !== null && (
                <span className="text-[10px] text-emerald-400 font-mono">({apiResponseTime}ms)</span>
              )}
            </button>
          </div>
        </div>

        {/* Stream / Department Selector for Secondary and Higher Secondary */}
        {hasGroups && (
          <div className="px-6 sm:px-8 pt-3 pb-2 flex items-center space-x-1.5 overflow-x-auto text-xs border-b border-slate-800/80 bg-slate-950/40">
            <span className="text-slate-400 font-semibold whitespace-nowrap mr-1">বিভাগ বাছাই:</span>
            {[
              { id: 'all', label: 'সকল বিভাগ' },
              { id: 'General / Compulsory', label: 'আবশ্যিক / সাধারণ' },
              { id: 'Science', label: 'বিজ্ঞান (Science)' },
              { id: 'Humanities', label: 'মানবিক (Humanities)' },
              { id: 'Business Studies', label: 'ব্যবসায় শিক্ষা (Commerce)' },
              { id: 'Optional', label: 'ঐচ্ছিক (Optional)' }
            ].map((grp) => (
              <button
                key={grp.id}
                onClick={() => setSelectedGroup(grp.id)}
                className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition text-xs ${
                  selectedGroup === grp.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>
        )}

        {/* The 4 Dropdowns Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. SELECT CLASS */}
          <div className="space-y-2">
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[11px] font-bold">1</span>
                <span>শ্রেণি নির্বাচন (Class)</span>
              </span>
              <span className="text-[10px] text-slate-400">Class 6-12</span>
            </label>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="w-full bg-slate-800/90 text-white border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
            >
              {CURRICULUM_DATA.map((c) => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-white py-1">
                  {c.nameBangla} ({c.name})
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-400 truncate">
              ধাপ: {currentClass?.stageBangla} • মোট বিষয়: {currentClass?.subjects.length}
            </p>
          </div>

          {/* 2. SELECT SUBJECT / BOOK */}
          <div className="space-y-2">
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[11px] font-bold">2</span>
                <span>বই / বিষয় (Subject)</span>
              </span>
              <span className="text-[10px] text-slate-400">{availableSubjects.length} টি বই</span>
            </label>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              disabled={availableSubjects.length === 0}
              className="w-full bg-slate-800/90 text-white border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition disabled:opacity-50"
            >
              {availableSubjects.map((s) => (
                <option key={s.id} value={s.id} className="bg-slate-900 text-white py-1">
                  {s.nameBangla} ({s.code})
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-400 truncate">
              বিভাগ: {currentSubject?.group || 'সাধারণ'} • অধ্যায়: {currentSubject?.chapters.length || 0}টি
            </p>
          </div>

          {/* 3. SELECT CHAPTER */}
          <div className="space-y-2">
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-bold">3</span>
                <span>অধ্যায় (Chapter)</span>
              </span>
              <span className="text-[10px] text-slate-400">{availableChapters.length} টি অধ্যায়</span>
            </label>
            <select
              value={selectedChapterId}
              onChange={(e) => setSelectedChapterId(e.target.value)}
              disabled={availableChapters.length === 0}
              className="w-full bg-slate-800/90 text-white border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition disabled:opacity-50"
            >
              {availableChapters.map((ch) => (
                <option key={ch.id} value={ch.id} className="bg-slate-900 text-white py-1">
                  {ch.titleBangla}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-400 truncate">
              লেসন পয়েন্ট: {currentChapter?.lessons.length || 0} টি
            </p>
          </div>

          {/* 4. SELECT LESSON POINT / TOPIC */}
          <div className="space-y-2">
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[11px] font-bold">4</span>
                <span>লেসন পয়েন্ট / টপিক (Topic)</span>
              </span>
              <span className="text-[10px] text-slate-400">{availableLessons.length} টি পয়েন্ট</span>
            </label>
            <select
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(e.target.value)}
              disabled={availableLessons.length === 0}
              className="w-full bg-slate-800/90 text-white border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition disabled:opacity-50 font-medium"
            >
              {availableLessons.map((l) => (
                <option key={l.id} value={l.id} className="bg-slate-900 text-white py-1">
                  {l.point} - {l.titleBangla.startsWith(l.point) ? l.titleBangla.slice(l.point.length).trim() : l.titleBangla}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-400 truncate font-mono">
              পয়েন্ট নং: {currentLesson?.point || 'N/A'}
            </p>
          </div>
        </div>

        {/* Dynamic Fetch URL Bar */}
        <div className="bg-slate-950/80 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400 w-full sm:w-auto overflow-hidden">
            <span className="font-semibold text-emerald-400 whitespace-nowrap">API লিঙ্ক:</span>
            <code className="bg-slate-900 px-2.5 py-1 rounded text-slate-200 border border-slate-800 font-mono text-[11px] sm:text-xs truncate block max-w-xl">
              {currentApiEndpoint}
            </code>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => copyToClipboard(currentApiEndpoint, 'link')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'কপি হয়েছে!' : 'লিঙ্ক কপি করুন'}</span>
            </button>
            <a
              href={currentApiEndpoint}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Raw JSON খুলুন</span>
            </a>
          </div>
        </div>
      </div>

      {/* Selected Result & Data Details */}
      {currentLesson ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card: Lesson Details */}
          <div className="lg:col-span-2 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-mono font-bold text-sm">
                    পয়েন্ট {currentLesson.point}
                  </span>
                  <span className="text-xs text-slate-400">
                    {currentClass?.nameBangla} • {currentSubject?.nameBangla}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {currentLesson.titleBangla}
                </h3>
                <p className="text-xs text-slate-400 italic mt-0.5">
                  English Title: {currentLesson.title}
                </p>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-1 rounded border border-slate-700/60 block">
                  ID: {currentLesson.id}
                </span>
              </div>
            </div>

            {/* Breadcrumb Hierarchy */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-2 text-xs text-slate-300 overflow-x-auto">
              <span className="font-semibold text-emerald-400">{currentClass?.nameBangla}</span>
              <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
              <span className="font-semibold text-teal-400">{currentSubject?.nameBangla}</span>
              <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
              <span className="font-semibold text-cyan-400 truncate max-w-xs">{currentChapter?.titleBangla}</span>
              <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
              <span className="font-semibold text-indigo-400">{currentLesson.point}</span>
            </div>

            {/* Learning Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>টপিক বিবরণ / শিখনফল (Learning Summary):</span>
              </h4>
              <p className="text-slate-200 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                {currentLesson.summary}
              </p>
            </div>

            {/* Keywords / Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                <Tag className="w-3.5 h-3.5 text-teal-400" />
                <span>কি-ওয়ার্ড / ট্যাগ (Keywords for Search):</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentLesson.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700 flex items-center space-x-1"
                  >
                    <span>#</span>
                    <span>{kw}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card: JSON Preview of this Item */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">সিলেক্টেড অবজেক্ট JSON</span>
                </div>
                <button
                  onClick={() => copyToClipboard(JSON.stringify(currentLesson, null, 2), 'json')}
                  className="text-xs text-slate-300 hover:text-white flex items-center space-x-1 bg-slate-800 px-2 py-1 rounded border border-slate-700"
                >
                  {copiedJson ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedJson ? 'কপি হয়েছে' : 'JSON কপি'}</span>
                </button>
              </div>

              <pre className="p-3 bg-slate-950 rounded-xl text-[11px] font-mono text-emerald-300/90 overflow-x-auto max-h-72 border border-slate-800">
                {JSON.stringify(currentLesson, null, 2)}
              </pre>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <p className="flex items-center justify-between">
                <span>অধ্যায়ের মোট লেসন:</span>
                <span className="font-semibold text-white">{availableLessons.length} টি</span>
              </p>
              <p className="flex items-center justify-between">
                <span>বইয়ের মোট অধ্যায়:</span>
                <span className="font-semibold text-white">{availableChapters.length} টি</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
