// Run `node scripts/generate-cv.mjs` after editing the content below.
// Source: Abdulazeem_Salau_CV-1.pdf, with the current role supplied by Abdulazeem.
import { writeFileSync, mkdirSync } from 'node:fs';

const output = new URL('../public/Abdulazeem-Salau-CV.pdf', import.meta.url);
const pages = [];
let commands = [];
let y = 790;
const left = 48;
const right = 547;
const ink = '0.14 0.15 0.16';
const muted = '0.34 0.37 0.42';
const blue = '0.20 0.30 0.85';
const safe = text => text.replace(/[–—]/g, '-').replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/•/g, '-');
const escape = text => safe(text).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
function line(text, size = 10, font = 'F1', color = ink, x = left) {
 commands.push(`BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${escape(text)}) Tj ET`);
}
function width(text, size) {
 return [...safe(text)].reduce((sum,c) => sum + (/[ilI.,:;'!|]/.test(c) ? .24 : /[mwMW@%]/.test(c) ? .83 : c === ' ' ? .28 : /[A-Z0-9]/.test(c) ? .61 : .51), 0) * size;
}
function paragraph(text, { size = 10, color = ink, indent = 0, after = 6 } = {}) {
 const words = safe(text).split(/\s+/);
 let current = '';
 for (const word of words) {
  const next = current ? `${current} ${word}` : word;
  if (current && width(next,size) > right-left-indent-12) { line(current,size,'F1',color,left+indent); y -= 14; current = word; }
  else current = next;
 }
 if (current) { line(current,size,'F1',color,left+indent); y -= 14; }
 y -= after;
}
function section(title) {
 y -= 12;
 line(title.toUpperCase(),10,'F2',blue);
 y -= 8;
 commands.push(`0.82 0.84 0.88 RG 0.5 w ${left} ${y} m ${right} ${y} l S`);
 y -= 19;
}
function heading(title,subtitle) {
 line(title,11,'F2'); y -= 16;
 if(subtitle) paragraph(subtitle,{size:9,color:muted,after:3});
}
function bullet(text) { paragraph(`- ${text}`,{indent:7,after:3}); }
function finishPage() {
 commands.push(`BT /F1 8 Tf ${muted} rg 1 0 0 1 48 30 Tm (Abdulazeem Salau | shabbaz.dev) Tj ET`);
 commands.push(`BT /F1 8 Tf ${muted} rg 1 0 0 1 510 30 Tm (${pages.length+1} / 2) Tj ET`);
 if(y<52) throw new Error('CV content exceeds page bounds');
 pages.push(commands.join('\n')); commands=[]; y=790;
}

line('ABDULAZEEM SALAU',24,'F2'); y-=26;
line('Full-Stack Developer | React, Next.js, Node.js & PostgreSQL',11,'F1',blue); y-=21;
paragraph('Lagos, Nigeria | +234 904 406 0010 | shabbaz.dev@gmail.com',{size:9,color:muted,after:0});
paragraph('shabbaz.dev | github.com/shabbazanwar | linkedin.com/in/abdulazeem-salau-47b86a341',{size:8.5,color:muted,after:0});
section('Summary');
paragraph('Full-stack developer building and shipping production web applications end to end: React and Next.js interfaces in TypeScript and Tailwind CSS, Node.js APIs, and relational data in PostgreSQL via Prisma. Currently a Full-Stack Developer at Agunwami Enterprise, and freelance since September 2025, delivering e-commerce, legal, and fashion-brand projects independently from scoping through deployment, including Paystack payment integration. Trained through the GOMYCODE full-stack bootcamp and holds a BA in English from the University of Lagos. Based in Lagos, Nigeria.');
section('Technical skills');
paragraph('Frontend: React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, responsive design',{after:3});
paragraph('Backend & Data: Node.js, Express, PostgreSQL, Prisma ORM, MongoDB, Supabase, RESTful API design, authentication & session handling',{after:3});
paragraph('Practices & Tools: Git, GitHub, Vercel, Render, Agile delivery, debugging, performance optimisation',{after:3});
paragraph('Languages: English (fluent), Yoruba, Nigerian Pidgin',{after:0});
section('Experience');
heading('Full-Stack Developer | Agunwami Enterprise','Oct 2026 - Present');
y -= 6;
heading('Freelance Full-Stack Developer | shabbaz.dev','Sep 2025 - Present');
paragraph('Began alongside undergraduate studies at the University of Lagos.',{size:9,color:muted,after:4});
bullet('Design and build full-stack web applications end to end for freelance clients, from initial requirements through production deployment, including SteezyWurld, Septagon Solicitors, Yew Couture, and Fabrication Legend.');
bullet('Develop responsive interfaces in React, Next.js, and TypeScript, styled with Tailwind CSS, across mobile, tablet, and desktop breakpoints.');
bullet('Design relational database schemas and write queries in PostgreSQL, using Prisma ORM for data modelling and migrations.');
bullet('Build and maintain RESTful APIs in Node.js, including authentication, session handling, and third-party integrations.');
bullet('Integrate Paystack payment processing, including webhook signature verification and idempotent handling to prevent duplicate transactions.');
bullet('Own client communication, scoping, timelines, and handover independently. Deploy and maintain applications on Vercel, Render, and Supabase.');
finishPage();
line('ABDULAZEEM SALAU',16,'F2'); y-=22;
line('Selected projects & education',10,'F1',muted); y-=10;
section('Projects');
heading('ShopSpire - E-Commerce Platform','React, JavaScript, Tailwind CSS, Supabase | shopspire.onrender.com');
bullet('Built a full-stack e-commerce application with product browsing and cart flows in React and Tailwind CSS, using Supabase for authentication, database, and image storage.');
y-=10;
heading('Bob Review Coach - AI Code Review Assistant','IBM Bob 2.0 Hackathon | github.com/shabbazanwar/Bob_project_hackathon');
bullet('Built solo for the IBM Bob 2.0 Hackathon: an AI-powered code review assistant that takes a code diff and returns structured findings, risk level, explanation, and suggested fix.');
y-=10;
heading('FinSync - Personal Finance Tracker','Next.js, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS | finsync-few1.onrender.com');
bullet('Designed and queried the relational schema for income and expense tracking through Prisma against PostgreSQL.');
section('Education');
heading('BA (Hons) English | University of Lagos, Akoka','Oct 2023 - Aug 2026');
bullet('Final-year research project on the impact of social media on undergraduate written communication.');
y-=10;
heading('Full-Stack Software Development Bootcamp','GOMYCODE, Alagomeji, Lagos | Aug 2024 - Jan 2025');
bullet('JavaScript, Node.js, databases, RESTful APIs, and Git; built full-stack applications in teams using Agile practices.');
finishPage();

const objects = [];
objects.push('<< /Type /Catalog /Pages 2 0 R >>');
objects.push(`<< /Type /Pages /Kids [${pages.map((_,i)=>`${5+i*2} 0 R`).join(' ')}] /Count ${pages.length} >>`);
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
for(const [i,page] of pages.entries()) {
 const stream = Buffer.from(page,'latin1');
 objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${6+i*2} 0 R >>`);
 objects.push(Buffer.concat([Buffer.from(`<< /Length ${stream.length} >>\nstream\n`),stream,Buffer.from('\nendstream')]));
}
const parts=[Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n','latin1')];
const offsets=[0];
let offset=parts[0].length;
for(const [i,object] of objects.entries()) {
 const chunk=Buffer.concat([Buffer.from(`${i+1} 0 obj\n`),Buffer.isBuffer(object)?object:Buffer.from(object,'latin1'),Buffer.from('\nendobj\n')]);
 offsets.push(offset);parts.push(chunk);offset+=chunk.length;
}
parts.push(Buffer.from(`xref\n0 ${objects.length+1}\n0000000000 65535 f \n${offsets.slice(1).map(n=>`${String(n).padStart(10,'0')} 00000 n \n`).join('')}trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF\n`));
mkdirSync(new URL('../public/',import.meta.url),{recursive:true});
writeFileSync(output,Buffer.concat(parts));
console.log(`Generated ${output.pathname} (${pages.length} pages)`);
