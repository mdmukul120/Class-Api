import React, { useState } from 'react';
import { Check, Copy, Code2, Terminal, Globe, FileCode } from 'lucide-react';

export const CodeSnippets: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'html' | 'react' | 'js' | 'curl' | 'python'>('html');
  const [copied, setCopied] = useState<boolean>(false);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.app';

  const snippets = {
    html: `<!-- ============================================================ -->
<!-- ড্রপডাউন মেনু ইন্টিগ্রেশন: পূর্ণাঙ্গ HTML ও Vanilla JavaScript কোড -->
<!-- ============================================================ -->
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>NCTB ৪-স্তরের ড্রপডাউন মেনু</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
    .dropdown-group { margin-bottom: 15px; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    select { width: 100%; max-width: 400px; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; }
    .result-box { margin-top: 20px; padding: 15px; background: #e2e8f0; border-radius: 8px; max-width: 500px; }
  </style>
</head>
<body>

  <h2>NCTB শ্রেণি, বিষয়, অধ্যায় ও টপিক সিলেক্টর</h2>

  <!-- ড্রপডাউন ১: শ্রেণি -->
  <div class="dropdown-group">
    <label for="classSelect">১. শ্রেণি নির্বাচন করুন:</label>
    <select id="classSelect">
      <option value="">লোড হচ্ছে...</option>
    </select>
  </div>

  <!-- ড্রপডাউন ২: বিষয় / বই -->
  <div class="dropdown-group">
    <label for="subjectSelect">২. বিষয় / বই নির্বাচন করুন:</label>
    <select id="subjectSelect" disabled>
      <option value="">প্রথমে শ্রেণি সিলেক্ট করুন</option>
    </select>
  </div>

  <!-- ড্রপডাউন ৩: অধ্যায় -->
  <div class="dropdown-group">
    <label for="chapterSelect">৩. অধ্যায় নির্বাচন করুন:</label>
    <select id="chapterSelect" disabled>
      <option value="">প্রথমে বিষয় সিলেক্ট করুন</option>
    </select>
  </div>

  <!-- ড্রপডাউন ৪: লেসন পয়েন্ট / টপিক -->
  <div class="dropdown-group">
    <label for="lessonSelect">৪. লেসন পয়েন্ট / টপিক নির্বাচন করুন:</label>
    <select id="lessonSelect" disabled>
      <option value="">প্রথমে অধ্যায় সিলেক্ট করুন</option>
    </select>
  </div>

  <!-- ফলাফল ডিসপ্লে -->
  <div id="result" class="result-box" style="display:none;"></div>

  <script>
    const API_BASE = "${baseUrl}";

    const classEl = document.getElementById('classSelect');
    const subjectEl = document.getElementById('subjectSelect');
    const chapterEl = document.getElementById('chapterSelect');
    const lessonEl = document.getElementById('lessonSelect');
    const resultEl = document.getElementById('result');

    // ১. পৃষ্ঠা লোড হলে শ্রেণিগুলোর তালিকা ফেচ
    async function loadClasses() {
      const res = await fetch(\`\${API_BASE}/api/classes\`);
      const { data } = await res.json();
      classEl.innerHTML = '<option value="">-- শ্রেণি বেছে নিন --</option>' +
        data.map(c => \`<option value="\${c.id}">\${c.nameBangla} (\${c.name})</option>\`).join('');
    }

    // ২. শ্রেণি সিলেক্ট করলে বিষয় ফেচ
    classEl.addEventListener('change', async (e) => {
      const classId = e.target.value;
      subjectEl.innerHTML = '<option value="">লোড হচ্ছে...</option>';
      subjectEl.disabled = true;
      chapterEl.innerHTML = '<option value="">প্রথমে বিষয় সিলেক্ট করুন</option>';
      chapterEl.disabled = true;
      lessonEl.innerHTML = '<option value="">প্রথমে অধ্যায় সিলেক্ট করুন</option>';
      lessonEl.disabled = true;
      resultEl.style.display = 'none';

      if (!classId) return;

      const res = await fetch(\`\${API_BASE}/api/subjects?classId=\${classId}\`);
      const { data } = await res.json();
      subjectEl.innerHTML = '<option value="">-- বিষয় বেছে নিন --</option>' +
        data.map(s => \`<option value="\${s.id}">\${s.nameBangla} (\${s.code})</option>\`).join('');
      subjectEl.disabled = false;
    });

    // ৩. বিষয় সিলেক্ট করলে অধ্যায় ফেচ
    subjectEl.addEventListener('change', async (e) => {
      const subjectId = e.target.value;
      chapterEl.innerHTML = '<option value="">লোড হচ্ছে...</option>';
      chapterEl.disabled = true;
      lessonEl.innerHTML = '<option value="">প্রথমে অধ্যায় সিলেক্ট করুন</option>';
      lessonEl.disabled = true;
      resultEl.style.display = 'none';

      if (!subjectId) return;

      const res = await fetch(\`\${API_BASE}/api/chapters?subjectId=\${subjectId}\`);
      const { data } = await res.json();
      chapterEl.innerHTML = '<option value="">-- অধ্যায় বেছে নিন --</option>' +
        data.map(ch => \`<option value="\${ch.id}">\${ch.titleBangla}</option>\`).join('');
      chapterEl.disabled = false;
    });

    // ৪. অধ্যায় সিলেক্ট করলে লেসন পয়েন্ট ফেচ
    chapterEl.addEventListener('change', async (e) => {
      const chapterId = e.target.value;
      lessonEl.innerHTML = '<option value="">লোড হচ্ছে...</option>';
      lessonEl.disabled = true;
      resultEl.style.display = 'none';

      if (!chapterId) return;

      const res = await fetch(\`\${API_BASE}/api/lessons?chapterId=\${chapterId}\`);
      const { data } = await res.json();
      lessonEl.innerHTML = '<option value="">-- টপিক / লেসন বেছে নিন --</option>' +
        data.map(l => \`<option value="\${l.id}">\${l.point} - \${l.titleBangla}</option>\`).join('');
      lessonEl.disabled = false;

      // লেসন ডেটা সেভ রাখা
      window.cachedLessons = data;
    });

    // ৫. লেসন সিলেক্ট করলে সারসংক্ষেপ প্রদর্শন
    lessonEl.addEventListener('change', (e) => {
      const lessonId = e.target.value;
      if (!lessonId || !window.cachedLessons) return;
      const lesson = window.cachedLessons.find(l => l.id === lessonId);
      if (lesson) {
        resultEl.style.display = 'block';
        resultEl.innerHTML = \`
          <strong>সিলেক্টেড টপিক:</strong> \${lesson.titleBangla} (\${lesson.point})<br>
          <small>শিখনফল:</small> \${lesson.summary}
        \`;
      }
    });

    loadClasses();
  </script>
</body>
</html>`,

    react: `// React 18 / 19 Hook ভিত্তিক ক্যাসকেডিং ড্রপডাউন কম্পোনেন্ট
import React, { useState, useEffect } from 'react';

const API_BASE = '${baseUrl}';

export default function CurriculumSelector() {
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [lessons, setLessons] = useState([]);

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedLesson, setSelectedLesson] = useState('');

  // ১. শ্রেণির তালিকা লোড
  useEffect(() => {
    fetch(\`\${API_BASE}/api/classes\`)
      .then(res => res.json())
      .then(json => setClasses(json.data || []));
  }, []);

  // ২. বিষয় তালিকা লোড
  useEffect(() => {
    if (!selectedClass) { setSubjects([]); return; }
    fetch(\`\${API_BASE}/api/subjects?classId=\${selectedClass}\`)
      .then(res => res.json())
      .then(json => {
        setSubjects(json.data || []);
        setSelectedSubject('');
        setChapters([]);
        setLessons([]);
      });
  }, [selectedClass]);

  // ৩. অধ্যায় তালিকা লোড
  useEffect(() => {
    if (!selectedSubject) { setChapters([]); return; }
    fetch(\`\${API_BASE}/api/chapters?subjectId=\${selectedSubject}\`)
      .then(res => res.json())
      .then(json => {
        setChapters(json.data || []);
        setSelectedChapter('');
        setLessons([]);
      });
  }, [selectedSubject]);

  // ৪. লেসন পয়েন্ট লোড
  useEffect(() => {
    if (!selectedChapter) { setLessons([]); return; }
    fetch(\`\${API_BASE}/api/lessons?chapterId=\${selectedChapter}\`)
      .then(res => res.json())
      .then(json => {
        setLessons(json.data || []);
        setSelectedLesson('');
      });
  }, [selectedChapter]);

  return (
    <div className="p-6 max-w-md bg-white rounded-xl shadow space-y-4">
      <h3 className="font-bold text-lg">এনসিটিবি পাঠ্যক্রম সিলেক্টর</h3>
      
      {/* শ্রেণি */}
      <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="w-full border p-2 rounded">
        <option value="">শ্রেণি নির্বাচন করুন</option>
        {classes.map(c => <option key={c.id} value={c.id}>{c.nameBangla}</option>)}
      </select>

      {/* বিষয় */}
      <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} disabled={!selectedClass} className="w-full border p-2 rounded">
        <option value="">বিষয় নির্বাচন করুন</option>
        {subjects.map(s => <option key={s.id} value={s.id}>{s.nameBangla}</option>)}
      </select>

      {/* অধ্যায় */}
      <select value={selectedChapter} onChange={e => setSelectedChapter(e.target.value)} disabled={!selectedSubject} className="w-full border p-2 rounded">
        <option value="">অধ্যায় নির্বাচন করুন</option>
        {chapters.map(ch => <option key={ch.id} value={ch.id}>{ch.titleBangla}</option>)}
      </select>

      {/* লেসন পয়েন্ট */}
      <select value={selectedLesson} onChange={e => setSelectedLesson(e.target.value)} disabled={!selectedChapter} className="w-full border p-2 rounded">
        <option value="">লেসন পয়েন্ট নির্বাচন করুন</option>
        {lessons.map(l => <option key={l.id} value={l.id}>{l.point} - {l.titleBangla}</option>)}
      </select>
    </div>
  );
}`,

    js: `// আধুনিক JavaScript (Async/Await) ফেচ ফাংশন
const API_BASE = '${baseUrl}';

// ১. সবগুলো ক্লাস একসাথে ফেচ করার উদাহরণ (Master Unified API)
async function fetchAllCurriculum() {
  const res = await fetch(\`\${API_BASE}/api/curriculum\`);
  const json = await res.json();
  console.log('মোট ক্লাস:', json.stats.totalClasses, 'বই:', json.stats.totalSubjects);
  return json.data;
}

// ২. একটি নির্দিষ্ট ক্লাসের পূর্ণ ডেটা ফেচ (Individual Class API)
async function fetchSingleClass(classNumericOrId) {
  // উদাহরণ: fetchSingleClass(9) বা fetchSingleClass('class-9')
  const res = await fetch(\`\${API_BASE}/api/classes/\${classNumericOrId}\`);
  const json = await res.json();
  console.log(\`\${json.nameBangla} এর বিষয়সমূহ:\`, json.subjects);
  return json;
}

// ৩. বিভাগ অনুযায়ী ফিল্টার (যেমন: ৯ম শ্রেণির বিজ্ঞান বিভাগ)
async function fetchClassWithGroup(classId, group = 'science') {
  const res = await fetch(\`\${API_BASE}/api/classes/\${classId}?group=\${group}\`);
  return await res.json();
}

// ৪. ক্যাসকেডিং ড্রপডাউন ফেচ (ধাপে ধাপে অপশন)
async function fetchCurriculumStep(params = {}) {
  const query = new URLSearchParams(params).toString();
  const url = \`\${API_BASE}/api/cascade?\${query}\`;
  const res = await fetch(url);
  return await res.json();
}`,

    curl: `# ========================================================
# ১. সবগুলো ক্লাস একসাথে ফেচ (Master Unified API)
# ========================================================
curl "${baseUrl}/api/curriculum"

# অল্টারনেটিভ রুট
curl "${baseUrl}/api/classes/all"

# ========================================================
# ২. আলাদা আলাদা ক্লাস ফেচ (Individual Class APIs)
# ========================================================
# ৬ষ্ঠ শ্রেণির পূর্ণাঙ্গ ডেটা (১৪টি বই ও অধ্যায়)
curl "${baseUrl}/api/classes/6"

# ৯ম শ্রেণির পূর্ণাঙ্গ ডেটা (বিজ্ঞান, মানবিক ও বাণিজ্য সহ)
curl "${baseUrl}/api/classes/9"

# ৯ম শ্রেণির শুধুমাত্র বিজ্ঞান (Science) বিভাগের বই ও অধ্যায়
curl "${baseUrl}/api/classes/9?group=science"

# একাদশ শ্রেণি (HSC ১ম বর্ষ - ২৪টি বিষয়)
curl "${baseUrl}/api/classes/11"

# দ্বাদশ শ্রেণি (HSC ২য় বর্ষ - ২৪টি বিষয়)
curl "${baseUrl}/api/classes/12"

# ========================================================
# ৩. ড্রপডাউন ও ক্যাসকেডিং এন্ডপয়েন্টস
# ========================================================
# ড্রপডাউন ১: সকল শ্রেণির সংক্ষিপ্ত তালিকা
curl "${baseUrl}/api/classes"

# ড্রপডাউন ২: নির্দিষ্ট শ্রেণির বইসমূহ
curl "${baseUrl}/api/subjects?classId=class-9"

# ড্রপডাউন ৩: বইয়ের অধ্যায়সমূহ
curl "${baseUrl}/api/chapters?subjectId=class-9-math"

# ড্রপডাউন ৪: অধ্যায়ের লেসন পয়েন্ট
curl "${baseUrl}/api/lessons?chapterId=c9-math-ch1"`,

    python: `import requests

BASE_URL = "${baseUrl}"

# ১. সবগুলো ক্লাস একসাথে ফেচ (Master All-Classes Endpoint)
def get_all_curriculum():
    res = requests.get(f"{BASE_URL}/api/curriculum")
    data = res.json()
    print(f"Total classes: {data['stats']['totalClasses']}")
    return data['data']

# ২. আলাদা আলাদা ক্লাসের ডেটা ফেচ (Individual Class Endpoint)
def get_class_data(class_id_or_number, group=None):
    # উদাহরণ: get_class_data(9) অথবা get_class_data(9, group='science')
    params = {'group': group} if group else {}
    res = requests.get(f"{BASE_URL}/api/classes/{class_id_or_number}", params=params)
    return res.json()

# ৩. ক্যাসকেডিং ড্রপডাউন ফেচ
def get_cascade_step(class_id=None, subject_id=None, chapter_id=None):
    params = {}
    if class_id: params['classId'] = class_id
    if subject_id: params['subjectId'] = subject_id
    if chapter_id: params['chapterId'] = chapter_id
    res = requests.get(f"{BASE_URL}/api/cascade", params=params)
    return res.json()

if __name__ == "__main__":
    # টেস্ট ১: সকল ক্লাস একসাথে
    all_data = get_all_curriculum()
    
    # টেস্ট ২: ৯ম শ্রেণি আলাদা
    class9 = get_class_data(9)
    print(f"Class 9 Name: {class9['nameBangla']}, Total Subjects: {class9['stats']['totalSubjects']}")
`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>ইন্টিগ্রেশন কোড স্নিপেট</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          অন্য যেকোনো প্রজেক্টে ড্রপডাউন মেনু যুক্ত করার রেডি কোড
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          নিচের কোডটি কপি করে আপনার যেকোনো ওয়েব পেজ, রিয়্যাক্ট অ্যাপ বা স্ক্রিপ্টে বসিয়ে দিন। ৪-স্তরের ড্রপডাউন স্বয়ংক্রিয়ভাবে কাজ করবে।
        </p>
      </div>

      {/* Code Box */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        {/* Tab Header */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveLang('html')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activeLang === 'html'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              HTML + JS (স্ট্যান্ডঅ্যালোন)
            </button>
            <button
              onClick={() => setActiveLang('react')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activeLang === 'react'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              React Component
            </button>
            <button
              onClick={() => setActiveLang('js')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activeLang === 'js'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              JavaScript Fetch
            </button>
            <button
              onClick={() => setActiveLang('curl')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activeLang === 'curl'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              cURL
            </button>
            <button
              onClick={() => setActiveLang('python')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                activeLang === 'python'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Python
            </button>
          </div>

          <button
            onClick={copyCode}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'কোড কপি হয়েছে!' : 'সম্পূর্ণ কোড কপি'}</span>
          </button>
        </div>

        {/* Code View */}
        <div className="p-4 sm:p-6 bg-slate-950 font-mono text-xs text-slate-200 overflow-x-auto max-h-[500px]">
          <pre className="leading-relaxed whitespace-pre font-mono">
            {snippets[activeLang]}
          </pre>
        </div>
      </div>
    </div>
  );
};
