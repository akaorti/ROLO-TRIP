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
            }
        ],

        gastronomy: {
        zonas: [
            {
                titulo: "Zona Cafetera",
                desc: "Cafés de especialidad",
                esp: "Cold brew, filtrados"
            }
        ],
        tips: [
            "Prueba café de origen",
            "Pregunta por métodos filtrados"
        ],
        fact: "Colombia produce uno de los mejores cafés del mundo"
        },

        ruta: {
        intro: "Explora los mejores cafés de Bogotá en una ruta tranquila por Chapinero y Usaquén.",
        puntos: [
            "Cafés de especialidad",
            "Ambientes tranquilos",
            "Opciones de brunch"
        ],
        mapa: "https://www.google.com/maps/dir/?api=1&origin=Bogota&destination=Usaquen"
}
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
        ],

        gastronomy: {
        zonas: [
            {
                titulo: "Zona Cafetera",
                desc: "Cafés de especialidad",
                esp: "Cold brew, filtrados"
            }
        ],
        tips: [
            "Prueba café de origen",
            "Pregunta por métodos filtrados"
        ],
        fact: "Colombia produce uno de los mejores cafés del mundo"
        }
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
        ],

        gastronomy: {
        zonas: [
            {
                titulo: "Zona Cafetera",
                desc: "Cafés de especialidad",
                esp: "Cold brew, filtrados"
            }
        ],
        tips: [
            "Prueba café de origen",
            "Pregunta por métodos filtrados"
        ],
        fact: "Colombia produce uno de los mejores cafés del mundo"
        }
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
        ],

        gastronomy: {
        zonas: [
            {
                titulo: "Zona Cafetera",
                desc: "Cafés de especialidad",
                esp: "Cold brew, filtrados"
            }
        ],
        tips: [
            "Prueba café de origen",
            "Pregunta por métodos filtrados"
        ],
        fact: "Colombia produce uno de los mejores cafés del mundo"
        }
    }
}

// Referencias
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const contenido = document.getElementById("contenido");
const gastronomyContainer = document.getElementById("gastronomy");

// Expansion
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlayContent");

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

            const ruta = data[categoria].ruta;

            // Seguridad por si alguna categoría no tiene ruta
            if (!ruta) return;

            overlayContent.innerHTML = `
                <h2>${data[categoria].titulo}</h2>
                <p>${ruta.intro}</p>

                <h3>¿Qué vas a encontrar?</h3>
                <ul>
                    ${ruta.puntos.map(p => `<li>${p}</li>`).join("")}
                </ul>

                <button onclick="window.open('${ruta.mapa}', '_blank')">
                    Ver ruta en mapa
                </button>

                <br><br>
                <button onclick="cerrarOverlay()">Cerrar</button>
            `;

            overlay.classList.add("active");
        });

        contenido.appendChild(card);
    });

    if (data[categoria].gastronomy) {

    const g = data[categoria].gastronomy;

    gastronomyContainer.innerHTML = `
        <h2>Zonas destacadas</h2>

        <div class="zones">
            ${g.zonas.map(z => `
                <div class="zone-card">
                    <h3>${z.titulo}</h3>
                    <p>${z.desc}</p>
                    <span>${z.esp}</span>
                </div>
            `).join("")}
        </div>

        <div class="tips">
            <h2>Consejos</h2>

            <div class="tips-grid">
                ${g.tips.map((tip, i) => `
                    <div class="tip">
                        <span>${i + 1}</span>
                        <p>${tip}</p>
                    </div>
                `).join("")}
            </div>
        </div>

        <div class="fact">
            <h3>¿Sabías que...?</h3>
            <p>${g.fact}</p>
        </div>
    `;
    };

} else {
    titulo.textContent = "Categoría no encontrada";
}

function cerrarOverlay() {
    document.getElementById("overlay").classList.remove("active");
}

