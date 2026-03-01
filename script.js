
function calcularPorcentaje() {
    const monto = parseFloat(document.getElementById('monto').value);
    const porcentajeInteres = parseFloat(document.getElementById('porcentaje').value);
    const meses = parseInt(document.getElementById('meses').value);
    const seguro = parseFloat(document.getElementById('seguro').value);

    // Validar entradas
    if (isNaN(monto) || isNaN(porcentajeInteres) || isNaN(meses) || isNaN(seguro) || monto <= 0 || porcentajeInteres <= 0 || meses <= 0 || seguro < 0) {
        alert("Por favor, ingrese valores válidos mayores a 0 en todos los campos.");
        return;
    }

    const porcentaje = (porcentajeInteres / 100);

    const tasaMensual = (porcentaje / 12);

    const pagoInteres = (tasaMensual * monto * meses);

    const pagoFinal = monto + pagoInteres;

    const cuotaMensual = Math.round((pagoFinal / meses) * 100) / 100;

    const cuotaMensualConSeguro = (cuotaMensual + seguro);

    const pagoFinalConSeguro = (cuotaMensualConSeguro * meses);

    const interesFinalConSeguro = pagoFinalConSeguro - monto;
    // Mostrar resultados en la interfaz

    document.getElementById('resumen-monto').innerText = '$' + monto.toLocaleString('es-ES');
    document.getElementById('resumen-porcentaje').innerText = porcentajeInteres + '%';
    document.getElementById('resumen-meses').innerText = meses + ' meses';
    document.getElementById('resumen-seguro').innerText = '$' + seguro.toLocaleString('es-ES');

    document.getElementById('cuotaMensual').innerText = '$' + cuotaMensual.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('cuotaMensualConSeguro').innerText = '$' + cuotaMensualConSeguro.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('totalInteres').innerText = '$' + interesFinalConSeguro.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('pagoFinal').innerText = '$' + pagoFinalConSeguro.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // AGREGAMOS LA CLASE PARA ACTIVAR LA ANIMACIÓN FADE-IN
    document.getElementById('bloque-resumen').classList.add('mostrar');
}

function limpiarCampos() {
    document.getElementById('monto').value = '';
    document.getElementById('porcentaje').value = '';
    document.getElementById('meses').value = '';
    document.getElementById('seguro').value = '';
    // QUITAMOS LA CLASE PARA QUE DESAPAREZCA SUAVEMENTE
    document.getElementById('bloque-resumen').classList.remove('mostrar');
}

let eventoInstalacion;
const botonInstalar = document.getElementById('btnInstalar');

window.addEventListener('beforeinstallprompt', (e) => {
    // Evita que el navegador muestre su propio aviso aburrido
    e.preventDefault();
    // Guarda el evento para usarlo después
    eventoInstalacion = e;
    // Muestra tu botón personalizado
    botonInstalar.style.display = 'block';
});

botonInstalar.addEventListener('click', async () => {
    if (eventoInstalacion) {
        // Muestra el prompt de instalación
        eventoInstalacion.prompt();
        // Espera a ver si el usuario aceptó
        const { outcome } = await eventoInstalacion.userChoice;
        if (outcome === 'accepted') {
            console.log('El usuario instaló la app');
            botonInstalar.style.display = 'none';
        }
        eventoInstalacion = null;
    }
});

// Ocultar el botón si la app ya está instalada
window.addEventListener('appinstalled', () => {
    botonInstalar.style.display = 'none';
    console.log('App instalada con éxito');
});