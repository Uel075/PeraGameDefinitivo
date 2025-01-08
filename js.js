// Menu principal
function cambiarimagen(div_imagen) {
    divantiguo.style.display = "none";
    divcasino.style.display = "none";
    divparque.style.display = "none";
    document.getElementById(div_imagen).style.display = "";
}
function abrirjuego(html) {
    window.open(html, "_self");
}
// Antiguo
function tiempo() {
    barrita.style.display = "";
    celda2.style.display = "";
    tabla.border = 1;
    barrita_img.width -= 1;
    temp = setTimeout(tiempo, 1);
    if (barrita_img.width === 0) {
        clearTimeout(temp);
        barrita_img.style.display = "none";
        tabla_dialogoo.style.display = "none";
        sinrespuesta.style.display = "";
    }
}
function elegir(celdaoculta, celdavista) {
    const oculta = document.getElementById(celdaoculta);
    const visible = document.getElementById(celdavista);
    clearTimeout(temp);
    miAudio.pause();
    oculta.style.display = "none";
    visible.style.fontSize = "25pt";
    tabla.border = 0;
    barrita.style.display = "none";
    if (visible.innerHTML = "Vivir la vida") {
        visible.innerHTML = "aaaa"
    }
    else if(visible.innerHTML = "Vine para grabar"){
        visible.innerHTML = "bbbb"
    }
}
function mover() {
    const pera = document.getElementById("antiguo_andando");
    pera.style.left = parseInt(pera.style.left) + -2 + "px";
    tempera = setTimeout(mover, 2);
    if (parseInt(pera.style.left) === 650) {
        clearTimeout(tempera);
        /*
        document.getElementById("barrita").style.display = "";
        document.getElementById("barrita_img").style.display = "";
        document.getElementById("tabla_dialogoo").style.display = "";
        tiempo();
        */
        pera.src = "./Imagenes/antiguo/antiguo_parado1.png";
        peradialogo();
        celda1.innerHTML = "¿Qué haces aquí co?";
        prueba = setTimeout(() => {
            tiempo();
            primeraseleccion();
        }, 2000);
    }
}
function peradialogo() {
    tabla_dialogoo.style.display = "";
    celda2.style.display = "none";
}
function primeraseleccion() {
    celda1.innerHTML = "Vine para grabar";
    celda2.innerHTML = "Vivir la vida";
}
/*
function mostraropciones() 
    {
        barrita.style.display = "";
        barrita_img.style.display = "";
        celda2.style.display = "";
    }
/*
function pausar() {
    document.getElementById("miAudio").pause();
}
function play() {
    document.getElementById("miAudio").play();
}
function elegir(celda)
{
    for(let i=1; i < 2; i++)
    {
        clearTimeout(temp);
        document.getElementById("miAudio").pause();
        if(document.getElementById('celda'+i))
        {
            document.getElementById(!('celda'+i)).style.display = "none";
            document.getElementById('celda'+i).style.display = "";
            document.getElementById("tabla").border = 0;
            barra.style.display = "none";
        }
        else
        {
            window.alert("no funciona");
        }
    }
}
*/
/*
function elegir(celda) {
    // Obtener los IDs de las dos celdas
    clearTimeout(temp);
    const celda1 = document.getElementById("celda1");
    const celda2 = document.getElementById("celda2");
    
    // Pausar el audio si existe
    const audio = document.getElementById("miAudio");
    if (audio) audio.pause();

    // Mostrar la celda seleccionada y ocultar la otra
    if (celda === "celda1") {
        celda1.style.display = ""; // Mostrar celda1
        celda2.style.display = "none"; // Ocultar celda2
    } else if (celda === "celda2") {
        celda1.style.display = "none"; // Ocultar celda1
        celda2.style.display = ""; // Mostrar celda2
    } else {
        alert("La celda seleccionada no es válida.");
    }

    // Opcional: ocultar la barra o realizar otras acciones
    const barra = document.getElementById("barra");
    if (barra) barra.style.display = "none";

    // Quitar el borde de la tabla
    const tabla = document.getElementById("tabla");
    if (tabla) tabla.border = 0;
}
*/