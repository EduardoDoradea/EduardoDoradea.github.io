
    function calculoPrestamo() {
        const prestamo = parseFloat(document.getElementById('prestamo').value);
        let intereses = parseFloat(document.getElementById('intereses').value);
        const cuotas = parseInt(document.getElementById('cuotas').value);

        // Validar entradas
        if (isNaN(prestamo) || prestamo <= 0 || isNaN(intereses) || intereses <= 0 || isNaN(cuotas) || cuotas <= 0) {
            alert("Por favor, ingrese valores válidos para todos los campos.");
            return;
        }

        // Calculo de Prestamo con interes y capital separados

        intereses = intereses / 12;

        const interes_final = intereses / 100;

        const cuota_mensual_fija = prestamo * (interes_final * Math.pow(1+interes_final, cuotas)) / (Math.pow(1+interes_final, cuotas)-1);

        const interes_mensual = prestamo * interes_final;

        const capital_mensual = cuota_mensual_fija - interes_mensual;

        const nuevo_saldo = prestamo - capital_mensual;

        // Mostrar resultados en la interfaz
        document.getElementById('prestamo_final').innerText = '$' + prestamo.toLocaleString('en-US');
        
        document.getElementById('cuota_mensual').innerText = '$' + cuota_mensual_fija.toFixed(2);
        document.getElementById('interes_mensual').innerText = '$' + interes_mensual.toFixed(2);
        document.getElementById('capital_mensual').innerText = '$' + capital_mensual.toFixed(2);
        document.getElementById('nuevo_saldo').innerText = '$' + nuevo_saldo.toFixed(2);

        // AGREGAMOS LA CLASE PARA ACTIVAR LA ANIMACIÓN FADE-IN
        document.getElementById('bloque-resumen').classList.add('mostrar');

    }

    function limpiarCampos() {
        document.getElementById('prestamo').value = '';
        document.getElementById('intereses').value = '';
        document.getElementById('cuotas').value = '';
        // QUITAMOS LA CLASE PARA QUE DESAPAREZCA SUAVEMENTE
        document.getElementById('bloque-resumen').classList.remove('mostrar');
    }