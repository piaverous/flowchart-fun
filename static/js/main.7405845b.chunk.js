(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{154:function(e,t,n){},156:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(140),i=n.n(o),c=(n(154),n(155),n(156),n(80)),s=n(3),l=n(6),u=n(148),d=n(141),h=n(58),b={name:"dagre",fit:!0,animate:!0,rankDir:"LR",spacingFactor:1.25},f="#000000",g=n(19),v=n(39),j=n.n(v),m=n(149),p=n(59),x=n(7),O=n(21),w=n.n(O),F=n(365),y=n(142),C=n.n(y),S=n(143),B=n.n(S),E=n(144),L=n(145),H=n.n(L),T=new RegExp(/^\s*\[(\w*)\]/),k=new RegExp(/^\s*\{(\w*)\}/),z={white:{text:"#000000",bg:"#FFFFFF",hoverText:"#000000",hoverBg:"#EDEDEC"},red:{text:"#FFFFFF",bg:"#D32F2F",hoverText:"#FFFFFF",hoverBg:"#B71C1C"},blue:{text:"#FFFFFF",bg:"#2962FF",hoverText:"#FFFFFF",hoverBg:"#0D47A1"},green:{text:"#000000",bg:"#00E676",hoverText:"#000000",hoverBg:"#00C853"},yellow:{text:"#000000",bg:"#EEFF41",hoverText:"#000000",hoverBg:"#CDDC39"},grey:{text:"#000000",bg:"#BDBDBD",hoverText:"#000000",hoverBg:"#9E9E9E"},purple:{text:"#FFFFFF",bg:"#7c4dff",hoverText:"#FFFFFF",hoverBg:"#651fff"}};var R=12.5;function D(e){var t,n=document.getElementById("resizer");if(n&&(n.innerHTML=e.replace(/-/gm,"&#x2011;"),n.firstChild)){var r=document.createRange();r.selectNodeContents(n.firstChild);var a=Array.from(r.getClientRects()).reduce((function(e,t){var n=t.width;return n>e?n:e}),0);return{width:Math.max(100,M((t=a,Math.floor(.63567*t+6)))),height:Math.max(75,M(A(n.clientHeight)))}}}function I(e){var t=e.match(T),n=t?e.slice(t[0].length):e;return n.indexOf(": ")>-1?n.split(": ")[0].trim():""}function N(e){var t=e.match(T),n=e.match(k),r=t?e.slice(t[0].length).trim():e,a=(n?r.slice(n[0].length):r).trim();return r.indexOf(": ")>-1&&(a=r.split(": ").slice(1).join(": ").trim()),a.replace(/\\(.)/gm,"$1")}function _(e,t){var n=e.match(T);return n?n[1]:t.toString()}function A(e){return Math.floor(.63567*e+20)}function M(e){return Math.ceil(e/R)*R}var G=n(2);function P(e){return Object(G.jsx)("svg",Object(x.a)(Object(x.a)({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24"},e),{},{children:Object(G.jsx)("path",{d:"M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"})}))}function U(){return Object(G.jsxs)("svg",{viewBox:"0 0 24 24",width:20,height:20,xmlns:"http://www.w3.org/2000/svg",children:[Object(G.jsx)("title",{children:"GitHub icon"}),Object(G.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}var V=n(83),W=n.n(V),J=n(147);w.a.prototype.hasInitialised||(w.a.use(C.a),w.a.use(B.a),w.a.prototype.hasInitialised=!0);var Z=function(e){var t=e.textToParse,n=e.setHoverLineNumber,a=e.shouldResize,o=Object(r.useRef)(),i=Object(r.useRef)(),c=function(){var e=Object(s.f)().search;return"0"!==new URLSearchParams(e).get("animation")}(),u=Object(r.useMemo)((function(){return Object(x.a)(Object(x.a)({},b),{},{animate:c})}),[c]),d=Object(r.useRef)(),h=Object(r.useCallback)((function(){if(o.current){var e=!1,n=[];try{var r;n=function(e){var t,n=new RegExp(/^( )+/g),r=H()(e,{preserveNewlines:!0}).split("\n"),a=[],o=1,i=Object(E.a)(r);try{for(i.s();!(t=i.n()).done;){var c=t.value;if(""!==c.trim()){var s=c.match(n),u=c.match(k);u=u?u[1]:"white";var d=z[u].text,h=z[u].bg,b=z[u].hoverText,f=z[u].hoverBg,g=N(c).match(/^\((.+)\)$/);if(g&&(g=g[1]),s){var v=s[0],j=void 0,m=o;for(v.length;m>=1;){var p,O=r[(m-=1)-1];if(""!==O.trim()){var w=O.match(n);if((null!==(p=null===w||void 0===w?void 0:w[0].length)&&void 0!==p?p:0)<v.length){j=m;break}}}if(j){for(var F=_(r[m-1],m),y=g||_(c,o),C="".concat(F,"_").concat(y,":0");a.map((function(e){return e.data.id})).includes(C);){var S=C.split(":"),B=Object(l.a)(S,2)[1];B=(parseInt(B,10)+1).toString(),C="".concat(F,"_").concat(y,":").concat(B)}a.push({data:{id:C,source:F,target:y,label:I(c),lineNumber:o}})}}if(!g){var L=N(c),R=c.match(T);a.push({data:Object(x.a)({id:R?R[1]:o.toString(),label:L,lineNumber:o,textColor:d,bgColor:h,hoverText:b,hoverBg:f},D(L))})}o++}else o++}}catch(A){i.e(A)}finally{i.f()}return a}(t),null===(r=i.current)||void 0===r||r.json({elements:n})}catch(c){var a;e=!0,null===(a=i.current)||void 0===a||a.destroy(),i.current=w()()}e||(o.current.json({elements:n}),o.current.layout(u).run(),o.current.center())}}),[u,t]),v=Object(r.useCallback)((function(){o.current&&(o.current.resize(),o.current.animate({fit:{padding:6}}))}),[]);Object(r.useEffect)((function(){v()}),[v,a]);var j=Object(F.a)(v,250);Object(r.useEffect)((function(){return window.addEventListener("resize",j.callback),function(){return window.removeEventListener("resize",j.callback)}}),[j]);var m=Object(r.useCallback)((function(){if(o.current){var e=o.current.svg({full:!0,scale:1.5}),n=(new DOMParser).parseFromString(e,"image/svg+xml"),r=Object(p.a)(n.children[0].querySelectorAll("path")).filter((function(e){return!e.getAttribute("fill")&&"fill stroke markers"===e.getAttribute("paint-order")}));(r=[].concat(Object(p.a)(r),Object(p.a)(n.children[0].querySelectorAll("rect")))).forEach((function(e){return e.setAttribute("fill","#ffffff")}));var a=n.createComment("Original Flowchart Text (flowchart.fun):\n\n".concat(t,"\n\n"));n.children[0].appendChild(a);var i=n.documentElement.outerHTML;Object(J.saveAs)(new Blob([i],{type:"image/svg+xml;charset=utf-8"}),"flowchart.svg")}}),[t]);return Object(r.useEffect)((function(){function e(){this.addClass("nodeHovered"),n(this.data().lineNumber)}function t(){this.addClass("edgeHovered"),n(this.data().lineNumber)}function r(){this.removeClass("nodeHovered"),this.removeClass("edgeHovered"),n(void 0)}return i.current=w()(),o.current=w()({container:document.getElementById("cy"),layout:u,elements:[],style:[{selector:"node",style:{backgroundColor:"data(bgColor)","border-color":f,color:"data(textColor)",label:"data(label)","font-size":10,"text-wrap":"wrap","text-max-width":"80","text-valign":"center","text-halign":"center","line-height":1.25,"border-width":1,shape:"rectangle","font-family":"-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",width:"data(width)",height:"data(height)"}},{selector:"edge",style:{"loop-direction":"0deg","loop-sweep":"20deg",width:1,"text-background-opacity":1,"text-background-color":"#ffffff","line-color":f,"target-arrow-color":f,"target-arrow-shape":"vee","arrow-scale":1,"curve-style":"bezier",label:"data(label)","font-size":10,"text-valign":"center","font-family":"-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol","text-halign":"center","edge-text-rotation":"autorotate"}},{selector:".edgeHovered",style:{"line-color":"#aaaaaa","target-arrow-color":"#aaaaaa",color:"#aaaaaa"}},{selector:".nodeHovered",style:{backgroundColor:"data(hoverBg)",color:"data(hoverText)"}}],userZoomingEnabled:!0,userPanningEnabled:!0,boxSelectionEnabled:!1}),o.current.on("mouseover","node",e),o.current.on("mouseover","edge",t),o.current.on("tapstart","node",e),o.current.on("tapstart","edge",t),o.current.on("mouseout","node, edge",r),o.current.on("tapend","node, edge",r),function(){var e,t;null===(e=o.current)||void 0===e||e.destroy(),null===(t=i.current)||void 0===t||t.destroy(),d.current=void 0}}),[u,n]),Object(r.useEffect)((function(){h()}),[h]),Object(G.jsxs)(g.a,{className:W.a.GraphContainer,children:[Object(G.jsx)(g.b,{id:"cy"}),Object(G.jsxs)(g.a,{className:W.a.Buttons,p:1,children:[Object(G.jsxs)("div",{children:[Object(G.jsx)(g.c,{children:"Tone Row"}),Object(G.jsx)("a",{href:"https://twitter.com/row_tone",children:Object(G.jsx)(P,{})}),Object(G.jsx)("a",{href:"https://github.com/tone-row/flowchart-fun",children:Object(G.jsx)(U,{})})]}),Object(G.jsx)(g.c,{as:"button",onClick:m,title:"Download SVG",children:"Download SVG"})]})]})};function q(e){var t=e.children,n=e.textToParse,a=e.setHoverLineNumber,o=Object(r.useState)(0),i=Object(l.a)(o,2),c=i[0],s=i[1];return Object(G.jsxs)(g.b,{className:j.a.App,children:[Object(G.jsx)(m.a,{defaultSize:{width:"50%",height:"auto"},maxWidth:"90%",minWidth:"10%",enable:{right:!0},className:j.a.TextareaContainer,handleClasses:{right:j.a.resizableHandle},onResizeStop:function(){return s((function(e){return e+1}))},children:t}),Object(G.jsx)(Z,{textToParse:n,setHoverLineNumber:a,shouldResize:c}),Object(G.jsx)("div",{id:"resizer",className:j.a.resizer})]})}var Y=function(){var e=Object(s.g)().workspace,t=void 0===e?"":e,n=Object(d.a)(["flowcharts.fun",t].filter(Boolean).join(":"),"this app works by typing\n  new lines create new nodes\n    indentation creates child nodes \n    and any text: before a colon+space creates a label\n  [linking] you can link to nodes using their ID in parentheses\n    like this: (1)\n    lines have a default ID of their line-number\n      but you can also supply a custom ID in brackets\n        like this: (linking) // use single line comments\n      {red}a colored cell can be created like so\n      {blue}you can choose from red, blue, yellow, green, grey and white\n/*\nor \nmultiline \ncomments\n\nHave fun! \ud83c\udf89\n*/"),a=Object(l.a)(n,2),o=a[0],i=a[1],c=Object(r.useReducer)((function(e,t){return t}),o),b=Object(l.a)(c,2),f=b[0],g=b[1],v=Object(u.a)(g,2),j=Object(r.useState)(),m=Object(l.a)(j,2),p=m[0],x=m[1],O=Object(r.useRef)(null),w=Object(r.useRef)([]);return Object(r.useEffect)((function(){if(window.flowchartFunSetText=i,O.current){var e=O.current;w.current="number"===typeof p?e.deltaDecorations([],[{range:{startLineNumber:p,startColumn:1,endLineNumber:p,endColumn:1},options:{isWholeLine:!0,className:"node-hover"}}]):e.deltaDecorations(w.current,[])}return function(){delete window.flowchartFunSetText}}),[p,i]),Object(r.useEffect)((function(){v(o)}),[o,v]),Object(G.jsx)(q,{setHoverLineNumber:x,textToParse:f,children:Object(G.jsx)(h.a,{defaultValue:o,options:{minimap:{enabled:!1},fontSize:16,tabSize:2,insertSpaces:!0,wordBasedSuggestions:!1,occurrencesHighlight:!1,renderLineHighlight:!1,highlightActiveIndentGuide:!1,scrollBeyondLastLine:!1,renderIndentGuides:!1,overviewRulerBorder:!1,lineDecorationsWidth:"10px",renderValidationDecorations:"off",hideCursorInOverviewRuler:!0,matchBrackets:"never",selectionHighlight:!1,lineHeight:28},onChange:function(e){return e&&i(e)},onMount:function(e,t){O.current=e}})})};var $=function(){var e=Object(s.g)().graphText,t=decodeURI(e),n=Object(r.useState)(),a=Object(l.a)(n,2),o=a[0],i=a[1],c=Object(r.useRef)(null),u=Object(r.useRef)([]);return Object(r.useEffect)((function(){if(c.current){var e=c.current;u.current="number"===typeof o?e.deltaDecorations([],[{range:{startLineNumber:o,startColumn:1,endLineNumber:o,endColumn:1},options:{isWholeLine:!0,className:"node-hover"}}]):e.deltaDecorations(u.current,[])}}),[o]),Object(G.jsx)(q,{setHoverLineNumber:i,textToParse:t,children:Object(G.jsx)(h.a,{defaultValue:t,value:t,options:{minimap:{enabled:!1},fontSize:16,tabSize:2,insertSpaces:!0,wordBasedSuggestions:!1,occurrencesHighlight:!1,renderLineHighlight:!1,highlightActiveIndentGuide:!1,scrollBeyondLastLine:!1,renderIndentGuides:!1,overviewRulerBorder:!1,lineDecorationsWidth:"10px",renderValidationDecorations:"off",hideCursorInOverviewRuler:!0,matchBrackets:"never",selectionHighlight:!1,lineHeight:28,readOnly:!0},onMount:function(e,t){c.current=e}})})};function K(){return Object(G.jsx)(c.a,{children:Object(G.jsxs)(s.c,{children:[Object(G.jsx)(s.a,{path:"/",exact:!0,children:Object(G.jsx)(Y,{})}),Object(G.jsx)(s.a,{path:"/r/:graphText",children:Object(G.jsx)($,{})}),Object(G.jsx)(s.a,{path:"/:workspace",children:Object(G.jsx)(Y,{})})]})})}function Q(){return Object(G.jsx)(K,{})}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(Q,{})}),document.getElementById("root")),X()},39:function(e,t,n){e.exports={App:"Layout_App__r8LpH",TextareaContainer:"Layout_TextareaContainer__eh1Jz",resizer:"Layout_resizer__2zJLY",resizableHandle:"Layout_resizableHandle__ZoYfz"}},83:function(e,t,n){e.exports={GraphContainer:"Graph_GraphContainer__1TxTa",Buttons:"Graph_Buttons__1zZ_M"}}},[[363,1,2]]]);
//# sourceMappingURL=main.7405845b.chunk.js.map