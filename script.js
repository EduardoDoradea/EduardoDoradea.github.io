
function calcularPorcentaje() {
    const monto = parseFloat(document.getElementById('monto').value);
    const porcentajeInteres = parseFloat(document.getElementById('porcentaje').value);
    const meses = parseInt(document.getElementById('meses').value);

    // Validar entradas
    if (isNaN(monto) || isNaN(porcentajeInteres) || isNaN(meses) || monto <= 0 || porcentajeInteres <= 0 || meses <= 0) {
        alert("Por favor, ingrese valores válidos mayores a 0 en todos los campos.");
        return;
    }

    const porcentaje = (porcentajeInteres / 100);

    const tasaMensual = (porcentaje / 12);

    const pagoInteres = (tasaMensual * monto * meses);

    const pagoFinal = (pagoInteres + monto);

    const cuotaMensual = (pagoFinal / meses);

    // Mostrar resultados en la interfaz

    document.getElementById('resumen-monto').innerText = '$' + monto.toLocaleString('es-ES');
    document.getElementById('resumen-porcentaje').innerText = porcentajeInteres + '%';
    document.getElementById('resumen-meses').innerText = meses + ' meses';

    document.getElementById('cuotaMensual').innerText = '$' + cuotaMensual.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('totalInteres').innerText = '$' + pagoInteres.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('pagoFinal').innerText = '$' + pagoFinal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // AGREGAMOS LA CLASE PARA ACTIVAR LA ANIMACIÓN FADE-IN
    document.getElementById('bloque-resumen').classList.add('mostrar');
}

function limpiarCampos() {
    document.getElementById('monto').value = '';
    document.getElementById('porcentaje').value = '';
    document.getElementById('meses').value = '';
    // QUITAMOS LA CLASE PARA QUE DESAPAREZCA SUAVEMENTE
    document.getElementById('bloque-resumen').classList.remove('mostrar');
}