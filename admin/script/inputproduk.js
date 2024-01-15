$(document).ready(function () {

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

});


$('#formProduk').submit(function (e) {
    e.preventDefault();

    // Get the form data
    var formData = new FormData(this);
    console.log("FormData:", formData);


    // Additional validation: Check if required fields are not empty
    var requiredFields = ['kode_brg', 'nama_brg', 'harga_brg', 'nama_kategori', 'stok_brg', 'deskripsi_brg'];

    for (var i = 0; i < requiredFields.length; i++) {
        var fieldName = requiredFields[i];

        if (!formData.get(fieldName)) {
            alert('Please fill in all required fields.');
            return;
        }
    }

    // Perform the AJAX request
    $.ajax({
        type: 'POST',
        url: host + "produk/input_produk.php",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            window.location.replace("?page=produk_anda");
        },
        error: function (error) {
            console.error(error);
        }
    });
});