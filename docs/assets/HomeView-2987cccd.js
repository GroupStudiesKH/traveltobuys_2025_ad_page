import{_,u as d,r as t,o,a as m,c as v,b as l}from"./index-b14c74df.js";const p="/assets/img/S25-01-banner2.webp",g="/assets/img/S25-01-food.webp",b="/assets/img/S25-01-banner.webp",w="/assets/img/S25-01-banner1.webp",f="/assets/img/S25-01-food2.webp",u="/assets/img/S25-01-banner3.webp",S="/assets/img/S25-01-food3.webp",h="/assets/img/S25-01-screen2.webp",x="/assets/img/S25-01-screen3.webp",O="/assets/img/S25-01-screen4.webp",E="/assets/img/S25-01-screen5.webp",I="/assets/img/S25-02-screen1.webp",k="/assets/img/S25-02-screen2.webp",A="/assets/img/S25-02-screen3.webp",$="/assets/img/S25-02-screen4.webp",y="/assets/img/S25_03_screen1.webp",B="/assets/img/S25_03_screen2.webp",L="/assets/img/S25_03_screen3.webp",R="/assets/img/S25-01-add.webp",V={components:{},setup(){d();const c=t([]);return o(()=>{const n=t(new Set),r=new IntersectionObserver(s=>{s.forEach(e=>{const i=Array.from(c.value).indexOf(e.target);e.isIntersecting&&!n.value.has(i)&&(e.target.classList.add("animate"),n.value.add(i))})},{threshold:.5}),a=new IntersectionObserver(s=>{s.forEach(e=>{const i=Array.from(c.value).indexOf(e.target);e.isIntersecting&&!n.value.has(i)&&(e.target.classList.add("animate"),n.value.add(i))})},{threshold:.1});c.value=Array.from(document.querySelectorAll(".screen_container")),c.value.forEach(s=>{switch(s.parentElement.id){case"screen_25_3":case"screen_25_2":case"screen_25_4":case"screen_25_5":case"screen_25_6":case"screen_25_7":case"screen_25_8":case"screen_25_10":case"screen_25_12":r.observe(s);break;case"screen_25_9":case"screen_25_11":a.observe(s);break}})}),{}}};function q(c,n,r,a,s,e){return m(),v("main",null,n[0]||(n[0]=[l('<div id="screen_25_1"><div class="screen_container animate"><div class="left_side"><img src="'+p+'" style="width:80%;margin:5% 0;"><img src="'+g+'"></div><img src="'+b+'" class="banner"><img src="'+w+'" class="banner1"><div class="right_side"><img src="'+f+'"><img src="'+u+'" style="width:60%;margin:5% 0;"><img src="'+S+'"></div></div></div><div id="screen_25_2"><div class="screen_container"><img src="'+h+'" class="banner"></div></div><div id="screen_25_3"><div class="screen_container"><img src="'+x+'" class="banner"></div></div><div id="screen_25_4"><div class="screen_container"><img src="'+O+'" class="banner"></div></div><div id="screen_25_5"><div class="screen_container"><img src="'+E+'" class="banner"></div></div><div id="screen_25_6"><div class="screen_container animate"><img src="'+I+'" class="banner"></div></div><div id="screen_25_7"><div class="screen_container"><img src="'+k+'" class="banner"></div></div><div id="screen_25_8"><div class="screen_container"><img src="'+A+'" class="banner"></div></div><div id="screen_25_9"><div class="screen_container"><img src="'+$+'" class="banner"></div></div><div id="screen_25_10"><div class="screen_container animate"><img src="'+y+'" class="banner"></div></div><div id="screen_25_11"><div class="screen_container"><img src="'+B+'" class="banner"><img src="'+L+'" class="banner"></div></div><div id="screen_25_12"><div class="screen_container"></div></div><a class="add"><img src="'+R+'"></a>',13)]))}const M=_(V,[["render",q]]);export{M as default};
