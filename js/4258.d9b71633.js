"use strict";(globalThis["webpackChunksik_ubl"]=globalThis["webpackChunksik_ubl"]||[]).push([[4258],{4258:(a,e,t)=>{t.r(e),t.d(e,{default:()=>W});var n=t(9835),o=t(6970);const l={class:"justify-center q-gsssutter-x-xs"},r={class:"justify-center q-gutter-x-xs"};function i(a,e,t,i,k,s){const p=(0,n.up)("q-icon"),d=(0,n.up)("q-input"),u=(0,n.up)("q-td"),w=(0,n.up)("q-badge"),_=(0,n.up)("q-btn"),g=(0,n.up)("q-tr"),f=(0,n.up)("q-table"),m=(0,n.up)("q-card-section"),b=(0,n.up)("q-card"),c=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(c,{padding:""},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{flat:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{flat:"",title:"Kontrak Kerja",rows:k.rows,columns:k.columns,loading:a.loading,filter:k.filter,"row-key":"name"},{"top-right":(0,n.w5)((()=>[(0,n.Wm)(d,{borderless:"",dense:"",debounce:"300",modelValue:k.filter,"onUpdate:modelValue":e[0]||(e[0]=a=>k.filter=a),placeholder:"Search"},{append:(0,n.w5)((()=>[(0,n.Wm)(p,{name:"search"})])),_:1},8,["modelValue"])])),body:(0,n.w5)((e=>[(0,n.Wm)(g,{props:e},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{key:"no_sk",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.row.no_sk),1)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"id_kontrak",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.row.id_kontrak),1)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"id_karyawan",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.row.karyawan.nama_karyawan),1)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"habis",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(new Date(e.row.tgl_habis_kontrak)<=new Date?"Expired":"Berlaku"),1)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"tgl_kontrak",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.$parseDate(e.row.tgl_kontrak).fullDate),1)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"tgl_habis_kontrak",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.$parseDate(e.row.tgl_habis_kontrak).fullDate),1)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"jenis_kontrak",props:e},{default:(0,n.w5)((()=>[1===e.row.jenis_kontrak?((0,n.wg)(),(0,n.j4)(w,{key:0,color:"positive"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Kontrak Baru ")])),_:1})):2===e.row.jenis_kontrak?((0,n.wg)(),(0,n.j4)(w,{key:1,color:"positive"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Kontrak Perpanjang ")])),_:1})):3===e.row.jenis_kontrak?((0,n.wg)(),(0,n.j4)(w,{key:2,color:"negative"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Kontrak Pensiun ")])),_:1})):(0,n.kq)("",!0)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"pensiun",props:e},{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n.Wm)(_,{disable:3===e.row.jenis_kontrak,to:{name:"perpanjangKontrak",params:{id:e.row.id_karyawan,id_kontrak:e.row.id_kontrak}},color:"primary",label:"Perpanjang Kontrak",unelevated:"",outline:"",dense:""},null,8,["disable","to"]),(0,n.Wm)(_,{disable:3===e.row.jenis_kontrak,to:{name:"PensiunKontrak",params:{id:e.row.id_karyawan,id_kontrak:e.row.id_kontrak,tgl:a.$parseDate(e.row.tgl_kontrak).dateLocal}},color:"primary",label:"Pensiun",unelevated:"",outline:"",dense:""},null,8,["disable","to"])])])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"status",props:e},{default:(0,n.w5)((()=>[1===e.row.status?((0,n.wg)(),(0,n.j4)(w,{key:0,color:"positive"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Aktif ")])),_:1})):((0,n.wg)(),(0,n.j4)(w,{key:1,color:"negative"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Tidak Aktif ")])),_:1}))])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"gaji_pokok",props:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.$formatNumber(e.row.karyawan.gaji_pokok)),1)])),_:2},1032,["props"]),(0,n.Wm)(u,{key:"aksi",props:e},{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(_,{label:"Detail",unelevated:"",icon:"info",color:"primary",to:{name:"datakontrakDetail",params:{id:e.row.id_karyawan}}},null,8,["to"])])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading","filter"])])),_:1})])),_:1})])),_:1})}const k={data(){return{columns:[{name:"no_sk",align:"left",label:"No. SK",field:"no_sk"},{name:"id_kontrak",align:"left",label:" ID Kontrak",field:"id_kontrak"},{name:"id_karyawan",align:"left",label:"Nama Karyawan",field:"id_karyawan"},{name:"habis",align:"left",label:"Masa",field:"habis"},{name:"tgl_kontrak",align:"left",label:"Tanggal Kontrak",field:"tgl_kontrak"},{name:"tgl_habis_kontrak",align:"left",label:"Habis Kontrak",field:"tgl_habis_kontrak"},{name:"jenis_kontrak",align:"left",label:"Jenis Kontrak",field:"jenis_kontrak"},{name:"pensiun",align:"left",label:"Pensiun",field:"pensiun"},{name:"status",align:"left",label:"Status Kontrak",field:"status"},{name:"gaji_pokok",align:"left",label:"Gaji Pokok",field:"gaji_pokok"},{name:"aksi",align:"left",label:"Aksi",field:"aksi"}],rows:[],filter:null}},created(){this.getData()},methods:{getData(){this.loading=!0,this.$axios.get("/kontrak/get").then((a=>{this.$parseResponse(a.data,!1)&&(this.rows=a.data.data,this.loading=!1)}))},hapus(a){this.$q.dialog({title:"konfirmasi",message:"apakah kamu yakin menghapus ",cancel:!0,persistent:!0}).onOk((()=>{console.log(a)}))}}};var s=t(1639),p=t(9885),d=t(4458),u=t(3190),w=t(7580),_=t(3119),g=t(2857),f=t(4455),m=t(3532),b=t(7220),c=t(990),y=t(9984),h=t.n(y);const j=(0,s.Z)(k,[["render",i]]),W=j;h()(k,"components",{QPage:p.Z,QCard:d.Z,QCardSection:u.Z,QTable:w.Z,QInput:_.Z,QIcon:g.Z,QBtn:f.Z,QTr:m.Z,QTd:b.Z,QBadge:c.Z})}}]);