import { ClassGrade } from '../types';

export const CLASS_11_DATA: ClassGrade = {
  id: "class-11",
  numeric: 11,
  name: "Class 11",
  nameBangla: "একাদশ শ্রেণি (HSC ১ম বর্ষ)",
  stage: "Higher Secondary (HSC)",
  stageBangla: "উচ্চ মাধ্যমিক",
  description: "এইচএসসি ১ম বর্ষের বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক বিভাগের সকল বোর্ড বই ও অধ্যায়ভিত্তিক লেসন পয়েন্ট",
  subjects: [
    {
      id: "c11-ict",
      code: "ICT-11",
      name: "Information & Communication Technology",
      nameBangla: "তথ্য ও যোগাযোগ প্রযুক্তি (ICT)",
      group: "General / Compulsory",
      coverColor: "from-blue-600 to-cyan-850",
      chapters: [
        {
          id: "c11-ict-ch1",
          chapterNumber: 1,
          title: "ICT: Global and Bangladesh Perspective",
          titleBangla: "১ম অধ্যায়: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত",
          lessons: [
            {
              id: "c11-ict-ch1-l1",
              point: "১.১",
              title: "Global Village and Virtual Reality",
              titleBangla: "১.১ বিশ্বগ্রামের ধারণা ও ভার্চুয়াল রিয়েলিটি (VR)",
              summary: "যোগাযোগ, কর্মসংস্থান, শিক্ষা ও চিকিৎসায় বিশ্বগ্রামের প্রভাব।",
              keywords: ["বিশ্বগ্রাম", "ভার্চুয়াল রিয়েলিটি", "গ্লোবাল ভিলেজ"]
            },
            {
              id: "c11-ict-ch1-l2",
              point: "১.২",
              title: "AI, Robotics, Cryosurgery & Biometrics",
              titleBangla: "১.২ কৃত্রিম বুদ্ধিমত্তা, রোবোটিক্স, ক্রায়োসার্জারি ও বায়োমেট্রিক্স",
              summary: "আধুনিক প্রযুক্তির বাস্তব প্রয়োগ ও চিকিৎসায় ব্যবহার।",
              keywords: ["এআই", "রোবোটিক্স", "ক্রায়োসার্জারি", "বায়োমেট্রিক্স"]
            }
          ]
        },
        {
          id: "c11-ict-ch2",
          chapterNumber: 2,
          title: "Communication Systems & Networking",
          titleBangla: "২য় অধ্যায়: কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং",
          lessons: [
            {
              id: "c11-ict-ch2-l1",
              point: "২.১",
              title: "Data Transmission Modes and Media (Optical Fiber, Satellite)",
              titleBangla: "২.১ ডেটা ট্রান্সমিশন মোড ও মাধ্যম (অপটিক্যাল ফাইবার, স্যাটেলাইট)",
              summary: "সিমপ্লেক্স, হাফ-ডুপ্লেক্স, ফুল-ডুপ্লেক্স ও ওয়াইফাই/ব্লুটুথ প্রযুক্তি।",
              keywords: ["নেটওয়ার্ক", "অপটিক্যাল ফাইবার", "স্যাটেলাইট", "ওয়াইফাই"]
            },
            {
              id: "c11-ict-ch2-l2",
              point: "২.২",
              title: "Network Topologies (Star, Mesh, Bus, Ring)",
              titleBangla: "২.২ নেটওয়ার্ক টপোলজি (স্টার, বাস, রিং, মেশ, হাইব্রিড)",
              summary: "টপোলজির গঠন, সুবিধা, অসুবিধা ও ক্লাউড কম্পিউটিং।",
              keywords: ["টপোলজি", "স্টার টপোলজি", "ক্লাউড কম্পিউটিং"]
            }
          ]
        },
        {
          id: "c11-ict-ch3",
          chapterNumber: 3,
          title: "Number Systems & Digital Devices",
          titleBangla: "৩য় অধ্যায়: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
          lessons: [
            {
              id: "c11-ict-ch3-l1",
              point: "৩.১",
              title: "Base Conversions and 2's Complement",
              titleBangla: "৩.১ সংখ্যা পদ্ধতির রূপান্তর ও ২ এর পরিপূরক (2's Complement)",
              summary: "বাইনারি, অক্টাল, ডেসিমাল, হেক্সাডেসিমাল রূপান্তর ও যোগের মাধ্যমে বিয়োগ।",
              keywords: ["সংখ্যা পদ্ধতি", "পরিপূরক", "বাইনারি", "হেক্সাডেসিমাল"]
            },
            {
              id: "c11-ict-ch3-l2",
              point: "৩.২",
              title: "Boolean Algebra, Logic Gates & Universal Gates",
              titleBangla: "৩.২ বুলিয়ান অ্যালজেব্রা, ডি মরগান ও লজিক গেট",
              summary: "মৌলিক গেট (AND, OR, NOT), সার্বজনীন গেট (NAND, NOR) ও এনকোডার/ডিকোডার।",
              keywords: ["লজিক গেট", "বুলিয়ান অ্যালজেব্রা", "ডি মরগান", "এনকোডার"]
            }
          ]
        },
        {
          id: "c11-ict-ch4",
          chapterNumber: 4,
          title: "Web Design and HTML",
          titleBangla: "৪র্থ অধ্যায়: ওয়েব ডিজাইন পরিচিতি এবং HTML",
          lessons: [
            {
              id: "c11-ict-ch4-l1",
              point: "৪.১",
              title: "HTML Tags, Links, Tables and Images",
              titleBangla: "৪.১ এইচটিএমএল ট্যাগ, টেবিল, ইমেজ এবং হাইপারলিংক তৈরি",
              summary: "টেবিল ডিজাইন, ফর্ম ও ওয়েব পেজে ছবি ও লিংক যুক্ত করার কোড।",
              keywords: ["HTML", "ট্যাগ", "টেবিল", "হাইপারলিংক", "ওয়েব ডিজাইন"]
            }
          ]
        }
      ]
    },
    {
      id: "c11-phy1",
      code: "PHY1-11",
      name: "Physics 1st Paper",
      nameBangla: "পদার্থবিজ্ঞান ১ম পত্র",
      group: "Science",
      coverColor: "from-sky-600 to-blue-900",
      chapters: [
        {
          id: "c11-phy1-ch2",
          chapterNumber: 2,
          title: "Vectors",
          titleBangla: "২য় অধ্যায়: ভেক্টর",
          lessons: [
            {
              id: "c11-phy1-ch2-l1",
              point: "২.১",
              title: "Parallelogram Law & Dot/Cross Product",
              titleBangla: "২.১ সামান্তরিক সূত্র, ডট গুণন ও ক্রস গুণন",
              summary: "লব্ধির মান R = √(P² + Q² + 2PQ cos α) ও ভেক্টর অপারেটর ∇ (Del)।",
              keywords: ["ভেক্টর", "সামান্তরিক সূত্র", "ডট গুণন", "ক্রস গুণন"]
            }
          ]
        },
        {
          id: "c11-phy1-ch4",
          chapterNumber: 4,
          title: "Newtonian Mechanics",
          titleBangla: "৪র্থ অধ্যায়: নিউটনিয়ান বলবিদ্যা",
          lessons: [
            {
              id: "c11-phy1-ch4-l1",
              point: "৪.১",
              title: "Torque, Moment of Inertia & Banking Angle",
              titleBangla: "৪.১ জড়তার ভ্রামক, টর্ক ও রাস্তার ব্যাংকিং কোণ",
              summary: "tan θ = v² / (rg) এবং ঘূর্ণন গতিশক্তি E = ½Iω² এর বিশ্লেষণ।",
              keywords: ["জড়তার ভ্রামক", "টর্ক", "ব্যাংকিং কোণ", "ঘূর্ণন"]
            }
          ]
        },
        {
          id: "c11-phy1-ch8",
          chapterNumber: 8,
          title: "Periodic Motion",
          titleBangla: "৮ম অধ্যায়: পর্যায়বৃত্ত গতি",
          lessons: [
            {
              id: "c11-phy1-ch8-l1",
              point: "৮.১",
              title: "Simple Harmonic Motion (SHM) & Simple Pendulum",
              titleBangla: "৮.১ সরল ছন্দিত স্পন্দন ও সরল দোলক",
              summary: "T = 2π√(L/g) সূত্র ও সেকেন্ড দোলকের কার্যকরী দৈর্ঘ্য।",
              keywords: ["সরল দোলক", "স্পন্দন", "পর্যায়কাল"]
            }
          ]
        }
      ]
    },
    {
      id: "c11-chem1",
      code: "CHEM1-11",
      name: "Chemistry 1st Paper",
      nameBangla: "রসায়ন ১ম পত্র",
      group: "Science",
      coverColor: "from-teal-600 to-green-950",
      chapters: [
        {
          id: "c11-chem1-ch2",
          chapterNumber: 2,
          title: "Qualitative Chemistry",
          titleBangla: "২য় অধ্যায়: গুণগত রসায়ন",
          lessons: [
            {
              id: "c11-chem1-ch2-l1",
              point: "২.১",
              title: "Quantum Numbers & Electronic Principles",
              titleBangla: "২.১ কোয়ান্টাম সংখ্যা, আউফবাউ ও হুন্ডের নীতি",
              summary: "চারটি কোয়ান্টাম সংখ্যা (n, l, m, s) ও d-অরবিটালের বিকৃত রূপ।",
              keywords: ["কোয়ান্টাম সংখ্যা", "আউফবাউ", "হুন্ড", "অরবিটাল"]
            },
            {
              id: "c11-chem1-ch2-l2",
              point: "২.২",
              title: "Solubility Product (Ksp) & Common Ion Effect",
              titleBangla: "২.২ দ্রাব্যতা গুণফল (Ksp) ও সম-আয়ন প্রভাব",
              summary: "অধঃক্ষেপ সৃষ্টির শর্ত (Kip > Ksp) এবং লবণ শনাক্তকরণ।",
              keywords: ["দ্রাব্যতা গুণফল", "Ksp", "সম-আয়ন", "অধঃক্ষেপ"]
            }
          ]
        },
        {
          id: "c11-chem1-ch4",
          chapterNumber: 4,
          title: "Chemical Changes",
          titleBangla: "৪র্থ অধ্যায়: রাসায়নিক পরিবর্তন",
          lessons: [
            {
              id: "c11-chem1-ch4-l1",
              point: "৪.১",
              title: "Equilibrium Constants (Kc, Kp) & Buffer pH",
              titleBangla: "৪.১ রাসায়নিক সাম্যাবস্থা (Kp ও Kc) এবং বাফার দ্রবণ",
              summary: "লা-শাতেলীয়ার নীতি এবং হ্যান্ডারসন-হ্যাসেলবাল্ক সমীকরণ।",
              keywords: ["সাম্যাবস্থা", "Kp", "Kc", "বাফার দ্রবণ", "pH"]
            }
          ]
        }
      ]
    },
    {
      id: "c11-hmath1",
      code: "HMATH1-11",
      name: "Higher Mathematics 1st Paper",
      nameBangla: "উচ্চতর গণিত ১ম পত্র",
      group: "Science",
      coverColor: "from-purple-600 to-indigo-900",
      chapters: [
        {
          id: "c11-hm1-ch1",
          chapterNumber: 1,
          title: "Matrices and Determinants",
          titleBangla: "১ম অধ্যায়: ম্যাট্রিক্স ও নির্ণায়ক",
          lessons: [
            {
              id: "c11-hm1-ch1-l1",
              point: "১.১",
              title: "Matrix Multiplication & Inverse Matrix",
              titleBangla: "১.১ ম্যাট্রিক্স গুণন, বিপরীত ম্যাট্রিক্স ও ক্রেমার নিয়ম",
              summary: "সহগুণক, অ্যাডজয়েন্ট ম্যাট্রিক্স ও সমীকরণ জোটের সমাধান।",
              keywords: ["ম্যাট্রিক্স", "নির্ণায়ক", "বিপরীত ম্যাট্রিক্স", "ক্রেমার"]
            }
          ]
        },
        {
          id: "c11-hm1-ch3",
          chapterNumber: 3,
          title: "Straight Lines",
          titleBangla: "৩য় অধ্যায়: সরলরেখা",
          lessons: [
            {
              id: "c11-hm1-ch3-l1",
              point: "৩.১",
              title: "Division Points, Area & Line Equations",
              titleBangla: "৩.১ বিন্দু বিভাজন, ত্রিভুজের ক্ষেত্রফল ও সরলরেখার সমীকরণ",
              summary: "অন্তরবিভক্তি, বহির্বিভক্তি এবং দুটি রেখার ছেদবিন্দুগামী সমীকরণ।",
              keywords: ["সরলরেখা", "ঢাল", "অন্তরবিভক্তি", "স্থানাঙ্ক"]
            }
          ]
        },
        {
          id: "c11-hm1-ch9",
          chapterNumber: 9,
          title: "Differentiation (Calculus)",
          titleBangla: "৯ম অধ্যায়: অন্তরীকরণ (Differentiation)",
          lessons: [
            {
              id: "c11-hm1-ch9-l1",
              point: "৯.১",
              title: "Limits, First Principles & Chain Rule",
              titleBangla: "৯.১ লিমিট, মূল নিয়মে অন্তরজ ও চেইন রুল",
              summary: "lim(x→0) sinx/x = 1 প্রমাণ এবং পর্যায়ক্রমিক অন্তরজ।",
              keywords: ["লিমিট", "অন্তরীকরণ", "চেইন রুল", "ক্যালকুলাস"]
            }
          ]
        },
        {
          id: "c11-hm1-ch10",
          chapterNumber: 10,
          title: "Integration (Calculus)",
          titleBangla: "১০ম অধ্যায়: যোগজীকরণ (Integration)",
          lessons: [
            {
              id: "c11-hm1-ch10-l1",
              point: "১০.১",
              title: "Indefinite & Definite Integrals",
              titleBangla: "১০.১ অনির্দিষ্ট ও নির্দিষ্ট যোগজীকরণ এবং ক্ষেত্রফল নির্ণয়",
              summary: "প্রতিস্থাপন পদ্ধতি, খণ্ডশ যোগজীকরণ (Integration by Parts)।",
              keywords: ["যোগজীকরণ", "ইন্টিগ্রেশন", "ক্ষেত্রফল", "ক্যালকুলাস"]
            }
          ]
        }
      ]
    },
    {
      id: "c11-bio1",
      code: "BIO1-11",
      name: "Biology 1st Paper (Botany)",
      nameBangla: "জীববিজ্ঞান ১ম পত্র (উদ্ভিদবিজ্ঞান)",
      group: "Science",
      coverColor: "from-green-600 to-lime-900",
      chapters: [
        {
          id: "c11-bio1-ch1",
          chapterNumber: 1,
          title: "Cell and Its Structure",
          titleBangla: "১ম অধ্যায়: কোষ ও এর গঠন",
          lessons: [
            {
              id: "c11-bio1-ch1-l1",
              point: "১.১",
              title: "Fluid Mosaic Model & DNA Double Helix",
              titleBangla: "১.১ ফ্লুইড মোজাইক মডেল ও ডিএনএ ডাবল হেলিক্স",
              summary: "ওয়াটসন ও ক্রিকের ডিএনএ গঠন এবং আরএনএ ট্রান্সক্রিপশন।",
              keywords: ["ডিএনএ", "ফ্লুইড মোজাইক", "ট্রান্সক্রিপশন", "কোষ"]
            }
          ]
        },
        {
          id: "c11-bio1-ch11",
          chapterNumber: 11,
          title: "Biotechnology",
          titleBangla: "১১শ অধ্যায়: জীবপ্রযুক্তি (Biotechnology)",
          lessons: [
            {
              id: "c11-bio1-ch11-l1",
              point: "১১.১",
              title: "Tissue Culture & Recombinant DNA (rDNA)",
              titleBangla: "১১.১ টিস্যু কালচার ও রিকম্বিনেন্ট ডিএনএ প্রযুক্তি",
              summary: "রেস্ট্রিকশন এনজাইম, প্লাজমিড ভেক্টর ও ইনসুলিন উৎপাদন।",
              keywords: ["বায়োটেকনোলজি", "টিস্যু কালচার", "রিকম্বিনেন্ট ডিএনএ"]
            }
          ]
        }
      ]
    },
    {
      id: "c11-bangla1",
      code: "BAN1-11",
      name: "Bangla 1st Paper (Literature)",
      nameBangla: "বাংলা ১ম পত্র (সাহিত্যপাঠ)",
      group: "General / Compulsory",
      coverColor: "from-emerald-700 to-teal-900",
      chapters: [
        {
          id: "c11-b1-ch1",
          chapterNumber: 1,
          title: "Selected Prose and Short Stories",
          titleBangla: "১ম অধ্যায়: নির্বাচিত গদ্য (অপরিচিতা, বিলাসী, আমার পথ)",
          lessons: [
            {
              id: "c11-b1-ch1-l1",
              point: "১.১",
              title: "Analysis of Oporichita by Tagore",
              titleBangla: "১.১ রবীন্দ্রনাথ ঠাকুরের 'অপরিচিতা' গল্প বিশ্লেষণ",
              summary: "যৌতুক প্রথার বিরুদ্ধে কল্যাণীর আত্মমর্যাদাবোধ ও প্রতিবাদ।",
              keywords: ["অপরিচিতা", "রবীন্দ্রনাথ", "যৌতুক", "গদ্য"]
            }
          ]
        },
        {
          id: "c11-b1-ch2",
          chapterNumber: 2,
          title: "Selected Poems",
          titleBangla: "২য় অধ্যায়: নির্বাচিত কবিতা (সোনার তরী, বিদ্রোহী)",
          lessons: [
            {
              id: "c11-b1-ch2-l1",
              point: "২.১",
              title: "Sonar Tori and Bidrohi Interpretation",
              titleBangla: "২.১ 'সোনার তরী' ও নজরুলের 'বিদ্রোহী' কবিতা পাঠ",
              summary: "মহাকালের প্রতীক সোনার তরী ও মানবমুক্তির জয়গান।",
              keywords: ["সোনার তরী", "বিদ্রোহী", "নজরুল", "কবিতা"]
            }
          ]
        }
      ]
    },
    {
      id: "c11-acc1",
      code: "ACC1-11",
      name: "Accounting 1st Paper",
      nameBangla: "হিসাববিজ্ঞান ১ম পত্র",
      group: "Business Studies",
      coverColor: "from-purple-700 to-indigo-950",
      chapters: [
        {
          id: "c11-acc1-ch3",
          chapterNumber: 3,
          title: "Bank Reconciliation Statement",
          titleBangla: "৩য় অধ্যায়: ব্যাংক সমন্বয় বিবরণী",
          lessons: [
            {
              id: "c11-acc1-ch3-l1",
              point: "৩.১",
              title: "Cash Book vs Pass Book Discrepancies",
              titleBangla: "৩.১ নগদান বই ও পাস বইয়ের পার্থক্যের কারণ ও সমন্বয়",
              summary: "একক জের ও উভয় জের পদ্ধতিতে ব্যাংক সমন্বয় প্রস্তুত।",
              keywords: ["ব্যাংক সমন্বয়", "নগদান বই", "পাস বই"]
            }
          ]
        }
      ]
    },
    {
      id: "c11-econ1",
      code: "ECON1-11",
      name: "Economics 1st Paper",
      nameBangla: "অর্থনীতি ১ম পত্র",
      group: "Humanities / Business",
      coverColor: "from-amber-700 to-orange-950",
      chapters: [
        {
          id: "c11-econ1-ch2",
          chapterNumber: 2,
          title: "Consumer & Producer Behavior",
          titleBangla: "২য় অধ্যায়: ভোক্তা ও উৎপাদকের আচরণ (চাহিদা ও জোগান)",
          lessons: [
            {
              id: "c11-econ1-ch2-l1",
              point: "২.১",
              title: "Law of Demand, Supply & Market Equilibrium",
              titleBangla: "২.১ চাহিদা বিধি, জোগান বিধি ও ভারসাম্য দাম",
              summary: "চাহিদা রেখার নিম্নগামী প্রবণতা ও স্থিতিস্থাপকতা (Elasticity)।",
              keywords: ["চাহিদা", "জোগান", "ভারসাম্য দাম", "স্থিতিস্থাপকতা"]
            }
          ]
        }
      ]
    }
  ]
};
