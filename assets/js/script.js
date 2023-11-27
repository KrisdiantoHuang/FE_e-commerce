function on() {
  var filter = document.getElementById("filter");
  var overlay = document.getElementById("overlay");

  filter.classList.toggle("filterOn");
  overlay.classList.toggle("overlayOn");

  if (filter.classList.contains("filterOn")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }

  overlay.addEventListener("click", function (e) {
    if (e.target.id === "overlay") {
      filter.classList.remove("filterOn");
      overlay.classList.remove("overlayOn");
      overlay.style.display = "none";
    }
  });

}
let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

function preview() {
  imageContainer.innerHTML = "";
  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

  for (i of fileInput.files) {
    let reader = new FileReader();
    let figure = document.createElement("figure");
    reader.onload = () => {
      let img = document.createElement("img");
      img.setAttribute("src", reader.result);
      figure.appendChild(img); // Hanya menambahkan elemen gambar
    }
    imageContainer.appendChild(figure);
    reader.readAsDataURL(i);
  }
}

document.getElementById('file').onchange = function () {
  var reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("preview-image").src = e.target.result;
  };

  reader.readAsDataURL(this.files[0]);
};
