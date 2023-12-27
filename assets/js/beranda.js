$(document).ready(function () {
    var urlGambar = host + "produk/gambar/";
    var limit = 4; // Number of products per page
    var currentPage = 1; // Variable to keep track of the current page

    function loadProducts(page) {
        $.ajax({
            type: "GET",
            url: host + "produk/read_produk.php?page=" + page,
            dataType: "json",
            async: true,
            success: function (response) {
                if (response.status === 200) {
                    console.log(response);

                    var dataProduk = $("#dataProduk");
                    dataProduk.empty(); // Clear existing products

                    for (var i = 0; i < response.body.data.length; i++) {
                        var product = response.body.data[i];

                        // Format harga without trailing zeros
                        var formattedHarga = parseFloat(product.harga_brg).toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        });

                        var productCard = `
                        <div class="col-3">
                            <a href="?page=detail-produk&kode_brg=${product.kode_brg}">
                                <div class="card">
                                    <img style="background-color: #f5f5eb" src="${urlGambar}${product.gambar_brg}" alt="${product.nama_produk}" />
                                    <div class="card-body">
                                        <h5 class="card-title"><b>${product.nama_brg}</b></h5>
                                        <p class="card-text" style="font-size: 30px; color: #dc3545">
                                            <strong>${formattedHarga}</strong>
                                        </p>
                                        <p class="card-star" style="font-size: 22px; color: #ffc107">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        `;
                        // Append the product card to the #dataProduk element
                        dataProduk.append(productCard);

                        currentPage = page;

                        // Enable/disable Previous and Next buttons based on the current page
                        $("#previousBtn").prop("disabled", currentPage === 1);
                        $("#nextBtn").prop("disabled", currentPage === response.body.total_pages);
                    }
                } else {
                    console.error('Gagal mengambil data dari API.');
                }
            },
            error: function () {
                console.error('Terjadi kesalahan dalam permintaan AJAX.');
            }
        });
    }

    // Initial load for the first page
    loadProducts(currentPage);

    // Pagination click event
    $(document).on("click", ".page-link", function (e) {
        e.preventDefault();
        var page = $(this).text();
        loadProducts(page);
    });

    // Next button click event
    $(document).on('click', '#nextBtn', function () {
        currentPage++;
        loadProducts(currentPage);
    });

    // Previous Page Button Click
    $(document).on('click', '#previousBtn', function () {
        if (currentPage > 1) {
            currentPage--;
            loadProducts(currentPage);
        }
    });

});
