<?php
header('Content-Type: application/json');

$res = [
  "status" => 200,
  "msg" => "Data Produk Berhasil Dihapus",
  "body" => [
    "data" => []
  ]
];

echo json_encode($res);
?>
