import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Download, ExternalLink, RefreshCw, Terminal } from 'lucide-react';

interface JsonViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  dataUrl: string;
}

export const JsonViewerModal: React.FC<JsonViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  dataUrl,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jsonText, setJsonText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !dataUrl) return;

    setLoading(true);
    setError(null);

    fetch(dataUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setJsonText(JSON.stringify(data, null, 2));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [isOpen, dataUrl]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center space-x-2.5">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-bold text-white text-base truncate max-w-md">{title}</h3>
              <p className="text-xs font-mono text-slate-400 truncate max-w-md">{dataUrl}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {!loading && !error && (
              <>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center space-x-1.5 transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'কপি হয়েছে' : 'JSON কপি'}</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-medium border border-slate-700 flex items-center space-x-1.5 transition"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>ডাউনলোড</span>
                </button>
              </>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-6 overflow-y-auto bg-slate-950/70 font-mono text-xs">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-3 text-slate-400">
              <RefreshCw className="w-6 h-6 animate-spin text-emerald-400" />
              <span>JSON ফেচ করা হচ্ছে...</span>
            </div>
          ) : error ? (
            <div className="p-4 rounded-xl bg-red-950/50 border border-red-800 text-red-200">
              <p className="font-semibold">ডাটা ফেচ করতে সমস্যা হয়েছে:</p>
              <p className="text-xs mt-1 text-red-300 font-mono">{error}</p>
            </div>
          ) : (
            <pre className="text-emerald-300/90 whitespace-pre leading-relaxed select-all">
              {jsonText}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};
