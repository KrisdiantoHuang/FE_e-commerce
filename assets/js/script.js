// FILTER \\

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

// FILTER \\

// PREVIEW GAMBAR \\

const imgInput = document.getElementById('image')
const previewZone = document.getElementById('preview')

imgInput.addEventListener("change", () => {
    const file = imgInput.files[0]
    const reader = new FileReader;

    reader.addEventListener("load", () => {
        previewZone.innerHTML = ""
        const img = document.createElement("img")
        img.src = reader.result

        previewZone.appendChild(img)
    })

    reader.readAsDataURL(file)
})

// PREVIEW GAMBAR \\
