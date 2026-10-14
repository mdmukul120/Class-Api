import { CURRICULUM_DATA } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let totalSubjects = 0;
  let totalChapters = 0;
  let totalLessons = 0;

  CURRICULUM_DATA.forEach(c => {
    totalSubjects += c.subjects.length;
    c.subjects.forEach(s => {
      totalChapters += s.chapters.length;
      s.chapters.forEach(ch => {
        totalLessons += ch.lessons.length;
      });
    });
  });

  return res.status(200).json({
    success: true,
    count: CURRICULUM_DATA.length,
    stats: {
      totalClasses: CURRICULUM_DATA.length,
      totalSubjects,
      totalChapters,
      totalLessons
    },
    updatedAt: new Date().toISOString(),
    meta: {
      curriculum: "National Curriculum & Textbook Board (NCTB) Bangladesh",
      classes: "6 to 12",
      deployedOn: "Vercel / Cloud Run"
    },
    data: CURRICULUM_DATA
  });
}
