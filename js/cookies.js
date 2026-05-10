document.addEventListener("DOMContentLoaded", function () {

    if(localStorage.getItem("cookiesAccepted")){
        return;
    }

    const banner = document.createElement("div");

    banner.id = "cookie-banner";

    banner.innerHTML = `
    
    <div class="cookie-content">

        <p>
            Utilizamos cookies para mejorar la experiencia de navegación y analizar el tráfico del sitio web.
            <a href="politica-cookies.html">
                Más información
            </a>
        </p>

        <button id="accept-cookies">
            Aceptar
        </button>

    </div>

    `;

    document.body.appendChild(banner);

    document.getElementById("accept-cookies").addEventListener("click", function(){

        localStorage.setItem("cookiesAccepted", "true");

        banner.style.display = "none";

    });

});