const { semanticReport } = require('./ch11_l2_r3_optics_components_v0_1');
const report = semanticReport();
let ok = true;
for (const item of report) {
  console.log(`${item.id}: ${item.pass ? 'PASS' : 'FAIL'}`);
  for (const check of item.checks) console.log(`  - ${check}`);
  ok = ok && item.pass;
}
if (!ok) process.exit(1);
