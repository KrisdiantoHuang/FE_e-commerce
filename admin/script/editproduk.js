$(document).ready(function () {

    // var tes = $('#nama_kategori').val()
    // console.log(tes);

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
                        
                            <option value="`+ kategori[i].id_kategori +`">`+ kategori[i].nama_kategori +`</option>
                        
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

   

    $('#formProduk').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Create FormData object and append form data
        var formData = new FormData(this);
        
        $.ajax({
            type: "POST",
            url: host + "kategori/update_kategori.php",
            data: formData,
            dataType: "json",
            processData: false,  // Prevent jQuery from processing the data
            contentType: false,  // Prevent jQuery from setting content type
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
    });
    

    // Event listener for form submission

    // Function to find category by id in an array
    function findCategoryById(categories, id) {
        return categories.find(function (category) {
            return category.kode_brg == id;
        });
    }
});


