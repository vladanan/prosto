var bundle=(()=>{var V=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var H=Object.prototype.hasOwnProperty;var K=(e,l)=>{for(var d in l)V(e,d,{get:l[d],enumerable:!0})},L=(e,l,d,u)=>{if(l&&typeof l=="object"||typeof l=="function")for(let b of G(l))!H.call(e,b)&&b!==d&&V(e,b,{get:()=>l[b],enumerable:!(u=q(l,b))||u.enumerable});return e};var Q=e=>L(V({},"__esModule",{value:!0}),e);var te={};K(te,{reactRenderZadaci_o2:()=>Y});function m(e,l){return Math.floor(Math.random()*(l-e+1))+e}function U(e){let l="neko pitanje",d=e.novo_pitanje.a,u=e.novo_pitanje.op2,b=e.novo_pitanje.b;return l=React.createElement(React.Fragment,null,React.createElement("label",{className:"text-2xl ml-2",htmlFor:"r"},d," ",u," ",b," = "),React.createElement("input",{onChange:v=>e.setOdgovor(v.target.value),className:"text-2xl w-16  bg-lime-300 px-1 border border-lime-700 rounded-md",type:"number",min:"0",max:"100",id:"r",name:"r",defaultValue:0}),React.createElement("span",{className:"text-2xl ml-2 font-bold text-green-700 "},"\xA0\xA0",e.resenje)),React.createElement(React.Fragment,null,React.createElement("div",{className:"p-1 border border-black rounded-md bg-gradient-to-t from-lime-100 via-white to-white shadow-xl"},l),React.createElement("div",{hidden:!e.vidljiv_odgovor,className:"p-1 h-fit border border-t-0 border-black rounded-md bg-lime-50 shadow-xl"},e.rezultat))}function W(e){let l="neko pitanje",d=e.novo_pitanje.a,u=e.novo_pitanje.b,b=e.novo_pitanje.t11,g=e.novo_pitanje.t22,v=e.novo_pitanje.t33,h,k;return d>u?(h=d-u,k=b+e.i18n.Rec.Ima+d+" "+v+e.i18n.Rec.Aa+g+" "+h+e.i18n.Rec.Manje_kraj):(h=u-d,k=b+e.i18n.Rec.Ima+d+" "+v+e.i18n.Rec.Aa+g+" "+h+e.i18n.Rec.Vise_kraj),l=React.createElement(React.Fragment,null,React.createElement("label",{className:"text-2xl",htmlFor:"r"},k," "),React.createElement("input",{onChange:p=>e.setOdgovor(p.target.value),className:"text-2xl w-16 bg-lime-300 px-1 border border-lime-700 rounded-md",type:"number",min:"0",max:"100",id:"r",name:"r",defaultValue:0}),React.createElement("span",{className:"text-2xl ml-2 font-bold text-green-700 "},"\xA0\xA0",e.resenje)),React.createElement(React.Fragment,null,React.createElement("div",{className:"p-1 border border-black rounded-md bg-gradient-to-t from-lime-100 via-white to-white shadow-xl"},l),React.createElement("div",{hidden:!e.vidljiv_odgovor,className:"p-1 h-fit border border-t-0 border-black rounded-md bg-lime-50 shadow-xl"},e.rezultat))}function X(e){let l="neko pitanje",d=e.novo_pitanje.a,u=e.novo_pitanje.op2,b=e.novo_pitanje.b;return l=React.createElement(React.Fragment,null,React.createElement("label",{className:"text-2xl ml-2",htmlFor:"r"},d," ",u," ",b," = "),React.createElement("input",{onChange:v=>e.setOdgovor(v.target.value),className:"text-2xl w-20 bg-lime-300 px-1 border border-lime-700 rounded-md",type:"number",min:"1",max:"100",id:"r",name:"r",defaultValue:0}),React.createElement("span",{className:"text-2xl ml-2 font-bold text-green-700 "},"\xA0\xA0",e.resenje)),React.createElement(React.Fragment,null,React.createElement("div",{className:"p-1 border border-black rounded-md bg-gradient-to-t from-lime-100 via-white to-white shadow-xl"},l),React.createElement("div",{hidden:!e.vidljiv_odgovor,className:"p-1 h-fit border border-t-0 border-black rounded-md bg-lime-50 shadow-xl"},e.rezultat))}function Y(e){let l=document.getElementById("root");if(!l)throw new Error("Could not find element with iidd root");ReactDOM.createRoot(l).render(React.createElement(ee,{i18n:JSON.parse(e)}))}function ee(e){let[l,d]=React.useState("o2m_1_100"),[u,b]=React.useState(!1),[g,v]=React.useState({a:2,op2:"+",b:2,t11:e.i18n.Novo_pitanje.T11,t22:e.i18n.Novo_pitanje.T22,t33:e.i18n.Novo_pitanje.T33,kombi:""}),[h,k]=React.useState(null),[z,p]=React.useState(null),[F,B]=React.useState(null),[r,n]=React.useState({psvi:!0,p1:!0,p2:!0,p3:!0,p4:!0,p5:!0,p6:!0,p7:!0,p8:!0,p9:!0}),[o,i]=React.useState({dsvi:!0,d1:!0,d2:!0,d3:!0,d4:!0,d5:!0,d6:!0,d7:!0,d8:!0,d9:!0}),R=a=>{d(a),a=="o2m_1_100"||a=="o2m_1_100txt"?v({a:0,op2:"+",b:0,t11:e.i18n.SetNovo_pitanje.T11,t22:e.i18n.SetNovo_pitanje.T22,t33:e.i18n.SetNovo_pitanje.T33,kombi:""}):v({a:0,op2:"*",b:0,t11:e.i18n.SetNovo_pitanje.T11,t22:e.i18n.SetNovo_pitanje.T22,t33:e.i18n.SetNovo_pitanje.T33,kombi:""})},O=()=>{let a,t=["/y1.webp","/y2.gif","/y3.png","/y4.webp","/y5.gif","/y6.gif","/y7.gif","/y8.jpeg","/y9.jpg","/y10.gif"],C=["/n1.webp","/n2.gif","/n3.webp","/n4.jpeg","/n5.png","/n6.jpg","/n7.gif","/n8.gif","/n9.gif","/n10.jpg"],N=m(0,10),S=m(0,10);switch(l){case"o2m_1_100":var{a:_,op2:w,b:f}=g,x=h,s="",c=0;if(w=="-")var s=_-f;else var s=_+f;s==x?c=1:c=0,p(s),c==1?a=React.createElement(React.Fragment,null,React.createElement("p",{style:{textAlign:"center",background:"skyblue",fontSize:"30px"}},"\u2714")):a=React.createElement(React.Fragment,null,React.createElement("p",{style:{background:"red",textAlign:"center",fontSize:"30px"}},"\u2718"));break;case"o2m_1_100txt":var{a:_,b:f}=g,x=h,s=_+f,c=0;s==x?c=1:c=0,p(s),c==1?a=React.createElement(React.Fragment,null,React.createElement("p",{style:{textAlign:"center",background:"skyblue",fontSize:"30px"}},"\u2714")):a=React.createElement(React.Fragment,null,React.createElement("p",{style:{background:"red",textAlign:"center",fontSize:"30px"}},"\u2718"));break;case"o2m_mnozenje":var{a:_,op2:w,b:f}=g,x=h,s="",c=0;if(w=="*")var s=_*f;else var s=_*f;s==x?c=1:c=0,p(s),c==1?a=React.createElement(React.Fragment,null,React.createElement("p",{style:{textAlign:"center",background:"skyblue",fontSize:"30px"}},"\u2714")):a=React.createElement(React.Fragment,null,React.createElement("p",{style:{background:"red",textAlign:"center",fontSize:"30px"}},"\u2718"));break;default:}u==!0?b(!1):(b(!0),B(a))},M=()=>{switch(l){case"o2m_1_100":let a=m(2,99),t=m(0,1),C="",N=m(2,99);if(t==0){if(a<N){let T=a;a=N,N=T}}else for(;a+N>100;)a=m(2,99),N=m(2,99);t==0?C="-":C="+",p(null),v({a,op2:C,b:N,t11:e.i18n.SetNovo_pitanje.T11,t22:e.i18n.SetNovo_pitanje.T22,t33:e.i18n.SetNovo_pitanje.T33,kombi:""});break;case"o2m_1_100txt":let S=m(2,99),_=m(2,99),w=[e.i18n.Novo_pitanjeT1[0],e.i18n.Novo_pitanjeT1[1],e.i18n.Novo_pitanjeT1[2],e.i18n.Novo_pitanjeT1[3],e.i18n.Novo_pitanjeT1[4],e.i18n.Novo_pitanjeT1[5],e.i18n.Novo_pitanjeT1[6],e.i18n.Novo_pitanjeT1[7],e.i18n.Novo_pitanjeT1[8],e.i18n.Novo_pitanjeT1[9]],f=[e.i18n.Novo_pitanjeT2[0],e.i18n.Novo_pitanjeT2[1],e.i18n.Novo_pitanjeT2[2],e.i18n.Novo_pitanjeT2[3],e.i18n.Novo_pitanjeT2[4],e.i18n.Novo_pitanjeT2[5],e.i18n.Novo_pitanjeT2[6],e.i18n.Novo_pitanjeT2[7],e.i18n.Novo_pitanjeT2[8],e.i18n.Novo_pitanjeT2[9]],x=[e.i18n.Novo_pitanjeT3[0],e.i18n.Novo_pitanjeT3[1],e.i18n.Novo_pitanjeT3[2],e.i18n.Novo_pitanjeT3[3],e.i18n.Novo_pitanjeT3[4],e.i18n.Novo_pitanjeT3[5],e.i18n.Novo_pitanjeT3[6],e.i18n.Novo_pitanjeT3[7],e.i18n.Novo_pitanjeT3[8],e.i18n.Novo_pitanjeT3[9]],s=w[m(0,9)],c=f[m(0,9)],J=x[m(0,9)];for(;S+_>100;)S=m(2,99),_=m(2,99);p(null),v({a:S,op2:"+",b:_,t11:s,t22:c,t33:J,kombi:""});break;case"o2m_mnozenje":let A=[],I=0,E=0;for(let T in r)r[T]==!0?A.push(I):E++,I++;E==10&&(r.p1=!0,A[1]=1);let j;for(;!A.includes(j);)j=m(1,9);let $="*",Z=[],D=0,P=0;for(let T in o)o[T]==!0?Z.push(D):P++,D++;P==10&&(o.d1=!0,Z[1]=1);let y;for(;!Z.includes(y);)y=m(1,9);j==0?j=1:j=j,y==0?y=1:y=y,p(null),v({a:j,op2:$,b:y,t11:e.i18n.SetNovo_pitanje.T11,t22:e.i18n.SetNovo_pitanje.T22,t33:e.i18n.SetNovo_pitanje.T33,kombi:""});break;default:break}b(!1)};return React.createElement(React.Fragment,null,React.createElement("p",{className:"text-2xl mt-5 ml-2"},e.i18n.Title),React.createElement("div",{className:"mx-2 mt-1 text-black py-3 p-2 max-w-sm border-2 border-sky-600 rounded-md bg-gradient-to-r from-blue-100 via-lime-100 to-transparent shadow-lg shadow-sky-900"},React.createElement("label",{className:l=="o2m_1_100"?"relative p-1 border-2 border-black rounded-md bg-gradient-to-r from-sky-400 via-lime-400 to-transparent":"relative p-1 border-2 border-black rounded-md bg-gray-400",htmlFor:"o2m_1_100"},e.i18n.Zadaci_1_100),React.createElement("input",{onClick:a=>R("o2m_1_100"),className:"relative ml-2 mt-2",type:"radio",id:"o2m_1_100",name:"radio_z",value:"o2m_1_100",defaultChecked:!0}),React.createElement("br",null),React.createElement("label",{className:l=="o2m_1_100txt"?"relative p-1 border-2 border-black rounded-md bg-gradient-to-br from-red-500 via-yellow-100 to-green-300":"relative p-1 border-2 border-black rounded-md bg-gray-400",htmlFor:"o2m_1_100txt"},e.i18n.Zadaci_smesni_1_100),React.createElement("input",{onClick:a=>R("o2m_1_100txt"),className:"relative ml-2 mt-5",type:"radio",id:"o2m_1_100txt",name:"radio_z",value:"o2m_1_100txt"}),React.createElement("br",null),React.createElement("label",{className:l=="o2m_mnozenje"?"relative p-1 border-2 border-black rounded-md bg-gradient-to-r from-sky-400 via-lime-400 to-transparent":"relative p-1 border-2 border-black rounded-md bg-gray-400",htmlFor:"o2m_mnozenje"},e.i18n.Mnozenje_1_100),React.createElement("input",{onClick:a=>R("o2m_mnozenje"),className:"relative ml-2 mt-5",type:"radio",id:"o2m_mnozenje",name:"radio_z",value:"o2m_mnozenje"}),React.createElement("br",null),l=="o2m_1_100"&&React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("button",{onClick:O,className:`ml-10 my-2 relative
					border-2 border-gray-500 rounded-md p-1 bg-lime-50 hover:bg-lime-200`},e.i18n.Result),React.createElement("button",{onClick:M,className:`ml-8 my-2 relative
					border-2 border-gray-500 rounded-md p-1 bg-blue-300 hover:bg-blue-400`},e.i18n.New_a),React.createElement("br",null),React.createElement(U,{novo_pitanje:g,vidljiv_odgovor:u,setOdgovor:k,rezultat:F,resenje:z})),l=="o2m_1_100txt"&&React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("button",{onClick:O,className:`ml-10 my-2 relative
					border-2 border-gray-500 rounded-md p-1 bg-lime-50 hover:bg-lime-200`},e.i18n.Result),React.createElement("button",{onClick:M,className:`ml-8 my-2 relative
					border-2 border-gray-500 rounded-md p-1 bg-blue-300 hover:bg-blue-400`},e.i18n.New_a),React.createElement("br",null),React.createElement(W,{novo_pitanje:g,vidljiv_odgovor:u,setOdgovor:k,rezultat:F,resenje:z,i18n:e.i18n})),l=="o2m_mnozenje"&&React.createElement(React.Fragment,null,React.createElement("div",{className:"mt-6 grid grid-rows-6 gap-1"},React.createElement("p",{className:"p-1 border-2 border-black rounded-md bg-lime-100 hover:bg-violet-100"},e.i18n.Mnozenje_1_100_1),React.createElement("div",{className:"grid grid-cols-10 gap-0"},React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-300 hover:bg-violet-200",htmlFor:"psvi"},e.i18n.Mnozenje_1_100_svi),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p1"},"1"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p2"},"2"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p3"},"3"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p4"},"4"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p5"},"5"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p6"},"6"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p7"},"7"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p8"},"8"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-lime-100 hover:bg-violet-200",htmlFor:"p9"},"9")),React.createElement("div",{className:"ml-1 grid grid-cols-10 gap-1"},React.createElement("input",{onChange:a=>{r.psvi==!0?n({psvi:!1,p1:!0,p2:!1,p3:!1,p4:!1,p5:!1,p6:!1,p7:!1,p8:!1,p9:!1}):n({psvi:!0,p1:!0,p2:!0,p3:!0,p4:!0,p5:!0,p6:!0,p7:!0,p8:!0,p9:!0})},className:"w-fit",type:"checkbox",id:"psvi",name:"p",value:"svi",checked:r.psvi==!0}),React.createElement("input",{onChange:a=>{r.p1==!0?n(t=>({...t,p1:!1})):n(t=>({...t,p1:!0}))},className:"w-fit",type:"checkbox",id:"p1",name:"p",value:"1",checked:r.p1==!0}),React.createElement("input",{onChange:a=>{r.p2==!0?n(t=>({...t,p2:!1})):n(t=>({...t,p2:!0}))},className:"w-fit",type:"checkbox",id:"p2",name:"p",value:"2",checked:r.p2==!0}),React.createElement("input",{onChange:a=>{r.p3==!0?n(t=>({...t,p3:!1})):n(t=>({...t,p3:!0}))},className:"w-fit",type:"checkbox",id:"p3",name:"p",value:"3",checked:r.p3==!0}),React.createElement("input",{onChange:a=>{r.p4==!0?n(t=>({...t,p4:!1})):n(t=>({...t,p4:!0}))},className:"w-fit",type:"checkbox",id:"p4",name:"p",value:"4",checked:r.p4==!0}),React.createElement("input",{onChange:a=>{r.p5==!0?n(t=>({...t,p5:!1})):n(t=>({...t,p5:!0}))},className:"w-fit",type:"checkbox",id:"p5",name:"p",value:"5",checked:r.p5==!0}),React.createElement("input",{onChange:a=>{r.p6==!0?n(t=>({...t,p6:!1})):n(t=>({...t,p6:!0}))},className:"w-fit",type:"checkbox",id:"p6",name:"p",value:"6",checked:r.p6==!0}),React.createElement("input",{onChange:a=>{r.p7==!0?n(t=>({...t,p7:!1})):n(t=>({...t,p7:!0}))},className:"w-fit",type:"checkbox",id:"p7",name:"p",value:"7",checked:r.p7==!0}),React.createElement("input",{onChange:a=>{r.p8==!0?n(t=>({...t,p8:!1})):n(t=>({...t,p8:!0}))},className:"w-fit",type:"checkbox",id:"p8",name:"p",value:"8",checked:r.p8==!0}),React.createElement("input",{onChange:a=>{r.p9==!0?n(t=>({...t,p9:!1})):n(t=>({...t,p9:!0}))},className:"w-fit",type:"checkbox",id:"p9",name:"p",value:"9",checked:r.p9==!0})),React.createElement("p",{className:"p-1 border-2 border-black rounded-md bg-sky-100 hover:bg-violet-100"},e.i18n.Mnozenje_1_100_2),React.createElement("div",{className:"grid grid-cols-10 gap-0"},React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-300 hover:bg-violet-200",htmlFor:"dsvi"},e.i18n.Mnozenje_1_100_svi),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d1"},"1"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d2"},"2"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d3"},"3"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d4"},"4"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d5"},"5"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d6"},"6"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d7"},"7"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d8"},"8"),React.createElement("label",{className:"w-6 text-center border-x border-t-2 border-black rounded-md bg-sky-100 hover:bg-violet-200",htmlFor:"d9"},"9")),React.createElement("div",{className:"ml-1 grid grid-cols-10 gap-1"},React.createElement("input",{onChange:a=>{o.dsvi==!0?i({dsvi:!1,d1:!0,d2:!1,d3:!1,d4:!1,d5:!1,d6:!1,d7:!1,d8:!1,d9:!1}):i({dsvi:!0,d1:!0,d2:!0,d3:!0,d4:!0,d5:!0,d6:!0,d7:!0,d8:!0,d9:!0})},className:"w-fit",type:"checkbox",id:"dsvi",name:"d",value:"svi",checked:o.dsvi==!0}),React.createElement("input",{onChange:a=>{o.d1==!0?i(t=>({...t,d1:!1})):i(t=>({...t,d1:!0}))},className:"w-fit",type:"checkbox",id:"d1",name:"d",value:"1",checked:o.d1==!0}),React.createElement("input",{onChange:a=>{o.d2==!0?i(t=>({...t,d2:!1})):i(t=>({...t,d2:!0}))},className:"w-fit",type:"checkbox",id:"d2",name:"d",value:"2",checked:o.d2==!0}),React.createElement("input",{onChange:a=>{o.d3==!0?i(t=>({...t,d3:!1})):i(t=>({...t,d3:!0}))},className:"w-fit",type:"checkbox",id:"d3",name:"d",value:"3",checked:o.d3==!0}),React.createElement("input",{onChange:a=>{o.d4==!0?i(t=>({...t,d4:!1})):i(t=>({...t,d4:!0}))},className:"w-fit",type:"checkbox",id:"d4",name:"d",value:"4",checked:o.d4==!0}),React.createElement("input",{onChange:a=>{o.d5==!0?i(t=>({...t,d5:!1})):i(t=>({...t,d5:!0}))},className:"w-fit",type:"checkbox",id:"d5",name:"d",value:"5",checked:o.d5==!0}),React.createElement("input",{onChange:a=>{o.d6==!0?i(t=>({...t,d6:!1})):i(t=>({...t,d6:!0}))},className:"w-fit",type:"checkbox",id:"d6",name:"d",value:"6",checked:o.d6==!0}),React.createElement("input",{onChange:a=>{o.d7==!0?i(t=>({...t,d7:!1})):i(t=>({...t,d7:!0}))},className:"w-fit",type:"checkbox",id:"d7",name:"d",value:"7",checked:o.d7==!0}),React.createElement("input",{onChange:a=>{o.d8==!0?i(t=>({...t,d8:!1})):i(t=>({...t,d8:!0}))},className:"w-fit",type:"checkbox",id:"d8",name:"d",value:"8",checked:o.d8==!0}),React.createElement("input",{onChange:a=>{o.d9==!0?i(t=>({...t,d9:!1})):i(t=>({...t,d9:!0}))},className:"w-fit",type:"checkbox",id:"d9",name:"d",value:"9",checked:o.d9==!0}))),React.createElement("button",{onClick:O,className:`ml-10 my-2 relative
					border-2 border-gray-500 rounded-md p-1 bg-lime-50 hover:bg-lime-200`},e.i18n.Result),React.createElement("button",{onClick:M,className:`ml-8 my-2 relative
					border-2 border-gray-500 rounded-md p-1 bg-blue-300 hover:bg-blue-400`},e.i18n.New_a),React.createElement("br",null),React.createElement(X,{novo_pitanje:g,vidljiv_odgovor:u,setOdgovor:k,rezultat:F,resenje:z}))),React.createElement("br",null))}return Q(te);})();
