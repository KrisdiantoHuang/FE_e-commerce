$('#formKategori').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"kategori/input_kategori.php",
        data: formData,
        cache: false, contentType: false, processData: false, dataType: 'json',
        success: (result) => {
            console.log(result);
            window.location.replace("kategori.html");
        },
        error: (a) => {
            //if error
        }
    });
})