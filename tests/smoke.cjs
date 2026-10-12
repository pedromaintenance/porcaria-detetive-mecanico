/* Executar com node tests/smoke.cjs. Teste do fluxo de todas as missões sem navegador. */
const vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert');
const folder=path.resolve(__dirname,'..');
const stored={};
const handlers={};
const root={innerHTML:'',addEventListener:(type,cb)=>{handlers[type]=cb;}};
const toast={textContent:'',classList:{add(){},remove(){}}};
const importEl={addEventListener(){},click(){}};
const dom={getElementById:(id)=>id==='app'?root:id==='toast'?toast:importEl,createElement:()=>({style:{},click(){},remove(){},select(){}}),body:{appendChild(){}}};
const w={addEventListener(){},confirm:()=>true,scrollTo(){},scrollY:0,isSecureContext:false};
const ctx={window:w,document:dom,localStorage:{getItem:(k)=>stored[k]||null,setItem:(k,v)=>{stored[k]=v;}},location:{protocol:'file:'},navigator:{},setTimeout:()=>1,clearTimeout(){},URL:{createObjectURL(){return'blob:demo'},revokeObjectURL(){}},Blob:class{},console,Date,Math,JSON,String,Number,Array,Object,Set,Promise};
vm.createContext(ctx);
for(const src of ['js/cases.js','js/app.js'])vm.runInContext(fs.readFileSync(path.join(folder,src),'utf8'),ctx,{filename:src});
const dispatch=(action,data={})=>{const el={dataset:{action,...data}};handlers.click({target:{closest:()=>el}});};
const data=()=>JSON.parse(stored['porcaria.detetive.v1']);
assert(root.innerHTML.includes('Toda falha'));
assert.equal(w.PORCARIA_CASES.length,7);
for(const c of w.PORCARIA_CASES){
  dispatch('open-case',{id:c.id});assert(root.innerHTML.includes(c.title));
  dispatch('start-case',{id:c.id});assert(data().session.stage==='triage');
  dispatch('triage-choice',{index:String(c.triage.findIndex(x=>x.grade===2))});dispatch('triage-confirm');
  assert.equal(data().session.stage,'investigate');
  const required=[...new Set([...c.core,...(c.hypotheses.find(x=>x.grade===2)?.requires||[]),...(c.solutions.find(x=>x.grade===2)?.requires||[])])];
  for(const tag of required){const item=c.inspections.find(x=>x.tag===tag);assert(item,'missing inspection for '+tag+' in '+c.id);dispatch('inspect',{id:item.id});}
  dispatch('to-hypothesis');assert.equal(data().session.stage,'hypothesis');
  dispatch('hyp-choice',{index:String(c.hypotheses.findIndex(x=>x.grade===2))});dispatch('to-solution');
  assert.equal(data().session.stage,'solution');dispatch('sol-choice',{index:String(c.solutions.findIndex(x=>x.grade===2))});dispatch('finish');
  assert.equal(data().session.stage,'result');assert(data().records[c.id].best>=85,'Low score for '+c.id+' '+data().records[c.id].best);
  assert(root.innerHTML.includes('Resultado da investigação'));
  console.log(`OK ${c.number} ${c.title}: ${data().records[c.id].best}/100; ${required.length} inspeções`);
}
assert.equal(Object.keys(data().records).length,7);
dispatch('nav',{page:'profile'});assert(root.innerHTML.includes('Seu histórico'));
dispatch('nav',{page:'library'});assert(root.innerHTML.includes('Arquivo técnico'));
dispatch('nav',{page:'settings'});assert(root.innerHTML.includes('Oficina digital'));
console.log('OK: 7/7 missões, salvamento, histórico, biblioteca e configurações.');
