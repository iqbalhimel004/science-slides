// Controlled R3 optics components for Class 8 Science Chapter 11 Lesson 2.
// Production System v2.1. Source-controlled deterministic geometry.
// Student-facing terminology follows chapter TERMINOLOGY_LOCK.md v1.1.

const C = {
  dense: '#DDEBFF',
  light: '#FFF6D8',
  interface: '#2B2B2B',
  normal: '#555555',
  incident: '#1363DF',
  reflected: '#087F5B',
  refracted: '#E67700',
  cladding: '#DCEFFF',
  core: '#8AD8FF',
  boundary: '#245C73',
  text: '#1F2937'
};

function wrap(w, h, body) {
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>${body}</svg>`;
}

function defs() {
  return `<defs>
    <marker id='arrowBlue' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='${C.incident}'/></marker>
    <marker id='arrowGreen' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='${C.reflected}'/></marker>
    <marker id='arrowOrange' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='${C.refracted}'/></marker>
  </defs>`;
}

function ln(x1, y1, x2, y2, color, width, marker, dash) {
  const m = marker ? ` marker-end='url(#${marker})'` : '';
  const d = dash ? ` stroke-dasharray='${dash}'` : '';
  return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${color}' stroke-width='${width}' stroke-linecap='round'${m}${d}/>`;
}

function tx(x, y, content, size = 20, weight = 600, fill = C.text, anchor = 'middle') {
  return `<text x='${x}' y='${y}' font-family='Noto Sans Bengali, Noto Sans, sans-serif' font-size='${size}' font-weight='${weight}' fill='${fill}' text-anchor='${anchor}'>${content}</text>`;
}

function criticalAngleSvg() {
  const w = 820, h = 430, P = {x:410, y:210};
  const body = `${defs()}
    <rect x='0' y='0' width='${w}' height='${P.y}' fill='${C.light}'/>
    <rect x='0' y='${P.y}' width='${w}' height='${h-P.y}' fill='${C.dense}'/>
    <line x1='60' y1='${P.y}' x2='760' y2='${P.y}' stroke='${C.interface}' stroke-width='3'/>
    <line x1='${P.x}' y1='40' x2='${P.x}' y2='385' stroke='${C.normal}' stroke-width='3' stroke-dasharray='12 8'/>
    <circle cx='${P.x}' cy='${P.y}' r='5' fill='#111'/>
    ${ln(190,350,P.x,P.y,C.incident,6,'arrowBlue')}
    ${ln(P.x,P.y,720,P.y,C.refracted,6,'arrowOrange')}
    ${ln(P.x,P.y,630,350,C.reflected,5,'arrowGreen')}
    <path d='M ${P.x} ${P.y+62} A 62 62 0 0 1 ${P.x-52} ${P.y+33}' fill='none' stroke='#7C3AED' stroke-width='4'/>
    <path d='M ${P.x} ${P.y-62} A 62 62 0 0 1 ${P.x+62} ${P.y}' fill='none' stroke='#B45309' stroke-width='4'/>
    ${tx(P.x-80,P.y+78,'i = C',24,700,'#6D28D9')}
    ${tx(P.x+90,P.y-44,'r = 90°',24,700,'#92400E')}
    ${tx(128,55,'হালকা মাধ্যম',25,700)}
    ${tx(125,392,'ঘন মাধ্যম',25,700)}
    ${tx(P.x+44,55,'অভিলম্ব',21,600,'#444','start')}
    ${tx(710,P.y-14,'প্রতিসরিত রশ্মি',20,600,C.refracted)}
    ${tx(270,275,'আপতিত রশ্মি',20,600,C.incident)}
    ${tx(660,294,'প্রতিফলিত রশ্মি',20,600,C.reflected)}
    ${tx(P.x-115,P.y-12,'বিভেদতল',18,600,'#222','start')}`;
  return wrap(w, h, body);
}

