// Obtener categoría desde la URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

// Base de datos mejorada (con imágenes)
const data = {
    cafe: {
        titulo: "☕ Ruta de cafés locales",
        descripcion: "Descubre los mejores cafés escondidos de Bogotá",
        lugares: [
            {
                nombre: "Café en Chapinero",
                desc: "Ambiente tranquilo y café artesanal",
                img: "./ASSETS/moyas.jpeg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Candelaria Brew",
                desc: "Historia + café",
                img: "./ASSETS/Bogota.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
        ]
    },

    arte: {
        titulo: "🎨 Arte urbano",
        descripcion: "Explora murales y cultura callejera",
        lugares: [
            {
                nombre: "Distrito Graffiti",
                desc: "Murales gigantes",
                img: "./ASSETS/Rio bogota.jpeg"
            },
            {
                nombre: "La Candelaria",
                desc: "Arte en cada calle",
                img: "./ASSETS/Bogota.jpg"
            },
            {
                nombre: "La Candelaria",
                desc: "Arte en cada calle",
                img: "./ASSETS/Bogota.jpg"
            },
            {
                nombre: "La Candelaria",
                desc: "Arte en cada calle",
                img: "./ASSETS/Bogota.jpg"
            },
            {
                nombre: "La Candelaria",
                desc: "Arte en cada calle",
                img: "./ASSETS/Bogota.jpg"
            },
            {
                nombre: "La Candelaria",
                desc: "Arte en cada calle",
                img: "./ASSETS/Bogota.jpg"
            }
        ]
    },

    naturaleza: {
        titulo: "🌳 Naturaleza en la ciudad",
        descripcion: "Descubre parques y espacios verdes",
        lugares: [
            {
                nombre: "Distrito Graffiti",
                desc: "Murales gigantes",
                img: "./ASSETS/Rio bogota.jpeg"
            },
            {
                nombre: "La Candelaria",
                desc: "Arte en cada calle",
                img: "./ASSETS/Bogota.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
        ]
    },

    sabor: {
        titulo: "🍴 Sabor de Bogotá",
        descripcion: "Disfruta de los mejores platos locales",
        lugares: [
            {
                nombre: "Distrito Graffiti",
                desc: "Murales gigantes",
                img: "./ASSETS/Rio bogota.jpeg"
            },
            {
                nombre: "La Candelaria",
                desc: "Arte en cada calle",
                img: "./ASSETS/Bogota.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
            {
                nombre: "Usaquén Coffee",
                desc: "Perfecto para brunch",
                img: "./ASSETS/jaime duque.jpg"
            },
        ]
    }
};

// Referencias
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const contenido = document.getElementById("contenido");

// Render dinámico tipo cards
if (data[categoria]) {
    titulo.textContent = data[categoria].titulo;
    descripcion.textContent = data[categoria].descripcion;

    data[categoria].lugares.forEach(lugar => {

        const card = document.createElement("div");
        card.classList.add("story");

        card.innerHTML = `
            <img src="${lugar.img}">
            <div class="story-content">
                <h3>${lugar.nombre}</h3>
                <p>${lugar.desc}</p>
            </div>
        `;

        // 👉 CLICK (selección)
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });

        contenido.appendChild(card);
    });

} else {
    titulo.textContent = "Categoría no encontrada";
}