document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('ServiciosPrecios.html');
        const html = await response.text();
        const contenedor = document.getElementById('tabla-precios');
        contenedor.innerHTML = html;

        // Verifica si el cuadro info-box existe en el contenido cargado
        // const infoBox = document.querySelector('.info-box');
        // if (infoBox) {
        //     console.log('Cuadro info-box encontrado:', infoBox);

        //     const infoBoxContainer = document.getElementById('info-box-container');
        //     if (infoBoxContainer) {
        //         console.log('Contenedor info-box-container encontrado:', infoBoxContainer);
        //         infoBoxContainer.appendChild(infoBox);
        //         console.log('Cuadro info-box movido correctamente.');
        //     } else {
        //         console.error('No se encontró el contenedor con id "info-box-container" en index.html');
        //     }
        // } else {
        //     console.error('No se encontró el cuadro con clase "info-box" en ServiciosPrecios.html');
        // }
    } catch (e) {
        console.error('Error al cargar ServiciosPrecios.html:', e);
        document.getElementById('tabla-precios').innerHTML = '<p>No se pudo cargar la tabla de precios.</p>';
    }
});
