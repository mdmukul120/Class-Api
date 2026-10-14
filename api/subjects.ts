import { CURRICULUM_DATA } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const classId = (req.query?.classId || '') as string;
  if (!classId) {
    const allSubjects = CURRICULUM_DATA.flatMap((c) =>
      c.subjects.map((s) => ({
        ...s,
        classId: c.id,
        classNameBangla: c.nameBangla,
        chaptersUrl: `/api/chapters?subjectId=${s.id}`
      }))
    );
    return res.status(200).json({ success: true, total: allSubjects.length, data: allSubjects });
  }

  const targetClass = CURRICULUM_DATA.find(
    (c) => c.id === classId || String(c.numeric) === classId
  );

  if (!targetClass) {
    return res.status(404).json({
      success: false,
      error: `Class '${classId}' not found.`
    });
  }

  const subjects = targetClass.subjects.map((s) => ({
    id: s.id,
    code: s.code,
    name: s.name,
    nameBangla: s.nameBangla,
    group: s.group,
    classId: targetClass.id,
    classNameBangla: targetClass.nameBangla,
    chapterCount: s.chapters.length,
    chaptersUrl: `/api/chapters?subjectId=${s.id}`
  }));

  return res.status(200).json({
    success: true,
    classId: targetClass.id,
    classNameBangla: targetClass.nameBangla,
    total: subjects.length,
    data: subjects
  });
}
