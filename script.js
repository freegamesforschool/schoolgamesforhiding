document.addEventListener("keydown", (e) => {
  const img = document.getElementById("displayImage");

  if (e.key === "8") {
    img.src = "images/img8.png";
    img.style.display = "block";
  }

  if (e.key === "9") {
    img.src = "images/img9.png";
    img.style.display = "block";
  }

  if (e.key === "0") {
    img.src = "images/img0.png";
    img.style.display = "block";
  }
});
