$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('kode_brg');

    $.ajax({
        type: "GET",
        url: host + "kategori/read_kategori.php",
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.status === 200) {
               
                var kategori = data.body.data;
                
                for (var i = 0; i < kategori.length; i++) {
                    $('#nama_kategori').append(`
                        
                            <option value="`+ kategori[i].nama_kategori +`">`+ kategori[i].nama_kategori +`</option>
                        
                    `);
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

    $.ajax({
        type: "GET",
        url: host + "produk/read_produk.php",
        // data: { id_kategori: categoryId },
        dataType: "json",
        async: true,
        success: function (data) {
            if (data.status === 200) {
                
                // Find the correct category in the array
                var categoryData = findCategoryById(data.body.data, categoryId);
                if (categoryData) {
                    // Set the value of the input field with the existing category name
                    $('#kode_brg').val(categoryData.kode_brg);
                    $('#nama_brg').val(categoryData.nama_brg);
                    $('#nama_kategori').val(categoryData.nama_kategori);
                    $('#harga_brg').val(categoryData.harga_brg);
                    $('#stok_brg').val(categoryData.stok_brg);
                    $('#deskripsi_brg').val(categoryData.deskripsi_brg);
                } else {
                    console.log('Category with id ' + categoryId + ' not found');
                }
            } else {
                console.log('Failed to fetch category details');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });

    function findCategoryById(categories, id) {
        return categories.find(function (category) {
            return category.kode_brg == id;
        });
    }

});

$('#formProduk').submit(function (e) {
    e.preventDefault();

    // Menggunakan FormData untuk menangani file gambar
    const formData = new FormData(this);

    // Melakukan permintaan AJAX untuk memperbarui data menggunakan API
    $.ajax({
        type: 'POST',
        url: host + 'produk/update_produk.php',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: (result) => {
            console.log(result);
            window.location.replace('?page=produk_anda');
        },
        error: (xhr, status, error) => {
            console.error(xhr.responseText); // Log the full response for debugging
            console.error("Status:", status);
            console.error("Error:", error);

            // Handle error as needed
        },
    });
});