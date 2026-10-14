import { CURRICULUM_DATA } from '../src/data/curriculumData';

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { classId, subjectId, chapterId } = req.query || {};

  if (!classId) {
    return res.status(200).json({
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
    return res.status(200).json({
      step: "subjects",
      class: { id: c.id, name: c.name, nameBangla: c.nameBangla },
      nextParam: "subjectId",
      options: c.subjects.map((s) => ({
        value: s.id,
        label: `${s.nameBangla} - ${s.code}`,
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
    return res.status(200).json({
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

  return res.status(200).json({
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
}
