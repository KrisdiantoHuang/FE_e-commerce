// editkategori.js

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');

    // Fetch existing category details
    $.ajax({
        type: "GET",
        url: host + "kategori/read_kategori.php",
        data: { id_kategori: categoryId },
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.status === 200) {
                // Check if it's a single category or an array of categories
                var categoryData = Array.isArray(data.body.data) ? data.body.data[0] : data.body.data;

                // Set the value of the input field with the existing category name
                $('#kategori').val(categoryData.nama_kategori);
            } else {
                console.log('Failed to fetch category details');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });

    // Event listener for form submission
    $('#formKategori').submit(function () {
        submitForm();
        return false;
    });

    // Submit form function
    function submitForm() {
        var formData = {
            id_kategori: categoryId,
            nama_kategori: $('#kategori').val()
        };

        // Submit form data using AJAX
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
});
