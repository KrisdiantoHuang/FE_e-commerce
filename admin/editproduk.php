<br><br>
<div class="row ">
    <div class="col text-center">
        <h3><strong style="border-bottom: 3px solid #cce5ff;">Edit Produk</strong></h3>
    </div>
</div>
<br>
<br>
<!-- edit form column -->
<form action="" method="post" id="formProduk" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <!-- left column -->
        <div class="pt-1">
            <div class="card-body text-center">
                <div id="preview" class="preview">
                </div>
                <br>
                <label class="gambar" for="image">
                    <input type="file" id="image" accept="image/png, image/jpeg" name="gambar_brg">
                    <i class="fas fa-upload"></i> &nbsp; Choose A Photo
                </label>
            </div>
        </div>
    <div class="col-md-9 personal-info">
        <div hidden class="form-group row">
            <label hidden="col-lg-3 control-label">Kode Barang</label>
            <label hidden for="">:</label>
            <div class="col-lg-7">
                <input hidden id="kode_brg" class="form-control bg-custom" type="text" value="" placeholder="Kode Barang" name="kode_brg">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-lg-3 control-label">Nama Barang</label>
            <label for="">:</label>
            <div class="col-lg-7">
                <input id="nama_brg" class="form-control bg-custom" type="text" value="" placeholder="Nama Barang" name="nama_brg">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-lg-3 control-label">Harga Barang</label>
            <label for="">:</label>
            <div class="col-lg-7">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">Rp.</span>
                    </div>
                    <input id="harga_brg" class="form-control bg-custom" type="text" oninput="this.value=this.value.replace(/[^0-9]/g,'')" placeholder="Harga Barang" name="harga_brg">
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-lg-3 control-label">Kategori</label>
            <label for="">:</label>
            <div class="col-lg-7">
                <select id="nama_kategori" class="form-control bg-custom" name="nama_kategori">
                    <!-- <option id="nama_kategori" value=""></option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Tablet">Tablet</option> -->
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-lg-3 control-label">Stock Barang</label>
            <label for="">:</label>
            <div class="col-lg-7">
                <input id="stok_brg" class="form-control bg-custom" type="number" value="" placeholder="Stock Barang" name="stok_brg">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-lg-3 control-label">Deskripsi</label>
            <label for="">:</label>
            <div class="col-lg-7">
                <textarea id="deskripsi_brg" class="form-control bg-custom" cols="10" rows="5" name="deskripsi_brg"></textarea>
            </div>
        </div>
        <div class="form-group row p-3">
            <div class="col-10 text-right">
                <input type="submit" name="simpan" value="Perbarui Produk" class="btn btn-primary btn-md">
                <a href="?page=produk_anda" class="m-2 btn btn-secondary btn-md" role="button">Kembali</a>
            </div>
        </div>
    </div>
    </div>
</form>