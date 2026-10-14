import { CURRICULUM_DATA, Subject, Chapter } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const chapterId = (req.query?.chapterId || '') as string;
  if (!chapterId) {
    return res.status(400).json({
      success: false,
      error: "Missing required query parameter 'chapterId'."
    });
  }

  let foundLessonChapter: Chapter | null = null;
  let foundSubject: Subject | null = null;
  let foundClass: any = null;

  for (const c of CURRICULUM_DATA) {
    for (const s of c.subjects) {
      const ch = s.chapters.find((chapter) => chapter.id === chapterId);
      if (ch) {
        foundLessonChapter = ch;
        foundSubject = s;
        foundClass = c;
        break;
      }
    }
    if (foundLessonChapter) break;
  }

  if (!foundLessonChapter || !foundSubject || !foundClass) {
    return res.status(404).json({
      success: false,
      error: `Chapter '${chapterId}' not found.`
    });
  }

  return res.status(200).json({
    success: true,
    classId: foundClass.id,
    classNameBangla: foundClass.nameBangla,
    subjectId: foundSubject.id,
    subjectNameBangla: foundSubject.nameBangla,
    chapterId: foundLessonChapter.id,
    chapterTitleBangla: foundLessonChapter.titleBangla,
    total: foundLessonChapter.lessons.length,
    data: foundLessonChapter.lessons
  });
}
