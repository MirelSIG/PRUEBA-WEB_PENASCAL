const form = document.getElementById('registrationForm');

if (form) {
    const messageDiv = document.getElementById('message');

    form.noValidate = true;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!this.checkValidity()) {
            if (messageDiv) {
                messageDiv.textContent = 'No puedes enviar datos hasta completar todos los campos obligatorios.';
                messageDiv.style.color = 'red';
            }
            return;
        }

        if (messageDiv) {
            messageDiv.textContent = '';
            messageDiv.style.color = '';
        }

        form.reset();
    });
}