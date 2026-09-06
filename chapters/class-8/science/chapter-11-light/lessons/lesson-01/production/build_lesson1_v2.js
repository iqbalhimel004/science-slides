const pptxgen = require('pptxgenjs');
const {
  svgToDataUri,
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
  safeOuterShadow,
} = require('/home/oai/skills/slides/pptxgenjs_helpers');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI / Iqbal — controlled PptxGenJS route';
pptx.subject = 'Class 8 Science Chapter 11 Light — Lesson 1 v2';
pptx.title = 'Class 8 Science Ch11 Lesson 1 — Refraction Basics v2';
pptx.company = 'Science Slides';
pptx.lang = 'bn-BD';
pptx.theme = {
  headFontFace: 'Noto Sans Bengali',
  bodyFontFace: 'Noto Sans Bengali',
  lang: 'bn-BD',
};
pptx.defineLayout({ name: 'WIDE', width: 13.333, height: 7.5 });
pptx.layout = 'WIDE';
pptx.defineSlideMaster({
  title: 'SCIENCE_LIGHT_V2',
  background: { color: '071426' },
  objects: [],
  slideNumber: { x: 12.45, y: 7.05, color: 'B6D6FF', fontFace: 'Noto Sans', fontSize: 8 },
});

const W = 13.333, H = 7.5;
const C = {
  bg: '071426',
  bg2: '0B1F3A',
  panel: '0F2A48',
  panel2: '123B63',
  cyan: '36D7FF',
  cyan2: '9BEAFE',
  yellow: 'FFD166',
  orange: 'FF9F1C',
  green: '2EE59D',
  pink: 'FF4D9D',
  purple: '8B5CF6',
  text: 'F6FBFF',
  soft: 'B7CDE8',
  muted: '7FA7CC',
  red: 'FF6B6B',
  white: 'FFFFFF',
  water: '1BA7C9',
  glass: '9AD9FF',
};
const FONT = 'Noto Sans Bengali';
const FONT_LATIN = 'Noto Sans';

function addNotes(slide, notes) {
  if (typeof slide.addNotes === 'function') {
    slide.addNotes(notes);
  }
}

function addBg(slide, label, section='আলো ও প্রতিসরণ') {
  slide.background = { color: C.bg };
  // subtle top/bottom sweep within bounds
  slide.addShape(pptx.ShapeType.rect, { x:0, y:0, w:W, h:0.10, fill:{color:C.cyan, transparency:45}, line:{color:C.cyan, transparency:100} });
  slide.addShape(pptx.ShapeType.rect, { x:0, y:H-0.08, w:W, h:0.08, fill:{color:C.cyan, transparency:70}, line:{color:C.cyan, transparency:100} });
  // header
  slide.addText(section, { x:0.5, y:0.25, w:4.8, h:0.28, fontFace:FONT, fontSize:9.5, bold:true, color:C.cyan2, margin:0 });
  slide.addText(label, { x:10.7, y:0.25, w:1.7, h:0.28, fontFace:FONT_LATIN, fontSize:8.5, color:C.muted, align:'right', margin:0 });
  // progress line
  slide.addShape(pptx.ShapeType.line, { x:0.5, y:6.92, w:12.3, h:0, line:{color:C.panel2, width:1} });
}

function title(slide, text, opts={}) {
  slide.addText(text, { x:0.68, y:0.72, w:11.9, h:0.72, fontFace:FONT, fontSize:opts.size||28, bold:true, color:C.text, margin:0.02, breakLine:false });
}

function subtitle(slide, text, y=1.46) {
  slide.addText(text, { x:0.72, y, w:11.2, h:0.42, fontFace:FONT, fontSize:14, color:C.soft, margin:0.02, breakLine:false });
}

function pill(slide, text, x, y, w, color=C.cyan, fill=C.panel2) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h:0.42, rectRadius:0.08, fill:{color:fill, transparency:0}, line:{color, transparency:15, width:1.2}, shadow:safeOuterShadow('000000',0.15,45,1.5,0.5) });
  slide.addText(text, { x:x+0.12, y:y+0.095, w:w-0.24, h:0.22, fontFace:FONT, fontSize:9.5, bold:true, color:color, align:'center', margin:0 });
}

function callout(slide, text, x, y, w, h, opts={}) {
  const fill = opts.fill || C.panel;
  const line = opts.line || C.cyan;
  slide.addText(text, { x, y, w, h, fontFace: opts.fontFace || FONT, fontSize: opts.fontSize||14, color:opts.color||C.text, bold:opts.bold||false, fit:'shrink', valign:'mid', margin:0.08, align: opts.align || 'center', fill:{color:fill, transparency:opts.transparency??0}, line:{color:line, width:1.2, transparency:10}, radius:0.12, shadow:safeOuterShadow('000000',0.18,45,1.6,0.7) });
}

function bigQuestion(slide, q, y=2.0) {
  slide.addText(q, { x:1.0, y, w:11.3, h:1.05, fontFace:FONT, fontSize:28, bold:true, color:C.yellow, align:'center', fit:'shrink', margin:0.02 });
}

