(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(12),i=n.n(r),s=n(4),o=n.n(s),u=n(6),l=n(3),p=n(8),d=(n(18),n(7)),b=n(5),j=n(0),h=function(e){var t=e.currentSong,n=e.isPlaying,c=e.setIsPlaying,a=e.audioRef,r=e.songInfo,i=e.setSongInfo,s=e.songs,p=e.setCurrentSong,h=e.setSongs,f=function(e){var t=s.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));h(t)},m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(u.a)(o.a.mark((function e(c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.findIndex((function(e){return e.id===t.id})),"skip-forward"!==c){e.next=5;break}return e.next=4,p(s[(r+1)%s.length]);case 4:f(s[(r+1)%s.length]);case 5:if("skip-back"!==c){e.next=15;break}if((r-1)%s.length!==-1){e.next=12;break}return e.next=9,p(s[s.length-1]);case 9:return f(s[s.length-1]),n&&a.current.play(),e.abrupt("return");case 12:return e.next=14,p(s[(r-1)%s.length]);case 14:f(s[(r-1)%s.length]);case 15:n&&a.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(r.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:m(r.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],",").concat(t.color[1],")")},className:"track",children:[Object(j.jsx)("input",{min:0,max:r.duration||0,value:r.currentTime,onChange:function(e){a.current.currentTime=e.target.value,i(Object(l.a)(Object(l.a)({},r),{},{currentTime:e.target.value}))},type:"range"}),Object(j.jsx)("div",{style:O,className:"animate-track"})]}),Object(j.jsx)("p",{children:r.duration?m(r.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(d.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(j.jsx)(d.a,{onClick:function(){n?(a.current.pause(),c(!n)):(a.current.play(),c(!n))},className:"play",size:"2x",icon:n?b.d:b.e}),Object(j.jsx)(d.a,{className:"skip-forward",size:"2x",icon:b.b,onClick:function(){return g("skip-forward")}})]})]})},f=function(e){var t=e.currentSong;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{src:t.cover,alt:"Cover Art"}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},m=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,a=e.audioRef,r=e.isPlaying,i=e.id,s=e.setSongs,p=function(){var e=Object(u.a)(o.a.mark((function e(){var u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:a.current.play(),u=n.map((function(e){return e.id===i?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),s(u),r&&a.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:p,className:"library-song ".concat(t.active?"selected":""),children:[Object(j.jsx)("img",{src:t.cover,alt:"Cover Art"}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("h4",{children:t.artist})]})]})},g=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,a=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(j.jsx)(m,{song:e,setCurrentSong:n,songs:t,id:e.id,audioRef:c,isPlaying:a,setSongs:r},e.id)}))})]})},O=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Waves"}),Object(j.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(j.jsx)(d.a,{icon:b.c})]})]})},v=n(27);var x=function(){return[{name:"Keep Going",cover:"https://f4.bcbits.com/img/a1176758100_16.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#BC3F75","#68225E"],id:Object(v.a)(),active:!0},{name:"What If I Told You",cover:"https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",artist:"Juan Rios",audio:"https://mp3.chillhop.com/serve.php/?mp3=21649",color:["#FDD79A","#5E0920"],id:Object(v.a)(),active:!1},{name:"Same Old Circle",cover:"https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",artist:"Middle School",audio:"https://mp3.chillhop.com/serve.php/?mp3=22935",color:["#384B54","#F06232"],id:Object(v.a)(),active:!1},{name:"Fallin'",cover:"https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",artist:"Ruck P",audio:"https://mp3.chillhop.com/serve.php/?mp3=20561",color:["#614D75","#CF848D"],id:Object(v.a)(),active:!1},{name:"Sunny in Saint Petersburg",cover:"https://chillhop.com/wp-content/uploads/2021/03/7945133f0b1f4f167f056fe0c369f05f2ef415f2-1024x1024.jpg",artist:"Saib",audio:"https://mp3.chillhop.com/serve.php/?mp3=16076",color:["#FAE542","#65CFB8"],id:Object(v.a)(),active:!1},{name:"Festa",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",artist:"Misha, Jussi Halme, Cocabona",audio:"https://mp3.chillhop.com/serve.php/?mp3=12091",color:["#2E385B","#FD5171"],id:Object(v.a)(),active:!1},{name:"Tether",cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",artist:"Makzo, Bcalm",audio:"https://mp3.chillhop.com/serve.php/?mp3=20127",color:["#B5AF3E","#A67270"],id:Object(v.a)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(x()),n=Object(p.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(a[0]),s=Object(p.a)(i,2),d=s[0],b=s[1],m=Object(c.useState)(!1),v=Object(p.a)(m,2),y=v[0],S=v[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),C=Object(p.a)(k,2),w=C[0],P=C[1],F=Object(c.useState)(!1),N=Object(p.a)(F,2),I=N[0],T=N[1],M=function(e){var t=e.target.currentTime,n=e.target.duration,c=Math.round(t),a=Math.round(n),r=Math.round(c/a*100);P(Object(l.a)(Object(l.a)({},w),{},{currentTime:t,duration:n,animationPercentage:r}))},R=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.findIndex((function(e){return e.id===d.id})),t.next=3,b(a[(n+1)%a.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(I?"library-active":""),children:[Object(j.jsx)(O,{libraryStatus:I,setLibraryStatus:T}),Object(j.jsx)(f,{currentSong:d}),Object(j.jsx)(h,{isPlaying:y,setIsPlaying:S,currentSong:d,audioRef:e,songInfo:w,setSongInfo:P,timeUpdateHandler:M,songs:a,setCurrentSong:b,setSongs:r}),Object(j.jsx)(g,{songs:a,setCurrentSong:b,audioRef:e,isPlaying:y,setSongs:r,libraryStatus:I}),Object(j.jsx)("audio",{onTimeUpdate:M,onLoadedMetadata:M,ref:e,src:d.audio,onEnded:R})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.a78c8f01.chunk.js.map