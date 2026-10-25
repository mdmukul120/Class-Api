import { Router, Request, Response } from 'express';
import { CURRICULUM_DATA, Subject, Chapter } from '../data/curriculumData';

export const apiRouter = Router();

// Universal CORS
apiRouter.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// 1. Full database JSON (Unified Master Endpoint - All Classes Together)
apiRouter.get(['/api/curriculum', '/curriculum', '/api/all', '/all', '/api/classes/all'], (req: Request, res: Response) => {
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

  res.json({
    success: true,
    type: "all_classes_master",
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
      classes: "6 to 12 (Comprehensive Secondary & Higher Secondary)",
      source: "NCTB Curriculum API Service",
      deployReady: "Vercel / GitHub / Cloud Run Ready",
      individualEndpointsExample: "/api/classes/6, /api/classes/7, /api/classes/8, /api/classes/9, /api/classes/10, /api/classes/11, /api/classes/12"
    },
    data: CURRICULUM_DATA
  });
});

// 2. Classes list summary (Dropdown 1)
apiRouter.get(['/api/classes', '/classes'], (req: Request, res: Response) => {
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

  res.json({
    success: true,
    total: classes.length,
    endpoints: {
      allClassesUnified: '/api/curriculum',
      allClassesAlternative: '/api/classes/all',
      individualExample: '/api/classes/6'
    },
    data: classes
  });
});

// 2b. Individual Class Endpoint (Single Class Full Data - Books, Chapters, Lessons)
// Supports: /api/classes/6, /api/classes/class-6, /api/class/6, etc.
apiRouter.get(['/api/classes/:classId', '/api/class/:classId'], (req: Request, res: Response) => {
  const param = req.params.classId.toLowerCase().trim();

  // If "all" was passed to /api/classes/all, redirect or return all
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

    return res.json({
      success: true,
      type: "all_classes_master",
      count: CURRICULUM_DATA.length,
      stats: { totalClasses: CURRICULUM_DATA.length, totalSubjects, totalChapters, totalLessons },
      data: CURRICULUM_DATA
    });
  }

  const targetClass = CURRICULUM_DATA.find(
    (c) => c.id.toLowerCase() === param || 
           String(c.numeric) === param || 
           c.name.toLowerCase().replace(/\s+/g, '-') === param
  );

  if (!targetClass) {
    return res.status(404).json({
      success: false,
      error: `Class '${req.params.classId}' not found.`,
      availableClassEndpoints: [
        { class: "Class 6 (৬ষ্ঠ শ্রেণি)", endpoints: ["/api/classes/6", "/api/classes/class-6"] },
        { class: "Class 7 (৭ম শ্রেণি)", endpoints: ["/api/classes/7", "/api/classes/class-7"] },
        { class: "Class 8 (৮ম শ্রেণি)", endpoints: ["/api/classes/8", "/api/classes/class-8"] },
        { class: "Class 9 (৯ম শ্রেণি)", endpoints: ["/api/classes/9", "/api/classes/class-9"] },
        { class: "Class 10 (১০ম শ্রেণি)", endpoints: ["/api/classes/10", "/api/classes/class-10"] },
        { class: "Class 11 (একাদশ শ্রেণি)", endpoints: ["/api/classes/11", "/api/classes/class-11"] },
        { class: "Class 12 (দ্বাদশ শ্রেণি)", endpoints: ["/api/classes/12", "/api/classes/class-12"] },
        { class: "All Classes Combined", endpoints: ["/api/curriculum", "/api/classes/all", "/api/all"] }
      ]
    });
  }

  // Support optional group filter: ?group=science / humanities / business
  const groupQuery = req.query.group ? String(req.query.group).toLowerCase().trim() : null;
  const filterByGroup = (subGroup?: string) => {
    if (!groupQuery) return true;
    const g = (subGroup || '').toLowerCase();
    if (groupQuery === 'science' || groupQuery === 'বিজ্ঞান') return g.includes('science');
    if (groupQuery === 'humanities' || groupQuery === 'arts' || groupQuery === 'মানবিক') return g.includes('humanities');
    if (groupQuery === 'business' || groupQuery === 'commerce' || groupQuery === 'ব্যবসায়') return g.includes('business');
    if (groupQuery === 'compulsory' || groupQuery === 'general' || groupQuery === 'সাধারণ' || groupQuery === 'আবশ্যিক') return g.includes('general') || g.includes('compulsory');
    if (groupQuery === 'optional' || groupQuery === 'ঐচ্ছিক') return g.includes('optional');
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

  res.json({
    success: true,
    type: "single_class_full",
    classId: targetClass.id,
    numeric: targetClass.numeric,
    name: targetClass.name,
    nameBangla: targetClass.nameBangla,
    stage: targetClass.stage,
    stageBangla: targetClass.stageBangla,
    description: targetClass.description,
    groupFilter: groupQuery || null,
    stats: {
      totalSubjects: filteredSubjects.length,
      totalChapters,
      totalLessons
    },
    endpoints: {
      numericRoute: `/api/classes/${targetClass.numeric}`,
      stringRoute: `/api/classes/${targetClass.id}`,
      staticJsonUrl: `/data/${targetClass.id}.json`,
      downloadUrl: `/api/download/${targetClass.id}.json`,
      allClassesCombined: `/api/curriculum`
    },
    subjects: filteredSubjects,
    data: {
      id: targetClass.id,
      numeric: targetClass.numeric,
      name: targetClass.name,
      nameBangla: targetClass.nameBangla,
      stage: targetClass.stage,
      stageBangla: targetClass.stageBangla,
      description: targetClass.description,
      subjects: filteredSubjects
    }
  });
});