function ray(slide, x1,y1,x2,y2, color=C.yellow, width=4, dashed=false) {
  slide.addShape(pptx.ShapeType.line, { x:x1, y:y1, w:x2-x1, h:y2-y1, line:{ color, width, beginArrowType:'none', endArrowType:'triangle', dash:dashed?'dash':'solid' } });
}

function line(slide, x1,y1,x2,y2, color=C.soft, width=2, dashed=false) {
  slide.addShape(pptx.ShapeType.line, { x:x1, y:y1, w:x2-x1, h:y2-y1, line:{ color, width, dash:dashed?'dash':'solid' } });
}

function label(slide, text, x,y,w,h, opts={}) {
  slide.addText(text, { x,y,w,h, fontFace: opts.fontFace || FONT, fontSize: opts.fontSize || 11.5, color: opts.color || C.text, bold: opts.bold || false, align:opts.align || 'center', valign:'mid', margin:0.02, fit:'shrink' });
}

function addEye(slide, cx, cy, s=1) {
  slide.addShape(pptx.ShapeType.ellipse, { x:cx-0.55*s, y:cy-0.3*s, w:1.1*s, h:0.6*s, fill:{color:'FFFFFF', transparency:0}, line:{color:C.cyan, width:1.2} });
  slide.addShape(pptx.ShapeType.ellipse, { x:cx-0.18*s, y:cy-0.18*s, w:0.36*s, h:0.36*s, fill:{color:C.cyan}, line:{color:C.cyan} });
  slide.addShape(pptx.ShapeType.ellipse, { x:cx-0.07*s, y:cy-0.07*s, w:0.14*s, h:0.14*s, fill:{color:C.bg}, line:{color:C.bg} });
}

function addLightBulb(slide, x,y,s=1, on=true) {
  slide.addShape(pptx.ShapeType.ellipse, { x:x, y:y, w:0.7*s, h:0.85*s, fill:{color:on?C.yellow:'334155', transparency:on?0:0}, line:{color:on?C.yellow:'64748B', width:1.2} });
  slide.addShape(pptx.ShapeType.rect, { x:x+0.22*s, y:y+0.78*s, w:0.26*s, h:0.18*s, fill:{color:'94A3B8'}, line:{color:'94A3B8'} });
  if (on) {
    for (let i=0;i<8;i++) {
      const a = (Math.PI*2*i)/8;
      const cx = x+0.35*s, cy = y+0.38*s;
      line(slide, cx+Math.cos(a)*0.55*s, cy+Math.sin(a)*0.55*s, cx+Math.cos(a)*0.95*s, cy+Math.sin(a)*0.95*s, C.yellow, 1.5, false);
    }
  }
}

function addMediumDiagram(slide, x, y, w, h, topName, bottomName, denseTop=false) {
  slide.addShape(pptx.ShapeType.rect, { x,y,w,h: h/2, fill:{color:denseTop?C.glass:'0E253F', transparency:denseTop?40:0}, line:{color:C.soft, transparency:70} });
  slide.addShape(pptx.ShapeType.rect, { x,y:y+h/2,w,h: h/2, fill:{color:denseTop?'0E253F':C.glass, transparency:denseTop?0:40}, line:{color:C.soft, transparency:70} });
  line(slide, x, y+h/2, x+w, y+h/2, C.cyan2, 2, false);
  line(slide, x+w/2, y+0.1, x+w/2, y+h-0.1, C.soft, 1.2, true);
}

function addRayDiagram(slide, opts) {
  const {x,y,w,h, mode='unknown', showRefracted=true, denserBottom=true, normalIncidence=false, showLabels=true} = opts;
  addMediumDiagram(slide, x,y,w,h, denserBottom?'বায়ু / কম optically dense':'কাচ/পানি / বেশি optically dense', denserBottom?'কাচ/পানি / বেশি optically dense':'বায়ু / কম optically dense', !denserBottom);
  const ix=x+w/2, iy=y+h/2;
  if (normalIncidence) {
    ray(slide, ix, y+0.3, ix, y+h-0.35, C.yellow, 4, false);
    label(slide, 'i = 0°', ix+0.15, iy-0.65, 0.7,0.25,{fontFace:FONT_LATIN,fontSize:10,color:C.yellow});
    if (showLabels) callout(slide, 'দিক বদলায় না\nকিন্তু speed বদলায়', x+w-2.3, y+0.35, 1.95, 0.8, {fontSize:11, fill:'102C4D', line:C.green});
    return;
  }
  if (denserBottom) {
    ray(slide, x+0.55, y+0.55, ix, iy, C.yellow, 4, false);
    if (showRefracted) ray(slide, ix, iy, ix+0.72, y+h-0.42, C.green, 4, false);
    else line(slide, ix, iy, ix+1.55, y+h-0.6, C.soft, 2, true);
  } else {
    ray(slide, x+0.55, y+0.55, ix, iy, C.yellow, 4, false);
    if (showRefracted) ray(slide, ix, iy, ix+1.7, y+h-0.45, C.green, 4, false);
    else line(slide, ix, iy, ix+1.6, y+h-0.6, C.soft, 2, true);
  }
  slide.addShape(pptx.ShapeType.ellipse, { x:ix-0.07, y:iy-0.07, w:0.14, h:0.14, fill:{color:C.cyan}, line:{color:C.cyan} });
  if (showLabels) {
    label(slide, 'Normal', ix+0.12, y+0.15, 0.85, 0.25, {fontFace:FONT_LATIN,fontSize:9.5,color:C.soft});
    label(slide, 'আপতিত রশ্মি', x+0.4, y+0.2, 1.4,0.3,{fontSize:10.5,color:C.yellow});
    if (showRefracted) label(slide, 'প্রতিসরিত রশ্মি', ix+0.7, y+h-0.55, 1.45,0.3,{fontSize:10.2,color:C.green});
  }
}

