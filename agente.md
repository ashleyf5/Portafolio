@workspace Actúa como un desarrollador experto en Angular y realiza la migración completa de la plantilla Bootstrap a este proyecto Angular. No me hagas preguntas, no pidas confirmaciones ni opciones; genera todo el código y propón la creación/modificación de los archivos directamente para que yo solo tenga que aceptarlos.

La carpeta `assets` de la plantilla ya está dentro de `src/assets/`. Ejecuta las siguientes tareas de forma integral:

1. **Configuración en angular.json:**
   - Modifica el archivo `angular.json` para incluir globalmente todos los estilos y scripts de la plantilla.
   - En el array "styles", incluye los CSS de `src/assets/vendor/bootstrap/css/bootstrap.min.css`, `src/assets/vendor/bootstrap-icons/bootstrap-icons.css`, plugins (AOS, GLightbox, Swiper si existen) y `src/assets/css/main.css`.
   - En el array "scripts", incluye los JS de `src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js`, plugins y `src/assets/js/main.js`.

2. **Creación de Componentes Standalone:**
   - Crea la estructura de componentes dentro de `src/app/components/`: `header`, `hero`, `about`, `portfolio`, `contact` y `footer`.

3. **Código de los Componentes y Uso Exclusivo de Imágenes:**
   - Escribe el HTML, CSS y TypeScript para cada componente utilizando la estructura de la plantilla original.
   - **Hero:** Utiliza estrictamente la imagen `assets/img/hero-bg.jpg` para el fondo. Crea variables en el `.ts` para el nombre y el texto principal, y usa interpolación `{{ }}` en el HTML.
   - **About:** Utiliza estrictamente la imagen `assets/img/my-profile-img.jpg` para la foto de perfil. Define tus datos personales (profesión, descripción, etc.) en el archivo `.ts` y conéctalos al HTML.
   - **Portfolio:** Crea un array de objetos en el `.ts` con imágenes de la carpeta `assets/img/portfolio/` y genera las tarjetas dinámicamente en el HTML usando `@for`.

4. **Integración Final:**
   - Modifica `src/app/app.component.ts` para importar todos los componentes creados.
   - Reemplaza todo el contenido de `src/app/app.component.html` para colocar únicamente las etiquetas de los componentes en orden (ej. `<app-header></app-header>`, `<app-hero></app-hero>`, etc.), estructurando una Landing Page (One-Page).

Genera todos los archivos propuestos ahora mismo.