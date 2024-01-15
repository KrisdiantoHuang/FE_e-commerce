$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const kode_brg = urlParams.get('kode_brg');

    if (kode_brg) {
        // If kode_brg is present in the URL, set it in the input field
        $('#kode_brg').val(kode_brg);
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