function addPhotonIcon(slide, x,y) {
  slide.addShape(pptx.ShapeType.ellipse, { x, y, w:0.45, h:0.45, fill:{color:C.yellow}, line:{color:C.yellow} });
  slide.addShape(pptx.ShapeType.ellipse, { x:x+0.16, y:y+0.16, w:0.13, h:0.13, fill:{color:C.bg}, line:{color:C.bg} });
}

function addSlab(slide, x, y, w, h, stage=3) {
  slide.addShape(pptx.ShapeType.parallelogram, { x:x+1.1, y, w:w-2.2, h, fill:{color:C.glass, transparency:50}, line:{color:C.cyan2,width:1.2} });
  line(slide, x+2.25, y+0.1, x+2.25, y+h-0.1, C.soft, 1, true);
  line(slide, x+w-2.25, y+0.1, x+w-2.25, y+h-0.1, C.soft, 1, true);
  ray(slide, x+0.2, y+0.55, x+2.25, y+1.7, C.yellow, 4);
  if (stage>=2) ray(slide, x+2.25, y+1.7, x+w-2.25, y+2.25, C.green, 4);
  if (stage>=3) ray(slide, x+w-2.25, y+2.25, x+w-0.1, y+3.4, C.yellow, 4);
  if (stage>=3) {
    line(slide, x+0.15, y+0.45, x+w-0.15, y+3.6, C.orange, 1.4, true);
  }
}

function finalize(slide, idx) {
  // diagnostics required by skill
  warnIfSlideHasOverlaps(slide, pptx);
  warnIfSlideElementsOutOfBounds(slide, pptx);
}

function addNavHint(slide, text='ক্লিক/Next: পরের ধাপ') {
  slide.addText(text, { x:10.4, y:6.92, w:2.25, h:0.28, fontFace:FONT, fontSize:8.8, color:C.muted, align:'right', margin:0 });
}

const slides = [];
function newSlide(code, section) { const s = pptx.addSlide('SCIENCE_LIGHT_V2'); addBg(s, code, section); slides.push(s); return s; }

// 01 Hook predict
let s = newSlide('L1-S01a', 'Hook • দেখা ও আলো');
title(s, 'অন্ধকারে বস্তু দেখা যায় না কেন?');
subtitle(s, 'প্রথমে অনুমান করো — বস্তু থাকলেই কি দেখা যায়?');
addLightBulb(s, 1.1, 2.5, 1.0, false);
slide_add_dark_scene(s=>{});
function slide_add_dark_scene(dummy) {}
s.addShape(pptx.ShapeType.roundRect, { x:4.1, y:2.15, w:4.2, h:2.55, fill:{color:'020617'}, line:{color:'334155',width:1.2}, shadow:safeOuterShadow() });
label(s, 'একই বস্তু\nকিন্তু আলো নেই', 4.45, 3.0, 3.5, 0.9, {fontSize:22, color:C.soft, bold:true});
addEye(s, 10.8, 3.35, 1.2);
callout(s, 'Think → Pair → Answer\n“দেখার জন্য কী অবশ্যই দরকার?”', 3.7, 5.2, 5.9, 0.85, {fontSize:15, fill:'102C4D', line:C.yellow, color:C.yellow, bold:true});
addNavHint(s);
addNotes(s, '[Sources]\nConcept: basic vision requires light reaching the eye; NCTB Ch.11 Lesson 1 scope and verified lesson storyboard.');
finalize(s);

// 02 hook reveal
s = newSlide('L1-S01b', 'Hook • দেখা ও আলো');
title(s, 'দেখতে হলে আলো চোখে পৌঁছাতে হবে');
subtitle(s, 'বস্তু + আলো + চোখে পৌঁছানো light path — তিনটি বিষয় একসাথে দরকার।');
addLightBulb(s, 1.0, 2.4, 1.0, true);
s.addShape(pptx.ShapeType.roundRect, { x:4.05, y:2.1, w:4.3, h:2.65, fill:{color:'0B2A43'}, line:{color:C.cyan,width:1.5}, shadow:safeOuterShadow() });
label(s, 'বস্তু', 5.42, 3.05, 1.5, 0.5, {fontSize:24, color:C.text, bold:true});
addEye(s, 10.85, 3.35, 1.2);
ray(s, 1.75,2.86,4.1,3.25,C.yellow,3.5);
ray(s, 8.35,3.25,10.25,3.35,C.green,3.5);
callout(s, 'Light source → Object → Eye', 4.4, 5.25, 4.65, 0.68, {fontFace:FONT_LATIN, fontSize:16, fill:'102C4D', line:C.green, color:C.green, bold:true});
addNotes(s, '[Sources]\nConceptual baseline for seeing sequence; no eye-anatomy claim introduced here.');
finalize(s);

