import React, { useState } from 'react';
import { 
  GitBranch, 
  ExternalLink, 
  Check, 
  Copy, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  FileCode,
  Rocket,
  CheckCircle2
} from 'lucide-react';

export const VercelDeployGuide: React.FC = () => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  const copySnippet = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedStep(id);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const gitPushCommand = `git init
git add .
git commit -m "feat: complete NCTB curriculum JSON API (Class 6-12)"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main`;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>১০০% রেডি ফর গিটহাব ও ভার্সেল</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GitHub এ পুশ ও Vercel এ ডিপ্লয় নির্দেশিকা
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            প্রজেক্টটিতে ইতিমধ্যে <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-xs">vercel.json</code>, <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-xs">api/index.ts</code> (Vercel Serverless Function) এবং স্ট্যাটিক বিল্ড জেনারেটর কনফিগার করা হয়েছে। নিচের ধাপগুলো অনুসরণ করে ১ মিনিটে গিটহাব ও ভার্সেলে লাইভ করুন।
          </p>
        </div>
      </div>

      {/* 3 Step Deployment Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
            ১
          </div>
          <h3 className="font-bold text-white text-base">GitHub এ রিপোজিটরি তৈরি</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            আপনার GitHub অ্যাকাউন্টে যান এবং একটি নতুন পাবলিক বা প্রাইভেট রিপোজিটরি খুলুন (যেমন: <code className="text-emerald-400">nctb-curriculum-api</code>)।
          </p>
          <div className="pt-2">
            <a
              href="https://github.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <span>GitHub-এ নতুন Repo খুলুন</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg">
            ২
          </div>
          <h3 className="font-bold text-white text-base">কোড গিটহাবে পুশ করুন</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            আপনার কম্পিউটারের টার্মিনালে প্রজেক্ট ফোল্ডারে ঢুকে নিচের কমান্ডগুলো পেস্ট করে কোড গিটহাবে আপলোড করুন।
          </p>
          <div className="text-xs text-slate-400 flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            <span>সকল ডেটাবেজ ও কোড স্বয়ংক্রিয়ভাবে পুশ হবে</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
            ৩
          </div>
          <h3 className="font-bold text-white text-base">Vercel এ Import করুন</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Vercel ড্যাশবোর্ডে গিয়ে "Add New" ➔ "Project" সিলেক্ট করুন এবং আপনার GitHub Repo ইমপোর্ট করুন। সাথে সাথে আপনার লাইভ প্রোডাকশন লিংক পেয়ে যাবেন!
          </p>
          <div className="pt-2">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              <span>Vercel Import পেজে যান</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Terminal Command Box */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="bg-slate-950 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-white">গিট টার্মিনাল কমান্ড (Git Push Commands)</span>
          </div>
          <button
            onClick={() => copySnippet(gitPushCommand, 'git')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition"
          >
            {copiedStep === 'git' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedStep === 'git' ? 'কপি হয়েছে!' : 'কমান্ড কপি করুন'}</span>
          </button>
        </div>

        <div className="p-5 bg-slate-950 font-mono text-xs text-slate-200 overflow-x-auto">
          <pre className="leading-loose select-all text-emerald-300">
            {gitPushCommand}
          </pre>
        </div>
      </div>

      {/* Pre-configured Architecture Checklist */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Vercel ডিপ্লয়মেন্টের জন্য যা যা প্রস্তুত করা হয়েছে:</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
          <div className="flex items-start space-x-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">vercel.json প্রস্তুত:</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">সব /api/* রিকোয়েস্ট Vercel Serverless ফাংশনে এবং অন্য সব পাথ SPA তে রিরাইট হবে।</p>
            </div>
          </div>

          <div className="flex items-start space-x-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">api/index.ts সার্ভারলেস হ্যান্ডলার:</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">Vercel এর সার্ভারলেস ইঞ্জিন সরাসরি আপনার সব /api এন্ডপয়েন্ট হ্যান্ডেল করবে।</p>
            </div>
          </div>

          <div className="flex items-start space-x-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">স্বয়ংক্রিয় স্ট্যাটিক JSON জেনারেটর:</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">npm run build করার সাথে সাথে সকল শ্রেণির .json ফাইল dist/data ফোল্ডারে বিল্ড হয়।</p>
            </div>
          </div>

          <div className="flex items-start space-x-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Universal CORS সচল:</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">যেকোনো এক্সটার্নাল ডোমেন বা অ্যাপ থেকে নিশ্চিন্তে ফেচ করা যাবে।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
