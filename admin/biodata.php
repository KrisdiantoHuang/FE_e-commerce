<br><br>
<div class="row">
    <!-- left column -->
    <div class="col-md-3  pt-1">
        <div class="card-body text-center">
            <!-- Profile picture image-->
            <img class="img-account-profile rounded-circle mb-3" src="../assets/img/user.png" alt="Avatar" id="preview-image">

            <!-- Profile picture upload button-->
            <input type="file" name="file" id="file" class="inputfile" />
            <label class="col-lg-12 btn btn-primary" type="button" for="file" id="choose-file">
                <h4 class="card-text">Pilih foto</h4>
            </label>
        </div>
    </div>

    <!-- edit form column -->
    <div class="col-md-9 personal-info">

        <h3><strong>Biodata</strong></h3>

        <form class="form-horizontal" role="form">
            <div class="form-group row">
                <label class="col-lg-3 control-label">Nama</label>
                <label for="">:</label>
                <div class="col-lg-7">
                    <input class="form-control" type="text" value="">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 control-label">Tanggal Lahir</label>
                <label for="">:</label>
                <div class="col-lg-7">
                    <input class="form-control" id="date" name="date" type="date">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 control-label">Jenis Kelamin</label>
                <label for="">:</label>
                <div class="col-lg-7">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="jenisKelamin" id="laki-laki" value="laki-laki">
                        <label class="form-check-label" for="laki-laki">Laki-laki</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="jenisKelamin" id="perempuan" value="perempuan">
                        <label class="form-check-label" for="perempuan">Perempuan</label>
                    </div>

                </div>
            </div>
            <h3><strong>Kontak</strong></h3>
            <div class="form-group row">
                <label class="col-lg-3 control-label">Email</label>
                <label for="">:</label>
                <div class="col-lg-7">
                    <input class="form-control" type="text" value="">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 control-label">No Hp</label>
                <label for="">:</label>
                <div class="col-lg-7">
                    <input class="form-control" type="text" value="">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 control-label">Alamat</label>
                <label for="">:</label>
                <div class="col-lg-7">
                    <input class="form-control" type="text" value="">
                </div>
            </div>
            <div class="form-group row mr-5">
                <div class="col-3">
                    <button class="btn btn-danger m-3" type="button">Hapus Akun</button>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary m-3" type="button">Ubah Sandi</button>
                </div>
                <div class="col-6 text-right">
                    <button class="align-self-end btn btn-primary m-3">Simpan</button>
                </div>
            </div>
        </form>
    </div>
</div>