// 03 seeing sequence source only
s = newSlide('L1-S02a', 'Seeing sequence');
title(s, 'দেখা: Step 1 — Light source');
subtitle(s, 'আলো প্রথমে কোনো source থেকে বের হয়।');
addLightBulb(s, 2.0, 2.45, 1.35, true);
label(s, 'Light source', 1.55, 4.35, 2.0, 0.35, {fontFace:FONT_LATIN,fontSize:15,color:C.yellow,bold:true});
callout(s, 'এখনও চোখে আলো পৌঁছায়নি', 6.0, 2.9, 3.7, 0.75, {fontSize:16, fill:'0A2038', line:C.muted, color:C.soft});
addNavHint(s); addNotes(s, '[Sources]\nStoryboard L1-S02 staged implementation.'); finalize(s);

// 04 seeing sequence object
s = newSlide('L1-S02b', 'Seeing sequence');
title(s, 'Step 2 — আলো বস্তুর উপর পড়ে');
addLightBulb(s, 1.45, 2.45, 1.15, true);
s.addShape(pptx.ShapeType.roundRect, { x:5.2, y:2.35, w:2.2, h:1.65, fill:{color:'123B63'}, line:{color:C.cyan,width:1.5}, shadow:safeOuterShadow() });
label(s, 'বস্তু', 5.55, 2.88, 1.5, 0.5, {fontSize:24,bold:true});
ray(s, 2.35,2.85,5.2,3.15,C.yellow,4);
callout(s, 'Source থেকে আলো এসে বস্তুকে আলোকিত করে', 4.0, 5.0, 5.4, 0.72, {fontSize:15, fill:'102C4D', line:C.yellow, color:C.yellow});
addNavHint(s); finalize(s);

// 05 seeing sequence eye
s = newSlide('L1-S02c', 'Seeing sequence');
title(s, 'Step 3 — প্রতিফলিত/নির্গত আলো চোখে পৌঁছে');
addLightBulb(s, 1.2, 2.45, 1.05, true);
s.addShape(pptx.ShapeType.roundRect, { x:4.75, y:2.3, w:2.1, h:1.6, fill:{color:'123B63'}, line:{color:C.cyan,width:1.5}, shadow:safeOuterShadow() });
label(s, 'বস্তু', 5.08, 2.83, 1.45, 0.5, {fontSize:24,bold:true});
addEye(s, 10.35, 3.08, 1.18);
ray(s, 2.1,2.85,4.75,3.15,C.yellow,4);
ray(s, 6.85,3.15,9.75,3.08,C.green,4);
callout(s, 'দেখা হয় যখন আলো চোখে পৌঁছায়', 3.9, 5.1, 5.8, 0.72, {fontSize:16, fill:'0B3328', line:C.green, color:C.green, bold:true});
finalize(s);

// 06 Light definition
s = newSlide('L1-S03', 'আলো কী?');
title(s, 'আলো কী?');
subtitle(s, 'এই অধ্যায়ের জন্য প্রয়োজনীয় সংক্ষিপ্ত ধারণা');
s.addShape(pptx.ShapeType.roundRect, { x:0.85, y:2.0, w:5.5, h:2.05, fill:{color:'102C4D'}, line:{color:C.cyan,width:1.5}, shadow:safeOuterShadow() });
label(s, 'আলো হলো এমন শক্তি/তড়িৎচৌম্বক বিকিরণ\nযার দৃশ্যমান অংশ আমাদের চোখে\nদৃষ্টির অনুভূতি সৃষ্টি করে।', 1.15,2.28,4.9,1.45,{fontSize:20,color:C.text,bold:true});
// spectrum bar
const colors = ['7C3AED','2563EB','22D3EE','22C55E','FDE047','F97316','EF4444'];
for (let i=0;i<colors.length;i++) s.addShape(pptx.ShapeType.rect,{x:7.2+i*0.48,y:2.6,w:0.48,h:1.0,fill:{color:colors[i]},line:{color:colors[i]}});
label(s,'দৃশ্যমান আলো',7.45,3.75,2.4,0.35,{fontSize:14,color:C.text,bold:true});
addPhotonIcon(s,10.45,2.84);
label(s,'ফোটন ধারণা\n(non-assessed)',10.0,3.75,1.55,0.52,{fontSize:9.5,color:C.soft});
callout(s, 'এই lesson-এ আমরা ray model ব্যবহার করব — কারণ refraction বোঝার জন্য সেটাই যথেষ্ট।', 1.2,5.3,10.9,0.7,{fontSize:14, fill:'1A2E45', line:C.orange, color:C.orange});
addNotes(s, '[Sources]\nVisible light as part of electromagnetic radiation: standard modern science reference; geometric ray model is lesson-appropriate simplification.');
finalize(s);

