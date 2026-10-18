import { ClassGrade } from '../types';

export const CLASS_8_DATA: ClassGrade = {
  id: "class-8",
  numeric: 8,
  name: "Class 8",
  nameBangla: "৮ম শ্রেণি",
  stage: "Junior Secondary",
  stageBangla: "নিম্ন মাধ্যমিক",
  description: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত অষ্টম শ্রেণির সকল পাঠ্যপুস্তক, পূর্ণাঙ্গ অধ্যায় ও সুনির্দিষ্ট লেসন পয়েন্টের পূর্ণাঙ্গ ডেটাসেট",
  subjects: [
    // ====================================================
    // ১. বাংলা (Bangla)
    // ====================================================
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
              title: "Contextual and Purposeful Dialogue",
              titleBangla: "১.১ পরিস্থিতি ও প্রেক্ষাপট অনুযায়ী উদ্দেশ্যভিত্তিক যোগাযোগ",
              summary: "ব্যক্তি, অবস্থান ও বিষয়ের প্রয়োজনীয়তা বুঝে যুক্তিপূর্ণ ও স্পষ্ট যোগাযোগ স্থাপন।",
              keywords: ["পরিস্থিতি", "যোগাযোগ", "উদ্দেশ্যভিত্তিক", "স্পষ্টতা"]
            },
            {
              id: "c8-ban-ch1-l2",
              point: "১.২",
              title: "Mediums and Tools of Communication",
              titleBangla: "১.২ যোগাযোগের মাধ্যম ও উপকরণের যথাযথ ব্যবহার",
              summary: "প্রত্যক্ষ, লিখিত ও ডিজিটাল মাধ্যমে কার্যকরভাবে তথ্য ও মতামত প্রকাশ।",
              keywords: ["মাধ্যম", "উপকরণ", "ডিজিটাল যোগাযোগ", "লিখিত রূপ"]
            },
            {
              id: "c8-ban-ch1-l3",
              point: "১.৩",
              title: "Verbal and Non-verbal Expressions",
              titleBangla: "১.৩ বাচনিক ও অবাচনিক প্রকাশভঙ্গির সমন্বয়",
              summary: "বডি ল্যাঙ্গুয়েজ, দৃষ্টি সংযোগ ও কণ্ঠস্বরের ভারসাম্যপূর্ণ ব্যবহারে ভাববিনিময়।",
              keywords: ["বাচনিক", "অবাচনিক", "বডি ল্যাঙ্গুয়েজ", "কণ্ঠস্বর"]
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
              title: "Phonetic Rules and Sound Systems",
              titleBangla: "২.১ ধ্বনির উচ্চারণরীতি ও প্রমিত উচ্চারণ সূত্র",
              summary: "স্বরধ্বনি ও ব্যঞ্জনধ্বনির স্থান ও প্রকৃতি অনুযায়ী শুদ্ধ বাংলা উচ্চারণ।",
              keywords: ["ধ্বনি", "উচ্চারণসূত্র", "প্রমিত উচ্চারণ"]
            },
            {
              id: "c8-ban-ch2-l2",
              point: "২.২",
              title: "Regional Accents to Standard Transformation",
              titleBangla: "২.২ আঞ্চলিক রূপ থেকে প্রমিত ভাষায় রূপান্তর",
              summary: "আঞ্চলিক শব্দ ও ক্রিয়াপদের পরিবর্তে প্রমিত বাংলা রূপ ব্যবহার।",
              keywords: ["আঞ্চলিক ভাষা", "প্রমিত রূপান্তর", "ক্রিয়াপদ"]
            },
            {
              id: "c8-ban-ch2-l3",
              point: "২.৩",
              title: "Standard Pronunciation in Public Speaking",
              titleBangla: "২.৩ প্রাতিষ্ঠানিক ও আনুষ্ঠানিক আলোচনায় প্রমিত রূপ",
              summary: "বিতর্ক, উপস্থাপনা ও সভা পরিচালনায় প্রমিত বাংলা বাচনভঙ্গি প্রয়োগ।",
              keywords: ["আনুষ্ঠানিক", "উপস্থাপনা", "প্রমিত বাচনভঙ্গি"]
            }
          ]
        },
        {
          id: "c8-ban-ch3",
          chapterNumber: 3,
          title: "Reading Comprehension and Text Analysis",
          titleBangla: "৩য় অধ্যায়: লেখা পড়ে বুঝতে শিখি",
          lessons: [
            {
              id: "c8-ban-ch3-l1",
              point: "৩.১",
              title: "Applied Writing Comprehension",
              titleBangla: "৩.১ প্রায়োগিক লেখা পাঠ ও পর্যালোচনা",
              summary: "চিঠি, নোটিশ, আবেদনপত্র ও নিয়মাবলি পড়ে মূল বক্তব্য ও নির্দেশাবলি অনুধাবন।",
              keywords: ["প্রায়োগিক লেখা", "নোটিশ", "আবেদনপত্র", "অনুধাবন"]
            },
            {
              id: "c8-ban-ch3-l2",
              point: "৩.২",
              title: "Descriptive Writing Comprehension",
              titleBangla: "৩.২ বিবরণমূলক লেখা পাঠ ও বিশ্লেষণ",
              summary: "ঐতিহাসিক স্থান, প্রাকৃতিক দৃশ্য ও জীবনযাত্রার বিবরণমূলক পাঠ অনুধাবন।",
              keywords: ["বিবরণমূলক", "স্থান বর্ণনা", "বিশ্লেষণ"]
            },
            {
              id: "c8-ban-ch3-l3",
              point: "৩.৩",
              title: "Informational Text Understanding",
              titleBangla: "৩.৩ তথ্যমূলক লেখা পাঠ ও তথ্য আহরণ",
              summary: "বিজ্ঞান, প্রকৃতি ও ইতিহাস বিষয়ক তথ্যমূলক লেখা থেকে সঠিক তথ্য যাচাই ও নোট গ্রহণ।",
              keywords: ["তথ্যমূলক", "তথ্য আহরণ", "নোট গ্রহণ"]
            },
            {
              id: "c8-ban-ch3-l4",
              point: "৩.৪",
              title: "Analytical Writing Analysis",
              titleBangla: "৩.৪ বিশ্লেষণমূলক লেখা পাঠ ও যৌক্তিক পর্যালোচনা",
              summary: "প্রবন্ধ ও নিবন্ধের লেখকের মতামত, যুক্তি ও সিদ্ধান্তের চুলচেরা মূল্যায়ন।",
              keywords: ["বিশ্লেষণমূলক", "যৌক্তিক পর্যালোচনা", "প্রবন্ধ"]
            },
            {
              id: "c8-ban-ch3-l5",
              point: "৩.৫",
              title: "Literary and Imaginative Writing",
              titleBangla: "৩.৫ কল্পনাপ্রধান লেখা: কবিতা, গল্প ও নাটক আস্বাদন",
              summary: "সাহিত্যকর্মের মূলভাব, উপমা, রূপক ও নান্দনিক সৌন্দর্য উপভোগ ও ব্যাখ্যা।",
              keywords: ["কবিতা", "গল্প", "নাটক", "নান্দনিকতা"]
            }
          ]
        },
        {
          id: "c8-ban-ch4",
          chapterNumber: 4,
          title: "Grammar, Words, and Sentence Construction",
          titleBangla: "৪র্থ অধ্যায়: শব্দ বুঝি বাক্য লিখি",
          lessons: [
            {
              id: "c8-ban-ch4-l1",
              point: "৪.১",
              title: "Word Classes and Classification",
              titleBangla: "৪.১ শব্দের শ্রেণি ও ব্যাকরণিক শব্দশ্রেণি",
              summary: "বিশেষ্য, সর্বনাম, বিশেষণ, ক্রিয়া, ক্রিয়া বিশেষণ, যোজক ও অনুসর্গের পরিচিতি।",
              keywords: ["শব্দশ্রেণি", "বিশেষ্য", "ক্রিয়া", "যোজক"]
            },
            {
              id: "c8-ban-ch4-l2",
              point: "৪.২",
              title: "Affixes, Prefixes and Word Formation",
              titleBangla: "৪.২ প্রত্যয়, উপসর্গ ও সন্ধির সাহায্যে শব্দ গঠন",
              summary: "প্রত্যয় ও উপসর্গের প্রয়োগে নতুন শব্দ সৃষ্টি ও অর্থ পরিবর্তনের নিয়ম।",
              keywords: ["প্রত্যয়", "উপসর্গ", "শব্দ গঠন", "সন্ধি"]
            },
            {
              id: "c8-ban-ch4-l3",
              point: "৪.৩",
              title: "Sentence Structure and Types",
              titleBangla: "৪.৩ বাক্যের গঠন ও বিভিন্ন ধরনের বাক্যের রূপান্তর",
              summary: "সরল, জটিল ও যৌগিক বাক্যের গঠনরীতি এবং পারস্পরিক রূপান্তরের সূত্র।",
              keywords: ["সরল বাক্য", "জটিল বাক্য", "যৌগিক বাক্য", "রূপান্তর"]
            }
          ]
        },
        {
          id: "c8-ban-ch5",
          chapterNumber: 5,
          title: "Descriptive and Informative Compositions",
          titleBangla: "৫ম অধ্যায়: বিবরণমূলক ও তথ্যমূলক রচনা",
          lessons: [
            {
              id: "c8-ban-ch5-l1",
              point: "৫.১",
              title: "Descriptive Writing of Events and Spaces",
              titleBangla: "৫.১ ঐতিহাসিক স্থান ও সামাজিক ঘটনার বিবরণ রচনা",
              summary: "সুনির্দিষ্ট পর্যবেক্ষণ ও বস্তুনিষ্ঠ বিবরণ তুলে ধরে রচনা প্রণয়ন।",
              keywords: ["বিবরণ", "পর্যবেক্ষণ", "ঐতিহাসিক স্থান", "রচনা"]
            },
            {
              id: "c8-ban-ch5-l2",
              point: "৫.২",
              title: "Investigative and Informational Reports",
              titleBangla: "৫.২ তথ্যনির্ভর প্রতিবেদন ও সংবাদ বিবরণী লিখন",
              summary: "প্রমাণভিত্তিক উপাত্ত সংগ্রহ এবং নিয়ম মেনে তথ্যমূলক প্রতিবেদন তৈরি।",
              keywords: ["প্রতিবেদন", "তথ্যনির্ভর", "সংবাদ বিবরণী", "উপাত্ত"]
            }
          ]
        },
        {
          id: "c8-ban-ch6",
          chapterNumber: 6,
          title: "Literature Reading and Creative Writing",
          titleBangla: "৬ষ্ঠ অধ্যায়: সাহিত্য পড়ি সাহিত্য রচনা করি",
          lessons: [
            {
              id: "c8-ban-ch6-l1",
              point: "৬.১",
              title: "Poetry Metre and Creative Verses",
              titleBangla: "৬.১ কবিতার ভাব, অন্ত্যমিল ও কবিতা রচনা",
              summary: "ছন্দ, অন্ত্যমিল ও চিত্রকল্প ব্যবহার করে স্বরচিত কবিতা লিখন।",
              keywords: ["কবিতা", "ছন্দ", "অন্ত্যমিল", "চিত্রকল্প"]
            },
            {
              id: "c8-ban-ch6-l2",
              point: "৬.২",
              title: "Short Story Crafting and Dialogue",
              titleBangla: "৬.২ গল্প রচনা, চরিত্র সৃষ্টি ও প্লট বিন্যাস",
              summary: "কাহিনির সূচনা, দ্বন্দ্ব, ক্লাইম্যাক্স ও সমাপ্তির মাধ্যমে মৌলিক গল্প নির্মাণ।",
              keywords: ["ছোটগল্প", "চরিত্রায়ন", "প্লট", "কাহিনি"]
            },
            {
              id: "c8-ban-ch6-l3",
              point: "৬.৩",
              title: "Drama Scripts and Stage Presentation",
              titleBangla: "৬.৩ নাট্যাংশ লিখন ও অভিনয় উপযোগী সংলাপ",
              summary: "সামাজিক সমস্যা ও বার্তা সংবলিত এক অঙ্কের নাটক রচনা ও সংলাপ প্রয়োগ।",
              keywords: ["নাট্যাংশ", "সংলাপ", "মঞ্চায়ন", "চরিত্র"]
            }
          ]
        },
        {
          id: "c8-ban-ch7",
          chapterNumber: 7,
          title: "Analytical Essay and Critical Thinking",
          titleBangla: "৭ম অধ্যায়: বিশ্লেষণমূলক লেখা ও মতামত",
          lessons: [
            {
              id: "c8-ban-ch7-l1",
              point: "৭.১",
              title: "Evidence-Based Logical Reasoning",
              titleBangla: "৭.১ তথ্য ও যুক্তির শৃঙ্খলায় বিশ্লেষণধর্মী রচনা",
              summary: "কোনো বিষয় বা ঘটনার পক্ষে-বিপক্ষে বস্তুনিষ্ঠ যুক্তি উপস্থাপন ও সিদ্ধান্ত গ্রহণ।",
              keywords: ["যুক্তি", "বিশ্লেষণ", "মতামত", "সিদ্ধান্ত"]
            },
            {
              id: "c8-ban-ch7-l2",
              point: "৭.২",
              title: "Critical Thinking and Evaluation",
              titleBangla: "৭.২ সমালোচনামূলক দৃষ্টিভঙ্গি ও সৃজনশীল সিদ্ধান্ত",
              summary: "সমসাময়িক বিষয়ে পক্ষপাতমুক্ত মূল্যায়ন এবং বিকল্প সমাধান প্রস্তাবনা।",
              keywords: ["সমালোচনা", "মূল্যায়ন", "সৃজনশীলতা", "সমাধান"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ২. ইংরেজি (English)
    // ====================================================
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
          titleBangla: "Experience 1: Beauty in Art (শিল্পকলার সৌন্দর্য)",
          lessons: [
            {
              id: "c8-eng-ch1-l1",
              point: "1.1",
              title: "Appreciating Visual Art and Paintings",
              titleBangla: "১.১ চিত্রকর্ম ও দৃশ্যকলার রসাস্বাদন",
              summary: "Observing famous artwork, paintings, and describing them using sensory adjectives.",
              keywords: ["art", "paintings", "aesthetic", "sensory words"]
            },
            {
              id: "c8-eng-ch1-l2",
              point: "1.2",
              title: "Similes and Metaphors in Creative Descriptions",
              titleBangla: "১.২ উপমা (Similes) ও রূপক (Metaphors) প্রয়োগ",
              summary: "Utilizing figures of speech to build vivid imagery and expressive comparisons.",
              keywords: ["simile", "metaphor", "imagery", "literary devices"]
            }
          ]
        },
        {
          id: "c8-eng-ch2",
          chapterNumber: 2,
          title: "The Bizzy Bee",
          titleBangla: "Experience 2: The Bizzy Bee (পরিশ্রম ও অধ্যবসায়)",
          lessons: [
            {
              id: "c8-eng-ch2-l1",
              point: "2.1",
              title: "Poem Recitation, Rhyme, and Rhythm",
              titleBangla: "২.১ কবিতার ছন্দ, অন্ত্যমিল ও আবৃত্তি",
              summary: "Reciting poetry with appropriate intonation, rhythm, and exploring the value of industry.",
              keywords: ["poem", "recitation", "rhythm", "diligence"]
            },
            {
              id: "c8-eng-ch2-l2",
              point: "2.2",
              title: "Work Ethics and Productivity Habits",
              titleBangla: "২.২ কর্মনিষ্ঠা ও উৎপাদনশীল অভ্যাস বিনিময়",
              summary: "Expressing daily routines, dedication, and cooperative work in conversational English.",
              keywords: ["productivity", "habits", "routines", "dialogue"]
            }
          ]
        },
        {
          id: "c8-eng-ch3",
          chapterNumber: 3,
          title: "Language and Culture",
          titleBangla: "Experience 3: Language and Culture (ভাষা ও সংস্কৃতি)",
          lessons: [
            {
              id: "c8-eng-ch3-l1",
              point: "3.1",
              title: "Exploring Cultural Diversity and Traditions",
              titleBangla: "৩.১ সাংস্কৃতিক বৈচিত্র্য ও ঐতিহ্য পর্যালোচনা",
              summary: "Discussing ethnic lifestyles, festivals, costumes, and folklore in communicative English.",
              keywords: ["culture", "diversity", "tradition", "folklore"]
            },
            {
              id: "c8-eng-ch3-l2",
              point: "3.2",
              title: "Cross-Cultural Respect and Politeness Rules",
              titleBangla: "৩.২ আন্তঃসাংস্কৃতিক শ্রদ্ধা ও শিষ্টাচার চর্চা",
              summary: "Practicing polite inquiries, greetings, and expressions respecting different cultures.",
              keywords: ["politeness", "etiquette", "respect", "communication"]
            }
          ]
        },
        {
          id: "c8-eng-ch4",
          chapterNumber: 4,
          title: "If - Cultivating Stoic Life Values",
          titleBangla: "Experience 4: If - জীবনের আদর্শ মূল্যবোধ",
          lessons: [
            {
              id: "c8-eng-ch4-l1",
              point: "4.1",
              title: "Understanding Kipling's 'If' and Moral Courage",
              titleBangla: "৪.১ কিপলিং-এর 'If' কবিতা ও নৈতিক দৃঢ়তা",
              summary: "Analyzing the themes of endurance, self-trust, honesty, and mental resilience.",
              keywords: ["moral courage", "values", "resilience", "poetry"]
            },
            {
              id: "c8-eng-ch4-l2",
              point: "4.2",
              title: "Conditional Structures (First and Second Conditionals)",
              titleBangla: "৪.২ শর্তযুক্ত বাক্যের গঠন ও বাস্তব প্রয়োগ",
              summary: "Mastering conditional clauses to describe hypothetical situations and ethical choices.",
              keywords: ["conditionals", "grammar", "sentences", "logic"]
            }
          ]
        },
        {
          id: "c8-eng-ch5",
          chapterNumber: 5,
          title: "Writing with a Purpose",
          titleBangla: "Experience 5: Writing with a Purpose (উদ্দেশ্যভিত্তিক রচনা)",
          lessons: [
            {
              id: "c8-eng-ch5-l1",
              point: "5.1",
              title: "Persuasive Writing and Arguments",
              titleBangla: "৫.১ যুক্তিপ্রধান ও প্ররোচনামূলক প্রবন্ধ লিখন",
              summary: "Developing clear thesis statements, supporting arguments, and rhetorical cohesion.",
              keywords: ["persuasive", "thesis", "arguments", "writing"]
            },
            {
              id: "c8-eng-ch5-l2",
              point: "5.2",
              title: "Formal Letters and Public Petitions",
              titleBangla: "৫.২ প্রাতিষ্ঠানিক পত্র ও গণদাবিনামা প্রণয়ন",
              summary: "Writing formal letters to authorities addressing community concerns with polite tone.",
              keywords: ["formal letter", "petition", "civic engagement", "applications"]
            }
          ]
        },
        {
          id: "c8-eng-ch6",
          chapterNumber: 6,
          title: "Introducing Inspiring Personalities",
          titleBangla: "Experience 6: Introducing Inspiring Personalities (অনুপ্রেরণাদায়ী ব্যক্তিত্ব)",
          lessons: [
            {
              id: "c8-eng-ch6-l1",
              point: "6.1",
              title: "Biographical Narratives and Profiles",
              titleBangla: "৬.১ জীবনীমূলক আখ্যান ও পোর্টফোলিও তৈরি",
              summary: "Researching and writing inspiring biographies of scientists, humanitarians, and artists.",
              keywords: ["biography", "narrative", "profile", "achievements"]
            },
            {
              id: "c8-eng-ch6-l2",
              point: "6.2",
              title: "Passive Voice in Reporting Accomplishments",
              titleBangla: "৬.২ কর্মবাচ্য (Passive Voice)-এর ব্যাকরণিক প্রয়োগ",
              summary: "Transforming active sentences into passive voice when describing inventions and historical milestones.",
              keywords: ["passive voice", "grammar", "historical milestones"]
            }
          ]
        },
        {
          id: "c8-eng-ch7",
          chapterNumber: 7,
          title: "A Day in My Life",
          titleBangla: "Experience 7: A Day in My Life (আমার একটি দিন)",
          lessons: [
            {
              id: "c8-eng-ch7-l1",
              point: "7.1",
              title: "Describing Daily Routines and Time Connectors",
              titleBangla: "৭.১ দৈনন্দিন কাজের বিবরণ ও সংযোগকারী শব্দ",
              summary: "Using time transition words (first, meanwhile, eventually) to construct daily diaries.",
              keywords: ["daily routine", "transitions", "connectors", "diary"]
            },
            {
              id: "c8-eng-ch7-l2",
              point: "7.2",
              title: "Spontaneous Dialogues and Conversational Fluency",
              titleBangla: "৭.২ সহপাঠীদের সাথে স্বতঃস্ফূর্ত কথোপকথন",
              summary: "Role-playing everyday situations, ordering food, asking for advice, and answering impromptu questions.",
              keywords: ["role-play", "fluency", "conversation", "speaking"]
            }
          ]
        },
        {
          id: "c8-eng-ch8",
          chapterNumber: 8,
          title: "Heroes of Our Land",
          titleBangla: "Experience 8: Heroes of Our Land (আমাদের জাতীয় বীরগণ)",
          lessons: [
            {
              id: "c8-eng-ch8-l1",
              point: "8.1",
              title: "Freedom Fighters and the Liberation War of 1971",
              titleBangla: "৮.১ বীর মুক্তিযোদ্ধা ও একাত্তরের মহান মুক্তিযুদ্ধ",
              summary: "Narrating heroic tales of Bir Sreshthos and freedom fighters with respect and dignity.",
              keywords: ["liberation war", "heroes", "freedom fighters", "patriotism"]
            },
            {
              id: "c8-eng-ch8-l2",
              point: "8.2",
              title: "Narrative Past Tenses and Compound Sentences",
              titleBangla: "৮.২ অতীতকালের গঠন ও যৌগিক বাক্যের ব্যবহার",
              summary: "Using Past Continuous and Past Perfect tenses to reconstruct chronological historical episodes.",
              keywords: ["past tense", "narrative", "chronology", "grammar"]
            }
          ]
        },
        {
          id: "c8-eng-ch9",
          chapterNumber: 9,
          title: "Nature's Bounty and Conservation",
          titleBangla: "Experience 9: Nature's Bounty (প্রকৃতির দান ও পরিবেশ সংরক্ষণ)",
          lessons: [
            {
              id: "c8-eng-ch9-l1",
              point: "9.1",
              title: "Ecosystems and Environmental Threats",
              titleBangla: "৯.১ বাস্তুতন্ত্র ও পরিবেশগত সংকট পর্যালোচনা",
              summary: "Analyzing climate change, deforestation, and river pollution in English texts.",
              keywords: ["ecosystem", "climate change", "pollution", "environment"]
            },
            {
              id: "c8-eng-ch9-l2",
              point: "9.2",
              title: "Writing Awareness Posters and Leaflets",
              titleBangla: "৯.২ জনসচেতনতামূলক পোস্টার ও লিফলেট রচনা",
              summary: "Drafting catchy slogans, concise bullet points, and actionable eco-friendly tips.",
              keywords: ["poster", "leaflet", "slogans", "eco-friendly"]
            }
          ]
        },
        {
          id: "c8-eng-ch10",
          chapterNumber: 10,
          title: "Science and Technology in Daily Life",
          titleBangla: "Experience 10: Science and Technology (দৈনন্দিন জীবনে বিজ্ঞান ও প্রযুক্তি)",
          lessons: [
            {
              id: "c8-eng-ch10-l1",
              point: "10.1",
              title: "Inventions and Technological Milestones",
              titleBangla: "১০.১ বৈজ্ঞানিক আবিষ্কার ও আধুনিক গ্যাজেটের ভূমিকা",
              summary: "Explaining how computers, smartphones, and automated tools revolutionized modern societies.",
              keywords: ["inventions", "technology", "smart devices", "innovation"]
            },
            {
              id: "c8-eng-ch10-l2",
              point: "10.2",
              title: "Writing Formal Emails and Technical Inquiries",
              titleBangla: "১০.২ প্রযুক্তিগত অনুসন্ধান ও আনুষ্ঠানিক ইমেইল লিখন",
              summary: "Formatting professional emails with appropriate subject lines, salutations, and attachments.",
              keywords: ["formal email", "technical writing", "correspondence"]
            }
          ]
        },
        {
          id: "c8-eng-ch11",
          chapterNumber: 11,
          title: "Future Dreams and Aspirations",
          titleBangla: "Experience 11: Future Dreams (ভবিষ্যতের স্বপ্ন ও সম্ভাবনা)",
          lessons: [
            {
              id: "c8-eng-ch11-l1",
              point: "11.1",
              title: "Vocational Goals and Personal Ambitions",
              titleBangla: "১১.১ ভবিষ্যৎ কর্মজীবন ও ব্যক্তিগত লক্ষ্য নির্ধারণ",
              summary: "Drafting personal statements regarding future education, career aspirations, and community service.",
              keywords: ["career", "aspirations", "future goals", "ambition"]
            },
            {
              id: "c8-eng-ch11-l2",
              point: "11.2",
              title: "Modal Auxiliaries for Possibility and Obligation",
              titleBangla: "১১.২ মডাল অক্সিলিয়ারির ব্যবহার (can, might, ought to, must)",
              summary: "Employing modal verbs correctly to express degrees of certainty, obligation, and permission.",
              keywords: ["modals", "possibility", "obligation", "grammar"]
            }
          ]
        },
        {
          id: "c8-eng-ch12",
          chapterNumber: 12,
          title: "Exploring the World Through Travel",
          titleBangla: "Experience 12: Exploring the World (ভ্রমণ ও বিশ্ব দর্শন)",
          lessons: [
            {
              id: "c8-eng-ch12-l1",
              point: "12.1",
              title: "Travelogues and Tourist Destination Reviews",
              titleBangla: "১২.১ ভ্রমণকাহিনি পাঠ ও পর্যটন স্থানের বর্ণনা",
              summary: "Writing descriptive reviews of heritage spots like Cox's Bazar, Sundarbans, and Paharpur.",
              keywords: ["travelogue", "tourism", "heritage", "description"]
            },
            {
              id: "c8-eng-ch12-l2",
              point: "12.2",
              title: "Giving Directions and Wayfinding Dialogues",
              titleBangla: "১২.২ দিকনির্দেশনা প্রদান ও মানচিত্র পাঠের কথোপকথন",
              summary: "Practicing prepositions of place and imperative phrases to guide travelers through a city map.",
              keywords: ["directions", "map", "prepositions", "wayfinding"]
            }
          ]
        },
        {
          id: "c8-eng-ch13",
          chapterNumber: 13,
          title: "Sports, Games, and Fair Play",
          titleBangla: "Experience 13: Sports and Games (খেলাধুলা ও ক্রীড়াসুলভ মনোভাব)",
          lessons: [
            {
              id: "c8-eng-ch13-l1",
              point: "13.1",
              title: "Teamwork, Fair Play, and Sporting Spirit",
              titleBangla: "১৩.১ দলগত ঐক্য ও সততাপূর্ণ ক্রীড়াসুলভ চেতনা",
              summary: "Discussing cricket, football, and traditional games like Ha-du-du with an emphasis on ethics.",
              keywords: ["sportsmanship", "fair play", "teamwork", "athletics"]
            },
            {
              id: "c8-eng-ch13-l2",
              point: "13.2",
              title: "Sporting Event Commentary and Match Reports",
              titleBangla: "১৩.২ খেলার ধারাবিবরণী ও সংবাদ প্রতিবেদন তৈরি",
              summary: "Practicing live match commentary and writing match summary articles for school magazines.",
              keywords: ["commentary", "match report", "journalism", "sports"]
            }
          ]
        },
        {
          id: "c8-eng-ch14",
          chapterNumber: 14,
          title: "Festivals and Celebrations",
          titleBangla: "Experience 14: Festivals and Celebrations (উৎসব ও আনন্দানুষ্ঠান)",
          lessons: [
            {
              id: "c8-eng-ch14-l1",
              point: "14.1",
              title: "Cultural Carnivals and Traditional Feasts",
              titleBangla: "১৪.১ জাতীয় উৎসব, লোকজ মেলা ও ঐতিহ্যবাহী খানাপিনা",
              summary: "Narrating the festivities of Pahela Baishakh, Eid, Puja, and indigenous harvest celebrations.",
              keywords: ["festivals", "carnival", "celebration", "food"]
            },
            {
              id: "c8-eng-ch14-l2",
              point: "14.2",
              title: "Designing Invitation Cards and Greeting Messages",
              titleBangla: "১৪.২ শুভেচ্ছা কার্ড ও আমন্ত্রণপত্র তৈরি",
              summary: "Crafting formal and informal invitation cards with RSVP information and greeting texts.",
              keywords: ["invitation", "greetings", "RSVP", "design"]
            }
          ]
        },
        {
          id: "c8-eng-ch15",
          chapterNumber: 15,
          title: "Critical Thinking and Problem Solving",
          titleBangla: "Experience 15: Critical Thinking (সমস্যা সমাধান ও গঠনমূলক চিন্তা)",
          lessons: [
            {
              id: "c8-eng-ch15-l1",
              point: "15.1",
              title: "Resolving Conflicts Through Constructive Mediation",
              titleBangla: "১৫.১ পারস্পরিক সমঝোতা ও সহমর্মিতাপূর্ণ মধ্যস্থতা",
              summary: "Role-playing conflict resolution and applying empathetic phrases in team disputes.",
              keywords: ["conflict resolution", "empathy", "mediation", "dialogue"]
            },
            {
              id: "c8-eng-ch15-l2",
              point: "15.2",
              title: "Debating Societal Issues and Counter-Arguments",
              titleBangla: "১৫.২ সামাজিক বিষয় নিয়ে বিতর্ক ও পাল্টা যুক্তি খণ্ডন",
              summary: "Developing debate rebuttals and articulating logical counter-arguments clearly.",
              keywords: ["debate", "rebuttal", "counter-arguments", "logic"]
            }
          ]
        },
        {
          id: "c8-eng-ch16",
          chapterNumber: 16,
          title: "Reflection and Self-Assessment",
          titleBangla: "Experience 16: Reflection and Showcase (আত্মমূল্যায়ন ও প্রতিফলন)",
          lessons: [
            {
              id: "c8-eng-ch16-l1",
              point: "16.1",
              title: "Maintaining a Reflective Learning Journal",
              titleBangla: "১৬.১ ব্যক্তিগত শিখন ডায়েরি ও অভিজ্ঞতা লিখন",
              summary: "Evaluating self-progress, strengths, and areas of growth across all learning experiences.",
              keywords: ["reflective journal", "self-assessment", "growth", "learning"]
            },
            {
              id: "c8-eng-ch16-l2",
              point: "16.2",
              title: "Portfolio Presentation and Language Showcase",
              titleBangla: "১৬.২ ভাষা পোর্টফোলিও প্রদর্শন ও সামগ্রিক উপস্থাপনা",
              summary: "Organizing written assignments, creative tasks, and presenting a final English showcase.",
              keywords: ["portfolio", "showcase", "presentation", "summary"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৩. গণিত (Mathematics)
    // ====================================================
    {
      id: "c8-math",
      code: "MAT-08",
      name: "Mathematics",
      nameBangla: "গণিত",
      group: "General",
      coverColor: "from-amber-600 to-orange-850",
      chapters: [
        {
          id: "c8-mat-ch1",
          chapterNumber: 1,
          title: "Mathematical Exploration and Inquiry",
          titleBangla: "১ম অধ্যায়: গাণিতিক অনুসন্ধান",
          lessons: [
            {
              id: "c8-mat-ch1-l1",
              point: "১.১",
              title: "Identifying Patterns and Invariants",
              titleBangla: "১.১ সংখ্যার প্যাটার্ন ও ধ্রুব সম্পর্ক অন্বেষণ",
              summary: "সংখ্যার ক্রম, গুণিতক ও জ্যামিতিক নকশার অন্তর্নিহিত প্যাটার্ন খুঁজে বের করা।",
              keywords: ["প্যাটার্ন", "অনুসন্ধান", "সংখ্যা ক্রম", "সম্পর্ক"]
            },
            {
              id: "c8-mat-ch1-l2",
              point: "১.২",
              title: "Formulating Conjectures and Hypotheses",
              titleBangla: "১.২ অনুমান প্রণয়ন ও যুক্তিনির্ভর যাচাইকরণ",
              summary: "গাণিতিক তথ্যের ভিত্তিতে অনুমান গঠন এবং একাধিক উদাহরণের মাধ্যমে সত্যতা যাচাই।",
              keywords: ["অনুমান", "যাচাইকরণ", "যুক্তি", "সিদ্ধান্ত"]
            },
            {
              id: "c8-mat-ch1-l3",
              point: "১.৩",
              title: "Systematic Data Tables and Proofs",
              titleBangla: "১.৩ নিয়মতান্ত্রিক ছক তৈরি ও সাধারণীকরণ",
              summary: "উপাত্ত সারণিবদ্ধ করে সাধারণ সূত্র বা বীজগণিতীয় রাশিমালার মাধ্যমে প্রকাশ।",
              keywords: ["সারণি", "সাধারণীকরণ", "বীজগণিতীয় রূপ", "প্রমাণ"]
            }
          ]
        },
        {
          id: "c8-mat-ch2",
          chapterNumber: 2,
          title: "Real Numbers in Everyday Life",
          titleBangla: "২য় অধ্যায়: দৈনন্দিন কাজে বাস্তব সংখ্যা",
          lessons: [
            {
              id: "c8-mat-ch2-l1",
              point: "২.১",
              title: "Rational and Irrational Numbers",
              titleBangla: "২.১ মূলদ ও অমূলদ সংখ্যার ধারণা ও পার্থক্য",
              summary: "ভগ্নাংশ, আবৃত্ত ও অনাবৃত্ত অসীম দশমিক সংখ্যার স্বরূপ এবং বাস্তব জগতে প্রয়োগ।",
              keywords: ["মূলদ সংখ্যা", "অমূলদ সংখ্যা", "আবৃত্ত দশমিক", "বাস্তব সংখ্যা"]
            },
            {
              id: "c8-mat-ch2-l2",
              point: "২.২",
              title: "Square Roots and Cube Roots",
              titleBangla: "২.২ বর্গমূল ও ঘনমূলের জ্যামিতিক এবং গাণিতিক ব্যাখ্যা",
              summary: "বর্গক্ষেত্রের ক্ষেত্রফল ও ঘনকের আয়তন মডেল ব্যবহার করে বর্গমূল ও ঘনমূল নির্ণয়।",
              keywords: ["বর্গমূল", "ঘনমূল", "বর্গক্ষেত্র", "আয়তন"]
            },
            {
              id: "c8-mat-ch2-l3",
              point: "২.৩",
              title: "Real Numbers on the Number Line",
              titleBangla: "২.৩ বাস্তব সংখ্যারেখায় মূলদ ও অমূলদ সংখ্যার নিখুঁত অবস্থান",
              summary: "পিথাগোরাসের উপপাদ্যের সাহায্যে সংখ্যারেখায় অমূলদ সংখ্যা (যেমন √২, √৩) চিহ্নিতকরণ।",
              keywords: ["সংখ্যারেখা", "অমূলদ সংখ্যা স্থাপন", "পিথাগোরাস"]
            }
          ]
        },
        {
          id: "c8-mat-ch3",
          chapterNumber: 3,
          title: "Binomial Expressions and Geometrical Models",
          titleBangla: "৩য় অধ্যায়: দ্বিপদী রাশি ও তার প্রয়োগ",
          lessons: [
            {
              id: "c8-mat-ch3-l1",
              point: "৩.১",
              title: "Binomial and Trinomial Expressions",
              titleBangla: "৩.১ দ্বিপদী ও ত্রিপদী রাশির ধারণা ও গুণন প্রক্রিয়া",
              summary: "বীজগণিতীয় পদে একাধিক চলক ও সহগ সমন্বিত দ্বিপদী রাশির পারস্পরিক গুণ।",
              keywords: ["দ্বিপদী রাশি", "ত্রিপদী রাশি", "গুণন", "সহগ"]
            },
            {
              id: "c8-mat-ch3-l2",
              point: "৩.২",
              title: "Geometric Proof of (a+b)^2 and (a-b)^2",
              titleBangla: "৩.২ কাগজ কেটে ক্ষেত্রফল মডেলে সূত্রের সত্যতা প্রমাণ",
              summary: "কাগজের রঙিন টুকরো কেটে (a+b)^২ = a^২ + 2ab + b^২ এবং (a-b)^২ সূত্রের জ্যামিতিক প্রমাণ।",
              keywords: ["ক্ষেত্রফল মডেল", "বীজগণিতীয় সূত্র", "জ্যামিতিক প্রমাণ"]
            },
            {
              id: "c8-mat-ch3-l3",
              point: "৩.৩",
              title: "Cube Formulas and Volumetric Extensions",
              titleBangla: "৩.৩ ঘনফল মডেলে (a+b)^3 ও (a-b)^3 রাশির বিস্তৃতি",
              summary: "ঘনক ও আয়তাকার ব্লকের মাধ্যমে ঘনফলের সূত্রাবলি বাস্তব রূপদান ও সমস্যার সমাধান।",
              keywords: ["ঘনফল", "ঘনকের মডেল", "বিস্তৃতি", "উৎপাদক"]
            }
          ]
        },
        {
          id: "c8-mat-ch4",
          chapterNumber: 4,
          title: "Small and Large Numbers: Exponents and Logarithms",
          titleBangla: "৪র্থ অধ্যায়: ক্ষুদ্রতম ও বৃহত্তম সংখ্যার জগৎ",
          lessons: [
            {
              id: "c8-mat-ch4-l1",
              point: "৪.১",
              title: "Laws of Exponents and Negative Powers",
              titleBangla: "৪.১ সূচকের মৌলিক নিয়ম ও ঋণাত্মক সূচকের অর্থ",
              summary: "সূচকের গুণ, ভাগ, ঘাতের ঘাত এবং শূন্য ও ঋণাত্মক সূচকের গাণিতিক যুক্তি।",
              keywords: ["সূচক", "ঘাত", "ঋণাত্মক সূচক", "সূচকের নিয়ম"]
            },
            {
              id: "c8-mat-ch4-l2",
              point: "৪.২",
              title: "Scientific Notation and Significant Digits",
              titleBangla: "৪.২ বৈজ্ঞানিক রূপ ও প্রমাণ আকারে সংখ্যা প্রকাশ",
              summary: "অত্যন্ত বৃহৎ (যেমন আলোর বেগ) ও ক্ষুদ্র (যেমন পরমাণুর ব্যাস) সংখ্যাকে a x 10^n রূপে উপস্থাপন।",
              keywords: ["বৈজ্ঞানিক রূপ", "প্রমাণ আকার", "দশকের সূচক"]
            },
            {
              id: "c8-mat-ch4-l3",
              point: "৪.৩",
              title: "Introduction to Logarithms and Scale Comparisons",
              titleBangla: "৪.৩ লগারিদমের প্রাথমিক ধারণা ও স্কেল পরিমাপ",
              summary: "সূচকীয় সম্পর্কের বিপরীত হিসেবে লগারিদমের সূচনা এবং রিখটার স্কেল বা pH স্কেলে এর প্রয়োগ।",
              keywords: ["লগারিদম", "স্কেল", "সূচকীয় বিপরীত", "রিখটার স্কেল"]
            }
          ]
        },
        {
          id: "c8-mat-ch5",
          chapterNumber: 5,
          title: "Symmetry, Geometry, and the Pythagorean Theorem",
          titleBangla: "৫ম অধ্যায়: পরিমাপে প্রতিসমতা ও ক্ষেত্রফল",
          lessons: [
            {
              id: "c8-mat-ch5-l1",
              point: "৫.১",
              title: "Axial and Rotational Symmetry",
              titleBangla: "৫.১ রৈখিক ও ঘূর্ণন প্রতিসমতার কোণ ও মাত্রা",
              summary: "দৈনন্দিন বস্তু, ফুল ও জ্যামিতিক চিত্রে প্রতিসমতার অক্ষ ও ঘূর্ণন প্রতিসমতা চিহ্নিতকরণ।",
              keywords: ["প্রতিসমতা", "ঘূর্ণন প্রতিসমতা", "প্রতিসম অক্ষ"]
            },
            {
              id: "c8-mat-ch5-l2",
              point: "৫.২",
              title: "Area of Quadrilaterals and Polygons",
              titleBangla: "৫.২ সামান্তরিক, রম্বস ও ট্রাপিজিয়ামের ক্ষেত্রফল",
              summary: "ত্রিভুজে বিভক্ত করে বা সূত্র প্রয়োগের মাধ্যমে ট্রাপিজিয়াম ও বহুভুজের ক্ষেত্রফল নির্ণয়।",
              keywords: ["সামান্তরিক", "রম্বস", "ট্রাপিজিয়াম", "ক্ষেত্রফল"]
            },
            {
              id: "c8-mat-ch5-l3",
              point: "৫.৩",
              title: "Pythagorean Theorem and Real Applications",
              titleBangla: "৫.৩ পিথাগোরাসের উপপাদ্য ও বাস্তব জীবনের সমস্যার সমাধান",
              summary: "সমকোণী ত্রিভুজে অতিভুজ, লম্ব ও ভূমির সম্পর্ক প্রতিপাদন এবং মই, গাছের উচ্চতা পরিমাপ।",
              keywords: ["পিথাগোরাস", "সমকোণী ত্রিভুজ", "অতিভুজ", "উচ্চতা পরিমাপ"]
            }
          ]
        },
        {
          id: "c8-mat-ch6",
          chapterNumber: 6,
          title: "Circle Measurements and Pi",
          titleBangla: "৬ষ্ঠ অধ্যায়: বৃত্তের পরিমাপ",
          lessons: [
            {
              id: "c8-mat-ch6-l1",
              point: "৬.১",
              title: "Radius, Diameter and Circumference Exploration",
              titleBangla: "৬.১ বৃত্তের ব্যাসার্ধ, ব্যাস ও পরিধির অনুপাত যাচাই",
              summary: "গোলাকার বস্তুর সুতা ও স্কেল দিয়ে পরিধি মেপে পরিধি ও ব্যাসের অনুপাত পাই (π) আবিষ্কার।",
              keywords: ["বৃত্ত", "ব্যাস", "পরিধি", "পাই (π)"]
            },
            {
              id: "c8-mat-ch6-l2",
              point: "৬.২",
              title: "Area of a Circle and Sector Dissections",
              titleBangla: "৬.২ বৃত্তের ক্ষেত্রফল নির্ণয় ও বৃত্তকলার ব্যবচ্ছেদ",
              summary: "বৃত্তকে ক্ষুদ্র ক্ষুদ্র বৃত্তকলায় কেটে আয়তক্ষেত্রে রূপান্তর করে πr^২ সূত্র প্রতিপাদন।",
              keywords: ["ক্ষেত্রফল", "বৃত্তকলা", "সূত্র প্রতিপাদন", "আয়তক্ষেত্র রূপান্তর"]
            },
            {
              id: "c8-mat-ch6-l3",
              point: "৬.৩",
              title: "Circular Rings and Practical Area Calculations",
              titleBangla: "৬.৩ বৃত্তাকার পথ ও রিংয়ের ক্ষেত্রফল পরিমাপ",
              summary: "পার্কের বৃত্তাকার রাস্তা, ড্রামের চাকা ও পাইপের প্রস্থচ্ছেদের ক্ষেত্রফল নির্ণয়ের অনুশীলন।",
              keywords: ["বৃত্তাকার পথ", "রিং", "ক্ষেত্রফল হিসাব", "বাস্তব প্রয়োগ"]
            }
          ]
        },
        {
          id: "c8-mat-ch7",
          chapterNumber: 7,
          title: "Coordinate Geometry Basics",
          titleBangla: "৭ম অধ্যায়: স্থানাঙ্ক জ্যামিতির প্রাথমিক ধারণা",
          lessons: [
            {
              id: "c8-mat-ch7-l1",
              point: "৭.১",
              title: "Cartesian Coordinate Plane and Quadrants",
              titleBangla: "৭.১ কার্তেসীয় স্থানাঙ্ক তল, অক্ষ ও চতুর্ভাগ পরিচিতি",
              summary: "X-অক্ষ, Y-অক্ষ, মূলবিন্দু (০,০) এবং চার চতুর্ভাগে ধনাত্মক ও ঋণাত্মক চিহ্নের ধারণা।",
              keywords: ["কার্তেসীয় তল", "চতুর্ভাগ", "স্থানাঙ্ক", "মূলবিন্দু"]
            },
            {
              id: "c8-mat-ch7-l2",
              point: "৭.২",
              title: "Plotting Points (Abscissa and Ordinate)",
              titleBangla: "৭.২ গ্রাফ কাগজে ভুজ ও কোটি চিহ্নিতকরণ",
              summary: "বিন্দুর স্থানাঙ্ক (x, y) অনুসারে গ্রাফ কাগজে সঠিক অবস্থান নির্ণয় ও বিন্দু স্থাপন।",
              keywords: ["ভুজ", "কোটি", "বিন্দু স্থাপন", "গ্রাফ কাগজ"]
            },
            {
              id: "c8-mat-ch7-l3",
              point: "৭.৩",
              title: "Straight Lines and Distances between Points",
              titleBangla: "৭.৩ বিন্দু সংযোগে সরলরেখা ও দূরত্বের প্রাথমিক ধারণা",
              summary: "স্থানাঙ্ক তলে দুটি বিন্দু যোগ করে সরলরেখা অঙ্কন এবং পিথাগোরাসের সূত্রে দূরত্ব নিরূপণ।",
              keywords: ["সরলরেখা", "দূরত্ব", "বিন্দু সংযোগ", "দূরত্ব সূত্র"]
            }
          ]
        },
        {
          id: "c8-mat-ch8",
          chapterNumber: 8,
          title: "Everyday Probability",
          titleBangla: "৮ম অধ্যায়: দৈনন্দিন জীবনে সম্ভাবনা",
          lessons: [
            {
              id: "c8-mat-ch8-l1",
              point: "৮.১",
              title: "Concept of Probability and Chance Events",
              titleBangla: "৮.১ সম্ভাবনার ধারণা, নিশ্চিত ও অসম্ভব ঘটনা",
              summary: "বৃষ্টি হওয়ার সম্ভাবনা, খেলায় টস বা লটারিতে ফলাফল অনুমান ও গাণিতিক সম্ভাবনা (০ থেকে ১)।",
              keywords: ["সম্ভাবনা", "নিশ্চিত ঘটনা", "অসম্ভব ঘটনা", "অনুকূল ফলাফল"]
            },
            {
              id: "c8-mat-ch8-l2",
              point: "৮.২",
              title: "Sample Space, Coins and Dice Experiments",
              titleBangla: "৮.২ নমুনা ক্ষেত্র ও মুদ্রা-ছক্কার দ্বৈত পরীক্ষণ",
              summary: "মুদ্রা টস ও ছক্কার ঘুঁটি নিক্ষেপ করে সকল সম্ভাব্য ফলাফল তালিকাভুক্তকরণ ও সম্ভাবনা হিসাব।",
              keywords: ["নমুনা ক্ষেত্র", "মুদ্রা টস", "ছক্কা নিক্ষেপ", "নমুনা বিন্দু"]
            },
            {
              id: "c8-mat-ch8-l3",
              point: "৮.৩",
              title: "Experimental vs Theoretical Probability",
              titleBangla: "৮.৩ পরীক্ষামূলক বনাম তাত্ত্বিক সম্ভাবনার তুলনা",
              summary: "বারংবার পরীক্ষা চালিয়ে ফলাফলের অনুপাত তাত্ত্বিক সম্ভাবনার কত কাছাকাছি আসে তা যাচাই।",
              keywords: ["পরীক্ষামূলক সম্ভাবনা", "তাত্ত্বিক সম্ভাবনা", "ফ্রিকোয়েন্সি"]
            }
          ]
        },
        {
          id: "c8-mat-ch9",
          chapterNumber: 9,
          title: "Data Investigation and Analysis",
          titleBangla: "৯ম অধ্যায়: তথ্য অনুসন্ধান ও বিশ্লেষণ",
          lessons: [
            {
              id: "c8-mat-ch9-l1",
              point: "৯.১",
              title: "Data Collection and Frequency Distribution Tables",
              titleBangla: "৯.১ উপাত্ত সংগ্রহ ও গণসংখ্যা নিবেশন সারণি প্রস্তুত",
              summary: "শ্রেণি ব্যবধান নির্ধারণ, ট্যালি চিহ্নের ব্যবহার এবং অবিন্যস্ত উপাত্ত বিন্যস্তকরণ।",
              keywords: ["গণসংখ্যা নিবেশন", "শ্রেণি ব্যবধান", "ট্যালি চিহ্ন", "বিন্যস্ত উপাত্ত"]
            },
            {
              id: "c8-mat-ch9-l2",
              point: "৯.২",
              title: "Measures of Central Tendency (Mean, Median, Mode)",
              titleBangla: "৯.২ কেন্দ্রীয় প্রবণতার পরিমাপ: গড়, মধ্যক ও প্রচুরক",
              summary: "বিন্যস্ত ও অবিন্যস্ত তথ্যের গড়, মধ্যক ও প্রচুরক নির্ণয় এবং তাদের ব্যবহারিক তাৎপর্য।",
              keywords: ["গড়", "মধ্যক", "প্রচুরক", "কেন্দ্রীয় প্রবণতা"]
            },
            {
              id: "c8-mat-ch9-l3",
              point: "৯.৩",
              title: "Data Visualization: Histograms and Pie Charts",
              titleBangla: "৯.৩ আয়তলেখ ও পাই চিত্রের মাধ্যমে তথ্য উপস্থাপন",
              summary: "সংগৃহীত উপাত্তের দৃষ্টিনন্দন গ্রাফিক্যাল রূপায়ণ ও বিশ্লেষণমূলক ব্যাখ্যা প্রণয়ন।",
              keywords: ["আয়তলেখ", "পাই চিত্র", "গ্রাফিক্যাল উপস্থাপন", "তথ্য বিশ্লেষণ"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৪. বিজ্ঞান (অনুসন্ধানী পাঠ) - Science (Investigative Study)
    // ====================================================
    {
      id: "c8-science-investigative",
      code: "SCI-08-INV",
      name: "Science (Investigative Study)",
      nameBangla: "বিজ্ঞান (অনুসন্ধানী পাঠ)",
      group: "General",
      coverColor: "from-cyan-600 to-blue-850",
      chapters: [
        {
          id: "c8-sci-inv-ch1",
          chapterNumber: 1,
          title: "Laws of Motion and Force",
          titleBangla: "১ম অধ্যায়: গতির নিয়ম ও বল",
          lessons: [
            {
              id: "c8-sci-inv-ch1-l1",
              point: "১.১",
              title: "Newton's First Law and Inertia",
              titleBangla: "১.১ নিউটনের ১ম সূত্র ও জড়তার বাস্তব দৃষ্টান্ত",
              summary: "স্থিতিজড়তা ও গতিজড়তার স্বরূপ, বাসের ঝাঁকুনি ও নিরাপত্তা বেল্টের বৈজ্ঞানিক কারণ।",
              keywords: ["নিউটনের ১ম সূত্র", "জড়তা", "স্থিতিজড়তা", "গতিজড়তা"]
            },
            {
              id: "c8-sci-inv-ch1-l2",
              point: "১.২",
              title: "Newton's Second Law, Mass and Acceleration (F=ma)",
              titleBangla: "১.২ নিউটনের ২য় সূত্র: ভরবেগ ও ত্বরণের সম্পর্ক",
              summary: "ভরবেগের পরিবর্তনের হার ও প্রযুক্ত বলের সমীকরণ F = ma প্রতিপাদন ও গাণিতিক বিশ্লেষণ।",
              keywords: ["ভরবেগ", "ত্বরণ", "প্রযুক্ত বল", "F=ma"]
            },
            {
              id: "c8-sci-inv-ch1-l3",
              point: "১.৩",
              title: "Action-Reaction and Friction Forces",
              titleBangla: "১.৩ ৩য় সূত্র: ক্রিয়া-প্রতিক্রিয়া এবং ঘর্ষণ বলের প্রভাব",
              summary: "হাঁটার সময় মাটির প্রতিক্রিয়া, রকেটের গতি এবং বিভিন্ন প্রকার ঘর্ষণের সুবিধা-অসুবিধা।",
              keywords: ["ক্রিয়া-প্রতিক্রিয়া", "৩য় সূত্র", "ঘর্ষণ বল", "ঘর্ষণ হ্রাস"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch2",
          chapterNumber: 2,
          title: "Energy, Work, and Power",
          titleBangla: "২য় অধ্যায়: শক্তি, কাজ ও ক্ষমতা",
          lessons: [
            {
              id: "c8-sci-inv-ch2-l1",
              point: "২.১",
              title: "Scientific Definition of Work (W = F x d)",
              titleBangla: "২.১ কাজের বৈজ্ঞানিক সংজ্ঞা ও পরিমাপ",
              summary: "বল প্রয়োগে সরণের সম্পর্ক, ধনাত্মক ও ঋণাত্মক কাজ এবং কাজের একক জুল (Joule)।",
              keywords: ["কাজ", "জুল", "বল", "সরণ"]
            },
            {
              id: "c8-sci-inv-ch2-l2",
              point: "২.২",
              title: "Kinetic and Potential Energy",
              titleBangla: "২.২ গতিশক্তি ও বিভব শক্তির সমীকরণ ও রূপান্তর",
              summary: "Ek = 1/2 mv^2 এবং Ep = mgh সমীকরণ এবং মুক্তভাবে পড়ন্ত বস্তুর শক্তি বিনিময়।",
              keywords: ["গতিশক্তি", "বিভব শক্তি", "শক্তি রূপান্তর"]
            },
            {
              id: "c8-sci-inv-ch2-l3",
              point: "২.৩",
              title: "Conservation of Energy and Power Efficiency",
              titleBangla: "২.৩ শক্তির সংরক্ষণশীলতা নীতি ও কর্মদক্ষতা",
              summary: "শক্তির সৃষ্টি বা ধ্বংস নেই কেবল রূপান্তর ঘটে; ক্ষমতা (P=W/t) ও যন্ত্রের কর্মদক্ষতা নির্ণয়।",
              keywords: ["সংরক্ষণশীলতা", "ক্ষমতা", "ওয়াট", "কর্মদক্ষতা"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch3",
          chapterNumber: 3,
          title: "Gravitation and Gravity",
          titleBangla: "৩য় অধ্যায়: মহাকর্ষ ও অভিকর্ষ",
          lessons: [
            {
              id: "c8-sci-inv-ch3-l1",
              point: "৩.১",
              title: "Newton's Law of Universal Gravitation",
              titleBangla: "৩.১ নিউটনের মহাকর্ষ সূত্র ও মহাকর্ষীয় ধ্রুবক (G)",
              summary: "মহাবিশ্বের দুটি বস্তুকণার আকর্ষণ বলের মান, দূরত্বের বর্গের ব্যস্তানুপাত সম্পর্ক।",
              keywords: ["মহাকর্ষ", "মহাকর্ষ ধ্রুবক", "দূরত্ব", "আকর্ষণ বল"]
            },
            {
              id: "c8-sci-inv-ch3-l2",
              point: "৩.২",
              title: "Acceleration Due to Gravity (g) and Its Variations",
              titleBangla: "৩.২ অভিকর্ষজ ত্বরণ (g) ও স্থানভেদে এর পরিবর্তন",
              summary: "মেরু অঞ্চল, বিষুবীয় অঞ্চল এবং ভূপৃষ্ঠের উচ্চতায় g-এর মান ও ওজনের তারতম্য।",
              keywords: ["অভিকর্ষজ ত্বরণ", "g-এর মান", "মেরু অঞ্চল", "বিষুবীয় অঞ্চল"]
            },
            {
              id: "c8-sci-inv-ch3-l3",
              point: "৩.৩",
              title: "Mass vs Weight and Weightlessness",
              titleBangla: "৩.৩ ভর ও ওজনের পার্থক্য এবং ওজনহীনতার বিজ্ঞান",
              summary: "বস্তুর ভর ধ্রুবক হলেও ওজন পরিবর্তনশীল; মহাশূন্যে বা লিফটে ওজনহীনতার অনুভূতির কারণ।",
              keywords: ["ভর", "ওজন", "ওজনহীনতা", "মহাশূন্য"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch4",
          chapterNumber: 4,
          title: "Structure of the Atom",
          titleBangla: "৪র্থ অধ্যায়: পরমাণুর গঠন",
          lessons: [
            {
              id: "c8-sci-inv-ch4-l1",
              point: "৪.১",
              title: "Fundamental Subatomic Particles",
              titleBangla: "৪.১ পরমাণুর মৌলিক কণিকা: ইলেকট্রন, প্রোটন ও নিউট্রন",
              summary: "নিউক্লিয়াসের কেন্দ্রে প্রোটন ও নিউট্রনের অবস্থান এবং কক্ষপথে ঘূর্ণায়মান ঋণাত্মক ইলেকট্রন।",
              keywords: ["পরমাণু", "ইলেকট্রন", "প্রোটন", "নিউট্রন"]
            },
            {
              id: "c8-sci-inv-ch4-l2",
              point: "৪.২",
              title: "Atomic Number, Mass Number, and Isotopes",
              titleBangla: "৪.২ পারমাণবিক সংখ্যা, ভর সংখ্যা ও আইসোটোপের ব্যবহার",
              summary: "প্রোটন সংখ্যা দ্বারা মৌল শনাক্তকরণ, নিউট্রনের ভিন্নতায় আইসোটোপ ও চিকিৎসা ক্ষেত্রে তেজস্ক্রিয় ব্যবহার।",
              keywords: ["পারমাণবিক সংখ্যা", "ভর সংখ্যা", "আইসোটোপ", "তেজস্ক্রিয়তা"]
            },
            {
              id: "c8-sci-inv-ch4-l3",
              point: "৪.৩",
              title: "Bohr Model and Electron Configuration",
              titleBangla: "৪.৩ বোর পরমাণু মডেল ও শক্তিস্তরে ইলেকট্রন বিন্যাস (2n^2)",
              summary: "K, L, M শক্তিস্তরে ইলেকট্রন ধারণক্ষমতা ও প্রথম ২০টি মৌলের নিখুঁত ইলেকট্রন ডায়াগ্রাম।",
              keywords: ["বোর মডেল", "শক্তিস্তর", "ইলেকট্রন বিন্যাস", "2n^2 সূত্র"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch5",
          chapterNumber: 5,
          title: "Chemical Bonds and Reactions",
          titleBangla: "৫ম অধ্যায়: রাসায়নিক বন্ধন ও বিক্রিয়া",
          lessons: [
            {
              id: "c8-sci-inv-ch5-l1",
              point: "৫.১",
              title: "Valency, Radicals and Chemical Formulas",
              titleBangla: "৫.১ যোজ্যতা, যৌগমূলক ও রাসায়নিক সংকেত লিখন",
              summary: "অষ্টক নিয়ম ও স্থিতিশীলতা অর্জনে মৌলসমূহের ইলেকট্রন আদান-প্রদান বা ভাগাভাগির সামর্থ্য।",
              keywords: ["যোজ্যতা", "অষ্টক নিয়ম", "যৌগমূলক", "রাসায়নিক সংকেত"]
            },
            {
              id: "c8-sci-inv-ch5-l2",
              point: "৫.২",
              title: "Ionic and Covalent Bonds",
              titleBangla: "৫.২ আয়নিক ও সমযোজী বন্ধনের গঠন প্রক্রিয়া",
              summary: "ধাতু ও অধাতুর মধ্যে ক্যাটায়ন-অ্যানায়ন সৃষ্টিতে আয়নিক বন্ধন এবং অধাতুদ্বয়ের মধ্যে সমযোজী বন্ধন।",
              keywords: ["আয়নিক বন্ধন", "সমযোজী বন্ধন", "ক্যাটায়ন", "অ্যানায়ন"]
            },
            {
              id: "c8-sci-inv-ch5-l3",
              point: "৫.৩",
              title: "Chemical Equations and Types of Reactions",
              titleBangla: "৫.৩ রাসায়নিক সমীকরণ সমতাকরণ ও বিক্রিয়ার শ্রেণিভেদ",
              summary: "সংযোজন, বিয়োজন, দহন ও প্রতিস্থাপন বিক্রিয়ার সমীকরণ এবং ভরের সংরক্ষণ।",
              keywords: ["সমতাকরণ", "সংযোজন", "দহন", "প্রতিস্থাপন"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch6",
          chapterNumber: 6,
          title: "Acids, Bases, and Salts",
          titleBangla: "৬ষ্ঠ অধ্যায়: এসিড, ক্ষারক ও লবণ",
          lessons: [
            {
              id: "c8-sci-inv-ch6-l1",
              point: "৬.১",
              title: "Properties and Classification of Acids and Bases",
              titleBangla: "৬.১ অম্ল ও ক্ষারকের রাসায়নিক বৈশিষ্ট্য ও পার্থক্য",
              summary: "হাইড্রোজেন আয়ন (H+) দানকারী এসিড এবং হাইড্রোক্সাইড আয়ন (OH-) দানকারী ক্ষারক।",
              keywords: ["এসিড", "ক্ষারক", "হাইড্রোজেন আয়ন", "হাইড্রোক্সাইড"]
            },
            {
              id: "c8-sci-inv-ch6-l2",
              point: "৬.২",
              title: "Indicators and the pH Scale (0-14)",
              titleBangla: "৬.২ নির্দেশক, লিটমাস পেপার ও pH স্কেল",
              summary: "দ্রবণের অম্লত্ব ও ক্ষারত্ব নির্দেশক রঙ পরিবর্তন এবং ৭ নিরপেক্ষ pH-এর তাৎপর্য।",
              keywords: ["pH স্কেল", "লিটমাস পেপার", "নির্দেশক", "অম্লত্ব"]
            },
            {
              id: "c8-sci-inv-ch6-l3",
              point: "৬.৩",
              title: "Neutralization Reactions and Salts in Daily Life",
              titleBangla: "৬.৩ প্রশমন বিক্রিয়া এবং প্রাত্যহিক জীবনে লবণের ব্যবহার",
              summary: "এসিড ও ক্ষারকের বিক্রিয়ায় লবণ ও পানি তৈরি; পেটের এসিডিটিতে এন্টাসিডের ভূমিকা।",
              keywords: ["প্রশমন বিক্রিয়া", "লবণ", "এন্টাসিড", "ব্যবহারিক বিজ্ঞান"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch7",
          chapterNumber: 7,
          title: "Cell and Tissue Organization",
          titleBangla: "৭ম অধ্যায়: কোষ ও টিস্যু সংগঠন",
          lessons: [
            {
              id: "c8-sci-inv-ch7-l1",
              point: "৭.১",
              title: "Plant vs Animal Cell Organelles",
              titleBangla: "৭.১ উদ্ভিদ ও প্রাণীকোষের তুলনামূলক গঠন ও অঙ্গাণু",
              summary: "কোষপ্রাচীর, কোষঝিল্লি, প্লাস্টিড, মাইটোকন্ড্রিয়া, গলগি বডি ও লাইসোজোমের কাজ।",
              keywords: ["কোষ অঙ্গাণু", "প্লাস্টিড", "মাইটোকন্ড্রিয়া", "কোষপ্রাচীর"]
            },
            {
              id: "c8-sci-inv-ch7-l2",
              point: "৭.২",
              title: "Plant and Animal Tissues",
              titleBangla: "৭.২ উদ্ভিদ ও প্রাণীর প্রধান টিস্যুগুলোর কাজ",
              summary: "ভাজক টিস্যু, স্থায়ী টিস্যু (জাইলেম ও ফ্লোয়েম) এবং প্রাণীর আবরণী, যোজক ও পেশিকলা।",
              keywords: ["জাইলেম", "ফ্লোয়েম", "যোজক কলা", "পেশিকলা"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch8",
          chapterNumber: 8,
          title: "Cell Division and Growth",
          titleBangla: "৮ম অধ্যায়: কোষ বিভাজন ও শারীরিক বৃদ্ধি",
          lessons: [
            {
              id: "c8-sci-inv-ch8-l1",
              point: "৮.১",
              title: "Amitosis, Mitosis, and Stages of Mitosis",
              titleBangla: "৮.১ অ্যামাইটোসিস ও মাইটোসিস কোষ বিভাজনের ধাপসমূহ",
              summary: "প্রোফেজ, মেটাফেজ, অ্যানাফেজ ও টেলোফেজ ধাপে সমগুণসম্পন্ন অপত্য কোষ সৃষ্টি।",
              keywords: ["মাইটোসিস", "কোষ বিভাজন", "মেটাফেজ", "অপত্য কোষ"]
            },
            {
              id: "c8-sci-inv-ch8-l2",
              point: "৮.২",
              title: "Meiosis and Genetic Variation",
              titleBangla: "৮.২ মিয়োসিস বিভাজন ও ক্রোমোজোম সংখ্যার ভারসাম্য",
              summary: "জননকোষ তৈরিতে হ্রাসমূলক বিভাজন এবং বংশপরম্পরায় ক্রোমোজোম সংখ্যা নির্দিষ্ট রাখা।",
              keywords: ["মিয়োসিস", "হ্রাসমূলক বিভাজন", "জননকোষ", "ক্রোমোজোম"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch9",
          chapterNumber: 9,
          title: "Plant Physiology and Transportation",
          titleBangla: "৯ম অধ্যায়: উদ্ভিদের শারীরবৃত্তীয় প্রক্রিয়া",
          lessons: [
            {
              id: "c8-sci-inv-ch9-l1",
              point: "৯.১",
              title: "Diffusion, Osmosis, and Water Absorption",
              titleBangla: "৯.১ ব্যাপন, অভিস্রবণ ও মূলরোম দ্বারা পানি শোষণ",
              summary: "অর্ধভেদ্য ঝিল্লির মধ্য দিয়ে পানির অণুর চলাচল এবং মাটির কৈশিক পানির পরিবহন।",
              keywords: ["ব্যাপন", "অভিস্রবণ", "মূলরোম", "পানি শোষণ"]
            },
            {
              id: "c8-sci-inv-ch9-l2",
              point: "৯.২",
              title: "Transpiration and Photosynthesis",
              titleBangla: "৯.২ প্রস্বেদন (বাষ্পমোচন) ও সালোকসংশ্লেষণ প্রক্রিয়া",
              summary: "পাতার স্টোমাটা দিয়ে অতিরিক্ত বাষ্প নির্গমন এবং ক্লোরোফিলে খাদ্য প্রস্তুতের বিক্রিয়া।",
              keywords: ["প্রস্বেদন", "সালোকসংশ্লেষণ", "স্টোমাটা", "ক্লোরোফিল"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch10",
          chapterNumber: 10,
          title: "Genetics and Heredity",
          titleBangla: "১০ম অধ্যায়: জিনতত্ত্ব ও বংশগতি",
          lessons: [
            {
              id: "c8-sci-inv-ch10-l1",
              point: "১০.১",
              title: "Chromosomes, DNA, and RNA Structure",
              titleBangla: "১০.১ ক্রোমোজোম, ডিএনএ ও আরএনএ-এর আণবিক কাঠামো",
              summary: "ডাবল হেলিক্স মডেল, নিউক্লিওটাইড এবং বৈশিষ্ট্যের ধারক ও বাহক হিসেবে জিনের ভূমিকা।",
              keywords: ["ক্রোমোজোম", "ডিএনএ (DNA)", "আরএনএ (RNA)", "জিন"]
            },
            {
              id: "c8-sci-inv-ch10-l2",
              point: "১০.২",
              title: "Mendelian Principles and Trait Inheritance",
              titleBangla: "১০.২ মেন্ডেলের বংশগতির সূত্র ও বৈশিষ্ট্যের সঞ্চারণ",
              summary: "মটরশুঁটির পরীক্ষার মাধ্যমে প্রকট ও প্রচ্ছন্ন বৈশিষ্ট্যের প্রকাশ এবং মানব বংশগতি।",
              keywords: ["মেন্ডেল", "প্রকট বৈশিষ্ট্য", "প্রচ্ছন্ন বৈশিষ্ট্য", "বংশগতি"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch11",
          chapterNumber: 11,
          title: "Light: Refraction and Optical Instruments",
          titleBangla: "১১শ অধ্যায়: আলো ও দৃষ্টির বিজ্ঞান",
          lessons: [
            {
              id: "c8-sci-inv-ch11-l1",
              point: "১১.১",
              title: "Laws of Refraction and Snell's Law",
              titleBangla: "১১.১ আলোর প্রতিসরণের নিয়ম ও প্রতিসরণাঙ্ক",
              summary: "এক মাধ্যম থেকে অন্য মাধ্যমে আলোর দিক পরিবর্তন ও অভিলম্বের দিকে বা দূরে বেঁকে যাওয়া।",
              keywords: ["প্রতিসরণ", "প্রতিসরণাঙ্ক", "স্নেলের সূত্র", "মাধ্যম"]
            },
            {
              id: "c8-sci-inv-ch11-l2",
              point: "১১.২",
              title: "Total Internal Reflection and Optical Fibers",
              titleBangla: "১১.২ পূর্ণ অভ্যন্তরীণ প্রতিফলন, সংকট কোণ ও অপটিক্যাল ফাইবার",
              summary: "ক্রান্তি কোণের চেয়ে বড় কোণে আলোর সম্পূর্ণ প্রতিফলন এবং উচ্চগতির ইন্টারনেট সংযোগ।",
              keywords: ["পূর্ণ অভ্যন্তরীণ প্রতিফলন", "সংকট কোণ", "অপটিক্যাল ফাইবার"]
            },
            {
              id: "c8-sci-inv-ch11-l3",
              point: "১১.৩",
              title: "Convex and Concave Lenses, Human Eye",
              titleBangla: "১১.৩ উত্তল ও অবতল লেন্স এবং মানুষের চোখের দৃষ্টি ত্রুটি",
              summary: "লেন্সের ফোকাস দূরত্ব, বাস্তব ও অবাস্তব প্রতিবিম্ব এবং চশমায় মায়োপিয়া-হাইপারমেট্রোপিয়া নিরাময়।",
              keywords: ["উত্তল লেন্স", "অবতল লেন্স", "চোখের ত্রুটি", "মায়োপিয়া"]
            }
          ]
        },
        {
          id: "c8-sci-inv-ch12",
          chapterNumber: 12,
          title: "Sound, Waves, and Astronomy",
          titleBangla: "১২শ অধ্যায়: তরঙ্গ, শব্দ ও মহাবিশ্ব",
          lessons: [
            {
              id: "c8-sci-inv-ch12-l1",
              point: "১২.১",
              title: "Wave Characteristics (v = f x lambda)",
              titleBangla: "১২.১ তরঙ্গের বিস্তার, কম্পাঙ্ক ও তরঙ্গদৈর্ঘ্য",
              summary: "অনুদৈর্ঘ্য ও অনুপ্রস্থ তরঙ্গ, কম্পাঙ্ক হার্টজ (Hz) এবং তরঙ্গের বেগ সমীকরণ।",
              keywords: ["তরঙ্গ", "কম্পাঙ্ক", "তরঙ্গদৈর্ঘ্য", "হার্টজ"]
            },
            {
              id: "c8-sci-inv-ch12-l2",
              point: "১২.২",
              title: "Speed of Sound, Echo, and Ultrasound",
              titleBangla: "১২.২ শব্দের বেগ, প্রতিধ্বনি ও আল্ট্রাসাউন্ডের প্রয়োগ",
              summary: "শব্দোত্তর তরঙ্গের সাহায্যে সমুদ্রের গভীরতা পরিমাপ ও চিকিৎসা বিজ্ঞানে আল্ট্রাসনোগ্রাফি।",
              keywords: ["প্রতিধ্বনি", "আল্ট্রাসাউন্ড", "শব্দের বেগ", "আল্ট্রাসনোগ্রাফি"]
            },
            {
              id: "c8-sci-inv-ch12-l3",
              point: "১২.৩",
              title: "Solar System, Galaxies and Big Bang Theory",
              titleBangla: "১২.৩ সৌরজগৎ, ছায়াপথ ও মহাবিশ্বের উৎপত্তি",
              summary: "সূর্য ও গ্রহসমূহের ঘূর্ণন, মিল্কিওয়ে গ্যালাক্সি এবং বিগ ব্যাং তত্ত্বের মহাজাগতিক সম্প্রসারণ।",
              keywords: ["সৌরজগৎ", "মিল্কিওয়ে", "গ্যালাক্সি", "বিগ ব্যাং"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৫. বিজ্ঞান (অনুশীলন পাঠ) - Science (Activity/Inquiry Study)
    // ====================================================
    {
      id: "c8-science-activity",
      code: "SCI-08-ACT",
      name: "Science (Activity/Inquiry Study)",
      nameBangla: "বিজ্ঞান (অনুশীলন পাঠ)",
      group: "General",
      coverColor: "from-teal-600 to-emerald-850",
      chapters: [
        {
          id: "c8-sci-act-ch1",
          chapterNumber: 1,
          title: "Motion and Friction Experiments",
          titleBangla: "১ম অভিজ্ঞতা: ঢালু তলে গতি ও ঘর্ষণ বলের বাস্তব পরীক্ষণ",
          lessons: [
            {
              id: "c8-sci-act-ch1-l1",
              point: "১.১",
              title: "Measuring Velocity and Acceleration with a Ramp",
              titleBangla: "১.১ ঢালু তলে মার্বেলের গড় বেগ ও ত্বরণ নিরূপণ",
              summary: "কাঠের স্কেল ও স্টপওয়াচ দিয়ে বিভিন্ন ঢালে মার্বেল গড়িয়ে সময় ও দূরত্বের হিসাব।",
              keywords: ["পরীক্ষণ", "ঢালু তল", "স্টপওয়াচ", "ত্বরণ পরিমাপ"]
            },
            {
              id: "c8-sci-act-ch1-l2",
              point: "১.২",
              title: "Testing Friction Coefficients Across Surfaces",
              titleBangla: "১.২ মসৃণ, খসখসে ও তৈলাক্ত তলে ঘর্ষণ বলের তুলনা",
              summary: "কাচ, বালি ও তেল মাখানো তলে বস্তুর গতিরোধক বল পরিমাপ করে ঘর্ষণ হ্রাসক কৌশল বের করা।",
              keywords: ["ঘর্ষণ পরীক্ষা", "পৃষ্ঠতল", "লুব্রিকেন্ট", "গতিরোধ"]
            }
          ]
        },
        {
          id: "c8-sci-act-ch2",
          chapterNumber: 2,
          title: "Energy Conversion Toy Projects",
          titleBangla: "২য় অভিজ্ঞতা: শক্তি রূপান্তর ও হস্তনির্মিত যন্ত্র তৈরি",
          lessons: [
            {
              id: "c8-sci-act-ch2-l1",
              point: "২.১",
              title: "Building an Elastic Energy Powered Toy Car",
              titleBangla: "২.১ রবারব্যান্ড চালিত খেলনা গাড়ি নির্মাণ",
              summary: "স্থিতিশক্তিকে গতিশক্তিতে রূপান্তরের বাস্তব মডেল হিসেবে পুনর্ব্যবহারযোগ্য উপকরণে গাড়ি তৈরি।",
              keywords: ["খেলনা গাড়ি", "স্থিতিশক্তি", "রবারব্যান্ড", "প্রকল্প"]
            },
            {
              id: "c8-sci-act-ch2-l2",
              point: "২.২",
              title: "Small Wind Turbine and Solar Heat Collector",
              titleBangla: "২.২ ক্ষুদ্র বায়ুকল ও সৌর তাপ সংগ্রাহক মডেল প্রস্তুত",
              summary: "কাগজের পাখা ও ডিসি মোটর ঘুরিয়ে এলইডি বাতি জ্বালানো এবং কাচের বাক্সে সৌর উনান তৈরি।",
              keywords: ["বায়ুকল", "সৌর শক্তি", "নবায়নযোগ্য শক্তি", "মডেল"]
            }
          ]
        },
        {
          id: "c8-sci-act-ch3",
          chapterNumber: 3,
          title: "Spring Balance and Buoyancy Inquiry",
          titleBangla: "৩য় অভিজ্ঞতা: স্প্রিং নিক্তি ও প্লাবতার বৈজ্ঞানিক অনুসন্ধান",
          lessons: [
            {
              id: "c8-sci-act-ch3-l1",
              point: "৩.১",
              title: "Calibrating a Spring Balance for Mass and Weight",
              titleBangla: "৩.১ স্প্রিং নিক্তি দিয়ে বস্তুর ওজন ও টান বল পরিমাপ",
              summary: "হুকের সূত্র পর্যবেক্ষণ করে স্প্রিংয়ের প্রসারণের সাথে ওজনের সম্পর্ক যাচাই।",
              keywords: ["স্প্রিং নিক্তি", "হুকের সূত্র", "ওজন পরিমাপ", "টান বল"]
            },
            {
              id: "c8-sci-act-ch3-l2",
              point: "৩.২",
              title: "Archimedes' Principle and Apparent Weight in Liquids",
              titleBangla: "৩.২ আর্কিমিডিসের নীতি ও পানিতে বস্তুর আপাত ওজন হ্রাস",
              summary: "পানিতে নিমজ্জিত বস্তুর অপসারিত পানির ওজন এবং ঊর্ধ্বমুখী প্লাবতা বলের সমানত্ব পরীক্ষা।",
              keywords: ["আর্কিমিডিস নীতি", "প্লাবতা", "আপাত ওজন", "নিমজ্জিত বস্তু"]
            }
          ]
        },
        {
          id: "c8-sci-act-ch4",
          chapterNumber: 4,
          title: "3D Atomic Model Building",
          titleBangla: "৪র্থ অভিজ্ঞতা: পরমাণুর ত্রিমাত্রিক মডেল তৈরি",
          lessons: [
            {
              id: "c8-sci-act-ch4-l1",
              point: "৪.১",
              title: "Crafting Subatomic Particles with Clay and Beads",
              titleBangla: "৪.১ মাটি ও রঙিন পুঁতি দিয়ে নিউক্লিয়াস ও কক্ষপথ প্রদর্শন",
              summary: "সোডিয়াম, কার্বন ও অক্সিজেনের ইলেকট্রন বিন্যাস তারের বৃত্তে পুঁতি বসিয়ে প্রস্তুতকরণ।",
              keywords: ["পরমাণুর মডেল", "ইলেকট্রন বিন্যাস", "নিউক্লিয়াস", "হাতে-কলমে"]
            }
          ]
        },
        {
          id: "c8-sci-act-ch5",
          chapterNumber: 5,
          title: "Household Acid-Base and pH Testing",
          titleBangla: "৫ম অভিজ্ঞতা: গৃহস্থালি সামগ্রীতে এসিড ও ক্ষারের উপস্থিতি নির্ণয়",
          lessons: [
            {
              id: "c8-sci-act-ch5-l1",
              point: "৫.১",
              title: "Extracting Natural Plant Indicators (Hibiscus and Turmeric)",
              titleBangla: "৫.১ জবা ফুল ও হলুদের নির্যাস থেকে প্রাকৃতিক নির্দেশক তৈরি",
              summary: "জবা ফুলের রস ও হলুদ পানিতে লেবুর রস এবং সাবানের ফেনা মিশিয়ে বর্ণ পরিবর্তন পর্যবেক্ষণ।",
              keywords: ["প্রাকৃতিক নির্দেশক", "জবা ফুল", "হলুদ", "বর্ণ পরিবর্তন"]
            },
            {
              id: "c8-sci-act-ch5-l2",
              point: "৫.২",
              title: "pH Testing of Soft Drinks, Soil and Vinegar",
              titleBangla: "৫.২ মাটির নমুনা, কোমল পানীয় ও ভিনেগারের pH মান নির্ণয়",
              summary: "ইউনিভার্সাল নির্দেশক পেপার দিয়ে এলাকার কৃষিজমির মাটির অম্লত্ব পরীক্ষা ও সুপারিশ।",
              keywords: ["pH পরীক্ষা", "মাটির অম্লত্ব", "ভিনেগার", "কৃষি সুপারিশ"]
            }
          ]
        },
        {
          id: "c8-sci-act-ch6",
          chapterNumber: 6,
          title: "Microscopic Cell and Tissue Observation",
          titleBangla: "৬ষ্ঠ অভিজ্ঞতা: অণুবীক্ষণ যন্ত্রে উদ্ভিদ ও প্রাণীকোষ পর্যবেক্ষণ",
          lessons: [
            {
              id: "c8-sci-act-ch6-l1",
              point: "৬.১",
              title: "Preparing Onion Peel Slide and Staining with Iodine",
              titleBangla: "৬.১ পেঁয়াজের শল্কপত্রের স্লাইড তৈরি ও নিউক্লিয়াস চিহ্নিতকরণ",
              summary: "কাচের স্লাইডে কভারস্লিপ ও আয়োডিন দিয়ে রঞ্জিত করে যৌগিক অণুবীক্ষণ যন্ত্রে কোষপ্রাচীর ও নিউক্লিয়াস দর্শন।",
              keywords: ["স্লাইড তৈরি", "পেঁয়াজের খোসা", "অণুবীক্ষণ যন্ত্র", "নিউক্লিয়াস"]
            },
            {
              id: "c8-sci-act-ch6-l2",
              point: "৬.২",
              title: "Observing Stomata and Amoeba in Pond Water",
              titleBangla: "৬.২ পাতার পত্ররন্ধ্র (স্টোমাটা) ও পুকুরের পানির অণুজীব পরীক্ষণ",
              summary: "পাতার নিচের ত্বকের পিলিং ও পুকুরের পানিতে অ্যামিবা, প্যারামেসিয়ামের চলন পর্যবেক্ষণ।",
              keywords: ["পত্ররন্ধ্র", "স্টোমাটা", "পুকুরের পানি", "অণুজীব"]
            }
          ]
        },
        {
          id: "c8-sci-act-ch7",
          chapterNumber: 7,
          title: "Optics: Constructing a Periscope and Prism Refraction",
          titleBangla: "৭ম অভিজ্ঞতা: পেরিস্কোপ নির্মাণ ও প্রিজমে আলোর বিচ্ছুরণ",
          lessons: [
            {
              id: "c8-sci-act-ch7-l1",
              point: "৭.১",
              title: "Building a Functional Cardboard Periscope",
              titleBangla: "৭.১ কার্ডবোর্ড ও সমতল দর্পণ দিয়ে পেরিস্কোপ তৈরি",
              summary: "৪৫ ডিগ্রি কোণে দুটি সমতল আয়না বসিয়ে দেয়ালের ওপরের দৃশ্য দেখার কৌশল প্রদর্শন।",
              keywords: ["পেরিস্কোপ", "সমতল দর্পণ", "৪৫ ডিগ্রি কোণ", "প্রতিফলন"]
            },
            {
              id: "c8-sci-act-ch7-l2",
              point: "৭.২",
              title: "Decomposing White Light Using a Glass Prism",
              titleBangla: "৭.২ কাচের প্রিজমের সাহায্যে সাদা আলোর সাত রঙে বিচ্ছুরণ",
              summary: "বেনীআসহকলা (VIBGYOR) বর্ণালী সৃষ্টি করে বিভিন্ন রঙের প্রতিসরণ কোণের পার্থক্য অনুধাবন।",
              keywords: ["প্রিজম", "আলোর বিচ্ছুরণ", "বর্ণালী", "সাত রঙ"]
            }
          ]
        },
        {
          id: "c8-sci-act-ch8",
          chapterNumber: 8,
          title: "Sound Resonance and Community Noise Survey",
          titleBangla: "৮ম অভিজ্ঞতা: সুরশলাকা ও শব্দদূষণ জরিপ প্রকল্প",
          lessons: [
            {
              id: "c8-sci-act-ch8-l1",
              point: "৮.১",
              title: "Tuning Fork Vibration and Resonance Tube Experiment",
              titleBangla: "৮.১ সুরশলাকার কম্পন ও ফাঁপা নলে অনুরণন পরীক্ষা",
              summary: "পানিতে কাচের নল উঠানামা করিয়ে শব্দের অনুরণন সৃষ্টি ও শব্দের বেগ যাচাই।",
              keywords: ["সুরশলাকা", "অনুরণন", "কম্পন", "শব্দের বেগ"]
            },
            {
              id: "c8-sci-act-ch8-l2",
              point: "৮.২",
              title: "Smartphone Decibel App Noise Audit in Neighborhood",
              titleBangla: "৮.২ মোবাইল অ্যাপে এলাকার বিভিন্ন পয়েন্টে শব্দদূষণ জরিপ",
              summary: "বাজার, হাসপাতাল মোড় ও বিদ্যালয় প্রাঙ্গণের শব্দমাত্রা (dB) রেকর্ড করে সচেতনতামূলক প্রতিবেদন প্রকাশ।",
              keywords: ["শব্দদূষণ", "ডেসিবেল (dB)", "জরিপ", "সচেতনতা"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৬. ইতিহাস ও সামাজিক বিজ্ঞান (History and Social Science)
    // ====================================================
    {
      id: "c8-history-social-science",
      code: "HSS-08",
      name: "History and Social Science",
      nameBangla: "ইতিহাস ও সামাজিক বিজ্ঞান",
      group: "General",
      coverColor: "from-amber-700 to-yellow-950",
      chapters: [
        {
          id: "c8-hss-ch1",
          chapterNumber: 1,
          title: "Identity and Social Context",
          titleBangla: "১ম অধ্যায়: আত্মপরিচয় ও সামাজিক প্রেক্ষাপট",
          lessons: [
            {
              id: "c8-hss-ch1-l1",
              point: "১.১",
              title: "Socialization and Multiple Social Identities",
              titleBangla: "১.১ সামাজিকীকরণ ও বহুমাত্রিক আত্মপরিচয়",
              summary: "পরিবার, বিদ্যালয় ও সমাজের মিথস্ক্রিয়ায় মূল্যবোধ ও আত্মমর্যাদার বিকাশ।",
              keywords: ["আত্মপরিচয়", "সামাজিকীকরণ", "মূল্যবোধ", "ব্যক্তিত্ব"]
            },
            {
              id: "c8-hss-ch1-l2",
              point: "১.২",
              title: "Cultural Roots and Collective Memory",
              titleBangla: "১.২ সাংস্কৃতিক শিকড় ও যৌথ স্মৃতিচিহ্ন অন্বেষণ",
              summary: "প্রজন্ম থেকে প্রজন্মে প্রবাহিত লোকঐতিহ্য ও স্থানিক স্মৃতির বিশ্লেষণ।",
              keywords: ["সাংস্কৃতিক শিকড়", "লোকঐতিহ্য", "স্মৃতিচিহ্ন"]
            }
          ]
        },
        {
          id: "c8-hss-ch2",
          chapterNumber: 2,
          title: "Ancient Bengal: Political and Cultural History",
          titleBangla: "২য় অধ্যায়: প্রাচীন বাংলার রাজনৈতিক ও সাংস্কৃতিক ইতিহাস",
          lessons: [
            {
              id: "c8-hss-ch2-l1",
              point: "২.১",
              title: "Janapadas of Ancient Bengal (Vanga, Pundra, Gauda)",
              titleBangla: "২.১ প্রাচীন বাংলার জনপদসমূহ (বঙ্গ, পুণ্ড্র, গৌড়, সমতট)",
              summary: "ভৌগোলিক সীমানা, নদীমাতৃক জীবন ও স্বাধীন জনপদের আর্থ-সামাজিক পরিচয়।",
              keywords: ["জনপদ", "বঙ্গ", "পুণ্ড্র", "গৌড়", "সমতট"]
            },
            {
              id: "c8-hss-ch2-l2",
              point: "২.২",
              title: "Pala Dynasty and Buddhist Culture",
              titleBangla: "২.২ পাল রাজবংশ ও বৌদ্ধ সংস্কৃতির স্বর্ণযুগ",
              summary: "গোপালের উত্থান, ধর্মপাল, সোমপুর মহাবিহার এবং চার শতাব্দীর স্থিতিশীল শাসন।",
              keywords: ["পাল বংশ", "গোপাল", "ধর্মপাল", "সোমপুর মহাবিহার"]
            },
            {
              id: "c8-hss-ch2-l3",
              point: "২.৩",
              title: "Sena Rule and Socio-Religious Shifts",
              titleBangla: "২.৩ সেন শাসন ও তৎকালীন সমাজ ব্যবস্থার রূপান্তর",
              summary: "বিজয় সেন, বল্লাল সেন ও কৌলীন্য প্রথা প্রবর্তন এবং সামাজিক বিভাজন।",
              keywords: ["সেন বংশ", "বল্লাল সেন", "কৌলীন্য প্রথা", "সমাজ রূপান্তর"]
            }
          ]
        },
        {
          id: "c8-hss-ch3",
          chapterNumber: 3,
          title: "Medieval Bengal and the Sultanate Era",
          titleBangla: "৩য় অধ্যায়: মধ্যযুগের বাংলা ও সুলতানি গৌরব",
          lessons: [
            {
              id: "c8-hss-ch3-l1",
              point: "৩.১",
              title: "Bakhtiyar Khalji's Expedition and Muslim Influx",
              titleBangla: "৩.১ বখতিয়ার খলজির আগমন ও স্বাধীন সালতানাতের সূচনা",
              summary: "১২০৪ সালের পটপরিবর্তন এবং বাংলায় প্রশাসনিক ও সাংস্কৃতিক রূপান্তর।",
              keywords: ["বখতিয়ার খলজি", "সালতানাত", "পটপরিবর্তন", "মধ্যযুগ"]
            },
            {
              id: "c8-hss-ch3-l2",
              point: "৩.২",
              title: "Ilyas Shahi Dynasty and Bengali Identity",
              titleBangla: "৩.২ ইলিয়াস শাহী আমল ও 'বাঙ্গালাহ' জাতীয়তাবোধ",
              summary: "শামসুদ্দিন ইলিয়াস শাহের বাংলা একত্রীকরণ ও বাংলা ভাষার রাজকীয় পৃষ্ঠপোষকতা।",
              keywords: ["ইলিয়াস শাহ", "বাঙ্গালাহ", "বাংলা ভাষা", "একত্রীকরণ"]
            },
            {
              id: "c8-hss-ch3-l3",
              point: "৩.৩",
              title: "Husain Shahi Dynasty: Golden Era of Harmony",
              titleBangla: "৩.৩ হোসেন শাহী আমল ও ধর্মীয় সম্প্রীতির স্বর্ণযুগ",
              summary: "আলাউদ্দিন হোসেন শাহের শাসন, সাহিত্যচর্চা ও শ্রীচৈতন্যদেবের প্রেমধর্ম আন্দোলন।",
              keywords: ["হোসেন শাহী", "সম্প্রীতি", "শ্রীচৈতন্য", "সাহিত্য বিকাশ"]
            }
          ]
        },
        {
          id: "c8-hss-ch4",
          chapterNumber: 4,
          title: "Mughal Empire and Subah Bangalah",
          titleBangla: "৪র্থ অধ্যায়: মুঘল সাম্রাজ্য ও সুবাহ বাংলা",
          lessons: [
            {
              id: "c8-hss-ch4-l1",
              point: "৪.১",
              title: "Resistance of the Baro-Bhuiyans (Isa Khan)",
              titleBangla: "৪.১ বারোভুঁইয়াদের বীরত্বপূর্ণ প্রতিরোধ ও ঈসা খাঁ",
              summary: "মুঘল আধিপত্যের বিরুদ্ধে সোনারগাঁয়ের ঈসা খাঁ ও বাংলার জমিদারদের স্বাধিকার সংগ্রাম।",
              keywords: ["বারোভুঁইয়া", "ঈসা খাঁ", "সোনারগাঁ", "প্রতিরোধ"]
            },
            {
              id: "c8-hss-ch4-l2",
              point: "৪.২",
              title: "Subahdar Islam Khan and Founding of Dhaka",
              titleBangla: "৪.২ সুবাহদার ইসলাম খান ও জাহাঙ্গীরনগর (ঢাকা) রাজধানী স্থাপন",
              summary: "১৬১০ সালে ঢাকার রাজধানী প্রতিষ্ঠা, নৌযুদ্ধ ও মুঘল স্থাপত্যকীর্তির বিস্তার।",
              keywords: ["ইসলাম খান", "জাহাঙ্গীরনগর", "ঢাকা রাজধানী", "মুঘল স্থাপত্য"]
            },
            {
              id: "c8-hss-ch4-l3",
              point: "৪.৩",
              title: "Nawabi Era and Commercial Prosperity",
              titleBangla: "৪.৩ নবাবি আমল ও মসলিন বস্ত্রের বিশ্ববাণিজ্য",
              summary: "মুর্শিদকুলি খান, আলীবর্দী খান এবং বাংলার তাঁতশিল্প ও আন্তর্জাতিক বাণিজ্য সমৃদ্ধি।",
              keywords: ["নবাবি আমল", "মুর্শিদকুলি খান", "মসলিন", "আন্তর্জাতিক বাণিজ্য"]
            }
          ]
        },
        {
          id: "c8-hss-ch5",
          chapterNumber: 5,
          title: "Colonial Rule and Liberation Resistance",
          titleBangla: "৫ম অধ্যায়: ঔপনিবেশিক আগ্রাসন ও স্বাধীনতা সংগ্রাম",
          lessons: [
            {
              id: "c8-hss-ch5-l1",
              point: "৫.১",
              title: "Battle of Plassey (1757) and Company Rule",
              titleBangla: "৫.১ পলাশীর যুদ্ধ (১৭৫৭) ও ইস্ট ইন্ডিয়া কোম্পানির দখলদারিত্ব",
              summary: "নবাব সিরাজউদ্দৌলার পরাজয়, মীর জাফরের বিশ্বাসঘাতকতা ও ব্রিটিশ শাসনের সূচনা।",
              keywords: ["পলাশীর যুদ্ধ", "সিরাজউদ্দৌলা", "কোম্পানি শাসন", "১৭৫৭"]
            },
            {
              id: "c8-hss-ch5-l2",
              point: "৫.২",
              title: "Permanent Settlement (1793) and Peasant Exploitation",
              titleBangla: "৫.২ চিরস্থায়ী বন্দোবস্ত (১৭৯৩) ও কৃষক সমাজের শোষণ",
              summary: "লর্ড কর্নওয়ালিসের কর ব্যবস্থা, জমিদারদের উত্থান ও নীলচাষের অমানবিক চাপ।",
              keywords: ["চিরস্থায়ী বন্দোবস্ত", "জমিদার", "নীলচাষ", "কৃষক শোষণ"]
            },
            {
              id: "c8-hss-ch5-l3",
              point: "৫.৩",
              title: "Fakir-Sannyasi Rebellion and 1857 Revolt",
              titleBangla: "৫.৩ ফকির-সন্ন্যাসী বিদ্রোহ, তিতুমীরের বাঁশের কেল্লা ও ১৮৫৭ সালের মহাবিদ্রোহ",
              summary: "ব্রিটিশ বিরোধী গণপ্রতিরোধের সূচনা এবং ভারতীয় সিপাহিদের ঐক্যবদ্ধ বিপ্লব।",
              keywords: ["তিতুমীর", "বাঁশের কেল্লা", "১৮৫৭ বিদ্রোহ", "ফকির-সন্ন্যাসী"]
            }
          ]
        },
        {
          id: "c8-hss-ch6",
          chapterNumber: 6,
          title: "State System and Citizens' Rights",
          titleBangla: "৬ষ্ঠ অধ্যায়: রাষ্ট্রব্যবস্থা ও নাগরিক অধিকার",
          lessons: [
            {
              id: "c8-hss-ch6-l1",
              point: "৬.১",
              title: "Four Pillars of Bangladesh Constitution",
              titleBangla: "৬.১ বাংলাদেশ সংবিধানের চার মূলনীতি ও গণতান্ত্রিক কাঠামো",
              summary: "জাতীয়তাবাদ, সমাজতন্ত্র, গণতন্ত্র ও ধর্মনিরপেক্ষতার অন্তর্নিহিত আদর্শ ও প্রয়োগ।",
              keywords: ["সংবিধান", "চার মূলনীতি", "গণতন্ত্র", "ধর্মনিরপেক্ষতা"]
            },
            {
              id: "c8-hss-ch6-l2",
              point: "৬.২",
              title: "Fundamental Rights and Civic Duties",
              titleBangla: "৬.২ মৌলিক মানবাধিকার ও সুনাগরিকের রাষ্ট্রীয় দায়িত্ব",
              summary: "বাকস্বাধীনতা, সমতা, আইনের আশ্রয়লাভ এবং কর প্রদান ও ভোটাধিকার প্রয়োগের গুরুত্ব।",
              keywords: ["মৌলিক অধিকার", "নাগরিক দায়িত্ব", "ভোটাধিকার", "সমতা"]
            }
          ]
        },
        {
          id: "c8-hss-ch7",
          chapterNumber: 7,
          title: "Natural Resources and Sustainable Ecology",
          titleBangla: "৭ম অধ্যায়: প্রাকৃতিক সম্পদ ও টেকসই উন্নয়ন",
          lessons: [
            {
              id: "c8-hss-ch7-l1",
              point: "৭.১",
              title: "Rivers, Forests and Biodiversity of Bangladesh",
              titleBangla: "৭.১ নদীমাতৃক বাংলার জলপথ, সুন্দরবন ও জীববৈচিত্র্য",
              summary: "নদীভাঙন, সুন্দরবনের রয়েল বেঙ্গল টাইগার রক্ষা ও প্রাকৃতিক বনাঞ্চলের সংরক্ষণ।",
              keywords: ["সুন্দরবন", "নদীমাতৃক", "জীববৈচিত্র্য", "বনজ সম্পদ"]
            },
            {
              id: "c8-hss-ch7-l2",
              point: "৭.২",
              title: "Climate Change Vulnerability and COP Goals",
              titleBangla: "৭.২ জলবায়ু সংকট মোকাবেলায় প্রস্তুতি ও টেকসই অভিযোজন",
              summary: "সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি, সাইক্লোন শেল্টার ও নবায়নযোগ্য শক্তির ব্যবহার বাড়ানো।",
              keywords: ["জলবায়ু পরিবর্তন", "সাইক্লোন", "অভিযোজন", "টেকসই উন্নয়ন"]
            }
          ]
        },
        {
          id: "c8-hss-ch8",
          chapterNumber: 8,
          title: "Social Harmony and Global Fellowship",
          titleBangla: "৮ম অধ্যায়: সামাজিক সমতা ও বৈশ্বিক ভ্রাতৃত্ববোধ",
          lessons: [
            {
              id: "c8-hss-ch8-l1",
              point: "৮.১",
              title: "Ethnic Minorities and Cultural Pluralism",
              titleBangla: "৮.১ বাংলাদেশের ক্ষুদ্র নৃগোষ্ঠীর বৈচিত্র্য ও পারস্পরিক শ্রদ্ধা",
              summary: "চাকমা, মারমা, গারো, সাঁওতাল সম্প্রদায়ের ভাষা, কৃষ্টি ও সহাবস্থান।",
              keywords: ["নৃগোষ্ঠী", "চাকমা", "মারমা", "গারো", "সাংস্কৃতিক বৈচিত্র্য"]
            },
            {
              id: "c8-hss-ch8-l2",
              point: "৮.২",
              title: "Universal Declaration of Human Rights and Peace",
              titleBangla: "৮.২ জাতিসংঘ মানবাধিকার সনদ ও বিশ্বশান্তি প্রতিষ্ঠা",
              summary: "জাতিসংঘের ভূমিকা, শান্তিমিশনে বাংলাদেশের অবদান ও বিশ্ব ভ্রাতৃত্বের চেতনা।",
              keywords: ["জাতিসংঘ", "মানবাধিকার সনদ", "শান্তিমিশন", "বিশ্বভ্রাতৃত্ব"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৭. ডিজিটাল প্রযুক্তি (Digital Technology)
    // ====================================================
    {
      id: "c8-digital-technology",
      code: "DGT-08",
      name: "Digital Technology",
      nameBangla: "ডিজিটাল প্রযুক্তি",
      group: "General",
      coverColor: "from-indigo-600 to-purple-850",
      chapters: [
        {
          id: "c8-dgt-ch1",
          chapterNumber: 1,
          title: "Fact Checking and Online Information Verification",
          titleBangla: "১ম শিখন অভিজ্ঞতা: তথ্যের সত্যতা যাচাই ও ফ্যাক্ট চেকিং",
          lessons: [
            {
              id: "c8-dgt-ch1-l1",
              point: "১.১",
              title: "Detecting Fake News and Misinformation",
              titleBangla: "১.১ ভুয়া খবর ও গুজব শনাক্তকরণের মূলনীতি",
              summary: "সোশ্যাল মিডিয়ার তথ্যের উৎস বিশ্লেষণ, বিভ্রান্তিকর শিরোনাম ও ছবি বিকৃতি পরীক্ষা।",
              keywords: ["ফ্যাক্ট চেকিং", "ভুয়া খবর", "গুজব", "উৎস যাচাই"]
            },
            {
              id: "c8-dgt-ch1-l2",
              point: "১.২",
              title: "Reverse Image Search and Digital Evidence",
              titleBangla: "১.২ রিভার্স ইমেজ সার্চ ও ডিজিটাল তথ্যপ্রমাণ যাচাইয়ের টুলস",
              summary: "গুগল লেন্স ও টিনআই ব্যবহার করে ছবির মূল প্রকাশের তারিখ ও স্থান নিরূপণ।",
              keywords: ["রিভার্স ইমেজ সার্চ", "গুগল লেন্স", "ডিজিটাল টুলস"]
            }
          ]
        },
        {
          id: "c8-dgt-ch2",
          chapterNumber: 2,
          title: "Cyber Security and Digital Footprint",
          titleBangla: "২য় শিখন অভিজ্ঞতা: সাইবার নিরাপত্তা ও ডিজিটাল ফুটপ্রিন্ট সুরক্ষা",
          lessons: [
            {
              id: "c8-dgt-ch2-l1",
              point: "২.১",
              title: "Strong Passwords and Two-Factor Authentication (2FA)",
              titleBangla: "২.১ শক্তিশালী পাসওয়ার্ড তৈরি ও দ্বি-স্তরবিশিষ্ট নিরাপত্তা (2FA)",
              summary: "চিহ্ন, সংখ্যা ও অক্ষরের সমন্বয়ে পাসফ্রেজ গঠন এবং ওটিপি (OTP) ব্যবহারের নিয়ম।",
              keywords: ["পাসওয়ার্ড", "2FA", "ওটিপি (OTP)", "সাইবার নিরাপত্তা"]
            },
            {
              id: "c8-dgt-ch2-l2",
              point: "২.২",
              title: "Phishing, Malware and Protecting Digital Footprints",
              titleBangla: "২.২ ফিশিং লিংক প্রতিরোধ ও ব্যক্তিগত গোপনীয়তা রক্ষা",
              summary: "সন্দেহজনক মেইল লিংক বর্জন, ব্রাউজিং হিস্ট্রি ও সামাজিক যোগাযোগের ট্র্যাকিং নিয়ন্ত্রণ।",
              keywords: ["ফিশিং", "ম্যালওয়্যার", "ডিজিটাল ফুটপ্রিন্ট", "গোপনীয়তা"]
            }
          ]
        },
        {
          id: "c8-dgt-ch3",
          chapterNumber: 3,
          title: "Programming Logic and Algorithm Design",
          titleBangla: "৩য় শিখন অভিজ্ঞতা: প্রোগ্রামিং লজিক ও অ্যালগরিদম প্রণয়ন",
          lessons: [
            {
              id: "c8-dgt-ch3-l1",
              point: "৩.১",
              title: "Flowcharts and Pseudocode for Problem Solving",
              titleBangla: "৩.১ সমস্যা সমাধানে ফ্লোচার্ট ও সিউডোকোড রচনা",
              summary: "শুরু, ইনপুট, সিদ্ধান্ত গ্রহণ ও প্রক্রিয়াকরণ প্রতীকের মাধ্যমে লজিক্যাল ডায়াগ্রাম অঙ্কন।",
              keywords: ["ফ্লোচার্ট", "সিউডোকোড", "অ্যালগরিদম", "সিদ্ধান্ত প্রতীক"]
            },
            {
              id: "c8-dgt-ch3-l2",
              point: "৩.২",
              title: "Variables, Conditionals (If-Else), and Loops in Scratch/Python",
              titleBangla: "৩.২ স্ক্র্যাচ ও পাইথনে চলক, শর্ত (If-Else) ও লুপের কোডিং",
              summary: "সহজ প্রোগ্রাম তৈরি করে পুনরাবৃত্তিমূলক কাজ স্বয়ংক্রিয়করণ ও শর্তভিত্তিক আউটপুট প্রদান।",
              keywords: ["পাইথন", "স্ক্র্যাচ", "চলক (Variable)", "লুপ (Loop)"]
            }
          ]
        },
        {
          id: "c8-dgt-ch4",
          chapterNumber: 4,
          title: "Computer Networks and the Internet Architecture",
          titleBangla: "৪র্থ শিখন অভিজ্ঞতা: কম্পিউটার নেটওয়ার্ক ও ক্লাউড অবকাঠামো",
          lessons: [
            {
              id: "c8-dgt-ch4-l1",
              point: "৪.১",
              title: "Network Topologies (LAN, WAN, Router, Switch)",
              titleBangla: "৪.১ নেটওয়ার্কের প্রকারভেদ: ল্যান, ওয়ান ও রাউটারের ভূমিকা",
              summary: "কম্পিউটারসমূহের পরস্পরের সাথে সংযোগরীতি এবং ডেটা প্যাকেট স্থানান্তরের বিজ্ঞান।",
              keywords: ["নেটওয়ার্ক", "ল্যান (LAN)", "ওয়ান (WAN)", "রাউটার"]
            },
            {
              id: "c8-dgt-ch4-l2",
              point: "৪.২",
              title: "IP Addresses, DNS, and Cloud Storage",
              titleBangla: "৪.২ আইপি অ্যাড্রেস, ডিএনএস এবং ক্লাউড স্টোরেজের সুবিধা",
              summary: "ইন্টারনেটের অনন্য ঠিকানা পদ্ধতি এবং গুগল ড্রাইভ/ওয়ানড্রাইভে ফাইল সমন্বয়।",
              keywords: ["আইপি অ্যাড্রেস", "ডিএনএস (DNS)", "ক্লাউড স্টোরেজ", "গুগল ড্রাইভ"]
            }
          ]
        },
        {
          id: "c8-dgt-ch5",
          chapterNumber: 5,
          title: "Artificial Intelligence and Future Technologies",
          titleBangla: "৫ম শিখন অভিজ্ঞতা: কৃত্রিম বুদ্ধিমত্তা (AI) ও রোবোটিক্সের ভবিষ্যৎ",
          lessons: [
            {
              id: "c8-dgt-ch5-l1",
              point: "৫.১",
              title: "Fundamentals of AI, Machine Learning and Prompting",
              titleBangla: "৫.১ কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিংয়ের মৌলিক ধারণা",
              summary: "কম্পিউটার কীভাবে তথ্য দেখে শেখে এবং কার্যকর প্রম্পট লিখে উত্তর সংগ্রহের শিল্প।",
              keywords: ["কৃত্রিম বুদ্ধিমত্তা", "মেশিন লার্নিং", "প্রম্পট", "রোবোটিক্স"]
            },
            {
              id: "c8-dgt-ch5-l2",
              point: "৫.২",
              title: "Ethical Use of AI and Automation Challenges",
              titleBangla: "৫.২ এআই ব্যবহারের নৈতিকতা ও মানবিক দক্ষতার বিকাশ",
              summary: "চুরি করা কনটেন্ট রোধ, ডিপফেক সচেতনতা ও সৃষ্টিশীল কাজে এআই সহযোগীর ভূমিকা।",
              keywords: ["এআই এথিক্স", "ডিপফেক", "কপিরাইট", "সৃজনশীলতা"]
            }
          ]
        },
        {
          id: "c8-dgt-ch6",
          chapterNumber: 6,
          title: "Spreadsheet Analytics and Data Visualization",
          titleBangla: "৬ষ্ঠ শিখন অভিজ্ঞতা: স্প্রেডশিটের সাহায্যে উপাত্ত বিশ্লেষণ ও চার্ট নির্মাণ",
          lessons: [
            {
              id: "c8-dgt-ch6-l1",
              point: "৬.১",
              title: "Spreadsheet Formulas (SUM, AVERAGE, IF, MAX/MIN)",
              titleBangla: "৬.১ স্প্রেডশিটে গাণিতিক সূত্র ও লজিক্যাল ফাংশন প্রয়োগ",
              summary: "এক্সেল বা গুগল শিটসে সেল রেফারেন্স ব্যবহার করে ফলাফল হিসাব ও স্বয়ংক্রিয় সারণি।",
              keywords: ["স্প্রেডশিট", "এক্সেল", "ফাংশন", "SUM", "AVERAGE"]
            },
            {
              id: "c8-dgt-ch6-l2",
              point: "৬.২",
              title: "Generating Column and Pie Charts for Reports",
              titleBangla: "৬.২ স্তম্ভলেখ ও বৃত্তাকার চার্ট তৈরি করে সিদ্ধান্ত গ্রহণ",
              summary: "কাঁচা উপাত্তকে ভিজ্যুয়াল গ্রাফে রূপান্তর এবং গবেষণাপত্রের জন্য উপস্থাপনা তৈরি।",
              keywords: ["চার্ট", "গ্রাফ", "ডেটা ভিজ্যুয়ালাইজেশন", "উপস্থাপন"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৮. জীবন ও জীবিকা (Life and Livelihood)
    // ====================================================
    {
      id: "c8-life-livelihood",
      code: "LAL-08",
      name: "Life and Livelihood",
      nameBangla: "জীবন ও জীবিকা",
      group: "General",
      coverColor: "from-lime-600 to-green-850",
      chapters: [
        {
          id: "c8-lal-ch1",
          chapterNumber: 1,
          title: "Joy of Work and Family Contribution",
          titleBangla: "১ম অধ্যায়: আনন্দের কাজ ও পারিবারিক দায়িত্ব",
          lessons: [
            {
              id: "c8-lal-ch1-l1",
              point: "১.১",
              title: "Dignity of Labor and Shared Household Chores",
              titleBangla: "১.১ শ্রমের মর্যাদা ও পরিবারের কাজে সক্রিয় অংশগ্রহণ",
              summary: "রান্নাঘর পরিচ্ছন্নতা, কাপড় ধোয়া ও পরিবারের বয়োজ্যেষ্ঠদের সেবায় আত্মনিয়োগ।",
              keywords: ["শ্রমের মর্যাদা", "গৃহস্থালি কাজ", "পারিবারিক দায়িত্ব"]
            },
            {
              id: "c8-lal-ch1-l2",
              point: "১.২",
              title: "Family Budgeting and Resource Conservation",
              titleBangla: "১.২ পারিবারিক বাজেট প্রণয়ন ও বিদ্যুৎ-পানির অপচয় রোধ",
              summary: "আয়-ব্যয়ের সুষম ছক তৈরি এবং দৈনন্দিন জীবনে মিতব্যয়ী অভ্যাসের বিকাশ।",
              keywords: ["বাজেট", "মিতব্যয়িতা", "বিদ্যুৎ সাশ্রয়", "হিসাবরক্ষণ"]
            }
          ]
        },
        {
          id: "c8-lal-ch2",
          chapterNumber: 2,
          title: "Transforming Professions and Future Careers",
          titleBangla: "২য় অধ্যায়: পেশার রূপান্তর ও ভবিষ্যৎ কর্মজগৎ",
          lessons: [
            {
              id: "c8-lal-ch2-l1",
              point: "২.১",
              title: "Traditional vs Tech-Driven Modern Occupations",
              titleBangla: "২.১ চিরাচরিত পেশার রূপান্তর ও তথ্যপ্রযুক্তিনির্ভর নতুন সুযোগ",
              summary: "কৃষি, মৎস্য ও শিল্পে আধুনিক যন্ত্রের ব্যবহার এবং ই-কমার্স, ফ্রিল্যান্সিং পেশা।",
              keywords: ["পেশার রূপান্তর", "তথ্যপ্রযুক্তি", "আধুনিক কৃষি", "ফ্রিল্যান্সিং"]
            },
            {
              id: "c8-lal-ch2-l2",
              point: "২.২",
              title: "Assessing Local and Global Job Trends",
              titleBangla: "২.২ স্থানীয় সম্ভাবনা ও বৈশ্বিক শ্রমবাজারের মূল্যায়ন",
              summary: "নিজ এলাকার কাঁচামাল ও সম্ভাবনাময় খাতের ওপর জরিপ চালিয়ে সুযোগ চিহ্নিতকরণ।",
              keywords: ["শ্রমবাজার", "স্থানীয় সম্ভাবনা", "কর্মসংস্থান"]
            }
          ]
        },
        {
          id: "c8-lal-ch3",
          chapterNumber: 3,
          title: "Financial Literacy and Asset Management",
          titleBangla: "৩য় অধ্যায়: আর্থিক সাক্ষরতা ও অর্থ ব্যবস্থাপনা",
          lessons: [
            {
              id: "c8-lal-ch3-l1",
              point: "৩.১",
              title: "Banking Systems, Savings Accounts, and MFS",
              titleBangla: "৩.১ ব্যাংকিং সেবা, সঞ্চয়ী হিসাব ও মোবাইল ফিনান্সিয়াল সার্ভিস",
              summary: "বিকাশ, নগদ, রকেটের নিরাপদ লেনদেন এবং ব্যাংকে স্টুডেন্ট অ্যাকাউন্ট খোলার নিয়ম।",
              keywords: ["ব্যাংকিং", "সঞ্চয়ী হিসাব", "এমএফএস (MFS)", "লেনদেন নিরাপত্তা"]
            },
            {
              id: "c8-lal-ch3-l2",
              point: "৩.২",
              title: "Smart Spending, Avoiding Fraud and Investments",
              titleBangla: "৩.২ সুচিন্তিত ব্যয় পরিকল্পনা ও প্রতারণা থেকে সুরক্ষা",
              summary: "লটারি প্রতারণা ও অনলাইনে ভুয়া বিনিয়োগ ফাঁদ চিনে অর্থ রক্ষা করার কৌশল।",
              keywords: ["আর্থিক প্রতারণা", "বিনিয়োগ", "স্মার্ট ব্যয়", "সচেতনতা"]
            }
          ]
        },
        {
          id: "c8-lal-ch4",
          chapterNumber: 4,
          title: "Journey as an Entrepreneur",
          titleBangla: "৪র্থ অধ্যায়: উদ্যোক্তা হিসেবে যাত্রা ও ব্যবসায় পরিকল্পনা",
          lessons: [
            {
              id: "c8-lal-ch4-l1",
              point: "৪.১",
              title: "Idea Generation and Business Feasibility Analysis",
              titleBangla: "৪.১ ব্যবসায় ধারণা নির্বাচন ও সম্ভাব্যতা যাচাই",
              summary: "স্বল্প পুঁজিতে হস্তশিল্প, নার্সারি বা পুষ্টিকর খাদ্যপণ্য উৎপাদন প্রকল্পের রূপরেখা।",
              keywords: ["উদ্যোক্তা", "ব্যবসায় ধারণা", "সম্ভাব্যতা", "স্বল্প পুঁজি"]
            },
            {
              id: "c8-lal-ch4-l2",
              point: "৪.২",
              title: "Product Marketing, Costing, and Customer Satisfaction",
              titleBangla: "৪.২ পণ্য মূল্য নির্ধারণ, বিপণন ও ক্রেতা সন্তুষ্টি অর্জন",
              summary: "উৎপাদন খরচ, লাভাংশের সঠিক হিসাব এবং সামাজিক মাধ্যমে প্রচারের কৌশল।",
              keywords: ["মূল্য নির্ধারণ", "বিপণন", "মার্কেটিং", "লাভ-ক্ষতি"]
            }
          ]
        },
        {
          id: "c8-lal-ch5",
          chapterNumber: 5,
          title: "Soft Skills, Safety and Work Ethics",
          titleBangla: "৫ম অধ্যায়: পেশাগত দক্ষতা ও কর্মপরিবেশের শৃঙ্খলা",
          lessons: [
            {
              id: "c8-lal-ch5-l1",
              point: "৫.১",
              title: "Workplace Communication, Punctuality, and Team Spirit",
              titleBangla: "৫.১ কর্মক্ষেত্রে যোগাযোগ দক্ষতা, সময়ানুবর্তিতা ও সহযোগিতা",
              summary: "দলগতভাবে কাজ সম্পন্ন করা, মতভেদ দূরীকরণ এবং প্রাতিষ্ঠানিক নিয়মানুবর্তিতা।",
              keywords: ["যোগাযোগ দক্ষতা", "দলগত ঐক্য", "সময়ানুবর্তিতা", "শৃঙ্খলা"]
            },
            {
              id: "c8-lal-ch5-l2",
              point: "৫.২",
              title: "Occupational Health and Workplace Safety Protocols",
              titleBangla: "৫.২ পেশাগত স্বাস্থ্য সুরক্ষা ও বিপদকালীন উদ্ধার প্রস্তুতি",
              summary: "পিপিই (PPE) ব্যবহার, যন্ত্রপাতি সতর্কভাবে পরিচালনা ও আগুন নিয়ন্ত্রণের নিয়ম।",
              keywords: ["পেশাগত স্বাস্থ্য", "নিরাপত্তা", "পিপিই", "জরুরি উদ্ধার"]
            }
          ]
        },
        {
          id: "c8-lal-ch6",
          chapterNumber: 6,
          title: "Personal Roadmap to Future Aspirations",
          titleBangla: "৬ষ্ঠ অধ্যায়: আমার ভবিষ্যৎ স্বপ্নের পথনকশা",
          lessons: [
            {
              id: "c8-lal-ch6-l1",
              point: "৬.১",
              title: "Self-Assessment of Talents, Skills, and Passions",
              titleBangla: "৬.১ ব্যক্তিগত প্রতিভা ও দক্ষতার বস্তুনিষ্ঠ মূল্যায়ন",
              summary: "নিজের শক্তি ও দুর্বলতা চিহ্নিত করে দীর্ঘমেয়াদি লক্ষ্য নির্ধারণের ছক তৈরি।",
              keywords: ["আত্মমূল্যায়ন", "দক্ষতা", "প্রতিভা", "লক্ষ্য নির্ধারণ"]
            },
            {
              id: "c8-lal-ch6-l2",
              point: "৬.২",
              title: "Developing a 5-Year Action Plan for Growth",
              titleBangla: "৬.২ পঞ্চবার্ষিক শিক্ষাগত ও ব্যবহারিক কর্মপরিকল্পনা",
              summary: "লক্ষ্য অর্জনে প্রয়োজনীয় কোর্স, ভাষা শিক্ষা ও ব্যবহারিক প্রশিক্ষণের ধারাবাহিক ধাপ।",
              keywords: ["কর্মপরিকল্পনা", "পঞ্চবার্ষিক পরিকল্পনা", "আত্মউন্নয়ন"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৯. স্বাস্থ্য সুরক্ষা (Health and Wellbeing)
    // ====================================================
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
          title: "Adolescent Changes and Emotional Resilience",
          titleBangla: "১ম অধ্যায়: বয়ঃসন্ধিকালীন পরিবর্তন ও মানসিক সুস্থতা",
          lessons: [
            {
              id: "c8-hlt-ch1-l1",
              point: "১.১",
              title: "Navigating Physical and Hormonal Transitions",
              titleBangla: "১.১ শারীরিক ও হরমোনজনিত পরিবর্তনের বৈজ্ঞানিক বোঝাপড়া",
              summary: "বয়ঃসন্ধির স্বাভাবিক শারীরিক বৃদ্ধি, পরিচ্ছন্নতা এবং লজ্জা ও ভীতি কাটিয়ে ওঠা।",
              keywords: ["বয়ঃসন্ধি", "শারীরিক পরিবর্তন", "হরমোন", "ব্যক্তিগত পরিচ্ছন্নতা"]
            },
            {
              id: "c8-hlt-ch1-l2",
              point: "১.২",
              title: "Emotional Control and Positive Self-Esteem",
              titleBangla: "১.২ আবেগ নিয়ন্ত্রণ ও ইতিবাচক আত্মমর্যাদাবোধের বিকাশ",
              summary: "রাগ, বিষণ্ণতা ও মানসিক ওঠানামা ইতিবাচক উপায়ে সামলানোর কার্যকর কৌশল।",
              keywords: ["আবেগ নিয়ন্ত্রণ", "আত্মমর্যাদা", "মানসিক স্বাস্থ্য", "ইতিবাচক মনোভাব"]
            }
          ]
        },
        {
          id: "c8-hlt-ch2",
          chapterNumber: 2,
          title: "Nutrition, Food Safety, and Disease Prevention",
          titleBangla: "২য় অধ্যায়: পুষ্টি, খাদ্য নিরাপত্তা ও রোগ প্রতিরোধ",
          lessons: [
            {
              id: "c8-hlt-ch2-l1",
              point: "২.১",
              title: "Balanced Diet Plans and Junk Food Hazards",
              titleBangla: "২.১ সুষম খাদ্য তালিকা প্রস্তুত ও ফাস্টফুডের ক্ষতিকর প্রভাব",
              summary: "আমিষ, শর্করা, চর্বি, ভিটামিন ও খনিজ লবণের সুষম অনুপাত ও স্থূলতা প্রতিরোধ।",
              keywords: ["সুষম খাদ্য", "পুষ্টি", "ফাস্টফুড", "স্থূলতা"]
            },
            {
              id: "c8-hlt-ch2-l2",
              point: "২.২",
              title: "Infectious Diseases and Immunity Boosting Habits",
              titleBangla: "২.২ সংক্রামক ব্যাধি ও রোগ প্রতিরোধ ক্ষমতা বৃদ্ধির উপায়",
              summary: "ডেঙ্গু, টাইফয়েড, পানিবাহিত রোগের সংক্রমণ রোধ ও নিরাপদ সুপেয় পানির নিশ্চয়তা।",
              keywords: ["সংক্রামক রোগ", "ডেঙ্গু প্রতিরোধ", "রোগ প্রতিরোধ ক্ষমতা", "বিশুদ্ধ পানি"]
            }
          ]
        },
        {
          id: "c8-hlt-ch3",
          chapterNumber: 3,
          title: "Mental Health and Wholesome Relationships",
          titleBangla: "৩য় অধ্যায়: মানসিক চাপ ব্যবস্থাপনা ও ইতিবাচক সম্পর্ক",
          lessons: [
            {
              id: "c8-hlt-ch3-l1",
              point: "৩.১",
              title: "Stress Coping Strategies and Mindfulness",
              titleBangla: "৩.১ মানসিক চাপ হ্রাস ও মনঃসংযোগের (Mindfulness) অনুশীলন",
              summary: "পরীক্ষার উদ্বেগ, গভীর শ্বাসপ্রশ্বাস ও নিয়মিত শারীরিক ব্যায়ামের সুফল।",
              keywords: ["মানসিক চাপ", "মাইন্ডফুলনেস", "উদ্বেগ হ্রাস", "ব্যায়াম"]
            },
            {
              id: "c8-hlt-ch3-l2",
              point: "৩.২",
              title: "Healthy Peer Relationships and Bullying Prevention",
              titleBangla: "৩.২ সহপাঠীদের সাথে হৃদ্যতাপূর্ণ বন্ধন ও বুলিং প্রতিরোধ",
              summary: "সহমর্মিতাপূর্ণ আচরণ, সাইবার বুলিং থেকে নিজেকে ও বন্ধুদের সুরক্ষার পদক্ষেপ।",
              keywords: ["সহমর্মিতা", "বুলিং প্রতিরোধ", "বন্ধুত্ব", "পারস্পরিক শ্রদ্ধা"]
            }
          ]
        },
        {
          id: "c8-hlt-ch4",
          chapterNumber: 4,
          title: "Safeguarding Against Substance and Digital Addiction",
          titleBangla: "৪র্থ অধ্যায়: ক্ষতিকর অভ্যাস ও মাদকাসক্তি থেকে আত্মরক্ষা",
          lessons: [
            {
              id: "c8-hlt-ch4-l1",
              point: "৪.১",
              title: "Hazards of Tobacco, Vaping, and Drugs",
              titleBangla: "৪.১ তামাক, ভ্যাপিং ও মাদকের কুফল এবং 'না' বলার দৃঢ়তা",
              summary: "মাদকদ্রব্যের শারীরিক ও মানসিক ধ্বংসলীলা সম্পর্কে জানা এবং সহপাঠীর প্ররোচনা প্রত্যাখ্যান।",
              keywords: ["মাদক প্রতিরোধ", "তামাক", "ভ্যাপিং", "'না' বলার সাহস"]
            },
            {
              id: "c8-hlt-ch4-l2",
              point: "৪.২",
              title: "Managing Digital Screen Addiction and Healthy Sleep",
              titleBangla: "৪.২ মোবাইল ও গেমের আসক্তি থেকে মুক্তি এবং নিয়মিত ঘুম",
              summary: "স্ক্রিন টাইম কমানো, চোখের যত্ন এবং সুস্থ শারীরিক বৃদ্ধির জন্য দৈনিক ৮ ঘণ্টার ঘুম।",
              keywords: ["স্ক্রিন টাইম", "গেম আসক্তি", "পর্যাপ্ত ঘুম", "শারীরিক সুস্থতা"]
            }
          ]
        },
        {
          id: "c8-hlt-ch5",
          chapterNumber: 5,
          title: "First Aid and Emergency Disaster Preparedness",
          titleBangla: "৫ম অধ্যায়: জরুরি প্রাথমিক চিকিৎসা ও দুর্যোগ প্রস্তুতি",
          lessons: [
            {
              id: "c8-hlt-ch5-l1",
              point: "৫.১",
              title: "Wound Care, Burn Treatment, and CPR Basics",
              titleBangla: "৫.১ ক্ষত, রক্তপাত বন্ধ, পোড়া ক্ষত ও সিপিআর (CPR) পদ্ধতি",
              summary: "ফার্স্ট এইড বক্সের সঠিক ব্যবহার, ব্যান্ডেজ বাঁধার নিয়ম ও শ্বাসরোধে দ্রুত প্রাথমিক চিকিৎসা।",
              keywords: ["ফার্স্ট এইড", "সিপিআর (CPR)", "রক্তপাত বন্ধ", "পোড়া ক্ষত"]
            },
            {
              id: "c8-hlt-ch5-l2",
              point: "৫.২",
              title: "Earthquake, Drowning, and Fire Emergency Protocols",
              titleBangla: "৫.২ ভূমিকম্প, পানিতে ডোবা ও অগ্নিকাণ্ডে উদ্ধার কৌশল",
              summary: "ভূমিকম্পের সময় 'ড্রপ-কভার-হোল্ড', অগ্নিনির্বাপক যন্ত্রের ব্যবহার ও পানিতে ডোবা ব্যক্তির উদ্ধার।",
              keywords: ["ভূমিকম্প", "অগ্নিকাণ্ড", "পানিতে ডোবা", "উদ্ধার কৌশল"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১০. শিল্প ও সংস্কৃতি (Art and Culture)
    // ====================================================
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
          title: "Lines, Forms, and Color Harmony",
          titleBangla: "১ম অধ্যায়: রেখা, রূপ ও রঙের ভুবন",
          lessons: [
            {
              id: "c8-art-ch1-l1",
              point: "১.১",
              title: "Color Theory, Primary, Secondary and Complementary Hues",
              titleBangla: "১.১ বর্ণতত্ত্ব: মৌলিক, গৌণ ও বিপরীত রঙের মেলবন্ধন",
              summary: "কালার হুইলের সাহায্যে উষ্ণ ও শীতল রঙের ভারসাম্যপূর্ণ প্রয়োগে চিত্রকলা সৃষ্টি।",
              keywords: ["বর্ণতত্ত্ব", "কালার হুইল", "মৌলিক রঙ", "চিত্রকলা"]
            },
            {
              id: "c8-art-ch1-l2",
              point: "১.২",
              title: "Perspective, Light, Shade and Still Life Sketching",
              titleBangla: "১.২ পরিপ্রেক্ষিত, আলো-ছায়া ও স্থিরচিত্র (Still Life) অঙ্কন",
              summary: "ত্রিমাত্রিক গভীরতা ও ছায়ার বৈচিত্র্য ফুটিয়ে তুলে প্রাত্যহিক বস্তুর স্কেচ তৈরি।",
              keywords: ["পরিপ্রেক্ষিত", "আলো-ছায়া", "স্কেচ", "স্থিরচিত্র"]
            }
          ]
        },
        {
          id: "c8-art-ch2",
          chapterNumber: 2,
          title: "Traditional Folk Crafts and Terracotta",
          titleBangla: "২য় অধ্যায়: ঐতিহ্যবাহী লোকশিল্প ও কারুকলা",
          lessons: [
            {
              id: "c8-art-ch2-l1",
              point: "২.১",
              title: "Nakshi Kantha Motifs and Folk Embroidery",
              titleBangla: "২.১ নকশিকাঁথার ঐতিহ্যবাহী ফোঁড় ও মোটিফ নকশা",
              summary: "পদ্ম, ময়ূর, নৌকা ও বৃক্ষের লোকজ মোটিফে সুই-সুতার কারুকাজ অনুশীলন।",
              keywords: ["নকশিকাঁথা", "মোটিফ", "লোকশিল্প", "সূচিকর্ম"]
            },
            {
              id: "c8-art-ch2-l2",
              point: "২.২",
              title: "Terracotta Plaques, Pottery and Jute Crafts",
              titleBangla: "২.২ পোড়ামাটির ফলকচিত্র (টেরাকোটা) ও মৃৎশিল্প",
              summary: "কাদামাটি দিয়ে প্রাচীন কান্তজীউ মন্দির বা পাহাড়পুরের অনুকরণে ফলকচিত্র নির্মাণ।",
              keywords: ["টেরাকোটা", "মৃৎশিল্প", "পোড়ামাটি", "কারুকলা"]
            }
          ]
        },
        {
          id: "c8-art-ch3",
          chapterNumber: 3,
          title: "Melodies of Bangladesh and Musical Beats",
          titleBangla: "৩য় অধ্যায়: সঙ্গীতের সুর ও দেশীয় তাল",
          lessons: [
            {
              id: "c8-art-ch3-l1",
              point: "৩.১",
              title: "Patriotic Songs and Songs of Five Great Bards (Pancha Kobi)",
              titleBangla: "৩.১ পঞ্চকবির দেশাত্মবোধক গান ও শুদ্ধ সুর সাধনা",
              summary: "রবীন্দ্রনাথ, নজরুল, দ্বিজেন্দ্রলাল, রজনীকান্ত ও অতুলপ্রসাদের গান গাওয়ার রীতি।",
              keywords: ["পঞ্চকবি", "রবীন্দ্রসঙ্গীত", "নজরুলগীতি", "দেশাত্মবোধক গান"]
            },
            {
              id: "c8-art-ch3-l2",
              point: "৩.২",
              title: "Folk Ballads (Bhatiali, Baul) and Percussion Rhythms (Dadra, Kaharwa)",
              titleBangla: "৩.২ ভাটিয়ালি, বাউল গান ও তবলার তালের পরিচিতি (কাহারবা ও দাদরা)",
              summary: "বাংলার নদ-নদী নির্ভর লোকগান এবং তবলার তালি ও খালি সংবলিত তাল অনুশীলন।",
              keywords: ["ভাটিয়ালি", "বাউল গান", "কাহারবা", "দাদরা তাল"]
            }
          ]
        },
        {
          id: "c8-art-ch4",
          chapterNumber: 4,
          title: "Theatre Arts, Puppetry, and Stage Acting",
          titleBangla: "৪র্থ অধ্যায়: নাট্য ও অভিনয় কলা",
          lessons: [
            {
              id: "c8-art-ch4-l1",
              point: "১.১",
              title: "Puppet Making and Story Presentation",
              titleBangla: "৪.১ পুতুল তৈরি ও নাট্য প্রদর্শন",
              summary: "কাপড় ও পাট দিয়ে পুতুল বানানো ও সমাজ সচেতনতামূলক নাট্যাংশ পরিবেশন।",
              keywords: ["পুতুলনাচ", "নাট্য", "দৃশ্যশিল্প", "পুতুল তৈরি"]
            },
            {
              id: "c8-art-ch4-l2",
              point: "৪.২",
              title: "Voice Modulation, Body Expression, and Social Drama",
              titleBangla: "৪.২ স্বর প্রক্ষেপণ, মূকাভিনয় ও পরিবেশ সচেতনতামূলক নাটক",
              summary: "উচ্চারণ স্পষ্টতা, মঞ্চে চরিত্র রূপায়ণ এবং জলবায়ু সচেতনতা নিয়ে নাটক মঞ্চায়ন।",
              keywords: ["মঞ্চনাটক", "মূকাভিনয়", "স্বর প্রক্ষেপণ", "অভিনয়"]
            }
          ]
        },
        {
          id: "c8-art-ch5",
          chapterNumber: 5,
          title: "Festivals, Folk Dances and Cultural Harmony",
          titleBangla: "৫ম অধ্যায়: ঐতিহ্যবাহী উৎসব ও লোকনৃত্য",
          lessons: [
            {
              id: "c8-art-ch5-l1",
              point: "৫.১",
              title: "Folk Dance Mudras (Jhumur, Kathi, and Harvest Dances)",
              titleBangla: "৫.১ লোকনৃত্যের মুদ্রা, পদচালনা ও দলীয় নৃত্য পরিবেশনা",
              summary: "নবান্ন উৎসব ও ঋতুভিত্তিক নৃত্যের মুদ্রা এবং পোশাকের সমন্বয়ে লোকনৃত্য পরিবেশন।",
              keywords: ["লোকনৃত্য", "নৃত্যমুদ্রা", "নবান্ন", "ঝুমুর নৃত্য"]
            },
            {
              id: "c8-art-ch5-l2",
              point: "৫.২",
              title: "Celebrating National Carnivals (Pahela Baishakh, Nabanna)",
              titleBangla: "৫.২ মঙ্গল শোভাযাত্রা ও লোকজ মেলার উপকরণ নির্মাণ",
              summary: "কাগজের মুখোশ, রঙিন পাখা ও চরকি বানিয়ে বিদ্যালয়ের নববর্ষ উৎসব উদযাপন।",
              keywords: ["মঙ্গল শোভাযাত্রা", "পহেলা বৈশাখ", "মুখোশ", "উৎসব"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১১. ইসলাম শিক্ষা ও নৈতিকতা (Islamic Studies and Ethics)
    // ====================================================
    {
      id: "c8-islamic-studies",
      code: "ISL-08",
      name: "Islamic Studies and Ethics",
      nameBangla: "ইসলাম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-emerald-700 to-teal-950",
      chapters: [
        {
          id: "c8-isl-ch1",
          chapterNumber: 1,
          title: "Aqeedah (Core Islamic Beliefs)",
          titleBangla: "১ম অধ্যায়: আকাইদ (ইসলামের মূল বিশ্বাস)",
          lessons: [
            {
              id: "c8-isl-ch1-l1",
              point: "১.১",
              title: "Tawhid, Asmaul Husna, and Sincerity in Faith",
              titleBangla: "১.১ তাওহিদ ও আল্লাহর গুণবাচক নামসমূহের (আসমাউল হুসনা) তাৎপর্য",
              summary: "একত্ববাদের গভীর বিশ্বাস এবং আল্লাহর দয়াময় ও ন্যায়পরায়ণ গুণাবলিতে জীবন গঠন।",
              keywords: ["তাওহিদ", "আসমাউল হুসনা", "আল্লাহর গুণ", "একত্ববাদ"]
            },
            {
              id: "c8-isl-ch1-l2",
              point: "১.২",
              title: "Risalat, Prophetic Guidance and Khatamun Nabiyyin",
              titleBangla: "১.২ রিসালাতের প্রয়োজনীয়তা ও খাতামুন্নাবিয়্যীনের মর্যাদা",
              summary: "নবী-রাসূলগণের প্রেরণের উদ্দেশ্য এবং হযরত মুহাম্মদ (সা.)-এর সর্বশেষ নবী হওয়ার প্রমাণ।",
              keywords: ["রিসালাত", "খাতামুন্নাবিয়্যীন", "নবী-রাসূল", "হেদায়াত"]
            },
            {
              id: "c8-isl-ch1-l3",
              point: "১.৩",
              title: "Akhirah, Resurrecting Accountability, Heaven and Hell",
              titleBangla: "১.৩ আখিরাত, কিয়ামত, হাশর ও জান্নাত-জাহান্নামের বিশ্বাস",
              summary: "পরকালে প্রতিটি কর্মের জবাবদিহিতার বিশ্বাস কীভাবে মানুষের পার্থিব চরিত্র শুদ্ধ রাখে।",
              keywords: ["আখিরাত", "কিয়ামত", "হাশর", "জবাবদিহিতা"]
            },
            {
              id: "c8-isl-ch1-l4",
              point: "১.৪",
              title: "Kufr, Shirk and Nifaq: Evils and Prevention",
              titleBangla: "১.৪ কুফর, শিরক ও নিফাকের ভয়াবহতা থেকে আত্মরক্ষা",
              summary: "আল্লাহর সাথে কাউকে শরিক না করা এবং কপটতার লক্ষণ বর্জন করে ঈমান অটুট রাখা।",
              keywords: ["শিরক", "কুফর", "নিফাক", "ঈমান রক্ষা"]
            }
          ]
        },
        {
          id: "c8-isl-ch2",
          chapterNumber: 2,
          title: "Ibadah (Worship and Devotion)",
          titleBangla: "২য় অধ্যায়: ইবাদত (বন্দেগি ও আনুগত্য)",
          lessons: [
            {
              id: "c8-isl-ch2-l1",
              point: "২.১",
              title: "Taharah (Purification), Wudu, Ghusl, and Tayammum",
              titleBangla: "২.১ তাহারাত বা পবিত্রতা: অজু, গোসল ও তায়াম্মুমের বিধিবিধান",
              summary: "দৈহিক ও আত্মিক পবিত্রতার সঠিক নিয়মাবলি এবং পরিচ্ছন্ন জীবনের প্রভাব।",
              keywords: ["তাহারাত", "পবিত্রতা", "অজু", "গোসল", "তায়াম্মুম"]
            },
            {
              id: "c8-isl-ch2-l2",
              point: "২.২",
              title: "Salat in Congregation, Jumu'ah, and Eid Prayers",
              titleBangla: "২.২ সালাতের গুরুত্ব, জামায়াতের ফজিলত, জুমা ও ঈদের নামাজ",
              summary: "নিয়মিত নামাজ আদায়, সামাজিক ঐক্য ও ভ্রাতৃত্ব প্রতিষ্ঠায় জামায়াতের অবদান।",
              keywords: ["সালাত", "জামায়াত", "জুমা", "ঈদের নামাজ"]
            },
            {
              id: "c8-isl-ch2-l3",
              point: "২.৩",
              title: "Sawm (Fasting), Spiritual Restraint and Empathy",
              titleBangla: "২.৩ সাওম (রোজা): তাকওয়া অর্জন ও সহমর্মিতার শিক্ষা",
              summary: "রমজানের সিয়াম সাধনা, ক্ষুধা-তৃষ্ণার অনুভূতির মাধ্যমে অসহায়দের কষ্ট অনুধাবন।",
              keywords: ["সাওম", "রোজা", "তাকওয়া", "সহমর্মিতা"]
            },
            {
              id: "c8-isl-ch2-l4",
              point: "২.৪",
              title: "Zakat and Hajj: Economic Justice and Global Unity",
              titleBangla: "২.৪ জাকাত ও হজ: অর্থনৈতিক বৈষম্য দূরীকরণ ও বৈশ্বিক ভ্রাতৃত্ব",
              summary: "নিসাব পরিমাণ সম্পদের জাকাত বণ্টন এবং বিশ্ব মুসলিমের মিলনোৎসব হজের শিক্ষা।",
              keywords: ["জাকাত", "হজ", "নিসাব", "অর্থনৈতিক ন্যায়বিচার"]
            }
          ]
        },
        {
          id: "c8-isl-ch3",
          chapterNumber: 3,
          title: "Quran and Hadith Studies",
          titleBangla: "৩য় অধ্যায়: কুরআন ও হাদিস শিক্ষা",
          lessons: [
            {
              id: "c8-isl-ch3-l1",
              point: "১.১",
              title: "Tajweed and Select Surahs",
              titleBangla: "৩.১ তাজবিদসহ নির্বাচিত সূরা ও হাদিসের শিক্ষা",
              summary: "সহিহ উচ্চারণ ও হাদিসে বর্ণিত নৈতিক মূল্যবোধ বাস্তবায়ন।",
              keywords: ["কুরআন", "তাজবিদ", "হাদিস", "নৈতিকতা"]
            },
            {
              id: "c8-isl-ch3-l2",
              point: "৩.২",
              title: "Surah Al-Inshirah and Surah At-Tin: Translation and Lessons",
              titleBangla: "৩.২ সূরা আল-ইনশিরাহ ও সূরা আত-তীন-এর অর্থ ও মূলশিক্ষা",
              summary: "কষ্টের পরে স্বস্তি লাভ এবং উত্তম অবয়বে মানুষের সৃষ্টির মর্যাদা ও নৈতিক অবনতি রোধ।",
              keywords: ["সূরা আল-ইনশিরাহ", "সূরা আত-তীন", "কুরআনের বাণী", "অনুবাদ"]
            },
            {
              id: "c8-isl-ch3-l3",
              point: "৩.৩",
              title: "Selected Moral Hadiths on Sincerity, Neighbor Rights and Labor",
              titleBangla: "৩.৩ নিয়ত, প্রতিবেশীর হক ও শ্রমিকের ঘাম শুকানোর আগে পারিশ্রমিক সংক্রান্ত হাদিস",
              summary: "রাসূলুল্লাহ (সা.)-এর নির্বাচিত হাদিস পর্যালোচনা এবং দৈনন্দিন জীবনে তা মেনে চলা।",
              keywords: ["হাদিস", "প্রতিবেশীর হক", "শ্রমিকের অধিকার", "নিয়ত"]
            }
          ]
        },
        {
          id: "c8-isl-ch4",
          chapterNumber: 4,
          title: "Akhlaq (Moral Excellence and Character)",
          titleBangla: "৪র্থ অধ্যায়: আখলাক ও চরিত্র গঠন",
          lessons: [
            {
              id: "c8-isl-ch4-l1",
              point: "৪.১",
              title: "Virtues of Akhlaq-e-Hamidah (Honesty, Patience, Promise Keeping)",
              titleBangla: "৪.১ আখলাকে হামীদাহ: সততা, ধৈর্য, ওয়াদা পালন ও ক্ষমা",
              summary: "সত্যবাদিতার আলোয় আলোকিত হওয়া এবং প্রতিকূল পরিস্থিতিতে ধৈর্য ধারণ করা।",
              keywords: ["আখলাকে হামীদাহ", "সততা", "ধৈর্য", "ওয়াদা পালন"]
            },
            {
              id: "c8-isl-ch4-l2",
              point: "৪.২",
              title: "Dutifulness to Parents, Teachers, and Elder Respect",
              titleBangla: "৪.২ পিতা-মাতা, শিক্ষক ও বয়োজ্যেষ্ঠদের প্রতি দায়িত্ব ও সেবা",
              summary: "পিতা-মাতার খেদমত, শিক্ষকের সম্মান এবং ছোটদের প্রতি স্নেহপূর্ণ আচরণের অপরিহার্যতা।",
              keywords: ["পিতা-মাতা", "শিক্ষকের মর্যাদা", "স্নেহ", "শ্রদ্ধাবোধ"]
            },
            {
              id: "c8-isl-ch4-l3",
              point: "৪.৩",
              title: "Shunning Akhlaq-e-Zamimah (Arrogance, Backbiting, Wastage)",
              titleBangla: "৪.৩ আখলাকে যামীমাহ বর্জন: অহংকার, গিবত, মিথ্যাচার ও অপচয় পরিহার",
              summary: "পরনিন্দা ও অপচয়ের সামাজিক ধ্বংসলীলা অনুধাবন এবং অমায়িক বিনম্র স্বভাব গঠন।",
              keywords: ["আখলাকে যামীমাহ", "গিবত", "অহংকার", "অপচয় বর্জন"]
            }
          ]
        },
        {
          id: "c8-isl-ch5",
          chapterNumber: 5,
          title: "Exemplary Lives of the Prophet and Caliphs",
          titleBangla: "৫ম অধ্যায়: আদর্শ জীবনচরিত",
          lessons: [
            {
              id: "c8-isl-ch5-l1",
              point: "৫.১",
              title: "Treaty of Hudaybiyyah and Conquest of Makkah",
              titleBangla: "৫.১ হুদাইবিয়ার সন্ধি ও ঐতিহাসিক রক্তপাতহীন মক্কা বিজয়",
              summary: "হযরত মুহাম্মদ (সা.)-এর দূরদর্শী কূটনীতি ও চরম শত্রুদের প্রতি নজিরবিহীন সাধারণ ক্ষমা।",
              keywords: ["হুদাইবিয়ার সন্ধি", "মক্কা বিজয়", "সাধারণ ক্ষমা", "মহানবী (সা.)"]
            },
            {
              id: "c8-isl-ch5-l2",
              point: "৫.২",
              title: "Life and Governance of Caliph Umar (R.) and Ali (R.)",
              titleBangla: "৫.২ হযরত উমর (রা.)-এর ইনসাফ ও হযরত আলী (রা.)-এর বীরত্ব ও প্রজ্ঞা",
              summary: "ন্যায়বিচার প্রতিষ্ঠা, প্রজাবাৎসল্য এবং ইলমের ক্ষেত্রে খোলাফায়ে রাশেদীনের শাসনব্যবস্থা।",
              keywords: ["হযরত উমর (রা.)", "হযরত আলী (রা.)", "ইনসাফ", "খোলাফায়ে রাশেদীন"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১২. হিন্দুধর্ম শিক্ষা ও নৈতিকতা (Hindu Religious Studies and Ethics)
    // ====================================================
    {
      id: "c8-hindu-studies",
      code: "HND-08",
      name: "Hindu Religious Studies and Ethics",
      nameBangla: "হিন্দুধর্ম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-amber-700 to-rose-900",
      chapters: [
        {
          id: "c8-hnd-ch1",
          chapterNumber: 1,
          title: "God and the Cosmogony of Creation",
          titleBangla: "১ম অধ্যায়: স্রষ্টা ও সৃষ্টিতত্ত্ব",
          lessons: [
            {
              id: "c8-hnd-ch1-l1",
              point: "১.১",
              title: "Nature of Brahman, Ishvara, and Jivatma",
              titleBangla: "১.১ ব্রহ্ম, ঈশ্বর ও জীবাত্মার স্বরূপ",
              summary: "একমেবাদ্বিতীয়ম্ ব্রহ্মের রূপ, সর্বভূতে ঈশ্বরের জীবাত্মা রূপে অবস্থান ও অহিংসা।",
              keywords: ["ব্রহ্ম", "ঈশ্বর", "জীবাত্মা", "সর্বভূতে ঈশ্বর"]
            },
            {
              id: "c8-hnd-ch1-l2",
              point: "১.২",
              title: "Cosmic Cycles, Karma and Reincarnation (Punarjanma)",
              titleBangla: "১.২ সৃষ্টিচক্র, কর্মবাদ ও জন্মান্তরবাদ",
              summary: "শুভ কর্মের শুভ ফল ও অশুভ কর্মের শাস্তি; কর্মের মাধ্যমে আত্মার মুক্তিলাভের পথ।",
              keywords: ["কর্মবাদ", "জন্মান্তরবাদ", "মোক্ষ", "সৃষ্টিচক্র"]
            }
          ]
        },
        {
          id: "c8-hnd-ch2",
          chapterNumber: 2,
          title: "Sacred Scriptures: Veda, Upanishads, and the Gita",
          titleBangla: "২য় অধ্যায়: ধর্মগ্রন্থ: বেদ, উপনিষদ ও শ্রীমদ্ভগবদ্গীতা",
          lessons: [
            {
              id: "c8-hnd-ch2-l1",
              point: "২.১",
              title: "Vedas (Rig, Sama, Yajur, Atharva) and Upanishadic Wisdom",
              titleBangla: "২.১ চতুর্বেদ ও উপনিষদের মূল দর্শন",
              summary: "বেদোক্ত প্রার্থনা, আধ্যাত্মিক জ্ঞান এবং মানুষের কল্যাণে ঋষিদের শাশ্বত বাণী।",
              keywords: ["বেদ", "উপনিষদ", "ঋগ্বেদ", "আধ্যাত্মিক দর্শন"]
            },
            {
              id: "c8-hnd-ch2-l2",
              point: "২.২",
              title: "Nishkama Karma in Srimad Bhagavad Gita",
              titleBangla: "২.২ শ্রীমদ্ভগবদ্গীতার নিষ্কাম কর্মযোগ ও ভক্তিযোগ",
              summary: "কর্মের ফলের প্রতি আসক্তি ত্যাগ করে কর্তব্যে অবিচল থাকার মহান উপদেশ।",
              keywords: ["শ্রীমদ্ভগবদ্গীতা", "নিষ্কাম কর্মযোগ", "ভক্তিযোগ", "শ্রীকৃষ্ণ"]
            }
          ]
        },
        {
          id: "c8-hnd-ch3",
          chapterNumber: 3,
          title: "Deities, Pujas, and Spiritual Symbolism",
          titleBangla: "৩য় অধ্যায়: দেব-দেবী ও উপাসনা পদ্ধতি",
          lessons: [
            {
              id: "c8-hnd-ch3-l1",
              point: "৩.১",
              title: "Significance of Durga Puja, Saraswati and Shiva",
              titleBangla: "৩.১ দেবী দুর্গা, সরস্বতী ও শিবের রূপ ও আধ্যাত্মিক তাৎপর্য",
              summary: "শক্তি, জ্ঞান ও ত্যাগের প্রতীক হিসেবে দেবতাদের আরাধনা এবং শারদোৎসবের সম্প্রীতি।",
              keywords: ["দুর্গা পূজা", "দেবী সরস্বতী", "ভগবান শিব", "শারদোৎসব"]
            },
            {
              id: "c8-hnd-ch3-l2",
              point: "৩.২",
              title: "Mantras, Meditation, and Aarti Offerings",
              titleBangla: "৩.২ বৈদিক মন্ত্রপাঠ, ধ্যান ও আরতির ভক্তিভাব",
              summary: "গায়ত্রী মন্ত্রের অর্থ ও উচ্চারণ এবং পবিত্র উপাসনায় মনের প্রশান্তি অর্জন।",
              keywords: ["গায়ত্রী মন্ত্র", "ধ্যান", "আরতি", "উপাসনা"]
            }
          ]
        },
        {
          id: "c8-hnd-ch4",
          chapterNumber: 4,
          title: "Moral Virtues and Ancient Samskaras",
          titleBangla: "৪র্থ অধ্যায়: নীতিশিক্ষা ও হিন্দু সংস্কার",
          lessons: [
            {
              id: "c8-hnd-ch4-l1",
              point: "৪.১",
              title: "Ahimsa (Non-violence), Truthfulness, and Compassion",
              titleBangla: "৪.১ অহিংসা, সত্যনিষ্ঠা ও পরোপকারের শিক্ষা",
              summary: "কোনো প্রাণীকে অহেতুক কষ্ট না দেওয়া, সত্যের পথে অটল থাকা এবং নিঃস্বার্থ সেবা।",
              keywords: ["অহিংসা", "সত্যনিষ্ঠা", "পরোপকার", "নৈতিকতা"]
            },
            {
              id: "c8-hnd-ch4-l2",
              point: "৪.২",
              title: "Ten Samskaras (Upanayana, Vivaha, and Antyeshti)",
              titleBangla: "৪.২ প্রাচীন দশসংস্কার: উপনয়ন, বিবাহ ও মানবজীবনের ধাপসমূহ",
              summary: "জীবনকে সুশৃঙ্খল ও পবিত্র রাখার সনাতন ধর্মাচার ও সংস্কারের তাৎপর্য।",
              keywords: ["দশসংস্কার", "উপনয়ন", "সংস্কার", "অনুশাসন"]
            }
          ]
        },
        {
          id: "c8-hnd-ch5",
          chapterNumber: 5,
          title: "Ashtanga Yoga and Mental Serenity",
          titleBangla: "৫ম অধ্যায়: যোগসাধনা ও স্বাস্থ্যবিধি",
          lessons: [
            {
              id: "c8-hnd-ch5-l1",
              point: "৫.১",
              title: "Ashtanga Yoga: Yama, Niyama, Asana, and Pranayama",
              titleBangla: "৫.১ অষ্টাঙ্গ যোগের আটটি অঙ্গ ও প্রাণায়ামের গুরুত্ব",
              summary: "যম, নিয়ম, আসন ও প্রাণায়ামের মাধ্যমে মন ও শরীরকে সুস্থ এবং নিয়ন্ত্রিত রাখার সাধনা।",
              keywords: ["অষ্টাঙ্গ যোগ", "প্রাণায়াম", "আসন", "মানসিক শান্তি"]
            }
          ]
        },
        {
          id: "c8-hnd-ch6",
          chapterNumber: 6,
          title: "Lives of Saints and Great Reformers",
          titleBangla: "৬ষ্ঠ অধ্যায়: মহাপুরুষদের জীবনী ও আদর্শ চরিত্র",
          lessons: [
            {
              id: "c8-hnd-ch6-l1",
              point: "৬.১",
              title: "Sri Ramakrishna and Swami Vivekananda",
              titleBangla: "৬.১ শ্রীশ্রী রামকৃষ্ণ পরমহংসদেব ও স্বামী বিবেকানন্দের মানবসেবা",
              summary: "'যত মত তত পথ' বাণী এবং 'জীবে প্রেম করে যেই জন সেই জন সেবিছে ঈশ্বর' মূলমন্ত্র।",
              keywords: ["রামকৃষ্ণ", "স্বামী বিবেকানন্দ", "যত মত তত পথ", "মানবসেবা"]
            },
            {
              id: "c8-hnd-ch6-l2",
              point: "৬.২",
              title: "Loknath Brahmachari and Sri Chaitanya Mahaprabhu",
              titleBangla: "৬.২ লোকনাথ ব্রহ্মচারী ও শ্রীচৈতন্য মহাপ্রভুর প্রেমদর্শন",
              summary: "অহিংস ভক্তি আন্দোলন, জাতপাতহীন সামাজিক মিলন ও করুণার অনুপম দৃষ্টান্ত।",
              keywords: ["লোকনাথ ব্রহ্মচারী", "শ্রীচৈতন্য", "ভক্তি আন্দোলন", "প্রেমধর্ম"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১৩. খ্রিস্টধর্ম শিক্ষা ও নৈতিকতা (Christian Religious Studies and Ethics)
    // ====================================================
    {
      id: "c8-christian-studies",
      code: "CHR-08",
      name: "Christian Religious Studies and Ethics",
      nameBangla: "খ্রিস্টধর্ম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-blue-700 to-sky-950",
      chapters: [
        {
          id: "c8-chr-ch1",
          chapterNumber: 1,
          title: "God the Creator and the Divine Covenant",
          titleBangla: "১ম অধ্যায়: স্রষ্টা ঈশ্বর ও পরিত্রাণ পরিকল্পনা",
          lessons: [
            {
              id: "c8-chr-ch1-l1",
              point: "১.১",
              title: "God's Infinite Love and the Calling of Abraham",
              titleBangla: "১.১ ঈশ্বরের নিখাদ প্রেম ও অব্রাহামের প্রতি স্বর্গীয় প্রতিজ্ঞা",
              summary: "ঈশ্বরের সৃষ্টি রহস্য, মানুষের প্রতি অসীম মমতা এবং পরিত্রাণের চুক্তি।",
              keywords: ["ঈশ্বর", "অব্রাহাম", "প্রেম", "পরিত্রাণ"]
            },
            {
              id: "c8-chr-ch1-l2",
              point: "১.২",
              title: "Prophetic Messages and Longing for the Messiah",
              titleBangla: "১.২ নবীগণের প্রত্যাদেশ ও মুক্তিদাতা মশীহের আগমন বার্তা",
              summary: "যিশাইয় নবীর বাণী এবং মানবজাতির মুক্তির জন্য ঈশ্বরের প্রতিশ্রুত আশীর্বাদ।",
              keywords: ["নবীগণ", "মশীহ", "প্রত্যাদেশ", "যিশাইয়"]
            }
          ]
        },
        {
          id: "c8-chr-ch2",
          chapterNumber: 2,
          title: "Life, Miracles, and Teachings of Jesus Christ",
          titleBangla: "২য় অধ্যায়: যীশু খ্রীষ্টের জীবন ও শিক্ষা",
          lessons: [
            {
              id: "c8-chr-ch2-l1",
              point: "২.১",
              title: "Sermon on the Mount and the Beatitudes",
              titleBangla: "২.১ পাহাড়ে প্রদত্ত উপদেশ (Sermon on the Mount) ও সুখবার্তা",
              summary: "নম্রতা, শান্তি স্থাপনকারী এবং হৃদয়ে নির্মলদের জন্য স্বর্গরাজ্যের প্রতিশ্রুতি।",
              keywords: ["যীশু খ্রীষ্ট", "পাহাড়ে উপদেশ", "সুখবার্তা", "নম্রতা"]
            },
            {
              id: "c8-chr-ch2-l2",
              point: "২.২",
              title: "Parables of the Good Samaritan and Prodigal Son",
              titleBangla: "২.২ উত্তম শমরীয় ও অপব্যয়ী পুত্রের উপমা",
              summary: "শত্রুভাবাপন্ন ব্যক্তির প্রতিও দয়া প্রদর্শন এবং অনুতপ্তকে পিতার পরম ক্ষমা।",
              keywords: ["উত্তম শমরীয়", "অপব্যয়ী পুত্র", "উপমা", "ক্ষমা"]
            }
          ]
        },
        {
          id: "c8-chr-ch3",
          chapterNumber: 3,
          title: "The Holy Bible and Spiritual Guidance",
          titleBangla: "৩য় অধ্যায়: পবিত্র বাইবেল ও আধ্যাত্মিক পথনির্দেশনা",
          lessons: [
            {
              id: "c8-chr-ch3-l1",
              point: "৩.১",
              title: "Old and New Testaments Structure and Gospels",
              titleBangla: "৩.১ পুরাতন ও নতুন নিয়ম: সুসমাচারসমূহের ঐশী বাণী",
              summary: "মথি, মার্ক, লূক ও যোহনের সুসমাচার এবং ঈশ্বরের জীবন্ত বাণীর পাঠ।",
              keywords: ["পবিত্র বাইবেল", "সুসমাচার", "পুরাতন নিয়ম", "নতুন নিয়ম"]
            },
            {
              id: "c8-chr-ch3-l2",
              point: "৩.২",
              title: "Ten Commandments and the Law of Love",
              titleBangla: "৩.২ দশ আজ্ঞা ও প্রেমের নতুন অনুশাসন",
              summary: "ঈশ্বরকে সমস্ত হৃদয় দিয়ে ভালোবাসা এবং প্রতিবেশীকে নিজের মতো ভালোবাসার বিধান।",
              keywords: ["দশ আজ্ঞা", "প্রেমের অনুশাসন", "প্রতিবেশী প্রেম"]
            }
          ]
        },
        {
          id: "c8-chr-ch4",
          chapterNumber: 4,
          title: "Christian Ethics and Humanitarian Service",
          titleBangla: "৪র্থ অধ্যায়: খ্রিস্টীয় মূল্যবোধ ও সমাজসেবা",
          lessons: [
            {
              id: "c8-chr-ch4-l1",
              point: "৪.১",
              title: "Forgiveness, Peace-Building and Brotherly Fellowship",
              titleBangla: "৪.১ ক্ষমা, শান্তি প্রতিষ্ঠা ও সার্বজনীন ভ্রাতৃত্ববোধ",
              summary: "ক্রুশের ওপর যীশুর ক্ষমার বাণী এবং সমাজে বিরোধ মীমাংসায় শান্তির দূত হওয়া।",
              keywords: ["ক্ষমা", "শান্তি প্রতিষ্ঠা", "ভ্রাতৃত্ববোধ", "ক্রুশের ত্যাগ"]
            },
            {
              id: "c8-chr-ch4-l2",
              point: "৪.২",
              title: "Mother Teresa's Life of Compassion for the Destitute",
              titleBangla: "৪.২ মাদার তেরেসার মানবসেবা ও আর্তের সেবা",
              summary: "কলকাতার ফুটপাতে ও কুষ্ঠরোগীদের মাঝে নিঃস্বার্থ প্রেমের উজ্জ্বল দৃষ্টান্ত।",
              keywords: ["মাদার তেরেসা", "মানবসেবা", "নিঃস্বার্থ প্রেম", "আর্তসেবা"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১৪. বৌদ্ধধর্ম শিক্ষা ও নৈতিকতা (Buddhist Religious Studies and Ethics)
    // ====================================================
    {
      id: "c8-buddhist-studies",
      code: "BUD-08",
      name: "Buddhist Religious Studies and Ethics",
      nameBangla: "বৌদ্ধধর্ম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-yellow-700 to-amber-950",
      chapters: [
        {
          id: "c8-bud-ch1",
          chapterNumber: 1,
          title: "Gautama Buddha: Life and Enlightenment",
          titleBangla: "১ম অধ্যায়: গৌতম বুদ্ধের জীবন ও দর্শন",
          lessons: [
            {
              id: "c8-bud-ch1-l1",
              point: "১.১",
              title: "Siddhartha's Great Renunciation and Bodhi Attainment",
              titleBangla: "১.১ সিদ্ধার্থের মহানিষ্ক্রমণ, বোধিলাভ ও বুদ্ধত্ব প্রাপ্তি",
              summary: "রাজপ্রাসাদের সুখ ত্যাগ করে বোধিবৃক্ষের নিচে ধ্যানের মাধ্যমে পরম সত্য আবিষ্কার।",
              keywords: ["গৌতম বুদ্ধ", "মহানিষ্ক্রমণ", "বোধিলাভ", "ধ্যান"]
            },
            {
              id: "c8-bud-ch1-l2",
              point: "১.২",
              title: "Dhammacakkappavattana Sutta and Mahaparinirvana",
              titleBangla: "১.২ ধর্মচক্র প্রবর্তন সূত্র ও কুশীনগরে মহাপরিনির্বাণ",
              summary: "সারনাথে পঞ্চবর্গীয় শিষ্যদের মাঝে প্রথম ধর্মবাণী প্রচার ও নির্বাণের পথ প্রদর্শন।",
              keywords: ["ধর্মচক্র প্রবর্তন", "সারনাথ", "মহাপরিনির্বাণ", "নির্বাণ"]
            }
          ]
        },
        {
          id: "c8-bud-ch2",
          chapterNumber: 2,
          title: "Four Noble Truths and the Noble Eightfold Path",
          titleBangla: "২য় অধ্যায়: চার আর্যসত্য ও অষ্টাঙ্গিক মার্গ",
          lessons: [
            {
              id: "c8-bud-ch2-l1",
              point: "২.১",
              title: "The Four Noble Truths (Dukkha, Samudaya, Nirodha, Magga)",
              titleBangla: "২.১ চতুরার্য সত্য: দুঃখ, দুঃখের কারণ ও দুঃখ নিরোধ",
              summary: "তৃষ্ণা ও আসক্তিই সকল দুঃখের মূল এবং তৃষ্ণা বিনাশেই চিরমুক্তি বা নির্বাণ।",
              keywords: ["চতুরার্য সত্য", "দুঃখ", "তৃষ্ণা", "নির্বাণ"]
            },
            {
              id: "c8-bud-ch2-l2",
              point: "২.২",
              title: "Noble Eightfold Path (Arya Ashtangika Marga)",
              titleBangla: "২.২ আর্য অষ্টাঙ্গিক মার্গ: প্রজ্ঞা, শীল ও সমাধির সমন্বয়",
              summary: "সম্যক দৃষ্টি, সম্যক বাক্য, সম্যক কর্ম ও সম্যক সমাধির মাধ্যমে মধ্যম পন্থা অবলম্বন।",
              keywords: ["অষ্টাঙ্গিক মার্গ", "শীল", "সমাধি", "প্রজ্ঞা", "মধ্যম পন্থা"]
            }
          ]
        },
        {
          id: "c8-bud-ch3",
          chapterNumber: 3,
          title: "Tripitaka and Buddhist Literature",
          titleBangla: "৩য় অধ্যায়: ত্রিপিটক ও জাতকের নৈতিক গল্প",
          lessons: [
            {
              id: "c8-bud-ch3-l1",
              point: "৩.১",
              title: "Vinaya, Sutta, and Abhidhamma Pitaka",
              titleBangla: "৩.১ ত্রিপিটক: বিনয়, সূত্র ও অভিধর্ম পিটকের নীতিশিক্ষা",
              summary: "সংঘের অনুশাসন, বুদ্ধের উপদেশ সংকলন ও সূক্ষ্ম মনস্তাত্ত্বিক দর্শনের আকর গ্রন্থ।",
              keywords: ["ত্রিপিটক", "বিনয় পিটক", "সূত্র পিটক", "অভিধর্ম পিটক"]
            },
            {
              id: "c8-bud-ch3-l2",
              point: "৩.২",
              title: "Moral Lessons from the Jataka Tales",
              titleBangla: "৩.২ জাতকের কাহিনী ও বুদ্ধের পূর্বজন্মের আত্মত্যাগ",
              summary: "দানশীলতা, ক্ষমা ও বুদ্ধিমত্তার শিক্ষণীয় লোককাহিনীর মাধ্যমে জীবনদর্শন।",
              keywords: ["জাতক", "ত্যাগ", "দানশীলতা", "নীতিকথা"]
            }
          ]
        },
        {
          id: "c8-bud-ch4",
          chapterNumber: 4,
          title: "Pancasila (Five Precepts) and Universal Metta",
          titleBangla: "৪র্থ অধ্যায়: পঞ্চশীল ও সার্বজনীন মৈত্রী সাধনা",
          lessons: [
            {
              id: "c8-bud-ch4-l1",
              point: "৪.১",
              title: "Pancasila: Five Moral Precepts of Daily Life",
              titleBangla: "৪.১ পঞ্চশীল পালন: অহিংসা, অচৌর্য ও সত্যবাদিতা",
              summary: "প্রাণীহত্যা না করা, মিথ্যা না বলা ও মাদকদ্রব্য বর্জন করে শুদ্ধ জীবনাচরণ।",
              keywords: ["পঞ্চশীল", "অহিংসা", "সত্যবাদিতা", "নৈতিক শীল"]
            },
            {
              id: "c8-bud-ch4-l2",
              point: "৪.২",
              title: "Metta Bhavana (Loving-Kindness) and Buddhist Festivals",
              titleBangla: "৪.২ মৈত্রী ভাবনা ও বৌদ্ধ পূর্ণিমার মহোৎসব",
              summary: "'জগতের সকল প্রাণী সুখী হোক' মহামৈত্রী প্রার্থনা ও কঠিন চীবর দান উৎসবের তাৎপর্য।",
              keywords: ["মৈত্রী ভাবনা", "বৌদ্ধ পূর্ণিমা", "কঠিন চীবর দান", "জগতের শান্তি"]
            }
          ]
        }
      ]
    }
  ]
};
