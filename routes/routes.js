// import express
import express from "express";

// init express router
const router = express.Router();

router.get(
  "/biodata/:nama/:tempat_lahir/:tanggal_lahir/:jenis_kelamin/:agama/:alamat/:telepon/:email/:hobi/:cita_cita/:moto",
  (req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat_lahir;
    var tanggal_lahir = req.params.tanggal_lahir;
    var jenis_kelamin = req.params.jenis_kelamin;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita;
    var moto = req.params.moto;

    res.send(
      "Nama : " +
        nama +
        "<br>" +
        "Tempat Lahir : " +
        tempat_lahir +
        "<br>" +
        "tanggal_lahir : " +
        tanggal_lahir +
        "<br>" +
        "jenis_kelamin : " +
        jenis_kelamin +
        "<br>" +
        "agama : " +
        agama +
        "<br>" +
        "alamat : " +
        alamat +
        "<br>" +
        "telepon : " +
        telepon +
        "<br>" +
        "email : " +
        email +
        "<br>" +
        "hobi : " +
        hobi +
        "<br>" +
        "cita_cita : " +
        cita_cita +
        "<br>" +
        "moto : " +
        moto
    );
  }
);

router.get("/aritmatika", (req, res) => {
  var bilangan1 = 10;
  var bilangan2 = 5;
  var tambah = bilangan1 + bilangan2;

  var kurang1 = 30;
  var kurang2 = 5;
  var kurang = kurang1 - kurang2;

  var kali1 = 45;
  var kali2 = 2;
  var kali = kali1 * kali2;

  var bagi1 = 20;
  var bagi2 = 5;
  var bagi = bagi1 / bagi2;

  res.send(
    "<h3>Penjumlahan</h3>" +
      "bilangan ke 1 = " +
      bilangan1 +
      "<br>" +
      "bilangan ke 2 = " +
      bilangan2 +
      "<br>" +
      "hasil = " +
      tambah +
      "<hr>" +
      "<h3>Pengurangan</h3>" +
      "bilangan ke 1 = " +
      kurang1 +
      "<br>" +
      "bilangan ke 2 = " +
      kurang2 +
      "<br>" +
      "hasil = " +
      kurang +
      "<hr>" +
      "<h3>Perkalian</h3>" +
      "bilangan ke 1 = " +
      kali1 +
      "<br>" +
      "bilangan ke 2 = " +
      kali2 +
      "<br>" +
      "hasil = " +
      kali +
      "<hr>" +
      "<h3>Pembagian</h3>" +
      "bilangan ke 1 = " +
      bagi1 +
      "<br>" +
      "bilangan ke 2 = " +
      bagi2 +
      "<br>" +
      "hasil = " +
      bagi +
      "<hr>"
  );
});

router.get("/bangun_datar", (req, res) => {
  var sisi = 5;
  var luas = 25;
  var hasil = sisi * sisi;

  var panjang = 10;
  var lebar = 5;
  var persegipanjang = panjang * lebar;

  var alas = 25;
  var tinggi = 10;
  var jumlah = (alas * tinggi) / 2;

  var v = 3.14;
  var r = 15;
  var lingkaran = v * r * r;

  res.send(
    "<h3>Luas Persegi</h3>" +
      "sisi = " +
      sisi +
      "<br>" +
      "Luasnya = " +
      hasil +
      "<hr>" +
      "<h3>Luas Persegi Panjang</h3>" +
      "panjang = " +
      panjang +
      "<br>" +
      "lebar = " +
      lebar +
      "<br>" +
      "Luasnya = " +
      persegipanjang +
      "<hr>" +
      "<h3>Luas Segitiga</h3>" +
      "alas = " +
      alas +
      "<br>" +
      "tinggi = " +
      tinggi +
      "<br>" +
      "Luasnya = " +
      jumlah +
      "<hr>" +
      "<h3>Luas Lingkaran</h3>" +
      "v = " +
      v +
      "<br>" +
      "jari-jari = " +
      r +
      "<br>" +
      "Luasnya = " +
      lingkaran +
      "<hr>"
  );
});

router.get("/tes/:nama/:kelas/:pts/:pas", (req, res) => {
  var nama = req.params.nama;
  var kelas = req.params.kelas;
  var pts = parseInt(req.params.pts);
  var pas = parseInt(req.params.pas);

  var rapot = (pts + pas) / 2;

  let keterangan;
  if (rapot >= 90) {
    keterangan = "Grade A";
  } else if (rapot >= 80) {
    keterangan = "Grade B";
  } else if (rapot >= 70) {
    keterangan = "Grade C";
  } else if (rapot >= 60) {
    keterangan = "Grade D";
  } else if (rapot >= 50) {
    keterangan = "Grade E";
  } else {
    keterangan = "Minimal Belajar";
  }

  res.send(
    "nama : " +
      nama +
      "<br>" +
      "kelas : " +
      kelas +
      "<br>" +
      "nilai pts : " +
      pts +
      "<br>" +
      "nilai pas : " +
      pas +
      "<br>" +
      "nilai rapot : " +
      rapot +
      "<br>" +
      "keterangan :" +
      keterangan
  );
});

