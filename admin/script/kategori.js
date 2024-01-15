// API READ KATEGORI \\

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: host + "kategori/read_kategori.php",
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.status === 200) {
                console.log(data);
                var kategori = data.body.data;

                // Clear existing rows
                $('#kategori tbody').empty();

                // Populate the table with new data
                for (var i = 0; i < kategori.length; i++) {
                    $('#kategori tbody').append(
                        '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td hidden>' + kategori[i].id_kategori + '</td>' +
                        '<td>' + kategori[i].nama_kategori + '</td>' +
                        '<td>' +
                        '<a href="?page=editkategori&id=' + kategori[i].id_kategori + '">' +
                        '<button class="btn btn-success btn-md m-2">' +
                        '<i class="fa fa-edit"></i>' +
                        '</button>' +
                        '</a>' +
                        '<button class="btn btn-danger btn-md m-2">' +
                        '<i class="fa fa-trash"></i>' +
                        '</button>' +
                        '</td>' +
                        '</tr>'
                    );
                }

                // Initialize DataTable
                $("#kategori").dataTable();
            } else {
                console.log('Failed to fetch data');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
});

// API READ KATEGORI \\



// API DELETE KATEGORI \\

$(document).on('click', '.btn-danger', function () {
    // Dapatkan id_kategori dari data baris
    var id_kategori = $(this).closest('tr').find('td:eq(1)').text().trim();

    // Tampilkan id_kategori di console
    console.log('id_kategori:', id_kategori);

    // Konfirmasi penghapusan, bisa diubah sesuai kebutuhan
    var confirmation = confirm('Apakah Anda yakin ingin menghapus kategori?');

    if (confirmation) {
        // Kirim id_kategori ke backend melalui permintaan AJAX
        $.ajax({
            type: 'POST',
            url: host + 'kategori/delete_kategori.php',
            data: { id_kategori: id_kategori },
            dataType: 'json',
            success: function (data) {
                if (data.status === 200) {
                    location.reload();
                } else {
                    console.log('Gagal Menghapus Data');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
            }
        });
    }
});

// API DELETE KATEGORI \\



