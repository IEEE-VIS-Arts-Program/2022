(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{8106:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributions/[id]",function(){return n(3007)}])},3007:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return k},default:function(){return P}});var i=n(5893),o=(n(1642),n(9008)),r=n(6232),a=n(6102),s=n(4934),l=n.n(s),c=n(682),h=n(1608),d=n(4184),m=n.n(d),u=n(7989),g=n.n(u);function f(t){var e,n,s,d=t.metaTitle,u=t.metaContent,f=t.children;t.submenu;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:d+" | VISAP'22"}),(0,i.jsx)("meta",{name:"description",content:u}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(r.Z,{}),(0,i.jsxs)("div",{className:m()((e={},n=l().windowFrame,s=!1,n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e),g().template),children:[(0,i.jsx)(c.Z,{children:(0,i.jsx)(h.Z,{children:f})}),(0,i.jsx)(a.Z,{})]})]})}f.defaultProps={submenu:[],metaContent:"The VIS Arts Program (VISAP) is a mini-conference and exhibition where visualization researchers, designers, and artists come together to discuss works at the intersection of data visualization, art and design."};var p=n(2337),b=n(1555),v=n(1163),w=n(1058),S=n(7294);const E=(t,e)=>t===e?.tagName?.toUpperCase?.(),y=t=>E("DIV",t)||E("SPAN",t),x=t=>E("IMG",t),L=t=>E("SVG",t),z=({height:t,offset:e,width:n})=>Math.min(window.innerWidth/(n+e),window.innerHeight/(t+e)),_=({containerHeight:t,containerWidth:e,hasScalableSrc:n,offset:i,targetHeight:o,targetWidth:r})=>!n&&o&&r?(({containerHeight:t,containerWidth:e,offset:n,targetHeight:i,targetWidth:o})=>{const r=z({height:i,offset:n,width:o}),a=o>i?o/e:i/t;return r>1?a:r*a})({containerHeight:t,containerWidth:e,offset:i,targetHeight:o,targetWidth:r}):z({height:t,offset:i,width:e}),j=/url(?:\(['"]?)(.*?)(?:['"]?\))/,I=t=>{if(t){if(x(t))return t.currentSrc;if(y(t)){const e=window.getComputedStyle(t).backgroundImage;if(e)return j.exec(e)?.[1]}}},C=({position:t,relativeNum:e})=>{const n=parseFloat(t);return t.endsWith("%")?e*n/100:n},N=/\.svg$/i,W=({hasZoomImg:t,imgSrc:e,isSvg:n,isZoomed:i,loadedImgEl:o,offset:r,shouldRefresh:a,targetEl:s})=>{const l=n||"data:image/svg+xml"===e?.slice?.(0,18)||t||!(!e||!N.test(e)),c=s.getBoundingClientRect(),h=window.getComputedStyle(s),d=(({containerHeight:t,containerLeft:e,containerTop:n,containerWidth:i,hasScalableSrc:o,offset:r,targetHeight:a,targetWidth:s})=>{const l=_({containerHeight:t,containerWidth:i,hasScalableSrc:o,offset:r,targetHeight:a,targetWidth:s});return{top:n,left:e,width:i*l,height:t*l,transform:`translate(0,0) scale(${1/l})`}})({containerHeight:c.height,containerLeft:c.left,containerTop:c.top,containerWidth:c.width,hasScalableSrc:l,offset:r,targetHeight:o?.naturalHeight??c.height,targetWidth:o?.naturalWidth??c.width}),m=o&&h.objectFit?(({containerHeight:t,containerLeft:e,containerTop:n,containerWidth:i,hasScalableSrc:o,objectFit:r,objectPosition:a,offset:s,targetHeight:l,targetWidth:c})=>{if("scale-down"===r&&(r=c<=i&&l<=t?"none":"contain"),"cover"===r||"contain"===r){const h=i/c,d=t/l,m="cover"===r?Math.max(h,d):Math.min(h,d),[u="50%",g="50%"]=a.split(" "),f=C({position:u,relativeNum:i-c*m}),p=C({position:g,relativeNum:t-l*m}),b=_({containerHeight:l*m,containerWidth:c*m,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:c});return{top:n+p,left:e+f,width:c*m*b,height:l*m*b,transform:`translate(0,0) scale(${1/b})`}}if("none"===r){const[r="50%",h="50%"]=a.split(" "),d=C({position:r,relativeNum:i-c}),m=C({position:h,relativeNum:t-l}),u=_({containerHeight:l,containerWidth:c,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:c});return{top:n+m,left:e+d,width:c*u,height:l*u,transform:`translate(0,0) scale(${1/u})`}}if("fill"===r){const e=i/c,n=t/l,r=Math.max(e,n),a=_({containerHeight:l*r,containerWidth:c*r,hasScalableSrc:o,offset:s,targetHeight:l,targetWidth:c});return{width:i*a,height:t*a,transform:`translate(0,0) scale(${1/a})`}}return{}})({containerHeight:c.height,containerLeft:c.left,containerTop:c.top,containerWidth:c.width,hasScalableSrc:l,objectFit:h.objectFit,objectPosition:h.objectPosition,offset:r,targetHeight:o.naturalHeight,targetWidth:o.naturalWidth}):void 0,u=o&&y(s)?(({backgroundPosition:t,backgroundSize:e,containerHeight:n,containerLeft:i,containerTop:o,containerWidth:r,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c})=>{if("cover"===e||"contain"===e){const h=r/c,d=n/l,m="cover"===e?Math.max(h,d):Math.min(h,d),[u="50%",g="50%"]=t.split(" "),f=C({position:u,relativeNum:r-c*m}),p=C({position:g,relativeNum:n-l*m}),b=_({containerHeight:l*m,containerWidth:c*m,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:o+p,left:i+f,width:c*m*b,height:l*m*b,transform:`translate(0,0) scale(${1/b})`}}if("auto"===e){const[e="50%",h="50%"]=t.split(" "),d=C({position:e,relativeNum:r-c}),m=C({position:h,relativeNum:n-l}),u=_({containerHeight:l,containerWidth:c,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:o+m,left:i+d,width:c*u,height:l*u,transform:`translate(0,0) scale(${1/u})`}}{const[h="50%",d="50%"]=e.split(" "),m=C({position:h,relativeNum:r})/c,u=C({position:d,relativeNum:n})/l,g=Math.min(m,u),[f="50%",p="50%"]=t.split(" "),b=C({position:f,relativeNum:r-c*g}),v=C({position:p,relativeNum:n-l*g}),w=_({containerHeight:l*g,containerWidth:c*g,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:o+v,left:i+b,width:c*g*w,height:l*g*w,transform:`translate(0,0) scale(${1/w})`}}})({backgroundPosition:h.backgroundPosition,backgroundSize:h.backgroundSize,containerHeight:c.height,containerLeft:c.left,containerTop:c.top,containerWidth:c.width,hasScalableSrc:l,offset:r,targetHeight:o.naturalHeight,targetWidth:o.naturalWidth}):void 0,g=Object.assign({},d,m,u);if(i){const t=window.innerWidth/2,e=window.innerHeight/2,n=t-(parseFloat(String(g.left||0))+parseFloat(String(g.width||0))/2),i=e-(parseFloat(String(g.top||0))+parseFloat(String(g.height||0))/2);a&&(g.transitionDuration="0.01ms"),g.transform=`translate(${n}px,${i}px) scale(1)`}return g};function Z(t){return S.createElement(H,{...t})}class H extends S.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:2,shouldRefresh:!1},this.refContent=(0,S.createRef)(),this.refDialog=(0,S.createRef)(),this.refModalImg=(0,S.createRef)(),this.refWrap=(0,S.createRef)(),this.imgEl=null,this.styleModalImg={},this.setId=()=>{const t=()=>Math.random().toString(16).slice(-4);this.setState({id:t()+t()+t()})},this.setAndTrackImg=()=>{const t=this.refContent.current;t&&(this.imgEl=t.querySelector(':is(img, svg, [role="img"], [data-zoom]):not([aria-hidden="true"])'),this.imgEl?(this.changeObserver?.disconnect?.(),this.imgEl?.addEventListener?.("load",this.handleImgLoad),this.imgEl?.addEventListener?.("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElObserver=new ResizeObserver((t=>{const e=t[0];e?.target&&(this.imgEl=e.target,this.setState({}))})),this.imgElObserver.observe(this.imgEl)):this.changeObserver||(this.changeObserver=new MutationObserver(this.setAndTrackImg),this.changeObserver.observe(t,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=t=>{const{isZoomed:e}=this.props;!t&&e?this.zoom():t&&!e&&this.unzoom()},this.handleImgLoad=()=>{const{imgEl:t}=this,e=I(t);if(!e)return;const n=new Image;x(t)&&(n.sizes=t.sizes,n.srcset=t.srcset),n.src=e;const i=()=>{this.setState({loadedImgEl:n})};n.decode().then(i).catch((()=>{n.onload=i}))},this.handleZoom=()=>{this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogKeyDown=t=>{"Escape"!==t.key&&27!==t.keyCode||(t.preventDefault(),t.stopPropagation(),this.handleUnzoom())},this.handleScroll=()=>{this.setState({shouldRefresh:!0}),this.handleUnzoom()},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.zoom=()=>{const{handleResize:t,handleScroll:e,loadZoomImg:n,props:{scrollableEl:i=window},refDialog:o,refModalImg:r}=this;o.current?.showModal?.(),this.setState({modalState:1}),n(),r.current?.addEventListener?.("transitionend",(()=>{setTimeout((()=>{this.setState({modalState:0}),i.addEventListener("scroll",e),window.addEventListener("resize",t)}),0)}),{once:!0})},this.unzoom=()=>{const{handleResize:t,handleScroll:e,refDialog:n,refModalImg:i,props:{scrollableEl:o=window}}=this;this.setState({modalState:3}),i.current?.addEventListener?.("transitionend",(()=>{setTimeout((()=>{window.removeEventListener("resize",t),o.removeEventListener("scroll",e),this.setState({shouldRefresh:!1,modalState:2}),n.current?.close?.()}),0)}),{once:!0})},this.loadZoomImg=()=>{const{props:{zoomImg:t}}=this,e=t?.src;if(e){const n=new Image;n.sizes=t?.sizes??"",n.srcset=t?.srcSet??"",n.src=e;const i=()=>{this.setState({isZoomImgLoaded:!0})};n.decode().then(i).catch((()=>{n.onload=i}))}},this.UNSAFE_handleSvg=()=>{const{imgEl:t,refModalImg:e,styleModalImg:n}=this;if(L(t)){const i=document.createElement("div");i.innerHTML=t.outerHTML;const o=i.firstChild;o.style.width=`${n.width??0}px`,o.style.height=`${n.height??0}px`,e.current?.firstChild?.remove?.(),e.current?.appendChild?.(o)}}}render(){const{handleDialogKeyDown:t,handleUnzoom:e,handleZoom:n,imgEl:i,props:{a11yNameButtonUnzoom:o,a11yNameButtonZoom:r,children:a,IconUnzoom:s,IconZoom:l,isZoomed:c,zoomImg:h,zoomMargin:d},refContent:m,refDialog:u,refModalImg:g,refWrap:f,state:{id:p,isZoomImgLoaded:b,loadedImgEl:v,modalState:w,shouldRefresh:E}}=this,z=`rmiz-modal-img-${p}`,_=y(i),j=x(i),C=L(i),N=(t=>{if(t)return x(t)?t.alt??void 0:t.getAttribute("aria-label")??void 0})(i),Z=I(i),H=j?i.sizes:void 0,M=j?i.srcset:void 0,k=!!h?.src,P=i&&(v||C),O=N?`${r}: ${N}`:r,T=1===w||0===w,R=P?"found":"not-found",D=2===w||3===w?"hidden":"visible",U={visibility:2===w?"visible":"hidden"},$=(t=>{if(!t)return{};if(L(t)){const e=t.parentNode?.getBoundingClientRect?.(),n=t.getBoundingClientRect();return{height:n.height,left:e.left-n.left,width:n.width,top:e.top-n.top}}return{height:t.offsetHeight,left:t.offsetLeft,width:t.offsetWidth,top:t.offsetTop}})(i);return this.styleModalImg=P?W({hasZoomImg:k,imgSrc:Z,isSvg:C,isZoomed:c&&T,loadedImgEl:v,offset:d,shouldRefresh:E,targetEl:i}):{},S.createElement("div",{"data-rmiz":"",ref:f},S.createElement("div",{"data-rmiz-content":R,ref:m,style:U},a),P&&S.createElement("div",{"data-rmiz-ghost":"",style:$},S.createElement("button",{"aria-label":O,"data-rmiz-btn-zoom":"",onClick:n,type:"button"},S.createElement(l,null))),P&&S.createElement("dialog",{"aria-labelledby":z,"aria-modal":"true","data-rmiz-modal":"",ref:u,onClick:e,onClose:e,onKeyDown:t,role:"dialog"},S.createElement("div",{"data-rmiz-modal-overlay":D}),S.createElement("div",{"data-rmiz-modal-content":""},(j||_)&&S.createElement("img",{alt:N,sizes:H,src:Z,srcSet:M,...b&&0===w?h:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height,id:z,ref:g,style:this.styleModalImg,width:this.styleModalImg.width}),C&&S.createElement("div",{"data-rmiz-modal-img":"",ref:g,style:this.styleModalImg}),S.createElement("button",{"aria-label":o,"data-rmiz-btn-unzoom":"",onClick:e,type:"button"},S.createElement(s,null)))))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){this.changeObserver?.disconnect?.(),this.imgElObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}componentDidUpdate(t){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(t.isZoomed)}}function M(t){const[e,n]=(0,S.useState)(!1);return S.createElement(Z,{...t,isZoomed:e,onZoomChange:n})}H.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",IconUnzoom:function(){return S.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},S.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return S.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},S.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},zoomMargin:0};var k=!0;function P(t){var e=t.data,n=(0,v.useRouter)().basePath;return(0,i.jsxs)(f,{metaTitle:e.title,children:[(0,i.jsxs)(b.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},lg:{span:8,offset:2},xl:{span:8,offset:2},className:m()(g().pageTitle,"mb-5"),children:[(0,i.jsx)("h6",{className:m()(g().category,"mt-5","mb-2"),children:e.type+" "+e.pc_id}),(0,i.jsx)("h1",{className:m()("mt-0","mb-2"),children:e.title}),(0,i.jsx)("p",{className:m()("mt-0","mb-0"),children:e.authors.map((function(t){return"".concat(t.name," ").concat(t.surname)})).join(", ")})]}),(0,i.jsx)(b.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},className:m()("mb-5",g().gallery),children:(0,i.jsx)(p.G,{columnsCountBreakPoints:{default:4,1400:3,1200:3,992:2,768:2,576:1},className:m()(g().contributionGallery),children:(0,i.jsx)(p.Z,{gutter:"1.5rem",children:e.images.map((function(t,o){return(0,i.jsx)(M,{zoomMargin:20,children:(0,i.jsx)("div",{className:m()(g().thumbnail),children:(0,i.jsx)(w.Z,{src:n+"/images/contributions-media/"+e.pc_id+"/"+t.src,alt:"Image of "+e.title,layout:"responsive",width:t.width,height:t.height,placeholder:"blur"},"img-"+o)},"img-"+o)},"img-"+o)}))})})}),(0,i.jsx)(b.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},lg:{span:8,offset:2},xl:{span:8,offset:2},children:(0,i.jsx)("p",{className:m()("mb-5"),style:{whiteSpace:"pre-line"},children:e.description.split("\n").join("\n")})}),(0,i.jsx)(b.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},lg:{span:8,offset:2},xl:{span:8,offset:2},children:(0,i.jsxs)("h5",{children:["Artist",e.authors.length>1?"s":""," bio"]})}),e.authors.map((function(t,o){return(0,i.jsx)(b.Z,{sm:{span:12,offset:0},md:{span:10,offset:o%3+1},children:(0,i.jsxs)(h.Z,{className:m()("d-flex","align-items-center","mb-5"),children:[(0,i.jsx)(b.Z,{sm:2,children:t.images&&t.images.map((function(t,o){return(0,i.jsx)("div",{className:m()({"mt-3":o>0}),style:{maxWidth:"30vw"},children:(0,i.jsx)(w.Z,{src:n+"/images/contributions-media/"+e.pc_id+"/"+t.src,alt:"Image of "+e.title,layout:"responsive",width:t.width,height:t.height,placeholder:"blur"})},"img-author-"+t)}))}),(0,i.jsxs)(b.Z,{sm:7,children:[(0,i.jsxs)("p",{className:m()("mt-0","mb-0","fw-semibold"),children:[!t.website&&(0,i.jsxs)("a",{children:[t.name," ",t.surname]}),t.website&&(0,i.jsxs)("a",{href:t.website,children:[t.name," ",t.surname]})]}),t.bio&&(0,i.jsx)("p",{className:m()(g().bio,"mb-0"),children:t.bio})]})]})},"auth"+o)}))]})}},7989:function(t){t.exports={template:"contributions_template__2Q1pq",contribution:"contributions_contribution__dEp6U",thumbnail:"contributions_thumbnail__qPO7r",category:"contributions_category__nyuXt",title:"contributions_title__WDGSp",authors:"contributions_authors__APf_7",readMore:"contributions_readMore__a_6U_",gallery:"contributions_gallery__2JJMC",bio:"contributions_bio__qi_Pb"}},1163:function(t,e,n){t.exports=n(387)},2337:function(t,e,n){"use strict";n.d(e,{G:function(){return h},Z:function(){return d}});var i=n(7294);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o.apply(this,arguments)}function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}var a=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,r(e,n);var s=a.prototype;return s.getColumns=function(){var t=this.props,e=t.children,n=t.columnsCount,o=Array.from({length:n},(function(){return[]}));return i.Children.forEach(e,(function(t,e){t&&i.isValidElement(t)&&o[e%n].push(t)})),o},s.renderColumns=function(){var t=this.props.gutter;return this.getColumns().map((function(e,n){return i.createElement("div",{key:n,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t}},e.map((function(t){return t})))}))},s.render=function(){var t=this.props,e=t.gutter,n=t.className,r=t.style;return i.createElement("div",{style:o({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:e},r),className:n},this.renderColumns())},a}(i.Component);a.propTypes={},a.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var s=a,l=function(){var t=function(){var t=(0,i.useState)(!1),e=t[0],n=t[1];return(0,i.useEffect)((function(){n(!0)}),[]),e}(),e=(0,i.useState)(0),n=e[0],o=e[1],r=(0,i.useCallback)((function(){t&&o(window.innerWidth)}),[t]);return(0,i.useEffect)((function(){if(t)return window.addEventListener("resize",r),r(),function(){return window.removeEventListener("resize",r)}}),[t,r]),n},c=function(t){var e=t.columnsCountBreakPoints,n=t.children,o=t.className,r=t.style,a=l(),s=(0,i.useMemo)((function(){var t=Object.keys(e).sort((function(t,e){return t-e})),n=t.length>0?e[t[0]]:1;return t.forEach((function(t){t<a&&(n=e[t])})),n}),[a,e]);return i.createElement("div",{className:o,style:r},i.Children.map(n,(function(t,e){return i.cloneElement(t,{key:e,columnsCount:s})})))};c.propTypes={},c.defaultProps={columnsCountBreakPoints:{350:1,750:2,900:3},className:null,style:null};var h=c,d=s}},function(t){t.O(0,[205,642,774,888,179],(function(){return e=8106,t(t.s=e);var e}));var e=t.O();_N_E=e}]);