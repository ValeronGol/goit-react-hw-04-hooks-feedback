(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c,a,r,i=n(1),o=n.n(i),s=n(6),j=n.n(s),d=n(4),x=n(2),b=n(3),l=b.a.h1(c||(c=Object(x.a)(["\n  padding: 5px;\n  margin-top: 10px;\n  text-transform: capitalize;\n  font-size: 25px;\n  font-weight: 700;\n"]))),u=n(0),p=function(t){var e=t.title,n=t.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{children:e}),n]})},O=b.a.button(a||(a=Object(x.a)(["\n  padding: 5px 10px;\n  margin: 5px;\n  text-transform: capitalize;\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"])));function f(t){return Object(u.jsx)(O,{type:"button",onClick:t.onClick,children:t.text})}function h(t){var e=t.onLeaveFeedback;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{text:"Good",onClick:e}),Object(u.jsx)(f,{text:"Neutral",onClick:e}),Object(u.jsx)(f,{text:"Bad",onClick:e})]})}var g,k,v=b.a.p(r||(r=Object(x.a)(["\n  padding: 4px 8px;\n  border-radius: 4px;\n  text-transform: capitalize;\n  font-size: 20px;\n"]))),m=function(t){var e=t.good,n=t.bad,c=t.neutral,a=t.total,r=t.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(v,{children:["Good: ",e]}),Object(u.jsxs)(v,{children:["Neutral: ",c]}),Object(u.jsxs)(v,{children:["Bad: ",n]}),Object(u.jsxs)(v,{children:["Total: ",a]}),n>0&&Object(u.jsxs)(v,{children:["Positive Feedback: ",r,"%"]})]})},C=b.a.p(g||(g=Object(x.a)(["\n  font-size: 20px;\n  padding: 10px;\n  margin: 0;\n"]))),F=function(t){var e=t.message;return Object(u.jsx)(C,{children:e})},w=b.a.div(k||(k=Object(x.a)(["\n  padding: 20px;\n  width: 500px;\n"])));function z(){var t=Object(i.useState)(0),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)(0),r=Object(d.a)(a,2),o=r[0],s=r[1],j=Object(i.useState)(0),x=Object(d.a)(j,2),b=x[0],l=x[1],O=function(){return n+b+o},f=O()>0;return Object(u.jsxs)(w,{children:[Object(u.jsx)(p,{title:"Please leave feedback",children:Object(u.jsx)(h,{onLeaveFeedback:function(t){"Good"===t.target.textContent&&c((function(t){return t+1})),"Neutral"===t.target.textContent&&s((function(t){return t+1})),"Bad"===t.target.textContent&&l((function(t){return t+1}))}})}),Object(u.jsxs)(p,{title:"Statistics",children:[f&&Object(u.jsx)(m,{good:n,bad:b,neutral:o,total:O(),positivePercentage:(n/O()*100).toFixed()}),!f&&Object(u.jsx)(F,{message:"No feedback given"})]})]})}n(17);j.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9c3b05b4.chunk.js.map