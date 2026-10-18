import { ClassGrade } from '../types';
import { generateSecondaryGrade } from './secondarySubjects';

export const CLASS_9_DATA: ClassGrade = generateSecondaryGrade(
  9,
  "class-9",
  "৯ম শ্রেণি",
  "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অনুমোদিত নবম শ্রেণির বিজ্ঞান, মানবিক, ব্যবসায় শিক্ষা ও আবশ্যিক বিভাগের সকল পাঠ্যবই, পূর্ণাঙ্গ অধ্যায় ও শিখনফল পয়েন্ট"
);
