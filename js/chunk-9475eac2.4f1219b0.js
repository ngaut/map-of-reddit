(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9475eac2"],{4570:function(n,t,r){!function(n,r){r(t)}(0,(function(n){"use strict";const t=134217729,r=33306690738754706e-32;function e(n,t,r,e,i){let o,a,u,f,c=t[0],h=e[0],p=0,m=0;h>c==h>-c?(o=c,c=t[++p]):(o=h,h=e[++m]);let s=0;if(p<n&&m<r)for(h>c==h>-c?(u=o-((a=c+o)-c),c=t[++p]):(u=o-((a=h+o)-h),h=e[++m]),o=a,0!==u&&(i[s++]=u);p<n&&m<r;)h>c==h>-c?(u=o-((a=o+c)-(f=a-o))+(c-f),c=t[++p]):(u=o-((a=o+h)-(f=a-o))+(h-f),h=e[++m]),o=a,0!==u&&(i[s++]=u);for(;p<n;)u=o-((a=o+c)-(f=a-o))+(c-f),c=t[++p],o=a,0!==u&&(i[s++]=u);for(;m<r;)u=o-((a=o+h)-(f=a-o))+(h-f),h=e[++m],o=a,0!==u&&(i[s++]=u);return 0===o&&0!==s||(i[s++]=o),s}function i(n){return new Float64Array(n)}const o=33306690738754716e-32,a=22204460492503146e-32,u=11093356479670487e-47,f=i(4),c=i(8),h=i(12),p=i(16),m=i(4);n.orient2d=function(n,i,s,v,l,x){const d=(i-x)*(s-l),g=(n-l)*(v-x),X=d-g;if(0===d||0===g||d>0!=g>0)return X;const Y=Math.abs(d+g);return Math.abs(X)>=o*Y?X:-function(n,i,o,s,v,l,x){let d,g,X,Y,M,w,b,k,y,A,B,J,_,j,F,O,P,q;const z=n-v,C=o-v,D=i-l,E=s-l;M=(F=(k=z-(b=(w=t*z)-(w-z)))*(A=E-(y=(w=t*E)-(w-E)))-((j=z*E)-b*y-k*y-b*A))-(B=F-(P=(k=D-(b=(w=t*D)-(w-D)))*(A=C-(y=(w=t*C)-(w-C)))-((O=D*C)-b*y-k*y-b*A))),f[0]=F-(B+M)+(M-P),M=(_=j-((J=j+B)-(M=J-j))+(B-M))-(B=_-O),f[1]=_-(B+M)+(M-O),M=(q=J+B)-J,f[2]=J-(q-M)+(B-M),f[3]=q;let G=function(n,t){let r=t[0];for(let e=1;e<n;e++)r+=t[e];return r}(4,f),H=a*x;if(G>=H||-G>=H)return G;if(d=n-(z+(M=n-z))+(M-v),X=o-(C+(M=o-C))+(M-v),g=i-(D+(M=i-D))+(M-l),Y=s-(E+(M=s-E))+(M-l),0===d&&0===g&&0===X&&0===Y)return G;if(H=u*x+r*Math.abs(G),(G+=z*Y+E*d-(D*X+C*g))>=H||-G>=H)return G;M=(F=(k=d-(b=(w=t*d)-(w-d)))*(A=E-(y=(w=t*E)-(w-E)))-((j=d*E)-b*y-k*y-b*A))-(B=F-(P=(k=g-(b=(w=t*g)-(w-g)))*(A=C-(y=(w=t*C)-(w-C)))-((O=g*C)-b*y-k*y-b*A))),m[0]=F-(B+M)+(M-P),M=(_=j-((J=j+B)-(M=J-j))+(B-M))-(B=_-O),m[1]=_-(B+M)+(M-O),M=(q=J+B)-J,m[2]=J-(q-M)+(B-M),m[3]=q;const I=e(4,f,4,m,c);M=(F=(k=z-(b=(w=t*z)-(w-z)))*(A=Y-(y=(w=t*Y)-(w-Y)))-((j=z*Y)-b*y-k*y-b*A))-(B=F-(P=(k=D-(b=(w=t*D)-(w-D)))*(A=X-(y=(w=t*X)-(w-X)))-((O=D*X)-b*y-k*y-b*A))),m[0]=F-(B+M)+(M-P),M=(_=j-((J=j+B)-(M=J-j))+(B-M))-(B=_-O),m[1]=_-(B+M)+(M-O),M=(q=J+B)-J,m[2]=J-(q-M)+(B-M),m[3]=q;const K=e(I,c,4,m,h);M=(F=(k=d-(b=(w=t*d)-(w-d)))*(A=Y-(y=(w=t*Y)-(w-Y)))-((j=d*Y)-b*y-k*y-b*A))-(B=F-(P=(k=g-(b=(w=t*g)-(w-g)))*(A=X-(y=(w=t*X)-(w-X)))-((O=g*X)-b*y-k*y-b*A))),m[0]=F-(B+M)+(M-P),M=(_=j-((J=j+B)-(M=J-j))+(B-M))-(B=_-O),m[1]=_-(B+M)+(M-O),M=(q=J+B)-J,m[2]=J-(q-M)+(B-M),m[3]=q;const L=e(K,h,4,m,p);return p[L-1]}(n,i,s,v,l,x,Y)},n.orient2dfast=function(n,t,r,e,i,o){return(t-o)*(r-i)-(n-i)*(e-o)},Object.defineProperty(n,"__esModule",{value:!0})}))},7107:function(n,t,r){var e=r("8335"),i=r("c1f9");n.exports=function(n,t,r,o){return t.length>0&&Array.isArray(t[0])?i(n,t,r,o):e(n,t,r,o)},n.exports.nested=i,n.exports.flat=e},8335:function(n,t){n.exports=function(n,t,r,e){var i=n[0],o=n[1],a=!1;void 0===r&&(r=0),void 0===e&&(e=t.length);for(var u=(e-r)/2,f=0,c=u-1;f<u;c=f++){var h=t[r+2*f+0],p=t[r+2*f+1],m=t[r+2*c+0],s=t[r+2*c+1],v=p>o!==s>o&&i<(m-h)*(o-p)/(s-p)+h;v&&(a=!a)}return a}},a230:function(n,t,r){"use strict";var e=r("25a5"),i=r("cda1"),o=r("7107");const a=r("4570").orient2d;function u(n,t,r){t=Math.max(0,void 0===t?2:t),r=r||0;var i=x(n),o=new e(16);o.toBBox=function(n){return{minX:n[0],minY:n[1],maxX:n[0],maxY:n[1]}},o.compareMinX=function(n,t){return n[0]-t[0]},o.compareMinY=function(n,t){return n[1]-t[1]},o.load(n);for(var a,u=[],c=0;c<i.length;c++){var h=i[c];o.remove(h),a=d(h,a),u.push(a)}var p=new e(16);for(c=0;c<u.length;c++)p.insert(l(u[c]));var m=t*t,s=r*r;while(u.length){var v=u.shift(),X=v.p,Y=v.next.p,M=g(X,Y);if(!(M<s)){var w=M/m;h=f(o,v.prev.p,X,Y,v.next.next.p,w,p),h&&Math.min(g(h,X),g(h,Y))<=w&&(u.push(v),u.push(d(h,v)),o.remove(h),p.remove(v),p.insert(l(v)),p.insert(l(v.next)))}}v=a;var b=[];do{b.push(v.p),v=v.next}while(v!==a);return b.push(v.p),b}function f(n,t,r,e,o,a,u){var f=new i([],c),p=n.data;while(p){for(var s=0;s<p.children.length;s++){var v=p.children[s],l=p.leaf?X(v,r,e):h(r,e,v);l>a||f.push({node:v,dist:l})}while(f.length&&!f.peek().node.children){var x=f.pop(),d=x.node,g=X(d,t,r),Y=X(d,e,o);if(x.dist<g&&x.dist<Y&&m(r,d,u)&&m(e,d,u))return d}p=f.pop(),p&&(p=p.node)}return null}function c(n,t){return n.dist-t.dist}function h(n,t,r){if(p(n,r)||p(t,r))return 0;var e=Y(n[0],n[1],t[0],t[1],r.minX,r.minY,r.maxX,r.minY);if(0===e)return 0;var i=Y(n[0],n[1],t[0],t[1],r.minX,r.minY,r.minX,r.maxY);if(0===i)return 0;var o=Y(n[0],n[1],t[0],t[1],r.maxX,r.minY,r.maxX,r.maxY);if(0===o)return 0;var a=Y(n[0],n[1],t[0],t[1],r.minX,r.maxY,r.maxX,r.maxY);return 0===a?0:Math.min(e,i,o,a)}function p(n,t){return n[0]>=t.minX&&n[0]<=t.maxX&&n[1]>=t.minY&&n[1]<=t.maxY}function m(n,t,r){for(var e=Math.min(n[0],t[0]),i=Math.min(n[1],t[1]),o=Math.max(n[0],t[0]),a=Math.max(n[1],t[1]),u=r.search({minX:e,minY:i,maxX:o,maxY:a}),f=0;f<u.length;f++)if(v(u[f].p,u[f].next.p,n,t))return!1;return!0}function s(n,t,r){return a(n[0],n[1],t[0],t[1],r[0],r[1])}function v(n,t,r,e){return n!==e&&t!==r&&s(n,t,r)>0!==s(n,t,e)>0&&s(r,e,n)>0!==s(r,e,t)>0}function l(n){var t=n.p,r=n.next.p;return n.minX=Math.min(t[0],r[0]),n.minY=Math.min(t[1],r[1]),n.maxX=Math.max(t[0],r[0]),n.maxY=Math.max(t[1],r[1]),n}function x(n){for(var t=n[0],r=n[0],e=n[0],i=n[0],a=0;a<n.length;a++){var u=n[a];u[0]<t[0]&&(t=u),u[0]>e[0]&&(e=u),u[1]<r[1]&&(r=u),u[1]>i[1]&&(i=u)}var f=[t,r,e,i],c=f.slice();for(a=0;a<n.length;a++)o(n[a],f)||c.push(n[a]);return w(c)}function d(n,t){var r={p:n,prev:null,next:null,minX:0,minY:0,maxX:0,maxY:0};return t?(r.next=t.next,r.prev=t,t.next.prev=r,t.next=r):(r.prev=r,r.next=r),r}function g(n,t){var r=n[0]-t[0],e=n[1]-t[1];return r*r+e*e}function X(n,t,r){var e=t[0],i=t[1],o=r[0]-e,a=r[1]-i;if(0!==o||0!==a){var u=((n[0]-e)*o+(n[1]-i)*a)/(o*o+a*a);u>1?(e=r[0],i=r[1]):u>0&&(e+=o*u,i+=a*u)}return o=n[0]-e,a=n[1]-i,o*o+a*a}function Y(n,t,r,e,i,o,a,u){var f,c,h,p,m=r-n,s=e-t,v=a-i,l=u-o,x=n-i,d=t-o,g=m*m+s*s,X=m*v+s*l,Y=v*v+l*l,M=m*x+s*d,w=v*x+l*d,b=g*Y-X*X,k=b,y=b;0===b?(c=0,k=1,p=w,y=Y):(c=X*w-Y*M,p=g*w-X*M,c<0?(c=0,p=w,y=Y):c>k&&(c=k,p=w+X,y=Y)),p<0?(p=0,-M<0?c=0:-M>g?c=k:(c=-M,k=g)):p>y&&(p=y,-M+X<0?c=0:-M+X>g?c=k:(c=-M+X,k=g)),f=0===c?0:c/k,h=0===p?0:p/y;var A=(1-f)*n+f*r,B=(1-f)*t+f*e,J=(1-h)*i+h*a,_=(1-h)*o+h*u,j=J-A,F=_-B;return j*j+F*F}function M(n,t){return n[0]===t[0]?n[1]-t[1]:n[0]-t[0]}function w(n){n.sort(M);for(var t=[],r=0;r<n.length;r++){while(t.length>=2&&s(t[t.length-2],t[t.length-1],n[r])<=0)t.pop();t.push(n[r])}for(var e=[],i=n.length-1;i>=0;i--){while(e.length>=2&&s(e[e.length-2],e[e.length-1],n[i])<=0)e.pop();e.push(n[i])}return e.pop(),t.pop(),t.concat(e)}n.exports=u,n.exports.default=u},c1f9:function(n,t){n.exports=function(n,t,r,e){var i=n[0],o=n[1],a=!1;void 0===r&&(r=0),void 0===e&&(e=t.length);for(var u=e-r,f=0,c=u-1;f<u;c=f++){var h=t[f+r][0],p=t[f+r][1],m=t[c+r][0],s=t[c+r][1],v=p>o!==s>o&&i<(m-h)*(o-p)/(s-p)+h;v&&(a=!a)}return a}}}]);
//# sourceMappingURL=chunk-9475eac2.4f1219b0.js.map