import { ClassGrade } from '../types';

export const CLASS_12_DATA: ClassGrade = {
  id: "class-12",
  numeric: 12,
  name: "Class 12",
  nameBangla: "দ্বাদশ শ্রেণি (HSC ২য় বর্ষ ও পরীক্ষার্থী)",
  stage: "Higher Secondary (HSC)",
  stageBangla: "উচ্চ মাধ্যমিক",
  description: "এইচএসসি ২য় বর্ষ ও পরীক্ষার্থীদের জন্য জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা ও ঐচ্ছিক বিভাগের সকল ২য় পত্র পাঠ্যবই, বোর্ড সিলেবাস ও অধ্যায়ভিত্তিক লেসন পয়েন্ট",
  subjects: [
    // ============================================================
    // ১. আবশ্যিক বিষয় (General / Compulsory)
    // ============================================================
    {
      id: "c12-bangla2",
      code: "BAN-102",
      name: "Bangla 2nd Paper (Grammar & Composition)",
      nameBangla: "বাংলা ২য় পত্র (ব্যাকরণ ও নির্মিতি)",
      group: "General / Compulsory",
      coverColor: "from-emerald-700 to-teal-900",
      chapters: [
        {
          id: "c12-ban2-ch1",
          chapterNumber: 1,
          title: "Rules of Bengali Pronunciation",
          titleBangla: "১ম অধ্যায়: বাংলা উচ্চারণের নিয়ম",
          lessons: [
            {
              id: "c12-ban2-ch1-l1",
              point: "১.১",
              title: "Pronunciation Rules of 'O' Sound and 'E' Sound",
              titleBangla: "১.১ আদ্য 'অ', মধ্য 'অ' ও অন্ত্য 'অ'-ধ্বনির সংবৃত ও বিবৃত উচ্চারণ এবং 'এ' ধ্বনির উচ্চারণ",
              summary: "প্রমিত বাংলা উচ্চারণের ৫টি গুরুত্বপূর্ণ নিয়ম এবং শব্দের সঠিক উচ্চারণ অনুশীলন।",
              keywords: ["বাংলা উচ্চারণ", "অ-ধ্বনি", "সংবৃত", "বিবৃত", "প্রমিত উচ্চারণ"]
            },
            {
              id: "c12-ban2-ch1-l2",
              point: "১.২",
              title: "Pronunciation Rules of Ba-fola and Ya-fola",
              titleBangla: "১.২ ব-ফলা ও য-ফলা উচ্চারণের নিয়ম এবং ফলাহীন উচ্চারণ",
              summary: "শব্দের প্রথমে, মাঝে ও শেষে যুক্তবর্ণ ও ফলার উচ্চারণ পরিবর্তনের বিধান।",
              keywords: ["ব-ফলা", "য-ফলা", "উচ্চারণ রীতি"]
            }
          ]
        },
        {
          id: "c12-ban2-ch2",
          chapterNumber: 2,
          title: "Rules of Bengali Spelling and Natva-Satva Bidhan",
          titleBangla: "২য় অধ্যায়: বাংলা বানানের নিয়ম ও ণ-ত্ব ও ষ-ত্ব বিধান",
          lessons: [
            {
              id: "c12-ban2-ch2-l1",
              point: "২.১",
              title: "Bangla Academy Standard Spelling Rules",
              titleBangla: "২.১ বাংলা একাডেমি প্রমিত বাংলা বানানের নিয়ম ও ই/ঈ, উ/ঊ এর ব্যবহার",
              summary: "বিদেশি শব্দে মূর্ধন্য-ণ ও ষ বর্জন, রেফের পর ব্যঞ্জনবর্ণের দ্বিত্ব না হওয়া সংক্রান্ত নিয়মাবলী।",
              keywords: ["বাংলা একাডেমি", "বানানের নিয়ম", "হ্রস্ব-ইকার", "প্রমিত বানান"]
            },
            {
              id: "c12-ban2-ch2-l2",
              point: "২.২",
              title: "Rules of Natva and Satva Bidhan with Exceptions",
              titleBangla: "২.২ ণ-ত্ব ও ষ-ত্ব বিধানের নিয়ম এবং স্বভাবতই ণ ও ষ হয় এমন শব্দ",
              summary: "তৎসম শব্দের বানানে মূর্ধন্য-ণ ও মূর্ধন্য-ষ ব্যবহারের ব্যাকরণগত বিধিনিষেধ ও ব্যতিক্রম।",
              keywords: ["ণ-ত্ব বিধান", "ষ-ত্ব বিধান", "তৎসম শব্দ"]
            }
          ]
        },
        {
          id: "c12-ban2-ch3",
          chapterNumber: 3,
          title: "Grammatical Word Classes (Part of Speech)",
          titleBangla: "৩য় অধ্যায়: ব্যাকরণিক শব্দশ্রেণি",
          lessons: [
            {
              id: "c12-ban2-ch3-l1",
              point: "৩.১",
              title: "Classification of 8 Word Classes: Noun, Pronoun, Adjective, Verb",
              titleBangla: "৩.১ আট প্রকার ব্যাকরণিক শব্দশ্রেণি (বিশেষ্য, সর্বনাম, বিশেষণ, ক্রিয়া)",
              summary: "বাক্যে শব্দের কার্যকারিতা অনুযায়ী শব্দশ্রেণি শনাক্তকরণ ও শ্রেণিবিন্যাস।",
              keywords: ["ব্যাকরণিক শব্দশ্রেণি", "বিশেষ্য", "সর্বনাম", "বিশেষণ", "ক্রিয়া"]
            },
            {
              id: "c12-ban2-ch3-l2",
              point: "৩.২",
              title: "Adverb, Preposition/Postposition, Conjunction and Interjection",
              titleBangla: "৩.২ ক্রিয়া বিশেষণ, অনুসর্গ, যোজক ও আবেগ শব্দ",
              summary: "বাক্যে অনুসর্গ ও যোজকের প্রয়োগ এবং আবেগ শব্দের শ্রেণিগত বৈশিষ্ট্য।",
              keywords: ["যোজক", "অনুসর্গ", "আবেগ শব্দ", "ক্রিয়া বিশেষণ"]
            }
          ]
        },
        {
          id: "c12-ban2-ch4",
          chapterNumber: 4,
          title: "Word Formation: Prefix, Suffix and Samas",
          titleBangla: "৪র্থ অধ্যায়: বাংলা শব্দ গঠন (উপসর্গ, প্রত্যয় ও সমাস)",
          lessons: [
            {
              id: "c12-ban2-ch4-l1",
              point: "৪.১",
              title: "Prefixes: Meaning Creating Capacity and Krit/Taddhit Suffixes",
              titleBangla: "৪.১ 'উপসর্গের অর্থবাচকতা নেই কিন্তু অর্থদ্যোতকতা আছে' এবং প্রত্যয় যোগে শব্দ গঠন",
              summary: "তৎসম, খাঁটি বাংলা ও বিদেশি উপসর্গ; কৃৎ প্রত্যয় ও তদ্ধিত প্রত্যয়ের নিয়ম।",
              keywords: ["উপসর্গ", "অর্থদ্যোতকতা", "প্রত্যয়", "কৃৎ প্রত্যয়"]
            },
            {
              id: "c12-ban2-ch4-l2",
              point: "৪.২",
              title: "Samas: Dwandwa, Karmadharaya, Tatpurush, Bahubrihi, Dvigu",
              titleBangla: "৪.২ ব্যাসবাক্যসহ সমাস নির্ণয় (দ্বন্দ্ব, কর্মধারয়, তৎপুরুষ, বহুব্রীহি, দ্বিগু, অব্যয়ীভাব)",
              summary: "সমস্তপদ, ব্যাসবাক্য ও সমস্যমান পদ বিশ্লেষণ এবং অর্থ প্রাধান্যের ভিত্তিতে সমাস নির্ণয়।",
              keywords: ["সমাস", "ব্যাসবাক্য", "কর্মধারয়", "বহুব্রীহি", "তৎপুরুষ"]
            }
          ]
        },
        {
          id: "c12-ban2-ch5",
          chapterNumber: 5,
          title: "Sentence Theory and Transformation",
          titleBangla: "৫ম অধ্যায়: বাক্যতত্ত্ব ও বাক্য রূপান্তর",
          lessons: [
            {
              id: "c12-ban2-ch5-l1",
              point: "৫.১",
              title: "Characteristics of a Worthy Sentence (Akankkha, Asatti, Yogyata)",
              titleBangla: "৫.১ একটি সার্থক বাক্যের তিনটি গুণ (আকাঙ্ক্ষা, আসত্তি ও যোগ্যতা)",
              summary: "গুরুচণ্ডালী দোষ, উপমার ভুল প্রয়োগ এবং বাগধারার সঠিক রূপ বজায় রাখা।",
              keywords: ["আকাঙ্ক্ষা", "আসত্তি", "যোগ্যতা", "সার্থক বাক্য"]
            },
            {
              id: "c12-ban2-ch5-l2",
              point: "৫.২",
              title: "Sentence Transformation (Simple, Complex, Compound & Assertive to Negative)",
              titleBangla: "৫.২ সরল, জটিল ও যৌগিক বাক্যে রূপান্তর এবং অর্থ না বদলে ইতিবাচক-নেতিবাচক রূপান্তর",
              summary: "অর্থের কোনো পরিবর্তন না ঘটিয়ে ব্যাকরণসম্মতভাবে বাক্যের রূপ বদল করার কৌশল।",
              keywords: ["সরল বাক্য", "জটিল বাক্য", "যৌগিক বাক্য", "বাক্য রূপান্তর"]
            }
          ]
        },
        {
          id: "c12-ban2-ch6",
          chapterNumber: 6,
          title: "Administrative Terminology and Translation",
          titleBangla: "৬ষ্ঠ অধ্যায়: পারিভাষিক শব্দ ও বঙ্গানুবাদ",
          lessons: [
            {
              id: "c12-ban2-ch6-l1",
              point: "৬.১",
              title: "Official Administrative and Scientific Terminology",
              titleBangla: "৬.১ গুরুত্বপূর্ণ দাপ্তরিক, আইনি ও বৈজ্ঞানিক পারিভাষিক শব্দ",
              summary: "ইংরেজি পরিভাষার প্রমিত বাংলা প্রতিশব্দ লিখন এবং ব্যবহারিক প্রয়োগ।",
              keywords: ["পারিভাষিক শব্দ", "দাপ্তরিক পরিভাষা", "বঙ্গানুবাদ"]
            }
          ]
        },
        {
          id: "c12-ban2-ch7",
          chapterNumber: 7,
          title: "Composition & Creative Writing",
          titleBangla: "৭ম অধ্যায়: নির্মিতি অংশ (প্রতিবেদন, আবেদনপত্র, ভাবসম্প্রসারণ, প্রবন্ধ)",
          lessons: [
            {
              id: "c12-ban2-ch7-l1",
              point: "৭.১",
              title: "Report Writing, Official Application, Expansion of Idea & Essay",
              titleBangla: "৭.১ সংবাদপত্রে প্রকাশের উপযোগী প্রতিবেদন, দাপ্তরিক আবেদনপত্র, ভাবসম্প্রসারণ ও প্রবন্ধ রচনা",
              summary: "তদন্তমূলক ও প্রাতিষ্ঠানিক প্রতিবেদন কাঠামোর সঠিক উপস্থাপন এবং যুক্তিভিত্তিক সৃজনশীল রচনা।",
              keywords: ["প্রতিবেদন লিখন", "আবেদনপত্র", "ভাবসম্প্রসারণ", "প্রবন্ধ রচনা"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-eng2",
      code: "ENG-108",
      name: "English 2nd Paper (Grammar & Composition)",
      nameBangla: "ইংরেজি ২য় পত্র (Grammar & Composition)",
      group: "General / Compulsory",
      coverColor: "from-blue-700 to-indigo-900",
      chapters: [
        {
          id: "c12-eng2-ch1",
          chapterNumber: 1,
          title: "Gap Filling with Prepositions and Special Phrases",
          titleBangla: "১ম অধ্যায়: উপযুক্ত Prepositions ও বিশেষ Phrases (was born, have to, would rather)",
          lessons: [
            {
              id: "c12-eng2-ch1-l1",
              point: "১.১",
              title: "Appropriate Prepositions and Special Idiomatic Expressions",
              titleBangla: "১.১ Appropriate Prepositions এবং 'had better', 'let alone', 'as if', 'as soon as' এর ব্যবহার",
              summary: "Contextual gap-filling in paragraphs using standard prepositional rules and fixed idioms.",
              keywords: ["Preposition", "Special Phrases", "Had better", "Would rather", "Let alone"]
            }
          ]
        },
        {
          id: "c12-eng2-ch2",
          chapterNumber: 2,
          title: "Completing Sentences with Clauses and Phrases",
          titleBangla: "২য় অধ্যায়: Completing Sentences (শর্তযুক্ত বাক্য ও ক্লজ গঠন)",
          lessons: [
            {
              id: "c12-eng2-ch2-l1",
              point: "২.১",
              title: "Conditionals, So that, In order that, Lest, It is high time",
              titleBangla: "২.১ 1st, 2nd, 3rd Conditionals, 'Lest + should', 'It is high time + past' নিয়ম",
              summary: "Mastering complex clause connectors, unreal past, subjunctive moods and completions.",
              keywords: ["Conditionals", "It is high time", "Lest", "So that", "Sentence Completion"]
            }
          ]
        },
        {
          id: "c12-eng2-ch3",
          chapterNumber: 3,
          title: "Right Form of Verbs and Subject-Verb Agreement",
          titleBangla: "৩য় অধ্যায়: Right Form of Verbs ও Subject-Verb Agreement",
          lessons: [
            {
              id: "c12-eng2-ch3-l1",
              point: "৩.১",
              title: "Rules of Tense, Voice, Gerund, Participle and Infinitive",
              titleBangla: "৩.১ কাল, বাচ্য, জিরান্ড, পার্টিসিপল ও ইনফিনিটিভের সঠিক রূপ",
              summary: "Subject-verb concord, passive voice verbs in context, causative verbs and modals.",
              keywords: ["Right Form of Verbs", "Subject-Verb Agreement", "Gerund", "Participle"]
            }
          ]
        },
        {
          id: "c12-eng2-ch4",
          chapterNumber: 4,
          title: "Narrative Style (Direct to Indirect Speech)",
          titleBangla: "৪র্থ অধ্যায়: Passage Narration (উক্তি পরিবর্তন)",
          lessons: [
            {
              id: "c12-eng2-ch4-l1",
              point: "৪.১",
              title: "Passage Narration Transformation Rules and Contextual Adjustments",
              titleBangla: "৪.১ অনুচ্ছেদের উক্তি পরিবর্তন: বক্তা ও শ্রোতা শনাক্তকরণ ও ব্যাকরণিক রূপান্তর",
              summary: "Handling assertive, interrogative, optative, and exclamatory dialogue sequences.",
              keywords: ["Passage Narration", "Reported Speech", "Reporting Verb", "Direct Speech"]
            }
          ]
        },
        {
          id: "c12-eng2-ch5",
          chapterNumber: 5,
          title: "Use of Modifiers",
          titleBangla: "৫ম অধ্যায়: Modifiers (Pre-modifiers & Post-modifiers)",
          lessons: [
            {
              id: "c12-eng2-ch5-l1",
              point: "৫.১",
              title: "Pre-modifying and Post-modifying Nouns and Verbs",
              titleBangla: "৫.১ বিশেষ্য ও ক্রিয়াকে বিশেষিত করার কৌশল (Participle, Infinitive, Appositive)",
              summary: "Present participle as pre-modifier, noun adjectives, determiners, intensifiers and prepositional phrases.",
              keywords: ["Modifiers", "Pre-modifier", "Post-modifier", "Appositive", "Intensifier"]
            }
          ]
        },
        {
          id: "c12-eng2-ch6",
          chapterNumber: 6,
          title: "Sentence Connectors & Linkers",
          titleBangla: "৬ষ্ঠ অধ্যায়: Sentence Connectors ও লিঙ্কিং ওয়ার্ডস",
          lessons: [
            {
              id: "c12-eng2-ch6-l1",
              point: "৬.১",
              title: "Logical Flow, Contrast, Addition, Cause-Effect Connectors",
              titleBangla: "৬.১ বাক্যের ধারাবাহিকতা রক্ষায় যোজক শব্দ (Moreover, However, Consequently)",
              summary: "Linking sentences coherently to maintain thought progression and textual cohesion.",
              keywords: ["Sentence Connectors", "Cohesion", "Linking Words", "Transitions"]
            }
          ]
        },
        {
          id: "c12-eng2-ch7",
          chapterNumber: 7,
          title: "Synonyms, Antonyms, Punctuation and Composition",
          titleBangla: "৭ম অধ্যায়: Synonyms & Antonyms, Punctuation ও CV Writing",
          lessons: [
            {
              id: "c12-eng2-ch7-l1",
              point: "৭.১",
              title: "Contextual Vocabulary, Punctuation Capitalization and Job Application with CV",
              titleBangla: "৭.১ সমার্থক ও বিপরীতার্থক শব্দ, বিরাম চিহ্নের প্রয়োগ ও কভার লেটারসহ পূর্ণাঙ্গ CV",
              summary: "Mastering formal communication, job application letters, professional CV layout and formal report writing.",
              keywords: ["Synonyms", "Antonyms", "Punctuation", "CV Writing", "Cover Letter"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-ict-programming",
      code: "ICT-276",
      name: "ICT: Programming & Database Management",
      nameBangla: "তথ্য ও যোগাযোগ প্রযুক্তি (প্রোগ্রামিং ও ডেটাবেজ)",
      group: "General / Compulsory",
      coverColor: "from-sky-600 to-indigo-850",
      chapters: [
        {
          id: "c12-ict-ch5",
          chapterNumber: 5,
          title: "Programming Language (C Programming)",
          titleBangla: "৫ম অধ্যায়: প্রোগ্রামিং ভাষা (সি প্রোগ্রামিং)",
          lessons: [
            {
              id: "c12-ict-ch5-l1",
              point: "৫.১",
              title: "Algorithm, Flowchart, Pseudocode and C Program Structure",
              titleBangla: "৫.১ অ্যালগরিদম, ফ্লোচার্ট, সি প্রোগ্রামের মৌলিক গঠন ও ডেটা টাইপ",
              summary: "হেডার ফাইল, ভেরিয়েবল ঘোষণা, কী-ওয়ার্ড, scanf() ও printf() এর ফরম্যাট স্পেসিফায়ার।",
              keywords: ["সি প্রোগ্রামিং", "অ্যালগরিদম", "ফ্লোচার্ট", "ভেরিয়েবল", "ডেটা টাইপ"]
            },
            {
              id: "c12-ict-ch5-l2",
              point: "৫.২",
              title: "Control Statements: Conditionals (if-else, switch) and Loops (for, while)",
              titleBangla: "৫.২ শর্তযুক্ত সিদ্ধান্ত (if-else, switch-case) ও লুপ (for, while, do-while)",
              summary: "ধারার যোগফল, লিপ-ইয়ার নির্ণয়, মৌলিক সংখ্যা ও ফ্যাক্টোরিয়াল প্রোগ্রামের বাস্তবায়ন।",
              keywords: ["if-else", "for loop", "while loop", "ধারার যোগফল", "লিপ ইয়ার"]
            },
            {
              id: "c12-ict-ch5-l3",
              point: "৫.৩",
              title: "Arrays, User-defined Functions and Strings in C",
              titleBangla: "৫.৩ এক-মাত্রিক অ্যারে, ইউজার ডিফাইন্ড ফাংশন ও স্ট্রিং ম্যানিপুলেশন",
              summary: "অ্যারের উপাদান ইনপুট-আউটপুট, সর্বোচ্চ/সর্বনিম্ন মান নির্ণয় ও ফাংশন কলিং।",
              keywords: ["অ্যারে", "ফাংশন", "স্ট্রিং", "C Language"]
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
              title: "RDBMS Concepts, Primary Key, Foreign Key and Composite Key",
              titleBangla: "৬.১ রিলেশনাল ডেটাবেজ (RDBMS), প্রাইমারি কি, ফরেন কি ও কম্পোজিট কি",
              summary: "ফিল্ড, রেকর্ড, টেবিল রিলেশনশিপ (One-to-One, One-to-Many, Many-to-Many) ও ডেটা টাইপ।",
              keywords: ["DBMS", "RDBMS", "প্রাইমারি কি", "ফরেন কি", "রিলেশনশিপ"]
            },
            {
              id: "c12-ict-ch6-l2",
              point: "৬.২",
              title: "SQL Queries (SELECT, INSERT, UPDATE, DELETE) and Database Security",
              titleBangla: "৬.২ এসকিউএল (SQL) কুয়েরি ও ডেটাবেজ নিরাপত্তা ও ব্যাকআপ",
              summary: "কুয়েরি ভাষা দ্বারা শর্তযুক্ত ডেটা ফিল্টারিং (WHERE, ORDER BY), ইনডেক্সিং ও সুরক্ষা।",
              keywords: ["SQL", "SELECT কুয়েরি", "ইনডেক্সিং", "ডেটাবেজ নিরাপত্তা"]
            }
          ]
        }
      ]
    },

    // ============================================================
    // ২. বিজ্ঞান বিভাগ (Science Group - ২য় পত্র)
    // ============================================================
    {
      id: "c12-phy2",
      code: "PHY-175",
      name: "Physics 2nd Paper",
      nameBangla: "পদার্থবিজ্ঞান ২য় পত্র",
      group: "Science",
      coverColor: "from-blue-700 to-indigo-900",
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
              title: "Zeroth, First & Second Laws of Thermodynamics, Isothermal & Adiabatic Processes",
              titleBangla: "১.১ তাপগতিবিদ্যার ১ম ও ২য় সূত্র, সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়া (PV^γ = c)",
              summary: "অভ্যন্তরীণ শক্তি dQ=dU+dW, কার্নো ইঞ্জিনের কর্মদক্ষতা η=1-(T2/T1) এবং এন্ট্রপির পরিবর্তন (dS=dQ/T)।",
              keywords: ["তাপগতিবিদ্যা", "কার্নো চক্র", "এন্ট্রপি", "রুদ্ধতাপীয় প্রক্রিয়া"]
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
              title: "Coulomb's Law, Electric Field Intensity, Electric Potential and Capacitors",
              titleBangla: "২.১ কুলম্বের সূত্র, তড়িৎ প্রাবল্য, তড়িৎ বিভব ও সমান্তরাল পাত ধারক",
              summary: "তড়িৎ দ্বিমেরু ভ্রামক, গাউসের সূত্র এবং ধারকের শ্রেণি ও সমান্তরাল সমবায় ও সঞ্চিত শক্তি।",
              keywords: ["স্থির তড়িৎ", "কুলম্বের সূত্র", "তড়িৎ বিভব", "ধারকত্ব", "ক্যাপাসিটর"]
            }
          ]
        },
        {
          id: "c12-phy2-ch3",
          chapterNumber: 3,
          title: "Current Electricity",
          titleBangla: "৩য় অধ্যায়: চল তড়িৎ",
          lessons: [
            {
              id: "c12-phy2-ch3-l1",
              point: "৩.১",
              title: "Kirchhoff's Laws, Wheatstone Bridge, Shunt and Potentiometer",
              titleBangla: "৩.১ কার্শফের ১ম ও ২য় সূত্র, হুইটস্টোন ব্রিজ নীতি (P/Q = R/S), সান্ট ও মিটার ব্রিজ",
              summary: "জটিল বর্তনীর তড়িৎ প্রবাহ বিশ্লেষণ, রোধের তাপমাত্রা সহগ ও বিদ্যুৎ বিল হিসাব।",
              keywords: ["কার্শফের সূত্র", "হুইটস্টোন ব্রিজ", "সান্ট", "চল তড়িৎ"]
            }
          ]
        },
        {
          id: "c12-phy2-ch4",
          chapterNumber: 4,
          title: "Magnetic Effects of Electric Current and Magnetism",
          titleBangla: "৪র্থ অধ্যায়: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব",
          lessons: [
            {
              id: "c12-phy2-ch4-l1",
              point: "৪.১",
              title: "Biot-Savart Law, Ampere's Law, Lorentz Force and Earth's Magnetism",
              titleBangla: "৪.১ বায়োট-স্যাভার্ট সূত্র, অ্যাম্পিয়ারের সূত্র, লরেঞ্জ বল ও ভূ-চুম্বকীয় উপাদান",
              summary: "লম্বা সোজা তার ও বৃত্তাকার কুন্ডলীতে চৌম্বক ক্ষেত্র, ভূ-চুম্বকত্বের বিনতি, বিচ্যুতি ও অনুভূমিক উপাংশ।",
              keywords: ["বায়োট-স্যাভার্ট সূত্র", "লরেঞ্জ বল", "ভূ-চুম্বকত্ব", "চৌম্বক ক্ষেত্র"]
            }
          ]
        },
        {
          id: "c12-phy2-ch5",
          chapterNumber: 5,
          title: "Electromagnetic Induction and Alternating Current",
          titleBangla: "৫ম অধ্যায়: তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ",
          lessons: [
            {
              id: "c12-phy2-ch5-l1",
              point: "৫.১",
              title: "Faraday's Laws, Lenz's Law, Self & Mutual Induction, Transformers and AC Circuits",
              titleBangla: "৫.১ ফ্যারাডের সূত্র, লেঞ্জের সূত্র, স্বকীয় ও পারস্পরিক আবেশ এবং ট্রান্সফরমার",
              summary: "আবিষ্ট তড়িচ্চালক বল, স্টেপ-আপ ও স্টেপ-ডাউন ট্রান্সফরমার এবং পরিবর্তী প্রবাহের RMS মান।",
              keywords: ["তাড়িতচৌম্বকীয় আবেশ", "ফ্যারাডের সূত্র", "লেঞ্জের সূত্র", "ট্রান্সফরমার"]
            }
          ]
        },
        {
          id: "c12-phy2-ch6",
          chapterNumber: 6,
          title: "Geometrical Optics",
          titleBangla: "৬ষ্ঠ অধ্যায়: জ্যামিতিক আলোকবিজ্ঞান",
          lessons: [
            {
              id: "c12-phy2-ch6-l1",
              point: "৬.১",
              title: "Refraction through Prisms, Lens Maker's Formula and Optical Instruments",
              titleBangla: "৬.১ প্রিজমে প্রতিসরণ ও ন্যূনতম বিচ্যুতি কোণ, লেন্স প্রস্তুতকারকের সূত্র ও অণুবীক্ষণ যন্ত্র",
              summary: "গোলীয় তলে আলোর প্রতিসরণ, লেন্সের ক্ষমতা ও জটিল অণুবীক্ষণ ও দূরবীক্ষণ যন্ত্রের বিবর্ধন।",
              keywords: ["প্রিজম", "লেন্স প্রস্তুতকারক সূত্র", "অণুবীক্ষণ যন্ত্র", "বিচ্যুতি কোণ"]
            }
          ]
        },
        {
          id: "c12-phy2-ch7",
          chapterNumber: 7,
          title: "Physical Optics",
          titleBangla: "৭ম অধ্যায়: ভৌত আলোকবিজ্ঞান",
          lessons: [
            {
              id: "c12-phy2-ch7-l1",
              point: "৭.১",
              title: "Huygens' Principle, Young's Double Slit Experiment, Diffraction & Polarization",
              titleBangla: "৭.১ হাইগেনসের নীতি, ইয়ং-এর দ্বি-চির ব্যতিচার পরীক্ষা, আলোর অপবর্তন ও সমবর্তন",
              summary: "গঠনমূলক ও ধ্বংসাত্মক ব্যতিচারের শর্ত, ডোরার প্রস্থ নির্ণয় ও গ্রেটিং দ্বারা তরঙ্গদৈর্ঘ্য পরিমাপ।",
              keywords: ["ভৌত আলোকবিজ্ঞান", "ইয়ং-এর দ্বি-চির", "ব্যতিচার", "অপবর্তন", "সমবর্তন"]
            }
          ]
        },
        {
          id: "c12-phy2-ch8",
          chapterNumber: 8,
          title: "Introduction to Modern Physics",
          titleBangla: "৮ম অধ্যায়: আধুনিক পদার্থবিজ্ঞানের সূচনা",
          lessons: [
            {
              id: "c12-phy2-ch8-l1",
              point: "৮.১",
              title: "Special Relativity: Length Contraction, Time Dilation & Mass-Energy Equivalence",
              titleBangla: "৮.১ বিশেষ আপেক্ষিকতা তত্ত্ব: কাল দীর্ঘায়ন, দৈর্ঘ্য সংকোচন, ভর বৃদ্ধি ও E=mc²",
              summary: "আইনস্টাইনের স্বীকার্যসমূহ, লরেঞ্জ রূপান্তর ও মেসন কণার আয়ুষ্কাল গণনা।",
              keywords: ["আপেক্ষিকতা", "কাল দীর্ঘায়ন", "দৈর্ঘ্য সংকোচন", "E=mc²"]
            },
            {
              id: "c12-phy2-ch8-l2",
              point: "৮.২",
              title: "Photoelectric Effect, Einstein's Equation and Compton Effect",
              titleBangla: "৮.২ ফটোইলেক্ট্রিক ক্রিয়া, আইনস্টাইনের ফটোতড়িৎ সমীকরণ ও ডি ব্রগলির তরঙ্গদৈর্ঘ্য",
              summary: "সূচনা কম্পাঙ্ক, কার্য-অপেক্ষক, নিঃসৃত ইলেকট্রনের সর্বোচ্চ গতিশক্তি ও তরঙ্গ-কণা দ্বৈততা।",
              keywords: ["ফটোইলেক্ট্রিক ক্রিয়া", "কার্য-অপেক্ষক", "ডি ব্রগলি তরঙ্গ", "ফোটন"]
            }
          ]
        },
        {
          id: "c12-phy2-ch9",
          chapterNumber: 9,
          title: "Atomic Models and Nuclear Physics",
          titleBangla: "৯ম অধ্যায়: পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান",
          lessons: [
            {
              id: "c12-phy2-ch9-l1",
              point: "৯.১",
              title: "Rutherford & Bohr Models, Radioactive Decay Law, Half-Life and Nuclear Fission",
              titleBangla: "৯.১ বোর পরমাণু মডেল, তেজস্ক্রিয় ক্ষয় সূত্র N=N₀e^(-λt), অর্ধায়ু ও নিউক্লিয়ার ফিশন",
              summary: "ক্ষয় ধ্রুবক ও অর্ধায়ুর সম্পর্ক T_1/2 = 0.693/λ, ভর ত্রুটি ও বন্ধন শক্তি গণনা।",
              keywords: ["তেজস্ক্রিয়তা", "অর্ধায়ু", "ক্ষয় ধ্রুবক", "নিউক্লিয়ার ফিশন", "বন্ধন শক্তি"]
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
              title: "p-n Junction Diode, Rectifiers, Transistors and Basic Logic Gates",
              titleBangla: "১০.১ p-n জাংশন ডায়োড, অর্ধতরঙ্গ ও পূর্ণতরঙ্গ রেকটিফায়ার, ট্রানজিস্টর ও লজিক গেট",
              summary: "ফরওয়ার্ড ও রিভার্স বায়াস, ট্রানজিস্টরের বিবর্ধক ক্রিয়া এবং মৌলিক ডিজিটাল বর্তনী।",
              keywords: ["সেমিকন্ডাক্টর", "ডায়োড", "রেকটিফায়ার", "ট্রানজিস্টর", "অ্যামপ্লিফায়ার"]
            }
          ]
        },
        {
          id: "c12-phy2-ch11",
          chapterNumber: 11,
          title: "Astronomy",
          titleBangla: "১১তম অধ্যায়: জ্যোতির্বিজ্ঞান",
          lessons: [
            {
              id: "c12-phy2-ch11-l1",
              point: "১১.১",
              title: "Big Bang Theory, Stellar Evolution, Black Holes and Hubble's Law",
              titleBangla: "১১.১ মহাবিশ্বের উৎপত্তি (বিগ ব্যাং), নক্ষত্রের জীবনচক্র, কৃষ্ণগহ্বর ও হাবলের সূত্র",
              summary: "সুপারনোভা বিস্ফোরণ, শ্বেত বামন, নিউট্রন স্টার ও মহাবিশ্বের সম্প্রসারণশীলতা।",
              keywords: ["জ্যোতির্বিজ্ঞান", "বিগ ব্যাং", "কৃষ্ণগহ্বর", "হাবলের সূত্র", "সুপারনোভা"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-chem2",
      code: "CHE-177",
      name: "Chemistry 2nd Paper",
      nameBangla: "রসায়ন ২য় পত্র",
      group: "Science",
      coverColor: "from-teal-700 to-emerald-900",
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
              title: "Gas Laws, Dalton's Partial Pressure, Graham's Diffusion & Real Gases",
              titleBangla: "১.১ ডাল্টনের আংশিক চাপ সূত্র, গ্রাহামের ব্যাপন সূত্র ও ভ্যান ডার ওয়ালস সমীকরণ",
              summary: "আদর্শ গ্যাস বিচ্যুতি, গ্রিনহাউস গ্যাসের ভূমিকা ও ওজন স্তর ক্ষয়কারী সিএফসি (CFC)।",
              keywords: ["ডাল্টনের সূত্র", "গ্রাহামের ব্যাপন", "ভ্যান ডার ওয়ালস", "গ্রিনহাউস প্রভাব"]
            },
            {
              id: "c12-chem2-ch1-l2",
              point: "১.২",
              title: "Water Pollutants: BOD, COD, TDS, Heavy Metals and Acid Rain",
              titleBangla: "১.২ পানির বিশুদ্ধতার মানদণ্ড: BOD, COD, TDS, ভারী ধাতু (As, Cr, Pb) ও অ্যাসিড বৃষ্টি",
              summary: "লুইস অ্যাসিড-ক্ষার ধারণা এবং শিল্প বর্জ্যে দূষিত পানির গুণগত প্যারামিটার বিশ্লেষণ।",
              keywords: ["BOD", "COD", "ভারী ধাতু", "অ্যাসিড বৃষ্টি", "আর্সেনিক দূষণ"]
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
              title: "Hydrocarbons, Isomerism (Structural, Geometric, Optical) and Reaction Mechanisms",
              titleBangla: "২.১ সমাণুতা (গাঠনিক, জ্যামিতিক সিস-ট্রান্স, আলোক সক্রিয় সমাণুতা) ও বিক্রিয়া কৌশল (SN1, SN2)",
              summary: "চিরাল কার্বন, কাইরালিটি, এনানশিওমার এবং নিউক্লিওফিলিক প্রতিস্থাপন ও অপসারণ বিক্রিয়া।",
              keywords: ["জৈব রসায়ন", "সমাণুতা", "চিরাল কার্বন", "SN1 ও SN2", "সিস-ট্রান্স"]
            },
            {
              id: "c12-chem2-ch2-l2",
              point: "২.২",
              title: "Aromaticity (Hückel's Rule), Benzene, Phenol, Aldehydes, Ketones & Amines",
              titleBangla: "২.২ হাকেল নীতি, বেনজিনের ইলেকট্রোফিলিক প্রতিস্থাপন, ফেনল, কার্বনিল যৌগ ও অ্যামিন",
              summary: "টলেন বিকারক ও ফেহলিং দ্রবণ দ্বারা অ্যালডিহাইড-কিটোন পার্থক্য এবং ডায়াজোনিয়াম লবণ।",
              keywords: ["হাকেল নীতি", "বেনজিন", "ফেনল", "টলেন বিকারক", "কার্বক্সিলিক অ্যাসিড"]
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
              title: "Molarity, PPM, Redox Balancing, Acid-Base Titration & Beer-Lambert Law",
              titleBangla: "৩.১ মোলারিটি, PPM, জারণ-বিজারণ সমতাকরণ (আয়ন-ইলেকট্রন পদ্ধতি) ও টাইট্রেশন",
              summary: "KMnO4 ও K2Cr2O7 দ্বারা টাইট্রেশন, মোলার ঘনমাত্রা এবং বিয়ার-ল্যাম্বার্ট বর্ণালীমিতি সূত্র।",
              keywords: ["মোলারিটি", "PPM", "জারণ-বিজারণ", "টাইট্রেশন", "বিয়ার-ল্যাম্বার্ট সূত্র"]
            }
          ]
        },
        {
          id: "c12-chem2-ch4",
          chapterNumber: 4,
          title: "Electrochemistry",
          titleBangla: "৪র্থ অধ্যায়: তড়িৎ রসায়ন",
          lessons: [
            {
              id: "c12-chem2-ch4-l1",
              point: "৪.১",
              title: "Faraday's Laws of Electrolysis, Galvanic Cells, Nernst Equation & Batteries",
              titleBangla: "৪.১ ফ্যারাডের তড়িৎ বিশ্লেষণ সূত্র (W=ZIt), গ্যালভানিক কোষ, নার্নস্ট সমীকরণ ও ব্যাটারি",
              summary: "তড়িৎদ্বার বিভব E_cell, লবণ সেতু, লেড-অ্যাসিড সঞ্চয়ী ব্যাটারি ও হাইড্রোজেন ফুয়েল সেল।",
              keywords: ["তড়িৎ রসায়ন", "ফ্যারাডের সূত্র", "নার্নস্ট সমীকরণ", "গ্যালভানিক কোষ", "ফুয়েল সেল"]
            }
          ]
        },
        {
          id: "c12-chem2-ch5",
          chapterNumber: 5,
          title: "Economic Chemistry",
          titleBangla: "৫ম অধ্যায়: অর্থনৈতিক রসায়ন",
          lessons: [
            {
              id: "c12-chem2-ch5-l1",
              point: "৫.১",
              title: "Urea Fertilizer, Cement, Glass Manufacturing, Leather Tanning & ETP",
              titleBangla: "৫.১ ইউরিয়া সার কারখানা, সিমেন্ট ও কাচ উৎপাদন, চামড়া ট্যানিং ও ইটিপি (ETP)",
              summary: "প্রাকৃতিক গ্যাস থেকে ইউরিয়া উৎপাদন, পোর্টল্যান্ড সিমেন্টের উপাদান ও পরিবেশবান্ধব বর্জ্য শোধন।",
              keywords: ["ইউরিয়া সার", "সিমেন্ট শিল্প", "চামড়া ট্যানিং", "ইটিপি", "অর্থনৈতিক রসায়ন"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-hmath2",
      code: "HMA-266",
      name: "Higher Mathematics 2nd Paper",
      nameBangla: "উচ্চতর গণিত ২য় পত্র",
      group: "Science",
      coverColor: "from-indigo-700 to-purple-900",
      chapters: [
        {
          id: "c12-hm2-ch1",
          chapterNumber: 1,
          title: "Real Numbers and Inequalities",
          titleBangla: "১ম অধ্যায়: বাস্তব সংখ্যা ও অসমতা",
          lessons: [
            {
              id: "c12-hm2-ch1-l1",
              point: "১.১",
              title: "Axioms of Real Numbers, Absolute Values and Solutions of Linear Inequalities",
              titleBangla: "১.১ বাস্তব সংখ্যার স্বীকার্য, সুপ্রিমাম-ইনফিমাম, পরমমান চিহ্নযুক্ত অসমতার সমাধান",
              summary: "সংখ্যারেখায় ব্যবধি (Interval) প্রদর্শন ও অসমতার বিভিন্ন বৈশিষ্ট্য প্রমাণ।",
              keywords: ["বাস্তব সংখ্যা", "পরমমান", "অসমতা", "সুপ্রিমাম", "ইনফিমাম"]
            }
          ]
        },
        {
          id: "c12-hm2-ch2",
          chapterNumber: 2,
          title: "Binomial Expansion",
          titleBangla: "২য় অধ্যায়: দ্বিপদী বিস্তৃতি",
          lessons: [
            {
              id: "c12-hm2-ch2-l1",
              point: "২.১",
              title: "Pascal's Triangle, General Term, Middle Term and Negative/Fractional Exponents",
              titleBangla: "২.১ দ্বিপদী উপপাদ্য, সাধারণ পদ (r+1)তম পদ, মধ্যপদ ও ঋণাত্মক/ভগ্নাংশ ঘাতের বিস্তৃতি",
              summary: "(a+x)^n এর বিস্তৃতি, x-বর্জিত পদ নির্ণয় ও ধারাভিত্তিক যোগফল প্রমাণ।",
              keywords: ["দ্বিপদী বিস্তৃতি", "সাধারণ পদ", "মধ্যপদ", "প্যাসকেলের ত্রিভুজ"]
            }
          ]
        },
        {
          id: "c12-hm2-ch3",
          chapterNumber: 3,
          title: "Complex Numbers",
          titleBangla: "৩য় অধ্যায়: জটিল সংখ্যা",
          lessons: [
            {
              id: "c12-hm2-ch3-l1",
              point: "৩.১",
              title: "Modulus, Argument, Polar Form, Cube Roots of Unity & De Moivre's Theorem",
              titleBangla: "৩.১ মডুলাস, আর্গুমেন্ট, পোলার আকৃতি, এককের কাল্পনিক ঘনমূল (ω) ও ডিময়ভারের উপপাদ্য",
              summary: "জটিল সংখ্যার বর্গমূল নির্ণয়, 1+ω+ω²=0 এর প্রয়োগ ও সঞ্চারপথের সমীকরণ।",
              keywords: ["জটিল সংখ্যা", "মডুলাস", "আর্গুমেন্ট", "এককের ঘনমূল", "ডিময়ভারের উপপাদ্য"]
            }
          ]
        },
        {
          id: "c12-hm2-ch4",
          chapterNumber: 4,
          title: "Polynomials and Polynomial Equations",
          titleBangla: "৪র্থ অধ্যায়: বহুপদী ও বহুপদী সমীকরণ",
          lessons: [
            {
              id: "c12-hm2-ch4-l1",
              point: "৪.১",
              title: "Quadratic & Cubic Equations, Nature of Roots and Relation between Roots & Coefficients",
              titleBangla: "৪.১ দ্বিঘাত ও ত্রিঘাত সমীকরণের মূল ও সহগের সম্পর্ক, নিশ্চয়ক (Discriminant) ও মূলের প্রকৃতি",
              summary: "মূল দেওয়া থাকলে সমীকরণ গঠন ও সাধারণ মূল থাকার গাণিতিক শর্তাবলী।",
              keywords: ["বহুপদী", "দ্বিঘাত সমীকরণ", "নিশ্চয়ক", "মূল ও সহগ"]
            }
          ]
        },
        {
          id: "c12-hm2-ch6",
          chapterNumber: 6,
          title: "Conics",
          titleBangla: "৬ষ্ঠ অধ্যায়: কণিক (পরাবৃত্ত, উপবৃত্ত, অধিবৃত্ত)",
          lessons: [
            {
              id: "c12-hm2-ch6-l1",
              point: "৬.১",
              title: "Parabola, Ellipse and Hyperbola: Equations, Focus, Directrix and Latus Rectum",
              titleBangla: "৬.১ পরাবৃত্ত (y²=4ax), উপবৃত্ত ও অধিবৃত্তের উপকেন্দ্র, নিয়ামক রেখা ও উপকেন্দ্রিক লম্বের দৈর্ঘ্য",
              summary: "উৎকেন্দ্রিকতা e এর মান (e=1, e<1, e>1), শীর্ষবিন্দু ও প্রমাণ আকারের সমীকরণ নির্ণয়।",
              keywords: ["কণিক", "পরাবৃত্ত", "উপবৃত্ত", "অধিবৃত্ত", "উৎকেন্দ্রিকতা"]
            }
          ]
        },
        {
          id: "c12-hm2-ch7",
          chapterNumber: 7,
          title: "Inverse Trigonometric Functions and Trigonometric Equations",
          titleBangla: "৭ম অধ্যায়: বিপরীত ত্রিকোণমিতিক ফাংশন ও সমীকরণ",
          lessons: [
            {
              id: "c12-hm2-ch7-l1",
              point: "৭.১",
              title: "Inverse Functions Principal Values and General Solutions of Trigonometric Equations",
              titleBangla: "৭.১ sin⁻¹x + cos⁻¹x = π/2, tan⁻¹x রূপান্তর এবং ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান",
              summary: "θ এর সাধারণ মান (যেমন sin θ = 0 হলে θ = nπ) এবং নির্দিষ্ট ব্যবধিতে মূল নির্ণয়।",
              keywords: ["বিপরীত ত্রিকোণমিতি", "প্রধান মান", "ত্রিকোণমিতিক সমীকরণ", "সাধারণ সমাধান"]
            }
          ]
        },
        {
          id: "c12-hm2-ch8",
          chapterNumber: 8,
          title: "Statics",
          titleBangla: "৮ম অধ্যায়: স্থিতিবিদ্যা",
          lessons: [
            {
              id: "c12-hm2-ch8-l1",
              point: "৮.১",
              title: "Equilibrium of Forces, Lami's Theorem and Parallel Forces (Like & Unlike)",
              titleBangla: "৮.১ বলের সাম্যাবস্থা, লামির উপপাদ্য, সদৃশ ও অসদৃশ সমান্তরাল বল এবং যুগল",
              summary: "একটি বিন্দুতে ক্রিয়ারত বলত্রয়ের ভারসাম্য ও ত্রিভুজ বল সূত্রের সাহায্যে সমাধান।",
              keywords: ["স্থিতিবিদ্যা", "লামির উপপাদ্য", "সমান্তরাল বল", "সাম্যাবস্থা"]
            }
          ]
        },
        {
          id: "c12-hm2-ch9",
          chapterNumber: 9,
          title: "Motion of Particles in a Plane",
          titleBangla: "৯ম অধ্যায়: সমতলে বস্তুকণার গতি",
          lessons: [
            {
              id: "c12-hm2-ch9-l1",
              point: "৯.১",
              title: "Rectilinear Motion under Uniform Acceleration, Vertical Motion and Projectiles",
              titleBangla: "৯.১ সরলরেখায় সমত্বরণে গতি (v=u+at, s=ut+½at²), উলম্ব গতি ও প্রক্ষেপকের পাল্লা",
              summary: "নির্দিষ্ট উচ্চতা থেকে নিক্ষিপ্ত বস্তু, দুটি ট্রেনের মুখোমুখি সংঘাত ও আপেক্ষিক বেগ।",
              keywords: ["সমত্বরণ", "উলম্ব গতি", "প্রক্ষেপক", "আপেক্ষিক বেগ"]
            }
          ]
        },
        {
          id: "c12-hm2-ch10",
          chapterNumber: 10,
          title: "Measures of Dispersion and Probability",
          titleBangla: "১০ম অধ্যায়: বিস্তার পরিমাপ ও সম্ভাবনা",
          lessons: [
            {
              id: "c12-hm2-ch10-l1",
              point: "১০.১",
              title: "Standard Deviation, Variance and Laws of Probability (Addition & Multiplication)",
              titleBangla: "১০.১ গড় ব্যবধান, পরিমিত ব্যবধান (σ), ভেদাঙ্ক ও সম্ভাবনার যোগ ও গুণন সূত্র",
              summary: "মুদ্রা ও ছক্কা নিক্ষেপ পরীক্ষা, শর্তাধীন সম্ভাবনা ও বাস্তবভিত্তিক সম্ভাবনা গণনা।",
              keywords: ["পরিমিত ব্যবধান", "ভেদাঙ্ক", "সম্ভাবনা", "যোগ সূত্র", "গুণন সূত্র"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-bio2",
      code: "BIO-179",
      name: "Biology 2nd Paper (Zoology)",
      nameBangla: "জীববিজ্ঞান ২য় পত্র (প্রাণিবিজ্ঞান)",
      group: "Science",
      coverColor: "from-green-700 to-emerald-900",
      chapters: [
        {
          id: "c12-bio2-ch1",
          chapterNumber: 1,
          title: "Diversity and Classification of Animals",
          titleBangla: "১ম অধ্যায়: প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস",
          lessons: [
            {
              id: "c12-bio2-ch1-l1",
              point: "১.১",
              title: "Bases of Classification (Symmetry, Coelom, Cleavage) & Major Phyla",
              titleBangla: "১.১ শ্রেণিবিন্যাসের ভিত্তি (প্রতিসাম্য, সিলোম, খণ্ডকায়ন) ও নন-কর্ডাটা পর্বসমূহ",
              summary: "পরিফেরা, নিডারিয়া, প্লাটিহেলমিনথিস, নেমাটোডা, অ্যানেলিডা, আর্থ্রোপোডা, মলাস্কা, একাইনোডার্মাটা পর্বের অনন্য বৈশিষ্ট্য।",
              keywords: ["শ্রেণিবিন্যাস", "সিলোম", "প্রতিসাম্য", "আর্থ্রোপোডা", "মলাস্কা"]
            },
            {
              id: "c12-bio2-ch1-l2",
              point: "১.২",
              title: "Phylum Chordata and Its Classes (Chondrichthyes, Osteichthyes, Mammalia)",
              titleBangla: "১.২ কর্ডাটা পর্বের বৈশিষ্ট্য, ইউরোকর্ডাটা, সেফালোকর্ডাটা ও মেরুদণ্ডী প্রাণীর শ্রেণিবিন্যাস",
              summary: "কনড্রিকথিস, অস্টিকথিস, উভচর, সরীসৃপ, পক্ষী ও স্তন্যপায়ী শ্রেণির তুলনামূলক পার্থক্য।",
              keywords: ["কর্ডাটা", "মেরুদণ্ডী", "নটোকর্ড", "স্তন্যপায়ী"]
            }
          ]
        },
        {
          id: "c12-bio2-ch2",
          chapterNumber: 2,
          title: "Introduction to Animal Models (Hydra, Grasshopper, Rui Fish)",
          titleBangla: "২য় অধ্যায়: প্রাণীর পরিচিতি (হাইড্রা, ঘাসফড়িং ও রুই মাছ)",
          lessons: [
            {
              id: "c12-bio2-ch2-l1",
              point: "২.১",
              title: "Hydra Anatomy, Nematocyst Types, Digestion, Locomotion and Symbiosis",
              titleBangla: "২.১ হাইড্রার বহিঃত্বক ও অন্তঃত্বক, নিডোসাইট ও নেমাটোসিস্টের প্রকারভেদ, চলন ও মিথোজীবিতা",
              summary: "লুপিং, সামারসল্টিং চলন এবং জুওক্লোরেলা শৈবালের সাথে হাইড্রার মিথোজীবী সম্পর্ক।",
              keywords: ["হাইড্রা", "নেমাটোসিস্ট", "নিডোসাইট", "মিথোজীবিতা", "সামারসল্টিং"]
            },
            {
              id: "c12-bio2-ch2-l2",
              point: "২.২",
              title: "Grasshopper Mouthparts, Ommatidium, Metamorphosis & Rui Fish Anatomy",
              titleBangla: "২.২ ঘাসফড়িংয়ের মুখোপাঙ্গ, ওমাটিডিয়াম (দর্শন কৌশল), রূপান্তর ও রুই মাছের ফুলকা ও পটকা",
              summary: "মোজাইক প্রতিবিম্ব, অসম্পূর্ণ রূপান্তর (নিম্ফ) এবং রুই মাছের রক্ত সংবহনতন্ত্র।",
              keywords: ["ঘাসফড়িং", "ওমাটিডিয়াম", "রূপান্তর", "রুই মাছ", "পটকা"]
            }
          ]
        },
        {
          id: "c12-bio2-ch3",
          chapterNumber: 3,
          title: "Human Physiology: Digestion and Absorption",
          titleBangla: "৩য় অধ্যায়: মানব শারীরতত্ত্ব: পরিপাক ও শোষণ",
          lessons: [
            {
              id: "c12-bio2-ch3-l1",
              point: "৩.১",
              title: "Enzymatic Digestion of Carbohydrates, Proteins and Lipids in Alimentary Canal",
              titleBangla: "৩.১ মুখগহ্বর, পাকস্থলী ও ক্ষুদ্রান্ত্রে শর্করা, আমিষ ও চর্বির রাসায়নিক পরিপাক",
              summary: "টায়ালিন, পেপসিন, ট্রিপসিন, লাইপেসের ক্রিয়া এবং ক্ষুদ্রান্ত্রের ভিলাই দ্বারা খাদ্য শোষণ।",
              keywords: ["পরিপাক", "পেপসিন", "ট্রিপসিন", "যকৃত", "অগ্ন্যাশয়"]
            },
            {
              id: "c12-bio2-ch3-l2",
              point: "৩.২",
              title: "Liver as Metabolic Factory and Pancreas as Mixed Gland",
              titleBangla: "৩.২ যকৃতের সঞ্চয়ী ও বিপাকীয় ভূমিকা এবং অগ্ন্যাশয়ের হরমোন ও এনজাইম নিঃসরণ",
              summary: "গ্লাইকোজেনেসিস, ডিমিনেশন, পিত্তরস উৎপাদন ও রক্তে শর্করার মাত্রা নিয়ন্ত্রণ।",
              keywords: ["যকৃত", "গ্লাইকোজেনেসিস", "ইনসুলিন", "গ্লুকাগন"]
            }
          ]
        },
        {
          id: "c12-bio2-ch4",
          chapterNumber: 4,
          title: "Human Physiology: Blood and Circulation",
          titleBangla: "৪র্থ অধ্যায়: মানব শারীরতত্ত্ব: রক্ত ও সংবহন",
          lessons: [
            {
              id: "c12-bio2-ch4-l1",
              point: "৪.১",
              title: "Heart Anatomy, Cardiac Cycle, Blood Pressure, Baroreceptors & Blood Clotting",
              titleBangla: "৪.১ হৃৎপিণ্ডের গঠন, কার্ডিয়াক চক্র, রক্তচাপ ও রক্ত তঞ্চনের ১৩টি ফ্যাক্টর",
              summary: "অলিন্দ ও নিলয়ের সিস্টোল-ডায়াস্টোল, মায়োজেনিক নিয়ন্ত্রণ (SA নোড, AV নোড) ও ইসিজি (ECG)।",
              keywords: ["হৃৎপিণ্ড", "কার্ডিয়াক চক্র", "SA নোড", "পেসমেকার", "রক্ত তঞ্চন"]
            },
            {
              id: "c12-bio2-ch4-l2",
              point: "৪.২",
              title: "Cardiovascular Diseases, Angioplasty, Pacemaker and Bypass Surgery",
              titleBangla: "৪.২ করোনারি হৃদরোগ, হার্ট অ্যাটাক, এনজিওপ্লাস্টি ও ওপেন হার্ট বাইপাস সার্জারি",
              summary: "অ্যাথেরোস্ক্লেরোসিস, করোনারি স্টেন্টিং (রিং পরানো) ও কৃত্রিম পেসমেকার প্রতিস্থাপন।",
              keywords: ["হার্ট অ্যাটাক", "এনজিওপ্লাস্টি", "বাইপাস সার্জারি", "স্টেন্ট"]
            }
          ]
        },
        {
          id: "c12-bio2-ch5",
          chapterNumber: 5,
          title: "Human Physiology: Breathing and Respiration",
          titleBangla: "৫ম অধ্যায়: মানব শারীরতত্ত্ব: শ্বাসক্রিয়া ও শ্বসন",
          lessons: [
            {
              id: "c12-bio2-ch5-l1",
              point: "৫.১",
              title: "Respiratory Mechanism, Alveoli, Oxygen and Carbon Dioxide Transport",
              titleBangla: "৫.১ ফুসফুস ও অ্যালভিওলাসের গঠন, অক্সিহিমোগ্লোবিন ও রক্তে CO₂ পরিবহন কৌশল",
              summary: "বাইকার্বনেট যৌগ, কার্বামিনো যৌগ ও দ্রবীভূত রূপে গ্যাসীয় আদান-প্রদান এবং ধূমপানের ক্ষতি।",
              keywords: ["শ্বাসক্রিয়া", "অ্যালভিওলাস", "অক্সিহিমোগ্লোবিন", "হেমোডায়ালাইসিস"]
            }
          ]
        },
        {
          id: "c12-bio2-ch6",
          chapterNumber: 6,
          title: "Human Physiology: Excretion and Osmoregulation",
          titleBangla: "৬ষ্ঠ অধ্যায়: মানব শারীরতত্ত্ব: বর্জ্য ও নিষ্কাশন",
          lessons: [
            {
              id: "c12-bio2-ch6-l1",
              point: "৬.১",
              title: "Nephron Anatomy, Urine Formation, Osmoregulation & Hemodialysis",
              titleBangla: "৬.১ বৃক্কের নেফ্রনের গঠন, মূত্র উৎপাদন (ম্যালপিজিয়ান বডি) ও কিডনি ডায়ালাইসিস",
              summary: "আল্ট্রাফিল্ট্রেশন, পুনঃশোষণ ও ক্ষরণ; ADH হরমোন দ্বারা পানির ভারসাম্য রক্ষা ও অঙ্গ প্রতিস্থাপন।",
              keywords: ["বৃক্ক", "নেফ্রন", "ইউরিয়া", "অসমোরেগুলেশন", "ডায়ালাইসিস"]
            }
          ]
        },
        {
          id: "c12-bio2-ch7",
          chapterNumber: 7,
          title: "Human Physiology: Locomotion and Movement",
          titleBangla: "৭ম অধ্যায়: মানব শারীরতত্ত্ব: চলন ও অঙ্গচালনা",
          lessons: [
            {
              id: "c12-bio2-ch7-l1",
              point: "৭.১",
              title: "Human Skeleton, Synovial Joints, Muscle Contraction Sliding Filament Theory",
              titleBangla: "৭.১ অক্ষীয় ও উপাঙ্গীয় কঙ্কাল, সাইনোভিয়াল অস্থিসন্ধি ও পেশি সংকোচনের স্লাইডিং ফিলামেন্ট তত্ত্ব",
              summary: "অ্যাকটিন ও মায়োসিন ফিলামেন্ট, এটিপির ভূমিকা, টেন্ডন, লিগামেন্ট ও অস্থিভঙ্গ ব্যবস্থাপনা।",
              keywords: ["কঙ্কালতন্ত্র", "সাইনোভিয়াল সন্ধি", "স্লাইডিং ফিলামেন্ট", "অ্যাকটিন", "মায়োসিন"]
            }
          ]
        },
        {
          id: "c12-bio2-ch8",
          chapterNumber: 8,
          title: "Human Physiology: Coordination and Control",
          titleBangla: "৮ম অধ্যায়: মানব শারীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ",
          lessons: [
            {
              id: "c12-bio2-ch8-l1",
              point: "৮.১",
              title: "Brain Anatomy, Reflex Arc, Eye Mechanism and Ear Equilibrium",
              titleBangla: "৮.১ মস্তিষ্ক (সেরিব্রাম, সেরিবেলাম), প্রতিবর্ত ক্রিয়া, চোখের দর্শন কৌশল ও কানের ভারসাম্য রক্ষা",
              summary: "রড ও কোণ কোষ, প্রতিবিম্ব গঠন, ককলিয়া ও অর্ধবৃত্তাকার নালীর কার্যপদ্ধতি।",
              keywords: ["সেরিব্রাম", "প্রতিবর্ত ক্রিয়া", "রেটিনা", "ককলিয়া", "অন্তঃকর্ণ"]
            }
          ]
        },
        {
          id: "c12-bio2-ch9",
          chapterNumber: 9,
          title: "Continuity of Human Life",
          titleBangla: "৯ম অধ্যায়: মানব জীবনের ধারাবাহিকতা",
          lessons: [
            {
              id: "c12-bio2-ch9-l1",
              point: "৯.১",
              title: "Spermatogenesis, Oogenesis, Fertilization, Embryonic Development and Placenta",
              titleBangla: "৯.১ শুক্রাণু ও ডিম্বাণু জনন, নিষেক, ভ্রূণের স্তর গঠন ও অমরা (Placenta)-র কাজ",
              summary: "মোরুলা, ব্লাস্টুলা, গ্যাস্ট্রুলা ধাপ এবং ভ্রূণের পুষ্টি ও বর্জ্য অপসারণে ওমরার ভূমিকা।",
              keywords: ["স্পার্মাটোজেনেসিস", "উওজেনেসিস", "নিষেক", "অমরা", "ভ্রূণ"]
            }
          ]
        },
        {
          id: "c12-bio2-ch10",
          chapterNumber: 10,
          title: "Defense of Human Body (Immunity)",
          titleBangla: "১০ম অধ্যায়: মানবদেহের প্রতিরক্ষা (ইমিউনিটি)",
          lessons: [
            {
              id: "c12-bio2-ch10-l1",
              point: "১০.১",
              title: "First, Second and Third Lines of Defense, Antibody Structure & Vaccines",
              titleBangla: "১০.১ ১ম, ২য় ও ৩য় প্রতিরক্ষা স্তর, অ্যান্টিবডির গঠন (Y-আকৃতি) ও ভ্যাকসিনের ভূমিকা",
              summary: "ত্বক, ম্যাক্রোফেজ, ফ্যাগোসাইটোসিস, বি ও টি লিম্ফোসাইট এবং সহজাত বনাম অর্জিত অনাক্রম্যতা।",
              keywords: ["ইমিউনিটি", "অ্যান্টিবডি", "ফ্যাগোসাইটোসিস", "টিকা", "লিম্ফোসাইট"]
            }
          ]
        },
        {
          id: "c12-bio2-ch11",
          chapterNumber: 11,
          title: "Genetics and Evolution",
          titleBangla: "১১তম অধ্যায়: জিনতত্ত্ব ও বিবর্তন",
          lessons: [
            {
              id: "c12-bio2-ch11-l1",
              point: "১১.১",
              title: "Mendel's Laws, Incomplete Dominance, Epistasis and Sex-Linked Inheritance",
              titleBangla: "১১.১ মেন্ডেলের ১ম ও ২য় সূত্র, অসম্পূর্ণ প্রকটতা (১:২:১), এপিস্ট্যাসিস ও সেক্স-লিংকড রোগ",
              summary: "লাল-সবুজ বর্ণান্ধতা, হিমোফিলিয়া এবং ডারউইনের প্রাকৃতিক নির্বাচন দ্বারা বিবর্তন মতবাদ।",
              keywords: ["মেন্ডেলের সূত্র", "এপিস্ট্যাসিস", "হিমোফিলিয়া", "বর্ণান্ধতা", "ডারউইনবাদ"]
            }
          ]
        },
        {
          id: "c12-bio2-ch12",
          chapterNumber: 12,
          title: "Animal Behaviour",
          titleBangla: "১২তম অধ্যায়: প্রাণীর আচরণ",
          lessons: [
            {
              id: "c12-bio2-ch12-l1",
              point: "১২.১",
              title: "Innate Behaviour (Taxis, Reflex, FAP), Learned Behaviour and Bird Migration",
              titleBangla: "১২.১ সহজাত আচরণ (ট্যাক্সিস, এফএপি), অর্জিত আচরণ ও পরিযায়ী পাখির অভিপ্রায়ন",
              summary: "টিনবার্জেন ও লরেঞ্জের গবেষণা, সাইবেরিয়ান পাখির পরিযান এবং মৌমাছির ওয়াগল ড্যান্স।",
              keywords: ["সহজাত আচরণ", "এফএপি", "পাখির পরিযান", "ওয়াগল নৃত্য"]
            }
          ]
        }
      ]
    },

    // ============================================================
    // ৩. ব্যবসায় শিক্ষা বিভাগ (Business Studies Group - ২য় পত্র)
    // ============================================================
    {
      id: "c12-acc2",
      code: "ACC-254",
      name: "Accounting 2nd Paper",
      nameBangla: "হিসাববিজ্ঞান ২য় পত্র",
      group: "Business Studies",
      coverColor: "from-amber-700 to-orange-900",
      chapters: [
        {
          id: "c12-acc2-ch1",
          chapterNumber: 1,
          title: "Accounting for Non-Profit Organizations",
          titleBangla: "১ম অধ্যায়: অব্যবসায়ী প্রতিষ্ঠানের হিসাব",
          lessons: [
            {
              id: "c12-acc2-ch1-l1",
              point: "১.১",
              title: "Receipts and Payments Account, Income and Expenditure Account & Capital Fund",
              titleBangla: "১.১ প্রাপ্তি ও প্রদান হিসাব, আয়-ব্যয় বিবরণী ও প্রারম্ভিক মূলধন তহবিল নির্ণয়",
              summary: "চাঁদা বকেয়া ও অগ্রিমের সমন্বয়, আজীবন সভ্যতার চাঁদা ও অনুদানের হিসাবরক্ষণ।",
              keywords: ["অব্যবসায়ী প্রতিষ্ঠান", "আয়-ব্যয় বিবরণী", "মূলধন তহবিল", "চাঁদা সমন্বয়"]
            }
          ]
        },
        {
          id: "c12-acc2-ch2",
          chapterNumber: 2,
          title: "Accounting for Partnership Business",
          titleBangla: "২য় অধ্যায়: অংশীদারি ব্যবসায়ের হিসাব",
          lessons: [
            {
              id: "c12-acc2-ch2-l1",
              point: "২.১",
              title: "Profit and Loss Appropriation Account and Partners' Capital/Current Accounts",
              titleBangla: "২.১ লাভ-লোকসান বণ্টন হিসাব এবং অংশীদারদের পরিবর্তনশীল ও স্থির মূলধন পদ্ধতি",
              summary: "মূলধনের সুদ, উত্তোলনের সুদ, বেতন, কমিশন ও ঋণের সুদের সঠিক হিসাবরক্ষণ।",
              keywords: ["অংশীদারি হিসাব", "লাভ-লোকসান বণ্টন", "মূলধনের সুদ", "উত্তোলনের সুদ"]
            }
          ]
        },
        {
          id: "c12-acc2-ch4",
          chapterNumber: 4,
          title: "Joint Stock Company Capital and Share Issue",
          titleBangla: "৪র্থ অধ্যায়: যৌথ মূলধনী কোম্পানির মূলধন ও শেয়ার ইস্যু",
          lessons: [
            {
              id: "c12-acc2-ch4-l1",
              point: "৪.১",
              title: "Share Issue at Par, Premium and Discount with Bank Journal Entries",
              titleBangla: "৪.১ সমহার, অধিহার ও অবহারে সাধারণ শেয়ার ইস্যুর জাবেদা ও আর্থিক অবস্থার বিবরণী",
              summary: "শেয়ার আবেদন, বরাদ্দ ও তলবের হিসাব, অবলেখকের কমিশন ও অতিরিক্ত আবেদন ফেরত।",
              keywords: ["শেয়ার ইস্যু", "শেয়ার অধিহার", "শেয়ার অবহার", "কোম্পানি মূলধন"]
            }
          ]
        },
        {
          id: "c12-acc2-ch5",
          chapterNumber: 5,
          title: "Financial Statements of Joint Stock Company",
          titleBangla: "৫ম অধ্যায়: যৌথ মূলধনী কোম্পানির আর্থিক বিবরণী",
          lessons: [
            {
              id: "c12-acc2-ch5-l1",
              point: "৫.১",
              title: "Statement of Comprehensive Income, Retained Earnings & Balance Sheet",
              titleBangla: "৫.১ বিশদ আয় বিবরণী, সংরক্ষিত আয় বিবরণী ও কোম্পানির ব্যালেন্স শিট",
              summary: "কোম্পানি আইন ১৯৯৪ অনুযায়ী প্রস্তাবিত লভ্যাংশ, কর সঞ্চিতি ও সাধারণ তহবিলের সমন্বয়।",
              keywords: ["কোম্পানির আর্থিক বিবরণী", "সংরক্ষিত আয়", "প্রস্তাবিত লভ্যাংশ", "কর সঞ্চিতি"]
            }
          ]
        },
        {
          id: "c12-acc2-ch6",
          chapterNumber: 6,
          title: "Financial Statement Analysis",
          titleBangla: "৬ষ্ঠ অধ্যায়: আর্থিক বিবরণী বিশ্লেষণ",
          lessons: [
            {
              id: "c12-acc2-ch6-l1",
              point: "৬.১",
              title: "Liquidity, Solvency and Profitability Ratios Comparison",
              titleBangla: "৬.১ চলতি অনুপাত (২:১), অগ্নিপরীক্ষা অনুপাত (১:১), দেনাদার আবর্তন ও মজুদ আবর্তন",
              summary: "মুনাফা অর্জন ক্ষমতা অনুপাত ও আর্থিক সচ্ছলতার তাৎপর্যপূর্ণ মূল্যায়ন।",
              keywords: ["আর্থিক বিশ্লেষণ", "অনুপাত", "মজুদ আবর্তন", "চলতি অনুপাত"]
            }
          ]
        },
        {
          id: "c12-acc2-ch7",
          chapterNumber: 7,
          title: "Cost Accounting",
          titleBangla: "৭ম অধ্যায়: উৎপাদন ব্যয় হিসাব",
          lessons: [
            {
              id: "c12-acc2-ch7-l1",
              point: "৭.১",
              title: "Cost Sheet Preparation, Prime Cost, Factory Overhead and Tender Pricing",
              titleBangla: "৭.১ উৎপাদন ব্যয় বিবরণী প্রস্তুতকরণ, মুখ্য ব্যয়, রূপান্তর ব্যয় ও দরপত্র মূল্য নির্ধারণ",
              summary: "কাঁচামালের ব্যবহার, প্রত্যক্ষ মজুরি, কারখানা উপরিব্যয় এবং প্রত্যাশিত মুনাফা যোগ করে কোটেশন তৈরি।",
              keywords: ["উৎপাদন ব্যয়", "মুখ্য ব্যয়", "রূপান্তর ব্যয়", "দরপত্র মূল্য"]
            }
          ]
        },
        {
          id: "c12-acc2-ch8",
          chapterNumber: 8,
          title: "Inventory Valuation Methods (FIFO, LIFO, Weighted Average)",
          titleBangla: "৮ম অধ্যায়: মজুদ পণ্যের হিসাবরক্ষণ পদ্ধতি",
          lessons: [
            {
              id: "c12-acc2-ch8-l1",
              point: "৮.১",
              title: "Store Ledger Preparation under FIFO, LIFO and Weighted Average Methods",
              titleBangla: "৮.১ মাল খতিয়ান (Store Ledger): FIFO (আগে আসলে আগে যায়) ও ভারযুক্ত গড় পদ্ধতি",
              summary: "মূল্যস্ফীতির সময় বিভিন্ন মজুদ মূল্যায়নের প্রভাব এবং অবিক্রিত পণ্যের সঠিক মূল্যায়ন।",
              keywords: ["FIFO", "LIFO", "ভারযুক্ত গড়", "মাল খতিয়ান", "মজুদ পণ্য"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-bom2",
      code: "BOM-278",
      name: "Business Organization & Management 2nd Paper (Principles of Management)",
      nameBangla: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা ২য় পত্র (ব্যবস্থাপনার নীতিমালা)",
      group: "Business Studies",
      coverColor: "from-amber-800 to-yellow-950",
      chapters: [
        {
          id: "c12-bom2-ch1",
          chapterNumber: 1,
          title: "Concepts and Functions of Management",
          titleBangla: "১ম অধ্যায়: ব্যবস্থাপনার ধারণা ও কার্যাবলী",
          lessons: [
            {
              id: "c12-bom2-ch1-l1",
              point: "১.১",
              title: "Management Functions (POSDCORB) and Levels of Management",
              titleBangla: "১.১ ব্যবস্থাপনার কার্যাবলী (পরিকল্পনা, সংগঠন, কর্মীসংস্থান, নির্দেশনা, সমন্বয়, নিয়ন্ত্রণ)",
              summary: "উচ্চ, মধ্য ও মাঠ পর্যায়ের ব্যবস্থাপকের দক্ষতা ও আধুনিক ব্যবস্থাপনার গুরুত্ব।",
              keywords: ["ব্যবস্থাপনা চক্র", "POSDCORB", "হেনরি ফেয়ল", "ব্যবস্থাপনার স্তর"]
            }
          ]
        },
        {
          id: "c12-bom2-ch2",
          chapterNumber: 2,
          title: "Principles of Management",
          titleBangla: "২য় অধ্যায়: ব্যবস্থাপনার নীতিমালা",
          lessons: [
            {
              id: "c12-bom2-ch2-l1",
              point: "২.১",
              title: "Henry Fayol's 14 Administrative Principles and F. W. Taylor's Scientific Management",
              titleBangla: "২.১ হেনরি ফেয়লের ১৪টি প্রশাসনিক নীতি ও টেলরের বৈজ্ঞানিক ব্যবস্থাপনা সূত্র",
              summary: "আদেশের ঐক্য, নির্দেশের ঐক্য, জোড়া-মই শিকল নীতি (Scalar Chain) ও দলীয় একতা।",
              keywords: ["১৪টি নীতি", "আদেশের ঐক্য", "জোড়া-মই শিকল", "টেলর", "ফেয়ল"]
            }
          ]
        },
        {
          id: "c12-bom2-ch3",
          chapterNumber: 3,
          title: "Planning and Decision Making",
          titleBangla: "৩য় অধ্যায়: পরিকল্পনা প্রণয়ন ও সিদ্ধান্ত গ্রহণ",
          lessons: [
            {
              id: "c12-bom2-ch3-l1",
              point: "৩.১",
              title: "Types of Plans, Steps in Planning and Management by Objectives (MBO)",
              titleBangla: "৩.১ পরিকল্পনার প্রকারভেদ (একার্থক ও স্থায়ী), প্রণয়নের ধাপ ও উদ্দেশ্যভিত্তিক ব্যবস্থাপনা",
              summary: "মিশন, লক্ষ্য, কৌশলগত পরিকল্পনা এবং কার্যকর সিদ্ধান্ত গ্রহণ প্রক্রিয়া।",
              keywords: ["পরিকল্পনা", "সিদ্ধান্ত গ্রহণ", "MBO", "কৌশলগত পরিকল্পনা"]
            }
          ]
        },
        {
          id: "c12-bom2-ch4",
          chapterNumber: 4,
          title: "Organization",
          titleBangla: "৪র্থ অধ্যায়: সংগঠন",
          lessons: [
            {
              id: "c12-bom2-ch4-l1",
              point: "৪.১",
              title: "Line, Functional, Committee Organization and Decentralization",
              titleBangla: "৪.১ সরলরৈখিক, পদস্থ কর্মী, কমিটি ও ম্যাট্রিক্স সংগঠন; কর্তৃত্বের বিকেন্দ্রীকরণ",
              summary: "দায়িত্ব ও ক্ষমতার অর্পণ, নিয়ন্ত্রণের পরিধি (Span of Control) এবং সাংগঠনিক কাঠামো।",
              keywords: ["সাংগঠনিক কাঠামো", "সরলরৈখিক", "কমিটি", "নিয়ন্ত্রণের পরিধি"]
            }
          ]
        },
        {
          id: "c12-bom2-ch5",
          chapterNumber: 5,
          title: "Staffing",
          titleBangla: "৫ম অধ্যায়: কর্মীসংস্থান",
          lessons: [
            {
              id: "c12-bom2-ch5-l1",
              point: "৫.১",
              title: "Recruitment, Selection, Training Methods and Performance Appraisal",
              titleBangla: "৫.১ কর্মী সংগ্রহ, নির্বাচন পদ্ধতি, অভ্যন্তরীণ ও বাহ্যিক উৎস, কাজের মধ্যে ও বাইরে প্রশিক্ষণ",
              summary: "সাক্ষাৎকার গ্রহণ, পদোন্নতি, বদলি এবং মানবসম্পদ ব্যবস্থাপনার প্রয়োজনীয়তা।",
              keywords: ["কর্মীসংস্থান", "নিয়োগ", "প্রশিক্ষণ", "মানবসম্পদ"]
            }
          ]
        },
        {
          id: "c12-bom2-ch6",
          chapterNumber: 6,
          title: "Leadership",
          titleBangla: "৬ষ্ঠ অধ্যায়: নেতৃত্ব",
          lessons: [
            {
              id: "c12-bom2-ch6-l1",
              point: "৬.১",
              title: "Leadership Styles: Autocratic, Democratic, Free-rein, Paternalistic",
              titleBangla: "৬.১ নেতৃত্বের ধরণ (স্বৈরতান্ত্রিক, গণতান্ত্রিক, মুক্ত/লেসেজ-ফেয়ার, পিতৃতান্ত্রিক)",
              summary: "আদর্শ নেতার গুণাবলী এবং দিকনির্দেশনা প্রদান কৌশল।",
              keywords: ["নেতৃত্ব", "গণতান্ত্রিক নেতৃত্ব", "স্বৈরতান্ত্রিক", "নেতার গুণাবলী"]
            }
          ]
        },
        {
          id: "c12-bom2-ch7",
          chapterNumber: 7,
          title: "Motivation",
          titleBangla: "৭ম অধ্যায়: প্রেষণা",
          lessons: [
            {
              id: "c12-bom2-ch7-l1",
              point: "৭.১",
              title: "Maslow's Need Hierarchy Theory and Herzberg's Two-Factor Theory",
              titleBangla: "৭.১ আব্রাহাম ম্যাসলোর চাহিদা সোপান তত্ত্ব ও হার্জবার্গের দ্বি-উপাদান তত্ত্ব",
              summary: "আর্থিক ও অনার্থিক প্রেষণাদান কৌশল এবং কর্মীর মনোবল বৃদ্ধিতে ভূমিকা।",
              keywords: ["প্রেষণা", "ম্যাসলোর তত্ত্ব", "চাহিদা সোপান", "হার্জবার্গ", "মনোবল"]
            }
          ]
        },
        {
          id: "c12-bom2-ch8",
          chapterNumber: 8,
          title: "Communication and Coordination",
          titleBangla: "৮ম অধ্যায়: যোগাযোগ ও সমন্বয়সাধন",
          lessons: [
            {
              id: "c12-bom2-ch8-l1",
              point: "৮.১",
              title: "Business Communication Process, Barriers to Communication and Coordination Principles",
              titleBangla: "৮.১ ব্যবসায়িক যোগাযোগ প্রক্রিয়া, যোগাযোগের প্রতিবন্ধকতা ও দূরীকরণ এবং সমন্বয় নীতি",
              summary: "ঊর্ধ্বমুখী, নিম্নমুখী ও সমান্তরাল যোগাযোগ এবং ইলেকট্রনিক যোগাযোগের ভূমিকা।",
              keywords: ["যোগাযোগ", "সমন্বয়", "যোগাযোগের বাধা", "ব্যবসায়িক বার্তা"]
            }
          ]
        },
        {
          id: "c12-bom2-ch9",
          chapterNumber: 9,
          title: "Control",
          titleBangla: "৯ম অধ্যায়: নিয়ন্ত্রণ",
          lessons: [
            {
              id: "c12-bom2-ch9-l1",
              point: "৯.১",
              title: "Controlling Process Steps, Budgetary Control, Break-even Analysis and PERT/CPM",
              titleBangla: "৯.১ নিয়ন্ত্রণ প্রক্রিয়ার ধাপসমূহ, বাজেটীয় নিয়ন্ত্রণ, সমচ্ছেদ বিন্দু (BEP) ও পার্ট/সিপিএম",
              summary: "আদর্শ মান নির্ধারণ, বিচ্যুতির কারণ বিশ্লেষণ ও সংশোধনমূলক ব্যবস্থা গ্রহণ।",
              keywords: ["নিয়ন্ত্রণ", "বাজেটীয় নিয়ন্ত্রণ", "সমচ্ছেদ বিন্দু", "PERT"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-fin2",
      code: "FIN-293",
      name: "Finance, Banking & Insurance 2nd Paper (Banking & Insurance)",
      nameBangla: "ফিন্যান্স, ব্যাংকিং ও বীমা ২য় পত্র (ব্যাংকিং ও বীমা)",
      group: "Business Studies",
      coverColor: "from-blue-800 to-sky-950",
      chapters: [
        {
          id: "c12-fin2-ch1",
          chapterNumber: 1,
          title: "Introduction to Banking System",
          titleBangla: "১ম অধ্যায়: ব্যাংক ব্যবস্থার প্রাথমিক ধারণা",
          lessons: [
            {
              id: "c12-fin2-ch1-l1",
              point: "১.১",
              title: "Evolution of Banking, Classification of Banks and Economic Significance",
              titleBangla: "১.১ ব্যাংক ব্যবস্থার উৎপত্তি ও ক্রমবিকাশ, শ্রেণিবিভাগ ও অর্থনৈতিক ভূমিকা",
              summary: "তহবিল গঠন, অর্থ স্থানান্তর ও বাণিজ্যিক গতিশীলতা রক্ষায় ব্যাংকের অবদান।",
              keywords: ["ব্যাংক ব্যবস্থা", "ব্যাংকের প্রকারভেদ", "অর্থনৈতিক উন্নয়ন"]
            }
          ]
        },
        {
          id: "c12-fin2-ch2",
          chapterNumber: 2,
          title: "Central Bank (Bangladesh Bank)",
          titleBangla: "২য় অধ্যায়: কেন্দ্রীয় ব্যাংক (বাংলাদেশ ব্যাংক)",
          lessons: [
            {
              id: "c12-fin2-ch2-l1",
              point: "২.১",
              title: "Functions of Bangladesh Bank, Note Issue and Quantitative Credit Control",
              titleBangla: "২.১ বাংলাদেশ ব্যাংকের কার্যাবলী, নোট ইস্যু, নিকাশ ঘর ও পরিমাণগত ঋণ নিয়ন্ত্রণ হাতিয়ার",
              summary: "ব্যাংক হার নীতি, খোলা বাজার কার্যক্রম, নগদ জমার অনুপাত (CRR & SLR)।",
              keywords: ["বাংলাদেশ ব্যাংক", "কেন্দ্রীয় ব্যাংক", "নিকাশ ঘর", "CRR", "SLR"]
            }
          ]
        },
        {
          id: "c12-fin2-ch3",
          chapterNumber: 3,
          title: "Commercial Bank",
          titleBangla: "৩য় অধ্যায়: বাণিজ্যিক ব্যাংক",
          lessons: [
            {
              id: "c12-fin2-ch3-l1",
              point: "৩.১",
              title: "Credit Creation Mechanism and Principles of Commercial Banking",
              titleBangla: "৩.১ ঋণ আমানত সৃষ্টির প্রক্রিয়া এবং বাণিজ্যিক ব্যাংকের মূলনীতি",
              summary: "প্রাথমিক আমানত থেকে বহুমুখী ঋণ সৃষ্টি এবং তারল্য বনাম মুনাফার নীতি।",
              keywords: ["বাণিজ্যিক ব্যাংক", "ঋণ সৃষ্টি", "আমানত", "তারল্য"]
            }
          ]
        },
        {
          id: "c12-fin2-ch4",
          chapterNumber: 4,
          title: "Bank Accounts and Modern Electronic Banking",
          titleBangla: "৪র্থ অধ্যায়: ব্যাংক হিসাব ও ইলেকট্রনিক ব্যাংকিং",
          lessons: [
            {
              id: "c12-fin2-ch4-l1",
              point: "৪.১",
              title: "Current, Savings, Fixed Accounts, ATM, Online Banking, MFS & RTGS",
              titleBangla: "৪.১ চলতি, সঞ্চয়ী ও স্থায়ী হিসাব খোলার নিয়ম; এটিএম, অনলাইন ও মোবাইল ব্যাংকিং (MFS)",
              summary: "কেওয়াইসি (KYC) ফরম পূরণ, ডেবিট/ক্রেডিট কার্ড এবং ইলেকট্রনিক ফান্ড ট্রান্সফার (EFT/RTGS)।",
              keywords: ["ব্যাংক হিসাব", "এটিএম", "অনলাইন ব্যাংকিং", "MFS", "KYC"]
            }
          ]
        },
        {
          id: "c12-fin2-ch5",
          chapterNumber: 5,
          title: "Negotiable Instruments (Cheque, Bill, Note)",
          titleBangla: "৫ম অধ্যায়: হস্তান্তরযোগ্য ঋণ দলিল",
          lessons: [
            {
              id: "c12-fin2-ch5-l1",
              point: "৫.১",
              title: "Cheques (Bearer, Order, Crossed), Endorsement and Dishonour of Cheque",
              titleBangla: "৫.১ বাহক চেক, হুকুম চেক, দাগকাটা চেক, অনুমোদন ও চেক প্রত্যাখানের কারণ",
              summary: "বিনিময় বিল, অঙ্গীকারপত্র (Promissory Note) এবং ব্যাংকের সতর্কতা।",
              keywords: ["চেক", "দাগকাটা চেক", "হস্তান্তরযোগ্য দলিল", "অনুমোদন"]
            }
          ]
        },
        {
          id: "c12-fin2-ch9",
          chapterNumber: 9,
          title: "Fundamental Principles of Insurance",
          titleBangla: "৯ম অধ্যায়: বীমা সম্পর্কে মৌলিক ধারণা",
          lessons: [
            {
              id: "c12-fin2-ch9-l1",
              point: "৯.১",
              title: "Principles of Utmost Good Faith, Indemnity, Insurable Interest and Subrogation",
              titleBangla: "৯.১ পরম বিশ্বাসের নীতি, ক্ষতিপূরণের নীতি, বীমাযোগ্য স্বার্থ ও স্থলাভিষিক্ততার নীতি",
              summary: "বীমার অপরিহার্য উপাদান ও ঝুঁকি বণ্টন কৌশল।",
              keywords: ["বীমা", "পরম বিশ্বাস", "ক্ষতিপূরণ নীতি", "বীমাযোগ্য স্বার্থ"]
            }
          ]
        },
        {
          id: "c12-fin2-ch10",
          chapterNumber: 10,
          title: "Life Insurance",
          titleBangla: "১০ম অধ্যায়: জীবন বীমা",
          lessons: [
            {
              id: "c12-fin2-ch10-l1",
              point: "১০.১",
              title: "Life Insurance Policies (Term, Whole Life, Endowment), Surrender Value and Nomination",
              titleBangla: "১০.১ সাময়িক, আজীবন ও মেয়াদী বীমাপত্র; সমর্পণ মূল্য ও মনোনীত ব্যক্তি (Nominee)",
              summary: "প্রিমিয়াম নির্ধারণ ও মৃত্যুজনিত বা মেয়াদপূর্তিতে দাবি নিষ্পত্তি পদ্ধতি।",
              keywords: ["জীবন বীমা", "মেয়াদী বীমা", "সমর্পণ মূল্য", "প্রিমিয়াম"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-pm2",
      code: "PMM-287",
      name: "Production Management & Marketing 2nd Paper (Marketing)",
      nameBangla: "উৎপাদন ব্যবস্থাপনা ও বিপণন ২য় পত্র (বিপণন)",
      group: "Business Studies",
      coverColor: "from-rose-700 to-pink-900",
      chapters: [
        {
          id: "c12-pm2-ch1",
          chapterNumber: 1,
          title: "Introduction to Marketing",
          titleBangla: "১ম অধ্যায়: বিপণন পরিচিতি",
          lessons: [
            {
              id: "c12-pm2-ch1-l1",
              point: "১.১",
              title: "Core Concepts of Marketing (Need, Want, Demand, Value & Customer Satisfaction)",
              titleBangla: "১.১ বিপণনের মৌলিক ধারণা: প্রয়োজন, অভাব, চাহিদা, ভ্যালু ও ক্রেতা সন্তুষ্টি",
              summary: "ফিলিপ কোটলারের বিপণন ধারণা এবং বিপণন মিশ্রণ (4P: Product, Price, Place, Promotion)।",
              keywords: ["বিপণন", "চাহিদা", "ভ্যালু", "ক্রেতা সন্তুষ্টি", "বিপণন মিশ্রণ 4P"]
            }
          ]
        },
        {
          id: "c12-pm2-ch2",
          chapterNumber: 2,
          title: "Marketing Environment",
          titleBangla: "২য় অধ্যায়: বিপণন পরিবেশ",
          lessons: [
            {
              id: "c12-pm2-ch2-l1",
              point: "২.১",
              title: "Micro Environment (Company, Suppliers, Intermediaries, Customers) & Macro Environment",
              titleBangla: "২.১ ব্যষ্টিক পরিবেশের উপাদান এবং সামষ্টিক পরিবেশ (জনতাত্ত্বিক, অর্থনৈতিক, প্রাকৃতিক, সাংস্কৃতিক)",
              summary: "পরিবেশীয় উপাদানের প্রভাব বিশ্লেষণ এবং পরিবেশবান্ধব গ্রিন মার্কেটিং।",
              keywords: ["বিপণন পরিবেশ", "ব্যষ্টিক পরিবেশ", "সামষ্টিক পরিবেশ", "গ্রিন মার্কেটিং"]
            }
          ]
        },
        {
          id: "c12-pm2-ch3",
          chapterNumber: 3,
          title: "Consumer and Business Market",
          titleBangla: "৩য় অধ্যায়: ভোক্তা ও ব্যবসায় বাজার",
          lessons: [
            {
              id: "c12-pm2-ch3-l1",
              point: "৩.১",
              title: "Consumer Buying Decision Process and Industrial Buying Behaviour",
              titleBangla: "৩.১ ভোক্তার ক্রয় সিদ্ধান্ত গ্রহণের ধাপসমূহ ও শিল্প বাজারের বৈশিষ্ট্য",
              summary: "সমস্যা সনাক্তকরণ, তথ্য অনুসন্ধান, বিকল্প মূল্যায়ন, ক্রয় সিদ্ধান্ত ও ক্রয়োত্তর আচরণ।",
              keywords: ["ভোক্তা বাজার", "ক্রয় সিদ্ধান্ত", "শিল্প বাজার"]
            }
          ]
        },
        {
          id: "c12-pm2-ch4",
          chapterNumber: 4,
          title: "Market Segmentation and Positioning (STP)",
          titleBangla: "৪র্থ অধ্যায়: বাজার বিভক্তিকরণ ও অবস্থান নির্ধারণ (STP)",
          lessons: [
            {
              id: "c12-pm2-ch4-l1",
              point: "৪.১",
              title: "Segmentation Bases (Geographic, Demographic, Psychographic) and Target Marketing",
              titleBangla: "৪.১ ভৌগোলিক, জনসংখ্যাতাত্ত্বিক ও মনস্তাত্ত্বিক ভিত্তিতে বাজার বিভক্তিকরণ ও টার্গেটিং",
              summary: "উপযুক্ত সেগমেন্ট নির্বাচন ও ভোক্তার মনে স্বাতন্ত্র্যসূচক ব্র্যান্ড পজিশনিং।",
              keywords: ["STP", "বাজার বিভক্তিকরণ", "টার্গেটিং", "পজিশনিং"]
            }
          ]
        },
        {
          id: "c12-pm2-ch5",
          chapterNumber: 5,
          title: "Product and Product Pricing",
          titleBangla: "৫ম অধ্যায়: পণ্য ও পণ্যের মূল্য নির্ধারণ",
          lessons: [
            {
              id: "c12-pm2-ch5-l1",
              point: "৫.১",
              title: "Product Life Cycle (PLC) Stages and Pricing Strategies (Skimming & Penetration)",
              titleBangla: "৫.১ পণ্য জীবনচক্রের স্তরসমূহ (সূচনা, প্রবৃদ্ধি, পূর্ণতা, পতন) ও বাজার ভেদ/প্রবেশ মূল্য নির্ধারণ",
              summary: "ব্র্যান্ডিং, প্যাকেজিং, লেবেলিং এবং খরচভিত্তিক ও মূল্যভিত্তিক মূল্য নির্ধারণ কৌশল।",
              keywords: ["পণ্য জীবনচক্র", "PLC", "মূল্য নির্ধারণ", "স্কিমিং প্রাইসিং", "পেনিট্রেশন"]
            }
          ]
        },
        {
          id: "c12-pm2-ch6",
          chapterNumber: 6,
          title: "Marketing Channels and Physical Distribution",
          titleBangla: "৬ষ্ঠ অধ্যায়: বণ্টন প্রণালী ও মধ্যস্থ কারবারি",
          lessons: [
            {
              id: "c12-pm2-ch6-l1",
              point: "৬.১",
              title: "Wholesalers, Retailers, Distribution Channels and Channel Conflict",
              titleBangla: "৬.১ পাইকারি ও খুচরা ব্যবসায়ী, পণ্য বণ্টন প্রণালী ও আধুনিক সুপারশপ চেইন",
              summary: "শূন্যস্তর, একস্তর ও দ্বিস্তর বণ্টন প্রণালী এবং শারীরিক বিতরণে লজিস্টিকস।",
              keywords: ["বণ্টন প্রণালী", "পাইকার", "খুচরা ব্যবসায়ী", "লজিস্টিকস"]
            }
          ]
        },
        {
          id: "c12-pm2-ch8",
          chapterNumber: 8,
          title: "Promotion and Advertising",
          titleBangla: "৮ম অধ্যায়: প্রসার ও বিজ্ঞাপন",
          lessons: [
            {
              id: "c12-pm2-ch8-l1",
              point: "৮.১",
              title: "Promotion Mix: Advertising, Personal Selling, Sales Promotion, PR & Digital Marketing",
              titleBangla: "৮.১ বিজ্ঞাপন, ব্যক্তিগত বিক্রয়, বিক্রয় প্রসার, জনসংযোগ ও সোশ্যাল মিডিয়া বিপণন",
              summary: "বিজ্ঞাপনের মাধ্যম নির্বাচন ও আধুনিক ডিজিটাল বিজ্ঞাপনী কৌশল।",
              keywords: ["বিজ্ঞাপন", "বিক্রয় প্রসার", "প্রচারণা", "ডিজিটাল মার্কেটিং"]
            }
          ]
        }
      ]
    },

    // ============================================================
    // ৪. মানবিক বিভাগ (Humanities Group - ২য় পত্র)
    // ============================================================
    {
      id: "c12-econ2",
      code: "ECO-110",
      name: "Economics 2nd Paper (Economy of Bangladesh)",
      nameBangla: "অর্থনীতি ২য় পত্র (বাংলাদেশের অর্থনীতি)",
      group: "Humanities",
      coverColor: "from-amber-700 to-yellow-900",
      chapters: [
        {
          id: "c12-econ2-ch1",
          chapterNumber: 1,
          title: "Overview of Bangladesh Economy",
          titleBangla: "১ম অধ্যায়: বাংলাদেশের অর্থনীতির পরিচয়",
          lessons: [
            {
              id: "c12-econ2-ch1-l1",
              point: "১.১",
              title: "Structural Transformation of Economy: Agriculture, Industry and Service Sectors",
              titleBangla: "১.১ অর্থনীতির কাঠামোগত রূপান্তর: কৃষি, শিল্প ও সেবা খাতের অবদান এবং এলডিসি উত্তরণ",
              summary: "মাথাপিছু আয় বৃদ্ধি, অর্থনৈতিক প্রবৃদ্ধির গতিধারা ও টেকসই উন্নয়ন অভীষ্ট (SDG)।",
              keywords: ["বাংলাদেশের অর্থনীতি", "সেবা খাত", "শিল্পায়ন", "SDG", "LDC উত্তরণ"]
            }
          ]
        },
        {
          id: "c12-econ2-ch2",
          chapterNumber: 2,
          title: "Agriculture of Bangladesh",
          titleBangla: "২য় অধ্যায়: বাংলাদেশের কৃষি",
          lessons: [
            {
              id: "c12-econ2-ch2-l1",
              point: "২.১",
              title: "Agricultural Credit, Marketing Problems and Modernization of Agriculture",
              titleBangla: "২.১ প্রাতিষ্ঠানিক কৃষি ঋণ, কৃষিপণ্য বিপণনের সমস্যা, খাদ্য নিরাপত্তা ও শস্য বহুমুখীকরণ",
              summary: "কৃষিতে উচ্চফলনশীল জাত (উফশী), যান্ত্রিকীকরণ এবং জলবায়ু সহনশীল কৃষি উৎপাদন।",
              keywords: ["কৃষি ঋণ", "কৃষিপণ্য বিপণন", "খাদ্য নিরাপত্তা", "উফশী ধান"]
            }
          ]
        },
        {
          id: "c12-econ2-ch3",
          chapterNumber: 3,
          title: "Industries of Bangladesh",
          titleBangla: "৩য় অধ্যায়: বাংলাদেশের শিল্প",
          lessons: [
            {
              id: "c12-econ2-ch3-l1",
              point: "৩.১",
              title: "Readymade Garments (RMG), Jute, Leather Industry, EPZ and Special Economic Zones",
              titleBangla: "৩.১ তৈরি পোশাক শিল্প (RMG), পাট, চামড়া শিল্প, ইপিজেড ও অর্থনৈতিক অঞ্চল (SEZ)",
              summary: "রপ্তানি আয়ে পোশাক শিল্পের ভূমিকা, ব্যাকওয়ার্ড লিঙ্কেজ এবং চতুর্থ শিল্প বিপ্লবের প্রস্তুতি।",
              keywords: ["পোশাক শিল্প", "রপ্তানি আয়", "ইপিজেড", "SEZ", "শিল্পায়ন"]
            }
          ]
        },
        {
          id: "c12-econ2-ch4",
          chapterNumber: 4,
          title: "Population, Human Resource and Employment",
          titleBangla: "৪র্থ অধ্যায়: জনসংখ্যা, মানবসম্পদ ও কর্মসংস্থান",
          lessons: [
            {
              id: "c12-econ2-ch4-l1",
              point: "৪.১",
              title: "Malthusian Population Theory, Demographic Dividend and Human Resource Development",
              titleBangla: "৪.১ ম্যালথাসের জনসংখ্যা তত্ত্ব, জনসংখ্যাতাত্ত্বিক বোনাস (Demographic Dividend) ও রেমিট্যান্স",
              summary: "জনশক্তি রপ্তানি, কারিগরি শিক্ষা ও ছদ্মবেশী ও শিক্ষিত বেকারত্ব দূরীকরণ।",
              keywords: ["ম্যালথাসের তত্ত্ব", "ডেমোগ্রাফিক ডিভিডেন্ড", "মানবসম্পদ", "রেমিট্যান্স"]
            }
          ]
        },
        {
          id: "c12-econ2-ch7",
          chapterNumber: 7,
          title: "Inflation",
          titleBangla: "৭ম অধ্যায়: মুদ্রাস্ফীতি",
          lessons: [
            {
              id: "c12-econ2-ch7-l1",
              point: "৭.১",
              title: "Demand-Pull & Cost-Push Inflation, CPI Measurement and Inflation Control",
              titleBangla: "৭.১ চাহিদা বৃদ্ধিজনিত ও ব্যয় বৃদ্ধিজনিত মুদ্রাস্ফীতি, ভোক্তা মূল্য সূচক (CPI) ও নিয়ন্ত্রণ কৌশল",
              summary: "মুদ্রানীতি ও রাজস্ব নীতির সমন্বয়ে মূল্যস্ফীতি দমন এবং নির্দিষ্ট আয়ের মানুষের ওপর এর প্রভাব।",
              keywords: ["মুদ্রাস্ফীতি", "CPI", "চাহিদা বৃদ্ধি", "মুদ্রানীতি"]
            }
          ]
        },
        {
          id: "c12-econ2-ch8",
          chapterNumber: 8,
          title: "International Trade",
          titleBangla: "৮ম অধ্যায়: আন্তর্জাতিক বাণিজ্য",
          lessons: [
            {
              id: "c12-econ2-ch8-l1",
              point: "৮.১",
              title: "Ricardian Comparative Advantage, Export-Import Trends and Balance of Payments",
              titleBangla: "৮.১ তুলনামূলক সুবিধা তত্ত্ব, বাংলাদেশের রপ্তানি ও আমদানি খাত এবং লেনদেন ভারসাম্য",
              summary: "বাণিজ্য ভারসাম্য বনাম লেনদেন ভারসাম্য, শুল্ক ও অশুল্ক বাধা এবং বিশ্ব বাণিজ্য সংস্থা (WTO)।",
              keywords: ["আন্তর্জাতিক বাণিজ্য", "তুলনামূলক সুবিধা", "লেনদেন ভারসাম্য", "রপ্তানি"]
            }
          ]
        },
        {
          id: "c12-econ2-ch9",
          chapterNumber: 9,
          title: "Government Finance and Budget",
          titleBangla: "৯ম অধ্যায়: সরকারি অর্থব্যবস্থা ও বাজেট",
          lessons: [
            {
              id: "c12-econ2-ch9-l1",
              point: "৯.১",
              title: "Government Revenue Sources (NBR Tax, VAT) and National Budget Structure",
              titleBangla: "৯.১ কর রাজস্ব (ভ্যাট, আয়কর), কর বহির্ভূত রাজস্ব এবং ঘাটতি বাজেট অর্থায়ন",
              summary: "উন্নয়ন বাজেট ও অনুন্নয়ন বাজেট; অভ্যন্তরীণ ও বৈদেশিক ঋণের মাধ্যমে বাজেট ঘাটতি পূরণ।",
              keywords: ["জাতীয় বাজেট", "ভ্যাট", "আয়কর", "রাজস্ব", "ঘাটতি বাজেট"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-civ2",
      code: "CIV-270",
      name: "Civics & Good Governance 2nd Paper",
      nameBangla: "পৌরনীতি ও সুশাসন ২য় পত্র",
      group: "Humanities",
      coverColor: "from-sky-800 to-indigo-950",
      chapters: [
        {
          id: "c12-civ2-ch1",
          chapterNumber: 1,
          title: "Development of Representative Government in British India",
          titleBangla: "১ম অধ্যায়: ব্রিটিশ ভারতে প্রতিনিধিত্বশীল সরকারের বিকাশ",
          lessons: [
            {
              id: "c12-civ2-ch1-l1",
              point: "১.১",
              title: "Morley-Minto Reforms 1909, Government of India Act 1935 and Two-Nation Theory",
              titleBangla: "১.১ ১৯০৯ সালের মর্লি-মিন্টো সংস্কার, ১৯৩৫ সালের ভারত শাসন আইন ও দ্বি-জাতি তত্ত্ব",
              summary: "সাম্প্রদায়িক নির্বাচন ব্যবস্থা, প্রাদেশিক স্বায়ত্তশাসন ও ১৯৪৭ সালের দেশভাগের ঐতিহাসিক পটভূমি।",
              keywords: ["ভারত শাসন আইন ১৯৩৫", "দ্বি-জাতি তত্ত্ব", "মর্লি-মিন্টো সংস্কার", "প্রাদেশিক স্বায়ত্তশাসন"]
            }
          ]
        },
        {
          id: "c12-civ2-ch2",
          chapterNumber: 2,
          title: "From Pakistan to Bangladesh (1947–1971)",
          titleBangla: "২য় অধ্যায়: পাকিস্তান থেকে বাংলাদেশ (১৯৪৭-১৯৭১)",
          lessons: [
            {
              id: "c12-civ2-ch2-l1",
              point: "২.১",
              title: "Language Movement 1952, United Front 1954 and Historic 6-Point Movement 1966",
              titleBangla: "২.১ ভাষা আন্দোলন ১৯৫২, যুক্তফ্রন্টের ২১ দফা ১৯৫৪ ও ঐতিহাসিক ৬ দফা আন্দোলন ১৯৬৬",
              summary: "বাঙালি জাতীয়তাবাদের ভিত্তি ও বঙ্গবন্ধুর ৬ দফাকে বাঙালির মুক্তিসনদ (ম্যাগনাকার্টা) হিসেবে রূপান্তর।",
              keywords: ["ভাষা আন্দোলন", "৬ দফা আন্দোলন", "যুক্তফ্রন্ট", "ম্যাগনাকার্টা"]
            },
            {
              id: "c12-civ2-ch2-l2",
              point: "২.২",
              title: "Mass Upsurge 1969, 1970 Election, 7th March Speech and Liberation War 1971",
              titleBangla: "২.২ ১৯৬৯-এর গণঅভ্যুত্থান, ১৯৭০-এর সাধারণ নির্বাচন, ৭ই মার্চের ঐতিহাসিক ভাষণ ও মহান মুক্তিযুদ্ধ",
              summary: "২৫শে মার্চের গণহত্যা, ২৬শে মার্চ স্বাধীনতার ঘোষণা, মুজিবনগর সরকার গঠন ও বিজয় অর্জন।",
              keywords: ["গণঅভ্যুত্থান", "১৯৭০ নির্বাচন", "৭ই মার্চের ভাষণ", "মুজিবনগর সরকার", "মুক্তিযুদ্ধ ১৯৭১"]
            }
          ]
        },
        {
          id: "c12-civ2-ch3",
          chapterNumber: 3,
          title: "Constitution of Bangladesh 1972",
          titleBangla: "৩য় অধ্যায়: বাংলাদেশের সংবিধান (১৯৭২)",
          lessons: [
            {
              id: "c12-civ2-ch3-l1",
              point: "৩.১",
              title: "Four State Principles, Fundamental Rights and Amendments of the Constitution",
              titleBangla: "৩.১ চার মূলনীতি (জাতীয়তাবাদ, সমাজতন্ত্র, গণতন্ত্র, ধর্মনিরপেক্ষতা), মৌলিক অধিকার ও সংশোধনীসমূহ",
              summary: "লিখিত সংবিধান, এক-কক্ষবিশিষ্ট সংসদ, বিচার বিভাগের স্বাধীনতা ও জরুরি অবস্থা বিধান।",
              keywords: ["সংবিধান ১৯৭২", "চার মূলনীতি", "মৌলিক অধিকার", "এক-কক্ষ সংসদ"]
            }
          ]
        },
        {
          id: "c12-civ2-ch4",
          chapterNumber: 4,
          title: "Administrative Structure of Bangladesh Government",
          titleBangla: "৪র্থ অধ্যায়: বাংলাদেশ সরকারের প্রশাসনিক কাঠামো",
          lessons: [
            {
              id: "c12-civ2-ch4-l1",
              point: "৪.১",
              title: "President, Prime Minister, Cabinet, Secretariat and Civil Service",
              titleBangla: "৪.১ রাষ্ট্রপতি, প্রধানমন্ত্রী, মন্ত্রিসভা, সচিবালয় ও সিভিল সার্ভিসের পদসোপান",
              summary: "সংসদীয় গণতন্ত্রে প্রধানমন্ত্রীর নির্বাহী ক্ষমতা এবং মাঠ প্রশাসনের দায়িত্ব।",
              keywords: ["প্রধানমন্ত্রী", "মন্ত্রিসভা", "সচিবালয়", "মাঠ প্রশাসন"]
            }
          ]
        },
        {
          id: "c12-civ2-ch5",
          chapterNumber: 5,
          title: "Judiciary of Bangladesh",
          titleBangla: "৫ম অধ্যায়: বিচার বিভাগ ও সুপ্রিম কোর্ট",
          lessons: [
            {
              id: "c12-civ2-ch5-l1",
              point: "৫.১",
              title: "Supreme Court (Appellate & High Court Divisions), Judicial Review and Independence",
              titleBangla: "৫.১ সুপ্রিম কোর্টের আপিল ও হাইকোর্ট বিভাগ, রিট পিটিশন এবং জুডিশিয়াল রিভিউ ক্ষমতা",
              summary: "মৌলিক অধিকার সংরক্ষণে সুপ্রিম কোর্টের অভিভাবকত্ব এবং নিম্ন আদালতের কাঠামো।",
              keywords: ["সুপ্রিম কোর্ট", "হাইকোর্ট", "রিট", "জুডিশিয়াল রিভিউ"]
            }
          ]
        },
        {
          id: "c12-civ2-ch6",
          chapterNumber: 6,
          title: "Local Government and Administration",
          titleBangla: "৬ষ্ঠ অধ্যায়: স্থানীয় শাসন ও প্রশাসন",
          lessons: [
            {
              id: "c12-civ2-ch6-l1",
              point: "৬.১",
              title: "Union Parishad, Upazila Parishad, City Corporations and Decentralization",
              titleBangla: "৬.১ ইউনিয়ন পরিষদ, উপজেলা পরিষদ ও সিটি কর্পোরেশনের গঠন, কার্যাবলী ও নাগরিক সেবা",
              summary: "স্থানীয় উন্নয়ন প্রকল্প বাস্তবায়ন, দারিদ্র্য বিমোচন ও তৃণমূল জনগণের ক্ষমতায়ন।",
              keywords: ["ইউনিয়ন পরিষদ", "উপজেলা পরিষদ", "সিটি কর্পোরেশন", "তৃণমূল ক্ষমতা"]
            }
          ]
        },
        {
          id: "c12-civ2-ch7",
          chapterNumber: 7,
          title: "Constitutional Bodies of Bangladesh",
          titleBangla: "৭ম অধ্যায়: সাংবিধানিক প্রতিষ্ঠানসমূহ",
          lessons: [
            {
              id: "c12-civ2-ch7-l1",
              point: "৭.১",
              title: "Election Commission, Bangladesh Public Service Commission (BPSC), CAG and ACC",
              titleBangla: "৭.১ নির্বাচন কমিশন, পিএসসি (BPSC), মহাহিসাব নিরীক্ষক ও নিয়ন্ত্রক (CAG) এবং দুদক",
              summary: "অবাধ ও নিরপেক্ষ নির্বাচন পরিচালনা, মেধাভিত্তিক সরকারি কর্মকর্তা নিয়োগ ও আর্থিক জবাবদিহিতা।",
              keywords: ["নির্বাচন কমিশন", "পিএসসি", "CAG", "দুদক", "সাংবিধানিক প্রতিষ্ঠান"]
            }
          ]
        },
        {
          id: "c12-civ2-ch8",
          chapterNumber: 8,
          title: "Foreign Policy of Bangladesh",
          titleBangla: "৮ম অধ্যায়: বাংলাদেশের বৈদেশিক নীতি",
          lessons: [
            {
              id: "c12-civ2-ch8-l1",
              point: "৮.১",
              title: "Friendship to All, Malice towards None; UN Peacekeeping and Regional Cooperation",
              titleBangla: "৮.১ 'সকলের সাথে বন্ধুত্ব, কারো সাথে বৈরিতা নয়', জাতিসংঘ শান্তিরক্ষা মিশন ও সার্ক/বিমসটেক",
              summary: "শান্তিপূর্ণ সহাবস্থান, আন্তর্জাতিক বাণিজ্য চুক্তি এবং নীল অর্থনীতি (Blue Economy)।",
              keywords: ["বৈদেশিক নীতি", "বঙ্গবন্ধুর নীতি", "শান্তিরক্ষা মিশন", "সার্ক", "বিমসটেক"]
            }
          ]
        },
        {
          id: "c12-civ2-ch10",
          chapterNumber: 10,
          title: "Major Social Problems in Bangladesh",
          titleBangla: "১০ম অধ্যায়: বাংলাদেশের প্রধান প্রধান সামাজিক সমস্যাসমূহ",
          lessons: [
            {
              id: "c12-civ2-ch10-l1",
              point: "১০.১",
              title: "Corruption, Dowry, Illiteracy, Drug Abuse and Cybercrimes Remediation",
              titleBangla: "১০.১ দুর্নীতি প্রতিরোধ, যৌতুক প্রথা, মাদকাসক্তি, কিশোর অপরাধ ও সাইবার ক্রাইম মোকাবিলা",
              summary: "আইনি প্রতিরোধ, সামাজিক সচেতনতা বৃদ্ধি এবং তরুণ সমাজের নৈতিক মূল্যবোধ গঠন।",
              keywords: ["দুর্নীতি", "যৌতুক", "মাদকাসক্তি", "সাইবার ক্রাইম", "কিশোর অপরাধ"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-hist2",
      code: "HIS-305",
      name: "History 2nd Paper (Modern World)",
      nameBangla: "ইতিহাস ২য় পত্র (আধুনিক বিশ্ব)",
      group: "Humanities",
      coverColor: "from-stone-800 to-amber-950",
      chapters: [
        {
          id: "c12-hist2-ch1",
          chapterNumber: 1,
          title: "Industrial Revolution",
          titleBangla: "১ম অধ্যায়: শিল্প বিপ্লব",
          lessons: [
            {
              id: "c12-hist2-ch1-l1",
              point: "১.১",
              title: "Origins in Britain, Technological Inventions and Global Socio-Economic Impact",
              titleBangla: "১.১ ইংল্যান্ডে শিল্প বিপ্লবের সূচনা, বাষ্পীয় ইঞ্জিন ও বৈশ্বিক সামাজিক-অর্থনৈতিক প্রভাব",
              summary: "কারখানা ব্যবস্থার বিকাশ, পুঁজিপতি ও শ্রমিক শ্রেণির উদ্ভব এবং নগরায়ন।",
              keywords: ["শিল্প বিপ্লব", "বাষ্পীয় ইঞ্জিন", "পুঁজিবাদ", "নগরায়ন"]
            }
          ]
        },
        {
          id: "c12-hist2-ch2",
          chapterNumber: 2,
          title: "French Revolution (1789)",
          titleBangla: "২য় অধ্যায়: ফরাসি বিপ্লব",
          lessons: [
            {
              id: "c12-hist2-ch2-l1",
              point: "২.১",
              title: "Causes, Fall of Bastille, Declaration of Rights of Man and Rise of Napoleon",
              titleBangla: "২.১ বিপ্লবের কারণ, বাস্তিল দুর্গের পতন, সাম্য-মৈত্রী-স্বাধীনতার বাণী ও নেপোলিয়নের উত্থান",
              summary: "ফরাসি দার্শনিকদের (রুশো, ভলতেয়ার, মন্টেস্কু) ভূমিকা ও সামন্ততন্ত্রের অবসান।",
              keywords: ["ফরাসি বিপ্লব", "বাস্তিল দুর্গ", "রুশো", "ভলতেয়ার", "নেপোলিয়ন"]
            }
          ]
        },
        {
          id: "c12-hist2-ch3",
          chapterNumber: 3,
          title: "First World War and Treaty of Versailles",
          titleBangla: "৩য় অধ্যায়: প্রথম বিশ্বযুদ্ধ ও ভার্সাই চুক্তি",
          lessons: [
            {
              id: "c12-hist2-ch3-l1",
              point: "৩.১",
              title: "Causes of World War I (1914–1918), League of Nations and Treaty of Versailles (1919)",
              titleBangla: "৩.১ প্রথম বিশ্বযুদ্ধের কারণ, অক্ষশক্তি ও মিত্রশক্তি, ভার্সাই চুক্তি এবং লীগ অব নেশনস",
              summary: "সারায়েভো হত্যাকাণ্ড, উড্রো উইলসনের ১৪ দফা ও বিশ্বযুদ্ধের রাজনৈতিক রূপান্তর।",
              keywords: ["প্রথম বিশ্বযুদ্ধ", "ভার্সাই চুক্তি", "লীগ অব নেশনস", "উড্রো উইলসন"]
            }
          ]
        },
        {
          id: "c12-hist2-ch4",
          chapterNumber: 4,
          title: "Russian Revolution (Bolshevik Revolution 1917)",
          titleBangla: "৪র্থ অধ্যায়: রুশ বিপ্লব (বলশেভিক বিপ্লব ১৯১৭)",
          lessons: [
            {
              id: "c12-hist2-ch4-l1",
              point: "৪.১",
              title: "Fall of Tsarist Autocracy, Lenin's Leadership and Formation of USSR",
              titleBangla: "৪.১ জার শাসনের পতন, লেনিনের বলশেভিক বিপ্লব ও সমাজতান্ত্রিক সোভিয়েত ইউনিয়নের প্রতিষ্ঠা",
              summary: "অক্টোবর বিপ্লব, শ্রেণিহীন সমাজ ব্যবস্থা ও বিশ্ব রাজনীতিতে সমাজতন্ত্রের বিস্তার।",
              keywords: ["রুশ বিপ্লব", "লেনিন", "বলশেভিক", "সোভিয়েত ইউনিয়ন"]
            }
          ]
        },
        {
          id: "c12-hist2-ch5",
          chapterNumber: 5,
          title: "Second World War and United Nations",
          titleBangla: "৫ম অধ্যায়: দ্বিতীয় বিশ্বযুদ্ধ ও জাতিসংঘ প্রতিষ্ঠা",
          lessons: [
            {
              id: "c12-hist2-ch5-l1",
              point: "৫.১",
              title: "Rise of Fascism & Nazism, WWII (1939–1945) and Foundation of UN (1945)",
              titleBangla: "৫.১ ফ্যাসিবাদ ও নাৎসিবাদ (হিটলার-মুসোলিনি), দ্বিতীয় বিশ্বযুদ্ধ ও জাতিসংঘের প্রতিষ্ঠা",
              summary: "পার্ল হারবার আক্রমণ, হিরোশিমা-নাগাসাকিতে পরমাণু বোমা ও বিশ্বশান্তি রক্ষায় জাতিসংঘ।",
              keywords: ["দ্বিতীয় বিশ্বযুদ্ধ", "হিটলার", "জাতিসংঘ", "পরমাণু বোমা", "নাৎসিবাদ"]
            }
          ]
        },
        {
          id: "c12-hist2-ch6",
          chapterNumber: 6,
          title: "Cold War and Non-Aligned Movement (NAM)",
          titleBangla: "৬ষ্ঠ অধ্যায়: স্নায়ুযুদ্ধ ও জোট নিরপেক্ষ আন্দোলন",
          lessons: [
            {
              id: "c12-hist2-ch6-l1",
              point: "৬.১",
              title: "Superpower Rivalry (USA vs USSR), NATO, Warsaw Pact and NAM's Neutral Stance",
              titleBangla: "৬.১ মার্কিন ও সোভিয়েত ব্লকের স্নায়ুযুদ্ধ, ন্যাটো ও ওয়ারশ চুক্তি এবং ন্যাম (NAM) আন্দোলন",
              summary: "কিউবা ক্ষেপণাস্ত্র সংকট, বার্লিন প্রাচীর ও দ্বিমেরু বিশ্ব রাজনীতির অবসান।",
              keywords: ["স্নায়ুযুদ্ধ", "Cold War", "ন্যাটো", "ন্যাম", "জোট নিরপেক্ষ"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-log2",
      code: "LOG-122",
      name: "Logic 2nd Paper (Applied & Inductive Logic)",
      nameBangla: "যুক্তিবিদ্যা ২য় পত্র (আরোহ যুক্তিবিদ্যা)",
      group: "Humanities",
      coverColor: "from-violet-800 to-purple-950",
      chapters: [
        {
          id: "c12-log2-ch1",
          chapterNumber: 1,
          title: "Logical Definition",
          titleBangla: "১ম অধ্যায়: যৌক্তিক সংজ্ঞা",
          lessons: [
            {
              id: "c12-log2-ch1-l1",
              point: "১.১",
              title: "Rules of Definition and Fallacies: Redundant, Too Narrow, Too Wide, Negative",
              titleBangla: "১.১ সংজ্ঞার ৫টি নিয়ম এবং অতিব্যাপক, অব্যাপক, চক্রক ও নেতিবাচক অনুপপত্তি",
              summary: "আসন্নতম জাতি ও লক্ষণভিত্তিক সংজ্ঞায়ন এবং ভ্রান্ত সংজ্ঞা পরিহার।",
              keywords: ["যৌক্তিক সংজ্ঞা", "অতিব্যাপক অনুপপত্তি", "অব্যাপক", "আসন্নতম জাতি"]
            }
          ]
        },
        {
          id: "c12-log2-ch2",
          chapterNumber: 2,
          title: "Logical Division",
          titleBangla: "২য় অধ্যায়: যৌক্তিক বিভাগ",
          lessons: [
            {
              id: "c12-log2-ch2-l1",
              point: "২.১",
              title: "Rules of Division and Fallacies: Cross Division, Too Narrow, Too Wide",
              titleBangla: "২.১ বিভাগের নিয়মাবলী, পরস্পর বিচ্ছেদী উপজাতি এবং সংকর বিভাগ অনুপপত্তি",
              summary: "একটি মূলনীতির ভিত্তিতে জাতিকে উপজাতিতে সুশৃঙ্খল বিভাজন করার পদ্ধতি।",
              keywords: ["যৌক্তিক বিভাগ", "সংকর বিভাগ", "উপজাতি"]
            }
          ]
        },
        {
          id: "c12-log2-ch3",
          chapterNumber: 3,
          title: "Classification of Induction",
          titleBangla: "৩য় অধ্যায়: আরোহের প্রকারভেদ",
          lessons: [
            {
              id: "c12-log2-ch3-l1",
              point: "৩.১",
              title: "Scientific Induction, Unscientific Induction and Analogy",
              titleBangla: "৩.১ বৈজ্ঞানিক আরোহ, অবৈজ্ঞানিক আরোহ এবং সাধু ও অসাধু সাদৃশ্যানুমান",
              summary: "আরোহমূলক লম্ফ (Inductive Leap), প্রকৃতির একরূপতা নীতি ও কার্যকারণ নিয়ম।",
              keywords: ["বৈজ্ঞানিক আরোহ", "আরোহমূলক লম্ফ", "সাদৃশ্যানুমান", "প্রকৃতির একরূপতা"]
            }
          ]
        },
        {
          id: "c12-log2-ch4",
          chapterNumber: 4,
          title: "Hypothesis",
          titleBangla: "৪র্থ অধ্যায়: প্রকল্প",
          lessons: [
            {
              id: "c12-log2-ch4-l1",
              point: "৪.১",
              title: "Nature, Formation, Verification and Conditions of a Legitimate Hypothesis",
              titleBangla: "৪.১ প্রকল্পের স্বরূপ, প্রমাণ ও যাচাইকরণ এবং বৈধ প্রকল্পের শর্তাবলী",
              summary: "অনুমান ও বৈজ্ঞানিক সত্য আবিষ্কারে প্রকল্পের গুরুত্ব ও পরীক্ষামূলক যাচাই।",
              keywords: ["প্রকল্প", "Hypothesis", "বৈধ প্রকল্প", "যাচাইকরণ"]
            }
          ]
        },
        {
          id: "c12-log2-ch5",
          chapterNumber: 5,
          title: "Mill's Experimental Methods of Causal Connection",
          titleBangla: "৫ম অধ্যায়: কার্যকারণ সম্বন্ধ ও মিলের পরীক্ষণমূলক পদ্ধতিসমূহ",
          lessons: [
            {
              id: "c12-log2-ch5-l1",
              point: "৫.১",
              title: "Method of Agreement, Method of Difference and Joint Method",
              titleBangla: "৫.১ অন্বয়ী পদ্ধতি, ব্যতিরেকী পদ্ধতি, যৌথ অন্বয়ী-ব্যতিরেকী পদ্ধতি ও সহপরিবর্তন পদ্ধতি",
              summary: "জন স্টুয়ার্ট মিলের ৫টি আবিষ্কারের পদ্ধতি এবং কার্যকারণ নির্ণয়ে এদের প্রয়োগ।",
              keywords: ["মিলের পদ্ধতি", "অন্বয়ী পদ্ধতি", "ব্যতিরেকী পদ্ধতি", "কার্যকারণ সম্বন্ধ"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-soc2",
      code: "SOC-118",
      name: "Sociology 2nd Paper (Society of Bangladesh)",
      nameBangla: "সমাজবিজ্ঞান ২য় পত্র (বাংলাদেশের সমাজ)",
      group: "Humanities",
      coverColor: "from-teal-800 to-cyan-950",
      chapters: [
        {
          id: "c12-soc2-ch1",
          chapterNumber: 1,
          title: "Origin and Development of Sociology in Bangladesh",
          titleBangla: "১ম অধ্যায়: বাংলাদেশে সমাজবিজ্ঞান চর্চার পটভূমি",
          lessons: [
            {
              id: "c12-soc2-ch1-l1",
              point: "১.১",
              title: "Contribution of Prof. A. K. Nazmul Karim and Dhaka University's Role",
              titleBangla: "১.১ প্রফেসর এ কে নাজমুল করিমের অবদান ও ঢাকা বিশ্ববিদ্যালয়ে সমাজবিজ্ঞান বিভাগ প্রতিষ্ঠা",
              summary: "বাংলাদেশের সমাজ বাস্তবতা অনুধাবনে প্রাতিষ্ঠানিক সমাজবিজ্ঞান চর্চার ইতিহাস।",
              keywords: ["এ কে নাজমুল করিম", "ঢাকা বিশ্ববিদ্যালয়", "সমাজবিজ্ঞান চর্চা"]
            }
          ]
        },
        {
          id: "c12-soc2-ch2",
          chapterNumber: 2,
          title: "Society and Culture of Bangladesh",
          titleBangla: "২য় অধ্যায়: বাংলাদেশের সমাজ ও সংস্কৃতি",
          lessons: [
            {
              id: "c12-soc2-ch2-l1",
              point: "২.১",
              title: "Folk Culture, Festivals (Pohela Boishakh), Diversity and Religious Harmony",
              titleBangla: "২.১ লোকসংস্কৃতি, পহেলা বৈশাখ, উৎসবের ঐতিহ্য ও অসাম্প্রদায়িক সম্প্রীতি",
              summary: "বাঙালি সংস্কৃতির উপাদান, গ্রামীণ মেলা ও সাংস্কৃতিক পরিবর্তনের প্রভাব।",
              keywords: ["লোকসংস্কৃতি", "পহেলা বৈশাখ", "সাম্প্রদায়িক সম্প্রীতি", "সংস্কৃতি"]
            }
          ]
        },
        {
          id: "c12-soc2-ch3",
          chapterNumber: 3,
          title: "Archaeological Heritage of Bangladesh",
          titleBangla: "৩য় অধ্যায়: বাংলাদেশের প্রত্নতাত্ত্বিক ঐতিহ্য",
          lessons: [
            {
              id: "c12-soc2-ch3-l1",
              point: "৩.১",
              title: "Mahasthangarh, Paharpur Somapura Mahavihara, Mainamati & Panam City",
              titleBangla: "৩.১ মহাস্থানগড়, পাহাড়পুর বৌদ্ধ বিহার, ময়নামতী ও সোনারগাঁয়ের পানাম নগর",
              summary: "প্রাচীন ও মধ্যযুগীয় বাংলার সমৃদ্ধ ইতিহাস, স্থাপত্যকলা ও সভ্যতা।",
              keywords: ["মহাস্থানগড়", "পাহাড়পুর", "ময়নামতী", "পানাম নগর", "প্রত্নতাত্ত্বিক নিদর্শন"]
            }
          ]
        },
        {
          id: "c12-soc2-ch4",
          chapterNumber: 4,
          title: "Social and Cultural Life of Ethnic Communities",
          titleBangla: "৪র্থ অধ্যায়: বাংলাদেশের ক্ষুদ্র নৃগোষ্ঠীর সামাজিক ও সাংস্কৃতিক জীবন",
          lessons: [
            {
              id: "c12-soc2-ch4-l1",
              point: "৪.১",
              title: "Chakma, Garo (Matrilineal), Santhal and Marma Traditions and Lifestyles",
              titleBangla: "৪.১ চাকমা, গারো (মাতৃতান্ত্রিক সমাজ), সাঁওতাল ও মারমাদের পরিবার, বিবাহ ও ধর্মীয় উৎসব",
              summary: "গারো সমাজের নকমা ও মাতৃতান্ত্রিক উত্তরাধিকার, বিজু ও ওয়ানগালা উৎসব।",
              keywords: ["চাকমা", "গারো", "সাঁওতাল", "মাতৃতান্ত্রিক", "বিজু উৎসব"]
            }
          ]
        },
        {
          id: "c12-soc2-ch5",
          chapterNumber: 5,
          title: "Rural and Urban Society of Bangladesh",
          titleBangla: "৫ম অধ্যায়: বাংলাদেশের গ্রামীণ ও নগর সমাজ",
          lessons: [
            {
              id: "c12-soc2-ch5-l1",
              point: "৫.১",
              title: "Rural Power Structure, Modernization and Urban Slum Challenges",
              titleBangla: "৫.১ গ্রামীণ ক্ষমতা কাঠামো (মাতাFrame, সমাজ), দ্রুত নগরায়ন ও বস্তিবাসী সমস্যা",
              summary: "গ্রাম থেকে নগরমুখী অভিবাসন এবং নাগরিক সেবার অসম বণ্টন।",
              keywords: ["গ্রামীণ সমাজ", "ক্ষমতা কাঠামো", "নগরায়ন", "বস্তি সমস্যা"]
            }
          ]
        },
        {
          id: "c12-soc2-ch6",
          chapterNumber: 6,
          title: "Social Change in Bangladesh",
          titleBangla: "৬ষ্ঠ অধ্যায়: বাংলাদেশের সামাজিক পরিবর্তন",
          lessons: [
            {
              id: "c12-soc2-ch6-l1",
              point: "৬.১",
              title: "Factors of Social Change: Education, Technology, Women Empowerment & NGOs",
              titleBangla: "৬.১ নারী ক্ষমতায়ন, তথ্যপ্রযুক্তি, শিক্ষা ও এনজিওর ভূমিকা সামাজিক পরিবর্তনে",
              summary: "গ্রামীণ সমাজে আত্মকর্মসংস্থান, সচেতনতা বৃদ্ধি ও আধুনিক জীবনধারার বিস্তার।",
              keywords: ["সামাজিক পরিবর্তন", "নারী ক্ষমতায়ন", "তথ্যপ্রযুক্তি", "এনজিও"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-geog2",
      code: "GEO-126",
      name: "Geography 2nd Paper (Human & Economic Geography)",
      nameBangla: "ভূগোল ২য় পত্র (মানব ও অর্থনৈতিক ভূগোল)",
      group: "Humanities",
      coverColor: "from-emerald-800 to-green-950",
      chapters: [
        {
          id: "c12-geog2-ch1",
          chapterNumber: 1,
          title: "Introduction to Human Geography",
          titleBangla: "১ম অধ্যায়: মানব ভূগোল পরিচিতি",
          lessons: [
            {
              id: "c12-geog2-ch1-l1",
              point: "১.১",
              title: "Scope of Human Geography, Man-Environment Interaction and Determinism vs Possibilism",
              titleBangla: "১.১ মানব ভূগোলের পরিধি, মানুষ ও পরিবেশের সম্পর্ক (নিয়ন্ত্রণবাদ বনাম সম্ভববাদ)",
              summary: "ভৌগোলিক পরিবেশে মানব সম্প্রদায়ের অভিযোজন ও সাংস্কৃতিক ভূদৃশ্য তৈরি।",
              keywords: ["মানব ভূগোল", "নিয়ন্ত্রণবাদ", "সম্ভববাদ", "অভিযোজন"]
            }
          ]
        },
        {
          id: "c12-geog2-ch2",
          chapterNumber: 2,
          title: "Population and Migration",
          titleBangla: "২য় অধ্যায়: জনসংখ্যা ও অভিবাসন",
          lessons: [
            {
              id: "c12-geog2-ch2-l1",
              point: "২.১",
              title: "Global and Bangladesh Population Density, Push-Pull Factors of Migration",
              titleBangla: "২.১ জনসংখ্যার ঘনত্ব ও বণ্টন, অভিবাসনের আকর্ষণ ও বিকর্ষণমূলক কারণ (Push & Pull)",
              summary: "অভ্যন্তরীণ ও আন্তর্জাতিক অভিবাসনের অর্থনৈতিক প্রভাব ও জনমিতিক রূপান্তর মডেল।",
              keywords: ["জনসংখ্যা ঘনত্ব", "অভিবাসন", "আকর্ষণ কারণ", "বিকর্ষণ কারণ"]
            }
          ]
        },
        {
          id: "c12-geog2-ch3",
          chapterNumber: 3,
          title: "Human Settlements",
          titleBangla: "৩য় অধ্যায়: বসতি (গ্রামীণ ও নগর)",
          lessons: [
            {
              id: "c12-geog2-ch3-l1",
              point: "৩.১",
              title: "Rural Settlement Patterns (Linear, Nucleated, Dispersed) and Urban Hierarchy",
              titleBangla: "৩.১ রৈখিক, পুঞ্জীভূত ও বিক্ষিপ্ত গ্রামীণ বসতি এবং নগরায়নের বৈশিষ্ট্য",
              summary: "ভৌগোলিক সুযোগ-সুবিধা অনুযায়ী বসতি স্থাপন এবং মেগাসিটি ঢাকার নগর সমস্যা।",
              keywords: ["গ্রামীণ বসতি", "রৈখিক বসতি", "পুঞ্জীভূত", "মেগাসিটি"]
            }
          ]
        },
        {
          id: "c12-geog2-ch4",
          chapterNumber: 4,
          title: "Agriculture and Crop Production",
          titleBangla: "৪র্থ অধ্যায়: কৃষি ও ফসল উৎপাদন",
          lessons: [
            {
              id: "c12-geog2-ch4-l1",
              point: "৪.১",
              title: "Rice, Wheat, Tea, Jute & Cotton Cultivation: Geographical Conditions & Distribution",
              titleBangla: "৪.১ ধান, গম, চা ও পাট চাষের ভৌগোলিক নিয়ামক এবং বৈশ্বিক ও দেশীয় বণ্টন",
              summary: "মাটি, বৃষ্টিপাত, তাপমাত্রা এবং আধুনিক উন্নত কৃষি পদ্ধতির ভূমিকা।",
              keywords: ["ধান চাষ", "চা বাগান", "পাট", "ভৌগোলিক নিয়ামক"]
            }
          ]
        },
        {
          id: "c12-geog2-ch5",
          chapterNumber: 5,
          title: "Mineral and Energy Resources",
          titleBangla: "৫ম অধ্যায়: খনিজ ও শক্তি সম্পদ",
          lessons: [
            {
              id: "c12-geog2-ch5-l1",
              point: "৫.১",
              title: "Coal, Natural Gas, Petroleum and Renewable Energy (Solar & Wind)",
              titleBangla: "৫.১ কয়লা, প্রাকৃতিক গ্যাস ও পেট্রোলিয়ামের ব্যবহার এবং সৌর ও বায়ু নবায়নযোগ্য শক্তি",
              summary: "বাংলাদেশে তিতাস, কৈলাশটিলা গ্যাসক্ষেত্র ও রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র।",
              keywords: ["প্রাকৃতিক গ্যাস", "কয়লা", "নবায়নযোগ্য শক্তি", "সৌর বিদ্যুৎ"]
            }
          ]
        },
        {
          id: "c12-geog2-ch6",
          chapterNumber: 6,
          title: "Major Industries of Bangladesh and World",
          titleBangla: "৬ষ্ঠ অধ্যায়: বিশ্ব ও বাংলাদেশের প্রধান শিল্পসমূহ",
          lessons: [
            {
              id: "c12-geog2-ch6-l1",
              point: "৬.১",
              title: "Iron & Steel, Textile, Fertilizer, Pharmaceuticals and ICT Industry Localization",
              titleBangla: "৬.১ লোহা-ইস্পাত শিল্প, পোশাক ও টেক্সটাইল, ওষুধ ও তথ্যপ্রযুক্তি শিল্পের অবস্থান নির্ধারণ",
              summary: "ওয়েবারের শিল্প অবস্থান তত্ত্ব ও কাঁচামাল, পরিবহন ও বাজারের ভূমিকা।",
              keywords: ["লোহা-ইস্পাত শিল্প", "ওষুধ শিল্প", "শিল্পের অবস্থান", "ওয়েবারের তত্ত্ব"]
            }
          ]
        }
      ]
    },

    // ============================================================
    // ৫. ঐচ্ছিক বিষয় (Optional Group - ২য় পত্র)
    // ============================================================
    {
      id: "c12-agri2",
      code: "AGR-240",
      name: "Agriculture Studies 2nd Paper",
      nameBangla: "কৃষি শিক্ষা ২য় পত্র",
      group: "Optional",
      coverColor: "from-lime-700 to-green-900",
      chapters: [
        {
          id: "c12-agri2-ch1",
          chapterNumber: 1,
          title: "Fisheries and Aquaculture",
          titleBangla: "১ম অধ্যায়: মৎস্য চাষ ও জলজ ব্যবস্থাপনা",
          lessons: [
            {
              id: "c12-agri2-ch1-l1",
              point: "১.১",
              title: "Carp Poly-culture, Biofloc & Cage Aquaculture, Prawn/Shrimp Cultivation",
              titleBangla: "১.১ কার্প জাতীয় মাছের মিশ্র চাষ, বায়োফ্লক পদ্ধতি, খাঁচায় মাছ চাষ ও গলদা/বাগদা চিংড়ি",
              summary: "পুকুর প্রস্তুতি, সম্পূরক খাদ্য প্রয়োগ, পানির গুণাগুণ রক্ষা ও মাছের রোগ প্রতিকার।",
              keywords: ["মৎস্য চাষ", "বায়োফ্লক", "মিশ্র চাষ", "চিংড়ি চাষ", "খাঁচায় মাছ চাষ"]
            }
          ]
        },
        {
          id: "c12-agri2-ch2",
          chapterNumber: 2,
          title: "Poultry Farming",
          titleBangla: "২য় অধ্যায়: পোল্ট্রি পালন",
          lessons: [
            {
              id: "c12-agri2-ch2-l1",
              point: "২.১",
              title: "Broiler and Layer Farming, Housing, Feed Formulation & Vaccination",
              titleBangla: "২.১ ব্রয়লার ও লেয়ার মুরগি পালন, শেড নির্মাণ, খাদ্য প্রস্তুত ও রোগ প্রতিরোধী টিকা প্রদান",
              summary: "রানিখেত, গামবোরো রোগের লক্ষণ ও জৈব নিরাপত্তা (Biosecurity) বিধিমালা।",
              keywords: ["পোল্ট্রি পালন", "ব্রয়লার", "লেয়ার", "রানিখেত", "বায়োসিকিউরিটি"]
            }
          ]
        },
        {
          id: "c12-agri2-ch3",
          chapterNumber: 3,
          title: "Livestock and Dairy Production",
          titleBangla: "৩য় অধ্যায়: পশুসম্পদ ও দুগ্ধ উৎপাদন",
          lessons: [
            {
              id: "c12-agri2-ch3-l1",
              point: "৩.১",
              title: "High-yielding Dairy Cows, Beef Fattening, Silage Making and Disease Control",
              titleBangla: "৩.১ উন্নত জাতের গাভী পালন, গরু মোটাতাজাকরণ, সবুজ ঘাস সংরক্ষণ (সাইলেজ ও হে তৈরি)",
              summary: "কৃত্রিম প্রজনন প্রযুক্তি, সুষম দানাদার খাদ্য এবং তড়কা ও ক্ষুরারোগের চিকিৎসা।",
              keywords: ["ডেইরি খামার", "গরু মোটাতাজাকরণ", "সাইলেজ", "কৃত্রিম প্রজনন"]
            }
          ]
        },
        {
          id: "c12-agri2-ch4",
          chapterNumber: 4,
          title: "Forestry and Agroforestry",
          titleBangla: "৪র্থ অধ্যায়: বনায়ন ও কৃষি বনায়ন",
          lessons: [
            {
              id: "c12-agri2-ch4-l1",
              point: "৪.১",
              title: "Social Forestry, Mangrove Forest Conservation and Environmental Protection",
              titleBangla: "৪.১ সামাজিক বনায়ন, সুন্দরবন ম্যানগ্রোভ সংরক্ষণ ও উপকূলীয় সবুজ বেষ্টনী",
              summary: "কৃষি বনায়নের মডেল, বৃক্ষ রোপণ কর্মসূচি ও জলবায়ু সহনশীল পরিবেশ গঠন।",
              keywords: ["সামাজিক বনায়ন", "সুন্দরবন", "ম্যানগ্রোভ", "কৃষি বনায়ন"]
            }
          ]
        }
      ]
    },
    {
      id: "c12-psych2",
      code: "PSY-124",
      name: "Psychology 2nd Paper",
      nameBangla: "মনোবিজ্ঞান ২য় পত্র",
      group: "Optional",
      coverColor: "from-fuchsia-800 to-purple-950",
      chapters: [
        {
          id: "c12-psych2-ch1",
          chapterNumber: 1,
          title: "Intelligence and IQ Measurement",
          titleBangla: "১ম অধ্যায়: বুদ্ধি ও বুদ্ধিমত্তা পরিমাপ",
          lessons: [
            {
              id: "c12-psych2-ch1-l1",
              point: "১.১",
              title: "Theories of Intelligence (Spearman, Gardner), Binet-Simon & Stanford-Binet IQ Scale",
              titleBangla: "১.১ স্পিয়ারম্যানের দ্বি-উপাদান তত্ত্ব, গার্ডনারের বহুমুখী বুদ্ধি ও আইকিউ (IQ) পরিমাপক স্কেল",
              summary: "বুদ্ধ্যঙ্ক (IQ = MA/CA × 100) নির্ণয় এবং প্রতিভাবান ও মানসিক প্রতিবন্ধী ব্যক্তির বৈশিষ্ট্য।",
              keywords: ["বুদ্ধি", "আইকিউ", "IQ স্কেল", "বিনে-সাইমন", "গার্ডনার"]
            }
          ]
        },
        {
          id: "c12-psych2-ch2",
          chapterNumber: 2,
          title: "Personality Theories and Measurement",
          titleBangla: "২য় অধ্যায়: ব্যক্তিত্বের তত্ত্ব ও পরিমাপ",
          lessons: [
            {
              id: "c12-psych2-ch2-l1",
              point: "২.১",
              title: "Freud's Psychoanalytic Theory (Id, Ego, Superego) and Projective Tests (Rorschach)",
              titleBangla: "২.১ ফ্রয়েডের মনঃসমীক্ষণ তত্ত্ব (ইড, ইগো, সুপার-ইগো) ও রোরশাক ইংকব্লট অভীক্ষা",
              summary: "অলপোর্ট ও ক্যাটেলের বৈশিষ্ট্য তত্ত্ব, সাক্ষাৎকার ও প্রক্ষেপণমূলক ব্যক্তিত্ব পরিমাপ।",
              keywords: ["ব্যক্তিত্ব", "ফ্রয়েড", "ইড ও ইগো", "রোরশাক অভীক্ষা"]
            }
          ]
        },
        {
          id: "c12-psych2-ch3",
          chapterNumber: 3,
          title: "Mental Health and Psychopathology",
          titleBangla: "৩য় অধ্যায়: মানসিক স্বাস্থ্য ও মনোব্যাধি",
          lessons: [
            {
              id: "c12-psych2-ch3-l1",
              point: "৩.১",
              title: "Anxiety Disorders, Depression, Schizophrenia and Stress Management Coping",
              titleBangla: "৩.১ উদ্বেগজনিত ব্যাধি, বিষণ্নতা, সিজোফ্রেনিয়া ও মানসিক চাপ মোকাবিলা কৌশল",
              summary: "মনোরোগের কারণ, উপসর্গ এবং সাইকোথেরাপি ও কাউন্সেলিং এর ভূমিকা।",
              keywords: ["মানসিক স্বাস্থ্য", "বিষণ্নতা", "সিজোফ্রেনিয়া", "চাপ ব্যবস্থাপনা", "কাউন্সেলিং"]
            }
          ]
        },
        {
          id: "c12-psych2-ch4",
          chapterNumber: 4,
          title: "Statistics in Psychology",
          titleBangla: "৪র্থ অধ্যায়: মনোবিজ্ঞানে পরিসংখ্যানের ব্যবহার",
          lessons: [
            {
              id: "c12-psych2-ch4-l1",
              point: "৪.১",
              title: "Central Tendency (Mean, Median, Mode) and Pearson's Correlation Coefficient",
              titleBangla: "৪.১ কেন্দ্রীয় প্রবণতা (গড়, মধ্যমা, প্রচুরক) ও কার্ল পিয়ারসনের সহসম্বন্ধ গুণাঙ্ক (r)",
              summary: "মনোবৈজ্ঞানিক গবেষণায় উপাত্ত বিশ্লেষণ ও ফলাফলের তাৎপর্য নির্ণয়।",
              keywords: ["পরিসংখ্যান", "গড়", "মধ্যমা", "প্রচুরক", "সহসম্বন্ধ"]
            }
          ]
        }
      ]
    },

    // ==========================================
    // ২০. ইসলামের ইতিহাস ও সংস্কৃতি ২য় পত্র (Islamic History & Culture 2nd)
    // ==========================================
    {
      id: "c12-islamic-history",
      code: "IHC2-12",
      name: "Islamic History & Culture 2nd Paper",
      nameBangla: "ইসলামের ইতিহাস ও সংস্কৃতি ২য় পত্র (ভারতে ও বাংলায় মুসলিম শাসন)",
      group: "Humanities",
      coverColor: "from-emerald-800 to-teal-950",
      chapters: [
        {
          id: "c12-ihc2-ch1",
          chapterNumber: 1,
          title: "Establishment of Muslim Rule in India",
          titleBangla: "১ম অধ্যায়: ভারতে মুসলিম শাসন প্রতিষ্ঠা (মুহাম্মদ বিন কাসিম ও সুলতান মাহমুদ)",
          lessons: [
            {
              id: "c12-ihc2-ch1-l1",
              point: "১.১",
              title: "Sindh Conquest (712 AD) and Sultan Mahmud's Expeditions",
              titleBangla: "১.১ ৭১২ সালে মুহাম্মদ বিন কাসিমের সিন্ধু বিজয় ও সুলতান মাহমুদের ভারত অভিযান",
              summary: "সিন্ধু বিজয়ের কারণ ও ফলাফল, আল-বিরুনির 'কিতাবুল হিন্দ' এবং সোমনাথ মন্দির অভিযান মূল্যায়ন।",
              keywords: ["মুহাম্মদ বিন কাসিম", "সিন্ধু বিজয়", "সুলতান মাহমুদ", "আল-বিরুনি", "কিতাবুল হিন্দ"]
            }
          ]
        },
        {
          id: "c12-ihc2-ch2",
          chapterNumber: 2,
          title: "The Delhi Sultanate (1206-1526 AD)",
          titleBangla: "২য় অধ্যায়: দিল্লি সালতানাত (দাস, খলজি, তুঘলক ও লোদি বংশ)",
          lessons: [
            {
              id: "c12-ihc2-ch2-l1",
              point: "২.১",
              title: "Qutb ud-Din Aibak, Iltutmish, Balban and Alauddin Khalji's Market Control",
              titleBangla: "২.১ ইলতুৎমিশের শাসন সংহতকরণ ও আলাউদ্দিন খলজির মূল্য নিয়ন্ত্রণ নীতি",
              summary: "বুলবুল-ই-হিন্দ আমির খসরু, মুহাম্মদ বিন তুঘলকের রাজধানী স্থানান্তর ও পথিকৃৎ প্রতীকী মুদ্রা প্রবর্তন।",
              keywords: ["দিল্লি সালতানাত", "ইলতুৎমিশ", "আলাউদ্দিন খলজি", "মূল্য নিয়ন্ত্রণ", "মুহাম্মদ বিন তুঘলক"]
            }
          ]
        },
        {
          id: "c12-ihc2-ch3",
          chapterNumber: 3,
          title: "Muslim Rule in Bengal (Independent Sultanate)",
          titleBangla: "৩য় অধ্যায়: বাংলায় মুসলিম শাসন (ইখতিয়ার উদ্দিন ও স্বাধীন সুলতানি আমল)",
          lessons: [
            {
              id: "c12-ihc2-ch3-l1",
              point: "৩.১",
              title: "Bakhtiyar Khalji's Nadia Conquest (1204) and Ilyas Shahi & Husain Shahi Dynasties",
              titleBangla: "৩.১ বখতিয়ার খলজির নদিয়া বিজয়, ইলিয়াস শাহী ও আলাউদ্দিন হোসেন শাহের সুবর্ণযুগ",
              summary: "বাংলা ভাষার পৃষ্ঠপোষকতা, শ্রীচৈতন্যের বৈষ্ণব আন্দোলন এবং গৌড় ও পান্ডুয়ার ঐতিহাসিক স্থাপত্য নিদর্শন।",
              keywords: ["বখতিয়ার খলজি", "ইলিয়াস শাহী", "হোসেন শাহ", "স্বাধীন সুলতানি আমল", "বাংলা সাহিত্য"]
            }
          ]
        },
        {
          id: "c12-ihc2-ch4",
          chapterNumber: 4,
          title: "The Mughal Empire in India",
          titleBangla: "৪র্থ অধ্যায়: ভারতে মুঘল সাম্রাজ্য (পানিপথ যুদ্ধ থেকে আওরঙ্গজেব)",
          lessons: [
            {
              id: "c12-ihc2-ch4-l1",
              point: "৪.১",
              title: "Babur, Sher Shah's Administrative Reforms, Akbar's Mansabdari & Din-i Ilahi",
              titleBangla: "৪.১ বাবর, শেরশাহের গ্র্যান্ড ট্রাঙ্ক রোড এবং আকবরের মনসবদারি প্রথা ও দীন-ই-ইলাহি",
              summary: "শেরশাহের ভূমি রাজস্ব ব্যবস্থা ও কবুলিয়ত-পাট্টা, আকবরের রাজপুত নীতি এবং আবুল ফজলের 'আইন-ই-আকবরী'।",
              keywords: ["মুঘল সাম্রাজ্য", "শেরশাহ", "আকবর", "মনসবদারি প্রথা", "দীন-ই-ইলাহি"]
            }
          ]
        },
        {
          id: "c12-ihc2-ch5",
          chapterNumber: 5,
          title: "Mughal Architecture and Fall of the Empire",
          titleBangla: "৫ম অধ্যায়: মুঘল স্থাপত্যশিল্প, চিত্রকলা ও সাম্রাজ্যের পতন",
          lessons: [
            {
              id: "c12-ihc2-ch5-l1",
              point: "৫.১",
              title: "Shah Jahan's Taj Mahal, Lalbagh Fort in Dhaka and Battle of Plassey (1757)",
              titleBangla: "৫.১ শাহজাহানের তাজমহল, ঢাকার লালবাগ কেল্লা ও পলাশীর যুদ্ধের পটভূমি",
              summary: "বিশ্ববিখ্যাত মুঘল স্থাপত্য, সুবাহ বাংলায় শায়েস্তা খানের সুবর্ণযুগ এবং ১৭৫৭ সালে নবাব সিরাজউদ্দৌলার পরাজয়ে ব্রিটিশ শাসনের সূচনা।",
              keywords: ["তাজমহল", "লালবাগ কেল্লা", "শায়েস্তা খান", "নবাব সিরাজউদ্দৌলা", "পলাশীর যুদ্ধ"]
            }
          ]
        }
      ]
    },

    // ==========================================
    // ২১. ইসলাম শিক্ষা ২য় পত্র (Islamic Studies 2nd)
    // ==========================================
    {
      id: "c12-islamic-studies",
      code: "IS2-12",
      name: "Islamic Studies 2nd Paper",
      nameBangla: "ইসলাম শিক্ষা ২য় পত্র (আধুনিক সমাজ, অর্থনীতি ও রাষ্ট্রদর্শন)",
      group: "Humanities",
      coverColor: "from-green-700 to-teal-900",
      chapters: [
        {
          id: "c12-is2-ch1",
          chapterNumber: 1,
          title: "Islamic Economic System and Banking",
          titleBangla: "১ম অধ্যায়: ইসলামি অর্থব্যবস্থা ও সুদমুক্ত ব্যাংক ব্যবস্থাপনা",
          lessons: [
            {
              id: "c12-is2-ch1-l1",
              point: "১.১",
              title: "Prohibition of Riba (Interest), Mudarabah, Musharakah and Islamic Microfinance",
              titleBangla: "১.১ সুদের কুফল ও বর্জন, মুদারাবা-মুশারাকা নীতি এবং ইসলামি মাইক্রোফাইন্যান্স",
              summary: "অর্থনীতির সুষম বণ্টন, মুনাফা ও ক্ষতি ভাগাভাগির অংশীদারি বিনিয়োগ এবং উৎপাদনশীল কর্মসংস্থান সৃষ্টি।",
              keywords: ["ইসলামি অর্থনীতি", "সুদ বর্জন", "মুদারাবা", "মুশারাকা", "ইসলামি ব্যাংকিং"]
            }
          ]
        },
        {
          id: "c12-is2-ch2",
          chapterNumber: 2,
          title: "Islamic State, Good Governance and Leadership",
          titleBangla: "২য় অধ্যায়: ইসলামি রাষ্ট্রব্যবস্থা, সুশাসন ও নেতৃত্বের গুণাবলি",
          lessons: [
            {
              id: "c12-is2-ch2-l1",
              point: "২.১",
              title: "Sovereignty of Allah, Shura (Consultation) and Public Accountability",
              titleBangla: "২.১ সার্বভৌমত্ব, শুরাভিত্তিক পরামর্শমূলক শাসন ও প্রশাসকের জবাবদিহিতা",
              summary: "রাষ্ট্রনায়ক ও নাগরিকের পারস্পরিক অধিকার, ইনসাফ ও আইনের দৃষ্টিতে সমতা এবং দুর্নীতিমুক্ত সুশাসন।",
              keywords: ["সার্বভৌমত্ব", "শুরা পরিষদ", "সুশাসন", "জবাবদিহিতা", "আইনের শাসন"]
            }
          ]
        },
        {
          id: "c12-is2-ch3",
          chapterNumber: 3,
          title: "Contributions of Muslim Scholars to Science and Civilization",
          titleBangla: "৩য় অধ্যায়: বিজ্ঞান, গবেষণা ও চিকিৎসায় মুসলিম বিজ্ঞানীদের অবদান",
          lessons: [
            {
              id: "c12-is2-ch3-l1",
              point: "৩.১",
              title: "Ibn Sina, Al-Razi, Jabir ibn Hayyan, Al-Khwarizmi, and Ibn al-Haytham",
              titleBangla: "৩.১ ইবনে সিনা, আল-খোয়ারিজমি, জাবির ইবনে হাইয়ান ও ইবনুল হাইসামের আবিষ্কার",
              summary: "বীজগণিত, রসায়নবিজ্ঞান, আলোকবিজ্ঞান ও চিকিৎসা বিজ্ঞানে 'আল-কানুন ফিত তিব্ব'-এর অবিস্মরণীয় অবদান।",
              keywords: ["মুসলিম বিজ্ঞানী", "ইবনে সিনা", "আল-খোয়ারিজমি", "জাবির ইবনে হাইয়ান", "চিকিৎসাবিজ্ঞান"]
            }
          ]
        },
        {
          id: "c12-is2-ch4",
          chapterNumber: 4,
          title: "Islam in the Contemporary World and Global Peace",
          titleBangla: "৪র্থ অধ্যায়: সমকালীন বিশ্বে ইসলাম ও আন্তর্জাতিক শান্তি প্রতিষ্ঠা",
          lessons: [
            {
              id: "c12-is2-ch4-l1",
              point: "৪.১",
              title: "Eliminating Extremism, Environmental Protection and Interfaith Harmony",
              titleBangla: "৪.১ উগ্রবাদ ও সন্ত্রাস দমন, পরিবেশ সংরক্ষণ এবং আন্তঃধর্মীয় সম্প্রীতি",
              summary: "শান্তির ধর্ম হিসেবে ইসলামের মধ্যমপন্থা (ওয়াসাতিয়্যাহ), জীবের যত্ন এবং মানবাধিকার সুরক্ষায় বৈশ্বিক ঐক্য।",
              keywords: ["শান্তি", "মধ্যমপন্থা", "পরিবেশ সংরক্ষণ", "সম্প্রীতি", "উগ্রবাদ দমন"]
            }
          ]
        }
      ]
    },

    // ==========================================
    // ২২. সমাজকর্ম ২য় পত্র (Social Work 2nd)
    // ==========================================
    {
      id: "c12-social-work",
      code: "SW2-12",
      name: "Social Work 2nd Paper",
      nameBangla: "সমাজকর্ম ২য় পত্র (বাংলাদেশে সামাজিক সমস্যা ও সমাধান)",
      group: "Humanities",
      coverColor: "from-blue-700 to-indigo-950",
      chapters: [
        {
          id: "c12-sw2-ch1",
          chapterNumber: 1,
          title: "Basic Human Needs in Bangladesh",
          titleBangla: "১ম অধ্যায়: বাংলাদেশে মৌলিক মানবিক চাহিদা ও এর অপূর্ণতাজনিত সমস্যা",
          lessons: [
            {
              id: "c12-sw2-ch1-l1",
              point: "১.১",
              title: "Food, Clothing, Shelter, Health, Education, Recreation Deficits",
              titleBangla: "১.১ খাদ্য, বস্ত্র, বাসস্থান, শিক্ষা, চিকিৎসা ও চিত্তবিনোদনের সংকট ও সমাধানের উপায়",
              summary: "মৌলিক চাহিদা পূরণ না হওয়ার মনস্তাত্ত্বিক ও সামাজিক কুফল এবং সরকারি সামাজিক নিরাপত্তা বেষ্টনী কর্মসূচি।",
              keywords: ["মৌলিক চাহিদা", "সামাজিক নিরাপত্তা বেষ্টনী", "দারিদ্র্য", "বঞ্চিত জনগোষ্ঠী"]
            }
          ]
        },
        {
          id: "c12-sw2-ch2",
          chapterNumber: 2,
          title: "Social Problems in Bangladesh",
          titleBangla: "২য় অধ্যায়: বাংলাদেশের প্রধান সামাজিক সমস্যাসমূহ",
          lessons: [
            {
              id: "c12-sw2-ch2-l1",
              point: "২.১",
              title: "Poverty, Unemployment, Population Explosion, Juvenile Delinquency & Drug Addiction",
              titleBangla: "২.১ দারিদ্র্য, বেকারত্ব, জনসংখ্যা বৃদ্ধি, কিশোর অপরাধ ও মাদকাসক্তি নিরাময়",
              summary: "সমস্যার কার্যকারণ বিশ্লেষণ, সংশোধনমূলক ব্যবস্থা এবং কিশোর আদালত ও রিহ্যাবিলিটেশন সেন্টারের ভূমিকা।",
              keywords: ["দারিদ্র্য", "কিশোর অপরাধ", "বেকারত্ব", "মাদকাসক্তি", "পুনর্বাসন"]
            }
          ]
        },
        {
          id: "c12-sw2-ch3",
          chapterNumber: 3,
          title: "Social Legislation and Rights Protection",
          titleBangla: "৩য় অধ্যায়: সামাজিক আইন ও নারী-শিশু অধিকার সুরক্ষা",
          lessons: [
            {
              id: "c12-sw2-ch3-l1",
              point: "৩.১",
              title: "Child Marriage Restraint Act, Dowry Prohibition Act & Domestic Violence Prevention",
              titleBangla: "৩.১ বাল্যবিয়ে নিরোধ আইন, যৌতুক নিরোধ আইন এবং পারিবারিক সহিংসতা প্রতিরোধ আইন",
              summary: "আইনের প্রয়োগ, সামাজিক সচেতনতা বৃদ্ধি এবং আইনি সহায়তা প্রদানকারী সংস্থার কার্যক্রম।",
              keywords: ["সামাজিক আইন", "বাল্যবিয়ে নিরোধ", "যৌতুক প্রতিরোধ", "নারী নির্যাতন রোধ"]
            }
          ]
        },
        {
          id: "c12-sw2-ch4",
          chapterNumber: 4,
          title: "Role of NGOs and Social Development Agencies",
          titleBangla: "৪র্থ অধ্যায়: বেসরকারি স্বেচ্ছাসেবী সংস্থা (NGO) ও সরকারি সমাজসেবা অধিদপ্তর",
          lessons: [
            {
              id: "c12-sw2-ch4-l1",
              point: "৪.১",
              title: "BRAC, Grameen Bank, Red Crescent and Rural Social Service (RSS)",
              titleBangla: "৪.১ ব্র্যাক, গ্রামীণ ব্যাংক, রেড ক্রিসেন্ট এবং পল্লী সমাজসেবা (RSS) কর্মসূচি",
              summary: "ক্ষুদ্রঋণ, নারীর ক্ষমতায়ন, দুর্যোগ ব্যবস্থাপনা ও দারিদ্র্য বিমোচনে বহুমুখী উন্নয়ন মডেল।",
              keywords: ["ব্র্যাক", "গ্রামীণ ব্যাংক", "রেড ক্রিসেন্ট", "পল্লী সমাজসেবা", "এনজিও"]
            }
          ]
        }
      ]
    },

    // ==========================================
    // ২৩. গার্হস্থ্য বিজ্ঞান ২য় পত্র (Home Science 2nd)
    // ==========================================
    {
      id: "c12-home-science",
      code: "HSC2-12",
      name: "Home Science 2nd Paper",
      nameBangla: "গার্হস্থ্য বিজ্ঞান ২য় পত্র (পারিবারিক সম্পর্ক, বিশেষ শিশু ও বস্ত্রবিজ্ঞান)",
      group: "Optional",
      coverColor: "from-rose-700 to-pink-950",
      chapters: [
        {
          id: "c12-hs2-ch1",
          chapterNumber: 1,
          title: "Family Dynamics and Parent-Youth Relationship",
          titleBangla: "১ম অধ্যায়: পারিবারিক সম্পর্ক, আন্তঃব্যক্তিক যোগাযোগ ও দাম্পত্য সুখ",
          lessons: [
            {
              id: "c12-hs2-ch1-l1",
              point: "১.১",
              title: "Interpersonal Empathy, Conflict Resolution and Elder Care",
              titleBangla: "১.১ পারিবারিক দ্বন্দ্ব নিরসন, বয়োজ্যেষ্ঠদের যত্ন ও মানসিক স্বাস্থ্য সুরক্ষা",
              summary: "পরিবারে যৌথ সিদ্ধান্ত গ্রহণ, সহমর্মিতা চর্চা এবং প্রবীণদের শারীরিক ও মানসিক সহায়তা প্রদান।",
              keywords: ["পারিবারিক সম্পর্ক", "দ্বন্দ্ব নিরসন", "প্রবীণদের যত্ন", "সহমর্মিতা"]
            }
          ]
        },
        {
          id: "c12-hs2-ch2",
          chapterNumber: 2,
          title: "Care and Inclusion of Children with Special Needs",
          titleBangla: "২য় অধ্যায়: বিশেষ চাহিদাসম্পন্ন শিশুর যত্ন ও একীভূত শিক্ষা",
          lessons: [
            {
              id: "c12-hs2-ch2-l1",
              point: "২.১",
              title: "Autism, Cerebral Palsy, Hearing/Visual Impairment and Inclusive Schooling",
              titleBangla: "২.১ অটিজম, দৃষ্টি ও বাক-শ্রবণ প্রতিবন্ধিতা এবং বিশেষ শিশুর একীভূত শিক্ষা",
              summary: "বিশেষ চাহিদাসম্পন্ন শিশুদের সুপ্ত প্রতিভার বিকাশ, ইতিবাচক আচরণ এবং সামাজিক পুনর্বাসন কর্মসূচি।",
              keywords: ["অটিজম", "বিশেষ শিশু", "একীভূত শিক্ষা", "প্রতিবন্ধিতা", "পুনর্বাসন"]
            }
          ]
        },
        {
          id: "c12-hs2-ch3",
          chapterNumber: 3,
          title: "Textile Science, Weaving and Fashion Design",
          titleBangla: "৩য় অধ্যায়: বস্ত্রবিজ্ঞান, বয়ন প্রক্রিয়া ও আধুনিক পোশাকের নকশা",
          lessons: [
            {
              id: "c12-hs2-ch3-l1",
              point: "৩.১",
              title: "Yarn Spinning, Plain/Twill/Satin Weaving, Fabric Printing and Dyeing",
              titleBangla: "৩.১ সুতা প্রস্তুতকরণ, বিভিন্ন বয়ন পদ্ধতি এবং বাটিক ও ব্লক প্রিন্টিং প্রযুক্তি",
              summary: "বস্ত্রশিল্পের যান্ত্রিক ও হস্তশিল্প কৌশল, রঙের স্থায়িত্ব পরীক্ষা এবং পেশাগত ফ্যাশন ডিজাইনিং।",
              keywords: ["বস্ত্রবিজ্ঞান", "বয়ন", "ব্লক প্রিন্টিং", "বাটিক", "ফ্যাশন ডিজাইন"]
            }
          ]
        },
        {
          id: "c12-hs2-ch4",
          chapterNumber: 4,
          title: "Food Security, Quality Control and Safe Storage",
          titleBangla: "৪র্থ অধ্যায়: খাদ্য নিরাপত্তা, পুষ্টিমান নিয়ন্ত্রণ ও ভেজাল প্রতিরোধ",
          lessons: [
            {
              id: "c12-hs2-ch4-l1",
              point: "৪.১",
              title: "BSTI Standards, Food Adulteration Hazards, and Modern Freeze Drying",
              titleBangla: "৪.১ খাদ্যে ভেজাল শনাক্তকরণ, বিএসটিআই মানদণ্ড ও স্বাস্থ্যসম্মত হিমায়ন",
              summary: "ফরমালিন ও রাসায়নিক রঙ মিশ্রিত খাদ্য পরিহার, ভোক্তা অধিকার সংরক্ষণ ও পুষ্টি উপাদান অক্ষুণ্ণ রাখা।",
              keywords: ["খাদ্য নিরাপত্তা", "বিএসটিআই", "ভেজাল প্রতিরোধ", "ভোক্তা অধিকার", "হিমায়ন"]
            }
          ]
        }
      ]
    },

    // ==========================================
    // ২৪. পরিসংখ্যান ২য় পত্র (Statistics 2nd)
    // ==========================================
    {
      id: "c12-statistics",
      code: "STAT2-12",
      name: "Statistics 2nd Paper",
      nameBangla: "পরিসংখ্যান ২য় পত্র (সম্ভাবনা ও ফলিত পরিসংখ্যান)",
      group: "Science",
      coverColor: "from-sky-700 to-indigo-950",
      chapters: [
        {
          id: "c12-stat2-ch1",
          chapterNumber: 1,
          title: "Probability and Laws of Probability",
          titleBangla: "১ম অধ্যায়: সম্ভাবনা (Probability)",
          lessons: [
            {
              id: "c12-stat2-ch1-l1",
              point: "১.১",
              title: "Addition & Multiplication Theorems, Conditional Probability & Bayes' Theorem",
              titleBangla: "১.১ যোগ ও গুণন সূত্র, শর্তাধীন সম্ভাবনা ও বেইজের উপপাদ্য P(A|B)",
              summary: "নমুনা ক্ষেত্র, পরস্পর বর্জনশীল ও অবর্জনশীল ঘটনা, স্বাধীন ঘটনা এবং বেইজের উপপাদ্যের বাস্তব সমস্যায় প্রয়োগ।",
              keywords: ["সম্ভাবনা", "যোগ সূত্র", "গুণন সূত্র", "শর্তাধীন সম্ভাবনা", "বেইজের উপপাদ্য"]
            }
          ]
        },
        {
          id: "c12-stat2-ch2",
          chapterNumber: 2,
          title: "Random Variable and Probability Distribution",
          titleBangla: "২য় অধ্যায়: দৈব চলক ও গাণিতিক প্রত্যাশা",
          lessons: [
            {
              id: "c12-stat2-ch2-l1",
              point: "২.১",
              title: "Discrete/Continuous Random Variables, Mathematical Expectation E(X) and Var(X)",
              titleBangla: "২.১ বিচ্ছিন্ন-অবিচ্ছিন্ন দৈব চলক, গাণিতিক প্রত্যাশা E(X) ও ভেদাঙ্ক নির্ণয়",
              summary: "সম্ভাবনা ফাংশন (PMF/PDF), প্রত্যাশার ধর্মাবলি E(aX + b) = aE(X) + b এবং Var(aX + b) = a^2Var(X) প্রমাণ।",
              keywords: ["দৈব চলক", "গাণিতিক প্রত্যাশা", "ভেদাঙ্ক", "সম্ভাবনা ঘনত্ব ফাংশন"]
            }
          ]
        },
        {
          id: "c12-stat2-ch3",
          chapterNumber: 3,
          title: "Binomial Distribution",
          titleBangla: "৩য় অধ্যায়: দ্বিপদী বিন্যাস (Binomial Distribution)",
          lessons: [
            {
              id: "c12-stat2-ch3-l1",
              point: "৩.১",
              title: "Bernoulli Trials, Binomial PMF: P(X=r) = nCr p^r q^(n-r), Mean and Variance",
              titleBangla: "৩.১ বার্নোলি চেষ্টা, দ্বিপদী বিন্যাসের গড় (np) ও ভেদাঙ্ক (npq)",
              summary: "দ্বিপদী বিন্যাসের শর্তাবলি, গড় সর্বদা ভেদাঙ্ক অপেক্ষা বৃহত্তর (np > npq) এবং এর বাস্তব প্রয়োগ।",
              keywords: ["দ্বিপদী বিন্যাস", "বার্নোলি চেষ্টা", "গড় np", "ভেদাঙ্ক npq"]
            }
          ]
        },
        {
          id: "c12-stat2-ch4",
          chapterNumber: 4,
          title: "Poisson Distribution",
          titleBangla: "৪র্থ অধ্যায়: পয়সন বিন্যাস (Poisson Distribution)",
          lessons: [
            {
              id: "c12-stat2-ch4-l1",
              point: "৪.১",
              title: "Poisson PMF, Rare Events Approximation (n -> inf, p -> 0), Mean = Variance = m",
              titleBangla: "৪.১ পয়সন বিন্যাসের গড় ও ভেদাঙ্কের সমতা (Mean = Variance = m) ও বিরল ঘটনা",
              summary: "সড়ক দুর্ঘটনা, টাইপিং ভুল বা কল সেন্টারের কলের মতো বিরল ঘটনার সম্ভাবনায় পয়সন বিন্যাসের ব্যবহার।",
              keywords: ["পয়সন বিন্যাস", "বিরল ঘটনা", "গড় ভেদাঙ্ক সমান", "প্যারামিটার m"]
            }
          ]
        },
        {
          id: "c12-stat2-ch5",
          chapterNumber: 5,
          title: "Normal Distribution",
          titleBangla: "৫ম অধ্যায়: পরিমিত বিন্যাস (Normal Distribution)",
          lessons: [
            {
              id: "c12-stat2-ch5-l1",
              point: "৫.১",
              title: "Bell-shaped Curve, Standard Normal Variable Z = (X - μ)/σ and Area Under Curve",
              titleBangla: "৫.১ ঘণ্টাকৃতির প্রতিসম বক্ররেখা, আদর্শ পরিমিত চলক (Z) ও ক্ষেত্রফল নির্ণয়",
              summary: "μ ± 1σ (৬৮.২৬%), μ ± 2σ (৯৫.৪৪%), μ ± 3σ (৯৯.৭৩%) ক্ষেত্রফল নীতি এবং সাধারণ পরীক্ষার নম্বর বিশ্লেষণে পরিমিত বিন্যাস।",
              keywords: ["পরিমিত বিন্যাস", "আদর্শ পরিমিত চলক Z", "ঘণ্টাকৃতি রেখা", "ক্ষেত্রফল"]
            }
          ]
        },
        {
          id: "c12-stat2-ch6",
          chapterNumber: 6,
          title: "Vital Statistics and Demography",
          titleBangla: "৬ষ্ঠ অধ্যায়: জীবন পরিসংখ্যান (Vital Statistics)",
          lessons: [
            {
              id: "c12-stat2-ch6-l1",
              point: "৬.১",
              title: "Crude Birth Rate (CBR), Infant Mortality Rate (IMR), and Life Table (lx, qx, ex)",
              titleBangla: "৬.১ স্থূল জন্মহার (CBR), শিশুমৃত্যু হার (IMR) ও পূর্ণাঙ্গ জীবন সারণি",
              summary: "জনসংখ্যা প্রক্ষেপণ, মৃত্যুর সম্ভাবনা qx, আয়ুষ্কাল প্রত্যাশা ex এবং জাতীয় জনসংখ্যা পরিকল্পনার রূপরেখা।",
              keywords: ["জীবন পরিসংখ্যান", "CBR", "IMR", "জীবন সারণি", "প্রত্যাশিত আয়ু"]
            }
          ]
        }
      ]
    }
  ]
};
