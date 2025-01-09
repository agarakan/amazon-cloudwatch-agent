"use strict";(self.webpackChunkperformance_benchmark=self.webpackChunkperformance_benchmark||[]).push([[822,579],{5762:function(e,t,r){r.d(t,{l:function(){return n}});var n=r(9610).Z.create({baseURL:"https://fphfs8ni0i.execute-api.us-west-2.amazonaws.com/Testing/performancetrackingapi",timeout:4e3,headers:{"Content-Type":"application/json"},responseType:"json",maxRedirects:21})},5097:function(e,t,r){r.d(t,{DQ:function(){return n},Z8:function(){return i},fr:function(){return a},m_:function(){return s},tF:function(){return o},xm:function(){return l}});var n=["statsd","logs","disk"],o=["procstat_cpu_usage","procstat_memory_rss","procstat_memory_swap","procstat_memory_vms","procstat_memory_data","procstat_num_fds","procstat_write_bytes","net_bytes_sent","net_packets_sent"],a=[100,1e3,5e3],i="aws",s="AmazonCloudWatchAgent",l={procstat_cpu_usage:"CPU Usage",procstat_memory_rss:"Memory Resource",procstat_memory_swap:"Memory Swap",procstat_memory_vms:"Virtual Memory",procstat_memory_data:"Swap Memory",procstat_num_fds:"File Descriptors",procstat_write_bytes:"Write Disk Bytes",net_bytes_sent:"Net Bytes Sent",net_packets_sent:"Net Packages Sent"}},243:function(e,t,r){r.d(t,{u:function(){return b}});var n=r(4165),o=r(5861),a=r(9439),i=r(7313),s=r(9666),l=r(6149),c=r(3604),u=r(6467),d=r(2868),p=r(891),v=r(8962),m=r(7592),h=r(5207),f=r(6417),x=(0,m.ZP)(s.Z)((function(e){e.theme;return{"& label.Mui-focused":{color:"#FFF"},"& .MuiInput-input":{color:"#FFF"},"& .MuiInput-underline:after":{borderBottomColor:"#FFF"},"& .MuiFormHelperText-root":{color:"#000"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#FFF",color:"#FFF"},"&:hover fieldset":{borderColor:"#FFF",color:"#FFF"},"&.Mui-focused fieldset":{borderColor:"#FFF",color:"#FFF"}}}}));function b(e){var t=function(){var e=i.useState({error:!1,loading:!1}),t=(0,a.Z)(e,2),r=t[0],n=t[1];return[r,n]}(),r=(0,a.Z)(t,2),s=r[0],m=s.error,b=s.loading,_=r[1],g=e.password,w=e.password_is_set,Z=e.set_password_state,y=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z({password_is_set:!1,password:t.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.key,e.next="Enter"===e.t0?3:5;break;case 3:return F(),e.abrupt("break",6);case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_({loading:!0,error:!1}),!0,_({loading:!1,error:!1}),Z({password:g,password_is_set:true});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(l.Z,{fullWidth:!0,open:!w,sx:{backdropFilter:"blur(2px)"},PaperProps:{style:{overflow:"hidden",height:"320px",width:"400px",padding:"20px 0px 0px 25px",backgroundImage:"unset",backgroundColor:"#121212",borderRadius:"20px",border:"1px solid #fff"}},children:[(0,f.jsx)(c.Z,{sx:{fontSize:"2em",color:"#fff"},children:" Welcome back."}),(0,f.jsxs)(u.Z,{sx:{mt:"-20px"},children:[(0,f.jsxs)(d.Z,{sx:{mb:4,color:"rgba(255, 255, 255, 0.5)"},children:["Log in to your account or"," ",(0,f.jsx)(p.Z,{sx:{color:"rgba(255, 255, 255, 0.9)"},href:"https://github.com/aws/amazon-cloudwatch-agent/issues/new/choose",children:"contact us"})]}),(0,f.jsx)(x,{sx:{mb:1,borderRadius:"10px",width:"86%",color:"#fff"},autoFocus:!0,error:m,margin:"dense",id:"name",size:"small",label:"Password",type:"password",color:"primary",focused:!0,placeholder:"********************************",helperText:"Incorrect password",variant:"standard",onChange:y,onKeyDown:j}),(0,f.jsxs)(v.Z,{loading:b,variant:"outlined",sx:{mb:1,width:"86%",color:"#fff",borderColor:"#fff"},onClick:F,children:["Log in with Password ",(0,f.jsx)(h.Z,{})]})]})]})}},9579:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q},formatUnixTimestamp:function(){return V}});var n=r(4165),o=r(4942),a=r(1413),i=r(7762),s=r(5861),l=r(9439),c=r(178),u=r(5281),d=r(1113),p=r(1629),v=r(501),m=r(6835),h=r(3467),f=r(4076),x=r(941),b=r(891),_=r(5218),g=r(7903),w=r(9099),Z=r(816),y=r.n(Z),j=r(7313),F=r(5097),k=r(1225),C=r(7592),M=r(9438),S=r(3477),A=r(6417),N=(0,C.ZP)(x.Z)((function(e){var t,r=e.theme;return t={},(0,o.Z)(t,"&.".concat(M.Z.head),{backgroundColor:r.palette.common.black,color:r.palette.common.white,border:"1px solid #000",textAlign:"center"}),(0,o.Z)(t,"&.".concat(M.Z.body),{fontSize:14,border:"1px solid #000",textAlign:"center"}),t})),D=(0,C.ZP)(f.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{}}}));function P(e){var t=e.use_cases,r=e.data_rate;return(0,A.jsx)(p.Z,{sx:{mb:4},component:v.Z,children:(0,A.jsxs)(m.Z,{sx:{borderStyle:"solid"},size:"small","aria-label":"a dense table",children:[(0,A.jsx)(S.Z,{children:(0,A.jsxs)(f.Z,{children:[(0,A.jsx)(N,{width:"50vw",align:"center",sx:{fontWeight:"bold",whiteSpace:"nowrap"},children:"Use Case"}),(0,A.jsx)(N,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Instance Type"}),(0,A.jsx)(N,{width:"50%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg CPU Usage (%)"}),(0,A.jsx)(N,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Memory Usage (%)"}),(0,A.jsx)(N,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Memory Swap (%)"}),(0,A.jsx)(N,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Memory Data (%)"}),(0,A.jsx)(N,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Virtual Memory (%)"}),(0,A.jsx)(N,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Write Disk Bytes (MB)"}),(0,A.jsx)(N,{width:"30%",align:"center",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"File Descriptors"}),(0,A.jsx)(N,{width:"30%",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Net Bytes Sent (MB)"}),(0,A.jsx)(N,{width:"30%",sx:{border:"1px solid #000",fontWeight:"bold",whiteSpace:"nowrap"},children:"Avg Net Packages Sent (MB)"})]})}),(0,A.jsx)(h.Z,{children:null===t||void 0===t?void 0:t.filter((function(e){var t;return null===(t=e.data)||void 0===t?void 0:t[r]})).map((function(e,t){var n=e.data[r],o=Number(null===n||void 0===n?void 0:n.mem_total),a=function(e,t){return e?(t?e/t:e).toFixed(2):"0.00"};return(0,A.jsxs)(D,{children:[(0,A.jsx)(N,{children:e.name}),(0,A.jsx)(N,{children:e.instance_type}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.procstat_cpu_usage))}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.procstat_memory_rss),o)}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.procstat_memory_swap),o)}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.procstat_memory_data),o)}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.procstat_memory_vms),o)}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.procstat_write_bytes))}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.procstat_num_fds))}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.net_bytes_sent))}),(0,A.jsx)(N,{children:a(Number(null===n||void 0===n?void 0:n.net_packets_sent))})]},"".concat(e.name,"-").concat(t))}))})]})})}var W=r(5762);function T(e){return L.apply(this,arguments)}function L(){return(L=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z(t,{TableName:"CWAPerformanceMetrics",Limit:F.DQ.length,IndexName:"ServiceDate",KeyConditions:{Service:{ComparisonOperator:"EQ",AttributeValueList:[{S:F.m_}]},CommitDate:{ComparisonOperator:"LE",AttributeValueList:[{N:y()().unix().toString()}]}},ScanIndexForward:!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W.l.defaults.headers["x-api-key"]=t,e.abrupt("return",W.l.post("/",{Action:"Query",Params:r}).then((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Items})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return U.apply(this,arguments)}function U(){return(U=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W.l.defaults.headers["x-api-key"]=t,e.abrupt("return",W.l.post("/",{Action:"Github",URL:"GET /repos/{owner}/{repo}/releases/latest",Params:{owner:F.Z8,repo:"amazon-cloudwatch-agent"}}).then((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return Y.apply(this,arguments)}function Y(){return Y=(0,s.Z)((0,n.Z)().mark((function e(t,r){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,W.l.defaults.headers["x-api-key"]=t,o=r.map(function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,o,a,i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.l.post("/",{Action:"Github",URL:"GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",Params:{owner:F.Z8,repo:"amazon-cloudwatch-agent",commit_sha:t}});case 2:if(s=e.sent,void 0!==(null===(r=s.data)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.length)){e.next=6;break}return console.log("PR Info not found for: "+t),e.abrupt("return",void 0);case 6:return e.abrupt("return",null===(a=s.data)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.at(0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(o));case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),Y.apply(this,arguments)}var B=r(243),H=r(6392);function Q(e){var t;(0,k.o)({title:"Amazon CloudWatch Agent"});var r=e.password,Z=e.password_is_set,y=e.set_password_state,C=function(e){var t=j.useState({version:void 0,commit_url:void 0,commit_date:void 0,commit_hash:void 0,commit_title:void 0,use_cases:[],ami_id:void 0,collection_period:void 0,error:void 0,body:void 0}),r=(0,l.Z)(t,2),c=r[0],u=r[1];return j.useEffect((function(){(0,s.Z)((0,n.Z)().mark((function t(){var r,s,c,d,p,v,m,h,f,x,b,_,g,w,Z,y,j,F,k,C;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Promise.all([R(e),T(e)]);case 4:if(v=t.sent,m=(0,l.Z)(v,2),h=m[0],f=m[1],null!=h&&null!=f&&0!==f.length){t.next=10;break}return t.abrupt("return");case 10:x=[],b=(null===(r=f.at(0))||void 0===r?void 0:r.CommitHash.S)||"",_=f.map((function(e){var t;return null===(t=e.CommitHash)||void 0===t?void 0:t.S})),g=null===(s=f.at(0))||void 0===s?void 0:s.CommitDate.N,w=null===(c=f.at(0))||void 0===c?void 0:c.CollectionPeriod.S,Z=null===(d=f.at(0))||void 0===d?void 0:d.InstanceAMI.S,y=(0,i.Z)(f),t.prev=17,F=(0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=j.value,x.push({name:null===t||void 0===t?void 0:t.UseCase.S,data_type:null===t||void 0===t?void 0:t.DataType.S,instance_type:null===t||void 0===t?void 0:t.InstanceType.S,data:Object.keys(null===t||void 0===t?void 0:t.Results.M).reduce((function(e,r){var n,i,s,l,c,u,d,p,v,m,h,f,x,b,_,g,w,Z,y,j,F,k,C,M,S,A,N,D,P,W,T,L,z,I,R,U,E,Y,B,H,Q,V,O,G,X,K,q,J,$,ee;return(0,a.Z)((0,a.Z)({},e),{},(0,o.Z)({},r,{procstat_cpu_usage:null===t||void 0===t||null===(n=t.Results.M[r])||void 0===n||null===(i=n.M)||void 0===i||null===(s=i.procstat_cpu_usage)||void 0===s||null===(l=s.M)||void 0===l||null===(c=l.Average)||void 0===c?void 0:c.N,procstat_memory_rss:null===t||void 0===t||null===(u=t.Results.M[r])||void 0===u||null===(d=u.M)||void 0===d||null===(p=d.procstat_memory_rss)||void 0===p||null===(v=p.M)||void 0===v||null===(m=v.Average)||void 0===m?void 0:m.N,procstat_memory_swap:null===t||void 0===t||null===(h=t.Results.M[r])||void 0===h||null===(f=h.M)||void 0===f||null===(x=f.procstat_memory_swap)||void 0===x||null===(b=x.M)||void 0===b||null===(_=b.Average)||void 0===_?void 0:_.N,procstat_memory_vms:null===t||void 0===t||null===(g=t.Results.M[r])||void 0===g||null===(w=g.M)||void 0===w||null===(Z=w.procstat_memory_vms)||void 0===Z||null===(y=Z.M)||void 0===y||null===(j=y.Average)||void 0===j?void 0:j.N,procstat_memory_data:null===t||void 0===t||null===(F=t.Results.M[r])||void 0===F||null===(k=F.M)||void 0===k||null===(C=k.procstat_memory_data)||void 0===C||null===(M=C.M)||void 0===M||null===(S=M.Average)||void 0===S?void 0:S.N,procstat_write_bytes:null===t||void 0===t||null===(A=t.Results.M[r])||void 0===A||null===(N=A.M)||void 0===N||null===(D=N.procstat_write_bytes)||void 0===D||null===(P=D.M)||void 0===P||null===(W=P.Average)||void 0===W?void 0:W.N,procstat_num_fds:null===t||void 0===t||null===(T=t.Results.M[r])||void 0===T||null===(L=T.M)||void 0===L||null===(z=L.procstat_num_fds)||void 0===z||null===(I=z.M)||void 0===I||null===(R=I.Average)||void 0===R?void 0:R.N,net_bytes_sent:null===t||void 0===t||null===(U=t.Results.M[r])||void 0===U||null===(E=U.M)||void 0===E||null===(Y=E.net_bytes_sent)||void 0===Y||null===(B=Y.M)||void 0===B||null===(H=B.Average)||void 0===H?void 0:H.N,net_packets_sent:null===t||void 0===t||null===(Q=t.Results.M[r])||void 0===Q||null===(V=Q.M)||void 0===V||null===(O=V.net_packets_sent)||void 0===O||null===(G=O.M)||void 0===G||null===(X=G.Average)||void 0===X?void 0:X.N,mem_total:null===t||void 0===t||null===(K=t.Results.M[r])||void 0===K||null===(q=K.M)||void 0===q||null===(J=q.mem_total)||void 0===J||null===($=J.M)||void 0===$||null===(ee=$.Average)||void 0===ee?void 0:ee.N}))}),{})});case 2:case"end":return e.stop()}}),e)})),y.s();case 20:if((j=y.n()).done){t.next=24;break}return t.delegateYield(F(),"t0",22);case 22:t.next=20;break;case 24:t.next=29;break;case 26:t.prev=26,t.t1=t.catch(17),y.e(t.t1);case 29:return t.prev=29,y.f(),t.finish(29);case 32:return t.next=34,E(e,_);case 34:k=t.sent,C=null!==(p=k.find((function(e){return void 0!==e})))&&void 0!==p?p:{title:"PR data unavailable",html_url:"https://github.com/aws/amazon-cloudwatch-agent/pulls",number:0,sha:"default-sha"},u((function(e){var t,r;return(0,a.Z)((0,a.Z)({},e),{},{version:h.tag_name,ami_id:Z,collection_period:w,use_cases:x,commit_title:"".concat(null===C||void 0===C?void 0:C.title," (#").concat(null===C||void 0===C?void 0:C.number,")"),commit_url:null===C||void 0===C?void 0:C.html_url,commit_hash:null!==(t=null===C||void 0===C?void 0:C.sha)&&void 0!==t?t:b,commit_date:V(null!==g&&void 0!==g?g:0),body:null!==(r=h.body)&&void 0!==r?r:"Release notes unavailable"})}));case 37:case"end":return t.stop()}}),t,null,[[17,26,29,32]])})))()}),[e,u]),[c,u]}(r),M=(0,l.Z)(C,1)[0],S=M.version,N=M.commit_date,D=M.commit_title,W=M.commit_hash,L=M.commit_url,z=M.use_cases,I=M.ami_id,U=M.collection_period,Y=M.body,Q=function(){var e=j.useState({data_type:"Metrics"}),t=(0,l.Z)(e,2),r=t[0],n=t[1];return[r,n]}(),O=(0,l.Z)(Q,2),G=O[0].data_type,X=O[1],K=j.useState(!0),q=(0,l.Z)(K,2),J=q[0],$=q[1],ee=function(e){X({data_type:e.target.value})},te=function(){$(!J)},re=z.filter((function(e){var t;return(null===e||void 0===e||null===(t=e.data_type)||void 0===t?void 0:t.toLowerCase())===G.toLowerCase()}));return(0,A.jsxs)(c.Z,{children:[(0,A.jsx)(B.u,{password:r,password_is_set:Z,set_password_state:y}),S&&D?(0,A.jsxs)(c.Z,{sx:{py:"5vh",border:"1px solid"},maxWidth:"lg",children:[(0,A.jsx)(c.Z,{sx:{mb:4},children:(0,A.jsxs)(d.Z,{sx:{mb:2,fontWeight:"bold"},variant:"h2",children:["Performance Report",(0,A.jsx)("hr",{})]})}),(0,A.jsxs)(c.Z,{sx:{mb:4},children:[(0,A.jsx)(p.Z,{sx:{mb:4,display:"flex",justifyContent:"center",boxShadow:"unset"},component:v.Z,children:(0,A.jsx)(m.Z,{sx:{borderStyle:"solid",width:"fit-content"},size:"small","aria-label":"a dense table",children:(0,A.jsx)(h.Z,{children:null===(t=["Version","Architectural","Collection Period","Testing AMI","Commit Hash","Commit Name","Commit Date","Data Type","Release Notes"])||void 0===t?void 0:t.map((function(e){return(0,A.jsxs)(f.Z,{children:[(0,A.jsx)(x.Z,{sx:{border:"1px solid #000",fontWeight:"bold"},children:e}),(0,A.jsx)(x.Z,{sx:{border:"1px solid #000"},children:"Version"===e?(0,A.jsx)(b.Z,{href:"https://github.com/aws/amazon-cloudwatch-agent/releases/tag/".concat(S),children:S}):"Architectural"===e?(0,A.jsx)(d.Z,{variant:"h4",children:"EC2"}):"Collection Period"===e?(0,A.jsxs)(d.Z,{variant:"h4",children:[U,"s"]}):"Testing AMI"===e?(0,A.jsx)(d.Z,{variant:"h4",children:I}):"Commit Hash"===e?(0,A.jsx)(d.Z,{variant:"h4",children:W}):"Commit Name"===e?(0,A.jsx)(b.Z,{href:L,variant:"h4",children:D}):"Commit Date"===e?(0,A.jsx)(d.Z,{variant:"h4",children:N}):"Data Type"===e?(0,A.jsxs)(_.Z,{sx:{height:"41px"},value:G,onChange:ee,children:[(0,A.jsx)(g.Z,{value:"Metrics",children:"Metric"}),(0,A.jsx)(g.Z,{value:"Traces",children:"Trace"}),(0,A.jsx)(g.Z,{value:"Logs",children:"Logs"})]}):(0,A.jsxs)("div",{children:[(0,A.jsx)(w.Z,{onClick:te,className:"toggle-button",variant:"outlined",sx:{marginBottom:0,backgroundColor:"#ffffff",borderColor:"#333333",color:"#333333","&:hover":{backgroundColor:"#f5f5f5",borderColor:"#333333"}},children:J?"Show release notes":"Hide release notes"}),!J&&(0,A.jsx)(H.U,{className:"markdown-content",children:Y})]})})]},e)}))})})}),(0,A.jsx)("hr",{})]}),F.fr.map((function(e){return(0,A.jsxs)(c.Z,{children:[(0,A.jsxs)(d.Z,{sx:{mb:2,fontWeight:"bold"},variant:"h3",children:[G," (TPM: ",e,")"," "]}),(0,A.jsx)(P,{data_rate:String(e),use_cases:re},G)]},e)}))]}):(0,A.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,A.jsx)(u.Z,{color:"inherit"})})]})}var V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dddd, MMMM Do, YYYY h:mm:ss A";try{var r="string"===typeof e?Number(e):e;return!Number.isFinite(r)||r<0?(console.log("invalid unix timestamp:"),y().unix(0).format(t)):y().unix(r).format(t)}catch(n){return console.error("Error formatting unix timestamp:",n),y().unix(0).format(t)}}},2822:function(e,t,r){r.r(t),r.d(t,{default:function(){return U},formatCommitInfo:function(){return E}});var n=r(4165),o=r(1413),a=r(7762),i=r(5861),s=r(9439),l=r(178),c=r(5281),u=r(1113),d=r(1629),p=r(501),v=r(6835),m=r(3467),h=r(4076),f=r(941),x=r(5218),b=r(7903),_=r(7829),g=r(9860),w=r(9118),Z=r.n(w),y=r(7313),j=r(8446),F=r(5097),k=r(1225),C=r(816),M=r.n(C),S=r(5762);function A(e){return N.apply(this,arguments)}function N(){return(N=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=M()().unix(),e.abrupt("return",D(t,{TableName:"CWAPerformanceMetrics",Limit:25*F.DQ.length,IndexName:"ServiceDate",KeyConditions:{Service:{ComparisonOperator:"EQ",AttributeValueList:[{S:F.m_}]},CommitDate:{ComparisonOperator:"LE",AttributeValueList:[{N:r.toString()}]}},ScanIndexForward:!1}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return P.apply(this,arguments)}function P(){return(P=(0,i.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.l.defaults.headers["x-api-key"]=t,e.abrupt("return",S.l.post("/",{Action:"Query",Params:r}).then((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Items})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)((0,n.Z)().mark((function e(t,r){var o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S.l.defaults.headers["x-api-key"]=t,e.next=4,S.l.post("/",{Action:"Github",URL:"GET /repos/{owner}/{repo}/commits/{ref}",Params:{owner:F.Z8,repo:"amazon-cloudwatch-agent",ref:r}});case 4:if(null!==(a=e.sent)&&void 0!==a&&null!==(o=a.data)&&void 0!==o&&o.data){e.next=7;break}return e.abrupt("return",{author:{login:"default-user"},commit:{message:"No commit message available",author:{date:(new Date).toISOString()}},sha:"default-sha"});case 7:return e.abrupt("return",a.data.data);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Failed to fetch commit information:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var L=r(243);function z(){var e=(0,g.Z)();return{chart:{type:"line",toolbar:{show:!0,offsetX:-100,offsetY:5,tools:{selection:!1,zoom:!1,zoomin:!1,zoomout:!1,pan:!1}},events:{xAxisLabelClick:function(e,t,r){var n=r.globals.categoryLabels.at(r.labelIndex);window.location.assign("https://github.com/".concat(F.Z8,"/").concat("amazon-cloudwatch-agent","/commit/").concat(n))}}},xaxis:{labels:{rotateAlways:!0,rotate:-45,style:{colors:["light"===e.palette.mode?"#212121":"#FFFFFF"],fontSize:"12px"},offsetX:10,offsetY:5},tooltip:{enabled:!1},title:{text:"Commit Sha",style:{color:"light"===e.palette.mode?"#212121":"#FFF",fontSize:"14px"},offsetY:-20}},colors:["#FF6384","#FF9F40","#FFCD56","#0ED87C","#4BC0C0","#36A2EB","#9965FF","#996255","#DF358D","#DF358D"],yaxis:{labels:{style:{colors:["light"===e.palette.mode?"#212121":"#FFFFFF"]}},title:{style:{color:"light"===e.palette.mode?"#212121":"#FFF",fontSize:"14px"}}},tooltip:{intersect:!0,shared:!1,followCursor:!0,onDatasetHover:{highlightDataSeries:!0},x:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{position:"right",showForSingleSeries:!0,markers:{width:20,radius:2},offsetX:-40,offsetY:40,itemMargin:{horizontal:5,vertical:0},labels:{colors:["light"===e.palette.mode?"#212121":"#FFFFFF"]}},markers:{size:5},title:{align:"center",offsetX:-30,style:{color:"light"===e.palette.mode?"#212121":"#FFF",fontSize:"20px"}}}}var I=r(9579),R=r(6417);function U(e){var t;(0,k.o)({title:"Amazon CloudWatch Agent"});var r=(0,g.Z)(),w=e.password,C=e.password_is_set,M=e.set_password_state,S=function(e){var t=y.useState({last_update:void 0,hash_categories:[],trend_data:[],commits_information:[]}),r=(0,s.Z)(t,2),l=r[0],c=r[1];return y.useEffect((function(){(0,i.Z)((0,n.Z)().mark((function t(){var r,i,s,l,u,d,p,v,m;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,A(e);case 4:if(null!=(i=t.sent)&&0!==i.length){t.next=7;break}return t.abrupt("return");case 7:return s=[],l=(null===(r=i.at(0))||void 0===r?void 0:r.CommitDate.N)||"",u=Array.from(new Set(i.map((function(e){return e.CommitHash.S.substring(0,7)})))).reverse(),t.next=12,Promise.all(u.map((function(t){return W(e,t)})));case 12:d=t.sent,p=(0,a.Z)(F.tF),t.prev=14,m=(0,n.Z)().mark((function e(){var t,r,o,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=v.value,r=(0,a.Z)(F.fr),e.prev=2,l=(0,n.Z)().mark((function e(){var r,l,c,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o.value,l=(0,n.Z)().mark((function e(){var o,l,d,p,v,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=u[c],0!==(l=i.filter((function(e){return e.DataType.S===o}))).length){e.next=4;break}return e.abrupt("return","continue");case 4:d=[],p=(0,a.Z)(F.DQ),e.prev=6,m=(0,n.Z)().mark((function e(){var o,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=v.value,a=l.reverse().filter((function(e){return e.UseCase.S===o})).map((function(e){try{var n;return{y:Number(Number(null===(n=e.Results.M[r].M[t].M.Average)||void 0===n?void 0:n.N).toFixed(2)),x:e.CommitHash.S.substring(0,7)}}catch(o){return{y:-1,x:e.CommitHash.S.substring(0,7)}}})),0!==(i=a.filter((function(e){return-1!==(null===e||void 0===e?void 0:e.y)&&void 0!==(null===e||void 0===e?void 0:e.y)}))).length){e.next=5;break}return e.abrupt("return","continue");case 5:d.push({name:o,data:i});case 6:case"end":return e.stop()}}),e)})),p.s();case 9:if((v=p.n()).done){e.next=16;break}return e.delegateYield(m(),"t0",11);case 11:if("continue"!==e.t0){e.next=14;break}return e.abrupt("continue",14);case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(6),p.e(e.t1);case 21:return e.prev=21,p.f(),e.finish(21);case 24:s.push({name:t,data_type:o,data_tpm:r,data_series:d.reverse()});case 25:case"end":return e.stop()}}),e,null,[[6,18,21,24]])})),c=0,u=["metrics","traces","logs"];case 3:if(!(c<u.length)){e.next=11;break}return e.delegateYield(l(),"t0",5);case 5:if("continue"!==e.t0){e.next=8;break}return e.abrupt("continue",8);case 8:c++,e.next=3;break;case 11:case"end":return e.stop()}}),e)})),r.s();case 5:if((o=r.n()).done){e.next=9;break}return e.delegateYield(l(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),r.e(e.t1);case 14:return e.prev=14,r.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})),p.s();case 17:if((v=p.n()).done){t.next=21;break}return t.delegateYield(m(),"t0",19);case 19:t.next=17;break;case 21:t.next=26;break;case 23:t.prev=23,t.t1=t.catch(14),p.e(t.t1);case 26:return t.prev=26,p.f(),t.finish(26);case 29:c((function(e){return(0,o.Z)((0,o.Z)({},e),{},{trend_data:s,hash_categories:u,commits_information:d,last_update:(0,I.formatUnixTimestamp)(null!==l&&void 0!==l?l:0)})}));case 30:case"end":return t.stop()}}),t,null,[[14,23,26,29]])})))()}),[e,c]),[l,c]}(w),N=(0,s.Z)(S,1)[0],D=N.last_update,P=N.hash_categories,T=N.trend_data,U=N.commits_information,Y=function(){var e=y.useState({data_type:"Metrics"}),t=(0,s.Z)(e,2),r=t[0],n=t[1];return[r,n]}(),B=(0,s.Z)(Y,2),H=B[0].data_type,Q=B[1],V=function(){var e=y.useState({selected_metrics:["procstat_cpu_usage","procstat_memory_rss"]}),t=(0,s.Z)(e,2),r=t[0],n=t[1];return[r,n]}(),O=(0,s.Z)(V,2),G=O[0].selected_metrics,X=O[1],K=P.map((function(){return"light"===r.palette.mode?"#212121":"#FFF"}));return(0,R.jsxs)(l.Z,{children:[(0,R.jsx)(L.u,{password:w,password_is_set:C,set_password_state:M}),D?(0,R.jsxs)(l.Z,{sx:{py:"5vh",border:"1px solid"},maxWidth:"lg",children:[(0,R.jsx)(l.Z,{sx:{mb:4},children:(0,R.jsxs)(u.Z,{sx:{mb:2,fontWeight:"bold"},variant:"h2",children:["Performance Trend",(0,R.jsx)("hr",{})]})}),(0,R.jsxs)(l.Z,{sx:{mb:4},children:[(0,R.jsx)(d.Z,{sx:{position:"relative",mb:4,display:"flex",justifyContent:"center",boxShadow:"unset"},component:p.Z,children:(0,R.jsx)(v.Z,{sx:{borderStyle:"solid",width:"fit-content",overflow:"hidden"},size:"small","aria-label":"a dense table",children:(0,R.jsx)(m.Z,{children:null===(t=["Last Updated","Data Type","Selected Metric"])||void 0===t?void 0:t.map((function(e){return(0,R.jsxs)(h.Z,{children:[(0,R.jsx)(f.Z,{sx:{border:"1px solid #000",fontWeight:"bold"},children:e}),(0,R.jsx)(f.Z,{sx:{border:"1px solid #000",textAlign:"center"},children:"Last Updated"===e?(0,R.jsx)(u.Z,{variant:"h4",children:D}):"Data Type"===e?(0,R.jsxs)(x.Z,{sx:{height:"38px"},value:H,onChange:function(e){return Q({data_type:e.target.value})},children:[(0,R.jsx)(b.Z,{value:"Metrics",children:"Metric"}),(0,R.jsx)(b.Z,{value:"Logs",children:"Logs"})]}):(0,R.jsxs)(x.Z,{multiple:!0,sx:{width:"17vw",height:"38px"},value:G,onChange:function(e){var t=e.target.value;X({selected_metrics:"string"===typeof t?t.split(","):t})},children:[" ",F.tF.map((function(e){return(0,R.jsx)(b.Z,{value:e,children:F.xm[e]},e)}))]})})]},e)}))})})}),(0,R.jsx)("hr",{})]}),(0,R.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:F.tF.map((function(e){return F.fr.map((function(t){var r,n;return G.includes(e)&&(0,R.jsx)(_.Z,{sx:{mb:4},children:(0,R.jsx)(j.Z,{options:Z()(z(),{xaxis:{categories:P,labels:{style:{colors:K}}},yaxis:{title:{text:"procstat_cpu_usage"===e?"Percent":"procstat_num_fds"===e?"":"MB"}},title:{text:"".concat(H," (TPM: ").concat(t,") - Avg ").concat(F.xm[e])},tooltip:{custom:function(e){var t,r,n,o=e.ctx,a=e.series,i=e.seriesIndex,s=e.dataPointIndex,l=e.w,c=o.opts.colors.at(i)||"#000",u=null===(t=o.opts.series.at(i))||void 0===t?void 0:t.name,d=a[i][s],p=l.globals.categoryLabels[s],v=U.find((function(e){var t;return null===e||void 0===e||null===(t=e.sha)||void 0===t?void 0:t.startsWith(p)})),m=null!==(r=null===v||void 0===v?void 0:v.sha)&&void 0!==r?r:"No commit available",h=null!==(n=null===v||void 0===v?void 0:v.commit.message.replace(/\n\r*\n*/g,"<br />"))&&void 0!==n?n:"No commit information available",f=E(v,{dateFormat:!0}),x="<b>".concat(u,"</b>: ").concat(d);return'<div class="commit_box"><div class="mb"><b>'+m+'</b></div><div class="mb bold"><b>'+h+'</b></div><div class="mb bold"><b>'+f+'</b></div><div class="f">'+'<div style="width: 25px; height: 10px; border: solid #fff 1px; background: '.concat(c,'"><div/>')+'<div class="ml">'.concat(x,"</div>")+"</div></div>"}}}),series:(null===(r=T.filter((function(r){return r.name===e&&r.data_type===H.toLowerCase()&&r.data_tpm===t})))||void 0===r||null===(n=r.at(0))||void 0===n?void 0:n.data_series)||[],type:"line",width:"800"})},"".concat(t).concat(e))}))}))})]}):(0,R.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,R.jsx)(c.Z,{color:"inherit"})})]})}var E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.dateFormat,n=void 0!==r&&r,o=t.fallback,a=void 0===o?"No commit information available":o,i=t.includePrefix,s=void 0===i||i;try{var l,c,u,d;if(null===e||void 0===e||null===(l=e.author)||void 0===l||!l.login||null===e||void 0===e||null===(c=e.commit)||void 0===c||null===(u=c.author)||void 0===u||!u.date)return a;var p=(null===e||void 0===e?void 0:e.author).login,v=(null===e||void 0===e||null===(d=e.commit)||void 0===d?void 0:d.author).date;return n&&(v=new Date(v).toLocaleDateString()),"".concat(s?"Committed by ":"").concat(p," on ").concat(v)}catch(m){return console.error("Error formatting commit info:",m),a}}},1225:function(e,t,r){r.d(t,{o:function(){return a}});var n=r(7313),o=r(8467);function a(e,t){var r=(0,o.TH)();n.useEffect((function(){var t=document.title;return document.title="/"===r.pathname&&null!==e&&void 0!==e&&e.title?"".concat(e.title," "):"AWS",function(){document.title=t}}),null!==t&&void 0!==t?t:[])}}}]);