// 07 properties staged map
s = newSlide('L1-S04', 'Chapter map');
title(s, 'এই অধ্যায়ে আলোর কোন বৈশিষ্ট্যগুলো দরকার?');
subtitle(s, 'সব বৈশিষ্ট্য নয় — শুধু “আলো” অধ্যায়ের জন্য প্রয়োজনীয় pathway');
const props = [
 ['সোজা পথে চলে', 'Ray model'], ['প্রতিফলিত হয়', 'Reflection'], ['মাধ্যম বদলালে বেঁকে যায়', 'Refraction'], ['লেন্সে image গঠন করে', 'Lens/Eye/Camera']
];
for (let i=0;i<props.length;i++) {
  const x=0.95+i*3.02;
  slideCard(s, x, 2.15, 2.55, 2.4, props[i][0], props[i][1], i===2?C.orange:(i===3?C.green:C.cyan));
}
function slideCard(slide, x,y,w,h,head,body,color) {
  slide.addText(`${head}\n${body}`, {x,y,w,h,fontFace:FONT,fontSize:15.5,bold:true,color:C.text,fit:'shrink',align:'center',valign:'mid',margin:0.12,fill:{color:'102C4D'},line:{color,width:1.4},radius:0.16,shadow:safeOuterShadow()});
}
callout(s, 'আজকের focus: মাধ্যম বদলালে আলো কীভাবে বেঁকে যায় — প্রতিসরণ', 2.4,5.2,8.55,0.72,{fontSize:16, fill:'2B1D0D', line:C.orange, color:C.yellow, bold:true});
finalize(s);

// 08 medium predict
s = newSlide('L1-S05a', 'Medium recap');
title(s, 'কোন বস্তু আলো যেতে দেয়?');
subtitle(s, 'Prediction: তিনটি উদাহরণ কোন শ্রেণিতে পড়বে?');
const med = [['কাঁচ','?'],['ঘোলা কাগজ','?'],['কাঠ','?']];
for (let i=0;i<3;i++) slideCard(s,1.35+i*3.75,2.2,2.85,2.4,med[i][0],med[i][1],C.yellow);
callout(s, 'Transparent / Translucent / Opaque — আগে অনুমান করো', 2.35,5.2,8.6,0.78,{fontSize:16, fill:'102C4D', line:C.yellow, color:C.yellow});
addNavHint(s); finalize(s);

// 09 medium answer
s = newSlide('L1-S05b', 'Medium recap');
title(s, 'মাধ্যমের ধরন: আলো কতটা যেতে পারে?');
const med2 = [['কাঁচ','Transparent\nস্বচ্ছ'],['ঘোলা কাগজ','Translucent\nঅর্ধস্বচ্ছ'],['কাঠ','Opaque\nঅস্বচ্ছ']];
for (let i=0;i<3;i++) slideCard(s,1.15+i*3.9,2.05,3.05,2.55,med2[i][0],med2[i][1],i===0?C.green:(i===1?C.orange:C.red));
callout(s, 'প্রতিসরণ বুঝতে সবচেয়ে গুরুত্বপূর্ণ: আলো এক স্বচ্ছ মাধ্যম থেকে আরেক স্বচ্ছ মাধ্যমে গেলে কী হয়।', 1.6,5.35,10.2,0.75,{fontSize:15.2, fill:'0B3328', line:C.green, color:C.green});
finalize(s);

// 10 live demo
s = newSlide('L1-S06', 'Observation first');
title(s, 'Live demo: পানিতে পেন্সিল বাঁকা দেখায় কেন?');
subtitle(s, 'Explain নয় — আগে observe করো');
// water glass schematic
s.addShape(pptx.ShapeType.rect,{x:1.3,y:2.15,w:3.0,h:3.2,fill:{color:'E6F7FF',transparency:10},line:{color:C.cyan,width:1.4}});
s.addShape(pptx.ShapeType.rect,{x:1.3,y:3.25,w:3.0,h:2.1,fill:{color:C.water,transparency:30},line:{color:C.water,transparency:100}});
line(s,1.3,3.25,4.3,3.25,C.cyan2,2);
line(s,2.15,1.85,3.05,3.35,C.yellow,8);
line(s,3.05,3.35,3.78,5.05,C.yellow,8);
label(s,'পেন্সিলটি সত্যিই বাঁকলো?',5.2,2.15,3.6,0.45,{fontSize:21,color:C.yellow,bold:true});
callout(s, 'Observe: water surface-এর উপরে ও নিচের অংশ কি একই সরলরেখায় দেখা যায়?', 5.15,3.0,6.5,0.75,{fontSize:15, fill:'102C4D', line:C.cyan, color:C.text});
callout(s, 'Static fallback: live demo না হলে এই চিত্র দিয়েই observation করানো যাবে।', 5.15,4.1,6.5,0.72,{fontSize:13.5, fill:'2B1D0D', line:C.orange, color:C.yellow});
finalize(s);

// 11 ray vocab stage 1
s = newSlide('L1-S07a', 'Ray vocabulary');
title(s, 'Ray diagram বানানোর ভাষা');
subtitle(s, 'Step 1: দুই মাধ্যমের boundary বা interface');
addMediumDiagram(s,2.2,2.1,8.9,3.55,'Medium 1','Medium 2',false);
label(s,'Interface / বিভেদতল',5.2,5.82,3.0,0.35,{fontFace:FONT,fontSize:15,color:C.cyan2,bold:true});
addNavHint(s); finalize(s);

