!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var i="Expected a function",r=0/0,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,y=Math.min,p=function(){return v.Date.now()};function b(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":o(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return r;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=f.test(e);return i||l.test(e)?c(e.slice(2),i?2:8):u.test(e)?r:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(i);function m(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function h(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||d&&o>=a}function j(){var e,n,o,i=p();if(h(i))return O(i);f=setTimeout(j,(e=i-l,n=i-c,o=t-e,d?y(o,a-n):o))}function O(e){return(f=void 0,v&&o)?m(e):(o=r=void 0,u)}function T(){var e,n=p(),i=h(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(j,t),s?m(e):u;if(d)return f=setTimeout(j,t),m(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}(e,t,{leading:o,maxWait:t,trailing:r})};var h=document.querySelector("form.feedback-form"),j=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]'),T="feedback-form-state";console.log(j.value,O.value),h.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(){var e={email:j.value,message:O.value};localStorage.setItem(T,JSON.stringify(e))},500)),h.addEventListener("submit",function(e){e.preventDefault(),console.log({email:j.value,message:O.value}),h.reset(),localStorage.removeItem(T)});var w=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(T);w&&(j.value=w.email,O.value=w.message)}();
//# sourceMappingURL=03-feedback.7cd22ef9.js.map