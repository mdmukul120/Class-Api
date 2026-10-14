import { ClassGrade } from '../types';

export const CLASS_7_DATA: ClassGrade = {
  id: "class-7",
  numeric: 7,
  name: "Class 7",
  nameBangla: "৭ম শ্রেণি",
  stage: "Junior Secondary",
  stageBangla: "নিম্ন মাধ্যমিক",
  description: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত সপ্তম শ্রেণির সকল পাঠ্যপুস্তক, পূর্ণাঙ্গ অধ্যায় ও সুনির্দিষ্ট লেসন পয়েন্টের পূর্ণাঙ্গ ডেটাসেট",
  subjects: [
    // ====================================================
    // ১. বাংলা (Bangla)
    // ====================================================
    {
      id: "c7-bangla",
      code: "BAN-07",
      name: "Bangla",
      nameBangla: "বাংলা",
      group: "General",
      coverColor: "from-emerald-600 to-teal-850",
      chapters: [
        {
          id: "c7-ban-ch1",
          chapterNumber: 1,
          title: "Contextual Communication",
          titleBangla: "১ম অধ্যায়: প্রসঙ্গের মধ্য থেকে যোগাযোগ করি",
          lessons: [
            {
              id: "c7-ban-ch1-l1",
              point: "১.১",
              title: "Context and Purpose in Dialogue",
              titleBangla: "১.১ পরিস্থিতি ও প্রসঙ্গের ভিন্নতায় ভাববিনিময়",
              summary: "ব্যক্তি, অবস্থান, বিষয় ও প্রসঙ্গের ওপর নির্ভর করে ভাষা ও বাচনভঙ্গির সঠিক নির্বাচন।",
              keywords: ["প্রসঙ্গ", "যোগাযোগ", "ভাববিনিময়", "পরিস্থিতি"]
            },
            {
              id: "c7-ban-ch1-l2",
              point: "১.২",
              title: "Formal Speeches and Proposals",
              titleBangla: "১.২ প্রাতিষ্ঠানিক আলোচনা ও প্রস্তাবনা উপস্থাপন",
              summary: "বিতর্ক, সেমিনার ও প্রাতিষ্ঠানিক যোগাযোগে সুস্পষ্ট যুক্তি ও শালীন বক্তব্য উপস্থাপন।",
              keywords: ["বক্তব্য", "উপস্থাপনা", "প্রস্তাবনা", "যুক্তি"]
            },
            {
              id: "c7-ban-ch1-l3",
              point: "১.৩",
              title: "Balancing Verbal and Non-verbal Cues",
              titleBangla: "১.৩ বাচনিক ও অবাচনিক যোগাযোগের ভারসাম্য রক্ষা",
              summary: "চোখের ভাষা, শারীরিক অঙ্গভঙ্গি ও কণ্ঠস্বরের দৃঢ়তার সঠিক সমন্বয় সাধন।",
              keywords: ["অবাচনিক", "শারীরিক ভাষা", "ভারসাম্য"]
            },
            {
              id: "c7-ban-ch1-l4",
              point: "১.৪",
              title: "Etiquette and Tolerance in Discussion",
              titleBangla: "১.৪ শিষ্টাচার ও পরমতসহিষ্ণুতার অনুশীলন",
              summary: "ভিন্ন মতের প্রতি শ্রদ্ধা প্রদর্শন ও উগ্র ভাষা বর্জন করে গঠনমূলক আলোচনা পরিচালনা।",
              keywords: ["শিষ্টাচার", "পরমতসহিষ্ণুতা", "শ্রদ্ধাবোধ"]
            }
          ]
        },
        {
          id: "c7-ban-ch2",
          chapterNumber: 2,
          title: "Standard Pronunciation and Sound Shift",
          titleBangla: "২য় অধ্যায়: প্রমিত ভাষা শিখি ও ধ্বনি পরিবর্তন",
          lessons: [
            {
              id: "c7-ban-ch2-l1",
              point: "২.১",
              title: "Intonation and Pitch in Standard Bangla",
              titleBangla: "২.১ প্রমিত উচ্চারণ ও স্বরভঙ্গি (Intonation & Pitch)",
              summary: "প্রশ্নবোধক, বিবৃতিমূলক ও বিস্ময়সূচক বাক্যে স্বরের ওঠানামা নিয়ন্ত্রণ।",
              keywords: ["স্বরভঙ্গি", "পিচ", "উচ্চারণ", "প্রমিত রূপ"]
            },
            {
              id: "c7-ban-ch2-l2",
              point: "২.২",
              title: "Word Stress and Rhythmic Cadence",
              titleBangla: "২.২ বলায় শ্বাসাঘাত (Stress) ও সুরতরঙ্গের ব্যবহার",
              summary: "শব্দের শুরুতে শ্বাসাঘাত দেওয়ার বাংলা ধ্বনিতাত্ত্বিক রীতির বাস্তব প্রয়োগ।",
              keywords: ["শ্বাসাঘাত", "স্ট্রেস", "সুরতরঙ্গ", "ধ্বনিবিজ্ঞান"]
            },
            {
              id: "c7-ban-ch2-l3",
              point: "২.৩",
              title: "Regional Phonetic Shifts to Standard Bangla",
              titleBangla: "২.৩ আঞ্চলিক ধ্বনি পরিবর্তন ও মান প্রমিত রূপে রূপান্তর",
              summary: "আঞ্চলিক ভাষার মহাপ্রাণ ধ্বনি ও নাসিক্য ধ্বনির প্রমিত উচ্চারণে রূপান্তরের ছক।",
              keywords: ["আঞ্চলিক ধ্বনি", "মহাপ্রাণ", "নাসিক্য", "মান প্রমিত"]
            }
          ]
        },
        {
          id: "c7-ban-ch3",
          chapterNumber: 3,
          title: "Reading and Appreciating Poetry and Songs",
          titleBangla: "৩য় অধ্যায়: অর্থ বুঝে কবিতা পড়ি ও গান শুনি",
          lessons: [
            {
              id: "c7-ban-ch3-l1",
              point: "৩.১",
              title: "Poetic Themes, Metaphors and Imagery",
              titleBangla: "৩.১ কবিতার মূলভাব, উপমা ও রূপক অলংকার বিচার",
              summary: "কবিদের দৃষ্টিতে প্রকৃতি, মানবপ্রেম ও দেশাত্মবোধের নান্দনিক চিত্রকল্প অন্বেষণ।",
              keywords: ["কবিতা", "অলংকার", "উপমা", "রূপক", "মূলভাব"]
            },
            {
              id: "c7-ban-ch3-l2",
              point: "৩.২",
              title: "Rhythm Schemes (Matravritta & Aksharvritta)",
              titleBangla: "৩.২ মাত্রাবৃত্ত ও অক্ষরবৃত্ত ছন্দের দোলা অনুধাবন",
              summary: "কবিতার পঙ্‌ক্তি বিশ্লেষণ করে পর্ব ও মাত্রার হিসেব এবং আবৃত্তির কৌশল।",
              keywords: ["ছন্দ", "মাত্রাবৃত্ত", "অক্ষরবৃত্ত", "আবৃত্তি"]
            },
            {
              id: "c7-ban-ch3-l3",
              point: "৩.৩",
              title: "Folk Songs and Lyrics Interpretation",
              titleBangla: "৩.৩ লোকসঙ্গীত ও গানের বাণীর ভাবার্থ বিশ্লেষণ",
              summary: "পল্লীগীতি ও আধুনিক গানের কাব্যময় ভাষার সুর ও অর্থ বিশ্লেষণ।",
              keywords: ["লোকসঙ্গীত", "গানের বাণী", "ভাবার্থ"]
            }
          ]
        },
        {
          id: "c7-ban-ch4",
          chapterNumber: 4,
          title: "Observational Narrative and Interview Writing",
          titleBangla: "৪র্থ অধ্যায়: চারপাশের মানুষের কাজ নিয়ে লিখি",
          lessons: [
            {
              id: "c7-ban-ch4-l1",
              point: "৪.১",
              title: "Interviewing Working People & Documenting",
              titleBangla: "৪.১ শ্রমজীবী মানুষের অভিজ্ঞতা সাক্ষাৎকার ও বিবরণ",
              summary: "প্রশ্নমালা তৈরি করে সাক্ষাৎকার গ্রহণ এবং মানবিক মর্যাদাসহ লিখিত রূপ দেওয়া।",
              keywords: ["সাক্ষাৎকার", "শ্রমজীবী মানুষ", "প্রতিবেদন", "বিবরণ"]
            },
            {
              id: "c7-ban-ch4-l2",
              point: "৪.২",
              title: "Writing Investigative Feature Reports",
              titleBangla: "৪.২ অনুসন্ধানী প্রতিবেদন ও অভিজ্ঞতা বিবরণী প্রণয়ন",
              summary: "ঘটনার তথ্য সংগ্রহ, নিরপেক্ষ দৃষ্টিভঙ্গি এবং কাঠামোবদ্ধ প্রতিবেদন লিখন।",
              keywords: ["প্রতিবেদন", "অনুসন্ধান", "কাঠামোবদ্ধ লিখন"]
            }
          ]
        },
        {
          id: "c7-ban-ch5",
          chapterNumber: 5,
          title: "Imaginative and Creative Writing",
          titleBangla: "৫ম অধ্যায়: কল্পনানির্ভর লেখা ও গল্প রচনা",
          lessons: [
            {
              id: "c7-ban-ch5-l1",
              point: "৫.১",
              title: "Character Arc and Plot Structure in Stories",
              titleBangla: "৫.১ ছোটগল্পের চরিত্র সৃষ্টি এবং কাহিনীর প্লট বিন্যাস",
              summary: "কাহিনীসূত্র, দ্বন্দ্ব ও ক্লাইম্যাক্স অনুধাবন করে নিজস্ব কল্পনানির্ভর গল্প রচনা।",
              keywords: ["ছোটগল্প", "চরিত্র", "ক্লাইম্যাক্স", "প্লট"]
            },
            {
              id: "c7-ban-ch5-l2",
              point: "৫.২",
              title: "Science Fiction and Fantasy Elements",
              titleBangla: "৫.২ কল্পবিজ্ঞান ও রূপকথার উপাদান সন্নিবেশ",
              summary: "বৈজ্ঞানিক ভাবনা ও কল্পনার সংমিশ্রণে সৃজনশীল কল্পকাহিনী সৃষ্টি।",
              keywords: ["কল্পবিজ্ঞান", "রূপকথা", "সৃজনশীলতা"]
            }
          ]
        },
        {
          id: "c7-ban-ch6",
          chapterNumber: 6,
          title: "Appreciating Diverse Literary Forms",
          titleBangla: "৬ষ্ঠ অধ্যায়: সাহিত্য পড়ি ও বিভিন্ন রূপ বুঝি",
          lessons: [
            {
              id: "c7-ban-ch6-l1",
              point: "৬.১",
              title: "Theatrical Dialogues and Script Analysis",
              titleBangla: "৬.১ নাট্য সংলাপ ও মঞ্চায়নের উপযোগিতা বিশ্লেষণ",
              summary: "চরিত্রের মনস্তত্ত্ব অনুযায়ী সংলাপ রচনা ও অভিনয়ের মাধ্যমে ভাবপ্রকাশ।",
              keywords: ["নাটক", "সংলাপ", "অভিনয়", "মঞ্চায়ন"]
            },
            {
              id: "c7-ban-ch6-l2",
              point: "৬.২",
              title: "Essays and Travelogues",
              titleBangla: "৬.২ প্রবন্ধ ও ভ্রমণকাহিনীর বৈশিষ্ট্য ও রসাস্বাদন",
              summary: "তথ্যসমৃদ্ধ রচনা ও ভ্রমণ অভিজ্ঞতার চিত্তাকর্ষক বর্ণনা কৌশল।",
              keywords: ["প্রবন্ধ", "ভ্রমণকাহিনী", "তথ্যনিষ্ঠা"]
            }
          ]
        },
        {
          id: "c7-ban-ch7",
          chapterNumber: 7,
          title: "Grammar, Word Formation and Sentence Structure",
          titleBangla: "৭ম অধ্যায়: ব্যাকরণ ও ভাষা শৈলী",
          lessons: [
            {
              id: "c7-ban-ch7-l1",
              point: "৭.১",
              title: "Prefix, Suffix and Sandhi in Bangla",
              titleBangla: "৭.১ উপসর্গ, অনুসর্গ ও সন্ধির সাহায্যে নতুন শব্দ গঠন",
              summary: "শব্দের আগে উপসর্গ ও পরে প্রত্যয় যুক্ত করে নতুন অর্থবোধক শব্দ সৃষ্টির নিয়ম।",
              keywords: ["উপসর্গ", "অনুসর্গ", "সন্ধি", "শব্দ গঠন"]
            },
            {
              id: "c7-ban-ch7-l2",
              point: "৭.২",
              title: "Connectors, Modifiers and Interjections",
              titleBangla: "৭.২ যোজক, আবেগ শব্দ ও বাক্যের রূপান্তর",
              summary: "সরল, জটিল ও যৌগিক বাক্যে যোজকের ভূমিকা এবং আবেগ সূচক অভিব্যক্তির প্রয়োগ।",
              keywords: ["যোজক", "আবেগ শব্দ", "বাক্য রূপান্তর"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ২. ইংরেজি (English)
    // ====================================================
    {
      id: "c7-english",
      code: "ENG-07",
      name: "English",
      nameBangla: "ইংরেজি",
      group: "General",
      coverColor: "from-blue-600 to-indigo-850",
      chapters: [
        {
          id: "c7-eng-exp1",
          chapterNumber: 1,
          title: "A Dream School",
          titleBangla: "Experience 1: A Dream School (স্বপ্নের বিদ্যালয়)",
          lessons: [
            {
              id: "c7-eng-exp1-l1",
              point: "1.1",
              title: "Describing Surroundings and Spatial Prepositions",
              titleBangla: "১.১ বিদ্যালয়ের বিভিন্ন সুযোগ-সুবিধা ও অবস্থান বর্ণনা",
              summary: "Using adjectives and prepositions of place (in front of, behind, beside) to depict school facilities.",
              keywords: ["dream school", "description", "adjectives", "prepositions"]
            },
            {
              id: "c7-eng-exp1-l2",
              point: "1.2",
              title: "Collaborative Poster on an Ideal School",
              titleBangla: "১.২ আদর্শ বিদ্যালয়ের রূপরেখা নিয়ে দলগত পোস্টার তৈরি",
              summary: "Presenting recommendations for a green, friendly, and inclusive school campus.",
              keywords: ["poster", "presentation", "ideal school", "teamwork"]
            }
          ]
        },
        {
          id: "c7-eng-exp2",
          chapterNumber: 2,
          title: "Playing with Words",
          titleBangla: "Experience 2: Playing with Words (শব্দ নিয়ে খেলা ও মরফোলজি)",
          lessons: [
            {
              id: "c7-eng-exp2-l1",
              point: "2.1",
              title: "Affixes: Prefixes and Suffixes Exploration",
              titleBangla: "২.১ প্রিফিক্স (Prefix), সাফিক্স (Suffix) ও রুট ওয়ার্ড",
              summary: "Forming antonyms (un-, dis-, im-) and noun/adjective forms (-ful, -less, -tion).",
              keywords: ["affixes", "prefix", "suffix", "root words"]
            },
            {
              id: "c7-eng-exp2-l2",
              point: "2.2",
              title: "Word Puzzles and Vocabulary Building",
              titleBangla: "২.২ ক্রসওয়ার্ড পাজল ও নতুন শব্দভাণ্ডার সমৃদ্ধকরণ",
              summary: "Solving contextual puzzles and building custom word-trees for creative writing.",
              keywords: ["vocabulary", "crossword", "word play", "spelling"]
            }
          ]
        },
        {
          id: "c7-eng-exp3",
          chapterNumber: 3,
          title: "If (Poem)",
          titleBangla: "Experience 3: If (কবিতা ও চারিত্রিক দৃঢ়তা)",
          lessons: [
            {
              id: "c7-eng-exp3-l1",
              point: "3.1",
              title: "Moral Guidance and Stoicism in Kipling's Poem",
              titleBangla: "৩.১ আত্মবিশ্বাস ও চারিত্রিক দৃঢ়তার শিক্ষা",
              summary: "Comprehending conditional clauses ('If you can keep your head...') and moral virtues.",
              keywords: ["If", "Kipling", "poetry", "character", "virtue"]
            }
          ]
        },
        {
          id: "c7-eng-exp4",
          chapterNumber: 4,
          title: "The Good Reader",
          titleBangla: "Experience 4: The Good Reader (দক্ষ পাঠক ও পঠনকৌশল)",
          lessons: [
            {
              id: "c7-eng-exp4-l1",
              point: "4.1",
              title: "Reading Strategies: Skimming, Scanning and Predicting",
              titleBangla: "৪.১ দ্রুত পঠন (Skimming), তথ্য সন্ধান (Scanning) ও অনুমান",
              summary: "Techniques for finding specific details, dates, and names from complex informative essays.",
              keywords: ["reading strategies", "skimming", "scanning", "comprehension"]
            }
          ]
        },
        {
          id: "c7-eng-exp5",
          chapterNumber: 5,
          title: "Knowing Our Parents",
          titleBangla: "Experience 5: Knowing Our Parents (পিতা-মাতার অবদান ও স্মৃতিচারণ)",
          lessons: [
            {
              id: "c7-eng-exp5-l1",
              point: "5.1",
              title: "Biographical Details and Expressing Gratitude",
              titleBangla: "৫.১ বাবা-মায়ের জীবনসংগ্রাম ও কৃতজ্ঞতা প্রকাশ রচনা",
              summary: "Writing structured descriptive paragraphs highlighting parents' sacrifices and advice.",
              keywords: ["parents", "biography", "gratitude", "paragraph writing"]
            }
          ]
        },
        {
          id: "c7-eng-exp6",
          chapterNumber: 6,
          title: "A Good Citizen",
          titleBangla: "Experience 6: A Good Citizen (সুনাগরিকের গুণাবলী)",
          lessons: [
            {
              id: "c7-eng-exp6-l1",
              point: "6.1",
              title: "Civic Responsibilities and Traffic Rules",
              titleBangla: "৬.১ নাগরিক দায়িত্ব, ট্রাফিক নিয়ম ও সমাজসেবা",
              summary: "Discussing zebra crossings, waste recycling, helping the elderly, and civic duties.",
              keywords: ["good citizen", "traffic rules", "civic duty", "responsibility"]
            }
          ]
        },
        {
          id: "c7-eng-exp7",
          chapterNumber: 7,
          title: "Heroes of the Liberation War",
          titleBangla: "Experience 7: Heroes of the Liberation War (বীর মুক্তিযোদ্ধাদের গৌরবগাথা)",
          lessons: [
            {
              id: "c7-eng-exp7-l1",
              point: "7.1",
              title: "Tales of Bir Sreshtho and Freedom Fighters",
              titleBangla: "৭.১ বীরশ্রেষ্ঠদের আত্মত্যাগ ও বীরত্বগাথা পাঠ",
              summary: "Comprehending heroic military events of 1971 and writing personal eulogies in English.",
              keywords: ["Liberation War", "Bir Sreshtho", "freedom fighters", "1971"]
            }
          ]
        },
        {
          id: "c7-eng-exp8",
          chapterNumber: 8,
          title: "Heroes of Peace",
          titleBangla: "Experience 8: Heroes of Peace (শান্তির অগ্রদূতগণ)",
          lessons: [
            {
              id: "c7-eng-exp8-l1",
              point: "8.1",
              title: "Global Peacemakers and Human Rights",
              titleBangla: "৮.১ বিশ্ব শান্তির প্রতীক ও মানবাধিকার সংগ্রামী ব্যক্তিত্ব",
              summary: "Reading inspiring biographies of Nelson Mandela, Mother Teresa, and Begum Rokeya.",
              keywords: ["peace", "heroes", "Mandela", "Mother Teresa", "human rights"]
            }
          ]
        },
        {
          id: "c7-eng-exp9",
          chapterNumber: 9,
          title: "Knowing Our Friends",
          titleBangla: "Experience 9: Knowing Our Friends (বন্ধুত্ব ও পারস্পরিক সহমর্মিতা)",
          lessons: [
            {
              id: "c7-eng-exp9-l1",
              point: "9.1",
              title: "Empathy, Friendship and Overcoming Differences",
              titleBangla: "৯.১ সত্যিকারের বন্ধুত্ব ও ভিন্নতাকে সাদরে গ্রহণ",
              summary: "Describing qualities of a loyal friend and active listening skills in conversations.",
              keywords: ["friendship", "empathy", "loyalty", "conversation"]
            }
          ]
        },
        {
          id: "c7-eng-exp10",
          chapterNumber: 10,
          title: "Freedom of Speech",
          titleBangla: "Experience 10: Freedom of Speech (বাকস্বাধীনতা ও গঠনমূলক যুক্তি)",
          lessons: [
            {
              id: "c7-eng-exp10-l1",
              point: "10.1",
              title: "Articulating Arguments Respectfully and Debating",
              titleBangla: "১০.১ যুক্তিপূর্ণ বিতর্ক ও শিষ্টাচারসম্মত মতামত প্রকাশ",
              summary: "Constructing persuasive claims, evidence, and rebuttals without personal insults.",
              keywords: ["freedom of speech", "debate", "arguments", "opinions"]
            }
          ]
        },
        {
          id: "c7-eng-exp11",
          chapterNumber: 11,
          title: "Let's Explore the Universe",
          titleBangla: "Experience 11: Let's Explore the Universe (মহাবিশ্বের মহাবিস্ময়)",
          lessons: [
            {
              id: "c7-eng-exp11-l1",
              point: "11.1",
              title: "Planets, Galaxies and Space Missions",
              titleBangla: "১১.১ সৌরজগতের গ্রহ, ছায়াপথ ও মহাকাশ গবেষণা",
              summary: "Using scientific vocabulary and comparative adjectives to contrast planets.",
              keywords: ["universe", "space", "planets", "solar system", "science"]
            }
          ]
        },
        {
          id: "c7-eng-exp12",
          chapterNumber: 12,
          title: "Subha (Short Story)",
          titleBangla: "Experience 12: Subha (রবীন্দ্রনাথ ঠাকুরের ছোটগল্প 'সুভা')",
          lessons: [
            {
              id: "c7-eng-exp12-l1",
              point: "12.1",
              title: "Empathy for Differently-abled Individuals",
              titleBangla: "১২.১ বিশেষ চাহিদাসম্পন্ন শিশুদের প্রতি মমত্ববোধ ও মানবিকতা",
              summary: "Analyzing Tagore's poignant narrative about a speech-impaired rural girl.",
              keywords: ["Subha", "Tagore", "short story", "empathy", "inclusion"]
            }
          ]
        },
        {
          id: "c7-eng-exp13",
          chapterNumber: 13,
          title: "My Books (Poem)",
          titleBangla: "Experience 13: My Books (বই পড়ার আনন্দ ও কবিতা)",
          lessons: [
            {
              id: "c7-eng-exp13-l1",
              point: "13.1",
              title: "The Joy of Reading and Literary Exploration",
              titleBangla: "১৩.১ গ্রন্থপ্রেম ও কল্পনাজগতের বিস্তৃতি",
              summary: "Appreciating rhythmic rhyming schemes and poetic imagery in praise of books.",
              keywords: ["books", "reading", "rhyme", "imagination", "literature"]
            }
          ]
        },
        {
          id: "c7-eng-exp14",
          chapterNumber: 14,
          title: "As You Like It",
          titleBangla: "Experience 14: As You Like It (শেক্সপিয়রের নাট্য রূপান্তর)",
          lessons: [
            {
              id: "c7-eng-exp14-l1",
              point: "14.1",
              title: "Stage Dialogues, Forest of Arden and Dramatic Comedy",
              titleBangla: "১৪.১ আর্ডেনের বন, নাট্য চরিত্র ও কমেডি সংলাপ",
              summary: "Adapting classical Shakespearean drama into modern communicative English.",
              keywords: ["Shakespeare", "As You Like It", "drama", "dialogue", "theatre"]
            }
          ]
        },
        {
          id: "c7-eng-exp15",
          chapterNumber: 15,
          title: "Save Our Earth",
          titleBangla: "Experience 15: Save Our Earth (পরিবেশ সুরক্ষা ও জলবায়ু সচেতনতা)",
          lessons: [
            {
              id: "c7-eng-exp15-l1",
              point: "15.1",
              title: "Climate Change, Plastic Pollution and Action Plans",
              titleBangla: "১৫.১ বৈশ্বিক উষ্ণায়ন ও প্লাস্টিক দূষণ রোধে করণীয়",
              summary: "Drafting awareness slogans, letters to editors, and environmental action pledges.",
              keywords: ["environment", "climate change", "pollution", "save earth"]
            }
          ]
        },
        {
          id: "c7-eng-exp16",
          chapterNumber: 16,
          title: "Father of the Nation",
          titleBangla: "Experience 16: Father of the Nation (জাতির পিতা বঙ্গবন্ধু)",
          lessons: [
            {
              id: "c7-eng-exp16-l1",
              point: "16.1",
              title: "Bangabandhu's Vision, Historic 7th March Speech and Legacy",
              titleBangla: "১৬.১ বঙ্গবন্ধুর নেতৃত্ব, ৭ই মার্চের ঐতিহাসিক ভাষণ ও আত্মত্যাগ",
              summary: "Writing reflective essays on Bangabandhu Sheikh Mujibur Rahman's life and national struggle.",
              keywords: ["Father of the Nation", "Bangabandhu", "7th March Speech", "history"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৩. গণিত (Mathematics)
    // ====================================================
    {
      id: "c7-math",
      code: "MATH-07",
      name: "Mathematics",
      nameBangla: "গণিত",
      group: "General",
      coverColor: "from-amber-600 to-orange-850",
      chapters: [
        {
          id: "c7-math-ch1",
          chapterNumber: 1,
          title: "Story of Exponents",
          titleBangla: "১ম অধ্যায়: সূচকের গল্প",
          lessons: [
            {
              id: "c7-math-ch1-l1",
              point: "১.১",
              title: "Concept of Base and Exponent via Paper Folding",
              titleBangla: "১.১ কাগজ ভাঁজের খেলায় ভিত্তি ও সূচকের বিস্তার",
              summary: "কাগজ ১ বার ভাঁজ করলে ২টি, ২ বার ভাঁজে ৪টি, n বার ভাঁজে ২^n ঘর সৃষ্টির বাস্তব প্রমাণ।",
              keywords: ["সূচক", "ভিত্তি", "কাগজ ভাঁজ", "ঘাত"]
            },
            {
              id: "c7-math-ch1-l2",
              point: "১.২",
              title: "Product and Quotient Rules of Exponents",
              titleBangla: "১.২ সূচকের গুণ ও ভাগ বিধি (a^m × a^n = a^(m+n))",
              summary: "একই ভিত্তির সূচকীয় রাশির গুণের ক্ষেত্রে সূচক যোগ এবং ভাগের ক্ষেত্রে বিয়োগ।",
              keywords: ["সূচকের গুণ", "সূচকের ভাগ", "বীজগণিতীয় নিয়ম"]
            },
            {
              id: "c7-math-ch1-l3",
              point: "১.৩",
              title: "Zero Exponent (a^0 = 1) and Negative Powers",
              titleBangla: "১.৩ শূন্য সূচক (a^0 = 1) ও ঋণাত্মক সূচকের তাৎপর্য",
              summary: "কেন যেকোনো অশূন্য সংখ্যার সূচক শূন্য হলে মান ১ হয় এবং a^(-n) = 1/(a^n) এর ব্যাখ্যা।",
              keywords: ["শূন্য সূচক", "ঋণাত্মক সূচক", "প্রমাণ"]
            }
          ]
        },
        {
          id: "c7-math-ch2",
          chapterNumber: 2,
          title: "Factors of Unknown Quantities",
          titleBangla: "২য় অধ্যায়: অজানা রাশির উৎপাদক, গ.সা.গু. ও ল.সা.গু.",
          lessons: [
            {
              id: "c7-math-ch2-l1",
              point: "২.১",
              title: "Paper Cutting Geometric Factorization",
              titleBangla: "২.১ কাগজ কেটে বীজগণিতীয় রাশির উৎপাদক নির্ণয়",
              summary: "আয়তাকার ও বর্গাকার রঙিন কাগজ মিলিয়ে x² + 5x + 6 = (x+2)(x+3) জ্যামিতিক রূপদান।",
              keywords: ["উৎপাদক", "কাগজ কাটা", "জ্যামিতিক রূপ", "বীজগণিত"]
            },
            {
              id: "c7-math-ch2-l2",
              point: "২.২",
              title: "HCF (GCD) and LCM of Algebraic Expressions",
              titleBangla: "২.২ বীজগণিতীয় রাশির সাধারণ উৎপাদক, গ.সা.গু. ও ল.সা.গু.",
              summary: "সংখ্যার সাধারণ গুণনীয়কের সাথে চলকযুক্ত রাশির গ.সা.গু. ও ল.সা.গু. সমাধান।",
              keywords: ["গসাগু", "লসাগু", "বীজগণিতীয় রাশি"]
            }
          ]
        },
        {
          id: "c7-math-ch3",
          chapterNumber: 3,
          title: "Ratio and Proportion",
          titleBangla: "৩য় অধ্যায়: অনুপাত ও সমানুপাত",
          lessons: [
            {
              id: "c7-math-ch3-l1",
              point: "৩.১",
              title: "Equivalent, Compound and Multi-term Ratios",
              titleBangla: "৩.১ সমতুল অনুপাত, বহুরাশিক অনুপাত ও মিশ্র অনুপাত",
              summary: "দুই বা ততোধিক রাশির তুলনা এবং অনুপাতের উভয় রাশিকে একই সংখ্যা দ্বারা গুণ/ভাগ।",
              keywords: ["অনুপাত", "সমতুল অনুপাত", "বহুরাশিক", "মিশ্র অনুপাত"]
            },
            {
              id: "c7-math-ch3-l2",
              point: "৩.২",
              title: "Principles of Proportion and Fourth Proportional",
              titleBangla: "৩.২ সমানুপাত (a:b = c:d) ও চতুর্থ সমানুপাতী নির্ণয়",
              summary: "১ম রাশি × ৪র্থ রাশি = ২য় রাশি × ৩য় রাশি সূত্রের সাহায্যে সমাধান।",
              keywords: ["সমানুপাত", "চতুর্থ সমানুপাতী", "মধ্য সমানুপাতী"]
            },
            {
              id: "c7-math-ch3-l3",
              point: "৩.৩",
              title: "Partnership Business and Mixture Word Problems",
              titleBangla: "৩.৩ বাস্তব জীবনে অংশীদারি কারবার ও মিশ্রণ সমস্যা সমাধান",
              summary: "মূলধনের অনুপাতে ব্যবসায়ের লাভ-ক্ষতি বণ্টন এবং সিরাপ-পানির অনুপাত সমাধান।",
              keywords: ["অংশীদারি কারবার", "মিশ্রণ", "বাস্তব সমস্যা"]
            }
          ]
        },
        {
          id: "c7-math-ch4",
          chapterNumber: 4,
          title: "Geometric Shapes and Angles",
          titleBangla: "৪র্থ অধ্যায়: জ্যামিতিক আকৃতির গল্প ও কোণের সম্পর্ক",
          lessons: [
            {
              id: "c7-math-ch4-l1",
              point: "৪.১",
              title: "Parallel Lines, Transversals, Alternate and Corresponding Angles",
              titleBangla: "৪.১ সমান্তরাল সরলরেখা, ছেদক ও একান্তর-অনুরূপ কোণ",
              summary: "দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে একান্তর কোণ ও অনুরূপ কোণের সমতা।",
              keywords: ["সমান্তরাল রেখা", "একান্তর কোণ", "অনুরূপ কোণ", "ছেদক"]
            },
            {
              id: "c7-math-ch4-l2",
              point: "৪.২",
              title: "Vertically Opposite and Adjacent Angles",
              titleBangla: "৪.২ বিপ্রতীপ কোণ ও সন্নিহিত কোণের বৈশিষ্ট্য",
              summary: "পরস্পরছেদী রেখার বিপ্রতীপ কোণগুলোর পরস্পর সমান হওয়ার জ্যামিতিক প্রমাণ।",
              keywords: ["বিপ্রতীপ কোণ", "সন্নিহিত কোণ", "জ্যামিতিক প্রমাণ"]
            },
            {
              id: "c7-math-ch4-l3",
              point: "৪.৩",
              title: "Sum of Triangle Angles Equals 180° Verification",
              titleBangla: "৪.৩ ত্রিভুজের তিন কোণের সমষ্টি ১৮০° এর ব্যবহারিক প্রমাণ",
              summary: "কাগজের ত্রিভুজের তিন কোণ কেটে সরলকোণ (১৮০°) মেলানোর কার্যক্রম।",
              keywords: ["ত্রিভুজ", "তিন কোণের সমষ্টি", "১৮০ ডিগ্রি", "সরলকোণ"]
            }
          ]
        },
        {
          id: "c7-math-ch5",
          chapterNumber: 5,
          title: "Measuring 2D Shapes (Area & Perimeter)",
          titleBangla: "৫ম অধ্যায়: নানা রকম আকৃতি মাপি",
          lessons: [
            {
              id: "c7-math-ch5-l1",
              point: "৫.১",
              title: "Area of Parallelogram, Rhombus, and Trapezium",
              titleBangla: "৫.১ সামান্তরিক, রম্বস ও ট্রাপিজিয়ামের ক্ষেত্রফল",
              summary: "ভূমি × উচ্চতা (সামান্তরিক), ½ × কর্ণদ্বয়ের গুণফল (রম্বস), ½ × (সমান্তরাল বাহুদ্বয়ের যোগফল) × উচ্চতা (ট্রাপিজিয়াম)।",
              keywords: ["সামান্তরিক", "রম্বস", "ট্রাপিজিয়াম", "ক্ষেত্রফল"]
            },
            {
              id: "c7-math-ch5-l2",
              point: "৫.২",
              title: "Circumference and Area of Circles & Circular Sectors",
              titleBangla: "৫.২ বৃত্তের পরিধি (2πr), ক্ষেত্রফল (πr²) ও বৃত্তকলা",
              summary: "পাই (π)-এর মান ৩.১৪১৬ ব্যবহার করে বৃত্তাকার চাকা ও উদ্যানের ক্ষেত্রফল নির্ণয়।",
              keywords: ["বৃত্ত", "পরিধি", "ক্ষেত্রফল", "বৃত্তকলা", "পাই"]
            }
          ]
        },
        {
          id: "c7-math-ch6",
          chapterNumber: 6,
          title: "Story of Binary Numbers",
          titleBangla: "৬ষ্ঠ অধ্যায়: বাইনারি সংখ্যার গল্প",
          lessons: [
            {
              id: "c7-math-ch6-l1",
              point: "৬.১",
              title: "Binary Logic (Base-2) and Decimal Conversions",
              titleBangla: "৬.১ বাইনারি সংখ্যা পদ্ধতি ও দশমিক থেকে বাইনারি রূপান্তর",
              summary: "কার্ড খেলার মাধ্যমে ১, ২, ৪, ৮, ১৬ এর অন/অফ (১ ও ০) সুইচ দিয়ে সংখ্যা প্রকাশ।",
              keywords: ["বাইনারি", "দশমিক রূপান্তর", "সুইচ", "কম্পিউটার লজিক"]
            },
            {
              id: "c7-math-ch6-l2",
              point: "৬.২",
              title: "Binary Addition and Real-life Digital Meaning",
              titleBangla: "৬.২ বাইনারি সংখ্যার যোগ এবং ডিজিটাল তথ্যের সংরক্ষণ",
              summary: "০+০=০, ০+১=১, ১+১=১০ যোগের নিয়ম এবং কম্পিউটারে মেমরি ধারণের প্রক্রিয়া।",
              keywords: ["বাইনারি যোগ", "ডিজিটাল মেমরি", "বিট"]
            }
          ]
        },
        {
          id: "c7-math-ch7",
          chapterNumber: 7,
          title: "Finding Variables and Linear Equations",
          titleBangla: "৭ম অধ্যায়: চলকের খোঁজ ও সরল সমীকরণ",
          lessons: [
            {
              id: "c7-math-ch7-l1",
              point: "৭.১",
              title: "Setting Up Real Life Equations from Scenarios",
              titleBangla: "৭.১ বাস্তব পরিস্থিতি থেকে এক চলকবিশিষ্ট সমীকরণ গঠন",
              summary: "পিতা-পুত্রের বয়স, কলম-খাতার মূল্য ইত্যাদিকে চলকের মাধ্যমে সমীকরণে প্রকাশ।",
              keywords: ["সমীকরণ গঠন", "চলক", "বাস্তব পরিস্থিতি"]
            },
            {
              id: "c7-math-ch7-l2",
              point: "৭.২",
              title: "Step-by-step Solving via Transposition",
              titleBangla: "৭.২ পক্ষান্তর বিধি প্রয়োগে সমীকরণের সমাধান ও শুদ্ধি পরীক্ষা",
              summary: "সমীকরণের উভয় পাশে একই অপারেশন এবং চলকের মান বসিয়ে লেফট হ্যান্ড সাইড = রাইট হ্যান্ড সাইড পরীক্ষা।",
              keywords: ["পক্ষান্তর", "সমাধান", "শুদ্ধি পরীক্ষা"]
            }
          ]
        },
        {
          id: "c7-math-ch8",
          chapterNumber: 8,
          title: "Surface Area and Volume of 3D Objects",
          titleBangla: "৮ম অধ্যায়: নানা রকম আকৃতির আয়তন ও ক্ষেত্রফল",
          lessons: [
            {
              id: "c7-math-ch8-l1",
              point: "৮.১",
              title: "Surface Area and Volume of Cuboids and Prisms",
              titleBangla: "৮.১ আয়তাকার ঘনবস্তু ও প্রিজমের সমগ্রতলের ক্ষেত্রফল ও আয়তন",
              summary: "দৈর্ঘ্য × প্রস্থ × উচ্চতা সূত্রে আয়তন নির্ণয় এবং তলগুলোর ক্ষেত্রফল যোগফল।",
              keywords: ["ঘনবস্তু", "প্রিজম", "আয়তন", "সমগ্রতলের ক্ষেত্রফল"]
            },
            {
              id: "c7-math-ch8-l2",
              point: "৮.২",
              title: "Surface Area and Volume of Cylinders",
              titleBangla: "৮.২ বেলন বা সিলিন্ডারের বক্রতল ও আয়তন (πr²h)",
              summary: "বৃত্তাকার তলদ্বয় এবং বক্রতলের ক্ষেত্রফল (2πrh) ও সিলিন্ডারের ধারণক্ষমতা।",
              keywords: ["সিলিন্ডার", "বেলন", "বক্রতল", "ধারণক্ষমতা"]
            }
          ]
        },
        {
          id: "c7-math-ch9",
          chapterNumber: 9,
          title: "Multi-term Algebraic Expressions and Identities",
          titleBangla: "৯ম অধ্যায়: অজানা রাশির বহুরাশিক রাশি ও বীজগাণিতিক সূত্র",
          lessons: [
            {
              id: "c7-math-ch9-l1",
              point: "৯.১",
              title: "Multiplication and Division of Polynomials",
              titleBangla: "৯.১ বহুপদী রাশির গুণ ও ভাগ প্রক্রিয়া",
              summary: "চিহ্ন ও সূচক বিধি মেনে দ্বিপদী ও ত্রিপদী রাশির গুণ এবং ভাগফল নির্ণয়।",
              keywords: ["বহুপদী রাশি", "গুণ", "ভাগ", "বীজগণিত"]
            },
            {
              id: "c7-math-ch9-l2",
              point: "৯.২",
              title: "Geometric Proof of (a+b)² and (a-b)²",
              titleBangla: "৯.২ কাগজ কেটে (a+b)² ও (a-b)² সূত্রের জ্যামিতিক প্রমাণ",
              summary: "বর্গক্ষেত্রের ক্ষেত্রফল বিভক্ত করে সূত্রের বাস্তব জ্যামিতিক রূপ উপস্থাপন।",
              keywords: ["বর্গের সূত্র", "জ্যামিতিক প্রমাণ", "কাগজ কাটা"]
            }
          ]
        },
        {
          id: "c7-math-ch10",
          chapterNumber: 10,
          title: "Data Investigation and Statistics",
          titleBangla: "১০ম অধ্যায়: তথ্যের অনুসন্ধান ও বিশ্লেষণ",
          lessons: [
            {
              id: "c7-math-ch10-l1",
              point: "১০.১",
              title: "Data Collection, Frequency Table and Tally",
              titleBangla: "১০.১ তথ্য সংগ্রহ, শ্রেণি ব্যবধান ও গণসংখ্যা সারণি তৈরি",
              summary: "ট্যালি চিহ্নের সাহায্যে অবিন্যস্ত উপাত্তকে সারণিবদ্ধ রূপদান ও পরিসর নির্ণয়।",
              keywords: ["উপাত্ত", "গণসংখ্যা সারণি", "ট্যালি", "পরিসর"]
            },
            {
              id: "c7-math-ch10-l2",
              point: "১০.২",
              title: "Mean, Median and Mode Calculations",
              titleBangla: "১০.২ কেন্দ্রীয় প্রবণতা: গড়, মধ্যক ও প্রচুরক নির্ণয়",
              summary: "গাণিতিক গড় সূত্রের প্রয়োগ, জোড় ও বিজোড় পদের মধ্যক এবং সর্বোচ্চ বারবার ঘটা প্রচুরক।",
              keywords: ["গড়", "মধ্যক", "প্রচুরক", "পরিসংখ্যান"]
            },
            {
              id: "c7-math-ch10-l3",
              point: "১০.৩",
              title: "Constructing and Interpreting Histograms and Bar Charts",
              titleBangla: "১০.৩ আয়তলেখ ও স্তম্ভচিত্র অঙ্কন এবং সিদ্ধান্ত গ্রহণ",
              summary: "ছক কাগজে এক্স ও ওয়াই অক্ষে স্কেল নির্বাচন করে উপাত্ত চিত্রায়ণ।",
              keywords: ["স্তম্ভচিত্র", "আয়তলেখ", "ছক কাগজ", "উপাত্ত বিশ্লেষণ"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৪. বিজ্ঞান - অনুসন্ধানী পাঠ (Science Inquiry)
    // ====================================================
    {
      id: "c7-science-inquiry",
      code: "SCI-07-INQ",
      name: "Science (Inquiry)",
      nameBangla: "বিজ্ঞান (অনুসন্ধানী পাঠ)",
      group: "General",
      coverColor: "from-cyan-600 to-sky-850",
      chapters: [
        {
          id: "c7-sci-inq-ch1",
          chapterNumber: 1,
          title: "Microorganisms and Microscopic World",
          titleBangla: "১ম অধ্যায়: ক্ষুদ্রাতিক্ষুদ্র অনুজীবের জগৎ",
          lessons: [
            {
              id: "c7-sci-inq-ch1-l1",
              point: "১.১",
              title: "Virus, Bacteria, Fungi, and Protozoa Structure",
              titleBangla: "১.১ ভাইরাস, ব্যাকটেরিয়া, ছত্রাক ও প্রোটোজোয়ার গঠন",
              summary: "অকোষীয় ভাইরাস, আদি কোষী ব্যাকটেরিয়া ও সুকেন্দ্রিক ছত্রাকের শারীরবৃত্তীয় অমিল।",
              keywords: ["অণুজীব", "ভাইরাস", "ব্যাকটেরিয়া", "ছত্রাক", "প্রোটোজোয়া"]
            },
            {
              id: "c7-sci-inq-ch1-l2",
              point: "১.২",
              title: "Beneficial Microorganisms (Fermentation, Antibiotics)",
              titleBangla: "১.২ উপকারী অণুজীব: খাদ্য প্রক্রিয়াকরণ ও চিকিৎসা শিল্প",
              summary: "দই তৈরি (ল্যাকটোব্যাসিলাস), পাউরুটি ফোলাতে ইস্ট ও পেনিসিলিয়াম থেকে অ্যান্টিবায়োটিক।",
              keywords: ["উপকারী অণুজীব", "ফার্মেন্টেশন", "ইস্ট", "অ্যান্টিবায়োটিক"]
            },
            {
              id: "c7-sci-inq-ch1-l3",
              point: "১.৩",
              title: "Pathogenic Microbes and Disease Prevention",
              titleBangla: "১.৩ রোগ সৃষ্টিকারী অণুজীব ও পাস্তুরায়ন পদ্ধতি",
              summary: "কলেরা, যক্ষ্মা, ইনফ্লুয়েঞ্জা বিস্তার রোধ ও লুই পাস্তুরের পাস্তুরায়ন কৌশল।",
              keywords: ["রোগজীবাণু", "পাস্তুরায়ন", "সংক্রমণ", "স্বাস্থ্যবিধি"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch2",
          chapterNumber: 2,
          title: "Heat, Temperature and Thermal Transfer",
          titleBangla: "২য় অধ্যায়: তাপ, তাপমাত্রা ও তাপ সঞ্চালন",
          lessons: [
            {
              id: "c7-sci-inq-ch2-l1",
              point: "২.১",
              title: "Celsius, Fahrenheit Conversion (C/5 = (F-32)/9)",
              titleBangla: "২.১ সেলসিয়াস ও ফারেনহাইট স্কেল সম্পর্ক ও রূপান্তর",
              summary: "থার্মোমিটারের কার্যপদ্ধতি, পারদের প্রসারণ ও মানুষের শরীরের স্বাভাবিক তাপমাত্রা (৯৮.৪°F)।",
              keywords: ["তাপমাত্রা", "সেলসিয়াস", "ফারেনহাইট", "থার্মোমিটার"]
            },
            {
              id: "c7-sci-inq-ch2-l2",
              point: "২.২",
              title: "Thermal Expansion of Solids, Liquids, and Gases",
              titleBangla: "২.২ কঠিন, তরল ও বায়বীয় পদার্থের তাপীয় প্রসারণ",
              summary: "রেললাইনের সংযোগস্থলে ফাঁক রাখা ও গরম কাঁচের গ্লাসে ঠান্ডা পানি ঢাললে ফেটে যাওয়ার কারণ।",
              keywords: ["তাপীয় প্রসারণ", "রেললাইন", "অণুসমূহের দূরত্ব"]
            },
            {
              id: "c7-sci-inq-ch2-l3",
              point: "২.৩",
              title: "Conduction, Convection, and Radiation",
              titleBangla: "২.৩ তাপ সঞ্চালনের তিন পদ্ধতি (পরিবহন, পরিচলন ও বিকিরণ)",
              summary: "ধাতব চামচে পরিবহন, ফুটন্ত পানিতে পরিচলন স্রোত এবং সূর্য থেকে শূন্য মাধ্যমে বিকিরণ।",
              keywords: ["পরিবহন", "পরিচলন", "বিকিরণ", "তাপ সঞ্চালন"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch3",
          chapterNumber: 3,
          title: "Light, Reflection, and Mirrors",
          titleBangla: "৩য় অধ্যায়: আলো ও আলোর প্রতিফলন",
          lessons: [
            {
              id: "c7-sci-inq-ch3-l1",
              point: "৩.১",
              title: "Laws of Regular Reflection & Plane Mirrors",
              titleBangla: "৩.১ আলোর প্রতিফলনের সূত্র ও সমতল দর্পণে প্রতিবিম্ব",
              summary: "আপতন কোণ = প্রতিফলন কোণ সূত্র, সমতল দর্পণে সমান আকারের অবাস্তব ও সোজা প্রতিবিম্ব।",
              keywords: ["আলো", "প্রতিফলন", "দর্পণ", "আপতন কোণ", "প্রতিবিম্ব"]
            },
            {
              id: "c7-sci-inq-ch3-l2",
              point: "৩.২",
              title: "Lateral Inversion and Optical Devices (Periscope)",
              titleBangla: "৩.২ পার্শ্বীয় পরিবর্তন ও পেরিস্কোপের কার্যপদ্ধতি",
              summary: "দর্পণে ডান হাত বাম হাত দেখার কারণ এবং বাঙ্কার বা সাবমেরিনে পেরিস্কোপের ব্যবহার।",
              keywords: ["পার্শ্বীয় পরিবর্তন", "পেরিস্কোপ", "ক্যালাইডোস্কোপ"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch4",
          chapterNumber: 4,
          title: "Matter, Atomic Structure and Elements",
          titleBangla: "৪র্থ অধ্যায়: পদার্থের গঠন ও অণু-পরমাণুর পরিচয়",
          lessons: [
            {
              id: "c7-sci-inq-ch4-l1",
              point: "৪.১",
              title: "Subatomic Particles: Protons, Neutrons and Electrons",
              titleBangla: "৪.১ পরমাণুর গঠন: প্রোটন, নিউট্রন ও ইলেকট্রন",
              summary: "কেন্দ্রে ধনাত্মক নিউক্লিয়াস এবং বাইরে ঋণাত্মক ইলেকট্রনের ঘূর্ণন কক্ষপথ।",
              keywords: ["পরমাণু", "প্রোটন", "নিউট্রন", "ইলেকট্রন", "নিউক্লিয়াস"]
            },
            {
              id: "c7-sci-inq-ch4-l2",
              point: "৪.২",
              title: "Chemical Symbols, Formulas and Periodic Grouping",
              titleBangla: "৪.২ রাসায়নিক প্রতীক, সংকেত ও যোজনীর প্রাথমিক ধারণা",
              summary: "মৌলের ইংরেজি ও ল্যাটিন নাম থেকে প্রতীক গঠন (H, O, Na, Fe) ও যৌগের সংকেত।",
              keywords: ["প্রতীক", "সংকেত", "যোজনী", "মৌল ও যৌগ"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch5",
          chapterNumber: 5,
          title: "Cell Organelles and Plant-Animal Cells",
          titleBangla: "৫ম অধ্যায়: কোষীয় অঙ্গাণুর বৈচিত্র্য ও কাজ",
          lessons: [
            {
              id: "c7-sci-inq-ch5-l1",
              point: "৫.১",
              title: "Plastid Types: Chloroplast, Chromoplast, Leucoplast",
              titleBangla: "৫.১ প্লাস্টিডের প্রকারভেদ (সবুজ, রঙিন ও বর্ণহীন প্লাস্টিড)",
              summary: "ক্লোরোপ্লাস্টে খাদ্য তৈরি, ক্রোমোপ্লাস্টে ফুলের রঙ এবং লিউকোপ্লাস্টে খাদ্য সঞ্চয়।",
              keywords: ["প্লাস্টিড", "ক্লোরোপ্লাস্ট", "ক্রোমোপ্লাস্ট", "লিউকোপ্লাস্ট"]
            },
            {
              id: "c7-sci-inq-ch5-l2",
              point: "৫.২",
              title: "Mitochondria, Nucleus and Vacuoles",
              titleBangla: "৫.২ মাইটোকনড্রিয়া (পাওয়ার হাউস), নিউক্লিয়াস ও কোষগহ্বর",
              summary: "কোষের শক্তি উৎপাদন কেন্দ্র এবং জিনগত বৈশিষ্ট্য নিয়ন্ত্রক নিউক্লিয়াস।",
              keywords: ["মাইটোকনড্রিয়া", "পাওয়ার হাউস", "নিউক্লিয়াস", "কোষগহ্বর"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch6",
          chapterNumber: 6,
          title: "Human Organ Systems and Circulation",
          titleBangla: "৬ষ্ঠ অধ্যায়: মানব শারীরতত্ত্ব ও সংবহন তন্ত্র",
          lessons: [
            {
              id: "c7-sci-inq-ch6-l1",
              point: "৬.১",
              title: "Heart Anatomy and Blood Circulation",
              titleBangla: "৬.১ হৃৎপিণ্ডের গঠন ও রক্ত সংবহন প্রক্রিয়া",
              summary: "অলিন্দ ও নিলয়, মহাধমনি, রক্তকণিকা (লোহিত, শ্বেত, অনুচক্রিকা) ও রক্তরস।",
              keywords: ["হৃৎপিণ্ড", "রক্ত সংবহন", "লোহিত রক্তকণিকা", "শ্বেত রক্তকণিকা"]
            },
            {
              id: "c7-sci-inq-ch6-l2",
              point: "৬.২",
              title: "Respiratory and Digestive System Coordination",
              titleBangla: "৬.২ পরিপাক ও শ্বসনতন্ত্রের আন্তঃসম্পর্ক",
              summary: "খাদ্য থেকে পুষ্টি শোষণ এবং ফুসফুসে অক্সিজেন ও কার্বন ডাই অক্সাইড বিনিময়।",
              keywords: ["পরিপাক", "শ্বসনতন্ত্র", "ফুসফুস", "অক্সিজেন"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch7",
          chapterNumber: 7,
          title: "Plant Nutrition and Transportation",
          titleBangla: "৭ম অধ্যায়: উদ্ভিদের পুষ্টি ও সংবহন প্রণালী",
          lessons: [
            {
              id: "c7-sci-inq-ch7-l1",
              point: "৭.১",
              title: "Photosynthesis Mechanism and Light Absorption",
              titleBangla: "৭.১ সালোকসংশ্লেষণ প্রক্রিয়া ও ক্লোরোফিলের ভূমিকা",
              summary: "কার্বন ডাই অক্সাইড ও পানি থেকে সূর্যালোকের উপস্থিতিতে গ্লুকোজ ও অক্সিজেন তৈরি।",
              keywords: ["সালোকসংশ্লেষণ", "ক্লোরোফিল", "গ্লুকোজ", "অক্সিজেন"]
            },
            {
              id: "c7-sci-inq-ch7-l2",
              point: "৭.২",
              title: "Xylem and Phloem Transport System",
              titleBangla: "৭.২ জাইলেম ও ফ্লোয়েম টিস্যুর পরিবহন কার্যক্রম",
              summary: "মূলরোম দ্বারা শোষিত পানি শীর্ষে পৌঁছানো এবং পাতায় তৈরি খাদ্য সারা দেহে বণ্টন।",
              keywords: ["জাইলেম", "ফ্লোয়েম", "উদ্ভিদ পরিবহন"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch8",
          chapterNumber: 8,
          title: "Earth, Solar System and Gravitation",
          titleBangla: "৮ম অধ্যায়: পৃথিবী, মহাবিশ্ব ও মহাকর্ষ বল",
          lessons: [
            {
              id: "c7-sci-inq-ch8-l1",
              point: "৮.১",
              title: "Planetary Orbits and Gravitational Force",
              titleBangla: "৮.১ গ্রহের কক্ষপথ ও নিউটনের মহাকর্ষ সূত্র",
              summary: "মহাবিশ্বের দুটি বস্তুর মধ্যে আকর্ষণ বল এবং ভরের গুণফল ও দূরত্বের সম্পর্ক।",
              keywords: ["মহাকর্ষ", "গ্রহ", "কক্ষপথ", "নিউটন"]
            },
            {
              id: "c7-sci-inq-ch8-l2",
              point: "৮.২",
              title: "Satellites and Lunar Phases (Tides)",
              titleBangla: "৮.২ উপগ্রহ, চাঁদের কলা ও জোয়ার-ভাটা সৃষ্টির কারণ",
              summary: "পৃথিবীর ওপর চাঁদ ও সূর্যের আকর্ষণ বলের কারণে সমুদ্রের পানির স্ফীতি ও সংকোচন।",
              keywords: ["চাঁদের কলা", "জোয়ার ভাটা", "উপগ্রহ"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch9",
          chapterNumber: 9,
          title: "Ecosystem and Ecological Balance",
          titleBangla: "৯ম অধ্যায়: বাস্তুতন্ত্র ও পরিবেশের ভারসাম্য",
          lessons: [
            {
              id: "c7-sci-inq-ch9-l1",
              point: "৯.১",
              title: "Abiotic and Biotic Components in Food Webs",
              titleBangla: "৯.১ বাস্তুতন্ত্রের উপাদান, খাদ্যশৃঙ্খল ও খাদ্যজাল",
              summary: "উৎপাদক, ১ম/২য়/৩য় স্তরের খাদক ও বিয়োজক সমন্বয়ে খাদ্য শক্তি সঞ্চালন।",
              keywords: ["বাস্তুতন্ত্র", "খাদ্যশৃঙ্খল", "খাদ্যজাল", "উৎপাদক"]
            },
            {
              id: "c7-sci-inq-ch9-l2",
              point: "৯.২",
              title: "Trophic Levels and Energy Pyramid",
              titleBangla: "৯.২ ট্রফিক লেভেল ও পুষ্টি পিরামিডের শক্তি ক্ষয়",
              summary: "এক স্তর থেকে পরবর্তী স্তরে শক্তির স্থানান্তর ও ১০% নিয়মের ব্যাখ্যা।",
              keywords: ["ট্রফিক লেভেল", "শক্তি পিরামিড", "শক্তি ক্ষয়"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch10",
          chapterNumber: 10,
          title: "Motion, Force and Newton's Laws",
          titleBangla: "১০ম অধ্যায়: গতি, বল ও শক্তির রূপান্তর",
          lessons: [
            {
              id: "c7-sci-inq-ch10-l1",
              point: "১০.১",
              title: "Types of Motion: Linear, Circular, Periodic",
              titleBangla: "১০.১ গতির প্রকারভেদ (সরলরৈখিক, বৃত্তাকার, ঘূর্ণন ও পর্যায়বৃত্ত গতি)",
              summary: "গাড়ির গতি, ফ্যানের ঘূর্ণন, দেয়াল ঘড়ির পেন্ডুলামের পর্যায়বৃত্ত গতির তুলনা।",
              keywords: ["গতি", "সরলরৈখিক গতি", "ঘূর্ণন গতি", "পর্যায়বৃত্ত গতি"]
            },
            {
              id: "c7-sci-inq-ch10-l2",
              point: "১০.২",
              title: "Newton's First and Second Laws of Motion",
              titleBangla: "১০.২ নিউটনের গতিসূত্র (জড়তা, বল ও ত্বরণ F=ma)",
              summary: "স্থিতিজড়তা ও গতিজড়তার বাস্তব উদাহরণ এবং বল প্রয়োগে ত্বরণের সৃষ্টি।",
              keywords: ["নিউটনের গতিসূত্র", "জড়তা", "বল", "ত্বরণ"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch11",
          chapterNumber: 11,
          title: "Mineral Resources and Renewable Energy",
          titleBangla: "১১শ অধ্যায়: খনিজ সম্পদ ও নবায়নযোগ্য শক্তি",
          lessons: [
            {
              id: "c7-sci-inq-ch11-l1",
              point: "১১.১",
              title: "Natural Gas, Coal and Petroleum Reserves in Bangladesh",
              titleBangla: "১১.১ বাংলাদেশের প্রাকৃতিক গ্যাস, কয়লা ও পেট্রোলিয়াম ভাণ্ডার",
              summary: "জীবাশ্ম জ্বালানির উৎস, ভূ-গর্ভস্থ উত্তোলন পদ্ধতি ও এদের সীমাবদ্ধতা।",
              keywords: ["প্রাকৃতিক গ্যাস", "কয়লা", "জীবাশ্ম জ্বালানি", "খনিজ সম্পদ"]
            },
            {
              id: "c7-sci-inq-ch11-l2",
              point: "১১.২",
              title: "Solar, Wind and Biogas Alternatives",
              titleBangla: "১১.২ সৌরশক্তি, বায়ুশক্তি ও বায়োগ্যাস নবায়নযোগ্য উৎস",
              summary: "পরিবেশবান্ধব সবুজ শক্তি উৎপাদন এবং জীবাশ্ম জ্বালানির বিকল্প ব্যবহার।",
              keywords: ["সৌরশক্তি", "বায়োগ্যাস", "নবায়নযোগ্য শক্তি"]
            }
          ]
        },
        {
          id: "c7-sci-inq-ch12",
          chapterNumber: 12,
          title: "Environmental Pollution and Sustainable Solutions",
          titleBangla: "১২শ অধ্যায়: পরিবেশ দূষণ ও টেকসই সুরক্ষা",
          lessons: [
            {
              id: "c7-sci-inq-ch12-l1",
              point: "১২.১",
              title: "Air, Water, Soil and Sound Pollution Causes",
              titleBangla: "১২.১ বায়ু, পানি, মাটি ও শব্দ দূষণের কারণ ও প্রভাব",
              summary: "শিল্পবর্জ্য, যানবাহনের ধোঁয়া ও প্লাস্টিকের ফলে জীবমণ্ডলে ক্ষতিকর প্রতিক্রিয়া।",
              keywords: ["পরিবেশ দূষণ", "শিল্পবর্জ্য", "শব্দ দূষণ", "বায়ু দূষণ"]
            },
            {
              id: "c7-sci-inq-ch12-l2",
              point: "১২.২",
              title: "3R Principles (Reduce, Reuse, Recycle)",
              titleBangla: "১২.২ থ্রি-আর নীতি (হ্রাস, পুনঃব্যবহার, পুনর্ব্যবহার) ও টেকসই জীবনধারা",
              summary: "বর্জ্য ব্যবস্থাপনা এবং ভবিষ্যৎ প্রজন্মের জন্য পৃথিবী সংরক্ষণের কার্যকর কৌশল।",
              keywords: ["3R নীতি", "রিসাইক্লিং", "বর্জ্য ব্যবস্থাপনা", "টেকসই উন্নয়ন"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৫. বিজ্ঞান - অনুশীলন পাঠ (Science Activity/Practical)
    // ====================================================
    {
      id: "c7-science-practical",
      code: "SCI-07-PRAC",
      name: "Science (Practical/Activity)",
      nameBangla: "বিজ্ঞান (অনুশীলন পাঠ)",
      group: "General",
      coverColor: "from-teal-600 to-emerald-850",
      chapters: [
        {
          id: "c7-sci-prac-ch1",
          chapterNumber: 1,
          title: "Microscope Slide Preparation and Culturing Microbes",
          titleBangla: "১ম অধ্যায়: অণুবীক্ষণ যন্ত্রে অণুজীব কালচার স্লাইড তৈরি ও পরীক্ষা",
          lessons: [
            {
              id: "c7-sci-prac-ch1-l1",
              point: "১.১",
              title: "Pond Water Protozoa and Yeast Fermentation Slide",
              titleBangla: "১.১ পুকুরের পানিতে প্রোটোজোয়া ও বেকিং ইস্টের পর্যবেক্ষণ",
              summary: "ড্রপার দিয়ে কাঁচের স্লাইডে তরল নিয়ে মাইক্রোস্কোপে সচল অণুজীব শনাক্তকরণ।",
              keywords: ["অণুবীক্ষণ যন্ত্র", "স্লাইড", "ইস্ট", "প্রোটোজোয়া"]
            },
            {
              id: "c7-sci-prac-ch1-l2",
              point: "১.২",
              title: "Staining and Focusing at 400x Magnification",
              titleBangla: "১.২ মিথিলিন ব্লু রঞ্জক প্রয়োগ ও ফোকাসিং কৌশল",
              summary: "কভার স্লিপ বায়ুহীনভাবে বসানো এবং মাইক্রোস্কোপের লেন্স সমন্বয়।",
              keywords: ["রঞ্জক", "কভার স্লিপ", "ফোকাসিং"]
            }
          ]
        },
        {
          id: "c7-sci-prac-ch2",
          chapterNumber: 2,
          title: "Fabricating Periscope and Convection Current Model",
          titleBangla: "২য় অধ্যায়: পেরিস্কোপ ও পরিচলন স্রোতের ব্যবহারিক মডেল",
          lessons: [
            {
              id: "c7-sci-prac-ch2-l1",
              point: "২.১",
              title: "Building 45-degree Mirror Periscope Box",
              titleBangla: "২.১ কার্ডবোর্ড ও দুটি সমতল দর্পণ দিয়ে পেরিস্কোপ তৈরি",
              summary: "৪৫ ডিগ্রি কোণে দুটি আয়না বসিয়ে দেয়ালের ওপরের দৃশ্য দেখার হস্তনির্মিত মডেল।",
              keywords: ["পেরিস্কোপ", "দর্পণ", "মডেল", "প্রতিফলন"]
            },
            {
              id: "c7-sci-prac-ch2-l2",
              point: "২.২",
              title: "Water Convection Demonstration with Potassium Permanganate",
              titleBangla: "২.২ পটাশিয়াম পারম্যাঙ্গানেট দিয়ে পানিতে পরিচলন স্রোত পর্যবেক্ষণ",
              summary: "ফ্লাস্কে রঙিন কণার ঊর্ধ্বমুখী ও পার্শ্ববর্তী গতি দ্বারা তাপ পরিচলন প্রমাণ।",
              keywords: ["পরিচলন স্রোত", "তাপ সঞ্চালন", "ব্যবহারিক পরীক্ষা"]
            }
          ]
        },
        {
          id: "c7-sci-prac-ch3",
          chapterNumber: 3,
          title: "Thermal Expansion Demonstration in Laboratory",
          titleBangla: "৩য় অধ্যায়: কঠিন ও তরলের তাপীয় প্রসারণ পরীক্ষা",
          lessons: [
            {
              id: "c7-sci-prac-ch3-l1",
              point: "৩.১",
              title: "Ring and Ball Experiment for Solids",
              titleBangla: "৩.১ রিং ও বল পরীক্ষার মাধ্যমে কঠিনের প্রসারণ নিরূপণ",
              summary: "উত্তপ্ত করার আগে ও পরে ধাতব বল রিং দিয়ে প্রবেশের তুলনামূলক পরীক্ষা।",
              keywords: ["রিং ও বল", "তাপীয় প্রসারণ", "কঠিন পদার্থ"]
            }
          ]
        },
        {
          id: "c7-sci-prac-ch4",
          chapterNumber: 4,
          title: "Plant and Animal Cell Slides Comparison",
          titleBangla: "৪র্থ অধ্যায়: পেঁয়াজের খোসা ও গালের ভেতরের কোষ পরীক্ষণ",
          lessons: [
            {
              id: "c7-sci-prac-ch4-l1",
              point: "৪.১",
              title: "Onion Epidermal Peel and Cheek Cell Slide",
              titleBangla: "৪.১ পেঁয়াজ কোষের কোষপ্রাচীর ও মানব গালের কোষঝিল্লি পর্যবেক্ষণ",
              summary: "উদ্ভিদ কোষে কোষপ্রাচীর ও ক্লোরোপ্লাস্ট এবং প্রাণী কোষে তা না থাকার প্রত্যক্ষ প্রমাণ।",
              keywords: ["পেঁয়াজ কোষ", "কোষপ্রাচীর", "কোষঝিল্লি", "প্রাণী কোষ"]
            }
          ]
        },
        {
          id: "c7-sci-prac-ch5",
          chapterNumber: 5,
          title: "Investigating Photosynthesis and Oxygen Release",
          titleBangla: "৫ম অধ্যায়: সালোকসংশ্লেষণে আলোর অপরিহার্যতা ও অক্সিজেন পরীক্ষা",
          lessons: [
            {
              id: "c7-sci-prac-ch5-l1",
              point: "৫.১",
              title: "Hydrilla Plant Oxygen Bubble Trapping Experiment",
              titleBangla: "৫.১ হাইড্রিলা উদ্ভিদে ফানেল বসিয়ে অক্সিজেন গ্যাস নির্গমন পরীক্ষা",
              summary: "টেস্টটিউবে সংগৃহীত গ্যাসে শিখাহীন কাঠি প্রবেশ করিয়ে প্রজ্বলিত করার মাধ্যমে অক্সিজেন নিশ্চিতকরণ।",
              keywords: ["হাইড্রিলা", "সালোকসংশ্লেষণ", "অক্সিজেন", "ব্যবহারিক বিজ্ঞান"]
            }
          ]
        },
        {
          id: "c7-sci-prac-ch6",
          chapterNumber: 6,
          title: "Local Pond and Garden Ecosystem Survey",
          titleBangla: "৬ষ্ঠ অধ্যায়: স্থানীয় পুকুর ও বাগানের বাস্তুতন্ত্র মাঠপর্যায়ে জরিপ",
          lessons: [
            {
              id: "c7-sci-prac-ch6-l1",
              point: "৬.১",
              title: "Quadrat Sampling and Food Chain Flow Chart",
              titleBangla: "৬.১ কোয়াড্রাট পদ্ধতিতে জীববৈচিত্র্য গণনা ও খাদ্যজাল ছক তৈরি",
              summary: "নির্দিষ্ট আয়তনের জমিতে উদ্ভিদ ও কীটপতঙ্গের প্রজাতি গণনা ও বাস্তুসংস্থানিক তালিকা।",
              keywords: ["বাস্তুতন্ত্র জরিপ", "কোয়াড্রাট", "জীববৈচিত্র্য", "খাদ্যজাল"]
            }
          ]
        },
        {
          id: "c7-sci-prac-ch7",
          chapterNumber: 7,
          title: "Acid, Base and Litmus Indicator Testing",
          titleBangla: "৭ম অধ্যায়: প্রাকৃতিক নির্দেশক দিয়ে অ্যাসিড ও ক্ষার শনাক্তকরণ",
          lessons: [
            {
              id: "c7-sci-prac-ch7-l1",
              point: "৭.১",
              title: "Lemon Juice, Soap Water and Turmeric/Hibiscus Indicator",
              titleBangla: "৭.১ লেবুর রস, চুন ও জবা ফুল/হলুদ নির্যাস দিয়ে অ্যাসিড-ক্ষার পরীক্ষা",
              summary: "নীল লিটমাস লাল হলে অ্যাসিড এবং লাল লিটমাস নীল হলে ক্ষার শনাক্তকরণের সহজ পরীক্ষা।",
              keywords: ["অ্যাসিড", "ক্ষার", "লিটমাস পেপার", "প্রাকৃতিক নির্দেশক"]
            }
          ]
        },
        {
          id: "c7-sci-prac-ch8",
          chapterNumber: 8,
          title: "Friction, Inclined Plane and Simple Machines",
          titleBangla: "৮ম অধ্যায়: আনত তল, কপিকল ও ঘর্ষণ বলের ব্যবহারিক পরীক্ষা",
          lessons: [
            {
              id: "c7-sci-prac-ch8-l1",
              point: "৮.১",
              title: "Measuring Static and Rolling Friction on Varied Surfaces",
              titleBangla: "৮.১ স্প্রিং নিক্তি দিয়ে কাঁচ, কাঠ ও বালুকাময় তলে ঘর্ষণ বল পরিমাপ",
              summary: "তলের মসৃণতার ওপর ঘর্ষণ বলের নির্ভরশীলতা ও চাকা ব্যবহারের সুবিধা প্রমাণ।",
              keywords: ["ঘর্ষণ বল", "স্প্রিং নিক্তি", "আনত তল", "সহজ যন্ত্র"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৬. ইতিহাস ও সামাজিক বিজ্ঞান (History and Social Science)
    // ====================================================
    {
      id: "c7-history-social",
      code: "HIS-07",
      name: "History and Social Science",
      nameBangla: "ইতিহাস ও সামাজিক বিজ্ঞান",
      group: "General",
      coverColor: "from-amber-700 to-yellow-950",
      chapters: [
        {
          id: "c7-his-ch1",
          chapterNumber: 1,
          title: "Evolution of Human Society and States",
          titleBangla: "১ম অধ্যায়: সমাজ ও রাষ্ট্রের বিবর্তন",
          lessons: [
            {
              id: "c7-his-ch1-l1",
              point: "১.১",
              title: "From Hunter-Gatherer to Agrarian Transformation",
              titleBangla: "১.১ শিকার-সংগ্রহ থেকে কৃষিসমাজে উত্তরণ ও স্থায়ী বসতি",
              summary: "বীজ বপন আবিষ্কার, পশুপালন, উদ্বৃত্ত ফসল উৎপাদন এবং গ্রামীণ জনপদের জন্ম।",
              keywords: ["কৃষিসমাজ", "শিকার সংগ্রহ", "স্থায়ী বসতি", "বিবর্তন"]
            },
            {
              id: "c7-his-ch1-l2",
              point: "১.২",
              title: "Rise of Urban Civilizations and Ancient States",
              titleBangla: "১.২ নগর সভ্যতার উন্মেষ, শাসনকাঠামো ও আইনের উদ্ভব",
              summary: "মেসোপটেমিয়া, সিন্ধু ও প্রাচীন বাংলার নগরসমূহের রাজনৈতিক ও সামাজিক সংগঠন।",
              keywords: ["নগর সভ্যতা", "আইন", "শাসনকাঠামো", "সিন্ধু সভ্যতা"]
            }
          ]
        },
        {
          id: "c7-his-ch2",
          chapterNumber: 2,
          title: "Natural Resources and Environment of Bengal",
          titleBangla: "২য় অধ্যায়: বাংলার ভূ-প্রকৃতি, প্রাকৃতিক সম্পদ ও নদনদী",
          lessons: [
            {
              id: "c7-his-ch2-l1",
              point: "২.১",
              title: "Riverine Delta Formation and Agriculture",
              titleBangla: "২.১ বদ্বীপ গঠন, পললমাটি ও নদীর ওপর নির্ভরশীল জনজীবন",
              summary: "পদ্মা, মেঘনা, যমুনার গতিপথ ও উর্বর পলিমাটির মাধ্যমে কৃষি সমৃদ্ধি।",
              keywords: ["বদ্বীপ", "নদনদী", "পলিমাটি", "কৃষি"]
            },
            {
              id: "c7-his-ch2-l2",
              point: "২.২",
              title: "Mangrove Sundarbans and Ecological Significance",
              titleBangla: "২.২ সুন্দরবন ম্যানগ্রোভ ও উপকূলীয় প্রাকৃতিক প্রাচীর",
              summary: "রয়েল বেঙ্গল টাইগার, সুন্দরী গাছ ও সাইক্লোন মোকাবেলায় সুন্দরবনের ভূমিকা।",
              keywords: ["সুন্দরবন", "ম্যানগ্রোভ", "উপকূলীয় প্রাচীর"]
            }
          ]
        },
        {
          id: "c7-his-ch3",
          chapterNumber: 3,
          title: "Medieval Bengal and Socio-Economic Life",
          titleBangla: "৩য় অধ্যায়: মধ্যযুগের বাংলা ও সামাজিক জীবন",
          lessons: [
            {
              id: "c7-his-ch3-l1",
              point: "৩.১",
              title: "Sultanate and Mughal Era Bengal: Muslin & Crafts",
              titleBangla: "৩.১ সুলতানি ও মুঘল আমলের অর্থনীতি, মসলিন বস্ত্র ও কুটিরশিল্প",
              summary: "ঢাকার মসলিনের সূক্ষ্মতা, তাঁতশিল্প, বারো ভূঁইয়াদের প্রতিরোধ ও বিশ্ববাণিজ্যে বাংলার খ্যাতি।",
              keywords: ["মুঘল আমল", "সুলতানি আমল", "মসলিন", "কুটিরশিল্প", "বারো ভূঁইয়া"]
            },
            {
              id: "c7-his-ch3-l2",
              point: "৩.২",
              title: "Folk Traditions, Sufi Saints and Religious Harmony",
              titleBangla: "৩.২ সুফিবাদ, বৈষ্ণব আন্দোলন ও সমন্বয়বাদী সংস্কৃতি",
              summary: "বাউল সাধনা, লালন শাহ, শ্রীচৈতন্য ও হিন্দু-মুসলিম সংস্কৃতির মিলনমেলা।",
              keywords: ["সুফিবাদ", "বৈষ্ণব দর্শন", "সমন্বয়বাদ", "সাংস্কৃতিক মেলবন্ধন"]
            }
          ]
        },
        {
          id: "c7-his-ch4",
          chapterNumber: 4,
          title: "Harmony in Diversity and Human Unity",
          titleBangla: "৪র্থ অধ্যায়: বৈচিত্র্যে ঐক্য ও আন্তঃসাংস্কৃতিক সম্প্রীতি",
          lessons: [
            {
              id: "c7-his-ch4-l1",
              point: "৪.১",
              title: "Coexistence of Ethnic Groups and Cultural Pluralism",
              titleBangla: "৪.১ বিভিন্ন ক্ষুদ্র নৃগোষ্ঠী, ধর্ম ও সংস্কৃতির শান্তিপূর্ণ সহাবস্থান",
              summary: "চাকমা, মারমা, সাঁওতাল, গারো জনগোষ্ঠীর সংস্কৃতি ও আবহমান বাংলার ভ্রাতৃত্ববোধ।",
              keywords: ["নৃগোষ্ঠী", "সাংস্কৃতিক বৈচিত্র্য", "সম্প্রীতি", "ঐক্য"]
            }
          ]
        },
        {
          id: "c7-his-ch5",
          chapterNumber: 5,
          title: "Bangladesh and the Spirit of Liberation War",
          titleBangla: "৫ম অধ্যায়: বাংলাদেশ ও মুক্তিযুদ্ধের চেতনা",
          lessons: [
            {
              id: "c7-his-ch5-l1",
              point: "৫.১",
              title: "Mass Struggle in 1971 and Sector Management",
              titleBangla: "৫.১ ১৯৭১ সালের জনযুদ্ধ, সেক্টর ভিত্তিক যুদ্ধ ও মুক্তিবাহিনীর বীরত্ব",
              summary: "১১টি সেক্টরের রণকৌশল, গেরিলা যুদ্ধ এবং সমগ্র জাতির অদম্য প্রতিরোধ।",
              keywords: ["মুক্তিযুদ্ধ", "সেক্টর", "গেরিলা যুদ্ধ", "মুক্তিবাহিনী", "১৯৭১"]
            },
            {
              id: "c7-his-ch5-l2",
              point: "৫.২",
              title: "Genocide, International Solidarity and Ultimate Victory",
              titleBangla: "৫.২ ২৫শে মার্চের গণহত্যা, বিশ্ব জনমত ও ১৬ই ডিসেম্বর বিজয়",
              summary: "অপারেশন সার্চলাইট, শরণার্থীদের আশ্রয় ও যৌথবাহিনীর মাধ্যমে চূড়ান্ত বিজয় অর্জন।",
              keywords: ["গণহত্যা", "শরণার্থী", "বিজয় দিবস", "আন্তর্জাতিক সংহতি"]
            }
          ]
        },
        {
          id: "c7-his-ch6",
          chapterNumber: 6,
          title: "Civic Rights, Governance and Democracy",
          titleBangla: "৬ষ্ঠ অধ্যায়: নাগরিক অধিকার, সুশাসন ও গণতান্ত্রিক প্রতিষ্ঠান",
          lessons: [
            {
              id: "c7-his-ch6-l1",
              point: "৬.১",
              title: "Fundamental Rights and Duties in the Constitution",
              titleBangla: "৬.১ সংবিধান স্বীকৃত মৌলিক অধিকার ও নাগরিক দায়িত্ব",
              summary: "বাকস্বাধীনতা, আইনের দৃষ্টিতে সমতা, ভোট প্রদান ও রাষ্ট্রীয় সম্পদ রক্ষা।",
              keywords: ["মৌলিক অধিকার", "সংবিধান", "নাগরিক দায়িত্ব", "আইনের শাসন"]
            },
            {
              id: "c7-his-ch6-l2",
              point: "৬.২",
              title: "Local Government: Union Parishad and Municipalities",
              titleBangla: "৬.২ স্থানীয় সরকার কাঠামো (ইউনিয়ন পরিষদ ও পৌরসভা)",
              summary: "তৃণমূল পর্যায়ে জনসেবা, গ্রামীণ অবকাঠামো উন্নয়ন ও বিরোধ নিষ্পত্তি।",
              keywords: ["স্থানীয় সরকার", "ইউনিয়ন পরিষদ", "পৌরসভা", "জনসেবা"]
            }
          ]
        },
        {
          id: "c7-his-ch7",
          chapterNumber: 7,
          title: "Asia and the Global Context",
          titleBangla: "৭ম অধ্যায়: এশিয়া মহাদেশ ও বিশ্ব প্রেক্ষাপট",
          lessons: [
            {
              id: "c7-his-ch7-l1",
              point: "৭.১",
              title: "South Asian Regional Cooperation (SAARC, BIMSTEC)",
              titleBangla: "৭.১ দক্ষিণ এশীয় আঞ্চলিক সহযোগিতা ও ভৌগোলিক গুরুত্ব",
              summary: "সার্ক ও বিমসটেক জোটে বাণিজ্য, দুর্যোগ ব্যবস্থাপনা ও সাংস্কৃতিক বিনিময়।",
              keywords: ["দক্ষিণ এশিয়া", "সার্ক", "বিমসটেক", "আঞ্চলিক সহযোগিতা"]
            }
          ]
        },
        {
          id: "c7-his-ch8",
          chapterNumber: 8,
          title: "Sustainable Development Goals and Climate Action",
          titleBangla: "৮ম অধ্যায়: টেকসই উন্নয়ন লক্ষ্যমাত্রা (SDGs) ও জলবায়ু ন্যায়বিচার",
          lessons: [
            {
              id: "c7-his-ch8-l1",
              point: "৮.১",
              title: "Climate Change Vulnerability in Coastal Bangladesh",
              titleBangla: "৮.১ জলবায়ু পরিবর্তনের ঝুঁকি ও বাংলাদেশের অভিযোজন কৌশল",
              summary: "লবণাক্ততা বৃদ্ধি, সাইক্লোন শেল্টার নির্মাণ ও সবুজ বেষ্টনী প্রকল্প।",
              keywords: ["জলবায়ু পরিবর্তন", "অভিযোজন", "টেকসই উন্নয়ন", "SDGs"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৭. ডিজিটাল প্রযুক্তি (Digital Technology)
    // ====================================================
    {
      id: "c7-digital-tech",
      code: "DIG-07",
      name: "Digital Technology",
      nameBangla: "ডিজিটাল প্রযুক্তি",
      group: "General",
      coverColor: "from-violet-600 to-purple-850",
      chapters: [
        {
          id: "c7-dig-ch1",
          chapterNumber: 1,
          title: "Smart Citizen in Cyber Space",
          titleBangla: "১ম অধ্যায়: বুদ্ধিদীপ্ত সাইবার নাগরিক ও অনলাইন নিরাপত্তা",
          lessons: [
            {
              id: "c7-dig-ch1-l1",
              point: "১.১",
              title: "Digital Footprint, Privacy Settings, and Ethics",
              titleBangla: "১.১ ডিজিটাল ফুটপ্রিন্ট, প্রাইভেসি সেটিংস ও অনলাইন নৈতিকতা",
              summary: "ইন্টারনেটে শেয়ার করা তথ্যের স্থায়ী ছাপ এবং সামাজিক মাধ্যমে শালীন আচরণ।",
              keywords: ["ডিজিটাল ফুটপ্রিন্ট", "প্রাইভেসি", "সাইবার নিরাপত্তা", "নৈতিকতা"]
            },
            {
              id: "c7-dig-ch1-l2",
              point: "১.২",
              title: "Cyberbullying Prevention and Helpdesk Assistance",
              titleBangla: "১.২ সাইবার বুলিং প্রতিরোধ ও হেল্পলাইনে যোগাযোগ (৯৯৯, ৩৩৩)",
              summary: "অনলাইনে হয়রানির শিকার হলে করণীয়, স্ক্রিনশট সংরক্ষণ ও আইন প্রয়োগকারী সংস্থার সহায়তা।",
              keywords: ["সাইবার বুলিং", "হেল্পলাইন", "আইনি সহায়তা"]
            },
            {
              id: "c7-dig-ch1-l3",
              point: "১.৩",
              title: "Phishing, Malicious Links and Two-Factor Authentication (2FA)",
              titleBangla: "১.৩ ফিশিং লিংক শনাক্তকরণ ও দ্বি-স্তরীয় নিরাপত্তা (2FA)",
              summary: "প্রতারণামূলক ইমেইল/মেসেজ চিনতে পারা এবং ওটিপি কারো সাথে শেয়ার না করা।",
              keywords: ["ফিশিং", "টু-ফ্যাক্টর অথেনটিকেশন", "ওটিপি", "পাসওয়ার্ড নিরাপত্তা"]
            }
          ]
        },
        {
          id: "c7-dig-ch2",
          chapterNumber: 2,
          title: "Spreadsheets and Data Analytics",
          titleBangla: "২য় অধ্যায়: স্প্রেডশিট ও ডেটার গ্রাফিক্যাল উপস্থাপন",
          lessons: [
            {
              id: "c7-dig-ch2-l1",
              point: "২.১",
              title: "Formulas in Excel/Sheets (SUM, AVERAGE, MIN, MAX)",
              titleBangla: "২.১ স্প্রেডশিটে গাণিতিক সূত্র প্রয়োগ ও হিসাবরক্ষণ",
              summary: "=SUM(A1:A10), =AVERAGE(B1:B10) সূত্রের মাধ্যমে স্বয়ংক্রিয় ফলাফল গণনা।",
              keywords: ["স্প্রেডশিট", "এক্সেল", "সূত্র", "অটোসাম"]
            },
            {
              id: "c7-dig-ch2-l2",
              point: "২.২",
              title: "Generating Charts (Column, Bar, Pie Charts)",
              titleBangla: "২.২ ডেটা ফিল্টারিং ও বিভিন্ন প্রকার চার্ট তৈরি",
              summary: "সারণির উপাত্ত নির্বাচন করে পাই চার্ট ও কলাম চার্টে রূপান্তর।",
              keywords: ["চার্ট", "পাই চার্ট", "কলাম চার্ট", "ডেটা অ্যানালিটিক্স"]
            }
          ]
        },
        {
          id: "c7-dig-ch3",
          chapterNumber: 3,
          title: "Visual Block Programming (Scratch Basics)",
          titleBangla: "৩য় অধ্যায়: ভিজ্যুয়াল ব্লক প্রোগ্রামিং ও অ্যালগরিদম",
          lessons: [
            {
              id: "c7-dig-ch3-l1",
              point: "৩.১",
              title: "Sprites, Motions, and Loops in Scratch",
              titleBangla: "৩.১ স্প্রাইট নিয়ন্ত্রণ, মুভমেন্ট ব্লক ও লুপের ব্যবহার",
              summary: "রঙিন ব্লকের মাধ্যমে চরিত্র নড়াচড়া করানো এবং রিপিট (Repeat) লুপ প্রয়োগ।",
              keywords: ["স্ক্র্যাচ", "স্প্রাইট", "ব্লক প্রোগ্রামিং", "লুপ"]
            },
            {
              id: "c7-dig-ch3-l2",
              point: "৩.২",
              title: "Conditionals (If-Else) and Interactive Game Coding",
              titleBangla: "৩.২ শর্তযুক্ত কমান্ড (If-Else) ও সাধারণ গেম তৈরি",
              summary: "কীবোর্ড অ্যারো কি দিয়ে নিয়ন্ত্রিত চরিত্র এবং স্কোরবোর্ড লজিক তৈরি।",
              keywords: ["কন্ডিশনাল", "If-Else", "গেম প্রোগ্রামিং", "অ্যালগরিদম"]
            }
          ]
        },
        {
          id: "c7-dig-ch4",
          chapterNumber: 4,
          title: "Information Communication and Online Services",
          titleBangla: "৪র্থ অধ্যায়: তথ্য যোগাযোগ ও নাগরিক ই-সেবা",
          lessons: [
            {
              id: "c7-dig-ch4-l1",
              point: "৪.১",
              title: "Email Communication and Cloud Storage Sharing",
              titleBangla: "৪.১ পেশাদার ইমেইল শিষ্টাচার ও ক্লাউড ড্রাইভ শেয়ারিং",
              summary: "সাবজেক্ট লাইন, সংযুক্তি (Attachment) ও গুগল ড্রাইভের লিঙ্ক পারমিশন নিয়ন্ত্রণ।",
              keywords: ["ইমেইল", "ক্লাউড স্টোরেজ", "গুগল ড্রাইভ", "ডিজিটাল শিষ্টাচার"]
            },
            {
              id: "c7-dig-ch4-l2",
              point: "৪.২",
              title: "Public E-Services (Birth Certificate, Result Checking)",
              titleBangla: "৪.২ সরকারি ডিজিটাল সেবা (জন্মনিবন্ধন, ফলাফল ও ই-পাসপোর্ট)",
              summary: "অনলাইন পোর্টালে ফর্ম পূরণ ও নাগরিক সেবার আধুনিক সুবিধা ব্যবহার।",
              keywords: ["ই-সেবা", "ডিজিটাল বাংলাদেশ", "অনলাইন ফর্ম"]
            }
          ]
        },
        {
          id: "c7-dig-ch5",
          chapterNumber: 5,
          title: "Computer Networks and Internet Architecture",
          titleBangla: "৫ম অধ্যায়: কম্পিউটার নেটওয়ার্ক ও ইন্টারনেট প্রযুক্তি",
          lessons: [
            {
              id: "c7-dig-ch5-l1",
              point: "৫.১",
              title: "LAN, Wi-Fi, Routers and IP Addresses",
              titleBangla: "৫.১ লোকাল এরিয়া নেটওয়ার্ক (LAN), ওয়াই-ফাই ও রাউটার",
              summary: "ডিভাইসগুলোর মধ্যে তারযুক্ত ও বেতার সংযোগ এবং আইপি অ্যাড্রেসের পরিচয়।",
              keywords: ["নেটওয়ার্ক", "ওয়াই-ফাই", "রাউটার", "আইপি অ্যাড্রেস"]
            }
          ]
        },
        {
          id: "c7-dig-ch6",
          chapterNumber: 6,
          title: "Creating Digital Solutions and Tech Projects",
          titleBangla: "৬ষ্ঠ অধ্যায়: ডিজিটাল সমাধান প্রণয়ন ও বাস্তব প্রকল্প",
          lessons: [
            {
              id: "c7-dig-ch6-l1",
              point: "৬.১",
              title: "Designing School Attendance or Notice Board System",
              titleBangla: "৬.১ বিদ্যালয়ের ডিজিটাল নোটিশ বা লাইব্রেরি ব্যবস্থার রূপরেখা",
              summary: "সমস্যা চিহ্নিতকরণ থেকে শুরু করে ডিজিটাল ফর্ম ও ডেটাশিটে বাস্তবায়ন।",
              keywords: ["প্রকল্প", "ডিজিটাল সমাধান", "সিস্টেম ডিজাইন"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৮. জীবন ও জীবিকা (Life and Livelihood)
    // ====================================================
    {
      id: "c7-life-livelihood",
      code: "LIFE-07",
      name: "Life and Livelihood",
      nameBangla: "জীবন ও জীবিকা",
      group: "General",
      coverColor: "from-teal-600 to-green-850",
      chapters: [
        {
          id: "c7-life-ch1",
          chapterNumber: 1,
          title: "Family Budgeting and Prudent Financial Habits",
          titleBangla: "১ম অধ্যায়: আর্থিক পরিকল্পনা ও কাজের রূপরেখা",
          lessons: [
            {
              id: "c7-life-ch1-l1",
              point: "১.১",
              title: "Tracking Household Expenses and Eliminating Waste",
              titleBangla: "১.১ পারিবারিক ব্যয় হিসাব ও মিতব্যয়িতার কৌশল",
              summary: "মাসিক খরচের ডায়েরি লেখা, অপচয় কমানো এবং সাশ্রয়ী জীবনযাপন।",
              keywords: ["বাজেট", "মিতব্যয়িতা", "পরিকল্পনা", "হিসাবরক্ষণ"]
            },
            {
              id: "c7-life-ch1-l2",
              point: "১.২",
              title: "Saving Goals and Banking Basics",
              titleBangla: "১.২ দীর্ঘমেয়াদী সঞ্চয় লক্ষ্য ও ব্যাংকিং পরিচিতি",
              summary: "স্কুল ব্যাংকিং অ্যাকাউন্ট ও সঞ্চয়ের মাধ্যমে জরুরি তহবিল গড়ে তোলা।",
              keywords: ["সঞ্চয়", "স্কুল ব্যাংকিং", "আর্থিক সচেতনতা"]
            }
          ]
        },
        {
          id: "c7-life-ch2",
          chapterNumber: 2,
          title: "Evolving Professions and Future Work World",
          titleBangla: "২য় অধ্যায়: পেশার রূপান্তর ও আগামীর প্রস্তুতি",
          lessons: [
            {
              id: "c7-life-ch2-l1",
              point: "২.১",
              title: "Green Jobs, Tech Careers, and Entrepreneurship",
              titleBangla: "২.১ পরিবেশবান্ধব পেশা (Green Jobs) ও তথ্যপ্রযুক্তি ক্যারিয়ার",
              summary: "সৌরশক্তি প্রকৌশল, অর্গানিক কৃষি ও ফ্রিল্যান্সিং পেশার চাহিদা।",
              keywords: ["গ্রিন জবস", "ফ্রিল্যান্সিং", "প্রযুক্তি পেশা", "উদ্যোক্তা"]
            },
            {
              id: "c7-life-ch2-l2",
              point: "২.২",
              title: "21st Century Skills: Problem Solving and Adaptability",
              titleBangla: "২.২ একবিংশ শতাব্দীর দক্ষতা: সমস্যা সমাধান ও অভিযোজনশীলতা",
              summary: "নতুন প্রযুক্তি দ্রুত আয়ত্ত করা, সমালোচনামূলক চিন্তা ও সহযোগিতামূলক কাজ।",
              keywords: ["একবিংশ শতাব্দীর দক্ষতা", "সমস্যা সমাধান", "অভিযোজন"]
            }
          ]
        },
        {
          id: "c7-life-ch3",
          chapterNumber: 3,
          title: "Self-reliant Hands-on Projects",
          titleBangla: "৩য় অধ্যায়: স্বাবলম্বী প্রকল্প ও সৃজনশীল উদ্যোগ",
          lessons: [
            {
              id: "c7-life-ch3-l1",
              point: "৩.১",
              title: "Rooftop Gardening and Organic Composting",
              titleBangla: "৩.১ ছাদবাগান, পুষ্টিবাগান ও জৈব কম্পোস্ট সার তৈরি",
              summary: "বাড়ির সবজির খোসা দিয়ে সার তৈরি এবং টবে নিরাপদ সবজি চাষ।",
              keywords: ["ছাদবাগান", "জৈব সার", "কম্পোস্ট", "স্বাবলম্বন"]
            },
            {
              id: "c7-life-ch3-l2",
              point: "৩.২",
              title: "Handicrafts, Sewing and Minor Home Repairs",
              titleBangla: "৩.২ হস্তশিল্প, পোশাক সেলাই ও গৃহস্থালি মেরামত",
              summary: "বোতাম লাগানো, কাপড়ে সাধারণ নকশা ও গৃহস্থালি আসবাবের যত্ন নেওয়া।",
              keywords: ["হস্তশিল্প", "সেলাই", "মেরামত", "গৃহস্থালি দক্ষতা"]
            }
          ]
        },
        {
          id: "c7-life-ch4",
          chapterNumber: 4,
          title: "Dignity of Labor and Mutual Respect",
          titleBangla: "৪র্থ অধ্যায়: শ্রমের মর্যাদা ও মানবিক মূল্যবোধ",
          lessons: [
            {
              id: "c7-life-ch4-l1",
              point: "৪.১",
              title: "Valuing Domestic and Manual Labor Equally",
              titleBangla: "৪.১ গৃহকর্মে সহায়তা ও সকল শ্রমের প্রতি শ্রদ্ধা",
              summary: "পরিচ্ছন্নতাকর্মী, দিনমজুর ও গৃহকর্মীদের কাজের অপরিহার্য ভূমিকা অনুধাবন।",
              keywords: ["শ্রমের মর্যাদা", "গৃহকর্ম", "শ্রদ্ধাবোধ", "সামাজিক সমতা"]
            }
          ]
        },
        {
          id: "c7-life-ch5",
          chapterNumber: 5,
          title: "Team Ventures and School Canteen Management",
          titleBangla: "৫ম অধ্যায়: দলগত উদ্যোগ ও আনন্দমেলা পরিচালনা",
          lessons: [
            {
              id: "c7-life-ch5-l1",
              point: "৫.১",
              title: "Collaborative Planning, Budgeting and Stall Setup",
              titleBangla: "৫.১ দলবদ্ধভাবে স্টল পরিকল্পনা, আয়-ব্যয় হিসাব ও পণ্য বিক্রি",
              summary: "বিদ্যালয় মেলায় দলগতভাবে হস্তশিল্প বা স্বাস্থ্যকর খাবারের স্টল পরিচালনা।",
              keywords: ["দলগত উদ্যোগ", "আনন্দমেলা", "উদ্যোক্তা", "স্টল"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ৯. স্বাস্থ্য সুরক্ষা (Health and Wellbeing)
    // ====================================================
    {
      id: "c7-health-wellbeing",
      code: "HLT-07",
      name: "Health and Wellbeing",
      nameBangla: "স্বাস্থ্য সুরক্ষা",
      group: "General",
      coverColor: "from-rose-600 to-pink-850",
      chapters: [
        {
          id: "c7-hlt-ch1",
          chapterNumber: 1,
          title: "Adolescent Care and Mental Wellbeing",
          titleBangla: "১ম অধ্যায়: বয়ঃসন্ধির যত্ন ও মানসিক সুস্থতা",
          lessons: [
            {
              id: "c7-hlt-ch1-l1",
              point: "১.১",
              title: "Physical and Emotional Growth Management",
              titleBangla: "১.১ শারীরিক ও আবেগীয় পরিবর্তন স্বাভাবিকভাবে মোকাবেলা",
              summary: "হরমোনের পরিবর্তনের কারণে মেজাজের ওঠানামা সামলানো ও সঠিক স্বাস্থ্যবিধি।",
              keywords: ["বয়ঃসন্ধি", "মানসিক স্বাস্থ্য", "শারীরিক পরিবর্তন", "স্বাস্থ্যবিধি"]
            },
            {
              id: "c7-hlt-ch1-l2",
              point: "১.২",
              title: "Stress Relief, Empathy and Conflict Resolution",
              titleBangla: "১.২ মানসিক চাপ নিয়ন্ত্রণ, সহমর্মিতা ও দ্বন্দ্ব নিরসন",
              summary: "পরীক্ষার উদ্বেগ কমানোর শ্বাস-প্রশ্বাসের ব্যায়াম ও ইতিবাচক দৃষ্টিভঙ্গি।",
              keywords: ["মানসিক চাপ", "উদ্বেগ", "সহমর্মিতা", "দ্বন্দ্ব নিরসন"]
            }
          ]
        },
        {
          id: "c7-hlt-ch2",
          chapterNumber: 2,
          title: "Sports, Fitness and Endurance",
          titleBangla: "২য় অধ্যায়: দলগত খেলাধুলা ও শারীরিক সক্ষমতা",
          lessons: [
            {
              id: "c7-hlt-ch2-l1",
              point: "২.১",
              title: "Team Sports Rules (Football, Volleyball) & Fair Play",
              titleBangla: "২.১ দলগত খেলাধুলা, সহযোগিতা ও ক্রীড়াসুলভ মনোভাব",
              summary: "নিয়ম মেনে খেলা, হার-জিতকে সহজভাবে নেওয়া ও নেতৃত্বের গুণাবলী।",
              keywords: ["ফুটবল", "ভলিবল", "দলগত খেলা", "ক্রীড়াসুলভ মনোভাব"]
            },
            {
              id: "c7-hlt-ch2-l2",
              point: "২.২",
              title: "Aerobic Exercises and Posture Alignment",
              titleBangla: "২.২ অ্যারোবিক ব্যায়াম, সঠিক শারীরিক ভঙ্গি ও যোগাসন",
              summary: "দৈনন্দিন জীবনে মেরুদণ্ড সোজা রাখা, স্ট্রেচিং ও ফুসফুসের কার্যক্ষমতা বৃদ্ধি।",
              keywords: ["ব্যায়াম", "যোগাসন", "শারীরিক ভঙ্গি", "ফিটনেস"]
            }
          ]
        },
        {
          id: "c7-hlt-ch3",
          chapterNumber: 3,
          title: "Substance Abuse and Negative Pressure Prevention",
          titleBangla: "৩য় অধ্যায়: ক্ষতিকর নেশা ও মাদক পরিহার",
          lessons: [
            {
              id: "c7-hlt-ch3-l1",
              point: "৩.১",
              title: "Saying No Assertively to Tobacco and Harmful Substances",
              titleBangla: "৩.১ ধূমপান ও ক্ষতিকর আসক্তিকে দৃঢ়ভাবে 'না' বলা",
              summary: "বন্ধুদের নেতিবাচক প্ররোচনা এড়িয়ে চলা এবং সুস্থ জীবনধারায় অবিচল থাকা।",
              keywords: ["মাদক প্রতিরোধ", "ধূমপান বর্জন", "দৃঢ় মনোভাব", "সুস্থ জীবন"]
            }
          ]
        },
        {
          id: "c7-hlt-ch4",
          chapterNumber: 4,
          title: "Balanced Diet and Nutrition Management",
          titleBangla: "৪র্থ অধ্যায়: সুষম খাদ্য ও পুষ্টি ব্যবস্থাপনা",
          lessons: [
            {
              id: "c7-hlt-ch4-l1",
              point: "৪.১",
              title: "Six Food Nutrients and Adolescent Calorie Needs",
              titleBangla: "৪.১ খাদ্যের ছয়টি উপাদান ও কৈশোরের পুষ্টির চাহিদা",
              summary: "শর্করা, আমিষ, স্নেহ, ভিটামিন, খনিজ লবণ ও পানির সুষম অনুপাত তৈরি।",
              keywords: ["সুষম খাদ্য", "পুষ্টি", "ভিটামিন", "ক্যালোরি"]
            },
            {
              id: "c7-hlt-ch4-l2",
              point: "৪.২",
              title: "Junk Food Risks and Safe Food Preservation",
              titleBangla: "৪.২ জাঙ্ক ফুডের ক্ষতিকর দিক ও খাদ্য নিরাপত্তা",
              summary: "অতিরিক্ত তেল-চর্বিযুক্ত ফাস্টফুড পরিহার ও খাদ্য বিষক্রিয়া থেকে সুরক্ষা।",
              keywords: ["জাঙ্ক ফুড", "স্থূলতা", "খাদ্য নিরাপত্তা"]
            }
          ]
        },
        {
          id: "c7-hlt-ch5",
          chapterNumber: 5,
          title: "First Aid and Emergency Response",
          titleBangla: "৫ম অধ্যায়: প্রাথমিক চিকিৎসা ও দুর্যোগকালীন নিরাপত্তা",
          lessons: [
            {
              id: "c7-hlt-ch5-l1",
              point: "৫.১",
              title: "Treating Cuts, Burns, and Sprains",
              titleBangla: "৫.১ রক্তপাত বন্ধ, পোড়া ক্ষত ও মচকে যাওয়ার প্রাথমিক শুশ্রূষা",
              summary: "অ্যান্টিসেপ্টিক ব্যবহার, ঠাণ্ডা পানি ঢালা এবং ব্যান্ডেজ বাঁধার নিয়মাবলী।",
              keywords: ["প্রাথমিক চিকিৎসা", "ব্যান্ডেজ", "ক্ষত শুশ্রূষা", "ফার্স্ট এইড"]
            },
            {
              id: "c7-hlt-ch5-l2",
              point: "৫.২",
              title: "Snakebite, Drowning and Heatstroke Action Protocol",
              titleBangla: "৫.২ সাপে কাটা, পানিতে ডোবা ও হিটস্ট্রোককালীন দ্রুত পদক্ষেপ",
              summary: "জরুরি সেবা হটলাইনে কল এবং কৃত্রিম শ্বাস-প্রশ্বাস (CPR) সংক্রান্ত প্রাথমিক জ্ঞান।",
              keywords: ["হিটস্ট্রোক", "সাপে কাটা", "সিপিআর", "জরুরি সেবা"]
            }
          ]
        },
        {
          id: "c7-hlt-ch6",
          chapterNumber: 6,
          title: "Personal Safety, Boundaries and Safe Environment",
          titleBangla: "৬ষ্ঠ অধ্যায়: ব্যক্তিগত নিরাপত্তা ও সুরক্ষিত পরিবেশ",
          lessons: [
            {
              id: "c7-hlt-ch6-l1",
              point: "৬.১",
              title: "Safe Touch, Unsafe Touch and Self-Protection",
              titleBangla: "৬.১ নিরাপদ স্পর্শ, অনিরাপদ স্পর্শ ও আত্মরক্ষা কৌশল",
              summary: "ব্যক্তিগত সীমানা রক্ষা, অস্বস্তিকর স্পর্শে চিৎকার করে সাহায্য চাওয়া ও বিশ্বস্ত ব্যক্তিকে জানানো।",
              keywords: ["নিরাপদ স্পর্শ", "আত্মরক্ষা", "ব্যক্তিগত নিরাপত্তা", "শিশু সুরক্ষা"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১০. শিল্প ও সংস্কৃতি (Art and Culture)
    // ====================================================
    {
      id: "c7-art-culture",
      code: "ART-07",
      name: "Art and Culture",
      nameBangla: "শিল্প ও সংস্কৃতি",
      group: "General",
      coverColor: "from-fuchsia-600 to-purple-850",
      chapters: [
        {
          id: "c7-art-ch1",
          chapterNumber: 1,
          title: "Folk Songs and Melody Traditions",
          titleBangla: "১ম অধ্যায়: লোকসঙ্গীত ও সুরের মূর্ছনা",
          lessons: [
            {
              id: "c7-art-ch1-l1",
              point: "১.১",
              title: "Bhatiali, Bhawaiya, Jhumur and Lalon Geeti Appreciation",
              titleBangla: "১.১ ভাটিয়ালি, ভাওয়াইয়া, ঝুমুর ও লালনগীতির মাধুর্য",
              summary: "মাঝি-মাল্লা ও গ্রামীণ জীবনের সুরের সাথে আঞ্চলিক বাদ্যযন্ত্রের মেলবন্ধন।",
              keywords: ["লোকসঙ্গীত", "ভাটিয়ালি", "ভাওয়াইয়া", "লালনগীতি"]
            },
            {
              id: "c7-art-ch1-l2",
              point: "১.২",
              title: "Traditional Instruments: Ektara, Dotara, Flute and Dhol",
              titleBangla: "১.২ একতারা, দোতারা, বাঁশি ও ঢোলের তালের মূর্ছনা",
              summary: "দেশজ বাদ্যযন্ত্রের ধ্বনি বৈশিষ্ট্য এবং লোকজ গানে তালের সঙ্গত।",
              keywords: ["একতারা", "দোতারা", "বাঁশি", "লোক বাদ্যযন্ত্র"]
            }
          ]
        },
        {
          id: "c7-art-ch2",
          chapterNumber: 2,
          title: "Visual Art Collage and Creative Crafting",
          titleBangla: "২য় অধ্যায়: কোলাজ শিল্প ও রূপক দৃশ্যকলা",
          lessons: [
            {
              id: "c7-art-ch2-l1",
              point: "২.১",
              title: "Paper Collage and Waste Material Art Installation",
              titleBangla: "২.১ ফেলে দেওয়া কাগজ ও কাপড়ের টুকরো দিয়ে কোলাজ তৈরি",
              summary: "পুনর্ব্যবহারযোগ্য উপাদান দিয়ে দৃষ্টিনন্দন শিল্পকর্ম সৃষ্টির দক্ষতা।",
              keywords: ["কোলাজ", "দৃশ্যশিল্প", "পুনর্ব্যবহার", "সৃজনশীলতা"]
            },
            {
              id: "c7-art-ch2-l2",
              point: "২.২",
              title: "Nature Sketching, Perspective and Shadow Play",
              titleBangla: "২.২ প্রকৃতির রূপরেখা স্কেচ, পরিপ্রেক্ষিত ও ছায়া-আলোর বিন্যাস",
              summary: "পেনসিল শেডিংয়ের মাধ্যমে ত্রিমাত্রিক গভীরতা ফুটিয়ে তোলা।",
              keywords: ["স্কেচ", "পরিপ্রেক্ষিত", "ছায়া-আলো", "চিত্রাঙ্কন"]
            }
          ]
        },
        {
          id: "c7-art-ch3",
          chapterNumber: 3,
          title: "Puppet Theatre and Cultural Presentation",
          titleBangla: "৩য় অধ্যায়: ঐতিহ্যবাহী পুতুলনাট্য ও চিত্রনাট্য পরিবেশনা",
          lessons: [
            {
              id: "c7-art-ch3-l1",
              point: "৩.১",
              title: "Puppet Making and Voice Acting for Social Awareness",
              titleBangla: "৩.১ সুতা ও গ্লাভস পুতুল তৈরি এবং সমাজ সচেতনতামূলক নাট্যাভিনয়",
              summary: "পুতুল নাচের মাধ্যমে বাল্যবিয়ে ও পরিবেশ দূষণ রোধের গল্প উপস্থাপন।",
              keywords: ["পুতুলনাট্য", "চিত্রনাট্য", "ভয়েস অ্যাক্টিং", "সমাজ সচেতনতা"]
            }
          ]
        },
        {
          id: "c7-art-ch4",
          chapterNumber: 4,
          title: "Terracotta and Clay Sculpting Heritage",
          titleBangla: "৪র্থ অধ্যায়: মৃৎশিল্প ও লোকজ ভাস্কর্য",
          lessons: [
            {
              id: "c7-art-ch4-l1",
              point: "৪.১",
              title: "Traditional Terracotta Plaques (Kantanagar & Paharpur)",
              titleBangla: "৪.১ কান্তজিউ মন্দির ও পাহাড়পুরের পোড়ামাটির ফলক শিল্প",
              summary: "ঐতিহাসিক টেরাকোটার বিষয়বস্তু, কারিগরী কৌশল ও মাটির পাত্রে নকশা অঙ্কন।",
              keywords: ["মৃৎশিল্প", "টেরাকোটা", "পোড়ামাটির ফলক", "ঐতিহ্য"]
            },
            {
              id: "c7-art-ch4-l2",
              point: "৪.২",
              title: "Clay Modeling of Animals, Fruits and Masks",
              titleBangla: "৪.২ কাদা মাটি দিয়ে ফলমূল, পশুপাখি ও মুখোশ তৈরি",
              summary: "মাটি নরম করে হাতের ছোঁয়ায় ত্রিমাত্রিক অবয়ব তৈরির ব্যবহারিক চর্চা।",
              keywords: ["কাদামাটি", "মুখোশ তৈরি", "ভাস্কর্য", "হস্তশিল্প"]
            }
          ]
        },
        {
          id: "c7-art-ch5",
          chapterNumber: 5,
          title: "Theatre and Dramatic Expression",
          titleBangla: "৫ম অধ্যায়: মঞ্চ নাটক ও দলগত অভিনয়",
          lessons: [
            {
              id: "c7-art-ch5-l1",
              point: "৫.১",
              title: "Voice Modulation, Body Movement and Character Enactment",
              titleBangla: "৫.১ বাচিক অভিনয়, শারীরিক ভাষা ও চরিত্রের রূপায়ণ",
              summary: "মঞ্চে উপস্থিত বুদ্ধি, সংলাপের ওঠানামা এবং আবেগ প্রকাশের অনুশীলন।",
              keywords: ["মঞ্চ নাটক", "অভিনয়", "সংলাপ প্রক্ষেপণ", "চরিত্র রূপায়ণ"]
            }
          ]
        },
        {
          id: "c7-art-ch6",
          chapterNumber: 6,
          title: "Seasonal Festivals and Cultural Processions",
          titleBangla: "৬ষ্ঠ অধ্যায়: ঋতুভিত্তিক উৎসব ও সাংস্কৃতিক শোভাযাত্রা",
          lessons: [
            {
              id: "c7-art-ch6-l1",
              point: "৬.১",
              title: "Pahela Baishakh, Mangal Shobhajatra and Folk Motifs",
              titleBangla: "৬.১ পহেলা বৈশাখ, মঙ্গল শোভাযাত্রা ও লোকজ মোটিফ",
              summary: "পেঁচা, বাঘের মুখ, হাতপাখা ও রঙিন পটচিত্রের মাধ্যমে সার্বজনীন মিলনমেলা।",
              keywords: ["পহেলা বৈশাখ", "মঙ্গল শোভাযাত্রা", "লোকজ মোটিফ", "উৎসব"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১১. ইসলাম শিক্ষা ও নৈতিকতা (Islamic Studies & Ethics)
    // ====================================================
    {
      id: "c7-islamic-studies",
      code: "ISL-07",
      name: "Islamic Studies and Ethics",
      nameBangla: "ইসলাম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-emerald-700 to-teal-950",
      chapters: [
        {
          id: "c7-isl-ch1",
          chapterNumber: 1,
          title: "Aqeedah and Asmaul Husna",
          titleBangla: "১ম অধ্যায়: আকাইদ ও আসমাউল হুসনা",
          lessons: [
            {
              id: "c7-isl-ch1-l1",
              point: "১.১",
              title: "Attributes of Allah: Ar-Rahman, Al-Aleem, Al-Hakim",
              titleBangla: "১.১ আল্লাহর সুন্দরতম গুণবাচক নামসমূহের অর্থ ও জীবনে প্রয়োগ",
              summary: "দয়ালু, সর্বজ্ঞাত ও প্রজ্ঞাময় আল্লাহর গুণাবলির স্মরণে মানবিক গুণ অর্জন।",
              keywords: ["আসমাউল হুসনা", "আল্লাহর গুণবাচক নাম", "আকাইদ", "তাওহিদ"]
            },
            {
              id: "c7-isl-ch1-l2",
              point: "১.২",
              title: "Belief in Prophets and Khatamun Nabiyyeen",
              titleBangla: "১.২ নবি-রাসুলদের প্রতি ঈমান ও শেষ নবির মর্যাদা",
              summary: "মানবজাতির হেদায়েতে রাসুলগণের শিক্ষা ও হযরত মুহাম্মদ (সা.)-এর সমাপ্তি।",
              keywords: ["রিসালাত", "খাতামুন্নাবিয়্যীন", "নবি রাসুল"]
            }
          ]
        },
        {
          id: "c7-isl-ch2",
          chapterNumber: 2,
          title: "Ibadah: Sawm (Fasting) and Zakat",
          titleBangla: "২য় অধ্যায়: ইবাদত (সিয়াম ও জাকাতের শিক্ষা)",
          lessons: [
            {
              id: "c7-isl-ch2-l1",
              point: "২.১",
              title: "Philosophy of Ramadan Fasting and Self-Restraint",
              titleBangla: "২.১ মাহে রমজানের সিয়াম সাধনা, তাকওয়া ও আত্মশুদ্ধি",
              summary: "ক্ষুধা ও তৃষ্ণা সহ্যের মাধ্যমে গরিবের কষ্ট অনুধাবন এবং রিপু দমন।",
              keywords: ["সিয়াম", "রোজা", "তাকওয়া", "রমজান"]
            },
            {
              id: "c7-isl-ch2-l2",
              point: "২.২",
              title: "Sadaqah, Charity, and Eradication of Poverty",
              titleBangla: "২.২ সদকা, ফিতরা ও দানশীলতার সামাজিক গুরুত্ব",
              summary: "সমাজের দুস্থদের পাশে দাঁড়ানো এবং ভ্রাতৃত্ববোধ বৃদ্ধির উপায়।",
              keywords: ["সদকা", "ফিতরা", "দানশীলতা", "সামাজিক সাম্য"]
            }
          ]
        },
        {
          id: "c7-isl-ch3",
          chapterNumber: 3,
          title: "Quran and Hadith Studies",
          titleBangla: "৩য় অধ্যায়: কুরআন ও হাদিস শিক্ষা",
          lessons: [
            {
              id: "c7-isl-ch3-l1",
              point: "৩.১",
              title: "Surah Ad-Duha and Surah Al-Inshirah Meanings",
              titleBangla: "৩.১ সূরা আদ-দুহা ও সূরা আল-ইনশিরাহ-এর শিক্ষা",
              summary: "কঠিন বিপদেও আল্লাহর রহমতের ওপর ভরসা রাখা এবং আশাবাদী হওয়া।",
              keywords: ["সূরা আদ দুহা", "সূরা ইনশিরাহ", "কুরআন", "তাফসির"]
            },
            {
              id: "c7-isl-ch3-l2",
              point: "৩.২",
              title: "Hadiths on Dignity of Labor and Honesty in Trade",
              titleBangla: "৩.২ শ্রমের মর্যাদা ও ব্যবসায়ে সততা সংক্রান্ত হাদিস",
              summary: "নিজের উপার্জিত খাবার সর্বোত্তম এবং শ্রমিকের গায়ের ঘাম শুকানোর আগে মজুরি প্রদান।",
              keywords: ["শ্রমের মর্যাদা", "হাদিস", "সততা", "ব্যবসা"]
            }
          ]
        },
        {
          id: "c7-isl-ch4",
          chapterNumber: 4,
          title: "Akhlaq and Moral Purification",
          titleBangla: "৪র্থ অধ্যায়: আখলাক ও নৈতিকতা",
          lessons: [
            {
              id: "c7-isl-ch4-l1",
              point: "৪.১",
              title: "Respect to Elders, Affection to Juniors and Forgiveness",
              titleBangla: "৪.১ বড়দের সম্মান, ছোটদের স্নেহ এবং ক্ষমাশীলতার আদর্শ",
              summary: "প্রতিশোধ না নিয়ে ক্ষমা করার মহত্ত্ব এবং সমাজের দুর্বলদের সহযোগিতা।",
              keywords: ["আখলাক", "ক্ষমাশীলতা", "স্নেহ", "শ্রদ্ধা"]
            },
            {
              id: "c7-isl-ch4-l2",
              point: "৪.২",
              title: "Avoiding Backbiting (Gheebat), Jealousy and Arrogance",
              titleBangla: "৪.২ পরনিন্দা (গিবত), হিংসা ও অহংকার বর্জন",
              summary: "গিবতকে মৃত ভাইয়ের মাংস খাওয়ার মতো জঘন্য অপরাধ হিসেবে পরিহার করা।",
              keywords: ["গিবত", "পরনিন্দা", "হিংসা", "অহংকার বর্জন"]
            }
          ]
        },
        {
          id: "c7-isl-ch5",
          chapterNumber: 5,
          title: "Exemplary Life: Migration to Madinah and Charter",
          titleBangla: "৫ম অধ্যায়: আদর্শ জীবনচরিত (হিজরত ও মদিনা সনদ)",
          lessons: [
            {
              id: "c7-isl-ch5-l1",
              point: "৫.১",
              title: "Hijrah to Madinah and the Historic Madinah Charter",
              titleBangla: "৫.১ মদিনায় হিজরত ও পৃথিবীর প্রথম লিখিত সংবিধান 'মদিনা সনদ'",
              summary: "সকল ধর্মাবলম্বীদের সমান নাগরিক অধিকার ও সাম্প্রদায়িক সম্প্রীতির অনন্য দলিল।",
              keywords: ["হিজরত", "মদিনা সনদ", "সংবিধান", "সাম্প্রদায়িক সম্প্রীতি"]
            },
            {
              id: "c7-isl-ch5-l2",
              point: "৫.২",
              title: "Lives of Caliphs: Hazrat Abu Bakr (R) and Umar (R)",
              titleBangla: "৫.২ খলিফাদের জীবন ও ন্যায়পরায়ণ শাসন (হযরত আবু বকর ও উমর রা.)",
              summary: "সাধারণ প্রজার মতো জীবনযাপন, রাজকোষের আমানত রক্ষা এবং সমতার নজির।",
              keywords: ["খোলাফায়ে রাশেদীন", "আবু বকর", "উমর", "ন্যায়বিচার"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১২. হিন্দুধর্ম শিক্ষা ও নৈতিকতা (Hindu Religious Studies)
    // ====================================================
    {
      id: "c7-hindu-studies",
      code: "HIN-07",
      name: "Hindu Religious Studies and Ethics",
      nameBangla: "হিন্দুধর্ম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-amber-600 to-red-850",
      chapters: [
        {
          id: "c7-hin-ch1",
          chapterNumber: 1,
          title: "Nature of God and Devotion",
          titleBangla: "১ম অধ্যায়: স্রষ্টা ও সৃষ্টি এবং ঈশ্বরের স্বরূপ",
          lessons: [
            {
              id: "c7-hin-ch1-l1",
              point: "১.১",
              title: "Brahman, Ishwar and Avatar Concepts",
              titleBangla: "১.১ ব্রহ্ম, ঈশ্বর ও অবতারের ধারণা",
              summary: "নির্গুণ ব্রহ্ম ও সগুণ ঈশ্বরের রূপ এবং দুষ্টের দমন ও শিষ্টের পালনে অবতারের আগমন।",
              keywords: ["ব্রহ্ম", "ঈশ্বর", "অবতার", "সৃষ্টিরহস্য"]
            },
            {
              id: "c7-hin-ch1-l2",
              point: "১.২",
              title: "Bhakti Yoga and Universal Love",
              titleBangla: "১.২ ভক্তিতত্ত্ব ও সর্বভূতে ঈশ্বর দর্শন",
              summary: "সকল জীবের মধ্যে ঈশ্বরের অস্তিত্ব উপলব্ধি করে অহিংসা ও জীবে সেবা প্রদান।",
              keywords: ["ভক্তিতত্ত্ব", "জীবে প্রেম", "অহিংসা"]
            }
          ]
        },
        {
          id: "c7-hin-ch2",
          chapterNumber: 2,
          title: "Deities, Worship and Religious Festivals",
          titleBangla: "২য় অধ্যায়: দেবদেবী ও পূজাপার্বণ",
          lessons: [
            {
              id: "c7-hin-ch2-l1",
              point: "২.১",
              title: "Durga Puja, Saraswati Puja and Social Unity",
              titleBangla: "২.১ শারদীয় দুর্গোৎসব ও সরস্বতী পূজার সামাজিক তাৎপর্য",
              summary: "অশুভের বিরুদ্ধে শুভশক্তির জয় এবং বিদ্যার দেবী সরস্বতীর আরাধনার শিক্ষা।",
              keywords: ["দুর্গাপূজা", "সরস্বতী পূজা", "পূজাপার্বণ", "উৎসব"]
            }
          ]
        },
        {
          id: "c7-hin-ch3",
          chapterNumber: 3,
          title: "Sacred Scriptures: Srimad Bhagavad Gita",
          titleBangla: "৩য় অধ্যায়: ধর্মগ্রন্থ ও নৈতিক শিক্ষা (শ্রীমদ্ভগবদ্গীতা)",
          lessons: [
            {
              id: "c7-hin-ch3-l1",
              point: "৩.১",
              title: "Nishkama Karma (Selfless Action) in Gita",
              titleBangla: "৩.১ গীতায় নিষ্কাম কর্মযোগ ও কর্তব্যপরায়ণতা",
              summary: "কর্ম করে যাও কিন্তু ফলের আশা কোরো না—কর্তব্য নিষ্ঠার পরম বার্তা।",
              keywords: ["ভগবদ্গীতা", "নিষ্কাম কর্ম", "কর্মযোগ", "কর্তব্য"]
            }
          ]
        },
        {
          id: "c7-hin-ch4",
          chapterNumber: 4,
          title: "Yoga, Asanas and Healthy Living",
          titleBangla: "৪র্থ অধ্যায়: যোগসাধনা ও স্বাস্থ্যবিধি",
          lessons: [
            {
              id: "c7-hin-ch4-l1",
              point: "৪.১",
              title: "Pranayama, Padmasana and Mental Peace",
              titleBangla: "৪.১ প্রাণায়াম, পদ্মাসন ও মানসিক একাগ্রতা বৃদ্ধি",
              summary: "শ্বাস-প্রশ্বাসের নিয়ন্ত্রণ ও সুষম দেহভঙ্গির মাধ্যমে শারীরিক ও মানসিক সুস্থতা।",
              keywords: ["যোগাসন", "প্রাণায়াম", "পদ্মাসন", "একাগ্রতা"]
            }
          ]
        },
        {
          id: "c7-hin-ch5",
          chapterNumber: 5,
          title: "Exemplary Lives of Spiritual Masters",
          titleBangla: "৫ম অধ্যায়: মহাপুরুষ ও মহীয়সী নারীগণের জীবনী",
          lessons: [
            {
              id: "c7-hin-ch5-l1",
              point: "৫.১",
              title: "Sri Chaitanya Mahaprabhu and Swami Vivekananda",
              titleBangla: "৫.১ শ্রীচৈতন্য মহাপ্রভুর প্রেমধর্ম ও স্বামী বিবেকানন্দের মানবসেবা",
              summary: "বর্ণভেদহীন মানবতার বাণী এবং 'জীবে প্রেম করে যেই জন সেই জন সেবিছে ঈশ্বর'।",
              keywords: ["শ্রীচৈতন্য", "বিবেকানন্দ", "মানবসেবা", "প্রেমধর্ম"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১৩. খ্রিস্টধর্ম শিক্ষা ও নৈতিকতা (Christian Religious Studies)
    // ====================================================
    {
      id: "c7-christian-studies",
      code: "CHR-07",
      name: "Christian Religious Studies and Ethics",
      nameBangla: "খ্রিস্টধর্ম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-sky-700 to-indigo-950",
      chapters: [
        {
          id: "c7-chr-ch1",
          chapterNumber: 1,
          title: "God the Creator and Divine Love",
          titleBangla: "১ম অধ্যায়: ঈশ্বর ও সৃষ্টিজগতের প্রতি তাঁর ভালোবাসা",
          lessons: [
            {
              id: "c7-chr-ch1-l1",
              point: "১.১",
              title: "Creation Story and Stewardship of the Earth",
              titleBangla: "১.১ সৃষ্টি বিবরণী ও ঈশ্বরের সৃষ্টির যত্ন নেওয়ার দায়িত্ব",
              summary: "স্রষ্টার অপার মহিমা এবং মানবজাতির জন্য প্রকৃতি সংরক্ষণের ঐশ্বরিক আহ্বান।",
              keywords: ["ঈশ্বর", "সৃষ্টিজগৎ", "ভালোবাসা", "প্রকৃতি যত্ন"]
            }
          ]
        },
        {
          id: "c7-chr-ch2",
          chapterNumber: 2,
          title: "Life and Teachings of Jesus Christ",
          titleBangla: "২য় অধ্যায়: প্রভু যিশু খ্রিস্টের জীবন ও আত্মত্যাগ",
          lessons: [
            {
              id: "c7-chr-ch2-l1",
              point: "২.১",
              title: "Parables of the Good Samaritan and Prodigal Son",
              titleBangla: "২.১ ভালো শমরীয় ও অপব্যয়ী পুত্রের দৃষ্টান্তমূলক শিক্ষা",
              summary: "অসহায়কে জাতপাত না দেখে সাহায্য করা এবং ক্ষমাশীল পিতার অপার করুণা।",
              keywords: ["যিশু খ্রিস্ট", "শমরীয়", "ক্ষমা", "দৃষ্টান্ত"]
            }
          ]
        },
        {
          id: "c7-chr-ch3",
          chapterNumber: 3,
          title: "The Ten Commandments and Moral Life",
          titleBangla: "৩য় অধ্যায়: দশ আজ্ঞা ও নৈতিক অনুশাসন",
          lessons: [
            {
              id: "c7-chr-ch3-l1",
              point: "৩.১",
              title: "Loving God and Loving Neighbors As Yourself",
              titleBangla: "৩.১ প্রতিবেশীকে নিজের মতো ভালোবাসা ও সত্যবাদিতা",
              summary: "পবিত্র বাইবেলের দশ আজ্ঞা মেনে চলা এবং সমাজে শান্তি ও ন্যায় প্রতিষ্ঠা।",
              keywords: ["দশ আজ্ঞা", "প্রতিবেশী", "সত্যবাদিতা", "বাইবেল"]
            }
          ]
        },
        {
          id: "c7-chr-ch4",
          chapterNumber: 4,
          title: "Prayer, Fellowship and Forgiveness",
          titleBangla: "৪র্থ অধ্যায়: প্রার্থনা, ভ্রাতৃত্ববোধ ও ক্ষমা",
          lessons: [
            {
              id: "c7-chr-ch4-l1",
              point: "৪.১",
              title: "The Lord's Prayer and Reconciling Conflicts",
              titleBangla: "৪.১ প্রভু শেখানো প্রার্থনা ও বিরোধ মিটিয়ে পুনর্মিলন",
              summary: "অনুতাপ ও ক্ষমার মাধ্যমে পারিবারিক ও সামাজিক শান্তি স্থাপন।",
              keywords: ["প্রার্থনা", "ভ্রাতৃত্ববোধ", "পুনর্মিলন", "শান্তি"]
            }
          ]
        }
      ]
    },

    // ====================================================
    // ১৪. বৌদ্ধধর্ম শিক্ষা ও নৈতিকতা (Buddhist Religious Studies)
    // ====================================================
    {
      id: "c7-buddhist-studies",
      code: "BUD-07",
      name: "Buddhist Religious Studies and Ethics",
      nameBangla: "বৌদ্ধধর্ম শিক্ষা ও নৈতিকতা",
      group: "General",
      coverColor: "from-yellow-600 to-amber-900",
      chapters: [
        {
          id: "c7-bud-ch1",
          chapterNumber: 1,
          title: "Life of Gautama Buddha and Enlightenment",
          titleBangla: "১ম অধ্যায়: গৌতম বুদ্ধের অহিংসা ও বোধিলাভ",
          lessons: [
            {
              id: "c7-bud-ch1-l1",
              point: "১.১",
              title: "Siddhartha's Renunciation and Enlightenment under Bodhi Tree",
              titleBangla: "১.১ রাজপ্রাসাদ ত্যাগ, কঠোর সাধনা ও বোধিবৃক্ষের তলে জ্ঞানলাভ",
              summary: "জরা, ব্যাধি, মৃত্যু ও সন্ন্যাসী দর্শন করে মুক্তির সন্ধানে সিদ্ধার্থের গৃহত্যাগ।",
              keywords: ["গৌতম বুদ্ধ", "বোধিলাভ", "অহিংসা", "সিদ্ধার্থ"]
            }
          ]
        },
        {
          id: "c7-bud-ch2",
          chapterNumber: 2,
          title: "Four Noble Truths and Eightfold Path",
          titleBangla: "২য় অধ্যায়: চতুরার্য সত্য ও আর্য অষ্টাঙ্গিক মার্গ",
          lessons: [
            {
              id: "c7-bud-ch2-l1",
              point: "২.১",
              title: "Dukkha (Suffering), Cause, Cessation and the Path",
              titleBangla: "২.১ দুঃখের কারণ, দুঃখ নিরোধ ও মুক্তির পথ",
              summary: "তৃষ্ণা দূর করে আর্য অষ্টাঙ্গিক মার্গের মাধ্যমে নির্বাণ লাভ।",
              keywords: ["চতুরার্য সত্য", "অষ্টাঙ্গিক মার্গ", "নির্বাণ", "তৃষ্ণা নিরোধ"]
            }
          ]
        },
        {
          id: "c7-bud-ch3",
          chapterNumber: 3,
          title: "Pancha-Shila (Five Precepts) and Meditation",
          titleBangla: "৩য় অধ্যায়: পঞ্চশীল পালন ও ভাবনাসাধনা",
          lessons: [
            {
              id: "c7-bud-ch3-l1",
              point: "৩.১",
              title: "Practicing Non-violence, Truth and Mindfulness",
              titleBangla: "৩.১ জীবহত্যা না করা, সত্য বলা ও মৈত্রীভাবনা অনুশীলন",
              summary: "পঞ্চশীল মেনে নিজের মনকে শান্ত করা এবং বিপশ্যনা ধ্যানের প্রাথমিক অনুশীলন।",
              keywords: ["পঞ্চশীল", "মৈত্রীভাবনা", "ধ্যান", "অহিংসা"]
            }
          ]
        },
        {
          id: "c7-bud-ch4",
          chapterNumber: 4,
          title: "Tripitaka and Buddhist Heritage in Bengal",
          titleBangla: "৪র্থ অধ্যায়: ত্রিপিটক ও প্রাচীন বাংলার বৌদ্ধ ঐতিহ্য",
          lessons: [
            {
              id: "c7-bud-ch4-l1",
              point: "৪.১",
              title: "Vinaya, Sutta, Abhidhamma and Mahasthangarh/Paharpur",
              titleBangla: "৪.১ সুত্ত, বিনয়, অভিধর্ম পিটক এবং সোমপুর মহাবিহার ঐতিহ্য",
              summary: "ত্রিপিটকের তিন ভাগ এবং প্রাচীন বাংলার বৌদ্ধ পণ্ডিত অতীশ দীপঙ্করের অবদান।",
              keywords: ["ত্রিপিটক", "সোমপুর মহাবিহার", "অতীশ দীপঙ্কর", "বৌদ্ধ ঐতিহ্য"]
            }
          ]
        }
      ]
    }
  ]
};
