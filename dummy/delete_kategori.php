<?php
header('Content-Type: application/json');

$res = [
  "status" => 200,
  "msg" => "Data Kategori Berhasil Dihapus",
  "body" => [
    "data" => []
  ]
];

echo json_encode($res);
?>
