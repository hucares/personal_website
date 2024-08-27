import{C as D,S as P,i as C,s as I,k as p,q as N,a as E,l as g,m as k,r as V,h as u,c as w,n as h,b as $,D as m,E as X,F as Z,G as H,H as ee,u as te,I as F,e as j,y as G,J as ae,z as O,A as Q,g as A,d as L,B as T,K as le,v as se,f as re,L as z,M as B,N as J,O as K,P as ne,Q as oe,R as ie}from"../chunks/index.a17d7c6c.js";import{p as ce}from"../chunks/stores.d80ddd87.js";function fe(c){const e=c-1;return e*e*e+1}function q(c,{delay:e=0,duration:a=400,easing:n=fe,x:l=0,y:s=0,opacity:t=0}={}){const r=getComputedStyle(c),i=+r.opacity,y=r.transform==="none"?"":r.transform,f=i*(1-t),[b,v]=D(l),[_,o]=D(s);return{delay:e,duration:a,easing:n,css:(d,S)=>`
			transform: ${y} translate(${(1-d)*b}${v}, ${(1-d)*_}${o});
			opacity: ${i-f*S}`}}function U(c,e,a){const n=c.slice();return n[3]=e[a],n}function W(c){let e,a,n,l,s;return{c(){e=p("span"),a=p("span"),n=N("—"),l=E(),s=N(c[1]),this.h()},l(t){e=g(t,"SPAN",{class:!0});var r=k(e);a=g(r,"SPAN",{class:!0});var i=k(a);n=V(i,"—"),i.forEach(u),l=w(r),s=V(r,c[1]),r.forEach(u),this.h()},h(){h(a,"class","text-neutral-400 svelte-bgdsr9"),h(e,"class","page-title svelte-bgdsr9")},m(t,r){$(t,e,r),m(e,a),m(a,n),m(e,l),m(e,s)},p(t,r){r&2&&te(s,t[1])},d(t){t&&u(e)}}}function Y(c,e){let a,n=e[3].name+"",l,s;return{key:c,first:null,c(){a=p("a"),l=N(n),s=E(),this.h()},l(t){a=g(t,"A",{href:!0,class:!0});var r=k(a);l=V(r,n),s=w(r),r.forEach(u),this.h()},h(){h(a,"href",e[3].href),h(a,"class","hover:text-black transition-colors svelte-bgdsr9"),F(a,"text-black",e[0].url.pathname===e[3].href),this.first=a},m(t,r){$(t,a,r),m(a,l),m(a,s)},p(t,r){e=t,r&5&&F(a,"text-black",e[0].url.pathname===e[3].href)},d(t){t&&u(a)}}}function ue(c){let e,a,n,l,s,t,r,i=[],y=new Map,f=c[1]&&W(c),b=c[2];const v=_=>_[3];for(let _=0;_<b.length;_+=1){let o=U(c,b,_),d=v(o);y.set(d,i[_]=Y(d,o))}return{c(){e=p("header"),a=p("h1"),n=p("a"),l=N("Alex Hu"),s=E(),f&&f.c(),t=E(),r=p("nav");for(let _=0;_<i.length;_+=1)i[_].c();this.h()},l(_){e=g(_,"HEADER",{class:!0,"data-sveltekit-noscroll":!0,"data-sveltekit-preload-code":!0});var o=k(e);a=g(o,"H1",{class:!0});var d=k(a);n=g(d,"A",{href:!0});var S=k(n);l=V(S,"Alex Hu"),S.forEach(u),s=w(d),f&&f.l(d),d.forEach(u),t=w(o),r=g(o,"NAV",{class:!0});var R=k(r);for(let M=0;M<i.length;M+=1)i[M].l(R);R.forEach(u),o.forEach(u),this.h()},h(){h(n,"href","/"),h(a,"class","font-bold text-black text-2xl mb-6"),h(r,"class","svelte-bgdsr9"),h(e,"class","layout-md flex justify-between items-start"),h(e,"data-sveltekit-noscroll",""),h(e,"data-sveltekit-preload-code","eager")},m(_,o){$(_,e,o),m(e,a),m(a,n),m(n,l),m(a,s),f&&f.m(a,null),m(e,t),m(e,r);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(r,null)},p(_,[o]){_[1]?f?f.p(_,o):(f=W(_),f.c(),f.m(a,null)):f&&(f.d(1),f=null),o&5&&(b=_[2],i=X(i,o,v,1,_,b,y,r,Z,Y,null,U))},i:H,o:H,d(_){_&&u(e),f&&f.d();for(let o=0;o<i.length;o+=1)i[o].d()}}}function _e(c,e,a){let n;ee(c,ce,t=>a(0,n=t));const l=[{name:"projects",href:"/projects"},{name:"writing",href:"/writing"}];let s=null;return c.$$.update=()=>{if(c.$$.dirty&1){const t=l.find(({href:r})=>r===n.url.pathname);t?a(1,s=t.name.charAt(0).toUpperCase()+t.name.slice(1)):a(1,s=null)}},[n,s,l]}class de extends P{constructor(e){super(),C(this,e,_e,ue,I,{})}}function me(c){let e,a,n,l,s,t,r,i,y;return{c(){e=p("footer"),a=p("div"),n=p("span"),l=N("Email"),s=E(),t=p("hr"),r=E(),i=p("a"),y=N("alexhu1719@gmail.com"),this.h()},l(f){e=g(f,"FOOTER",{class:!0});var b=k(e);a=g(b,"DIV",{class:!0});var v=k(a);n=g(v,"SPAN",{class:!0});var _=k(n);l=V(_,"Email"),_.forEach(u),s=w(v),t=g(v,"HR",{class:!0}),r=w(v),i=g(v,"A",{class:!0,href:!0});var o=k(i);y=V(o,"alexhu1719@gmail.com"),o.forEach(u),v.forEach(u),b.forEach(u),this.h()},h(){h(n,"class","svelte-1t3hv3r"),h(t,"class","svelte-1t3hv3r"),h(i,"class","link svelte-1t3hv3r"),h(i,"href","mailto:alexhu1719@gmail.com"),h(a,"class","row svelte-1t3hv3r"),h(e,"class","layout-md mt-20 text-lg flex flex-col")},m(f,b){$(f,e,b),m(e,a),m(a,n),m(n,l),m(a,s),m(a,t),m(a,r),m(a,i),m(i,y)},p:H,i:H,o:H,d(f){f&&u(e)}}}class he extends P{constructor(e){super(),C(this,e,null,me,I,{})}}function pe(c){let e,a,n,l,s;return{c(){e=p("script"),n=E(),l=p("script"),s=N(`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-WLNQLVY0V8");`),this.h()},l(t){e=g(t,"SCRIPT",{src:!0});var r=k(e);r.forEach(u),n=w(t),l=g(t,"SCRIPT",{});var i=k(l);s=V(i,`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-WLNQLVY0V8");`),i.forEach(u),this.h()},h(){e.async=!0,le(e.src,a="https://www.googletagmanager.com/gtag/js?id=G-WLNQLVY0V8")||h(e,"src",a)},m(t,r){$(t,e,r),$(t,n,r),$(t,l,r),m(l,s)},d(t){t&&u(e),t&&u(n),t&&u(l)}}}function ge(c){let e=c[0].pathname,a,n,l=x(c);return{c(){l.c(),a=j()},l(s){l.l(s),a=j()},m(s,t){l.m(s,t),$(s,a,t),n=!0},p(s,t){t&1&&I(e,e=s[0].pathname)?(se(),L(l,1,1,H),re(),l=x(s),l.c(),A(l,1),l.m(a.parentNode,a)):l.p(s,t)},i(s){n||(A(l),n=!0)},o(s){L(l),n=!1},d(s){s&&u(a),l.d(s)}}}function ve(c){let e,a;const n=c[4].default,l=z(n,c,c[3],null);return{c(){e=p("main"),l&&l.c()},l(s){e=g(s,"MAIN",{});var t=k(e);l&&l.l(t),t.forEach(u)},m(s,t){$(s,e,t),l&&l.m(e,null),a=!0},p(s,t){l&&l.p&&(!a||t&8)&&B(l,n,s,s[3],a?K(n,s[3],t,null):J(s[3]),null)},i(s){a||(A(l,s),a=!0)},o(s){L(l,s),a=!1},d(s){s&&u(e),l&&l.d(s)}}}function x(c){let e,a,n,l;const s=c[4].default,t=z(s,c,c[3],null);return{c(){e=p("main"),t&&t.c()},l(r){e=g(r,"MAIN",{});var i=k(e);t&&t.l(i),i.forEach(u)},m(r,i){$(r,e,i),t&&t.m(e,null),l=!0},p(r,i){t&&t.p&&(!l||i&8)&&B(t,s,r,r[3],l?K(s,r[3],i,null):J(r[3]),null)},i(r){l||(A(t,r),ne(()=>{l&&(n&&n.end(1),a=oe(e,q,{x:-10,duration:350,delay:350}),a.start())}),l=!0)},o(r){L(t,r),a&&a.invalidate(),n=ie(e,q,{y:5,duration:350}),l=!1},d(r){r&&u(e),t&&t.d(r),r&&n&&n.end()}}}function ke(c){let e,a,n,l,s,t,r,i,y,f=pe();n=new de({});const b=[ve,ge],v=[];function _(o,d){return o[1]||o[2]?0:1}return s=_(c),t=v[s]=b[s](c),i=new he({}),{c(){f&&f.c(),e=j(),a=E(),G(n.$$.fragment),l=E(),t.c(),r=E(),G(i.$$.fragment)},l(o){const d=ae("svelte-j2s426",document.head);f&&f.l(d),e=j(),d.forEach(u),a=w(o),O(n.$$.fragment,o),l=w(o),t.l(o),r=w(o),O(i.$$.fragment,o)},m(o,d){f&&f.m(document.head,null),m(document.head,e),$(o,a,d),Q(n,o,d),$(o,l,d),v[s].m(o,d),$(o,r,d),Q(i,o,d),y=!0},p(o,[d]){t.p(o,d)},i(o){y||(A(n.$$.fragment,o),A(t),A(i.$$.fragment,o),y=!0)},o(o){L(n.$$.fragment,o),L(t),L(i.$$.fragment,o),y=!1},d(o){f&&f.d(o),u(e),o&&u(a),T(n,o),o&&u(l),v[s].d(o),o&&u(r),T(i,o)}}}function ye(c,e,a){let{$$slots:n={},$$scope:l}=e,{data:s}=e;const t=/Android|iPhone/i.test(navigator.userAgent),r=matchMedia("(prefers-reduced-motion: reduce)").matches;return c.$$set=i=>{"data"in i&&a(0,s=i.data),"$$scope"in i&&a(3,l=i.$$scope)},[s,t,r,l,n]}class Ee extends P{constructor(e){super(),C(this,e,ye,ke,I,{data:0})}}export{Ee as default};
