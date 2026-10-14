import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  Tag, 
  Layers, 
  Hash, 
  Copy, 
  Check, 
  FileText,
  Filter
} from 'lucide-react';
import { CURRICULUM_DATA, ClassGrade, Subject, Chapter, LessonPoint } from '../data/curriculumData';

export const CurriculumBrowser: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClassTab, setSelectedClassTab] = useState<string>('all');
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'c6-ban-ch1': true,
    'c6-math-ch1': true
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const copyPointId = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered dataset
  const filteredData = useMemo(() => {
    let classes = CURRICULUM_DATA;

    if (selectedClassTab !== 'all') {
      classes = classes.filter(c => c.id === selectedClassTab);
    }

    if (!searchQuery.trim()) {
      return classes;
    }

    const query = searchQuery.toLowerCase().trim();

    return classes.map(c => {
      const filteredSubjects = c.subjects.map(s => {
        const filteredChapters = s.chapters.map(ch => {
          const matchingLessons = ch.lessons.filter(l => 
            l.title.toLowerCase().includes(query) ||
            l.titleBangla.includes(query) ||
            l.point.includes(query) ||
            l.summary.toLowerCase().includes(query) ||
            l.keywords.some(k => k.toLowerCase().includes(query))
          );

          const chapterMatches = ch.title.toLowerCase().includes(query) || ch.titleBangla.includes(query);

          if (chapterMatches) {
            return ch; // keep all lessons if chapter title matches
          }

          if (matchingLessons.length > 0) {
            return {
              ...ch,
              lessons: matchingLessons
            };
          }

          return null;
        }).filter(Boolean) as Chapter[];

        const subjectMatches = s.name.toLowerCase().includes(query) || s.nameBangla.includes(query) || s.code.toLowerCase().includes(query);

        if (subjectMatches) {
          return s;
        }

        if (filteredChapters.length > 0) {
          return {
            ...s,
            chapters: filteredChapters
          };
        }

        return null;
      }).filter(Boolean) as Subject[];

      if (filteredSubjects.length > 0) {
        return {
          ...c,
          subjects: filteredSubjects
        };
      }

      return null;
    }).filter(Boolean) as ClassGrade[];
  }, [searchQuery, selectedClassTab]);

  return (
    <div className="space-y-8">
      {/* Search & Class Tabs Bar */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            পাঠ্যক্রম ব্রাউজার ও টপিক এক্সপ্লোরার
          </h2>
          <p className="mt-1 text-slate-300 text-sm">
            ক্লাস ৬ থেকে ১২ পর্যন্ত সকল বই, অধ্যায় এবং অধ্যায়ের ভেতরের পয়েন্টগুলোর বিস্তারিত অনুসন্ধান করুন
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="যেকোনো বই, অধ্যায়, টপিক বা কি-ওয়ার্ড খুঁজুন (যেমন: সেট, বল, গতি, নিউটন, কোয়ান্টাম, সি প্রোগ্রামিং, ভেক্টর...)"
            className="w-full bg-slate-900/90 text-white pl-12 pr-4 py-3.5 rounded-2xl border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-lg placeholder:text-slate-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-slate-800 text-slate-300 hover:text-white px-2 py-1 rounded"
            >
              মুছে ফেলুন
            </button>
          )}
        </div>

        {/* Class Filter Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedClassTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedClassTab === 'all'
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            সকল শ্রেণি (All)
          </button>
          {CURRICULUM_DATA.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedClassTab(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedClassTab === c.id
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {c.nameBangla}
            </button>
          ))}
        </div>
      </div>

      {/* Results Tree */}
      <div className="space-y-6">
        {filteredData.length === 0 ? (
          <div className="p-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">
              "{searchQuery}" এর জন্য কোনো ফলাফল পাওয়া যায়নি।
            </p>
          </div>
        ) : (
          filteredData.map(cls => (
            <div
              key={cls.id}
              className="bg-slate-900/80 rounded-2xl border border-slate-800/90 overflow-hidden shadow-lg space-y-4 p-5 sm:p-6"
            >
              {/* Class Title */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-sm shadow">
                    {cls.numeric}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cls.nameBangla} ({cls.name})
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cls.stageBangla} • {cls.subjects.length} টি বই
                    </p>
                  </div>
                </div>
              </div>

              {/* Subjects in this class */}
              <div className="space-y-4">
                {cls.subjects.map(subject => (
                  <div
                    key={subject.id}
                    className="bg-slate-950/70 rounded-xl border border-slate-800 p-4 space-y-3"
                  >
                    {/* Subject Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <h4 className="font-bold text-white text-sm sm:text-base">
                          {subject.nameBangla}
                        </h4>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {subject.code}
                        </span>
                        {subject.group && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                            {subject.group}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400">
                        {subject.chapters.length} টি অধ্যায়
                      </span>
                    </div>

                    {/* Chapters Accordion */}
                    <div className="space-y-2.5 pt-2">
                      {subject.chapters.map(chapter => {
                        const isExpanded = expandedChapters[chapter.id] || searchQuery.length > 0;

                        return (
                          <div
                            key={chapter.id}
                            className="bg-slate-900/90 rounded-lg border border-slate-800 overflow-hidden"
                          >
                            <button
                              onClick={() => toggleChapter(chapter.id)}
                              className="w-full text-left px-3.5 py-2.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/60 transition"
                            >
                              <div className="flex items-center space-x-2 truncate">
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-emerald-400 shrink-0" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                                )}
                                <span className="truncate">{chapter.titleBangla}</span>
                              </div>
                              <span className="text-[11px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded font-mono shrink-0 ml-2">
                                {chapter.lessons.length} পয়েন্ট
                              </span>
                            </button>

                            {/* Lesson Points List */}
                            {isExpanded && (
                              <div className="p-3 bg-slate-950/60 border-t border-slate-800/80 space-y-2">
                                {chapter.lessons.map(lesson => (
                                  <div
                                    key={lesson.id}
                                    className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-xs"
                                  >
                                    <div className="space-y-1">
                                      <div className="flex items-center space-x-2">
                                        <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[11px]">
                                          {lesson.point}
                                        </span>
                                        <span className="font-semibold text-slate-200">
                                          {lesson.titleBangla}
                                        </span>
                                      </div>
                                      <p className="text-slate-400 text-[11px] pl-1">
                                        {lesson.summary}
                                      </p>
                                      {lesson.keywords.length > 0 && (
                                        <div className="flex flex-wrap gap-1 pt-1 pl-1">
                                          {lesson.keywords.map((kw, i) => (
                                            <span key={i} className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                                              #{kw}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>

                                    <div className="flex items-center space-x-1.5 shrink-0 self-end sm:self-center">
                                      <button
                                        onClick={() => copyPointId(lesson.id, lesson.id)}
                                        className="text-[10px] text-slate-400 hover:text-emerald-400 bg-slate-800 hover:bg-slate-750 px-2 py-1 rounded border border-slate-700 flex items-center space-x-1 transition"
                                        title="লেসন আইডি কপি করুন"
                                      >
                                        {copiedId === lesson.id ? (
                                          <Check className="w-3 h-3 text-emerald-400" />
                                        ) : (
                                          <Copy className="w-3 h-3" />
                                        )}
                                        <span>ID</span>
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
