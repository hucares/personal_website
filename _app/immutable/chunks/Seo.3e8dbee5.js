import{S as f,i as _,s as T,k as d,J as E,l as h,h as u,n as t,D as g,G as p}from"./index.a17d7c6c.js";function y(c){let o,a,i,l,r,e,s;return document.title=o=c[0],{c(){a=d("meta"),i=d("meta"),r=d("meta"),e=d("meta"),s=d("meta"),this.h()},l(m){const n=E("svelte-1fbmuei",document.head);a=h(n,"META",{name:!0,content:!0}),i=h(n,"META",{property:!0,content:!0}),r=h(n,"META",{property:!0,content:!0}),e=h(n,"META",{property:!0,content:!0}),s=h(n,"META",{name:!0,content:!0}),n.forEach(u),this.h()},h(){t(a,"name","description"),t(a,"content",c[2]),t(i,"property","og:title"),t(i,"content",l=c[1]??c[0]),t(r,"property","og:description"),t(r,"content",c[2]),t(e,"property","og:image"),t(e,"content","https://www.ekzhang.com/assets/images/hudson-landscape.jpg"),t(s,"name","twitter:card"),t(s,"content","summary_large_image")},m(m,n){g(document.head,a),g(document.head,i),g(document.head,r),g(document.head,e),g(document.head,s)},p(m,[n]){n&1&&o!==(o=m[0])&&(document.title=o),n&4&&t(a,"content",m[2]),n&3&&l!==(l=m[1]??m[0])&&t(i,"content",l),n&4&&t(r,"content",m[2])},i:p,o:p,d(m){u(a),u(i),u(r),u(e),u(s)}}}function A(c,o,a){let{title:i}=o,{ogTitle:l=null}=o,{description:r}=o;return c.$$set=e=>{"title"in e&&a(0,i=e.title),"ogTitle"in e&&a(1,l=e.ogTitle),"description"in e&&a(2,r=e.description)},[i,l,r]}class w extends f{constructor(o){super(),_(this,o,A,y,T,{title:0,ogTitle:1,description:2})}}export{w as S};
