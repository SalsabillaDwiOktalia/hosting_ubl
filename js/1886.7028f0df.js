"use strict";(globalThis["webpackChunksik_ubl"]=globalThis["webpackChunksik_ubl"]||[]).push([[1886],{1886:(a,t,e)=>{e.r(t),e.d(t,{default:()=>f});var n=e(9835),l=e(6970);function s(a,t,e,s,r,i){const o=(0,n.up)("q-td"),p=(0,n.up)("q-tr"),u=(0,n.up)("q-table"),d=(0,n.up)("q-card-section"),m=(0,n.up)("q-card"),w=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(w,{padding:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{flat:"",class:"q-mt-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{flat:"",title:"Laporan Penilaian Karyawan",rows:a.pemberitahuan,columns:r.column,class:"my-table"},{body:(0,n.w5)((a=>[(0,n.Wm)(p,{props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{key:"kegiatan",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(a.row.masterbkd.kegiatan),1)])),_:2},1032,["props"]),(0,n.Wm)(o,{key:"buktiKegiatan",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(a.row.masterbkd.buktiKegiatan),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1})])),_:1})])),_:1})}const r={data(){return{step:1,column:[{name:"id_karyawan",align:"left",label:"Nama Karyawan",field:"id_karyawan "},{name:"poin",align:"left",label:"Total Poin",field:"poin "}]}},methods:{onSubmit(){this.$axios.post(`bkd/nilai/${this.$route.params.id}`,{}).then((a=>{this.$parseResponse(a.data)}))}}};var i=e(1639),o=e(9885),p=e(4458),u=e(3190),d=e(7580),m=e(3532),w=e(7220),b=e(9984),k=e.n(b);const c=(0,i.Z)(r,[["render",s]]),f=c;k()(r,"components",{QPage:o.Z,QCard:p.Z,QCardSection:u.Z,QTable:d.Z,QTr:m.Z,QTd:w.Z})}}]);