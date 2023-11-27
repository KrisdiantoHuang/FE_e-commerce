$(document).ready(function () {
    // Lakukan permintaan AJAX menggunakan metode GET
    $.ajax({
        url: host+'/dummy/read_produk.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            if (response.status === 200) {
                console.log(response);
                for (var i = 0; i < response.body.data.length; i++) {
                    // Gantilah nilai "(Data Dari API)" dengan data yang diterima
                    $('#produk tbody tr:nth-child(1) th[colspan="3"]').text(response.body.data[2].nama_brg);
                    $('#produk tbody tr:nth-child(2) td[colspan="2"]').text(response.body.data[3].harga_brg);
                    $('#produk tbody tr:nth-child(3) td[colspan="2"]').text(response.body.data[4].id_kategori);
                    $('#produk tbody tr:nth-child(4) td[colspan="2"]').text(response.body.data[5].stok_brg);
                    $('#produk tbody tr:nth-child(5) td[colspan="2"]').text(response.body.data[6].deskripsi_brg);
                }

            } else {
                console.error('Gagal mengambil data dari API.');
            }
        },
        error: function () {
            console.error('Terjadi kesalahan dalam permintaan AJAX.');
        }
    });
});
