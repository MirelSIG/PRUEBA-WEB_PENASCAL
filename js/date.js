const fecha = document.getElementById("fecha");
if (fecha) {
    const actualizarFecha = () => {
        const hoy = new Date();
        const diaSemana = hoy.toLocaleDateString('es-ES', { weekday: 'long' });
        const fechaFormato = hoy.toLocaleDateString('es-ES');
        fecha.textContent = `${diaSemana}, ${fechaFormato}`;
    };
    actualizarFecha();
    setInterval(actualizarFecha, 60000);
}  
const reloj = document.getElementById("reloj");
if (reloj) {
    const actualizarReloj = () => {
        const ahora = new Date().toLocaleTimeString();
        reloj.textContent = ahora;
    };
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
}