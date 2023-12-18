$(document).on('click', '.btn-danger', function () {
    // Dapatkan id_kategori dari data baris
    var kode_brg = $(this).closest('tr').find('td:eq(0)').text().trim();

    // Tampilkan id_kategori di console
    console.log('kode_brg:', kode_brg);

    // Konfirmasi penghapusan, bisa diubah sesuai kebutuhan
    var confirmation = confirm('Apakah Anda yakin ingin menghapus kategori?');

    if (confirmation) {
        // Kirim id_kategori ke backend melalui permintaan AJAX
        $.ajax({
            type: 'POST',
            url: host + 'produk/delete_produk.php',
            data: { kode_brg: kode_brg },
            dataType: 'json',
            success: function (data) {
                if (data.status === 200) {
                    console.log(data);
                    // Refresh tabel setelah penghapusan berhasil
                    // Anda dapat menggunakan cara lain untuk melakukan ini, seperti me-reload halaman atau memperbarui tabel secara langsung
                    location.reload(); // Ini akan me-reload halaman, gunakan cara lain jika diperlukan
                } else {
                    console.log('Gagal Menghapus Data');
                }
            },
            error: function (xhr, status, error) {
                location.reload();
            }
        });
    }
});

