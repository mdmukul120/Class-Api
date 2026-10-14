import { ClassGrade } from '../types';

export const CLASS_10_DATA: ClassGrade = {
  id: "class-10",
  numeric: 10,
  name: "Class 10",
  nameBangla: "১০ম শ্রেণি (SSC)",
  stage: "Secondary (SSC)",
  stageBangla: "মাধ্যমিক (এসএসসি)",
  description: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত দশম শ্রেণির বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক বিভাগের সকল বই ও অধ্যায়",
  subjects: [
    {
      id: "c10-gen-math",
      code: "GMATH-10",
      name: "General Mathematics",
      nameBangla: "সাধারণ গণিত",
      group: "General / Compulsory",
      coverColor: "from-amber-600 to-orange-850",
      chapters: [
        {
          id: "c10-gm-ch1",
          chapterNumber: 1,
          title: "Real Numbers",
          titleBangla: "১ম অধ্যায়: বাস্তব সংখ্যা",
          lessons: [
            {
              id: "c10-gm-ch1-l1",
              point: "১.১",
              title: "Proof of Irrational Numbers (√2, √3, √5)",
              titleBangla: "১.১ অমূলদ সংখ্যার প্রমাণ ও আবৃত্ত দশমিক",
              summary: "√2 একটি অমূলদ সংখ্যা এর গাণিতিক প্রমাণ ও রূপান্তর।",
              keywords: ["বাস্তব সংখ্যা", "অমূলদ সংখ্যা", "আবৃত্ত দশমিক"]
            }
          ]
        },
        {
          id: "c10-gm-ch2",
          chapterNumber: 2,
          title: "Sets and Functions",
          titleBangla: "২য় অধ্যায়: সেট ও ফাংশন",
          lessons: [
            {
              id: "c10-gm-ch2-l1",
              point: "২.১",
              title: "Domain, Range and Relations",
              titleBangla: "২.১ অন্বয়, ডোমেন ও রেঞ্জ নির্ণয়",
              summary: "অন্বয় থেকে ফাংশন চিহ্নিতকরণ ও ফাংশনের মান f(x) নির্ণয়।",
              keywords: ["ফাংশন", "ডোমেন", "রেঞ্জ", "অন্বয়"]
            }
          ]
        },
        {
          id: "c10-gm-ch3",
          chapterNumber: 3,
          title: "Algebraic Expressions",
          titleBangla: "৩য় অধ্যায়: বীজগাণিতিক রাশি",
          lessons: [
            {
              id: "c10-gm-ch3-l1",
              point: "৩.১",
              title: "Square and Cube Identities",
              titleBangla: "৩.১ বর্গ ও ঘন সংবলিত সূত্রাবলি ও মান নির্ণয়",
              summary: "a³ + b³ + c³ - 3abc এবং অন্যান্য রাশির উৎপাদকে বিশ্লেষণ।",
              keywords: ["বীজগণিত", "মান নির্ণয়", "উৎপাদক"]
            }
          ]
        },
        {
          id: "c10-gm-ch9",
          chapterNumber: 9,
          title: "Trigonometric Ratios",
          titleBangla: "৯ম অধ্যায়: ত্রিকোণমিতিক অনুপাত",
          lessons: [
            {
              id: "c10-gm-ch9-l1",
              point: "৯.১",
              title: "Trigonometric Identities & Standard Angles",
              titleBangla: "৯.১ sin²θ + cos²θ = 1 ও কোণের মানসমূহ",
              summary: "0°, 30°, 45°, 60°, 90° কোণের ত্রিকোণমিতিক অনুপাতের মান।",
              keywords: ["ত্রিকোণমিতি", "সাইন", "কস", "অভেদ"]
            }
          ]
        },
        {
          id: "c10-gm-ch16",
          chapterNumber: 16,
          title: "Mensuration",
          titleBangla: "১৬শ অধ্যায়: পরিমিতি",
          lessons: [
            {
              id: "c10-gm-ch16-l1",
              point: "১৬.১",
              title: "Area of Triangles, Circles & Cylinders",
              titleBangla: "১৬.১ সুষম বহুভুজ, বেলন ও গোলকের আয়তন",
              summary: "ঘনবস্তুর সমগ্রতলের ক্ষেত্রফল ও আয়তন নির্ণয়ের সূত্র।",
              keywords: ["পরিমিতি", "আয়তন", "বেলন", "গোলক"]
            }
          ]
        },
        {
          id: "c10-gm-ch17",
          chapterNumber: 17,
          title: "Statistics",
          titleBangla: "১৭শ অধ্যায়: পরিসংখ্যান",
          lessons: [
            {
              id: "c10-gm-ch17-l1",
              point: "১৭.১",
              title: "Mean, Median, Mode & Ogive Curve",
              titleBangla: "১৭.১ সংক্ষিপ্ত পদ্ধতিতে গড়, মধ্যক, প্রচুরক ও ওজাইভ রেখা",
              summary: "গণসংখ্যা সারণি থেকে কেন্দ্রীয় প্রবণতা পরিমাপ ও লেখচিত্র।",
              keywords: ["পরিসংখ্যান", "গড়", "মধ্যক", "প্রচুরক", "ওজাইভ"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-higher-math",
      code: "HMATH-10",
      name: "Higher Mathematics",
      nameBangla: "উচ্চতর গণিত",
      group: "Science",
      coverColor: "from-purple-600 to-indigo-900",
      chapters: [
        {
          id: "c10-hm-ch1",
          chapterNumber: 1,
          title: "Sets and Functions",
          titleBangla: "১ম অধ্যায়: সেট ও ফাংশন (উচ্চতর)",
          lessons: [
            {
              id: "c10-hm-ch1-l1",
              point: "১.১",
              title: "One-to-One and Onto Functions",
              titleBangla: "১.১ এক-এক ফাংশন, সার্বিক ফাংশন ও বিপরীত ফাংশন",
              summary: "f(x) এর এক-এক প্রমাণ এবং f⁻¹(x) বিপরীত ফাংশন নির্ণয়।",
              keywords: ["এক-এক ফাংশন", "সার্বিক ফাংশন", "বিপরীত ফাংশন"]
            }
          ]
        },
        {
          id: "c10-hm-ch3",
          chapterNumber: 3,
          title: "Geometry",
          titleBangla: "৩য় অধ্যায়: জ্যামিতি (আপোলোনিয়াস ও টলেমি)",
          lessons: [
            {
              id: "c10-hm-ch3-l1",
              point: "৩.১",
              title: "Apollonius Theorem & Ptolemy's Theorem",
              titleBangla: "৩.১ পিথাগোরাসের বিস্তৃতি ও আপোলোনিয়াসের উপপাদ্য",
              summary: "ত্রিভুজের মধ্যমা ও বাহুত্রয়ের বর্গের সম্পর্ক প্রমাণ।",
              keywords: ["আপোলোনিয়াস", "পিথাগোরাস", "মধ্যমা", "টলেমি"]
            }
          ]
        },
        {
          id: "c10-hm-ch11",
          chapterNumber: 11,
          title: "Coordinate Geometry",
          titleBangla: "১১শ অধ্যায়: স্থানাঙ্ক জ্যামিতি",
          lessons: [
            {
              id: "c10-hm-ch11-l1",
              point: "১১.১",
              title: "Distance, Slope & Straight Line Equations",
              titleBangla: "১১.১ বিন্দুর দূরত্ব, ঢাল (Slope) ও সরলরেখার সমীকরণ",
              summary: "m = (y2-y1)/(x2-x1) এবং y = mx + c সমীকরণের বিশ্লেষণ।",
              keywords: ["স্থানাঙ্ক জ্যামিতি", "ঢাল", "সরলরেখা"]
            }
          ]
        },
        {
          id: "c10-hm-ch14",
          chapterNumber: 14,
          title: "Probability",
          titleBangla: "১৪শ অধ্যায়: সম্ভাবনা (Probability)",
          lessons: [
            {
              id: "c10-hm-ch14-l1",
              point: "১৪.১",
              title: "Probability Tree and Sample Space",
              titleBangla: "১৪.১ নমুনা ক্ষেত্র, প্রোবাবিলিটি ট্রি ও ঘটনা সম্ভাবনা",
              summary: "ছক্কা ও মুদ্রা নিক্ষেপের সম্ভাব্য ফলাফলের হিসাব।",
              keywords: ["সম্ভাবনা", "নমুনা ক্ষেত্র", "মুদ্রা", "ছক্কা"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-physics",
      code: "PHY-10",
      name: "Physics",
      nameBangla: "পদার্থবিজ্ঞান",
      group: "Science",
      coverColor: "from-blue-600 to-indigo-850",
      chapters: [
        {
          id: "c10-phy-ch2",
          chapterNumber: 2,
          title: "Motion",
          titleBangla: "২য় অধ্যায়: গতি",
          lessons: [
            {
              id: "c10-phy-ch2-l1",
              point: "২.১",
              title: "Equations of Motion",
              titleBangla: "২.১ গতির সমীকরণাবলি (v = u+at, s = ut+½at²)",
              summary: "সুষম ত্বরণে চলমান বস্তুর সরণ, বেগ ও সময়ের গাণিতিক সমাধান।",
              keywords: ["গতির সমীকরণ", "ত্বরণ", "বেগ", "সরণ"]
            }
          ]
        },
        {
          id: "c10-phy-ch4",
          chapterNumber: 4,
          title: "Work, Power and Energy",
          titleBangla: "৪র্থ অধ্যায়: কাজ, ক্ষমতা ও শক্তি",
          lessons: [
            {
              id: "c10-phy-ch4-l1",
              point: "৪.১",
              title: "Kinetic & Potential Energy, Conservation",
              titleBangla: "৪.১ গতিশক্তি, বিভব শক্তি ও কর্মদক্ষতা (η)",
              summary: "E_k = ½mv² এবং E_p = mgh এর রূপান্তর ও সংরক্ষণশীলতা নীতি।",
              keywords: ["গতিশক্তি", "বিভব শক্তি", "কর্মদক্ষতা"]
            }
          ]
        },
        {
          id: "c10-phy-ch11",
          chapterNumber: 11,
          title: "Current Electricity",
          titleBangla: "১১শ অধ্যায়: চলবিদ্যুৎ",
          lessons: [
            {
              id: "c10-phy-ch11-l1",
              point: "১১.১",
              title: "Ohm's Law, Equivalent Resistance",
              titleBangla: "১১.১ ওহমের সূত্র ও শ্রেণি-সমান্তরাল তুল্যরোধ",
              summary: "বর্তনীতে তড়িৎ প্রবাহ (I = V/R) এবং বৈদ্যুতিক শক্তির হিসাব।",
              keywords: ["ওহমের সূত্র", "তুল্যরোধ", "বর্তনী", "তড়িৎ প্রবাহ"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-chemistry",
      code: "CHEM-10",
      name: "Chemistry",
      nameBangla: "রসায়ন",
      group: "Science",
      coverColor: "from-teal-600 to-emerald-900",
      chapters: [
        {
          id: "c10-chem-ch4",
          chapterNumber: 4,
          title: "Periodic Table",
          titleBangla: "৪র্থ অধ্যায়: পর্যায় সারণি",
          lessons: [
            {
              id: "c10-chem-ch4-l1",
              point: "৪.১",
              title: "Electronic Configuration and Position",
              titleBangla: "৪.১ পর্যায় সারণিতে মৌলের অবস্থান নির্ণয়",
              summary: "পর্যায় ও গ্রুপ এবং পর্যায়বৃত্ত ধর্মের পরিবর্তন (আয়নীকরণ শক্তি)।",
              keywords: ["পর্যায় সারণি", "গ্রুপ", "পর্যায়বৃত্ত ধর্ম"]
            }
          ]
        },
        {
          id: "c10-chem-ch5",
          chapterNumber: 5,
          title: "Chemical Bonding",
          titleBangla: "৫ম অধ্যায়: রাসায়নিক বন্ধন",
          lessons: [
            {
              id: "c10-chem-ch5-l1",
              point: "৫.১",
              title: "Ionic, Covalent & Metallic Bonds",
              titleBangla: "৫.১ আয়নিক ও সমযোজী বন্ধন গঠন ও বৈশিষ্ট্য",
              summary: "ইলেকট্রন আদান-প্রদান ও শেয়ারিংয়ের মাধ্যমে অণু গঠন।",
              keywords: ["আয়নিক বন্ধন", "সমযোজী বন্ধন", "রাসায়নিক বন্ধন"]
            }
          ]
        },
        {
          id: "c10-chem-ch6",
          chapterNumber: 6,
          title: "Concept of Mole & Calculations",
          titleBangla: "৬ষ্ঠ অধ্যায়: মোলের ধারণা ও রাসায়নিক গণনা",
          lessons: [
            {
              id: "c10-chem-ch6-l1",
              point: "৬.১",
              title: "Molar Mass, Molarity & Limiting Reactant",
              titleBangla: "৬.১ মোলার ভর, দ্রবণের মোলারিটি ও লিমিটিং বিক্রিয়ক",
              summary: "n = W/M সূত্র ও বিক্রিয়ায় নির্দিষ্ট উৎপাদের প্রত্যাশিত পরিমাণ।",
              keywords: ["মোল", "মোলারিটি", "লিমিটিং বিক্রিয়ক"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-biology",
      code: "BIO-10",
      name: "Biology",
      nameBangla: "জীববিজ্ঞান",
      group: "Science",
      coverColor: "from-green-600 to-lime-900",
      chapters: [
        {
          id: "c10-bio-ch2",
          chapterNumber: 2,
          title: "Living Cells and Tissues",
          titleBangla: "২য় অধ্যায়: জীবকোষ ও টিস্যু",
          lessons: [
            {
              id: "c10-bio-ch2-l1",
              point: "২.১",
              title: "Organelles (Mitochondria, Plastids)",
              titleBangla: "২.১ কোষ অঙ্গাণু ও উদ্ভিদ-প্রাণী টিস্যু",
              summary: "মাইটোকন্ড্রিয়া (শক্তির ঘর), প্লাস্টিড ও জাইলেম-ফ্লোয়েম টিস্যু।",
              keywords: ["মাইটোকন্ড্রিয়া", "প্লাস্টিড", "টিস্যু", "কোষ"]
            }
          ]
        },
        {
          id: "c10-bio-ch4",
          chapterNumber: 4,
          title: "Bioenergetics",
          titleBangla: "৪র্থ অধ্যায়: জীবনীশক্তি (Bioenergetics)",
          lessons: [
            {
              id: "c10-bio-ch4-l1",
              point: "৪.১",
              title: "Photosynthesis and Respiration",
              titleBangla: "৪.১ সালোকসংশ্লেষণ (আলোক ও অন্ধকার পর্যায়) ও শ্বসন",
              summary: "এটিপি (ATP) তৈরি ও গ্লুকোজ জারণের বিক্রিয়া।",
              keywords: ["সালোকসংশ্লেষণ", "শ্বসন", "এটিপি", "ক্লোরোফিল"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-accounting",
      code: "ACC-10",
      name: "Accounting",
      nameBangla: "হিসাববিজ্ঞান",
      group: "Business Studies",
      coverColor: "from-purple-600 to-indigo-900",
      chapters: [
        {
          id: "c10-acc-ch2",
          chapterNumber: 2,
          title: "Transactions",
          titleBangla: "২য় অধ্যায়: লেনদেন ও হিসাব সমীকরণ",
          lessons: [
            {
              id: "c10-acc-ch2-l1",
              point: "২.১",
              title: "Accounting Equation: Assets = Liabilities + Equity",
              titleBangla: "২.১ হিসাব সমীকরণ (A = L + E) এ লেনদেনের প্রভাব",
              summary: "সম্পদ, দায় ও মালিকানাস্বত্বে প্রতিটি ঘটনার প্রভাব নির্ণয়।",
              keywords: ["লেনদেন", "হিসাব সমীকরণ", "সম্পদ", "দায়"]
            }
          ]
        },
        {
          id: "c10-acc-ch6",
          chapterNumber: 6,
          title: "Journal",
          titleBangla: "৬ষ্ঠ অধ্যায়: জাবেদা ও বিশেষ জাবেদা",
          lessons: [
            {
              id: "c10-acc-ch6-l1",
              point: "৬.১",
              title: "Debit and Credit Rules",
              titleBangla: "৬.১ ডেবিট-ক্রেডিট নির্ণয়ের সোনালী নিয়ম ও সাধারণ জাবেদা",
              summary: "ক্রয় জাবেদা, বিক্রয় জাবেদা ও নগদ প্রাপ্তি-প্রদান জাবেদা।",
              keywords: ["জাবেদা", "ডেবিট", "ক্রেডিট", "হিসাব"]
            }
          ]
        },
        {
          id: "c10-acc-ch10",
          chapterNumber: 10,
          title: "Financial Statements",
          titleBangla: "১০ম অধ্যায়: আর্থিক বিবরণী",
          lessons: [
            {
              id: "c10-acc-ch10-l1",
              point: "১০.১",
              title: "Income Statement and Balance Sheet",
              titleBangla: "১০.১ বিশদ আয় বিবরণী ও আর্থিক অবস্থার বিবরণী",
              summary: "মোট লাভ, পরিচালন মুনাফা ও নিট লাভ নিরূপণ।",
              keywords: ["আর্থিক বিবরণী", "আয় বিবরণী", "ব্যালেন্স শিট"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-business-ent",
      code: "ENT-10",
      name: "Business Entrepreneurship",
      nameBangla: "ব্যবসায় উদ্যোগ",
      group: "Business Studies",
      coverColor: "from-blue-700 to-cyan-900",
      chapters: [
        {
          id: "c10-ent-ch1",
          chapterNumber: 1,
          title: "Business Concept and Characteristics",
          titleBangla: "১ম অধ্যায়: ব্যবসায় পরিচিতি ও প্রকারভেদ",
          lessons: [
            {
              id: "c10-ent-ch1-l1",
              point: "১.১",
              title: "Industry, Commerce and Direct Services",
              titleBangla: "১.১ শিল্প, বাণিজ্য ও প্রত্যক্ষ সেবার বৈশিষ্ট্য",
              summary: "অর্থনৈতিক কর্মকাণ্ডের অংশ হিসেবে ব্যবসায় উদ্যোগের গুরুত্ব।",
              keywords: ["ব্যবসা", "শিল্প", "বাণিজ্য", "উদ্যোগ"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-finance-banking",
      code: "FIN-10",
      name: "Finance and Banking",
      nameBangla: "ফিন্যান্স ও ব্যাংকিং",
      group: "Business Studies",
      coverColor: "from-emerald-700 to-teal-950",
      chapters: [
        {
          id: "c10-fin-ch3",
          chapterNumber: 3,
          title: "Time Value of Money",
          titleBangla: "৩য় অধ্যায়: অর্থের সময়মূল্য",
          lessons: [
            {
              id: "c10-fin-ch3-l1",
              point: "৩.১",
              title: "Present Value and Future Value (FV = PV(1+i)^n)",
              titleBangla: "৩.১ বর্তমান মূল্য ও চক্রবৃদ্ধি সুদে ভবিষ্যৎ মূল্য",
              summary: "সুদের হার ও সময় বিবেচনায় অর্থের মূল্যের পরিবর্তন পরিমাপ।",
              keywords: ["অর্থের সময়মূল্য", "বর্তমান মূল্য", "ভবিষ্যৎ মূল্য"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-bangladesh-global",
      code: "BGS-10",
      name: "Bangladesh and Global Studies",
      nameBangla: "বাংলাদেশ ও বিশ্বপরিচয়",
      group: "General / Compulsory",
      coverColor: "from-red-600 to-rose-900",
      chapters: [
        {
          id: "c10-bgs-ch1",
          chapterNumber: 1,
          title: "Movements in East Bengal & Liberation War",
          titleBangla: "১ম অধ্যায়: পূর্ব বাংলার আন্দোলন ও জাতীয়তাবাদের উত্থান",
          lessons: [
            {
              id: "c10-bgs-ch1-l1",
              point: "১.১",
              title: "1952 Language Movement to 1971 Liberation War",
              titleBangla: "১.১ ভাষা আন্দোলন, ৬ দফা, ৬৯ এর গণঅভ্যুত্থান ও মুক্তিযুদ্ধ",
              summary: "বাঙালির স্বাধিকার আন্দোলন ও স্বাধীন বাংলাদেশের অভ্যুদয়।",
              keywords: ["ভাষা আন্দোলন", "৬ দফা", "মুক্তিযুদ্ধ", "গণঅভ্যুত্থান"]
            }
          ]
        }
      ]
    },
    {
      id: "c10-ict",
      code: "ICT-10",
      name: "Information & Communication Technology",
      nameBangla: "তথ্য ও যোগাযোগ প্রযুক্তি (ICT)",
      group: "General / Compulsory",
      coverColor: "from-cyan-600 to-blue-900",
      chapters: [
        {
          id: "c10-ict-ch2",
          chapterNumber: 2,
          title: "Computer and User Safety",
          titleBangla: "২য় অধ্যায়: কম্পিউটার ও ব্যবহারকারীর নিরাপত্তা",
          lessons: [
            {
              id: "c10-ict-ch2-l1",
              point: "২.১",
              title: "Software Installation, Maintenance and Malware",
              titleBangla: "২.১ সফটওয়্যার ইনস্টলেশন, ম্যালওয়্যার ও অ্যান্টিভাইরাস",
              summary: "কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার ভাইরাসের হাত থেকে সুরক্ষা।",
              keywords: ["অ্যান্টিভাইরাস", "ম্যালওয়্যার", "নিরাপত্তা"]
            }
          ]
        }
      ]
    }
  ]
};
