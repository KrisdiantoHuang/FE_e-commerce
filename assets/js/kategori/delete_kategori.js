$(document).on('click', '.btn-danger', function () {
    $.ajax({
        type: 'DELETE',
        url: host + "/dummy/delete_kategori.php",
        async: true,
        success: function (data) {
            if (data.status === 200) {
                console.log(data);
            } else {
                console.log('Gagal Menghapus Data');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
});
