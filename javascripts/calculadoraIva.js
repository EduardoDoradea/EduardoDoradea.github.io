
function calculoIvaPagoCuenta() {
    const monto = parseFloat(document.getElementById('monto_ingresado').value);

    // Validar entradas
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un valor válido mayor a 0 para el monto.");
        return;
    }

    // Calculo IVA
    const iva = 0.13;
    const ivaCalculado = monto * iva;

    // Calculo Pago Cuenta
    const pagoCuenta = 0.0175;
    const pagoCuentaCalculado = monto * pagoCuenta;

    const totalPago = pagoCuentaCalculado + ivaCalculado;

    // Mostrar resultados en la interfaz
    document.getElementById('monto_final').innerText = '$' + monto.toLocaleString('en-US');
    document.getElementById('iva_calculado').innerText = '$' + ivaCalculado.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('pagocuenta_calculado').innerText = '$' + pagoCuentaCalculado.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('total_pagar').innerText = '$' + totalPago.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    // AGREGAMOS LA CLASE PARA ACTIVAR LA ANIMACIÓN FADE-IN
    document.getElementById('bloque-resumen').classList.add('mostrar');

}

function limpiarCampos() {
    document.getElementById('monto_ingresado').value = '';
    // QUITAMOS LA CLASE PARA QUE DESAPAREZCA SUAVEMENTE
    document.getElementById('bloque-resumen').classList.remove('mostrar');
}