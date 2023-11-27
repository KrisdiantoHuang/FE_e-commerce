<?php
$res = [
  "status" => 200,
  "msg" => "Data berhasil di ambil",
  "body" => [
    "data" => [
      ["gambar_brg" => "Gambar"],
      ["kode_brg" => "Kode"],
      ["nama_brg" => "Nama Barang"],
      ["harga_brg" => "Harga Barang"],
      ["id_kategori" => "Kategori 1"],
      ["stok_brg" => "Stok Barang"],
      ["deskripsi_brg" => "Ini adalah deskripsi barang"],
    ],
  ]
];

echo json_encode($res);
?>