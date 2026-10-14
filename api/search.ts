import { CURRICULUM_DATA } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const query = ((req.query?.q as string) || '').toLowerCase().trim();
  if (!query) {
    return res.status(200).json({ success: true, count: 0, results: [] });
  }

  const results: any[] = [];

  for (const c of CURRICULUM_DATA) {
    for (const s of c.subjects) {
      if (
        s.name.toLowerCase().includes(query) ||
        s.nameBangla.includes(query) ||
        s.code.toLowerCase().includes(query)
      ) {
        results.push({
          type: 'subject',
          classId: c.id,
          classNameBangla: c.nameBangla,
          subjectId: s.id,
          subjectNameBangla: s.nameBangla,
          title: s.name,
          titleBangla: s.nameBangla
        });
      }

      for (const ch of s.chapters) {
        if (ch.title.toLowerCase().includes(query) || ch.titleBangla.includes(query)) {
          results.push({
            type: 'chapter',
            classId: c.id,
            classNameBangla: c.nameBangla,
            subjectId: s.id,
            subjectNameBangla: s.nameBangla,
            chapterId: ch.id,
            chapterTitleBangla: ch.titleBangla,
            title: ch.title,
            titleBangla: ch.titleBangla
          });
        }

        for (const l of ch.lessons) {
          if (
            l.title.toLowerCase().includes(query) ||
            l.titleBangla.includes(query) ||
            l.point.includes(query) ||
            l.summary.toLowerCase().includes(query) ||
            l.keywords.some((k: string) => k.toLowerCase().includes(query))
          ) {
            results.push({
              type: 'lesson',
              classId: c.id,
              classNameBangla: c.nameBangla,
              subjectId: s.id,
              subjectNameBangla: s.nameBangla,
              chapterId: ch.id,
              chapterTitleBangla: ch.titleBangla,
              lessonId: l.id,
              point: l.point,
              title: l.title,
              titleBangla: l.titleBangla,
              summary: l.summary
            });
          }
        }
      }
    }
  }

  return res.status(200).json({
    success: true,
    query,
    count: results.length,
    results: results.slice(0, 100)
  });
}
