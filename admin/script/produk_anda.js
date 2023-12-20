// API DELETE PRODUK \\

$(document).ready(function () {
    var urlGambar = host + "produk/gambar/";
    // Lakukan permintaan AJAX menggunakan metode GET
    $.ajax({
        type: "GET",
        url: host + "produk/read_produk.php",
        dataType: "json",
        async: true,
        success: function (response) {
            if (response.status === 200) {
                console.log(response);

                // Assuming response.body.data is an array of products
                var tbodyContent = '';

                for (var i = 0; i < response.body.data.length; i++) {
                    tbodyContent += `
                        <tr>
                        <td hidden>${response.body.data[i].kode_brg}</td>
                            <th style="width: 10%;" class="align-middle" colspan="2" rowspan="5">
                                <img class="bg-white" src="` + urlGambar +`${response.body.data[i].gambar_brg}" alt=""
                                    style="width: 200px; border-radius: 20px">
                            </th>
                            <th class="bg-white text-center" style="border-radius: 20px" colspan="3">${response.body.data[i].nama_brg}</th>
                            <th style="width: 5%;" class="align-middle" rowspan="5">
                                <button class="btn btn-danger btn-md">
                                    <i class="fa fa-trash"></i>
                                </button>
                                <br />
                                <br />
                                <a href="?page=editproduk&kode_brg=${response.body.data[i].kode_brg}">
                                    <button class="btn btn-success btn-md">
                                        <i class="fa fa-edit"></i>
                                    </button>
                                </a>
                            </th>
                        </tr>
                        <tr>
                            <td><strong>Harga</strong></td>
                            <td colspan="2">${response.body.data[i].harga_brg}</td>
                        </tr>
                        <tr>
                            <td><strong>Kategori</strong></td>
                            <td colspan="2">${response.body.data[i].nama_kategori}</td>
                        </tr>
                        <tr>
                            <td><strong>Stok</strong></td>
                            <td colspan="2">${response.body.data[i].stok_brg}</td>
                        </tr>
                        <tr>
                            <td><strong>Deskripsi</strong></td>
                            <td colspan="2">${response.body.data[i].deskripsi_brg}</td>
                        </tr>`;
                }

                // Append the generated content to the tbody
                $('#produk tbody').html(tbodyContent);

            } else {
                console.error('Gagal mengambil data dari API.');
            }
        },
        error: function () {
            console.error('Terjadi kesalahan dalam permintaan AJAX.');
        }
    });
});

// API READ PRODUK \\



// API DELETE PRODUK \\

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

// API DELETE PRODUK \\
