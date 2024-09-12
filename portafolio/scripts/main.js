document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      {
        title: "javascript",
        img: "https://t4.ftcdn.net/jpg/03/19/57/69/360_F_319576972_faDKjUJxyoOn8rRA4tINl3sQ92XCHlKn.jpg",
        description: "curso intermedio",
        progreso: 60,
      },
      {
        title: "HTML5",
        img: "https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png",
        description: "curso intermedio",
        progreso: 70,
      },
      {
        title: "CSS",
        img: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-500x313.png",
        description: "curso intermedio",
        progreso: 40,
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
  
    function createCard({ title, img, description }, useProgressBar = false) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <img src="${img}" alt="${title}">
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          <p>${description}</p>
        </div>
      `;

      if (useProgressBar) {
        card.innerHTML += `
            <div class="progress-bar">
                <div class="progress-bar-fill" value="${progreso}" max="100">${progreso}%</div>
            </div>
        `;
      }
        const progressBarFill = card.querySelector(".progress-bar-fill");
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
  
    projects.forEach((project) => projectsContainer.appendChild(createCard(project, true)));
    references.forEach((reference) => referencesContainer.appendChild(createCardExp(reference)));
    experiences.forEach((experience) => experiencesContainer.appendChild(createCard(experience)));
  });
