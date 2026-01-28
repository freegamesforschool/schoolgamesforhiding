document.addEventListener("keydown", (e) => {
  const img = document.getElementById("displayImage");

  if (e.key === "8") {
    img.src = "math1.png";
    img.style.display = "block";
  }

  if (e.key === "9") {
    img.src = "math2.png";
    img.style.display = "block";
  }

  if (e.key === "0") {
    img.src = "math3.png";
    img.style.display = "block";
  }
});
