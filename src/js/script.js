let iconoMenu = document.querySelector('#icono-menu');
let iconoMenuOculto = document.querySelector(".icono-menu");
let menu = document.querySelector('#menu');
let shadow = document.getElementById("opacity"); 

iconoMenu.addEventListener('click', (e) => { 
    
    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src'); 

    if(rutaActual == '/img/BarraBlanca.png'){
      e.target.setAttribute('src','/img/BarraBlanca.png');
      shadow.style.display = "none";
    }else{
        e.target.setAttribute('src','/img/BarraBlanca.png');
        shadow.style.display = "none";
}
});