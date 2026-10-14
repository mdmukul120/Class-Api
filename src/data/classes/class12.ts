import { ClassGrade } from '../types';

export const CLASS_12_DATA: ClassGrade = {
  id: "class-12",
  numeric: 12,
  name: "Class 12",
  nameBangla: "দ্বাদশ শ্রেণি (HSC ২য় বর্ষ)",
  stage: "Higher Secondary (HSC)",
  stageBangla: "উচ্চ মাধ্যমিক",
  description: "এইচএসসি ২য় বর্ষ ও ফাইনাল বোর্ড পরীক্ষার সকল বই, অধ্যায় এবং লেসন পয়েন্ট",
  subjects: [
    {
      id: "c12-ict-programming",
      code: "ICT-12",
      name: "ICT (Programming & Database)",
      nameBangla: "তথ্য ও যোগাযোগ প্রযুক্তি (প্রোগ্রামিং ও ডেটাবেজ)",
      group: "General / Compulsory",
      coverColor: "from-blue-700 to-indigo-950",
      chapters: [
        {
          id: "c12-ict-ch5",
          chapterNumber: 5,
          title: "C Programming Language",
          titleBangla: "৫ম অধ্যায়: প্রোগ্রামিং ভাষা (C Programming)",
          lessons: [
            {
              id: "c12-ict-ch5-l1",
              point: "৫.১",
              title: "Algorithms, Flowcharts & Identifiers",
              titleBangla: "৫.১ অ্যালগরিদম, ফ্লোচার্ট ও সি ভাষার গঠন",
              summary: "হেডার ফাইল (#include), মেইন ফাংশন ও ডেটা টাইপ (int, float, char)।",
              keywords: ["সি প্রোগ্রামিং", "অ্যালগরিদম", "ফ্লোচার্ট", "ভেরিয়েবল"]
            },
            {
              id: "c12-ict-ch5-l2",
              point: "৫.২",
              title: "Control Statements: if-else and switch-case",
              titleBangla: "৫.২ শর্তযুক্ত বাক্য (if-else, nested if ও switch)",
              summary: "লিপ ইয়ার, ৩ সংখ্যার মধ্যে বড় সংখ্যা নির্ণয়ের প্রোগ্রাম।",
              keywords: ["if-else", "কন্ডিশনাল", "switch"]
            },
            {
              id: "c12-ict-ch5-l3",
              point: "৫.৩",
              title: "Loops: for, while, do-while & Arrays",
              titleBangla: "৫.৩ লুপ (for, while) এবং ১ মাত্রিক অ্যারে (Array)",
              summary: "ধারা যোগফল, মৌলিক সংখ্যা যাচাই ও ফ্যাক্টোরিয়াল নির্ণয়।",
              keywords: ["লুপ", "for loop", "অ্যারে", "ফ্যাক্টোরিয়াল"]
            }
          ]
        },
        {
          id: "c12-ict-ch6",
          chapterNumber: 6,
          title: "Database Management System (DBMS)",
          titleBangla: "৬ষ্ঠ অধ্যায়: ডেটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS)",
          lessons: [
            {
              id: "c12-ict-ch6-l1",
              point: "৬.১",
              title: "Relational Database, Keys (Primary, Foreign)",
              titleBangla: "৬.১ ফিল্ড, রেকর্ড ও প্রাইমারি/ফরেন কি",
              summary: "টেবিল সম্পর্ক (1:1, 1:M, M:N) এবং ডেটার অখণ্ডতা।",
              keywords: ["ডেটাবেজ", "প্রাইমারি কি", "ফরেন কি", "রিলেশন"]
            },
            {
              id: "c12-ict-ch6-l2",
              point: "৬.২",
              title: "SQL Queries (SELECT, INSERT, UPDATE, DELETE)",
              titleBangla: "৬.২ এসকিউএল (SQL) স্টেটমেন্ট ও কুয়েরি কমান্ড",
              summary: "WHERE, ORDER BY, GROUP BY শর্তে ডেটা ফিল্টারিং।",
              keywords: ["SQL", "SELECT", "কুয়েরি", "ডেটাবেজ"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-phy2",
      code: "PHY2-12",
      name: "Physics 2nd Paper",
      nameBangla: "পদার্থবিজ্ঞান ২য় পত্র",
      group: "Science",
      coverColor: "from-sky-700 to-indigo-950",
      chapters: [
        {
          id: "c12-phy2-ch1",
          chapterNumber: 1,
          title: "Thermodynamics",
          titleBangla: "১ম অধ্যায়: তাপগতিবিদ্যা",
          lessons: [
            {
              id: "c12-phy2-ch1-l1",
              point: "১.১",
              title: "First Law of Thermodynamics & Specific Heats",
              titleBangla: "১.১ তাপগতিবিদ্যার ১ম সূত্র, সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়া",
              summary: "dQ = dU + dW এবং মোলার আপেক্ষিক তাপদ্বয়ের সম্পর্ক Cp - Cv = R।",
              keywords: ["তাপগতিবিদ্যা", "সমোষ্ণ", "রুদ্ধতাপীয়", "আপেক্ষিক তাপ"]
            },
            {
              id: "c12-phy2-ch1-l2",
              point: "১.২",
              title: "Carnot Cycle, Heat Engine Efficiency & Entropy",
              titleBangla: "১.২ কার্নো ইঞ্জিন, ইঞ্জিনের দক্ষতা (η) ও এনট্রপি (S)",
              summary: "η = 1 - T2/T1 এবং মহাবিশ্বে অপ্রত্যাবর্তী প্রক্রিয়ায় এনট্রপি বৃদ্ধি (dS = dQ/T)।",
              keywords: ["কার্নো ইঞ্জিন", "দক্ষতা", "এনট্রপি", "তাপগতিবিদ্যা"]
            }
          ]
        },
        {
          id: "c12-phy2-ch2",
          chapterNumber: 2,
          title: "Static Electricity",
          titleBangla: "২য় অধ্যায়: স্থির তড়িৎ",
          lessons: [
            {
              id: "c12-phy2-ch2-l1",
              point: "২.১",
              title: "Coulomb's Law, Electric Intensity and Potential",
              titleBangla: "২.১ কুলম্বের সূত্র, তড়িৎ প্রাবল্য (E) ও তড়িৎ বিভব (V)",
              summary: "বিন্দু আধানের দরুন প্রাবল্য E = 1/(4πε)·q/r² ও গাউসের সূত্র।",
              keywords: ["কুলম্বের সূত্র", "তড়িৎ প্রাবল্য", "বিভব"]
            },
            {
              id: "c12-phy2-ch2-l2",
              point: "২.২",
              title: "Capacitance and Parallel Plate Capacitors",
              titleBangla: "২.২ ধারকত্ব, তুল্য ধারকত্ব ও সঞ্চিত শক্তি (U = ½CV²)",
              summary: "সমান্তরাল পাত ধারকের ধারকত্ব এবং পরাবৈদ্যুতিক মাধ্যমের প্রভাব।",
              keywords: ["ধারক", "ধারকত্ব", "সঞ্চিত শক্তি"]
            }
          ]
        },
        {
          id: "c12-phy2-ch10",
          chapterNumber: 10,
          title: "Semiconductors and Electronics",
          titleBangla: "১০ম অধ্যায়: সেমিকন্ডাক্টর ও ইলেকট্রনিক্স",
          lessons: [
            {
              id: "c12-phy2-ch10-l1",
              point: "১০.১",
              title: "p-n Junction Diode and Rectification",
              titleBangla: "১০.১ p-n জংশন ডায়োড ও পূর্ণ-তরঙ্গ একমুখীকরণ (Rectification)",
              summary: "সম্মুখ ও বিমুখী বায়াস, নিঃশেষিত স্তর (Depletion Layer) ও ব্রিজ রেকটিফায়ার।",
              keywords: ["ডায়োড", "রেকটিফায়ার", "সেমিকন্ডাক্টর"]
            },
            {
              id: "c12-phy2-ch10-l2",
              point: "১০.২",
              title: "Transistors and Amplification",
              titleBangla: "১০.২ ট্রানজিস্টর, অ্যাম্প্লিফায়ার ও লজিক গেট ইন্টিগ্রেশন",
              summary: "Common Emitter সংযোগে কারেন্ট গেইন β = ΔIc / ΔIb নির্ণয়।",
              keywords: ["ট্রানজিস্টর", "অ্যাম্প্লিফায়ার", "কারেন্ট গেইন"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-chem2",
      code: "CHEM2-12",
      name: "Chemistry 2nd Paper",
      nameBangla: "রসায়ন ২য় পত্র",
      group: "Science",
      coverColor: "from-emerald-700 to-teal-950",
      chapters: [
        {
          id: "c12-chem2-ch1",
          chapterNumber: 1,
          title: "Environmental Chemistry",
          titleBangla: "১ম অধ্যায়: পরিবেশ রসায়ন",
          lessons: [
            {
              id: "c12-chem2-ch1-l1",
              point: "১.১",
              title: "Gas Laws and Ideal Gas Equation",
              titleBangla: "১.১ গ্যাসের সূত্রসমূহ (বয়েল, চার্লস, ডাল্টন) ও PV = nRT",
              summary: "বাস্তব গ্যাসের ভ্যান ডার ওয়ালস সমীকরণ এবং বায়ুমণ্ডলের গ্যাসীয় স্তর।",
              keywords: ["গ্যাসের সূত্র", "বয়েল", "চার্লস", "ভ্যান ডার ওয়ালস"]
            }
          ]
        },
        {
          id: "c12-chem2-ch2",
          chapterNumber: 2,
          title: "Organic Chemistry",
          titleBangla: "২য় অধ্যায়: জৈব রসায়ন",
          lessons: [
            {
              id: "c12-chem2-ch2-l1",
              point: "২.১",
              title: "IUPAC Nomenclature and Isomerism",
              titleBangla: "২.১ জৈব যৌগের ইউপ্যাক (IUPAC) নামকরণ ও সমাণুতা",
              summary: "গাঠনিক সমাণুতা এবং স্টেরিও সমাণুতা (জ্যামিতিক ও আলোক সমাণুতা)।",
              keywords: ["জৈব রসায়ন", "ইউপ্যাক", "সমাণুতা", "স্টেরিও সমাণুতা"]
            },
            {
              id: "c12-chem2-ch2-l2",
              point: "২.২",
              title: "Benzene Reactions & Electrophilic Substitution",
              titleBangla: "২.২ বেনজিনের ইলেকট্রোফিলিক প্রতিস্থাপন ও SN1/SN2 মেকানিজম",
              summary: "নাইট্রেশন, হ্যালোজেনেশন ও ফ্রিডেল-ক্রাফটস অ্যালকাইলেশন বিক্রিয়া।",
              keywords: ["বেনজিন", "ইলেকট্রোফিলিক", "SN1", "SN2", "ফ্রিডেল ক্রাফটস"]
            }
          ]
        },
        {
          id: "c12-chem2-ch3",
          chapterNumber: 3,
          title: "Quantitative Chemistry",
          titleBangla: "৩য় অধ্যায়: পরিমাণগত রসায়ন",
          lessons: [
            {
              id: "c12-chem2-ch3-l1",
              point: "৩.১",
              title: "Redox Reactions and Acid-Base Titration",
              titleBangla: "৩.১ জারণ-বিজারণ সমতাকরণ ও অ্যাসিড-ক্ষার টাইট্রেশন",
              summary: "V1S1 = V2S2 সূত্র ও আয়োডিমিতি/আয়োডোমিতি বিশ্লেষণ।",
              keywords: ["টাইট্রেশন", "জারণ বিজারণ", "আয়োডিমিতি", "মোলারিটি"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-bio2",
      code: "BIO2-12",
      name: "Biology 2nd Paper (Zoology)",
      nameBangla: "জীববিজ্ঞান ২য় পত্র (প্রাণিবিজ্ঞান)",
      group: "Science",
      coverColor: "from-lime-700 to-green-950",
      chapters: [
        {
          id: "c12-bio2-ch1",
          chapterNumber: 1,
          title: "Animal Diversity and Classification",
          titleBangla: "১ম অধ্যায়: প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস",
          lessons: [
            {
              id: "c12-bio2-ch1-l1",
              point: "১.১",
              title: "Major Phyla Characteristics (Porifera to Chordata)",
              titleBangla: "১.১ প্রধান ৯টি পর্বের বৈশিষ্ট্য ও শ্রেণিবিন্যাস ভিত্তি",
              summary: "নন-কর্ডাটা ও কর্ডাটার অমিল, সিলম্ব ও নটোকর্ড।",
              keywords: ["শ্রেণিবিন্যাস", "কর্ডাটা", "সিলোম", "প্রাণী বৈচিত্র্য"]
            }
          ]
        },
        {
          id: "c12-bio2-ch3",
          chapterNumber: 3,
          title: "Human Physiology: Digestion & Absorption",
          titleBangla: "৩য় অধ্যায়: মানব শারীরতত্ত্ব: পরিপাক ও শোষণ",
          lessons: [
            {
              id: "c12-bio2-ch3-l1",
              point: "৩.১",
              title: "Enzymatic Digestion in Stomach & Intestine",
              titleBangla: "৩.১ পাকস্থলী ও অন্ত্রে খাদ্যের রাসায়নিক পরিপাক",
              summary: "শর্করা, আমিষ ও চর্বি পরিপাকে এনজাইমের ভূমিকা ও যকৃতের কাজ।",
              keywords: ["পরিপাক", "এনজাইম", "পাকস্থলী", "যকৃত"]
            }
          ]
        },
        {
          id: "c12-bio2-ch11",
          chapterNumber: 11,
          title: "Genetics and Evolution",
          titleBangla: "১১শ অধ্যায়: জিনতত্ত্ব ও বিবর্তন",
          lessons: [
            {
              id: "c12-bio2-ch11-l1",
              point: "১১.১",
              title: "Mendel's Laws and Deviations",
              titleBangla: "১১.১ মেন্ডেলের সূত্রাবলি ও ব্যতিক্রম (৯:৭, ১৩:৩ অনুপাত)",
              summary: "মনোহাইব্রিড ও ডাইহাইব্রিড ক্রসের ফলাফল ও সেক্স-লিংকড ডিসঅর্ডার (হিমোফিলিয়া)।",
              keywords: ["মেন্ডেলের সূত্র", "জিনতত্ত্ব", "হিমোফিলিয়া", "ক্রসিং ওভার"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-hmath2",
      code: "HMATH2-12",
      name: "Higher Mathematics 2nd Paper",
      nameBangla: "উচ্চতর গণিত ২য় পত্র",
      group: "Science",
      coverColor: "from-fuchsia-700 to-purple-950",
      chapters: [
        {
          id: "c12-hm2-ch3",
          chapterNumber: 3,
          title: "Complex Numbers",
          titleBangla: "৩য় অধ্যায়: জটিল সংখ্যা",
          lessons: [
            {
              id: "c12-hm2-ch3-l1",
              point: "৩.১",
              title: "Modulus, Argument and Polar Form",
              titleBangla: "৩.১ মডুলাস, আর্গুমেন্ট, পোলার রূপ ও এককের ঘনমূল",
              summary: "z = x + iy এর পরমমান r = √(x²+y²) এবং ডিময়ভারের উপপাদ্য।",
              keywords: ["জটিল সংখ্যা", "মডুলাস", "আর্গুমেন্ট", "পোলার রূপ"]
            }
          ]
        },
        {
          id: "c12-hm2-ch4",
          chapterNumber: 4,
          title: "Polynomials & Equations",
          titleBangla: "৪র্থ অধ্যায়: বহুপদী ও বহুপদী সমীকরণ",
          lessons: [
            {
              id: "c12-hm2-ch4-l1",
              point: "৪.১",
              title: "Roots of Quadratic & Cubic Equations",
              titleBangla: "৪.১ মূল ও সহগের সম্পর্ক এবং নিশ্চায়ক (Discriminant)",
              summary: "ax² + bx + c = 0 এর মূলদ্বয়ের প্রকৃতি ও ত্রিঘাত সমীকরণের মূল।",
              keywords: ["বহুপদী", "নিশ্চায়ক", "মূল ও সহগ"]
            }
          ]
        },
        {
          id: "c12-hm2-ch6",
          chapterNumber: 6,
          title: "Conics",
          titleBangla: "৬ষ্ঠ অধ্যায়: কণিক (Conics)",
          lessons: [
            {
              id: "c12-hm2-ch6-l1",
              point: "৬.১",
              title: "Parabola, Ellipse and Hyperbola",
              titleBangla: "৬.১ পরাবৃত্ত, উপবৃত্ত ও অধিবৃত্তের প্রমাণ ও সমীকরণ",
              summary: "উৎকেন্দ্রিকতা (e = 1, e < 1, e > 1) ও শীর্ষবিন্দু, উপকেন্দ্র নির্ণয়।",
              keywords: ["পরাবৃত্ত", "উপবৃত্ত", "অধিবৃত্ত", "কণিক", "উৎকেন্দ্রিকতা"]
            }
          ]
        },
        {
          id: "c12-hm2-ch7",
          chapterNumber: 7,
          title: "Inverse Trigonometric Functions",
          titleBangla: "৭ম অধ্যায়: বিপরীত ত্রিকোণমিতিক ফাংশন ও সমীকরণ",
          lessons: [
            {
              id: "c12-hm2-ch7-l1",
              point: "৭.১",
              title: "Inverse Relations & General Solution",
              titleBangla: "৭.১ tan⁻¹x + tan⁻¹y সূত্র ও সাধারণ সমাধান (General Solution)",
              summary: "sin θ = 0 হলে θ = nπ এবং ত্রিকোণমিতিক সমীকরণ সমাধান।",
              keywords: ["বিপরীত ত্রিকোণমিতি", "সাধারণ সমাধান", "ইনভার্স"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-acc2",
      code: "ACC2-12",
      name: "Accounting 2nd Paper",
      nameBangla: "হিসাববিজ্ঞান ২য় পত্র",
      group: "Business Studies",
      coverColor: "from-purple-700 to-indigo-950",
      chapters: [
        {
          id: "c12-acc2-ch2",
          chapterNumber: 2,
          title: "Partnership Accounts",
          titleBangla: "২য় অধ্যায়: অংশীদারি ব্যবসায়ীদের হিসাব",
          lessons: [
            {
              id: "c12-acc2-ch2-l1",
              point: "২.১",
              title: "Profit-Loss Distribution & Capital Accounts",
              titleBangla: "২.১ লাভ-লোকসান বণ্টন হিসাব ও অংশীদারদের মূলধন হিসাব",
              summary: "স্থির ও পরিবর্তনশীল মূলধন পদ্ধতিতে মূলধনের সুদ ও উত্তোলন হিসাব।",
              keywords: ["অংশীদারি ব্যবসা", "লাভ লোকসান বণ্টন", "মূলধন হিসাব"]
            }
          ]
        },
        {
          id: "c12-acc2-ch4",
          chapterNumber: 4,
          title: "Joint Stock Company Capital",
          titleBangla: "৪র্থ অধ্যায়: যৌথ মূলধনী কোম্পানির মূলধন (শেয়ার ইস্যু)",
          lessons: [
            {
              id: "c12-acc2-ch4-l1",
              point: "৪.১",
              title: "Share Issue at Par, Premium and Discount",
              titleBangla: "৪.১ সমহার, অধিহার ও অবহারে শেয়ার বিলি সংক্রান্ত জাবেদা",
              summary: "ব্যাংক হিসাব, শেয়ার আবেদন ও শেয়ার অধিহার হিসাব সংরক্ষণ।",
              keywords: ["শেয়ার ইস্যু", "শেয়ার অধিহার", "যৌথ মূলধনী কোম্পানি"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-econ2",
      code: "ECON2-12",
      name: "Economics 2nd Paper",
      nameBangla: "অর্থনীতি ২য় পত্র",
      group: "Humanities / Business",
      coverColor: "from-amber-700 to-orange-950",
      chapters: [
        {
          id: "c12-econ2-ch2",
          chapterNumber: 2,
          title: "Agriculture of Bangladesh",
          titleBangla: "২য় অধ্যায়: বাংলাদেশের কৃষি খাত",
          lessons: [
            {
              id: "c12-econ2-ch2-l1",
              point: "২.১",
              title: "Crop Diversification and Agro-Credit",
              titleBangla: "২.১ শস্য বহুমুখীকরণ, কৃষিঋণ ও খাদ্য নিরাপত্তা",
              summary: "জিডিপিতে কৃষির অবদান এবং কৃষি বিপণন ব্যবস্থার আধুনিকায়ন।",
              keywords: ["কৃষি", "খাদ্য নিরাপত্তা", "জিডিপি", "কৃষিঋণ"]
            }
          ]
        }
      ]
    }
  ]
};
