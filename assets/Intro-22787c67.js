import{r as b,e as O,j as p}from"./index-c538ffec.js";const Q="/portfolio/me.webp";function M(r,n,a,t){return new(a||(a=Promise))(function(e,c){function i(f){try{l(t.next(f))}catch(o){c(o)}}function s(f){try{l(t.throw(f))}catch(o){c(o)}}function l(f){var o;f.done?e(f.value):(o=f.value,o instanceof a?o:new a(function(m){m(o)})).then(i,s)}l((t=t.apply(r,n||[])).next())})}function j(r,n){var a,t,e,c,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(l){return function(f){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,t&&(e=2&o[0]?t.return:o[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,o[1])).done)return e;switch(t=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(e=i.trys,!((e=e.length>0&&e[e.length-1])||o[0]!==6&&o[0]!==2)){i=0;continue}if(o[0]===3&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(o[0]===6&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(r,i)}catch(m){o=[6,m],t=0}finally{a=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([l,f])}}}function F(r){var n=typeof Symbol=="function"&&Symbol.iterator,a=n&&r[n],t=0;if(a)return a.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(r,n){var a=typeof Symbol=="function"&&r[Symbol.iterator];if(!a)return r;var t,e,c=a.call(r),i=[];try{for(;(n===void 0||n-- >0)&&!(t=c.next()).done;)i.push(t.value)}catch(s){e={error:s}}finally{try{t&&!t.done&&(a=c.return)&&a.call(c)}finally{if(e)throw e.error}}return i}function N(r,n,a){if(a||arguments.length===2)for(var t,e=0,c=n.length;e<c;e++)!t&&e in n||(t||(t=Array.prototype.slice.call(n,0,e)),t[e]=n[e]);return r.concat(t||Array.prototype.slice.call(n))}function D(r,n,a,t){for(var e=[],c=4;c<arguments.length;c++)e[c-4]=arguments[c];return M(this,void 0,void 0,function(){var i,s,l,f,o,m;return j(this,function(d){switch(d.label){case 0:d.trys.push([0,12,13,14]),i=F(e),s=i.next(),d.label=1;case 1:if(s.done)return[3,11];switch(l=s.value,typeof l){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,W(r,l,n,a,t)];case 3:return d.sent(),[3,10];case 4:return[4,B(l)];case 5:return d.sent(),[3,10];case 6:return[4,l.apply(void 0,N([r,n,a,t],v(e),!1))];case 7:return d.sent(),[3,10];case 8:return[4,l];case 9:d.sent(),d.label=10;case 10:return s=i.next(),[3,1];case 11:return[3,14];case 12:return f=d.sent(),o={error:f},[3,14];case 13:try{s&&!s.done&&(m=i.return)&&m.call(i)}finally{if(o)throw o.error}return[7];case 14:return[2]}})})}function W(r,n,a,t,e){return M(this,void 0,void 0,function(){var c;return j(this,function(i){switch(i.label){case 0:return c=function(s,l){var f=v(l).slice(0);return N(N([],v(s),!1),[NaN],!1).findIndex(function(o,m){return f[m]!==o})}(r.textContent,n),[4,L(r,N(N([],v(J(r.textContent,c)),!1),v(H(n,c)),!1),a,t,e)];case 1:return i.sent(),[2]}})})}function B(r){return M(this,void 0,void 0,function(){return j(this,function(n){switch(n.label){case 0:return[4,new Promise(function(a){return setTimeout(a,r)})];case 1:return n.sent(),[2]}})})}function L(r,n,a,t,e){return M(this,void 0,void 0,function(){var c,i,s,l,f,o,m,d,E,P,k,C,q;return j(this,function(x){switch(x.label){case 0:if(c=n,e){for(i=0,s=1;s<n.length;s++)if(l=v([n[s-1],n[s]],2),f=l[0],(o=l[1]).length>f.length||o===""){i=s;break}c=n.slice(i,n.length)}x.label=1;case 1:x.trys.push([1,6,7,8]),m=F(function(_){var A,g,w,S,T,R,G;return j(this,function(u){switch(u.label){case 0:A=function(h){return j(this,function(y){switch(y.label){case 0:return[4,{op:function(I){return requestAnimationFrame(function(){return I.textContent=h})},opCode:function(I){return h===""||I.textContent.length>h.length?"DELETE":"WRITING"}}];case 1:return y.sent(),[2]}})},u.label=1;case 1:u.trys.push([1,6,7,8]),g=F(_),w=g.next(),u.label=2;case 2:return w.done?[3,5]:(S=w.value,[5,A(S)]);case 3:u.sent(),u.label=4;case 4:return w=g.next(),[3,2];case 5:return[3,8];case 6:return T=u.sent(),R={error:T},[3,8];case 7:try{w&&!w.done&&(G=g.return)&&G.call(g)}finally{if(R)throw R.error}return[7];case 8:return[2]}})}(c)),d=m.next(),x.label=2;case 2:return d.done?[3,5]:(E=d.value,P=E.opCode(r)==="WRITING"?a+a*(Math.random()-.5):t+t*(Math.random()-.5),E.op(r),[4,B(P)]);case 3:x.sent(),x.label=4;case 4:return d=m.next(),[3,2];case 5:return[3,8];case 6:return k=x.sent(),C={error:k},[3,8];case 7:try{d&&!d.done&&(q=m.return)&&q.call(m)}finally{if(C)throw C.error}return[7];case 8:return[2]}})})}function H(r,n,a){var t=v(r).slice(0);return n===void 0&&(n=0),a===void 0&&(a=t.length),j(this,function(e){switch(e.label){case 0:return n<a?[4,t.slice(0,++n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}function J(r,n,a){var t=v(r).slice(0);return n===void 0&&(n=0),a===void 0&&(a=t.length),j(this,function(e){switch(e.label){case 0:return a>n?[4,t.slice(0,--a).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}var K="index-module_type__E-SaG";(function(r,n){n===void 0&&(n={});var a=n.insertAt;if(r&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var U=b.memo(b.forwardRef(function(r,n){var a=r.sequence,t=r.repeat,e=r.className,c=r.speed,i=c===void 0?40:c,s=r.deletionSpeed,l=r.omitDeletionAnimation,f=l!==void 0&&l,o=r.wrapper,m=o===void 0?"span":o,d=r.cursor,E=d===void 0||d,P=r.style;s||(s=i);var k=new Array(2).fill(40);[i,s].forEach(function(u,h){switch(typeof u){case"number":k[h]=Math.abs(u-100);break;case"object":var y=u,I=y.type,z=y.value;if(typeof z!="number")break;I==="keyStrokeDelayInMs"&&(k[h]=z)}});var C,q,x,_,A,g,w=k[0],S=k[1],T=function(u,h){h===void 0&&(h=null);var y=b.useRef(h);return b.useEffect(function(){u&&(typeof u=="function"?u(y.current):u.current=y.current)},[u]),y}(n),R=K;C=e?"".concat(E?R+" ":"").concat(e):E?R:"",q=b.useRef(function(){var u,h=a;return t===1/0?u=D:typeof t=="number"&&(h=Array(1+t).fill(a).flat()),D.apply(void 0,N(N([T.current,w,S,f],v(h),!1),[u],!1)),function(){T.current}}),x=b.useRef(),_=b.useRef(!1),A=b.useRef(!1),g=v(b.useState(0),2)[1],_.current&&(A.current=!0),b.useEffect(function(){return _.current||(x.current=q.current(),_.current=!0),g(function(u){return u+1}),function(){A.current&&x.current&&x.current()}},[]);var G=m;return O.createElement(G,{style:P,className:C,ref:T})}),function(r,n){return!0});function X(){return p.jsx(p.Fragment,{children:p.jsx("div",{id:"home",className:"flex flex-col items-center justify-center mb-10 lg:flex-row lg:p-10",children:p.jsxs("div",{className:"flex flex-col items-center justify-center mx-10 my-5 mt-16 md:mx-3 rounded-xl lg:flex-row lg:p-10 bg-opacity-20",children:[p.jsx("div",{className:"flex flex-col items-center p-10 lg:p-20 hover:cursor-pointer",children:p.jsx("img",{className:"object-fill w-64 border-4 rounded-full shadow-xl lg:w-80 border-slate-300 glass",src:Q,alt:"",loading:"lazy",onClick:()=>{window.open("https://github.com/gabeFrancisco","_blank").focus()}})}),p.jsxs("div",{className:"flex flex-col items-center justify-center px-10 pt-20 pb-6 text-center",children:[p.jsx("h1",{className:"mb-1 text-4xl font-bold text-transparent md:text-7x1 md:mb-3 dark:text-white bg-gradient-to-r from-blue-800 via-blue-700 to-green-600 bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-300 dark:to-green-400 text-gradient",children:"Olá, me chamo Gabriel Francisco"}),p.jsx("h3",{className:"text-base font-bold text-transparent md:text-xl my-7 lg:text-2xl bg-gradient-to-r from-blue-800 via-blue-700 to-green-600 bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-300 dark:to-green-400 text-gradient",children:p.jsx(U,{className:"text-2xl",sequence:["Desenvolvedor Fullstack",2e3,"Arduino e Robótica",2e3,"Mobile",2e3],repeat:1/0})}),p.jsx("p",{className:"max-w-xl m-3 font-bold text-md text-slate-700 dark:text-slate-300",children:'"Apaixonado por tecnologia, resolvendo problemas reais por meio de linhas de código..."'}),p.jsx("br",{}),p.jsx("p",{className:"max-w-xl mb-6 font-medium text-md",children:'Como um amante de tecnologia e curioso desde a infância, sempre procurei saber como as coisas funcionavam. Aos 10 anos tive meu primeiro contato com um computador e ali começou minha jornada. Assim como qualquer criança da minha época, sempre fui aficionado por video-games. Comecei então a criar meus primeiros jogos para computador("utilizando a infame engine The Games Factory").'}),p.jsx("p",{className:"max-w-xl mb-6 font-medium text-md",children:"Então, quando fiz 18, depois de longos anos sem contato com computação, reascendi a minha paixão quando tive meu primeiro contato com Python. Como de costume, as nossas primeiras linhas de código nós nunca esquecemos. Decidi finalmente que ser programador era a minha missão. Programar me fazia e, ainda me faz me sentir vivo!"})]})]})})})}export{X as default};