// 12 ray vocab stage 2
s = newSlide('L1-S07b', 'Ray vocabulary');
title(s, 'Point of incidence এবং Normal');
addMediumDiagram(s,2.2,2.1,8.9,3.55,'Medium 1','Medium 2',false);
const ix=6.65, iy=3.875;
s.addShape(pptx.ShapeType.ellipse,{x:ix-0.08,y:iy-0.08,w:0.16,h:0.16,fill:{color:C.yellow},line:{color:C.yellow}});
line(s,ix,2.3,ix,5.45,C.soft,1.5,true);
label(s,'Point of incidence',7.0,3.4,2.2,0.3,{fontFace:FONT_LATIN,fontSize:10.5,color:C.yellow});
label(s,'Normal\nলম্ব রেখা',6.85,2.45,1.4,0.45,{fontSize:11,color:C.soft});
callout(s, 'Angles সবসময় Normal থেকে মাপি — surface থেকে নয়।', 3.15,5.95,7.0,0.62,{fontSize:15, fill:'102C4D', line:C.yellow, color:C.yellow, bold:true});
addNavHint(s); finalize(s);

// 13 ray vocab stage 3
s = newSlide('L1-S07c', 'Ray vocabulary');
title(s, 'Incident ray → Refracted ray');
addRayDiagram(s,{x:2.0,y:1.95,w:9.3,h:3.95,denserBottom:true,showRefracted:true,showLabels:true});
callout(s, 'Incident ray: Medium 1 থেকে interface-এ আসে\nRefracted ray: Medium 2-এ গিয়ে নতুন পথে চলে', 2.4,6.0,8.7,0.75,{fontSize:13.5, fill:'102C4D', line:C.green, color:C.text});
finalize(s);

// 14 reflection/refraction predict
s = newSlide('L1-S08a', 'Reflection vs Refraction');
title(s, 'Prediction: কোন ray ফিরে গেল, কোন ray ঢুকে গেল?');
addMediumDiagram(s,2.2,2.05,8.9,3.65,'বায়ু','কাচ/পানি',false);
ray(s,3.3,2.65,6.65,3.875,C.yellow,4);
line(s,6.65,3.875,4.2,4.8,C.soft,3,true);
line(s,6.65,3.875,8.6,5.25,C.soft,3,true);
callout(s, 'A না B — কোনটি reflection? কোনটি refraction?', 3.0,6.0,7.6,0.72,{fontSize:16, fill:'2B1D0D', line:C.yellow, color:C.yellow, bold:true});
addNavHint(s); finalize(s);

// 15 reflection/refraction answer
s = newSlide('L1-S08b', 'Reflection vs Refraction');
title(s, 'Reflection ফিরে যায়, Refraction নতুন মাধ্যমে যায়');
addMediumDiagram(s,2.2,2.05,8.9,3.65,'বায়ু','কাচ/পানি',false);
ray(s,3.3,2.65,6.65,3.875,C.yellow,4);
ray(s,6.65,3.875,4.2,2.7,C.orange,4);
ray(s,6.65,3.875,8.6,5.25,C.green,4);
label(s,'প্রতিফলিত রশ্মি',3.45,2.05,2.0,0.3,{fontSize:11.5,color:C.orange});
label(s,'প্রতিসরিত রশ্মি',8.1,5.25,2.0,0.3,{fontSize:11.5,color:C.green});
callout(s, 'Refraction = medium বদলানোর সময় ray-এর দিক পরিবর্তন', 3.15,6.0,7.1,0.72,{fontSize:15.5, fill:'0B3328', line:C.green, color:C.green, bold:true});
finalize(s);

// 16 speed change bridge
s = newSlide('L1-S09', 'Why bends?');
title(s, 'মাধ্যম বদলালে speed বদলায় — তাই path বদলায়');
s.addText('Qualitative idea: speed changes at boundary', {x:0.72,y:1.46,w:5.5,h:0.35,fontFace:FONT_LATIN,fontSize:12,color:C.soft,margin:0.02});
addRayDiagram(s,{x:0.95,y:2.0,w:5.4,h:3.55,denserBottom:true,showRefracted:true,showLabels:false});
addRayDiagram(s,{x:6.95,y:2.0,w:5.4,h:3.55,denserBottom:false,showRefracted:true,showLabels:false});
callout(s, 'কম optical density → বেশি optical density\nRay normal-এর দিকে বেঁকে যায়', 1.15,5.85,4.95,0.72,{fontSize:12.5, fill:'102C4D', line:C.green, color:C.green});
callout(s, 'বেশি optical density → কম optical density\nRay normal থেকে দূরে বেঁকে যায়', 7.15,5.85,4.95,0.72,{fontSize:12.5, fill:'102C4D', line:C.orange, color:C.orange});
callout(s, 'Guardrail: optical density ≠ mass density', 7.45,1.42,4.25,0.45,{fontFace:FONT_LATIN,fontSize:15, fill:'2B1D0D', line:C.yellow, color:C.yellow, bold:true});
finalize(s);

