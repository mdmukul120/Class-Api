import { ClassGrade } from '../types';

export const CLASS_8_DATA: ClassGrade = {
  id: "class-8",
  numeric: 8,
  name: "Class 8",
  nameBangla: "৮ম শ্রেণি",
  stage: "Junior Secondary",
  stageBangla: "নিম্ন মাধ্যমিক",
  description: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত অষ্টম শ্রেণির সকল পাঠ্যপুস্তক, অধ্যায় ও শিখনফল পয়েন্ট",
  subjects: [
    {
      id: "c8-bangla",
      code: "BAN-08",
      name: "Bangla",
      nameBangla: "বাংলা",
      group: "General",
      coverColor: "from-emerald-600 to-teal-850",
      chapters: [
        {
          id: "c8-ban-ch1",
          chapterNumber: 1,
          title: "Purposeful Communication",
          titleBangla: "১ম অধ্যায়: প্রয়োজন বুঝে যোগাযোগ করি",
          lessons: [
            {
              id: "c8-ban-ch1-l1",
              point: "১.১",
              title: "Logical and Evidence-based Dialogue",
              titleBangla: "১.১ যুক্তিনির্ভর ও স্পষ্ট যোগাযোগ",
              summary: "ব্যক্তিগত ও আনুষ্ঠানিক আলোচনায় সুনির্দিষ্ট তথ্য উপাত্ত তুলে ধরা।",
              keywords: ["যুক্তিনির্ভর", "যোগাযোগ", "স্পষ্টতা"]
            }
          ]
        },
        {
          id: "c8-ban-ch2",
          chapterNumber: 2,
          title: "Standard Bangla and Pronunciation",
          titleBangla: "২য় অধ্যায়: প্রমিত ভাষা শিখি ও প্রয়োগ করি",
          lessons: [
            {
              id: "c8-ban-ch2-l1",
              point: "২.১",
              title: "Phonetic Variations and Rules",
              titleBangla: "২.১ ধ্বনির উচ্চারণসূত্র ও প্রমিত উচ্চারণরীতি",
              summary: "বাংলা উচ্চারণের নিয়ম ও শ্রুতিমধুর বাচনভঙ্গি।",
              keywords: ["উচ্চারণরীতি", "প্রমিত", "বাচনভঙ্গি"]
            }
          ]
        },
        {
          id: "c8-ban-ch3",
          chapterNumber: 3,
          title: "Literary Forms and Appreciation",
          titleBangla: "৩য় অধ্যায়: সাহিত্যের রূপ ও রস আস্বাদন",
          lessons: [
            {
              id: "c8-ban-ch3-l1",
              point: "৩.১",
              title: "Story, Novel, Play and Essay",
              titleBangla: "৩.১ গল্প, উপন্যাস, নাটক ও প্রবন্ধের রূপভেদ",
              summary: "বাংলা সাহিত্যের প্রধান শাখাগুলোর বৈশিষ্ট্য ও পাঠ পর্যালোচনা।",
              keywords: ["উপন্যাস", "নাটক", "প্রবন্ধ", "গল্প"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-english",
      code: "ENG-08",
      name: "English",
      nameBangla: "ইংরেজি",
      group: "General",
      coverColor: "from-blue-600 to-indigo-850",
      chapters: [
        {
          id: "c8-eng-ch1",
          chapterNumber: 1,
          title: "Beauty in Art",
          titleBangla: "Experience 1: Beauty in Art (শিল্পের সৌন্দর্য)",
          lessons: [
            {
              id: "c8-eng-ch1-l1",
              point: "1.1",
              title: "Appreciating Art & Similes",
              titleBangla: "১.১ চিত্রকর্মের মূল্যায়ন ও উপমা (Simile)",
              summary: "Using figures of speech like similes and metaphors to describe paintings.",
              keywords: ["art", "simile", "metaphor", "literature"]
            }
          ]
        },
        {
          id: "c8-eng-ch2",
          chapterNumber: 2,
          title: "The Bizzy Bee",
          titleBangla: "Experience 2: The Bizzy Bee (পরিশ্রমের মূল্য)",
          lessons: [
            {
              id: "c8-eng-ch2-l1",
              point: "2.1",
              title: "Diligence, Hard Work & Metaphors",
              titleBangla: "২.১ রূপক ও শ্রমের মর্যাদা",
              summary: "Comprehending poetic symbolism and narrative structure.",
              keywords: ["diligence", "poetry", "symbolism"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-math",
      code: "MATH-08",
      name: "Mathematics",
      nameBangla: "গণিত",
      group: "General",
      coverColor: "from-amber-600 to-orange-850",
      chapters: [
        {
          id: "c8-math-ch1",
          chapterNumber: 1,
          title: "Mathematical Inquiry and Patterns",
          titleBangla: "১ম অধ্যায়: গাণিতিক অনুসন্ধান",
          lessons: [
            {
              id: "c8-math-ch1-l1",
              point: "১.১",
              title: "Arithmetic Sequences and Formulae",
              titleBangla: "১.১ সংখ্যার প্যাটার্ন ও বীজগণিতীয় সাধারণ রাশি",
              summary: "স্বাভাবিক ক্রমিক সংখ্যার সমষ্টি ও প্যাটার্ন সূত্র প্রতিপাদন।",
              keywords: ["প্যাটার্ন", "অনুসন্ধান", "বীজগণিতীয় রাশি"]
            }
          ]
        },
        {
          id: "c8-math-ch2",
          chapterNumber: 2,
          title: "Real Numbers in Daily Life",
          titleBangla: "২য় অধ্যায়: দৈনন্দিন কাজে বাস্তব সংখ্যা",
          lessons: [
            {
              id: "c8-math-ch2-l1",
              point: "২.১",
              title: "Rational, Irrational and Square Roots",
              titleBangla: "২.১ মূলদ ও অমূলদ সংখ্যা এবং বর্গমূল নির্ণয়",
              summary: "ভগ্নাংশ, আবৃত্ত দশমিক ও অমূলদ সংখ্যার জ্যামিতিক উপস্থাপন।",
              keywords: ["মূলদ", "অমূলদ", "বর্গমূল", "বাস্তব সংখ্যা"]
            }
          ]
        },
        {
          id: "c8-math-ch3",
          chapterNumber: 3,
          title: "Circle and Solid Geometry",
          titleBangla: "৩য় অধ্যায়: বৃত্ত ও ঘনবস্তু পরিমাপ",
          lessons: [
            {
              id: "c8-math-ch3-l1",
              point: "৩.১",
              title: "Circumference and Area of Circle",
              titleBangla: "৩.১ বৃত্তের পরিধি (2πr) ও ক্ষেত্রফল (πr²)",
              summary: "পাই (π) এর মান এবং বৃত্তাকার ক্ষেত্রের ব্যবহারিক পরিমাপ।",
              keywords: ["বৃত্ত", "পরিধি", "ক্ষেত্রফল", "পাই"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-science",
      code: "SCI-08",
      name: "Science",
      nameBangla: "বিজ্ঞান",
      group: "General",
      coverColor: "from-cyan-600 to-sky-850",
      chapters: [
        {
          id: "c8-sci-ch1",
          chapterNumber: 1,
          title: "Force, Motion and Gravitation",
          titleBangla: "১ম অধ্যায়: গতি, বল ও মহাকর্ষ",
          lessons: [
            {
              id: "c8-sci-ch1-l1",
              point: "১.১",
              title: "Newton's Laws and Inertia",
              titleBangla: "১.১ নিউটনের গতিসূত্র ও জড়তা",
              summary: "গতির ৩টি সূত্র ও ক্রিয়া-প্রতিক্রিয়া বলের সাম্যাবস্থা।",
              keywords: ["নিউটনের গতিসূত্র", "জড়তা", "ভরবেগ"]
            },
            {
              id: "c8-sci-ch1-l2",
              point: "১.২",
              title: "Gravitational Law and Free Fall",
              titleBangla: "১.২ মহাকর্ষ সূত্র ও অভিকর্ষজ ত্বরণ (g)",
              summary: "F = G(m1m2)/d² সমীকরণ ও বিভিন্ন উচ্চতায় g এর মান পরিবর্তন।",
              keywords: ["মহাকর্ষ", "অভিকর্ষজ ত্বরণ", "ওজন"]
            }
          ]
        },
        {
          id: "c8-sci-ch2",
          chapterNumber: 2,
          title: "Atomic Structure & Chemical Bonding",
          titleBangla: "২য় অধ্যায়: পরমাণুর গঠন ও রাসায়নিক বিক্রিয়া",
          lessons: [
            {
              id: "c8-sci-ch2-l1",
              point: "২.১",
              title: "Electrons, Protons and Neutrons",
              titleBangla: "২.১ ইলেকট্রন, প্রোটন ও নিউট্রন এবং পারমাণবিক সংখ্যা",
              summary: "পরমাণুর কেন্দ্র এবং ইলেকট্রন কক্ষপথের প্রাথমিক ধারণা।",
              keywords: ["ইলেকট্রন", "প্রোটন", "পরমাণু", "কক্ষপথ"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-history-social",
      code: "HIS-08",
      name: "History and Social Science",
      nameBangla: "ইতিহাস ও সামাজিক বিজ্ঞান",
      group: "General",
      coverColor: "from-amber-700 to-yellow-950",
      chapters: [
        {
          id: "c8-his-ch1",
          chapterNumber: 1,
          title: "Colonial Era and Anti-Colonial Resistance",
          titleBangla: "১ম অধ্যায়: ঔপনিবেশিক শাসন ও প্রতিরোধ আন্দোলন",
          lessons: [
            {
              id: "c8-his-ch1-l1",
              point: "১.১",
              title: "Battle of Plassey to 1857 Revolt",
              titleBangla: "১.১ পলাশীর যুদ্ধ ও ১৮৫৭ সালের মহাবিদ্রোহ",
              summary: "ভারতে ইংরেজ শাসনের প্রতিষ্ঠা ও দেশপ্রেমিক প্রতিরোধ।",
              keywords: ["পলাশী", "মহাবিদ্রোহ", "ঔপনিবেশিক শাসন"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-digital-tech",
      code: "DIG-08",
      name: "Digital Technology",
      nameBangla: "ডিজিটাল প্রযুক্তি",
      group: "General",
      coverColor: "from-violet-600 to-purple-850",
      chapters: [
        {
          id: "c8-dig-ch1",
          chapterNumber: 1,
          title: "Artificial Intelligence in Daily Life",
          titleBangla: "১ম অধ্যায়: কৃত্রিম বুদ্ধিমত্তা ও ডেটা অ্যানালিটিক্স",
          lessons: [
            {
              id: "c8-dig-ch1-l1",
              point: "১.১",
              title: "Basics of Machine Learning & AI Tools",
              titleBangla: "১.১ কৃত্রিম বুদ্ধিমত্তা (AI) ও অ্যালগরিদমের সিদ্ধান্ত গ্রহণ",
              summary: "কীভাবে কম্পিউটার উপাত্ত থেকে শিখে সঠিক সিদ্ধান্ত দেয়।",
              keywords: ["এআই", "মেশিন লার্নিং", "ডেটা"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-life-livelihood",
      code: "LIFE-08",
      name: "Life and Livelihood",
      nameBangla: "জীবন ও জীবিকা",
      group: "General",
      coverColor: "from-teal-600 to-green-850",
      chapters: [
        {
          id: "c8-life-ch1",
          chapterNumber: 1,
          title: "Professional Skills & Career Mapping",
          titleBangla: "১ম অধ্যায়: পেশাগত দক্ষতা ও ভবিষ্যৎ কর্মজগৎ",
          lessons: [
            {
              id: "c8-life-ch1-l1",
              point: "১.১",
              title: "Exploring 21st Century Skills",
              titleBangla: "১.১ একবিংশ শতাব্দীর দক্ষতা ও উদ্ভাবনী উদ্যোগ",
              summary: "সমস্যা সমাধান, নেতৃত্ব ও দলগত কাজের গুণাবলি অর্জন।",
              keywords: ["দক্ষতা", "পেশা", "উদ্ভাবন"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-health-wellbeing",
      code: "HLT-08",
      name: "Health and Wellbeing",
      nameBangla: "স্বাস্থ্য সুরক্ষা",
      group: "General",
      coverColor: "from-rose-600 to-pink-850",
      chapters: [
        {
          id: "c8-hlt-ch1",
          chapterNumber: 1,
          title: "Sports, Fitness and Mental Health",
          titleBangla: "১ম অধ্যায়: শারীরিক সক্ষমতা ও মানসিক প্রফুল্লতা",
          lessons: [
            {
              id: "c8-hlt-ch1-l1",
              point: "১.১",
              title: "First Aid & CPR Basics",
              titleBangla: "১.১ প্রাথমিক চিকিৎসা ও দুর্ঘটনা মোকাবেলা",
              summary: "রক্তপাত বন্ধ, ব্যান্ডেজ ও প্রাথমিক প্রতিষেধক ব্যবস্থা।",
              keywords: ["প্রাথমিক চিকিৎসা", "ব্যান্ডেজ", "দুর্ঘটনা"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-art-culture",
      code: "ART-08",
      name: "Art and Culture",
      nameBangla: "শিল্প ও সংস্কৃতি",
      group: "General",
      coverColor: "from-fuchsia-600 to-purple-850",
      chapters: [
        {
          id: "c8-art-ch1",
          chapterNumber: 1,
          title: "Colors, Textures and Puppetry",
          titleBangla: "১ম অধ্যায়: পুতুলনাচ ও দৃশ্যকলা",
          lessons: [
            {
              id: "c8-art-ch1-l1",
              point: "১.১",
              title: "Puppet Making and Story Presentation",
              titleBangla: "১.১ পুতুল তৈরি ও নাট্য প্রদর্শন",
              summary: "কাপড় ও পাট দিয়ে পুতুল বানানো ও সমাজ সচেতনতামূলক নাট্যাংশ পরিবেশন।",
              keywords: ["পুতুলনাচ", "নাট্য", "দৃশ্যশিল্প"]
            }
          ]
        }
      ]
    },
    {
      id: "c8-islamic-studies",
      code: "ISL-08",
      name: "Islamic Studies",
      nameBangla: "ইসলাম শিক্ষা",
      group: "General",
      coverColor: "from-emerald-700 to-teal-950",
      chapters: [
        {
          id: "c8-isl-ch1",
          chapterNumber: 1,
          title: "Quran and Hadith Studies",
          titleBangla: "১ম অধ্যায়: কুরআন ও হাদিস শিক্ষা",
          lessons: [
            {
              id: "c8-isl-ch1-l1",
              point: "১.১",
              title: "Tajweed and Select Surahs",
              titleBangla: "১.১ তাজবিদসহ নির্বাচিত সূরা ও হাদিসের শিক্ষা",
              summary: "সহিহ উচ্চারণ ও হাদিসে বর্ণিত নৈতিক মূল্যবোধ বাস্তবায়ন।",
              keywords: ["কুরআন", "তাজবিদ", "হাদিস", "নৈতিকতা"]
            }
          ]
        }
      ]
    }
  ]
};
