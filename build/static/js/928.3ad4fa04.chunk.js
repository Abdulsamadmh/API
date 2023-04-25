(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[928],{88874:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(29439),s=n(72791),i=n(54440),o=n(94070),c=(n(90461),n(68233),n(80184));function l(e){var t=s.useState(!1),n=(0,r.Z)(t,2),l=(n[0],n[1],e.notify);e.setNotify;return(0,c.jsx)(i.Z,{open:l.isOpen,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,c.jsx)(o.Z,{severity:l.type,children:l.message})})}},61269:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(72791);var r=n(5289),s=n(65661),i=n(39157),o=n(80184);function c(e){var t=e.title,n=e.children,c=e.openPopup;e.setOpenPopup;return(0,o.jsxs)(r.Z,{open:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"lg",children:[(0,o.jsx)(s.Z,{children:t}),(0,o.jsx)(i.Z,{children:n})]})}},1695:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(1413),s=n(45987),i=n(72791),o=n(13967),c=n(64554),l=n(66934),a=n(12065),d=(0,l.ZP)(c.Z)((function(e){var t=e.theme,n=e.ownerState,s="light"===t.palette.mode,i="filled"===n.variant,o="outlined"===n.variant,c="soft"===n.variant,l=(0,r.Z)({},"default"===n.color&&(0,r.Z)((0,r.Z)({},o&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"1px solid ".concat((0,a.Fq)(t.palette.grey[500],.32))}),c&&{color:s?t.palette.text.primary:t.palette.common.white,backgroundColor:(0,a.Fq)(t.palette.grey[500],.16)})),d=(0,r.Z)({},"default"!==n.color&&(0,r.Z)((0,r.Z)((0,r.Z)({},i&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main}),o&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:"1px solid ".concat(t.palette[n.color].main)}),c&&{color:t.palette[n.color][s?"dark":"light"],backgroundColor:(0,a.Fq)(t.palette[n.color].main,.16)}));return(0,r.Z)((0,r.Z)({height:24,minWidth:22,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,1),color:t.palette.grey[800],fontSize:t.typography.pxToRem(12),fontFamily:t.typography.fontFamily,backgroundColor:t.palette.grey[300],fontWeight:t.typography.fontWeightBold},d),l)})),u=n(80184),h=["children","color","variant","startIcon","endIcon","sx"],x=(0,i.forwardRef)((function(e,t){var n=e.children,i=e.color,l=void 0===i?"default":i,a=e.variant,x=void 0===a?"soft":a,m=e.startIcon,p=e.endIcon,f=e.sx,j=(0,s.Z)(e,h),Z=(0,o.Z)(),v={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,u.jsxs)(d,(0,r.Z)((0,r.Z)({ref:t,component:"span",ownerState:{color:l,variant:x},sx:(0,r.Z)((0,r.Z)((0,r.Z)({},m&&{pl:.75}),p&&{pr:.75}),f),theme:Z},j),{},{children:[m&&(0,u.jsxs)(c.Z,{sx:(0,r.Z)({mr:.75},v),children:[" ",m," "]}),n,p&&(0,u.jsxs)(c.Z,{sx:(0,r.Z)({ml:.75},v),children:[" ",p," "]})]}))}))},29777:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1413),s=n(91614),i=n(20890),o=n(64554),c=n(68096),l=n(30829),a=n(12674),d=n(23786),u=n(36151),h=n(71747),x=(n(72791),n(61134)),m=(n(61044),n(88874),n(80184));function p(e){var t,n,p=e.setOpenPopup,f=e.insernewdata,j=(0,x.cI)({mode:"onBlur"}),Z=j.register,v=j.handleSubmit,g=j.formState.errors;return(0,m.jsxs)(s.Z,{maxWidth:"lg",sx:{margin:0},children:[(0,m.jsx)(h.Z,(0,r.Z)({"aria-label":"minimum height",minRows:3,placeholder:"Recommendation / Comment",style:{width:400,height:150},name:"recommendation",id:"recommendation"},Z("recommendation",{required:"Recommendation is required"}))),(0,m.jsx)(i.Z,{sx:{color:"red"},children:"required"===(null===(t=g.recommendation)||void 0===t?void 0:t.type)&&"Recommendation is required"}),(0,m.jsx)("br",{}),(0,m.jsx)(o.Z,{flex:2,children:(0,m.jsxs)(c.Z,{sx:{width:"170px"},children:[(0,m.jsx)(l.Z,{id:"possitionId-label",children:"Select status"}),(0,m.jsxs)(a.Z,(0,r.Z)((0,r.Z)({labelId:"demo-simple-select-label",id:"status",label:"status",sx:{width:"238px"}},Z("status")),{},{children:[(0,m.jsx)(d.Z,{value:"Recommend",children:"Recommend"}),(0,m.jsx)(d.Z,{value:"Released",children:"Released"})]})),(0,m.jsx)(i.Z,{sx:{color:"red"},children:"required"===(null===(n=g.status)||void 0===n?void 0:n.type)&&"Status is required"})]})}),(0,m.jsx)(u.Z,{variant:"contained",onClick:v((function(e){f(e)}),(function(e){})),children:"Submit"}),(0,m.jsx)(u.Z,{onClick:function(){return p(!1)},children:"Cancel"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]})}},65848:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(1413),s=n(29439),i=n(91614),o=n(20890),c=n(36151),l=n(61134),a=n(71747),d=n(72791),u=(n(61044),n(88874),n(80184));function h(e){e.recommendation;var t,n=e.setRecommend,h=e.insernewdata,x=(0,d.useState)(""),m=(0,s.Z)(x,2),p=(m[0],m[1],(0,d.useState)()),f=(0,s.Z)(p,2),j=(f[0],f[1],(0,d.useState)("")),Z=(0,s.Z)(j,2),v=(Z[0],Z[1],(0,d.useState)({isOpen:!1,message:"",type:""})),g=(0,s.Z)(v,2),b=(g[0],g[1],(0,l.cI)({mode:"onBlur"})),y=b.register,C=b.handleSubmit,S=b.formState.errors;new Date;return(0,u.jsxs)(i.Z,{maxWidth:"lg",sx:{margin:0},children:[(0,u.jsx)(a.Z,(0,r.Z)({"aria-label":"minimum height",minRows:3,placeholder:"Recommendation / Comment",style:{width:400,height:150},name:"recommendation",id:"recommendation"},y("recommendation",{required:"Recommendation is required"}))),(0,u.jsx)(o.Z,{sx:{color:"red"},children:"required"===(null===(t=S.recommendation)||void 0===t?void 0:t.type)&&"Recommendation is required"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(c.Z,{variant:"contained",onClick:C((function(e){h(e)}),(function(e){})),children:"Submit"}),(0,u.jsx)(c.Z,{onClick:function(){return n(!1)},children:"Cancel"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]})}},55011:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(29439),s=n(91614),i=n(64554),o=n(48550),c=n(36151),l=n(20890),a=n(72791),d=n(61044),u=(n(88874),n(80184));function h(e){var t=e.uploaddocuments,n=e.setUpload,h=(0,a.useState)(""),x=(0,r.Z)(h,2),m=x[0],p=x[1],f=(0,a.useState)(),j=(0,r.Z)(f,2),Z=(j[0],j[1],(0,a.useState)("")),v=(0,r.Z)(Z,2),g=v[0],b=v[1],y=(0,a.useState)({isOpen:!1,message:"",type:""}),C=(0,r.Z)(y,2),S=(C[0],C[1]);new Date;return(0,u.jsx)(s.Z,{maxWidth:"sm",sx:{margin:0},children:(0,u.jsxs)(i.Z,{flex:2,children:[(0,u.jsx)(o.Z,{type:"file",onChange:function(e){console.log(e.target.files),p(e.target.files)}}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(o.Z,{id:"value",label:"Enter File Name",onChange:function(e){console.log(e.target.value),b(e.target.value)}}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(c.Z,{variant:"contained",onClick:function(e){e.preventDefault();for(var r=new FormData,s=0;s<m.length;s+=1)r.append("files",m[s]),r.append("FileName",g),r.append("Applicationid",t);d.Z.post("https://localhost:7015/api/Upload",r).then((function(e){S({isOpen:!0,message:"Document Uploaded Sucessfully",type:"success"}),n(!1)}))},children:"Upload"}),(0,u.jsx)(c.Z,{onClick:function(){return n(!1)},children:"Cancel"}),(0,u.jsx)(l.Z,{sx:{color:"red",padding:5},children:"Only PDF Files Supported "})]})})}},58928:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(93433),s=n(74165),i=n(15861),o=n(29439),c=n(72791),l=n(57689),a=(n(89353),n(81260)),d=n(64802),u=n.n(d),h=n(54843),x=n(36151),m=n(61134),p=n(64554),f=n(69596),j=n(88141),Z=n(61044),v=n(61269),g=n(1695),b=n(55011),y=n(43649),C=n(88874),S=n(65848),R=n(29777),w=n(78316),k=n(80184);function A(e){var t=(0,w.E)().user,n=(0,l.UO)().userId,d=(0,c.useState)([]),A=(0,o.Z)(d,2),P=A[0],N=A[1],I=(0,c.useState)(""),_=(0,o.Z)(I,2),W=(_[0],_[1],(0,c.useState)([])),U=(0,o.Z)(W,2),O=U[0],D=U[1],F=(0,c.useState)(""),H=(0,o.Z)(F,2),q=(H[0],H[1],(0,c.useState)({})),T=(0,o.Z)(q,2),G=T[0],z=T[1],M=(0,c.useState)(""),L=(0,o.Z)(M,2),E=(L[0],L[1],(0,c.useState)(null)),B=(0,o.Z)(E,2),Y=B[0],K=B[1],V=(0,c.useState)(!1),J=(0,o.Z)(V,2),Q=J[0],X=J[1],$=(0,c.useState)(!1),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],re=(0,c.useState)(null),se=(0,o.Z)(re,2),ie=se[0],oe=se[1],ce=(0,c.useState)([]),le=(0,o.Z)(ce,2),ae=le[0],de=le[1],ue=(0,c.useState)(!1),he=(0,o.Z)(ue,2),xe=he[0],me=he[1],pe=(0,c.useState)(null),fe=(0,o.Z)(pe,2),je=(fe[0],fe[1],(0,m.cI)({mode:"onBlur"})),Ze=(je.register,je.handleSubmit,je.formState.errors,(0,c.useState)({isOpen:!1,message:"",type:""})),ve=(0,o.Z)(Ze,2),ge=ve[0],be=ve[1],ye=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Upload/".concat(n),e.next=4,Z.Z.get(y.R.API_URL+t);case 4:r=e.sent,N(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Investments/".concat(n),e.next=4,Z.Z.get(y.R.API_URL+t);case 4:r=e.sent,z(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="Upload/download/".concat(t.id),(0,Z.Z)({url:y.R.API_URL+n,method:"POST",responseType:"blob"}).then((function(e){u().saveAs(e.data,t.filepath)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Voting/".concat(n),e.next=4,Z.Z.get(y.R.API_URL+t);case 4:r=e.sent,de(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Recommend/".concat(n),e.next=4,Z.Z.get(y.R.API_URL+t);case 4:r=e.sent,D(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){Ce(),Re(),ye(),we()}),[]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("section",{style:{backgroundColor:"#fafafa"},children:(0,k.jsx)(h.L5,{className:"py-5",children:(0,k.jsxs)(h.uZ,{children:[(0,k.jsx)(h.TK,{lg:"8",children:(0,k.jsx)(h.Yl,{className:"mb-1",children:(0,k.jsx)(h.H7,{className:"text-center",children:(0,k.jsxs)(h.re,{bordered:!0,borderColor:"primary",children:[(0,k.jsx)(h.u8,{children:(0,k.jsx)("tr",{children:(0,k.jsx)("td",{colSpan:2,children:(0,k.jsx)(p.Z,{sx:{fontWeight:"bold",m:1},children:"Investment  Details"})})})}),(0,k.jsxs)(h.HG,{children:[(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Applicant Name:"}),(0,k.jsx)("td",{children:G.applicantName})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Account:"}),(0,k.jsx)("td",{children:G.account})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Address:"}),(0,k.jsx)("td",{children:G.address})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Post Code:"}),(0,k.jsx)("td",{children:G.postcode})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Mobile:"}),(0,k.jsx)("td",{children:G.mobile})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Telephone:"}),(0,k.jsx)("td",{children:G.teloffice})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Nature of Business:"}),(0,k.jsx)("td",{children:G.natureofbusiness})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{style:{fontWeight:"bold",textAlign:"left"},children:"Purpose:"}),(0,k.jsx)("td",{children:G.purpose})]})]})]})})})}),(0,k.jsxs)(h.TK,{lg:"8",children:[(0,k.jsx)(h.Yl,{className:"mb-4",children:(0,k.jsxs)(h.H7,{children:[(0,k.jsxs)(h.re,{bordered:!0,borderColor:"primary",children:[(0,k.jsx)(h.u8,{children:(0,k.jsx)("tr",{children:(0,k.jsx)("td",{colSpan:7,children:(0,k.jsx)(p.Z,{sx:{fontWeight:"bold",m:1},children:"Financing Details"})})})}),(0,k.jsxs)(h.HG,{children:[(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{scope:"col",children:"Amount"}),(0,k.jsx)("th",{scope:"col",children:"Contribution"}),(0,k.jsx)("th",{scope:"col",children:"Facilty Period"})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{scope:"row",children:G.amount}),(0,k.jsx)("td",{children:G.contribution}),(0,k.jsx)("td",{children:G.period})]})]})]}),(0,k.jsxs)(h.re,{bordered:!0,borderColor:"primary",children:[(0,k.jsx)(h.u8,{children:(0,k.jsx)("tr",{children:(0,k.jsx)("td",{colSpan:7,children:(0,k.jsx)(p.Z,{sx:{fontWeight:"bold",m:1},children:"Security Details"})})})}),(0,k.jsxs)(h.HG,{children:[(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{scope:"col",children:"Type of Security"}),(0,k.jsx)("th",{scope:"col",children:"Name of guarantor"}),(0,k.jsx)("th",{scope:"col",children:"Nature of business"}),(0,k.jsx)("th",{scope:"col",children:"Address"}),(0,k.jsx)("th",{scope:"col",children:"Phone"})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{scope:"row",children:G.security}),(0,k.jsx)("td",{children:G.nameguarantor}),(0,k.jsx)("td",{children:G.naturesecurity}),(0,k.jsx)("td",{children:G.addresssecurity}),(0,k.jsx)("td",{children:G.phone})]})]})]})]})}),(0,k.jsxs)(h.uZ,{children:[(0,k.jsx)(h.TK,{md:"6",children:(0,k.jsx)(h.Yl,{className:"mb-4 mb-md-0",children:(0,k.jsxs)(h.H7,{children:[(0,k.jsxs)(h.Pp,{className:"mb-4",children:[(0,k.jsx)("span",{className:"text-primary font-italic me-1",children:"Comments and Recommendations"}),(0,k.jsx)(x.Z,{variant:"outlined",onClick:function(){return function(e){oe(e),ne(!0)}(G)},startIcon:(0,k.jsx)(j.Z,{}),children:"Add"})]}),O.map((function(e){return(0,k.jsxs)(h.Pp,{className:"mb-1",style:{fontSize:".77rem"},children:[e.recommendation,"  ",(0,k.jsxs)("span",{className:"text-primary font-italic me-1",children:["Recommended by: ",e.role]})]})}))]})})}),(0,k.jsx)(h.TK,{md:"6",children:(0,k.jsx)(h.Yl,{className:"mb-4 mb-md-0",children:(0,k.jsxs)(h.H7,{children:[(0,k.jsxs)(h.Pp,{className:"mb-4",children:[(0,k.jsx)("span",{className:"text-primary font-italic me-1",children:"Attached Documments"}),(0,k.jsx)(x.Z,{onClick:function(){return function(e){K(e),X(!0)}(G)},variant:"outlined",startIcon:(0,k.jsx)(f.Z,{}),children:"Upload"})," "]}),P.map((function(e){return(0,k.jsx)("li",{children:(0,k.jsx)(x.Z,{onClick:function(){return Se(e)},children:e.fileName})},e.id)}))]})})})]}),(0,k.jsx)("br",{}),(0,k.jsx)(h.Yl,{className:"mb-4 mb-md-0",children:(0,k.jsxs)(h.H7,{children:["COM"===(null===t||void 0===t?void 0:t.role)&&(0,k.jsxs)(h.re,{bordered:!0,borderColor:"primary",children:[(0,k.jsx)(h.u8,{children:(0,k.jsx)("tr",{children:(0,k.jsxs)("td",{colSpan:7,children:[(0,k.jsx)(p.Z,{sx:{fontWeight:"bold",m:1},children:" Credit Commitee Decisions  "}),(0,k.jsx)("span",{className:"text-primary font-italic me-1",children:"Current Status"}),G.status]})})}),(0,k.jsx)(h.HG,{children:ae.map((function(e,t){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:e.fullname}),(0,k.jsx)("td",{children:(0,k.jsx)(g.Z,{color:"Approved"===e.status?"success":"Declined"===e.status&&"error",children:(0,a.G)(e.status)})})]},t)}))})]}),"CA"===(null===t||void 0===t?void 0:t.role)&&(0,k.jsxs)(h.re,{bordered:!0,borderColor:"primary",children:[(0,k.jsx)(h.u8,{children:(0,k.jsx)("tr",{children:(0,k.jsxs)("td",{colSpan:7,children:[(0,k.jsx)(p.Z,{sx:{fontWeight:"bold",m:1},children:" Credit Commitee Decisions  "}),(0,k.jsx)("span",{className:"text-primary font-italic me-1",children:"Current Status"}),G.status]})})}),(0,k.jsx)(h.HG,{children:ae.map((function(e,t){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:e.fullname}),(0,k.jsx)("td",{children:(0,k.jsx)(g.Z,{color:"Approved"===e.status?"success":"Declined"===e.status&&"error",children:(0,a.G)(e.status)})})]},t)}))})]}),"RM"===(null===t||void 0===t?void 0:t.role)&&(0,k.jsxs)(h.re,{bordered:!0,borderColor:"primary",children:[(0,k.jsx)(h.u8,{children:(0,k.jsx)("tr",{children:(0,k.jsxs)("td",{colSpan:7,children:[(0,k.jsx)(p.Z,{sx:{fontWeight:"bold",m:1},children:" Credit Commitee Decisions  "}),(0,k.jsx)("span",{className:"text-primary font-italic me-1",children:"Current Status"}),G.status]})})}),(0,k.jsx)(h.HG,{children:ae.map((function(e,t){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:e.fullname}),(0,k.jsx)("td",{children:(0,k.jsx)(g.Z,{color:"Approved"===e.status?"success":"Declined"===e.status&&"error",children:(0,a.G)(e.status)})})]},t)}))})]})]})})]})]})})}),(0,k.jsx)(v.Z,{openPopup:Q,setUpload:X,title:"New Upload",children:(0,k.jsx)(b.Z,{uploaddocuments:Y,setUpload:X})}),(0,k.jsx)(v.Z,{openPopup:te,setRecommend:ne,title:"Recommendation / Comment",children:(0,k.jsx)(S.Z,{recommendation:ie,setRecommend:ne,insernewdata:function(e){Z.Z.post(y.R.API_URL+"Recommend",{recommendation:e.recommendation,role:t.role,application:n}).then((function(e){be({isOpen:!0,message:"Recommendation Successfuly Submited",type:"success"}),ne(!1);var t=e.data;D((function(e){return[].concat((0,r.Z)(e),[t])}))})).catch((function(e){console.log("Hello errors"),be({isOpen:!0,message:"Employee not hired",type:"error"})}))}})}),(0,k.jsx)(v.Z,{openPopup:xe,setOpenPopup:me,title:"Recommendation Credit Analysist",children:(0,k.jsx)(R.Z,{setOpenPopup:me})}),(0,k.jsx)(C.Z,{notify:ge,setNotify:be})]})}},43649:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});var r={API_URL:"https://192.168.1.142:7015/api/"}},88141:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var s=r(n(45649)),i=n(80184),o=(0,s.default)((0,i.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.Z=o},69596:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var s=r(n(45649)),i=n(80184),o=(0,s.default)((0,i.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.Z=o},45649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(28610)},28610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return s.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return o.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return a.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return h},setRef:function(){return x},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return f},useControlled:function(){return j.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return g.Z}});var r=n(55902),s=n(14036),i=n(31260),o=n(74223),c=n(83199);var l=function(e,t){return function(){return null}},a=n(19103),d=n(98301),u=n(17602);n(87462);var h=function(e,t){return function(){return null}},x=n(62971).Z,m=n(40162),p=n(67384);var f=function(e,t,n,r,s){return null},j=n(98278),Z=n(89683),v=n(42071),g=n(23031),b={configure:function(e){r.Z.configure(e)}}},81260:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var r=n(3431),s=n(17254);function i(e,t){var n=e.toLowerCase();return 0===t?function(e){return e.charAt(0).toUpperCase()+e.substr(1)}(n):n}function o(e,t){return void 0===t&&(t={}),(0,s.B)(e,(0,r.pi)({delimiter:" ",transform:i},t))}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=928.3ad4fa04.chunk.js.map