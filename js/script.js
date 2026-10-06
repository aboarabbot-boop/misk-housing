const LOGO="assets/images/logo.png",IMG={1:"assets/images/room1.jpg",2:"assets/images/room2.jpg"},VID={1:"assets/videos/video1.mp4",2:"assets/videos/video2.mp4"},PH="962700000000";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const D={
n1:['الفروع','Branches'],n2:['الغرف','Rooms'],n3:['طريقة الحجز','How to book'],n4:['دخول الإدارة','Staff login'],
wel:['أهلاً بكِ في سكن المسك','Welcome to Sakan Al-Misk'],slog:['أكثر من مجرد مكان','More than just a place'],gm:['صباح الخير','Good morning'],ge:['مساء الخير','Good evening'],
h1:['سكن راقٍ وآمن لطالبات الجامعة','Safe, comfortable housing for female university students'],
hp:['تعرّفي على فرعي سكن المسك، قارني الغرف والأسعار، وتواصلي مع المشرفة لإتمام حجزك بسهولة.','Explore both Al-Misk branches, compare rooms and prices, and contact the supervisor to complete your booking with ease.'],
c1:['تصفّحي الغرف','Browse rooms'],c2:['تعرّفي على الفروع','Meet the branches'],
s1:['فرعان','Branches'],s2:['ساعة أمن يومياً','Hours of daily security'],s3:['دينار شهرياً تبدأ من','JOD / month, from'],s4:['غرف متاحة الآن','Rooms available now'],
br:['فروعنا','Our branches'],misk:['سكن المسك','Al-Misk Housing'],
loc1:['طريق جامعة الحسين بن طلال، بعد جسر أدروه','Al-Hussein Bin Talal University Road, after Adhruh Bridge'],loc2:['طريق جامعة الحسين بن طلال، قبل جسر أدروه','Al-Hussein Bin Talal University Road, before Adhruh Bridge'],
dbl:['غرفة مزدوجة','Double room'],tri:['غرفة ثلاثية مع حمام خاص','Triple room with private bathroom'],stu:['استوديو','Studio'],
dbl_d:['غرفة لطالبتين، مريحة ومجهزة لتناسب الدراسة والراحة.','A comfortable room for two students, set up for study and rest.'],tri_d:['غرفة لثلاث طالبات مع حمام خاص بها لمزيد من الراحة والخصوصية.','A room for three students with its own private bathroom for added comfort and privacy.'],stu_d:['وحدة مستقلة توفّر خصوصية أكبر للطالبة.','A self-contained unit offering greater privacy.'],
mo:['شهرياً','per month'],jod:['دينار','JOD'],inc:['ما يشمله الإيجار','What your rent includes'],tour:['فيديو تعريفي عن السكن','Introductory video of the housing'],
f1t:['الكهرباء','Electricity'],f1d:['مشمولة بالكامل ضمن الأجرة الشهرية دون أي فواتير إضافية.','Fully covered by the monthly rent, with no extra bills.'],
f2t:['المياه','Water'],f2d:['مياه متوفرة باستمرار ومشمولة بالأجرة.','A steady water supply, included in the rent.'],
f3t:['الإنترنت','Internet'],f3d:['اتصال إنترنت متاح لدراستك ومحاضراتك دون تكلفة إضافية.','Internet access for your studies and lectures at no extra cost.'],
f4t:['تنظيف أسبوعي','Weekly cleaning'],f4d:['خدمة تنظيف دورية للحفاظ على بيئة نظيفة ومرتبة.','A regular cleaning service that keeps the housing clean and tidy.'],
f5t:['مدافئ في كل غرفة','Heaters in every room'],f5d:['مدفأة موفّرة في كل غرفة لتمضي الشتاء بدفء.','A heater provided in every room for a warm winter.'],
f6t:['أجهزة كهربائية','Electrical appliances'],f6d:['أجهزة كهربائية موفّرة لتسهيل حياتك اليومية.','Electrical appliances provided to make daily life easier.'],
f7t:['أمن على مدار الساعة','24-hour security'],f7d:['حراسة وأمن متواصلان لطمأنينتك وطمأنينة أهلك.','Round-the-clock security for your peace of mind and your family\'s.'],
map:['📍 عرض الموقع على الخريطة','📍 View Location on Map'],wa:['💬 واتساب المشرفة','💬 WhatsApp the supervisor'],
rt:['الغرف والشواغر','Rooms & vacancies'],rh:['اضغطي على غرفة متاحة لبدء الحجز.','Tap an available room to start booking.'],fa:['الكل','All'],fv:['المتاح فقط','Available only'],
avail:['متاحة','Available'],booked:['محجوزة','Booked'],apt:['شقة','Apt'],rm:['غرفة','Room'],b:['فرع','Branch'],
hw:['كيف تحجزين؟','How to book'],
st1t:['اختاري الفرع والغرفة','Choose branch & room'],st1d:['تصفّحي الفروع وقارني الأسعار والشواغر.','Browse branches and compare prices and vacancies.'],
st2t:['تواصلي مع المشرفة','Contact the supervisor'],st2d:['أرسلي طلبك عبر واتساب أو اتصلي بها مباشرة.','Send your request on WhatsApp or call directly.'],
st3t:['ادفعي العربون','Pay the deposit'],st3d:['بعد التأكيد تتحول حالة الغرفة إلى «محجوزة» على الموقع.','Once confirmed, the room shows as “Booked” on the site.'],
st4t:['سدّدي شهرياً','Pay monthly'],st4d:['تُسجَّل بياناتك وتتابع المشرفة دفعاتك الشهرية.','Your details are recorded and the supervisor tracks your monthly payments.'],
payn:['الفصل الدراسي 4 أشهر، وتُسدَّد الأجرة على 4 دفعات شهرية:','A semester is 4 months, and rent is paid in 4 monthly installments:'],mh:['الشهر','Month'],
bkt:['طلب حجز','Booking request'],yn:['اسمك','Your name'],send:['إرسال عبر واتساب','Send via WhatsApp'],cancel:['إلغاء','Cancel'],
ad:['لوحة الإدارة','Admin panel'],lh:['دخول الإدارة والمشرفات','Management & supervisors login'],usr:['اسم المستخدم','Username'],pwd:['كلمة المرور','Password'],login:['دخول','Log in'],bad:['بيانات الدخول غير صحيحة','Incorrect login details'],hint:['تجريبي: admin / 1234','Demo: admin / 1234'],out:['تسجيل الخروج','Log out'],home:['العودة إلى الموقع','Back to website'],
tS:['الطالبات والدفعات','Students & payments'],tR:['الغرف','Rooms'],search:['🔍 ابحثي باسم الطالبة','🔍 Search by student name'],sem1:['الفصل الأول','Semester 1'],sem2:['الفصل الثاني','Semester 2'],
th_n:['الطالبة','Student'],th_r:['السكن','Housing'],th_rem:['المتبقي','Remaining'],paid:['مدفوع','Paid'],pend:['قادم','Upcoming'],late:['متأخر','Overdue'],
add:['إضافة طالبة جديدة','Add a new student'],fname:['الاسم الكامل','Full name'],addb:['إضافة','Add'],ast1:['عدد الطالبات','Students'],ast2:['غرف شاغرة','Vacant rooms'],ast3:['دفعات متأخرة','Overdue payments'],
ah:['اضغطي على خانة الشهر لتغيير حالة الدفع. النقطة الحمراء تعني تأخر الدفع.','Tap a month cell to change its payment status. A red dot means the payment is overdue.'],rh2:['اضغطي على غرفة لتبديل حالتها بين متاحة ومحجوزة.','Tap a room to switch it between available and booked.'],
occ:['الغرفة مرتبطة بطالبة','This room is assigned to a student'],delc:['حذف الطالبة وتحرير الغرفة؟','Remove the student and free the room?'],none:['لا توجد نتائج','No results'],noroom:['لا توجد غرف شاغرة','No vacant rooms']};
const t=k=>(D[k]||[k,k])[L=='ar'?0:1];
const P={1:[80,70],2:[80,100]},TK=r=>r.ty==0?'dbl':(r.b==1?'tri':'stu'),PA='07700';
let L='ar',B='1',filt='all',tabA='st',okA=false,curR=null;
try{okA=sessionStorage.getItem('amk')=='1'}catch(e){}
const pad=n=>String(n).padStart(2,'0'),iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const dd=(s,i)=>{const[a,b,c]=s.start.split('-').map(Number);return iso(new Date(a,b-1+i,c))};
const TD=iso(new Date());
function seed(){const R=[];[1,2].forEach(b=>[0,1].forEach(ty=>{for(let n=1;n<=3;n++)R.push({id:b+'-'+(ty+1)+'-'+n,b,ty,apt:ty+1,no:n,bk:0})}));
const st=[['ريم أحمد','Reem Ahmad','1','2026-09-01','1-1-1',[1,0,0,0]],['لينا خالد','Lina Khaled','1','2026-09-01','1-1-2',[1,1,0,0]],['سلمى يوسف','Salma Yousef','1','2026-09-15','1-2-1',[0,0,0,0]],['دانا عمر','Dana Omar','1','2026-09-15','2-1-1',[1,1,0,0]],['هبة محمد','Hiba Mohammad','2','2027-02-01','2-2-1',[1,0,0,0]]].map((a,i)=>({id:'s'+i,n:[a[0],a[1]],sem:a[2],start:a[3],rid:a[4],paid:a[5]}));
st.forEach(s=>R.find(r=>r.id==s.rid).bk=1);['1-2-3','2-2-3'].forEach(i=>R.find(r=>r.id==i).bk=1);return{rooms:R,st}}
const KEY='almisk_v3';let S=null;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}if(!S||!S.rooms)S=seed();
let DB=null;
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}try{if(DB)DB.set({json:JSON.stringify(S)}).catch(()=>{})}catch(e){}}
(async()=>{try{if(!window.claude)return;const db=await claude.use('db');if(!db)return;const d=db.doc('app/state');DB=d;const sn=await d.get();if(sn.exists&&sn.data().json){S=JSON.parse(sn.data().json);render()}else await d.set({json:JSON.stringify(S)});d.onSnapshot(x=>{try{if(x.exists&&x.data().json&&x.data().json!=JSON.stringify(S)){S=JSON.parse(x.data().json);render()}}catch(e){}},()=>{})}catch(e){}})();

