"use strict";(globalThis["webpackChunksik_ubl"]=globalThis["webpackChunksik_ubl"]||[]).push([[8705],{8705:(a,t,e)=>{e.r(t),e.d(t,{default:()=>m});var n=e(9835),o=e(6970);function r(a,t,e,r,l,k){const s=(0,n.up)("q-td"),i=(0,n.up)("q-badge"),d=(0,n.up)("q-tr"),p=(0,n.up)("q-table"),w=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(w,{padding:""},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"q-mt-md",flat:"",bordered:"",title:"Riwayat Kontrak",rows:l.rows,columns:l.columns,loading:l.loading,"row-key":"name"},{body:(0,n.w5)((a=>[(0,n.Wm)(d,{props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{key:"id_kontrak",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.row.id_kontrak),1)])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"id_karyawan",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(this.namaKaryawan.nama_karyawan),1)])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"namaKategori",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(this.namaKategori),1)])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"no_sk",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.row.no_sk),1)])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"tgl_kontrak",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(this.$parseDate(a.row.tgl_kontrak).dateLocal),1)])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"tgl_habis_kontrak",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(this.$parseDate(a.row.tgl_habis_kontrak).dateLocal),1)])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"jenis_kontrak",props:a},{default:(0,n.w5)((()=>[1===a.row.jenis_kontrak?((0,n.wg)(),(0,n.j4)(i,{key:0,color:"positive"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Kontrak Baru ")])),_:1})):2===a.row.jenis_kontrak?((0,n.wg)(),(0,n.j4)(i,{key:1,color:"positive"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Kontrak Perpanjang ")])),_:1})):3===a.row.jenis_kontrak?((0,n.wg)(),(0,n.j4)(i,{key:2,color:"negative"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Kontrak Pensiun ")])),_:1})):(0,n.kq)("",!0)])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"status",props:a},{default:(0,n.w5)((()=>[1===a.row.status?((0,n.wg)(),(0,n.j4)(i,{key:0,color:"positive"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Aktif ")])),_:1})):((0,n.wg)(),(0,n.j4)(i,{key:1,color:"negative"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Tidak Aktif ")])),_:1}))])),_:2},1032,["props"]),(0,n.Wm)(s,{key:"ket_kontrak",props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.row.ket_kontrak),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading"])])),_:1})}const l={data(){return{dataKaryawan:null,columns:[{name:"id_kontrak",align:"left",label:"ID Kontrak",field:"id_kontrak"},{name:"id_karyawan",align:"left",label:"Nama Karyawan",field:"id_karyawan"},{name:"namaKategori",align:"left",label:"Kategori",field:"namaKategori"},{name:"no_sk",align:"left",label:"No. SK",field:"no_sk"},{name:"tgl_kontrak",align:"left",label:"Tanggal Kontrak",field:"tgl_kontrak"},{name:"tgl_habis_kontrak",align:"left",label:"Habis Kontrak",field:"tgl_habis_kontrak"},{name:"jenis_kontrak",align:"left",label:"Jenis Kontrak",field:"jenis_kontrak"},{name:"status",align:"left",label:"Status",field:"status"},{name:"ket_kontrak",align:"left",label:"Keterangan",field:"ket_kontrak"}],rows:[],namaKaryawan:[],filter:null,kategori_:null,namaKategori:null,loading:!1}},created(){this.getDetail(),this.getNama()},methods:{getDetail(){this.$axios.get(`/kontrak/get/${this.$route.params.id}`).finally((()=>this.$hide())).then((a=>{this.$parseResponse(a.data,!1)&&(this.rows=a.data.data)}))},getNama(){this.$axios.get(`/karyawan/get/${this.$route.params.id}`).finally((()=>this.$hide())).then((a=>{this.$parseResponse(a.data,!1)&&(this.namaKaryawan=a.data.data)}))}}};var k=e(1639),s=e(9885),i=e(7580),d=e(3532),p=e(7220),w=e(990),g=e(9984),_=e.n(g);const u=(0,k.Z)(l,[["render",r]]),m=u;_()(l,"components",{QPage:s.Z,QTable:i.Z,QTr:d.Z,QTd:p.Z,QBadge:w.Z})}}]);