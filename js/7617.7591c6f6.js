"use strict";(globalThis["webpackChunksik_ubl"]=globalThis["webpackChunksik_ubl"]||[]).push([[7617],{7617:(a,e,t)=>{t.r(e),t.d(e,{default:()=>f});var l=t(9835);function n(a,e,t,n,u,o){const m=(0,l.up)("q-card-section"),r=(0,l.up)("q-btn"),s=(0,l.up)("q-input"),d=(0,l.up)("q-form"),i=(0,l.up)("q-card"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Input Pimpinan Unit ")])),_:1}),(0,l.Wm)(r,{class:"q-ml-md",icon:"arrow_back",unelevated:"",color:"primary",to:{name:"statusAdmin"}}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{onSubmit:o.onSubmit},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{label:"Nama Status",modelValue:u.form.nama_status,"onUpdate:modelValue":e[0]||(e[0]=a=>u.form.nama_status=a)},null,8,["modelValue"]),(0,l.Wm)(s,{label:"Gaji Pokok",modelValue:u.form.gaji_pokok,"onUpdate:modelValue":e[1]||(e[1]=a=>u.form.gaji_pokok=a)},null,8,["modelValue"]),(0,l.Wm)(s,{label:"Keterangan",modelValue:u.form.keterangan,"onUpdate:modelValue":e[2]||(e[2]=a=>u.form.keterangan=a)},null,8,["modelValue"]),(0,l.Wm)(r,{label:"Submit Status",color:"primary",unelevated:"",type:"submit"})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})}const u={data(){return{form:{nama_status:null,gaji_pokok:null,keterangan:null}}},methods:{onSubmit(){this.$axios.post("/status/create",this.form).then((a=>{this.$parseResponse(a.data)&&this.$router.back()}))}}};var o=t(1639),m=t(9885),r=t(4458),s=t(3190),d=t(4455),i=t(8326),p=t(3119),k=t(9984),b=t.n(k);const c=(0,o.Z)(u,[["render",n]]),f=c;b()(u,"components",{QPage:m.Z,QCard:r.Z,QCardSection:s.Z,QBtn:d.Z,QForm:i.Z,QInput:p.Z})}}]);