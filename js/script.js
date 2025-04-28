function dispositivoMovil() {
    return window.innerWidth <= 768;
}

window.addEventListener('resize', function() {
    if (dispositivoMovil()) {
        console.log('Dispositivo móvil');
        // Lógica específica para móvil
    } else {
        console.log('Escritorio');
        // Lógica específica para escritorio
    }
});

// Lógica inicial al cargar la página
if (dispositivoMovil()) {
    console.log('Dispositivo móvil');
    // Lógica específica para móvil al cargar la página
} else {
    console.log('Escritorio');
    // Lógica específica para escritorio al cargar la página
}
