import{S as L,i as V,s as Y,k as h,q as P,a as S,y as b,l as v,m as $,r as q,h as u,c as k,z as y,n as w,b as x,D as p,A as E,u as H,g as A,d as D,B}from"../chunks/index.a17d7c6c.js";import{S as z}from"../chunks/Seo.3e8dbee5.js";import{M as C}from"../chunks/Markdown.ff342e7f.js";import{f as I}from"../chunks/utils.7d7f714d.js";function N(o){let e,r,a=o[0].title+"",i,l,s,t=I("%B %Y",o[0].date)+"",m,c,d,_;return d=new C({props:{source:o[0].content}}),{c(){e=h("h3"),r=h("span"),i=P(a),l=S(),s=h("small"),m=P(t),c=S(),b(d.$$.fragment),this.h()},l(n){e=v(n,"H3",{class:!0});var f=$(e);r=v(f,"SPAN",{class:!0});var g=$(r);i=q(g,a),g.forEach(u),l=k(f),s=v(f,"SMALL",{class:!0});var M=$(s);m=q(M,t),M.forEach(u),f.forEach(u),c=k(n),y(d.$$.fragment,n),this.h()},h(){w(r,"class","mr-1"),w(s,"class","whitespace-nowrap text-neutral-500 text-base font-normal"),w(e,"class","text-black text-xl font-semibold mb-2")},m(n,f){x(n,e,f),p(e,r),p(r,i),p(e,l),p(e,s),p(s,m),x(n,c,f),E(d,n,f),_=!0},p(n,[f]){(!_||f&1)&&a!==(a=n[0].title+"")&&H(i,a),(!_||f&1)&&t!==(t=I("%B %Y",n[0].date)+"")&&H(m,t);const g={};f&1&&(g.source=n[0].content),d.$set(g)},i(n){_||(A(d.$$.fragment,n),_=!0)},o(n){D(d.$$.fragment,n),_=!1},d(n){n&&u(e),n&&u(c),B(d,n)}}}function T(o,e,r){let{data:a}=e,{images:i}=e,{stars:l=null}=e;return o.$$set=s=>{"data"in s&&r(0,a=s.data),"images"in s&&r(1,i=s.images),"stars"in s&&r(2,l=s.stars)},[a,i,l]}class W extends L{constructor(e){super(),V(this,e,T,N,Y,{data:0,images:1,stars:2})}}function j(o){let e,r,a,i,l,s;return e=new z({props:{title:"Alex Hu – Writing | "+o[1].title,description:o[1].description}}),l=new W({props:{data:o[0].page}}),{c(){b(e.$$.fragment),r=S(),a=h("div"),i=h("div"),b(l.$$.fragment),this.h()},l(t){y(e.$$.fragment,t),r=k(t),a=v(t,"DIV",{class:!0});var m=$(a);i=v(m,"DIV",{class:!0});var c=$(i);y(l.$$.fragment,c),c.forEach(u),m.forEach(u),this.h()},h(){w(i,"class","space-y-5"),w(a,"class","layout-md text-lg space-y-14")},m(t,m){E(e,t,m),x(t,r,m),x(t,a,m),p(a,i),E(l,i,null),s=!0},p(t,[m]){const c={};m&1&&(c.data=t[0].page),l.$set(c)},i(t){s||(A(e.$$.fragment,t),A(l.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),D(l.$$.fragment,t),s=!1},d(t){B(e,t),t&&u(r),t&&u(a),B(l)}}}function F(o,e,r){let{data:a}=e;const{page:i,post:l,imageData:s}=a;return o.$$set=t=>{"data"in t&&r(0,a=t.data)},[a,i]}class Q extends L{constructor(e){super(),V(this,e,F,j,Y,{data:0})}}export{Q as default};