// 17 normal incidence predict
s = newSlide('L1-S10a', 'Normal incidence');
title(s, 'যদি ray normal বরাবর পড়ে?');
subtitle(s, 'Prediction: direction বদলাবে, নাকি সোজা থাকবে?');
addRayDiagram(s,{x:3.45,y:2.0,w:6.3,h:3.8,normalIncidence:true,showLabels:false});
callout(s, 'Vote: Direction change? YES / NO', 3.8,6.0,5.75,0.7,{fontFace:FONT_LATIN,fontSize:18, fill:'2B1D0D', line:C.yellow, color:C.yellow, bold:true});
addNavHint(s); finalize(s);

// 18 normal incidence reveal
s = newSlide('L1-S10b', 'Normal incidence');
title(s, 'Normal incidence: direction বদলায় না');
subtitle(s, 'কিন্তু medium বদলালে speed বদলাতে পারে।');
addRayDiagram(s,{x:3.45,y:2.0,w:6.3,h:3.8,normalIncidence:true,showLabels:true});
callout(s, 'Exception: speed changes but no bending when i = 0°', 3.3,6.0,6.9,0.65,{fontFace:FONT_LATIN,fontSize:15, fill:'102C4D', line:C.green, color:C.green, bold:true});
finalize(s);

// 19 rarer denser predict
s = newSlide('L1-S11a', 'Rule 1');
title(s, 'Prediction: কম dense → বেশি dense');
subtitle(s, 'Ray কোথায় যাবে? Normal-এর দিকে, নাকি দূরে?');
addRayDiagram(s,{x:2.45,y:1.9,w:8.2,h:3.95,denserBottom:true,showRefracted:false,showLabels:true});
callout(s, 'Draw with finger: refracted ray কোথায় হবে?', 3.4,6.0,6.5,0.72,{fontSize:16, fill:'2B1D0D', line:C.yellow, color:C.yellow});
addNavHint(s); finalize(s);

// 20 rarer denser answer
s = newSlide('L1-S11b', 'Rule 1');
title(s, 'কম dense → বেশি dense: Normal-এর দিকে');
addRayDiagram(s,{x:2.45,y:1.9,w:8.2,h:3.95,denserBottom:true,showRefracted:true,showLabels:true});
callout(s, 'Rule: rarer medium থেকে denser medium-এ গেলে ray normal-এর দিকে বেঁকে যায়।', 2.35,6.02,8.7,0.68,{fontSize:15, fill:'0B3328', line:C.green, color:C.green, bold:true});
finalize(s);

// 21 denser rarer predict
s = newSlide('L1-S12a', 'Rule 2');
title(s, 'Prediction: বেশি dense → কম dense');
subtitle(s, 'এবার ray normal-এর দিকে যাবে, নাকি দূরে?');
addRayDiagram(s,{x:2.45,y:1.9,w:8.2,h:3.95,denserBottom:false,showRefracted:false,showLabels:true});
callout(s, 'আগের rule উল্টে গেলে path কী হবে?', 3.25,6.0,6.85,0.72,{fontSize:16, fill:'2B1D0D', line:C.yellow, color:C.yellow});
addNavHint(s); finalize(s);

// 22 denser rarer answer
s = newSlide('L1-S12b', 'Rule 2');
title(s, 'বেশি dense → কম dense: Normal থেকে দূরে');
addRayDiagram(s,{x:2.45,y:1.9,w:8.2,h:3.95,denserBottom:false,showRefracted:true,showLabels:true});
callout(s, 'Rule: denser medium থেকে rarer medium-এ গেলে ray normal থেকে দূরে বেঁকে যায়।', 2.35,6.02,8.7,0.68,{fontSize:15, fill:'0B3328', line:C.orange, color:C.orange, bold:true});
finalize(s);

// 23 concept chain interactive summary
s = newSlide('L1-S13', 'Summary map');
title(s, 'আজকের chain: দেখা → medium → normal → bending rules');
const nodes = [ ['আলো চোখে পৌঁছে',C.cyan], ['Medium বদলায়',C.yellow], ['Normal থেকে angle',C.orange], ['Direction rule',C.green] ];
for (let i=0;i<nodes.length;i++) {
  const x = 0.9 + i*3.05;
  s.addShape(pptx.ShapeType.roundRect,{x,y:2.35,w:2.55,h:1.35,rectRadius:0.16,fill:{color:'102C4D'},line:{color:nodes[i][1],width:1.5},shadow:safeOuterShadow()});
  label(s,nodes[i][0],x+0.15,2.72,2.25,0.55,{fontSize:15.5,color:C.text,bold:true});
  if (i<nodes.length-1) ray(s, x+2.55, 3.02, x+3.02,3.02,C.soft,2.5);
}
callout(s, 'Teacher note: দরকার হলে প্রতিটি node থেকে সংশ্লিষ্ট slide-এ ফিরে আলোচনা করা যাবে।', 1.75,5.45,9.8,0.7,{fontSize:14,fill:'1A2E45',line:C.cyan,color:C.soft});
finalize(s);

