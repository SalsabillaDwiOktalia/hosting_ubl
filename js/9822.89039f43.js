"use strict";(globalThis["webpackChunksik_ubl"]=globalThis["webpackChunksik_ubl"]||[]).push([[9822],{6651:(a,t,l)=>{l.d(t,{Z:()=>i});var e=l(6646),n=l(9283);function i(a,t){const l=(0,e.Z)(a,t,"text/csv");l||(0,n.notif)("Gagal Export","negative")}},6887:(a,t,l)=>{l.d(t,{Z:()=>e});l(9665);const e=()=>{const a=(new Date).getFullYear(),t=Number(a)-1,l=Number(a)+5,e=[];for(let n=t;n<l;n++)e.push(n);return e}},9822:(a,t,l)=>{l.r(t),l.d(t,{default:()=>Z});var e=l(9835),n=l(6970);const i={class:"row q-col-gutter-x-md"},o={class:"col-6"},s={class:"col-6"};function u(a,t,l,u,r,d){const p=(0,e.up)("q-select"),m=(0,e.up)("q-card-section"),w=(0,e.up)("q-card"),c=(0,e.up)("q-btn"),h=(0,e.up)("q-td"),k=(0,e.up)("q-tr"),b=(0,e.up)("q-table"),g=(0,e.up)("q-page");return(0,e.wg)(),(0,e.j4)(g,{padding:""},{default:(0,e.w5)((()=>[(0,e.Wm)(w,{class:"q-mb-md",flat:""},{default:(0,e.w5)((()=>[(0,e.Wm)(m,null,{default:(0,e.w5)((()=>[(0,e._)("div",i,[(0,e._)("div",o,[(0,e.Wm)(p,{options:r.listBulan,modelValue:r.bulan,"onUpdate:modelValue":[t[0]||(t[0]=a=>r.bulan=a),d.getData],"option-label":"nama_bulan","option-value":"id_bulan",label:"Pilih Bulan",outlined:""},null,8,["options","modelValue","onUpdate:modelValue"])]),(0,e._)("div",s,[(0,e.Wm)(p,{options:r.GenerateYear(),modelValue:r.tahun,"onUpdate:modelValue":[t[1]||(t[1]=a=>r.tahun=a),d.getData],label:"Pilih Tahun",outlined:""},null,8,["options","modelValue","onUpdate:modelValue"])])])])),_:1})])),_:1}),(0,e.Wm)(w,{flat:""},{default:(0,e.w5)((()=>[(0,e.Wm)(m,null,{default:(0,e.w5)((()=>[(0,e.Wm)(b,{flat:"",title:"Hasil Penilaian",rows:r.rows,columns:r.columns,loading:r.loading,"row-key":"name"},{"top-right":(0,e.w5)((()=>[(0,e.Wm)(c,{label:"Export Data",color:"primary",outline:"",icon:"download",onClick:t[2]||(t[2]=a=>d.exportData())})])),body:(0,e.w5)((a=>[(0,e.Wm)(k,{props:a},{default:(0,e.w5)((()=>[(0,e.Wm)(h,{key:"id_karyawan",props:a},{default:(0,e.w5)((()=>[(0,e.Uk)((0,n.zw)(a.row.karyawan.nama_karyawan),1)])),_:2},1032,["props"]),(0,e.Wm)(h,{key:"poin",props:a},{default:(0,e.w5)((()=>[(0,e.Uk)((0,n.zw)(a.row.totalSkor),1)])),_:2},1032,["props"]),(0,e.Wm)(h,{key:"rekomendasi",props:a},{default:(0,e.w5)((()=>[(0,e.Uk)((0,n.zw)(a.row.rekomendasi),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading"])])),_:1})])),_:1})])),_:1})}var r=l(6887),d=l(6651);const p={data(){return{GenerateYear:r.Z,columns:[{name:"id_karyawan",align:"left",label:"Nama Karyawan",field:"id_karyawan"},{name:"poin",align:"left",label:"Poin (Skor Akhir)",field:"poin"},{name:"rekomendasi",align:"left",label:"Predikat",field:"rekomendasi"}],rows:[],filter:null,loading:!1,bulan:null,tahun:(new Date).getFullYear(),listBulan:null}},async created(){await this.getBulan(),this.getData()},methods:{async getBulan(){await this.$axios.get("bulan").then((a=>{this.$parseResponse(a.data,!1)&&(this.listBulan=a.data.data,this.bulan=this.listBulan.find((a=>a.id_bulan===(new Date).getMonth()+1)))}))},getData(){this.loading=!0,this.$axios.post(`kepala-biro/get-penilaian-karyawan/${this.$route.params.idJabatanActive}`,{bulan:this.bulan,tahun:this.tahun}).then((a=>{this.$parseResponse(a.data,!1)&&(this.rows=a.data.data,this.loading=!1)}))},exportData(){const a=["Nama Karyawan;Nilai Ketepatan Tugas;Nilai Inisiatif;Nilai Evaluasi Diri;Nilai Pemahaman Tugas;Skor Akhir;Predikat"].concat(this.rows.map((a=>`${a.karyawan.nama_karyawan};${a.ketepatan_tugas};${a.nilai_inisiatif};${a.evaluasi_diri};${a.total_nilai_pemaham_tugas};${a.totalSkor};${a.rekomendasi}`))).join("\r\n");(0,d.Z)(`data-penilaian-${this.bulan.nama_bulan}-${this.tahun}.csv`,a)}}};var m=l(1639),w=l(9885),c=l(4458),h=l(3190),k=l(6384),b=l(7580),g=l(4455),_=l(3532),f=l(7220),y=l(9984),$=l.n(y);const v=(0,m.Z)(p,[["render",u]]),Z=v;$()(p,"components",{QPage:w.Z,QCard:c.Z,QCardSection:h.Z,QSelect:k.Z,QTable:b.Z,QBtn:g.Z,QTr:_.Z,QTd:f.Z})}}]);