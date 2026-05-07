
const textarea = document.getElementById("perfil_desc");
const contador = document.getElementById("contador");
if (textarea && contador) {
    textarea.addEventListener("keyup", () => {
        contador.textContent = `${textarea.value.length} / 800 caracteres`;
    });
}