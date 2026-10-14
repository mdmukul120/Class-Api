export interface LessonPoint {
  id: string;
  point: string;
  title: string;
  titleBangla: string;
  summary: string;
  keywords: string[];
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  title: string;
  titleBangla: string;
  lessons: LessonPoint[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  nameBangla: string;
  group?: string;
  coverColor?: string;
  chapters: Chapter[];
}

export interface ClassGrade {
  id: string;
  numeric: number;
  name: string;
  nameBangla: string;
  stage: string;
  stageBangla: string;
  description: string;
  subjects: Subject[];
}
