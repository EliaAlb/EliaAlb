import{Q as H,T as w,r as C,d as l,b as n,w as s,e as c,o as a,f as i,a as o,u as r,F as T,g as R,n as v,t as b,y as J}from"./app-BDzt4vY9.js";import{_ as K}from"./ActionMessage-CS0sbZnu.js";import{_ as A}from"./Modal-DposImr8.js";import{_ as B}from"./ConfirmationModal-BzznW51H.js";import{_ as F}from"./DangerButton-T78yAkTD.js";import{_ as W}from"./DialogModal-tiwLPJGe.js";import{_ as X}from"./FormSection-BawBN-ub.js";import{_ as Y,a as L}from"./TextInput-CRYaV9Ll.js";import{_ as P}from"./InputLabel-DQ_birq0.js";import{_ as z}from"./PrimaryButton-LEr0Nis6.js";import{_ as h}from"./SecondaryButton-BGoh_qg_.js";import{S}from"./SectionBorder-DjwNnTEi.js";import"./SectionTitle-C0Kh2jz0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={key:0},ee={class:"col-span-6 sm:col-span-4"},te={key:0,class:"col-span-6 lg:col-span-4"},se={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},oe=["onClick"],re={class:"flex items-center"},ne={key:0,class:"ms-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},le={class:"mt-2 text-xs text-gray-600 dark:text-gray-400 text-start"},ae={key:1},ie={class:"space-y-6"},me={class:"text-gray-600 dark:text-gray-400"},de={class:"flex items-center"},ue=["onClick"],ce={key:2},ve={class:"space-y-6"},fe={class:"flex items-center"},ge=["src","alt"],be={class:"ms-4 dark:text-white"},ye={class:"flex items-center"},ke=["onClick"],pe={key:1,class:"ms-2 text-sm text-gray-400"},xe=["onClick"],we={key:0},Ce={class:"relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"},Te=["onClick"],Re={class:"flex items-center"},Me={key:0,class:"ms-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},$e={class:"mt-2 text-xs text-gray-600 dark:text-gray-400"},Ie={__name:"TeamMemberManager",props:{team:Object,availableRoles:Array,userPermissions:Object},setup(m){const k=m,V=H(),d=w({email:"",role:null}),f=w({role:null}),M=w({}),$=w({}),p=C(!1),_=C(null),x=C(!1),y=C(null),N=()=>{d.post(route("team-members.store",k.team),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>d.reset()})},O=u=>{J.delete(route("team-invitations.destroy",u),{preserveScroll:!0})},E=u=>{_.value=u,f.role=u.membership.role,p.value=!0},I=()=>{f.put(route("team-members.update",[k.team,_.value]),{preserveScroll:!0,onSuccess:()=>p.value=!1})},U=()=>{x.value=!0},D=()=>{M.delete(route("team-members.destroy",[k.team,V.props.auth.user]))},Q=u=>{y.value=u},q=()=>{$.delete(route("team-members.destroy",[k.team,y.value]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>y.value=null})},j=u=>k.availableRoles.find(e=>e.key===u).name;return(u,e)=>(a(),l("div",null,[m.userPermissions.canAddTeamMembers?(a(),l("div",Z,[n(S),n(X,{onSubmitted:N},{title:s(()=>e[7]||(e[7]=[i(" Add Team Member ")])),description:s(()=>e[8]||(e[8]=[i(" Add a new team member to your team, allowing them to collaborate with you. ")])),form:s(()=>[e[10]||(e[10]=o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," Please provide the email address of the person you would like to add to this team. ")],-1)),o("div",ee,[n(P,{for:"email",value:"Email"}),n(Y,{id:"email",modelValue:r(d).email,"onUpdate:modelValue":e[0]||(e[0]=t=>r(d).email=t),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),n(L,{message:r(d).errors.email,class:"mt-2"},null,8,["message"])]),m.availableRoles.length>0?(a(),l("div",te,[n(P,{for:"roles",value:"Role"}),n(L,{message:r(d).errors.role,class:"mt-2"},null,8,["message"]),o("div",se,[(a(!0),l(T,null,R(m.availableRoles,(t,g)=>(a(),l("button",{key:t.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":g>0,"rounded-b-none":g!=Object.keys(m.availableRoles).length-1}]),onClick:G=>r(d).role=t.key},[o("div",{class:v({"opacity-50":r(d).role&&r(d).role!=t.key})},[o("div",re,[o("div",{class:v(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":r(d).role==t.key}])},b(t.name),3),r(d).role==t.key?(a(),l("svg",ne,e[9]||(e[9]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):c("",!0)]),o("div",le,b(t.description),1)],2)],10,oe))),128))])])):c("",!0)]),actions:s(()=>[n(K,{on:r(d).recentlySuccessful,class:"me-3"},{default:s(()=>e[11]||(e[11]=[i(" Added. ")])),_:1},8,["on"]),n(z,{class:v({"opacity-25":r(d).processing}),disabled:r(d).processing},{default:s(()=>e[12]||(e[12]=[i(" Add ")])),_:1},8,["class","disabled"])]),_:1})])):c("",!0),m.team.team_invitations.length>0&&m.userPermissions.canAddTeamMembers?(a(),l("div",ae,[n(S),n(A,{class:"mt-10 sm:mt-0"},{title:s(()=>e[13]||(e[13]=[i(" Pending Team Invitations ")])),description:s(()=>e[14]||(e[14]=[i(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")])),content:s(()=>[o("div",ie,[(a(!0),l(T,null,R(m.team.team_invitations,t=>(a(),l("div",{key:t.id,class:"flex items-center justify-between"},[o("div",me,b(t.email),1),o("div",de,[m.userPermissions.canRemoveTeamMembers?(a(),l("button",{key:0,class:"cursor-pointer ms-6 text-sm text-red-500 focus:outline-none",onClick:g=>O(t)}," Cancel ",8,ue)):c("",!0)])]))),128))])]),_:1})])):c("",!0),m.team.users.length>0?(a(),l("div",ce,[n(S),n(A,{class:"mt-10 sm:mt-0"},{title:s(()=>e[15]||(e[15]=[i(" Team Members ")])),description:s(()=>e[16]||(e[16]=[i(" All of the people that are part of this team. ")])),content:s(()=>[o("div",ve,[(a(!0),l(T,null,R(m.team.users,t=>(a(),l("div",{key:t.id,class:"flex items-center justify-between"},[o("div",fe,[o("img",{class:"w-8 h-8 rounded-full object-cover",src:t.profile_photo_url,alt:t.name},null,8,ge),o("div",be,b(t.name),1)]),o("div",ye,[m.userPermissions.canUpdateTeamMembers&&m.availableRoles.length?(a(),l("button",{key:0,class:"ms-2 text-sm text-gray-400 underline",onClick:g=>E(t)},b(j(t.membership.role)),9,ke)):m.availableRoles.length?(a(),l("div",pe,b(j(t.membership.role)),1)):c("",!0),u.$page.props.auth.user.id===t.id?(a(),l("button",{key:2,class:"cursor-pointer ms-6 text-sm text-red-500",onClick:U}," Leave ")):m.userPermissions.canRemoveTeamMembers?(a(),l("button",{key:3,class:"cursor-pointer ms-6 text-sm text-red-500",onClick:g=>Q(t)}," Remove ",8,xe)):c("",!0)])]))),128))])]),_:1})])):c("",!0),n(W,{show:p.value,onClose:e[2]||(e[2]=t=>p.value=!1)},{title:s(()=>e[17]||(e[17]=[i(" Manage Role ")])),content:s(()=>[_.value?(a(),l("div",we,[o("div",Ce,[(a(!0),l(T,null,R(m.availableRoles,(t,g)=>(a(),l("button",{key:t.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600",{"border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none":g>0,"rounded-b-none":g!==Object.keys(m.availableRoles).length-1}]),onClick:G=>r(f).role=t.key},[o("div",{class:v({"opacity-50":r(f).role&&r(f).role!==t.key})},[o("div",Re,[o("div",{class:v(["text-sm text-gray-600 dark:text-gray-400",{"font-semibold":r(f).role===t.key}])},b(t.name),3),r(f).role==t.key?(a(),l("svg",Me,e[18]||(e[18]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):c("",!0)]),o("div",$e,b(t.description),1)],2)],10,Te))),128))])])):c("",!0)]),footer:s(()=>[n(h,{onClick:e[1]||(e[1]=t=>p.value=!1)},{default:s(()=>e[19]||(e[19]=[i(" Cancel ")])),_:1}),n(z,{class:v(["ms-3",{"opacity-25":r(f).processing}]),disabled:r(f).processing,onClick:I},{default:s(()=>e[20]||(e[20]=[i(" Save ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),n(B,{show:x.value,onClose:e[4]||(e[4]=t=>x.value=!1)},{title:s(()=>e[21]||(e[21]=[i(" Leave Team ")])),content:s(()=>e[22]||(e[22]=[i(" Are you sure you would like to leave this team? ")])),footer:s(()=>[n(h,{onClick:e[3]||(e[3]=t=>x.value=!1)},{default:s(()=>e[23]||(e[23]=[i(" Cancel ")])),_:1}),n(F,{class:v(["ms-3",{"opacity-25":r(M).processing}]),disabled:r(M).processing,onClick:D},{default:s(()=>e[24]||(e[24]=[i(" Leave ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),n(B,{show:y.value,onClose:e[6]||(e[6]=t=>y.value=null)},{title:s(()=>e[25]||(e[25]=[i(" Remove Team Member ")])),content:s(()=>e[26]||(e[26]=[i(" Are you sure you would like to remove this person from the team? ")])),footer:s(()=>[n(h,{onClick:e[5]||(e[5]=t=>y.value=null)},{default:s(()=>e[27]||(e[27]=[i(" Cancel ")])),_:1}),n(F,{class:v(["ms-3",{"opacity-25":r($).processing}]),disabled:r($).processing,onClick:q},{default:s(()=>e[28]||(e[28]=[i(" Remove ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ie as default};
