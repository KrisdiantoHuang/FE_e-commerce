<?php
$res['status'] = 200;
$res['msg'] = "Data berhasil diperbarui";
$res['body']['data']['nama_kategori'] = "kategori_baru";

echo json_encode($res);
?>
