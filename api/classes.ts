import { CURRICULUM_DATA } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const classes = CURRICULUM_DATA.map((c) => {
    let totalLessons = 0;
    let totalChapters = 0;
    c.subjects.forEach((s) => {
      totalChapters += s.chapters.length;
      s.chapters.forEach((ch) => {
        totalLessons += ch.lessons.length;
      });
    });

    return {
      id: c.id,
      numeric: c.numeric,
      name: c.name,
      nameBangla: c.nameBangla,
      stage: c.stage,
      stageBangla: c.stageBangla,
      description: c.description,
      subjectCount: c.subjects.length,
      chapterCount: totalChapters,
      lessonCount: totalLessons,
      subjectsUrl: `/api/subjects?classId=${c.id}`
    };
  });

  return res.status(200).json({
    success: true,
    total: classes.length,
    data: classes
  });
}
