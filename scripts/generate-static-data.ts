// Pre-exporting static curriculum file
import { CURRICULUM_DATA } from '../src/data/curriculumData.ts';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outDir, 'curriculum.json'),
  JSON.stringify(CURRICULUM_DATA, null, 2),
  'utf-8'
);

const classesOnly = CURRICULUM_DATA.map((c) => ({
  id: c.id,
  numeric: c.numeric,
  name: c.name,
  nameBangla: c.nameBangla,
  stage: c.stage,
  stageBangla: c.stageBangla,
  subjectCount: c.subjects.length
}));

fs.writeFileSync(
  path.join(outDir, 'classes.json'),
  JSON.stringify(classesOnly, null, 2),
  'utf-8'
);

for (const c of CURRICULUM_DATA) {
  fs.writeFileSync(
    path.join(outDir, `${c.id}.json`),
    JSON.stringify(c, null, 2),
    'utf-8'
  );
}

console.log('Static JSON files written successfully in public/data');
