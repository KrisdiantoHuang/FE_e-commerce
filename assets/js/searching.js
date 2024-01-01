$(document).ready(function () {
    var urlGambar = host + "produk/gambar/";
    var currentPage = 1;
    var itemsPerPage = 4;
    var currentKeyword = ""; // Tambahkan variabel untuk menyimpan kata kunci
    
    function displayProducts(response) {
        var dataProduk = $("#dataProduk");
        dataProduk.empty();

        // start and dan index  curren page
        var startIndex = (currentPage - 1) * itemsPerPage;
        var endIndex = Math.min(startIndex + itemsPerPage, response.body.data.length);
        console.log(response.body.data);

        for (var i = startIndex; i < endIndex; i++) {
            var product = response.body.data[i];

            // Format harga 
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
            dataProduk.append(productCard);
        }
    }

    function fetchData(keyword = "") {
        var apiUrl = host + "produk/read_produk.php";
    
        if (keyword.trim() !== '') {
            apiUrl += "?keyword=" + encodeURIComponent(keyword);
        }
    
        $.ajax({
            type: "GET",
            url: apiUrl,
            dataType: "json",
            async: true,
            success: function (response) {
                if (response.status === 200) {
                    console.log(response);
                    displayProducts(response);
                    updateNavigationButtons(response.body.data.length);
                } else {
                    console.error('Gagal mengambil data dari API.');
                }
            },
            error: function () {
                console.error('Terjadi kesalahan dalam permintaan AJAX.');
            }
        });
    }
    function updateNavigationButtons(totalItems) {
        var prevButton = $("#prevButton");
        var nextButton = $("#nextButton");

        // Enable/disable "Previous" button based on the current page
        prevButton.prop("disabled", currentPage === 1);

        // Enable/disable "Next" button based on the current page and total items
        nextButton.prop("disabled", (currentPage * itemsPerPage) >= totalItems);
    }

    function resetPage() {
        currentPage = 1;
    }

    function search(event) {
        event.preventDefault();
    
        var keyword = document.getElementById('keyword').value;
    
        if (keyword.trim() !== '') {
            resetPage(); 
            currentKeyword = keyword;
            console.log(currentKeyword);
            // Gunakan fetch untuk mengirimkan permintaan GET ke API backend dengan kata kunci
            $.ajax({
                type: "GET",
                url: host + 'produk/search.php?keyword=' + encodeURIComponent(keyword),
                dataType: "json",
                async: true,
                success: function (response) {
                    if (response.status === 200) {
                        console.log(response);
                        // Call the displayProducts function with the data
                        displayProducts(response);
                        updateNavigationButtons(response.body.data.length);
                    } else {
                        console.error('Gagal mengambil data dari API:', response.msg);
                    }
                },
                error: function (xhr, status, errorThrown) {
                    console.error('Terjadi kesalahan dalam permintaan AJAX:', status, errorThrown);
                    console.log('Respons dari server:', xhr.responseText);
                }            
            });
        } else {
            // Tangani kasus ketika kata kunci kosong
            console.warn('Silakan masukkan kata kunci untuk pencarian.');
        }
    }
    

    // Initial fetch
    resetPage();
    fetchData();

// Button click event for next page
$("#nextButton").on("click", function () {
    currentPage++;
    fetchData(currentKeyword); // Gunakan currentKeyword saat mencari
});

// Button click event for previous page
$("#prevButton").on("click", function () {
    currentPage = Math.max(currentPage - 1, 1);
    fetchData(currentKeyword); // Gunakan currentKeyword saat mencari
});


    // Search button click event
    $("#cari").on("click", search);
});