// 24 exit questions
s = newSlide('L1-S14a', 'Exit check');
title(s, 'Exit Check — ৪টি দ্রুত প্রশ্ন');
const qs = ['Angle কোন line থেকে মাপি?', 'Normal incidence হলে direction বদলায়?', 'কম dense → বেশি dense: ray কোথায় বেঁকে যায়?', 'Optical density কি mass density?'];
for (let i=0;i<4;i++) {
  const x = i<2?1.0:7.0, y = i%2===0?2.05:4.25;
  callout(s, `${i+1}. ${qs[i]}`, x, y, 5.25, 1.35, {fontSize:18, fill:'102C4D', line:C.cyan, color:C.text, bold:true});
}
addNavHint(s,'Teacher click: answer reveal'); finalize(s);

// 25 exit answers
s = newSlide('L1-S14b', 'Exit check');
title(s, 'Exit Check — উত্তর');
const ans = ['Normal থেকে', 'না; speed বদলাতে পারে', 'Normal-এর দিকে', 'না; optical density আলাদা ধারণা'];
for (let i=0;i<4;i++) {
  const x = i<2?1.0:7.0, y = i%2===0?2.05:4.25;
  callout(s, `${i+1}. ${ans[i]}`, x, y, 5.25, 1.35, {fontSize:18, fill:'0B3328', line:C.green, color:C.green, bold:true});
}
finalize(s);

// 26 flex slab predict/stage
s = newSlide('L1-F01a', 'FLEX • Glass slab');
title(s, 'FLEX: Parallel-sided glass slab — path predict');
subtitle(s, 'প্রথম interface-এ ray কোন দিকে বেঁকবে? তারপর বের হলে কী হবে?');
addSlab(s,1.25,2.1,10.7,3.6,1);
callout(s, 'Predict before reveal: emergent ray কি incident ray-এর সাথে parallel হবে?', 2.1,6.0,9.2,0.7,{fontSize:15,fill:'2B1D0D',line:C.yellow,color:C.yellow});
addNavHint(s); finalize(s);

// 27 flex slab reveal
s = newSlide('L1-F01b', 'FLEX • Glass slab');
title(s, 'Parallel slab: emergent ray parallel হতে পারে');
subtitle(s, 'Guardrail: এই equality parallel-sided slab geometry-এর জন্য, সব boundary-তে নয়।');
addSlab(s,1.25,2.05,10.7,3.65,3);
callout(s, 'Geometry-bound rule: incident ray ও emergent ray parallel; lateral shift থাকতে পারে।', 1.85,6.22,9.65,0.55,{fontSize:14.5,fill:'0B3328',line:C.green,color:C.green});
finalize(s);

// 28 flex simulation launch
s = newSlide('L1-F02', 'FLEX • Simulation');
title(s, 'Simulation: incidence angle বদলালে কী হয়?');
subtitle(s, 'Primary: PhET Bending Light — Bangla/offline-friendly support');
s.addShape(pptx.ShapeType.roundRect,{x:0.9,y:2.0,w:4.6,h:3.15,rectRadius:0.2,fill:{color:'102C4D'},line:{color:C.cyan,width:1.5},shadow:safeOuterShadow()});
label(s,'Prediction task',1.25,2.35,3.9,0.35,{fontFace:FONT_LATIN,fontSize:16,color:C.yellow,bold:true});
label(s,'Angle বাড়ালে refracted ray\nnormal থেকে কীভাবে বদলায়?',1.25,2.95,3.9,0.95,{fontSize:19,color:C.text,bold:true});
label(s,'Observe → Pause → Explain',1.25,4.35,3.9,0.35,{fontFace:FONT_LATIN,fontSize:13,color:C.cyan2,bold:true});
s.addShape(pptx.ShapeType.roundRect,{x:6.0,y:2.15,w:5.5,h:1.15,rectRadius:0.14,fill:{color:'0B3328'},line:{color:C.green,width:1.5},hyperlink:{url:'https://phet.colorado.edu/en/simulations/bending-light'},shadow:safeOuterShadow()});
label(s,'Launch PhET Bending Light',6.25,2.45,5.0,0.38,{fontFace:FONT_LATIN,fontSize:19,color:C.green,bold:true});
s.addShape(pptx.ShapeType.roundRect,{x:6.0,y:3.65,w:5.5,h:1.35,rectRadius:0.14,fill:{color:'1A2E45'},line:{color:C.orange,width:1.2},hyperlink:{url:'https://www.physicsclassroom.com/Physics-Interactives/Refraction-and-Lenses/Refraction'},shadow:safeOuterShadow()});
label(s,'Alternate: Physics Classroom\nRefraction Interactive',6.25,3.9,5.0,0.72,{fontFace:FONT_LATIN,fontSize:14.5,color:C.orange,bold:true});
callout(s,'CORE fallback: L1-S09–L1-S12 staged diagrams. Internet না থাকলেও lesson complete.',1.75,6.05,9.85,0.65,{fontSize:13.2,fill:'102C4D',line:C.cyan,color:C.cyan2});
addNotes(s, '[Sources]\nPhET Bending Light: https://phet.colorado.edu/en/simulations/bending-light\nAttribution: Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC BY-NC 4.0.\nAlternate official site: The Physics Classroom Refraction Interactive.');
finalize(s);

// write file
(async ()=>{
  await pptx.writeFile({ fileName: '/mnt/data/science_slides_l1_v2/production/Class8_Science_Ch11_Lesson1_v2_Visual_Engagement.pptx' });
})();