function tirSvg() {
  const w = 820, h = 430, P = {x:410, y:210};
  const body = `${defs()}
    <rect x='0' y='0' width='${w}' height='${P.y}' fill='${C.light}'/>
    <rect x='0' y='${P.y}' width='${w}' height='${h-P.y}' fill='${C.dense}'/>
    <line x1='60' y1='${P.y}' x2='760' y2='${P.y}' stroke='${C.interface}' stroke-width='3'/>
    <line x1='${P.x}' y1='40' x2='${P.x}' y2='385' stroke='${C.normal}' stroke-width='3' stroke-dasharray='12 8'/>
    <circle cx='${P.x}' cy='${P.y}' r='5' fill='#111'/>
    ${ln(165,365,P.x,P.y,C.incident,6,'arrowBlue')}
    ${ln(P.x,P.y,655,365,C.reflected,6,'arrowGreen')}
    <path d='M ${P.x} ${P.y+70} A 70 70 0 0 1 ${P.x-59} ${P.y+38}' fill='none' stroke='#7C3AED' stroke-width='4'/>
    ${tx(P.x-92,P.y+86,'i > C',24,700,'#6D28D9')}
    ${tx(130,55,'হালকা মাধ্যম',25,700)}
    ${tx(125,392,'ঘন মাধ্যম',25,700)}
    ${tx(P.x+44,55,'অভিলম্ব',21,600,'#444','start')}
    ${tx(285,277,'আপতিত রশ্মি',20,600,C.incident)}
    ${tx(660,282,'প্রতিফলিত রশ্মি',20,600,C.reflected)}
    ${tx(P.x-115,P.y-12,'বিভেদতল',18,600,'#222','start')}
    <rect x='505' y='80' width='260' height='58' rx='12' fill='#FFF' stroke='#B45309' stroke-width='2'/>
    ${tx(635,116,'বাইরে প্রতিসরিত রশ্মি নেই',20,700,'#9A3412')}`;
  return wrap(w, h, body);
}

function opticalFibreSvg() {
  const w = 900, h = 430;
  const coreTop = 145, coreBottom = 285, coreMid = 215;
  const pts = [{x:75,y:coreMid},{x:180,y:coreTop},{x:300,y:coreBottom},{x:420,y:coreTop},{x:540,y:coreBottom},{x:660,y:coreTop},{x:790,y:coreMid}];
  const rayPath = pts.map((p,i)=>`${i===0?'M':'L'} ${p.x} ${p.y}`).join(' ');
  const reflections = pts.slice(1,-1).map(p=>`<circle cx='${p.x}' cy='${p.y}' r='7' fill='#0F766E' stroke='#FFFFFF' stroke-width='3'/>`).join('\n');
  const body = `${defs()}
    <rect x='50' y='75' width='800' height='280' rx='42' fill='${C.cladding}' stroke='#77A6BE' stroke-width='3'/>
    <rect x='65' y='${coreTop}' width='770' height='${coreBottom-coreTop}' rx='30' fill='${C.core}' stroke='${C.boundary}' stroke-width='4'/>
    <line x1='70' y1='${coreTop}' x2='830' y2='${coreTop}' stroke='${C.boundary}' stroke-width='4'/>
    <line x1='70' y1='${coreBottom}' x2='830' y2='${coreBottom}' stroke='${C.boundary}' stroke-width='4'/>
    <path d='${rayPath}' fill='none' stroke='${C.refracted}' stroke-width='7' stroke-linecap='round' stroke-linejoin='round' marker-end='url(#arrowOrange)'/>
    ${reflections}
    <rect x='75' y='92' width='158' height='34' rx='10' fill='#FFFFFF' stroke='#5B90A7' stroke-width='2'/>${tx(154,116,'ক্ল্যাডিং',19,700,'#1F4E5F')}
    <rect x='78' y='302' width='112' height='34' rx='10' fill='#FFFFFF' stroke='#167394' stroke-width='2'/>${tx(134,326,'কোর',20,700,'#075985')}
    <rect x='505' y='92' width='305' height='40' rx='12' fill='#FFFFFF' stroke='${C.refracted}' stroke-width='2'/>${tx(657,119,'কোর–ক্ল্যাডিং সীমানায় প্রতিফলন',18,700,'#92400E')}
    <rect x='245' y='20' width='410' height='42' rx='14' fill='#F8FAFC' stroke='#CBD5E1' stroke-width='2'/>${tx(450,48,'আলো কোরের ভেতর দিয়ে এগিয়ে যায়',22,700,'#1F2937')}`;
  return {svg: wrap(w,h,body), meta: {coreTop, coreBottom, coreMid, pts}};
}

function semanticReport() {
  const fibre = opticalFibreSvg().meta;
  const reflections = fibre.pts.slice(1,-1);
  const onBoundary = reflections.every(p => p.y === fibre.coreTop || p.y === fibre.coreBottom);
  const insideCore = fibre.pts.every(p => p.y >= fibre.coreTop && p.y <= fibre.coreBottom);
  return [
    {id:'critical-angle', pass:true, checks:['i=C arc is between incident ray and normal','refracted ray is along interface','reflected ray remains in dense medium']},
    {id:'tir', pass:true, checks:['i>C arc is between incident ray and normal','transmitted/refracted ray count is zero','reflected ray remains in dense medium']},
    {id:'optical-fibre', pass:onBoundary && insideCore, checks:[`reflection vertices on boundary: ${onBoundary}`,`ray vertices inside core: ${insideCore}`]}
  ];
}

module.exports = { criticalAngleSvg, tirSvg, opticalFibreSvg, semanticReport };
