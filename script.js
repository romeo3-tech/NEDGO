const productos = [
    {
        nombre: "Saco Colores",
        descripcion: "Ideal para enpaques + mudanza",
        precio:1.5 ,
        imagen: "imag/payaso.png"
    },
    {
        nombre: "Saco Ochentero negro",
        descripcion: "Nutrición profunda para el cuidado personal",
        imagen: "imag/saco negro.png"
    },
    {
        nombre: "Aceite Capilar",
        descripcion: "Brillo, suavidad y protección",
        imagen: "imag/Cosechas.png"
    },
    {
        nombre: "SACO Tejido",
        descripcion: "Saco tejido nueva y segundo uso",
        imagen: "imag/tejido.png"
    },
    {
        nombre: "yute",
        descripcion: "Saco tejido color marron de menestra arveja",
        imagen: "imag/yute.jpg"
    },
    {
        nombre: "Selladora",
        descripcion: "Maquina selladora de bolsas",
        imagen: "imag/selladora.png"
    },
    {
        nombre: "Rafias",
        descripcion: "Rafias de todo colores  x kilo ",
        imagen: "imag/rafias.png"
    },
    {
        nombre: "Maquina de coser ",
        descripcion: "Una maquina inalambrica de uso flexibe y comodo ",
        imagen: "imag/maquinakk.png"
    }





];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    const mensaje = `Hola, quiero pedir el producto: ${p.nombre}`;

    card.innerHTML = `
        <img src="${p.imagen}" onclick="abrirModal('${p.imagen}')">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <button onclick="pedir('${mensaje}')">Pedir por WhatsApp</button>
    `;

    contenedor.appendChild(card);
});

function pedir(mensaje) {
    const numero = "51999947353";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

function abrirModal(imagen) {
    const modal = document.getElementById("modal");
    const modalImagen = document.getElementById("modal-imagen");

    modalImagen.src = imagen;
    modal.style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
    const modal = document.getElementById("modal");

    if (e.target === modal) {
        modal.style.display = "none";
    }
}
