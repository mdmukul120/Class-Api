import { CURRICULUM_DATA } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const classIdParam = req.query.classId || req.query.id || req.query.class;

  // If a specific class is requested: e.g. ?classId=6 or ?classId=class-9
  if (classIdParam) {
    const param = String(classIdParam).toLowerCase().trim();

    if (param === 'all' || param === 'curriculum') {
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
        type: "all_classes_master",
        count: CURRICULUM_DATA.length,
        stats: { totalClasses: CURRICULUM_DATA.length, totalSubjects, totalChapters, totalLessons },
        data: CURRICULUM_DATA
      });
    }

    const targetClass = CURRICULUM_DATA.find(
      (c) => c.id.toLowerCase() === param || String(c.numeric) === param
    );

    if (!targetClass) {
      return res.status(404).json({
        success: false,
        error: `Class '${classIdParam}' not found. Supported classes: 6, 7, 8, 9, 10, 11, 12`
      });
    }

    // Optional group filter
    const groupQuery = req.query.group ? String(req.query.group).toLowerCase().trim() : null;
    const filterByGroup = (subGroup?: string) => {
      if (!groupQuery) return true;
      const g = (subGroup || '').toLowerCase();
      if (groupQuery === 'science' || groupQuery === 'বিজ্ঞান') return g.includes('science');
      if (groupQuery === 'humanities' || groupQuery === 'arts' || groupQuery === 'মানবিক') return g.includes('humanities');
      if (groupQuery === 'business' || groupQuery === 'commerce' || groupQuery === 'ব্যবসায়') return g.includes('business');
      return g.includes(groupQuery);
    };

    const filteredSubjects = targetClass.subjects.filter(s => filterByGroup(s.group));

    let totalChapters = 0;
    let totalLessons = 0;
    filteredSubjects.forEach((s) => {
      totalChapters += s.chapters.length;
      s.chapters.forEach((ch) => {
        totalLessons += ch.lessons.length;
      });
    });

    return res.status(200).json({
      success: true,
      type: "single_class_full",
      classId: targetClass.id,
      numeric: targetClass.numeric,
      name: targetClass.name,
      nameBangla: targetClass.nameBangla,
      stage: targetClass.stage,
      stageBangla: targetClass.stageBangla,
      description: targetClass.description,
      stats: {
        totalSubjects: filteredSubjects.length,
        totalChapters,
        totalLessons
      },
      endpoints: {
        numericRoute: `/api/classes/${targetClass.numeric}`,
        stringRoute: `/api/classes/${targetClass.id}`,
        staticJsonUrl: `/data/${targetClass.id}.json`
      },
      subjects: filteredSubjects,
      data: {
        ...targetClass,
        subjects: filteredSubjects
      }
    });
  }

  // Otherwise return class list summary
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
      directEndpoint: `/api/classes/${c.numeric}`,
      staticJsonUrl: `/data/${c.id}.json`,
      subjectsUrl: `/api/subjects?classId=${c.id}`
    };
  });

  return res.status(200).json({
    success: true,
    total: classes.length,
    endpoints: {
      allClassesCombined: '/api/curriculum',
      individualExample: '/api/classes/6'
    },
    data: classes
  });
}
