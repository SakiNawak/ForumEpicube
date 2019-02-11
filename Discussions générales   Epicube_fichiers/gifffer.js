var Gifffer=function(){var e,t=document,a="getAttribute",i="setAttribute";e=t&&t.querySelectorAll?t.querySelectorAll("[data-gifffer]"):[];var l=function(e,l,n){var r=t.createElement("DIV"),d=n[a]("class"),f=n[a]("id");d?r[i]("class",n[a]("class")):null,f?r[i]("id",n[a]("id")):null,r[i]("style","position:relative;cursor:pointer;width:"+e+"px;height:"+l+"px;");var o=t.createElement("DIV");o[i]("class","gifffer-play-button"),o[i]("style","left:"+(e/2-30)+"px;top:"+(l/2-30)+"px;");var p=t.createElement("DIV");return p[i]("class","gifffer-play-label"),p.innerText="gif",o.appendChild(p),r.appendChild(o),n.parentNode.replaceChild(r,n),{c:r,p:o}},n=0,r=e.length,d=function(e){var n,r,d,f,o,p,c,h,u,s,g,m=!1;n=e[a]("data-gifffer"),f=e[a]("data-gifffer-width"),o=e[a]("data-gifffer-height"),p=e[a]("data-gifffer-duration"),e.style.display="block",d=document.createElement("canvas"),s=!(!d.getContext||!d.getContext("2d")),f&&o&&s&&(u=l(f,o,e)),e.onload=function(){s&&(f=f||e.width,o=o||e.height,u||(u=l(f,o,e)),r=u.c,c=u.p,r.addEventListener("click",function(e){clearTimeout(g),m?(m=!1,r.appendChild(c),r.removeChild(h),r.appendChild(d),h=null):(e.preventDefault(),m=!0,h=t.createElement("IMG"),h[i]("style","width:"+f+"px;height:"+o+"px;"),h[i]("data-uri",Math.floor(1e5*Math.random())+1),setTimeout(function(){h.src=n},0),r.removeChild(c),r.removeChild(d),r.appendChild(h),parseInt(p)>0&&(g=setTimeout(function(){m=!1,r.appendChild(c),r.removeChild(h),r.appendChild(d),h=null},p)))}),d.width=f,d.height=o,d.getContext("2d").drawImage(e,0,0,f,o),r.appendChild(d))},e.src=n};for(n;r>n;++n)d(e[n])};
/*
     FILE ARCHIVED ON 10:04:43 Nov 02, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:11:10 Feb 11, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 2080.422 (3)
  esindex: 0.006
  captures_list: 2109.673
  CDXLines.iter: 9.217 (3)
  PetaboxLoader3.datanode: 2237.815 (5)
  exclusion.robots: 0.148
  exclusion.robots.policy: 0.138
  RedisCDXSource: 11.446
  PetaboxLoader3.resolve: 204.541 (2)
  load_resource: 476.553
*/