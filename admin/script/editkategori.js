function submitForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');
    var formData = {
        id_kategori: categoryId,
        nama_kategori: $('#kategori').val()
    };

    $.ajax({
        type: "POST",
        url: host + "kategori/update_kategori.php",
        data: formData,
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.status === 200) {
                window.location.href = "?page=kategori";
            } else {
                console.log('Failed to update category');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}

