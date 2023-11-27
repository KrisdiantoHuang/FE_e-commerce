<?php
$res = [
  "status" => 200,
  "msg" => "Data berhasil di ambil",
  "body" => [
    "data" => [
      ["nama_kategori" => "Kategori 1"],
      ["nama_kategori" => "Kategori 2"],
      // Add more categories as needed
    ]
  ]
];

echo json_encode($res);
?>
