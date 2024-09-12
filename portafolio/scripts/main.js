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
        title: "Diseño y fabricación de muebles a medida",
        img: "https://t4.ftcdn.net/jpg/01/97/91/84/360_F_197918481_oA3tZwzvHkfJphgN2vO34dTkOujTZBGG.jpg",
        description: "Diseño y creación de muebles personalizados para clientes particulares y comerciales. Incluye asesoramiento, diseño 3D, y fabricación artesanal.",
        duration: "1 año"
      },
      {
        title: "Consultoría financiera y contable para autónomos",
        img: "https://t4.ftcdn.net/jpg/03/10/18/85/360_F_310188505_6b5UmfZbi8wqX6vAfw2WlgSwI5GC4BxG.jpg",
        description: "Asesoramiento y gestión de cuentas, planificación financiera y presentación de impuestos para trabajadores autónomos.",
        duration: "8 meses"
      },
      {
        title: "Desarrollo de sitios web para Pymes",
        img: "https://t4.ftcdn.net/jpg/02/70/69/80/360_F_270698033_YuPrvgnMlgMteJSm68CJh9onLCXf8lC3.jpg",
        description: "Creación y mantenimiento de sitios web personalizados para pequeñas y medianas empresas. Incluyó optimización SEO, diseño responsivo y gestión de contenido.",
        duration: "10 meses"
      },
      // Agrega más experiencias si es necesario
    ];
  
    function createCard({ title, img, description, progreso }, useProgressBar = false) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <img src="${img}" alt="${title}">
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          <p>${description}</p>
        </div>
      `;
  
      if (useProgressBar && progreso !== undefined) {
        card.innerHTML += `
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width: ${progreso}%;"></div>
          </div>
        `;
      }
  
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
    const experiencesContainer = document.querySelector("#section-experiences .container-cards-exp");
  
    projects.forEach((project) => projectsContainer.appendChild(createCard(project, true)));
    references.forEach((reference) => referencesContainer.appendChild(createCardExp(reference)));
    experiences.forEach((experience) => experiencesContainer.appendChild(createCard(experience, false)));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const emailLink = document.querySelector('.container-contact-information a[href^="mailto:"]');
    const whatsappLink = document.querySelector('.container-contact-information a[href^="https://wa.me"]');
    const mapLink = document.querySelector('.container-contact-information a[href^="https://www.google.com/maps"]');

    emailLink.addEventListener('click', () => {
        console.log('Correo clickeado: ' + emailLink.href);
    });

    whatsappLink.addEventListener('click', () => {
        console.log('WhatsApp clickeado: ' + whatsappLink.href);
    });

    mapLink.addEventListener('click', () => {
        console.log('Mapa clickeado: ' + mapLink.href);
    });
});