function tr(){document.documentElement.lang=L;document.documentElement.dir=L=='ar'?'rtl':'ltr';
$$('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));$$('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
$('#lang').textContent=L=='ar'?'EN':'عربي';
$$('.tabs .tab[data-b]').forEach(e=>e.textContent=t('misk')+' '+e.dataset.b);
$('#gr').textContent=t(new Date().getHours()<12?'gm':'ge');
$('#mths').innerHTML=[1,2,3,4].map(i=>`<div>${t('mh')} ${i}</div>`).join('');render()}
function setMedia(){$('#bmedia').innerHTML=`<video controls playsinline preload="metadata" poster="${IMG[B]}" src="${VID[B]}"></video><img src="${IMG[B]}" alt="${t('misk')} ${B}">`}
function rBr(){const ty=B=='1'?['dbl','tri']:['dbl','stu'];
$('#binfo').innerHTML=`<div class="card"><b>${t('misk')} ${B}</b><p style="margin:4px 0">📍 ${t('loc'+B)}</p></div>`+
ty.map((k,i)=>`<div class="card" style="margin-top:12px"><b>${t(k)}</b><div style="color:var(--mu);font-size:14px">${t(k+'_d')}</div><div class="price">${P[B][i]} <small>${t('jod')} / ${t('mo')}</small></div></div>`).join('')+
`<h3 style="margin:22px 0 4px;color:var(--pr)">${t('inc')}</h3><div class="fl">`+[1,2,3,4,5,6,7].map((n,i)=>`<div style="animation-delay:${i*.07}s"><em>${'⚡💧📶🧹🔥🔌🛡️'.match(/.\uFE0F?/gu)[i]}</em><span><b>${t('f'+n+'t')}</b><small>${t('f'+n+'d')}</small></span></div>`).join('')+`</div>
<p style="margin-top:18px"><a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Adhruh Bridge Jordan')}">${t('map')}</a> <a class="btn alt" target="_blank" rel="noopener" href="https://wa.me/${PH}">${t('wa')}</a></p>`}
const rcard=(r,j)=>`<div class="card room ${r.bk?'bk':''}" data-id="${r.id}" style="animation-delay:${j*.04}s"><div class="rh"><b>${t('misk')} ${r.b}</b><span class="tag ${r.bk?'b':'a'}">${r.bk?t('booked'):t('avail')}</span></div><div>${t(TK(r))}</div><small style="color:var(--mu)">${t('apt')} ${r.apt} · ${t('rm')} ${r.no}</small><div class="price">${P[r.b][r.ty]} <small>${t('jod')} / ${t('mo')}</small></div></div>`;
function rRooms(){$('#rooms').innerHTML=S.rooms.filter(r=>filt=='all'||!r.bk).map(rcard).join('');const n=S.rooms.filter(r=>!r.bk).length;$('#avc').textContent=n}
function rAdm(){if(!$('#adm').hidden){$('#lgn').hidden=okA;$('#dash').hidden=!okA}if(!okA)return;
const q=$('#q').value.trim().toLowerCase(),sm=$('#sm').value;let od=0;
S.st.forEach(s=>s.paid.forEach((p,i)=>{if(!p&&dd(s,i)<TD)od++}));
$('#a1').textContent=S.st.length;$('#a2').textContent=S.rooms.filter(r=>!r.bk).length;$('#a3').textContent=od;
const rows=S.st.filter(s=>s.sem==sm&&(s.n[0]+' '+s.n[1]).toLowerCase().includes(q));
$('#tb').innerHTML=rows.map((s,j)=>{const r=S.rooms.find(x=>x.id==s.rid),pr=P[r.b][r.ty];let rem=0,late=0;
const cells=[0,1,2,3].map(i=>{const p=s.paid[i],o=!p&&dd(s,i)<TD;if(!p)rem+=pr;if(o)late=1;return`<td><button class="cell ${p?'ok':o?'bad':''}" data-s="${s.id}" data-i="${i}">${p?'✓ '+t('paid'):o?'<i class="dot"></i>'+t('late'):t('pend')}<small>${dd(s,i)}</small></button></td>`}).join('');
return`<tr style="animation-delay:${j*.05}s"><td>${late?'<i class="dot"></i>':''}<b>${esc(s.n[L=='ar'?0:1])}</b></td><td>${t('b')} ${r.b} · ${t('apt')} ${r.apt} · ${t('rm')} ${r.no}</td>${cells}<td><b>${rem}</b> ${t('jod')}</td><td><button class="btn sm alt" data-del="${s.id}">✕</button></td></tr>`}).join('')||`<tr><td colspan="8">${t('none')}</td></tr>`;
const v=S.rooms.filter(r=>!r.bk);$('#fr').innerHTML=v.map(r=>`<option value="${r.id}">${t('misk')} ${r.b} · ${t(TK(r))} · ${t('apt')} ${r.apt}/${r.no}</option>`).join('')||`<option value="">${t('noroom')}</option>`;
$('#arooms').innerHTML=S.rooms.map(rcard).join('')}
function render(){rBr();rRooms();rAdm()}
function route(){const a=location.hash.startsWith('#/admin');$('#site').hidden=a;$('#adm').hidden=!a;window.scrollTo(0,0);if(a)rAdm()}
addEventListener('hashchange',route);
$$('.tabs .tab[data-b]').forEach(e=>e.onclick=()=>{$$('.tabs .tab[data-b]').forEach(x=>x.classList.remove('on'));e.classList.add('on');B=e.dataset.b;setMedia();rBr()});
$$('.chips .tab').forEach(e=>e.onclick=()=>{$$('.chips .tab').forEach(x=>x.classList.remove('on'));e.classList.add('on');filt=e.dataset.f;rRooms()});
$$('[data-a]').forEach(e=>e.onclick=()=>{$$('[data-a]').forEach(x=>x.classList.remove('on'));e.classList.add('on');tabA=e.dataset.a;$('#pst').hidden=tabA!='st';$('#prm').hidden=tabA!='rm'});
$('#rooms').onclick=e=>{const c=e.target.closest('.room');if(!c)return;const r=S.rooms.find(x=>x.id==c.dataset.id);if(!r||r.bk)return;curR=r;$('#mt').textContent=t('bkt')+': '+t('misk')+' '+r.b+' — '+t(TK(r));$('#md').classList.add('on')};
$('#cl').onclick=()=>$('#md').classList.remove('on');$('#md').onclick=e=>{if(e.target.id=='md')$('#md').classList.remove('on')};
$('#bk').onclick=()=>{if(!curR)return;const m=`${L=='ar'?'مرحباً، أرغب بحجز':'Hello, I would like to book'} ${$('#mt').textContent} (${t('apt')} ${curR.apt} / ${t('rm')} ${curR.no}). ${$('#nm').value}`;window.open('https://wa.me/'+PH+'?text='+encodeURIComponent(m),'_blank','noopener');$('#md').classList.remove('on')};
$('#go').onclick=()=>{if($('#u').value.trim()=='admin'&&$('#p').value=='1234'){okA=true;try{sessionStorage.setItem('amk','1')}catch(e){}$('#er').textContent='';$('#p').value='';rAdm()}else{$('#er').textContent=t('bad')}};
$('#p').onkeydown=e=>{if(e.key=='Enter')$('#go').click()};
$('#lo').onclick=()=>{okA=false;try{sessionStorage.removeItem('amk')}catch(e){}location.hash='#/'};
$('#q').oninput=rAdm;$('#sm').onchange=rAdm;
$('#tb').onclick=e=>{const c=e.target.closest('.cell'),d=e.target.closest('[data-del]');
if(c){const s=S.st.find(x=>x.id==c.dataset.s);s.paid[+c.dataset.i]^=1;save();rAdm()}
if(d&&confirm(t('delc'))){const s=S.st.find(x=>x.id==d.dataset.del);S.rooms.find(r=>r.id==s.rid).bk=0;S.st=S.st.filter(x=>x!=s);save();render()}};
$('#arooms').onclick=e=>{const c=e.target.closest('.room');if(!c)return;if(S.st.some(s=>s.rid==c.dataset.id)){alert(t('occ'));return}const r=S.rooms.find(x=>x.id==c.dataset.id);r.bk^=1;save();render()};
$('#fa2').onclick=()=>{const n=$('#fn').value.trim(),rid=$('#fr').value,d=$('#fd').value;if(!n||!rid||!d)return;
S.st.push({id:'s'+Date.now(),n:[n,n],sem:$('#fs').value,start:d,rid,paid:[1,0,0,0]});S.rooms.find(r=>r.id==rid).bk=1;$('#fn').value='';save();render()};
$('#lang').onclick=()=>{L=L=='ar'?'en':'ar';tr()};
$('#th').onclick=()=>{const d=document.documentElement,dk=d.dataset.theme?d.dataset.theme=='dark':matchMedia('(prefers-color-scheme:dark)').matches;d.dataset.theme=dk?'light':'dark'};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});$$('.rv').forEach(e=>io.observe(e));
function count(){$$('[data-n]').forEach(e=>{const n=+e.dataset.n;let v=0;const s=setInterval(()=>{v+=Math.ceil(n/40);if(v>=n){v=n;clearInterval(s)}e.textContent=v},35)})}
// splash
const sp=$('#splash');let gone=0;const hide=()=>{if(gone)return;gone=1;sp.classList.add('out');setTimeout(()=>sp.remove(),800);count()};sp.onclick=hide;setTimeout(hide,3000);
// cursor
try{if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.body.classList.add('cc');const cd=$('#cd'),cr=$('#cr');let x=0,y=0,rx=0,ry=0,lx=0,ly=0;
addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;cd.style.opacity=cr.style.opacity=1;cd.style.transform=`translate(${x}px,${y}px)`;
cr.classList.toggle('h',!!e.target.closest('a,button,.card,.tab,select,.cell,video,.stat'));
if(Math.hypot(x-lx,y-ly)>28){lx=x;ly=y;const s=document.createElement('i');s.className='spk';s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--x',(Math.random()*40-20)+'px');s.style.setProperty('--y',(20+Math.random()*30)+'px');document.body.appendChild(s);s.onanimationend=()=>s.remove()}});
document.addEventListener('mouseleave',()=>cd.style.opacity=cr.style.opacity=0);
addEventListener('mousedown',e=>{cr.classList.add('d');const r=document.createElement('i');r.className='rip';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.appendChild(r);r.onanimationend=()=>r.remove()});addEventListener('mouseup',()=>cr.classList.remove('d'));
(function f(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;cr.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f)})();
document.addEventListener('mousemove',e=>{const c=e.target.closest('.room,.stat');$$('.room,.stat').forEach(k=>{if(k!==c)k.style.transform=''});if(c){const b=c.getBoundingClientRect();c.style.transform=`perspective(600px) rotateX(${-((e.clientY-b.top)/b.height-.5)*8}deg) rotateY(${((e.clientX-b.left)/b.width-.5)*8}deg) translateY(-4px)`}})}}catch(e){}
setMedia();tr();route();
