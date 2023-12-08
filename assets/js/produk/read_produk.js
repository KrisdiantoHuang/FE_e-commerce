$(document).ready(function () {
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
                            <th style="width: 10%;" class="align-middle" colspan="2" rowspan="5">
                                <img class="bg-white" src="assets/img/produk/${response.body.data[i].gambar_brg}" alt=""
                                    style="width: 200px; border-radius: 20px">
                            </th>
                            <th class="bg-white text-center" style="border-radius: 20px" colspan="3">${response.body.data[i].nama_brg}</th>
                            <th style="width: 5%;" class="align-middle" rowspan="5">
                                <button class="btn btn-danger btn-md">
                                    <i class="fa fa-trash"></i>
                                </button>
                                <br />
                                <br />
                                <a href="editproduk.html">
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
                            <td colspan="2">${response.body.data[i].id_kategori}</td>
                        </tr>
                        <tr>
                            <td><strong>Stok</strong></td>
                            <td colspan="2">${response.body.data[i].stok_brg}</td>
                        </tr>
                        <tr>
                            <td><strong>Deskripsi</strong></td>
                            <td colspan="2">${response.body.data[i].deskripsi_brg}</td>
                        </tr>
                        <br>
                        <br>`;
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