// 3. Subjects for a specific class (Dropdown 2)
apiRouter.get(['/api/subjects', '/subjects'], (req: Request, res: Response) => {
  const classId = req.query.classId as string;
  const group = req.query.group ? String(req.query.group).toLowerCase().trim() : null;

  const filterByGroup = (subGroup?: string) => {
    if (!group) return true;
    const g = (subGroup || '').toLowerCase();
    if (group === 'science' || group === 'বিজ্ঞান') return g.includes('science');
    if (group === 'humanities' || group === 'arts' || group === 'মানবিক') return g.includes('humanities');
    if (group === 'business' || group === 'commerce' || group === 'ব্যবসায়') return g.includes('business');
    if (group === 'compulsory' || group === 'general' || group === 'সাধারণ' || group === 'আবশ্যিক') return g.includes('general') || g.includes('compulsory');
    if (group === 'optional' || group === 'ঐচ্ছিক') return g.includes('optional');
    return g.includes(group);
  };

  if (!classId) {
    const allSubjects = CURRICULUM_DATA.flatMap((c) =>
      c.subjects
        .filter((s) => filterByGroup(s.group))
        .map((s) => ({
          ...s,
          classId: c.id,
          classNameBangla: c.nameBangla,
          chaptersUrl: `/api/chapters?subjectId=${s.id}`
        }))
    );
    return res.json({ success: true, total: allSubjects.length, data: allSubjects });
  }

  const targetClass = CURRICULUM_DATA.find(
    (c) => c.id === classId || String(c.numeric) === classId
  );

  if (!targetClass) {
    return res.status(404).json({
      success: false,
      error: `Class '${classId}' not found. Valid IDs: class-6, class-7, class-8, class-9, class-10, class-11, class-12`
    });
  }

  const subjects = targetClass.subjects
    .filter((s) => filterByGroup(s.group))
    .map((s) => ({
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

  res.json({
    success: true,
    classId: targetClass.id,
    classNameBangla: targetClass.nameBangla,
    groupFilter: group || null,
    total: subjects.length,
    data: subjects
  });
});

// 4. Chapters for a specific subject (Dropdown 3)
apiRouter.get(['/api/chapters', '/chapters'], (req: Request, res: Response) => {
  const subjectId = req.query.subjectId as string;
  if (!subjectId) {
    return res.status(400).json({
      success: false,
      error: "Missing required query parameter 'subjectId'. Example: /api/chapters?subjectId=c6-math"
    });
  }

  let foundSubject: Subject | null = null;
  let foundClass = null;

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

  res.json({
    success: true,
    classId: foundClass.id,
    subjectId: foundSubject.id,
    subjectNameBangla: foundSubject.nameBangla,
    total: chapters.length,
    data: chapters
  });
});

// 5. Lessons / Topic Points for a specific chapter (Dropdown 4)
apiRouter.get(['/api/lessons', '/lessons'], (req: Request, res: Response) => {
  const chapterId = req.query.chapterId as string;
  if (!chapterId) {
    return res.status(400).json({
      success: false,
      error: "Missing required query parameter 'chapterId'. Example: /api/lessons?chapterId=c6-math-ch1"
    });
  }

  let foundLessonChapter: Chapter | null = null;
  let foundSubject: Subject | null = null;
  let foundClass = null;

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

  res.json({
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
});

// 6. Cascading query endpoint
apiRouter.get(['/api/cascade', '/cascade'], (req: Request, res: Response) => {
  const { classId, subjectId, chapterId, group } = req.query as {
    classId?: string;
    subjectId?: string;
    chapterId?: string;
    group?: string;
  };

  if (!classId) {
    return res.json({
      step: "classes",
      nextParam: "classId",
      options: CURRICULUM_DATA.map((c) => ({
        value: c.id,
        label: `${c.nameBangla} (${c.name})`,
        numeric: c.numeric,
        stage: c.stageBangla
      }))
    });
  }

  const c = CURRICULUM_DATA.find((item) => item.id === classId || String(item.numeric) === classId);
  if (!c) {
    return res.status(404).json({ error: `Class ${classId} not found` });
  }

  if (!subjectId) {
    const groupQuery = group ? group.toLowerCase().trim() : null;
    const filterByGroup = (subGroup?: string) => {
      if (!groupQuery) return true;
      const g = (subGroup || '').toLowerCase();
      if (groupQuery === 'science' || groupQuery === 'বিজ্ঞান') return g.includes('science');
      if (groupQuery === 'humanities' || groupQuery === 'arts' || groupQuery === 'মানবিক') return g.includes('humanities');
      if (groupQuery === 'business' || groupQuery === 'commerce' || groupQuery === 'ব্যবসায়') return g.includes('business');
      if (groupQuery === 'compulsory' || groupQuery === 'general' || groupQuery === 'সাধারণ' || groupQuery === 'আবশ্যিক') return g.includes('general') || g.includes('compulsory');
      if (groupQuery === 'optional' || groupQuery === 'ঐচ্ছিক') return g.includes('optional');
      return g.includes(groupQuery);
    };

    const eligibleSubjects = c.subjects.filter((s) => filterByGroup(s.group));

    return res.json({
      step: "subjects",
      class: { id: c.id, name: c.name, nameBangla: c.nameBangla },
      groupFilter: groupQuery || null,
      nextParam: "subjectId",
      options: eligibleSubjects.map((s) => ({
        value: s.id,
        label: `${s.nameBangla} - ${s.code}${s.group ? ` (${s.group})` : ''}`,
        code: s.code,
        group: s.group
      }))
    });
  }

  const s = c.subjects.find((sub) => sub.id === subjectId);
  if (!s) {
    return res.status(404).json({ error: `Subject ${subjectId} not found in ${c.name}` });
  }

  if (!chapterId) {
    return res.json({
      step: "chapters",
      class: { id: c.id, nameBangla: c.nameBangla },
      subject: { id: s.id, nameBangla: s.nameBangla },
      nextParam: "chapterId",
      options: s.chapters.map((ch) => ({
        value: ch.id,
        label: ch.titleBangla,
        chapterNumber: ch.chapterNumber,
        lessonCount: ch.lessons.length
      }))
    });
  }

  const ch = s.chapters.find((chap) => chap.id === chapterId);
  if (!ch) {
    return res.status(404).json({ error: `Chapter ${chapterId} not found in ${s.name}` });
  }

  return res.json({
    step: "lessons",
    class: { id: c.id, nameBangla: c.nameBangla },
    subject: { id: s.id, nameBangla: s.nameBangla },
    chapter: { id: ch.id, titleBangla: ch.titleBangla },
    options: ch.lessons.map((l) => ({
      value: l.id,
      label: `${l.point} - ${l.titleBangla}`,
      point: l.point,
      summary: l.summary,
      keywords: l.keywords
    }))
  });
});

// 7. Full search endpoint
apiRouter.get(['/api/search', '/search'], (req: Request, res: Response) => {
  const query = ((req.query.q as string) || '').toLowerCase().trim();
  if (!query) {
    return res.json({ success: true, count: 0, results: [] });
  }

  const results: Array<{
    type: 'class' | 'subject' | 'chapter' | 'lesson';
    classId: string;
    classNameBangla: string;
    subjectId?: string;
    subjectNameBangla?: string;
    chapterId?: string;
    chapterTitleBangla?: string;
    lessonId?: string;
    point?: string;
    title: string;
    titleBangla: string;
    summary?: string;
  }> = [];

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
            l.keywords.some((k) => k.toLowerCase().includes(query))
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

  res.json({
    success: true,
    query,
    count: results.length,
    results: results.slice(0, 100)
  });
});

// 8. Raw Download / Export endpoint (All or Individual)
apiRouter.get(['/api/download/:target', '/download/:target'], (req: Request, res: Response) => {
  const target = req.params.target.replace(/\.json$/i, '').toLowerCase().trim();

  if (target === 'curriculum' || target === 'all' || target === 'classes') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="nctb-curriculum-class-6-12.json"');
    return res.send(JSON.stringify(CURRICULUM_DATA, null, 2));
  }

  const targetClass = CURRICULUM_DATA.find(
    (c) => c.id.toLowerCase() === target || String(c.numeric) === target
  );

  if (!targetClass) {
    return res.status(404).json({ error: `File or class '${req.params.target}' not found.` });
  }

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', `attachment; filename="nctb-${targetClass.id}.json"`);
  res.send(JSON.stringify(targetClass, null, 2));
});

// Fallback for default curriculum download
apiRouter.get(['/api/download/curriculum.json', '/download/curriculum.json'], (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="nctb-curriculum-class-6-12.json"');
  res.send(JSON.stringify(CURRICULUM_DATA, null, 2));
});
