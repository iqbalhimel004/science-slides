const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { imageSizingContain, imageSizingCrop, warnIfSlideHasOverlaps, warnIfSlideElementsOutOfBounds, safeOuterShadow } = require('/home/oai/skills/slides/pptxgenjs_helpers');

const OUT_DIR = '/mnt/data/science_slides_v21/full_lesson2_v02';
const VAL_DIR = '/mnt/data/science_slides_v21/validation_pack/Lesson2_R3_Optics_Controlled_Validation_v0_3';
fs.mkdirSync(OUT_DIR,{recursive:true});
const PPTX_OUT = path.join(OUT_DIR,'Lesson2_Controlled_Full_v0_2.pptx');
const REPORT_OUT = path.join(OUT_DIR,'Lesson2_Controlled_Full_v0_2_semantic_report.json');

const pptx = new pptxgen();
pptx.author = 'ChatGPT, Science Slides Production System v2.1';
pptx.subject = 'Class 8 Science Chapter 11 Lesson 2 full controlled deck';
pptx.title = 'Lesson 2: Refraction effects, critical angle and total internal reflection';
pptx.company = 'Science Slides';
pptx.lang = 'bn-BD';
pptx.theme = { headFontFace: 'Noto Sans Bengali', bodyFontFace: 'Noto Sans Bengali', lang: 'bn-BD' };
pptx.defineLayout({ name:'WIDE', width:13.333333, height:7.5 });
pptx.layout = 'WIDE';
pptx.slideWidth = 13.333333; pptx.slideHeight = 7.5;
pptx.defineSlideMaster({ title:'MASTER', background:{color:'F8FAFC'}, objects:[] });
pptx.master='MASTER';
const FONT='Noto Sans Bengali'; const LATIN='Noto Sans';
const C={bg:'F8FAFC',ink:'172033',muted:'64748B',blue:'2563EB',cyan:'0891B2',green:'059669',orange:'D97706',purple:'7C3AED',red:'DC2626',panel:'FFFFFF',line:'CBD5E1'};

