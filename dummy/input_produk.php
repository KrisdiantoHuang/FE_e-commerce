<?php
$res['status'] = 200;
$res['msg'] = "Data berhasil diinsert";
$res['body']['data']['gambar_brg'] = ".png";
$res['body']['data']['kode_brg'] = "ip01";
$res['body']['data']['nama_brg'] = "iphone 15 pro";
$res['body']['data']['harga_brg'] = "35.000.000";
$res['body']['data']['id_kategori'] = "nama_kategori 1";
$res['body']['data']['stok_brg'] = "99";
$res['body']['data']['deskripsi_brg'] = "berwarna biru";

echo json_encode($res);
?>
