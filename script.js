function mostrarContenido(seccion) {
    const secciones = ["inicio", "servicios", "galeria"];

    secciones.forEach(function (s) {
        const elemento = document.getElementById(s);
        if (s === seccion) {
            elemento.style.display = "block";
        } else {
            elemento.style.display = "none";
        }
    });
}





