$(document).ready(function () {
    var urlGambar = host + "produk/gambar/";
    const urlParams = new URLSearchParams(window.location.search);
    const kode_brg = urlParams.get('kode_brg');
    const currentPage = urlParams.get('page') || 1;

    if (kode_brg) {
        fetchProductDetails(kode_brg, currentPage);
    }

    function fetchProductDetails(kode_brg, currentPage) {
        $.ajax({
            type: "GET",
            url: host + "produk/read_produk.php",
            dataType: "json",
            data: { page: currentPage },
            async: true,
            success: function (response) {
                try {
                    if (response.status === 200 && response.body.data.length > 0) {
                        console.log(response);
                        var product = findProductByKodeBrg(response.body.data, kode_brg);

                        if (product) {
                            displayProductDetails(product);
                        } else {
                            console.error('Product with kode_brg not found.');
                        }
                    } else {
                        console.error('Failed to fetch product details from API:', response.msg);
                    }
                } catch (error) {
                    console.error('Error processing JSON response:', error);
                    console.error('Raw JSON response:', response);
                }
            },
            error: function (xhr, status, error) {
                console.error('Error in AJAX request:', status);
                console.error('Error details:', error);
            }
        });
    }

    function findProductByKodeBrg(products, kode_brg) {
        return products.find(p => p.kode_brg === kode_brg);
    }

    function displayProductDetails(product) {
        var productDetailsHTML = `
            <div class="col-md-4 mb-4">
                <div class="product-div">
                    <div class="product-div-left">
                        <div class="img-container">
                            <img src="${urlGambar}${product.gambar_brg}" alt="${product.nama_produk}" style="padding-top: 90px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4" style="border-radius: 0.9375rem; border: 1px solid #DACDCD; padding-left: 10px; padding-right: 10px;">
                <span class="product-name">${product.nama_brg}</span>
                <div class="rectangle-tag">
                    <span class="product-price">Rp ${parseFloat(product.harga_brg).toLocaleString('id-ID')}</span>
                </div>
                <div class="rate">
                    <h4>Rating Produk :</h4>
                    <div class="star-prod">
                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="deskripsi">
                <br>
                <span ><b>kategori : ${product.nama_kategori} </b></span>
                    <h4>Deskripsi Produk :</h4>
                    <p>${product.deskripsi_brg}</p>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="pesanan-container">
                    <div class="pesanan">
                        <h3>Atur Jumlah dan Catatan</h3>
                    </div>
                    <div class="kuantitas">
                        <div class="min">
                            <i class="fa-regular fa-square-minus" style="color: #000000;" aria-hidden="true"></i>
                        </div>
                        <h5>${product.stok_brg}</h5>
                        <div class="add">
                            <i class="fa-solid fa-square-plus" style="color: #000000;" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="catatan">
                        <label for="catatan">
                            <h4>Catatan :</h4>
                        </label>
                        <textarea class="form-control" id="catatan" rows="6"></textarea>
                    </div>
                    <div class="cart">
                        <button class="btn btn-primary" type="submit">
                            <h3><i class="fa-solid fa-cart-shopping" style="color: #000000;" aria-hidden="true"></i> Keranjang</h3>
                        </button>
                    </div>
                    <div class="buy">
                        <button class="btn btn-primary" type="submit">
                            <h3>Beli</h3>
                        </button>
                    </div>
                </div>
            </div>
            `;

            $('#productDetails').html(productDetailsHTML);
        }
    });