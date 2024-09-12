document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      {
        title: "Chat Bidireccional",
        img: "https://www.ceupe.com/images/easyblog_articles/3934/b2ap3_large_lenguaje-de-programacin.jpg",
        description: "Este es un chat con una herramienta socket.io",
      },
      // Agrega más proyectos si es necesario
    ];
  
    const references = [
      {
        title: "Nelson Aguilar",
        description: "Celular: 3203301933\nCorreo:daciros34@gmail.com \ncargo: desarrollador full stack",
      },
      {
        title: "Emilse Diaz",
        description: [
          "Celular: 3102727389",
          "Correo: emilydiaz91@hotmail.com",
          "Cargo: Analista de datos"
        ],
      },
      {
        title: "Luis Rojas",
        description: "Celular: 3057733589\nCorreo: daverlu74@gmail.com \ncargo: subintendente",
      },
      // Agrega más referencias si es necesario
    ];
  
    const experiences = [
      {
        title: "Experiencia 1",
        img: "https://www.ceupe.com/images/easyblog_articles/3934/b2ap3_large_lenguaje-de-programacin.jpg",
        description: "Descripción de la experiencia.",
      },
      // Agrega más experiencias si es necesario
    ];
  
    function createCard({ title, img, description }) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <img src="${img}" alt="${title}">
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          <p>${description}</p>
        </div>
      `;
      return card;
    }
  
    function createCardExp({ title, description }) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Convertir la descripción en un arreglo si no lo es
      const descriptionArray = Array.isArray(description) ? description : description.split('\n');
  
      // Crear el HTML de las descripciones
      const descriptionHTML = descriptionArray.map(element => `<p>${element}</p>`).join('');
  
      card.innerHTML = `
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          ${descriptionHTML}
        </div>
      `;
      return card;
    }
  
    const projectsContainer = document.querySelector("#section-projects .container-cards");
    const referencesContainer = document.querySelector("#section-references .container-cards");
    const experiencesContainer = document.querySelector("#section-experiences .container-cards");
  
    projects.forEach((project) => projectsContainer.appendChild(createCard(project)));
    references.forEach((reference) => referencesContainer.appendChild(createCardExp(reference)));
    experiences.forEach((experience) => experiencesContainer.appendChild(createCard(experience)));
  });
  