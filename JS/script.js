<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {

  // ================= ISLA =================
  const categoriasWrapper = document.querySelector('.categorias-wrapper');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        categoriasWrapper.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(categoriasWrapper);

  document.querySelectorAll(".cat").forEach(cat => {
    cat.addEventListener("click", () => {
        const categoria = cat.getAttribute("data-category");

        // Redirige pasando la categoría por URL
        window.location.href = `PAGES/guia.html?cat=${categoria}`;
    });
});

  // ================= BOTONES =================
  document.getElementById("explorarBtn").addEventListener("click", () => {
    document.querySelector(".temporadas").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("rutasBtn").addEventListener("click", () => {
    alert("Próximamente rutas personalizadas 🚀");
  });

  // ================= CARRUSEL =================
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);

  // ================= FILTRO =================
  const categorias = document.querySelectorAll(".cat");
  const cards = document.querySelectorAll(".card");

  let activeCategory = null;

  categorias.forEach(cat => {
    cat.addEventListener("click", () => {

      const selected = cat.dataset.category;

      if (activeCategory === selected) {
        cards.forEach(card => card.style.display = "block");
        activeCategory = null;
        return;
      }

      activeCategory = selected;

      cards.forEach(card => {
        card.style.display =
          card.dataset.category === selected ? "block" : "none";
      });

    });
  });

  // ================= CARDS =================
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").textContent;
      openModal(title, "Detalles de la experiencia próximamente...");
    });
  });

  // ================= STORIES =================
  const stories = document.querySelectorAll(".story");

  stories.forEach(story => {
    story.addEventListener("click", () => {
      const title = story.querySelector("h3").textContent;
      const desc = story.querySelector("p").textContent;

      openModal(title, desc);
    });
  });

});

// ================= MODAL =================
function openModal(title, desc) {

  let modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close").onclick = () => modal.remove();

  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
}

function goToDetalle(id) {
  window.location.href = `detalle.html?id=${id}`;
  // window.location.href = `pages/detalle.html?id=${id}`;
}
=======
let currentLang = "es"

const btn = document.getElementById("language-btn")

btn.addEventListener("click", () => {

const elements = document.querySelectorAll("[data-es]")

if(currentLang === "es"){

elements.forEach(el=>{
el.textContent = el.getAttribute("data-en")
})

btn.textContent = "ES"
currentLang = "en"

}else{

elements.forEach(el=>{
el.textContent = el.getAttribute("data-es")
})

btn.textContent = "EN"
currentLang = "es"

}

})
>>>>>>> d8c4f7c73bdc33996542a868fc3029cfd73d49f9
