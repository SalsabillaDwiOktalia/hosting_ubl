"use strict";(globalThis["webpackChunksik_ubl"]=globalThis["webpackChunksik_ubl"]||[]).push([[3028],{3028:(a,t,n)=>{n.r(t),n.d(t,{default:()=>K});var e=n(9835);const o={class:"row items-center justify-end"};function l(a,t,n,l,r,s){const u=(0,e.up)("q-card-section"),i=(0,e.up)("q-btn"),k=(0,e.up)("q-input"),m=(0,e.up)("q-date"),g=(0,e.up)("q-popup-proxy"),d=(0,e.up)("q-icon"),h=(0,e.up)("q-select"),p=(0,e.up)("q-form"),_=(0,e.up)("q-card"),f=(0,e.up)("q-page"),b=(0,e.Q2)("close-popup");return(0,e.wg)(),(0,e.j4)(f,{padding:""},{default:(0,e.w5)((()=>[(0,e.Wm)(_,{flat:""},{default:(0,e.w5)((()=>[(0,e.Wm)(u,null,{default:(0,e.w5)((()=>[(0,e.Uk)(" Input Pensiun ")])),_:1}),(0,e.Wm)(i,{class:"q-ml-md",icon:"arrow_back",unelevated:"",color:"primary",to:{name:"kontrakAdmin"}}),(0,e.Wm)(u,null,{default:(0,e.w5)((()=>[(0,e.Wm)(p,{onSubmit:s.onSubmit},{default:(0,e.w5)((()=>[(0,e.Wm)(k,{label:"Nomor SK",modelValue:r.form.no_sk,"onUpdate:modelValue":t[0]||(t[0]=a=>r.form.no_sk=a)},null,8,["modelValue"]),r.dataKaryawan?((0,e.wg)(),(0,e.j4)(k,{key:0,label:"Mulai Kerja",readonly:"",modelValue:r.tglMasuk,"onUpdate:modelValue":t[1]||(t[1]=a=>r.tglMasuk=a),onClick:t[2]||(t[2]=t=>a.$refs.tanggalMasukKerja.show())},null,8,["modelValue"])):(0,e.kq)("",!0),(0,e.Wm)(k,{label:"Tanggal Kontrak",modelValue:r.form.tgl_kontrak,"onUpdate:modelValue":t[5]||(t[5]=a=>r.form.tgl_kontrak=a),onClick:t[6]||(t[6]=t=>a.$refs.tglkontrak.show()),mask:"date",rules:["date"]},{append:(0,e.w5)((()=>[(0,e.Wm)(d,{name:"event",class:"cursor-pointer"},{default:(0,e.w5)((()=>[(0,e.Wm)(g,{cover:"","transition-show":"scale",ref:"tglkontrak","transition-hide":"scale"},{default:(0,e.w5)((()=>[(0,e.Wm)(m,{modelValue:r.form.tgl_kontrak,"onUpdate:modelValue":[t[3]||(t[3]=a=>r.form.tgl_kontrak=a),t[4]||(t[4]=t=>{a.$refs.tglkontrak.hide(),s.hitungHabis()})]},{default:(0,e.w5)((()=>[(0,e._)("div",o,[(0,e.wy)((0,e.Wm)(i,{label:"Close",color:"primary",flat:""},null,512),[[b]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"]),(0,e.Wm)(k,{label:"Habis Kontrak",readonly:"",modelValue:r.form.tgl_habis_kontrak,"onUpdate:modelValue":t[7]||(t[7]=a=>r.form.tgl_habis_kontrak=a)},null,8,["modelValue"]),(0,e.Wm)(h,{label:"Keterangan Pensiun",modelValue:r.form.ket_kontrak,"onUpdate:modelValue":[t[8]||(t[8]=a=>r.form.ket_kontrak=a),t[9]||(t[9]=a=>s.hitungPesangon())],options:["Pensiun","Mengundarkan Diri","Habis Kontrak"]},null,8,["modelValue"]),(0,e.Wm)(k,{label:"Uang Pesangon",modelValue:r.form.uang_pesangon,"onUpdate:modelValue":t[10]||(t[10]=a=>r.form.uang_pesangon=a)},null,8,["modelValue"]),(0,e.Wm)(k,{label:"Uang Penghargaan",modelValue:r.form.uang_penghargaan,"onUpdate:modelValue":t[11]||(t[11]=a=>r.form.uang_penghargaan=a)},null,8,["modelValue"]),(0,e.Wm)(i,{label:"Submit Data",color:"primary",unelevated:"",type:"submit"})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})}const r=()=>({id_karyawan:null,id_kontrak:null,no_sk:null,tgl_kontrak:null,tgl_habis_kontrak:null,ket_kontrak:null,uang_pesangon:0,uang_penghargaan:0}),s={data(){return{form:r(),status:null,listStatus:[],listKategori:[],kategori:null,dataKaryawan:null,tglMasuk:null}},created(){this.getTglMasukKerja()},methods:{getTglMasukKerja(){this.$showLoading(),this.$axios.get(`/karyawan/get/${this.$route.params.id}`).finally((()=>this.$hide())).then((a=>{this.$parseResponse(a.data,!1)&&(this.dataKaryawan=a.data.data,this.tglMasuk=this.$parseDate(a.data.data.tanggal_masuk_kerja).dateLocal)}))},onSubmit(){this.$showLoading(),this.form.id_karyawan=this.$route.params.id,this.form.id_kontrak=this.$route.params.id_kontrak,this.$axios.post("/kontrak/pensiun",this.form).finally((()=>this.$hide())).then((a=>{this.$parseResponse(a.data)&&this.$router.back()}))},hitungHabis(){this.form.tgl_habis_kontrak=this.form.tgl_kontrak},hitungPesangon(){const a=new Date(this.dataKaryawan.tanggal_masuk_kerja),t=new Date(this.form.tgl_kontrak),n=Math.floor((t-a)/315576e5);"Pensiun"===this.form.ket_kontrak||"Habis Kontrak"===this.form.ket_kontrak?(this.hitungPenghargaan(n),this.form.uang_pesangon=n<1?Number(this.dataKaryawan.gaji_pokok):n>=1&&n<=7?Number(this.dataKaryawan.gaji_pokok)*(n+1):9*Number(this.dataKaryawan.gaji_pokok)):"Mengundarkan Diri"===this.form.ket_kontrak?(this.hitungPenghargaan(n),this.form.uang_pesangon=0):(this.form.uang_pesangon=0,this.form.uang_penghargaan=0)},hitungPenghargaan(a){this.form.uang_penghargaan=a<3?0:a>=3&&a<6?2*Number(this.dataKaryawan.gaji_pokok):a>=6&&a<9?3*Number(this.dataKaryawan.gaji_pokok):4*Number(this.dataKaryawan.gaji_pokok)}}};var u=n(1639),i=n(9885),k=n(4458),m=n(3190),g=n(4455),d=n(8326),h=n(3119),p=n(2857),_=n(2765),f=n(4939),b=n(6384),c=n(2146),w=n(9984),y=n.n(w);const V=(0,u.Z)(s,[["render",l]]),K=V;y()(s,"components",{QPage:i.Z,QCard:k.Z,QCardSection:m.Z,QBtn:g.Z,QForm:d.Z,QInput:h.Z,QIcon:p.Z,QPopupProxy:_.Z,QDate:f.Z,QSelect:b.Z}),y()(s,"directives",{ClosePopup:c.Z})}}]);