router.get("/bersarang/:nama/:provinsi/:kota", (req, res) => {
  var nama = req.params.nama;
  var provinsi = req.params.provinsi;
  var kota = req.params.kota;

  if (provinsi == "Jawa Barat") {
    if (kota == "Bandung") {
      var ket = "Anda asli orang Bandung";
    } else if (kota == "Garut") {
      var ket = "Anda asli orang Garut";
    } else if (kota == "Cimahi") {
      var ket = "Anda asli orang Cimahi";
    } else {
      var ket = "Anda bukan orang Jawa Barat!!!";
    }
  } else if (provinsi == "Jawa Tengah") {
    if (kota == "Semarang") {
      var ket = "Anda asli orang Semarang";
    } else if (kota == "Cilacap") {
      var ket = "Anda asli orang Cilacap";
    } else if (kota == "Solo") {
      var ket = "Anda asli orang Solo";
    } else {
      var ket = "Anda bukan orang Jawa Tengah!!!";
    }
  } else if (provinsi == "Jawa Timur") {
    if (kota == "surabaya") {
      var ket = "Anda asli orang Surabaya";
    } else if (kota == "malang") {
      var ket = "Anda asli orang malang";
    } else if (kota == "malang") {
      var ket = "Anda asli orang madura";
    } else {
      var ket = "Anda bukan orang Jawa Timur!!!";
    }
  }

  res.send(
    "nama = " +
      nama +
      "<br>" +
      "provinsi = " +
      provinsi +
      "<br>" +
      "kota = " +
      kota +
      "<br>" +
      "Keterangan = " +
      ket +
      "<br>"
  );
});

router.get("/kasir/:nama/:tanggal/:jenis/:pesan/:jumlah", (req, res) => {
  var nama = req.params.nama;
  var tanggal = req.params.tanggal;
  var jenis = req.params.jenis;
  var pesan = req.params.pesan;
  var harga;
  var jumlah = parseInt(req.params.jumlah);

  if (jenis == "Makanan") {
    if (pesan == "Seblak") {
      harga = "25000";
    } else if (pesan == "Spageti") {
      harga = "30000";
    } else if (pesan == "Burger") {
      harga = "35000";
    } else {
      pesan = "-";
    }
  } else if (jenis == "Minuman") {
    if (pesan == "Air Mineral") {
      harga = "10000";
    } else if (pesan == "Lemon Tea") {
      harga = "20000";
    } else if (pesan == "Kopi") {
      harga = "30000";
    } else {
      pesan = "-";
    }
  } else {
    jenis = "-";
  }

  var total = harga * jumlah;
  var diskon, bayar;

  if (total > 100000) {
    diskon = total * 0.2;
    bayar = total - diskon;
  } else {
    diskon = 0;
    bayar = total;
  }

  res.send(
    "<h3>Waroeng's Enjoy's</h3>" +
      "<hr>" +
      "Nama : " +
      nama +
      "<br>" +
      "Tanggal : " +
      tanggal +
      "<br>" +
      "Jenis : " +
      jenis +
      "<br>" +
      "Nama Pesanan : " +
      pesan +
      "<br>" +
      "Harga : " +
      harga +
      "<br>" +
      "Jumlah : " +
      jumlah +
      "<br>" +
      "<hr>" +
      "Total : " +
      total +
      "<br>" +
      "Potong (20%) : " +
      diskon +
      "<br>" +
      "Total Pembayaran : " +
      bayar +
      "<br>" +
      "=========================Terima Kasih======================="
  );
});

// app.get("/soal1/:nama/:tanggalpembelian/:pesanan/:menu/:jumlah", (req, res) => {
//   const nama = req.params.nama;
//   const tanggal = req.params.tanggalpembelian;
//   const pesanan = req.params.pesanan;
//   const menu = req.params.menu;
//   const jumlah = req.params.jumlah;
//   let harga;
//   let totalBayar;
//   let diskon;

//   if (pesanan == "Makanan") {
//     if (menu == "Seblak") {
//       harga = 25000;
//     } else if (menu == "Spageti") {
//       harga = 30000;
//     } else if (menu == "Burger") {
//       harga = 35000;
//     }
//   } else if (pesanan == "Minuman") {
//     if (menu == "Air Mineral") {
//       harga = 10000;
//     } else if (menu == "Lemon Tea") {
//       harga = 20000;
//     } else if (menu == "Kopi") {
//       harga = 30000;
//     }
//   }

//   const total = harga * jumlah;

//   if (total >= 100000) {
//     diskon = (total * 20) / 100;
//     totalBayar = total - diskon;
//   } else {
//     totalBayar = total;
//   }

//   res.send(
//     `<h1>Waroeng's Enjoy</h1>
//     <u><h2>Struk Pembayaran</h2></u> <br>
//     Nama Pembeli : ${nama} <br>
//     Tanggal Pembelian : ${tanggal}<br>
//     Jenis  : ${pesanan} <br>
//     Menu : ${menu} <br>
//     Harga : ${harga} <br>
//     Jumlah : ${jumlah} <br>
//     <hr>
//     Total : ${total} <br>
//     Potongan 20%: ${diskon} <br>
//     <hr>
//     <b><h3>Total Bayar : ${totalBayar} </b></h3>
//     `
//   );
// });

// export default router
export default router;