function notes(slide, teacher=''){
  slide.addNotes(`[Sources]\n- NCTB Class 8 Science Chapter 11 Lesson 2 scope as preserved in repository Lesson Plan and Storyboard.\n- Terminology: chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md v1.1.\n- Diagram invariants: chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md v1.1.\n- Slide-surface rule: SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md.\n${teacher ? `\n[Teacher notes]\n${teacher}` : ''}`);
}
function header(slide,id,title,subtitle=''){
  slide.background={color:C.bg};
  slide.addText(title,{x:0.42,y:0.55,w:12.45,h:0.55,fontFace:FONT,fontSize:27,bold:true,color:C.ink,margin:0,fit:'shrink'});
  if(subtitle) slide.addText(subtitle,{x:0.44,y:1.20,w:12.1,h:0.30,fontFace:FONT,fontSize:14.2,color:C.muted,margin:0,fit:'shrink'});
  slide.addShape(pptx.ShapeType.line,{x:0.42,y:1.58,w:12.45,h:0,line:{color:C.line,width:1}});
}
function card(slide,x,y,w,h,opts={}){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.08,fill:{color:opts.fill||C.panel},line:{color:opts.line||C.line,width:1.1},shadow:opts.shadow===false?undefined:safeOuterShadow('000000',0.11,45,1,0.5)});
}
function footer(slide,text){slide.addShape(pptx.ShapeType.roundRect,{x:0.65,y:6.88,w:12.0,h:0.40,rectRadius:0.1,fill:{color:'ECFDF5'},line:{color:'86EFAC',width:0.7}}); slide.addText(text,{x:0.85,y:6.98,w:11.6,h:0.18,fontFace:FONT,fontSize:13.1,bold:true,color:'065F46',margin:0,fit:'shrink'});}
function bulletList(slide,items,x,y,w,h,opts={}){
  let cy=y; const fs=opts.fontSize||18; const gap=opts.gap||0.58;
  items.forEach((it,i)=>{slide.addShape(pptx.ShapeType.ellipse,{x,y:cy+0.08,w:0.15,h:0.15,fill:{color:opts.colors?opts.colors[i%opts.colors.length]:C.blue},line:{color:opts.colors?opts.colors[i%opts.colors.length]:C.blue}}); slide.addText(it,{x:x+0.25,y:cy,w:w-0.25,h:0.45,fontFace:FONT,fontSize:fs,color:C.ink,margin:0.01,fit:'shrink'}); cy+=gap;});
}
function titleSlide(){const s=pptx.addSlide('MASTER'); s.background={color:'F0FDFA'}; s.addText('৮ম শ্রেণির বিজ্ঞান • ১১তম অধ্যায়: আলো',{x:0.55,y:0.55,w:8.0,h:0.35,fontFace:LATIN,fontSize:14,bold:true,color:C.cyan,margin:0}); s.addText('প্রতিসরণের ফল, সংকট কোণ\nও পূর্ণ অভ্যন্তরীণ প্রতিফলন',{x:0.55,y:1.25,w:7.8,h:1.35,fontFace:FONT,fontSize:34,bold:true,color:C.ink,breakLine:false,margin:0}); s.addText('পাঠ ২ • ৬০ মিনিটের ক্লাসের জন্য',{x:0.58,y:2.85,w:7.7,h:0.35,fontFace:FONT,fontSize:15.5,color:C.muted,margin:0}); card(s,8.9,0.85,3.65,5.85,{fill:'FFFFFF'}); bulletList(s,['আপাত অবস্থান','মুদ্রা/মাছ/পেন্সিল','মরীচিকা','সংকট কোণ','পূর্ণ অভ্যন্তরীণ প্রতিফলন','অপটিক্যাল ফাইবার'],9.25,1.35,2.8,4.6,{fontSize:18,gap:0.70,colors:[C.cyan,C.blue,C.green,C.orange,C.purple]}); notes(s,'Begin by linking to Lesson 1: ray, normal, refraction direction.'); warnIfSlideHasOverlaps(s,pptx); warnIfSlideElementsOutOfBounds(s,pptx);}
function objectivesSlide(){const s=pptx.addSlide('MASTER'); header(s,'L2-S02','আজকের পাঠে কী শিখব?','প্রতিসরণের কয়েকটি গুরুত্বপূর্ণ ফল ও ব্যবহার'); const items=['বাস্তব অবস্থান ও আপাত অবস্থান আলাদা করব','মুদ্রা, মাছ ও পেন্সিল দেখা ব্যাখ্যা করব','মরীচিকাকে বাস্তব পানি নয় — প্রতিসরণের ফল হিসেবে বুঝব','সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলনের পার্থক্য করব','অপটিক্যাল ফাইবারে আলো কীভাবে চলে তা ব্যাখ্যা করব']; card(s,0.9,1.95,7.55,4.55,{fill:'FFFFFF'}); bulletList(s,items,1.3,2.35,6.75,3.8,{fontSize:19,gap:0.72,colors:[C.blue,C.cyan,C.green,C.orange,C.purple]}); card(s,9.0,2.05,3.45,4.3,{fill:'EFF6FF'}); s.addText('আজকের মূল ধারা',{x:9.35,y:2.45,w:2.8,h:0.28,fontFace:FONT,fontSize:20,bold:true,color:C.ink,margin:0}); s.addText('প্রতিসরণ\n→ আপাত অবস্থান\n→ সংকট কোণ\n→ পূর্ণ অভ্যন্তঠীণ প্রতিফলন\n→ ব্যবহার',{x:9.35,y:3.0,w:2.9,h:2.3,fontFace:FONT,fontSize:19,bold:true,color:C.ink,breakLine:false,margin:0.02,fit:'shrink',align:'center'}); notes(s); warnIfSlideHasOverlaps(s,pptx); warnIfSlideElementsOutOfBounds(s,pptx);}
function retrievalSlide(){const s=pptx.addSlide('MASTER'); header(s,'L2-S01','গত পাঠ থেকে দ্রুত পুনরালোচনা','উত্তর মনে বলো; পরের অংশে যাচাই করা হবে।'); card(s,0.9,1.95,11.55,4.65,{fill:'FFFFFF'}); const qs=['আলো হালকা মাধ্যম থেকে ঘন মাধ্যমে গেলে প্রতিসরিত রশ্মি অভিলম্বের কোন দিকে বেঁকে যায়?','লম্ব আপতনে দিক পরিবর্তন হয় কি? মাধ্যম বদলালে বেগের কী হতে পারে?','আপতন কোণ ও প্রতিসরণ কোণ কোন রেখা থেকে মাপা হয়?']; bulletList(s,qs,1.35,2.45,10.4,3.2,{fontSize:20,gap:1.0,colors:[C.blue,C.green,C.orange]}); footer(s,'কোণ সবসময় অভিলম্ব থ���="2