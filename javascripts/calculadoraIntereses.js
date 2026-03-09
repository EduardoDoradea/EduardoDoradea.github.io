
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

    document.getElementById('resumen-monto').innerText = '$' + monto.toLocaleString('en-US');
    document.getElementById('resumen-porcentaje').innerText = porcentajeInteres + '%';
    document.getElementById('resumen-meses').innerText = meses + ' meses';
    document.getElementById('resumen-seguro').innerText = '$' + seguro.toLocaleString('en-US');

    document.getElementById('cuotaMensual').innerText = '$' + cuotaMensual.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('cuotaMensualConSeguro').innerText = '$' + cuotaMensualConSeguro.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('totalInteres').innerText = '$' + interesFinalConSeguro.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('pagoFinal').innerText = '$' + pagoFinalConSeguro.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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