
let eventoInstalacion;
const botonInstalar = document.getElementById('btnInstalar');

// 1. FUNCIÓN PARA VERIFICAR SI YA ESTÁ INSTALADA
function verificarInstalacion() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
        || window.navigator.standalone
        || document.referrer.includes('android-app://');

    if (isStandalone && botonInstalar) {
        botonInstalar.style.display = 'none';
        console.log('Modo App detectado: Ocultando botón');
        return true;
    }
    return false;
}

// 2. EJECUTAR AL CARGAR
window.addEventListener('load', verificarInstalacion);

// 3. LÓGICA DEL PROMPT (Solo si no está instalada)
window.addEventListener('beforeinstallprompt', (e) => {
    if (verificarInstalacion()) return; // Si ya es app, no hace nada

    e.preventDefault();
    eventoInstalacion = e;
    botonInstalar.style.display = 'block';
});

botonInstalar.addEventListener('click', async () => {
    if (eventoInstalacion) {
        eventoInstalacion.prompt();
        const { outcome } = await eventoInstalacion.userChoice;
        if (outcome === 'accepted') {
            botonInstalar.style.display = 'none';
        }
        eventoInstalacion = null;
    }
});

window.addEventListener('appinstalled', () => {
    botonInstalar.style.display = 'none';
});