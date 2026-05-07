const img = document.getElementById("imgCambio");
if (img) {
    const imgs = ["./assets/img1.jpg", "./assets/img2.jpg", "./assets/img3.webp"];
    let pos = 0;
    img.onclick = () => {
        pos = (pos + 1) % imgs.length;
        img.src = imgs[pos];
    };
}