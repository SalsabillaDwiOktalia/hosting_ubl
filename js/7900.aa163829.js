"use strict";(globalThis["webpackChunksik_ubl"]=globalThis["webpackChunksik_ubl"]||[]).push([[7900],{7900:(t,a,o)=>{o.r(a),o.d(a,{default:()=>$});var l=o(9835);const e={class:"row items-center justify-end"};function r(t,a,o,r,n,s){const i=(0,l.up)("q-card-section"),u=(0,l.up)("q-btn"),m=(0,l.up)("q-input"),d=(0,l.up)("q-date"),k=(0,l.up)("q-popup-proxy"),p=(0,l.up)("q-icon"),h=(0,l.up)("q-form"),_=(0,l.up)("q-card"),f=(0,l.up)("q-page"),c=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(f,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Perpanjang Kontrak ")])),_:1}),(0,l.Wm)(u,{class:"q-ml-md",icon:"arrow_back",unelevated:"",color:"primary",to:{name:"kontrakAdmin"}}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,{onSubmit:s.onSubmit},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{label:"Nomor SK",modelValue:n.form.no_sk,"onUpdate:modelValue":a[0]||(a[0]=t=>n.form.no_sk=t)},null,8,["modelValue"]),(0,l.Wm)(m,{label:"Tanggal Kontrak",modelValue:n.form.tgl_kontrak,"onUpdate:modelValue":a[3]||(a[3]=t=>n.form.tgl_kontrak=t),onClick:a[4]||(a[4]=a=>t.$refs.tglkontrak.show()),mask:"date",rules:["date"]},{append:(0,l.w5)((()=>[(0,l.Wm)(p,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{cover:"","transition-show":"scale",ref:"tglkontrak","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:n.form.tgl_kontrak,"onUpdate:modelValue":[a[1]||(a[1]=t=>n.form.tgl_kontrak=t),a[2]||(a[2]=a=>{t.$refs.tglkontrak.hide(),s.hitungHabis()})]},{default:(0,l.w5)((()=>[(0,l._)("div",e,[(0,l.wy)((0,l.Wm)(u,{label:"Close",color:"primary",flat:""},null,512),[[c]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(m,{label:"Habis Kontrak",readonly:"",modelValue:n.form.tgl_habis_kontrak,"onUpdate:modelValue":a[5]||(a[5]=t=>n.form.tgl_habis_kontrak=t)},null,8,["modelValue"]),(0,l.Wm)(u,{label:"Submit Data",color:"primary",unelevated:"",type:"submit"})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})}const n=()=>({id_karyawan:null,id_kontrak:null,no_sk:null,tgl_kontrak:null,tgl_habis_kontrak:null}),s={data(){return{form:n(),status:null,listStatus:[],listKategori:[],kategori:null}},methods:{history(){this.form.id_karyawan=this.$route.params.id,this.form.id_kontrak=this.$route.params.id_kontrak,this.$axios.post("/kontrak/history",this.form).finally((()=>this.$hide())).then((t=>{console.log("Berhasil")}))},onSubmit(){this.$showLoading(),this.form.id_karyawan=this.$route.params.id,this.form.id_kontrak=this.$route.params.id_kontrak,this.$axios.post("/kontrak/perpanjang",this.form).finally((()=>this.$hide())).then((t=>{this.$parseResponse(t.data)&&(this.history(),this.$router.back())}))},hitungHabis(){const t=new Date(this.form.tgl_kontrak);this.form.tgl_habis_kontrak=`${t.getFullYear()+2}/${t.getMonth()+1}/${t.getDate()}`}}};var i=o(1639),u=o(9885),m=o(4458),d=o(3190),k=o(4455),p=o(8326),h=o(3119),_=o(2857),f=o(2765),c=o(4939),g=o(2146),b=o(9984),w=o.n(b);const y=(0,i.Z)(s,[["render",r]]),$=y;w()(s,"components",{QPage:u.Z,QCard:m.Z,QCardSection:d.Z,QBtn:k.Z,QForm:p.Z,QInput:h.Z,QIcon:_.Z,QPopupProxy:f.Z,QDate:c.Z}),w()(s,"directives",{ClosePopup:g.Z})}}]);