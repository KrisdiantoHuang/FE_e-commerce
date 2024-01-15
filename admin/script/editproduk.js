// editproduk.js

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Fetch existing product details along with category details
    $.ajax({
        type: "GET",
        url: host + "produk/read_produk.php",
        data: { id_produk: productId },
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.status === 200) {
                // Check if it's a single product or an array of products
                var productData = Array.isArray(data.body.data) ? data.body.data[0] : data.body.data;

                // Set the value of the input fields with the existing product details
                $('#gambar_brg').val(productData.gambar_brg);
                $('#kode_brg').val(productData.kode_brg);
                $('#nama_brg').val(productData.nama_brg);
                $('#harga_brg').val(productData.harga_brg);
                $('#stok_brg').val(productData.stok_brg);
                $('#deskripsi_brg').val(productData.deskripsi_brg);

                // Fetch existing category details
                $.ajax({
                    type: "GET",
                    url: host + "kategori/read_kategori.php",
                    dataType: "json",
                    async: true,
                    success: function (kategoriData) {
                        if (kategoriData.status === 200) {
                            // Set the value of the category input field with the existing category name
                            $('#kategori_brg').val(productData.nama_kategori);
                        } else {
                            console.log('Failed to fetch category details');
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error('Error:', error);
                    }
                });
            } else {
                console.log('Failed to fetch product details');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });

    // Event listener for form submission
    $('#formProduk').submit(function () {
        submitForm();
        return false;
    });

    // Submit form function
    function submitForm() {
        var formData = {
            id_produk: productId,
            gambar_brg: $('#gambar_brg').val(),
            kode_brg: $('#kode_brg').val(),
            nama_brg: $('#nama_brg').val(),
            harga_brg: $('#harga_brg').val(),
            id_kategori: $('#id_kategori').val(),
            stok_brg: $('#stok_brg').val(),
            deskripsi_brg: $('#deskripsi_brg').val(),
        };

        // Submit form data using AJAX
        $.ajax({
            type: "POST",
            url: host + "produk/update_produk.php",
            data: formData,
            dataType: "json",
            async: true,
            success: function (data) {
                if (data.status === 200) {
                    window.location.href = "?page=produk";
                } else {
                    console.log('Failed to update product');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
            }
        });
    }
});
