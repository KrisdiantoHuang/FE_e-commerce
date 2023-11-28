$('#formKategori').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"/dummy/update_kategori.php",
        data: formData,
        cache: false, contentType: false, processData: false, dataType: 'json',
        success: (result) => {
            console.log(result);
            window.location.replace(host+"/kategori.html");
        },
        error: (a) => {
            //if error
        }
    });
})