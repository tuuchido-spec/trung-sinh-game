const $=id=>document.getElementById(id);
const SAVE="trungSinhV3Save";
let state=null,selectedIdentity=null,currentTab="memories";

function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");window.scrollTo(0,0)}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function baseState(name,identity){
 const d=STORY.identities.find(x=>x.id===identity), st=d.stats;
 return {name,identity,day:1,chapter:0,scene:0,affection:35,money:st.money,intelligence:st.intelligence,reputation:st.reputation,willpower:st.willpower,career:st.career,trust:25,freedom:st.freedom,stress:20,memory:0,memories:[],relations:{luc:0,tan:0,ha:0,trinh:0},flags:{},history:[]};
}
function save(){if(!state)return;localStorage.setItem(SAVE,JSON.stringify(state));toast("Đã lưu cuộc đời này.")}
function load(){try{const x=localStorage.getItem(SAVE);if(!x)return false;state=JSON.parse(x);renderHub();return true}catch(e){return false}}
function initCreate(){
 $("identityChoices").innerHTML=STORY.identities.map(i=>`<button class="identity-btn" data-id="${i.id}"><b>${i.name}</b><small>${i.desc}</small></button>`).join("");
 document.querySelectorAll(".identity-btn").forEach(b=>b.onclick=()=>{selectedIdentity=b.dataset.id;document.querySelectorAll(".identity-btn").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});
}
function create(){const n=$("nameInput").value.trim();if(!n)return toast("Hãy nhập tên của bạn.");if(!selectedIdentity)return toast("Hãy chọn một thân phận.");state=baseState(n,selectedIdentity);save();show("hubScreen");renderHub();setTimeout(()=>mainScene(),250)}
function statsHtml(){return [["❤️","Tình cảm","affection"],["💰","Tài chính","money"],["🧠","Trí tuệ","intelligence"],["⭐","Danh tiếng","reputation"],["💪","Ý chí","willpower"],["🕊️","Tự do","freedom"],["🤝","Tin tưởng","trust"],["😵","Căng thẳng","stress"]].map(x=>`<div class="stat"><b>${x[0]} ${state[x[2]]}</b><span>${x[1]}</span></div>`).join("")}
function renderHub(){$("hubDay").textContent="Ngày "+state.day;$("memoryCount").textContent=state.memory;$("hubGreeting").textContent=`${state.name}, một cuộc đời mới.`;$("hubHint").textContent=state.memory<4?"Bạn có quyền chọn lại. Nhưng ký ức vẫn đang tìm đường trở về.":"Những mảnh ký ức bắt đầu nối lại với nhau.";$("hubStats").innerHTML=statsHtml()}
function effect(e){Object.entries(e||{}).forEach(([k,v])=>{if(k==="memory"){addMemory(v);return}if(state[k]!==undefined)state[k]+=v});["affection","intelligence","reputation","willpower","career","trust","freedom","stress"].forEach(k=>state[k]=Math.max(0,Math.min(100,state[k])));state.money=Math.max(0,state.money)}
function addMemory(n=1){for(let i=0;i<n;i++){if(state.memory>=20)break;state.memory++;state.memories.push(`Mảnh ký ức #${String(state.memory).padStart(2,"0")} — một hình ảnh chưa hoàn chỉnh.`)}}
function setSceneBg(bg){const map={rain:"linear-gradient(145deg,#10131a,#202a38 55%,#07090e)",city:"linear-gradient(145deg,#10101a,#30253a 55%,#08080d)",cafe:"linear-gradient(145deg,#211813,#3a2820 55%,#0b0909)",night:"linear-gradient(145deg,#090b14,#1a1730 55%,#05050a)",rooftop:"linear-gradient(145deg,#12121c,#2d2030 55%,#08080d)",office:"linear-gradient(145deg,#121216,#28252b 55%,#09090b)"};$("sceneBackground").style.backgroundImage=map[bg]||map.night}
function showCharacter(name){const c=CHARACTERS.find(x=>x.name===name);const img=$("characterImage"),ph=$("characterPlaceholder");if(!c){img.hidden=true;ph.style.display="flex";ph.textContent="?";return}ph.style.display="none";img.hidden=false;img.src=c.image;img.onerror=()=>{img.hidden=true;ph.style.display="flex";ph.textContent=c.name.slice(0,1)}} 
function openScene(data,choices,type="CỐT TRUYỆN"){
 $("sceneType").textContent=type;$("sceneChapter").textContent=data.chapter||("CHƯƠNG "+(state.chapter+1));$("sceneDay").textContent="Ngày "+state.day;$("speakerName").textContent=data.speaker||"Người kể chuyện";$("dialogueText").textContent=data.text;setSceneBg(data.bg||"night");showCharacter(data.speaker);
 const box=$("choices");box.innerHTML="";
 choices.forEach((c,i)=>{const b=document.createElement("button");b.className="dialogue-choice";b.textContent=(i+1)+". "+c.text;b.onclick=()=>{effect(c.effects);if(c.relation){state.relations[c.relation]=(state.relations[c.relation]||0)+(c.relationValue||5)}state.history.push(c.text);save();c.next?c.next():afterChoice()};box.appendChild(b)})
 show("sceneScreen")
}
function mainScene(){const ch=STORY.chapters[state.chapter];if(!ch){return finish()}const sc=ch.scenes[state.scene];if(!sc){state.chapter++;state.scene=0;state.day++;save();return mainScene()}openScene({...sc,chapter:`CHƯƠNG ${ch.id} • ${ch.title}`},[{text:"Tiếp tục",next:()=>{state.scene++;save();mainScene()}}],"CỐT TRUYỆN");if(sc.memory&&!state.flags["m"+state.chapter+"_"+state.scene]){state.flags["m"+state.chapter+"_"+state.scene]=1;addMemory(sc.memory);save()}}
function randomSituation(){const s=SITUATIONS[Math.floor(Math.random()*SITUATIONS.length)];openScene(s,s.choices.map(c=>({...c,next:()=>{state.day++;save();renderHub();show("hubScreen")}})),"TÌNH HUỐNG")}
function afterAction(action){state.day++;const effects={work:{money:8,career:5,stress:5},relation:{affection:6,trust:4,stress:2},family:{trust:5,stress:-4},study:{intelligence:6,career:2,stress:4},city:{freedom:5,reputation:2,stress:2},memory:{memory:1,intelligence:3,stress:4}};effect(effects[action]);save();if(Math.random()<.62)randomSituation();else{renderHub();show("hubScreen")}}
function finish(){const sorted=[...ENDINGS].sort((a,b)=>Number(b.need(state))-Number(a.need(state)));const e=sorted.find(x=>x.need(state))||ENDINGS[ENDINGS.length-1];$("endingTitle").textContent=e.title;$("endingText").textContent=e.text;$("endingStats").innerHTML=[["❤️",state.affection],["🧩",state.memory],["🕊️",state.freedom],["⭐",state.reputation]].map(x=>`<div><b>${x[0]} ${x[1]}</b><small>Final</small></div>`).join("");show("endingScreen")}
function journal(tab=currentTab){currentTab=tab;document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===tab));if(tab==="memories")$("journalContent").innerHTML=state.memories.length?state.memories.map(x=>`<div class="journal-item"><b>${x.split(" — ")[0]}</b><small>${x.split(" — ")[1]}</small></div>`).join(""):`<p style="color:var(--muted)">Chưa có ký ức nào.</p>`;else $("journalContent").innerHTML=CHARACTERS.map(c=>`<div class="journal-item"><b>${c.name}</b><small>${c.job} • ${c.trait}<br>Quan hệ: ${state.relations[c.id]||0}</small></div>`).join("")}
function profile(){const id=STORY.identities.find(x=>x.id===state.identity);$("profileContent").innerHTML=`<div class="section-kicker">HỒ SƠ KIẾP NÀY</div><h2>${state.name}</h2><p style="color:var(--muted)">${id.name}</p>`+statsHtml().replaceAll("class="stat"","class="profile-line"");show("profileScreen")}
document.addEventListener("DOMContentLoaded",()=>{
 initCreate();$("startBtn").onclick=()=>show("createScreen");$("continueBtn").onclick=()=>{if(load())show("hubScreen");else toast("Chưa có cuộc đời nào được lưu.")};$("createBtn").onclick=create;$("saveBtn").onclick=save;
 document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>show(b.dataset.back));document.querySelectorAll(".hub-btn").forEach(b=>b.onclick=()=>afterAction(b.dataset.action));
 $("sceneBackBtn").onclick=()=>{renderHub();show("hubScreen")};$("journalBtn").onclick=()=>{journal("memories");show("journalScreen")};$("profileBtn").onclick=profile;$("restartBtn").onclick=()=>{localStorage.removeItem(SAVE);selectedIdentity=null;$("nameInput").value="";initCreate();show("createScreen")};
 document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>journal(t.dataset.tab));
});