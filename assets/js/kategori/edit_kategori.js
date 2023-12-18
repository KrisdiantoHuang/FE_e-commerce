// Add this function at the beginning of edit_kategori.js
function submitForm() {
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
                // Handle success, e.g., redirect to the category list page
                window.location.href = "kategori.html";
            } else {
                console.log('Failed to update category');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}

// The existing code for fetching category data can remain as it is.
