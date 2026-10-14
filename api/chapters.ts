import { CURRICULUM_DATA, Subject } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const subjectId = (req.query?.subjectId || '') as string;
  if (!subjectId) {
    return res.status(400).json({
      success: false,
      error: "Missing required query parameter 'subjectId'."
    });
  }

  let foundSubject: Subject | null = null;
  let foundClass: any = null;

  for (const c of CURRICULUM_DATA) {
    const s = c.subjects.find((sub) => sub.id === subjectId);
    if (s) {
      foundSubject = s;
      foundClass = c;
      break;
    }
  }

  if (!foundSubject || !foundClass) {
    return res.status(404).json({
      success: false,
      error: `Subject '${subjectId}' not found.`
    });
  }

  const chapters = foundSubject.chapters.map((ch) => ({
    id: ch.id,
    chapterNumber: ch.chapterNumber,
    title: ch.title,
    titleBangla: ch.titleBangla,
    subjectId: foundSubject!.id,
    subjectNameBangla: foundSubject!.nameBangla,
    classId: foundClass!.id,
    classNameBangla: foundClass!.nameBangla,
    lessonCount: ch.lessons.length,
    lessonsUrl: `/api/lessons?chapterId=${ch.id}`
  }));

  return res.status(200).json({
    success: true,
    classId: foundClass.id,
    subjectId: foundSubject.id,
    subjectNameBangla: foundSubject.nameBangla,
    total: chapters.length,
    data: chapters
  });
}
