    const loginUser = document.getElementById("loginUser");
    const loginPass = document.getElementById("loginPass");
    const loginAction = document.getElementById("loginAction");
    const loginMessage = document.getElementById("loginMessage");

    if (loginAction && loginUser && loginPass && loginMessage) {
        loginAction.addEventListener("click", () => {
            const usuario = loginUser.value.trim();
            const clave = loginPass.value.trim();

            if (usuario && clave) {
                loginMessage.textContent = "Ya estas logueado. Puedes completar el formulario.";
                loginMessage.classList.remove("is-error");
                loginMessage.classList.add("is-ok");
                return;
            }

            loginMessage.textContent = "Completa usuario y clave.";
            loginMessage.classList.remove("is-ok");
            loginMessage.classList.add("is-error");
        });
    }