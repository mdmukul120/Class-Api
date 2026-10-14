import { ClassGrade, Subject, Chapter, LessonPoint } from './types';
import { CLASS_6_DATA } from './classes/class6';
import { CLASS_7_DATA } from './classes/class7';
import { CLASS_8_DATA } from './classes/class8';
import { CLASS_9_DATA } from './classes/class9';
import { CLASS_10_DATA } from './classes/class10';
import { CLASS_11_DATA } from './classes/class11';
import { CLASS_12_DATA } from './classes/class12';

export * from './types';

export const CURRICULUM_DATA: ClassGrade[] = [
  CLASS_6_DATA,
  CLASS_7_DATA,
  CLASS_8_DATA,
  CLASS_9_DATA,
  CLASS_10_DATA,
  CLASS_11_DATA,
  CLASS_12_DATA
];
