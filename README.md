# Blog de Café ☕

🔗 Demo en vivo: https://blog-de-cafe-cl.netlify.app/
🚀 Deploy: Netlify

Sitio web moderno de un blog dedicado a compartir artículos, recetas y cursos sobre café.
El proyecto demuestra el uso de HTML5 semántico, CSS3 responsivo y buenas prácticas de optimización web, orientadas a rendimiento y mantenibilidad.

## 📋 Descripción del Proyecto

**Blog de Café** es una página web completa que ofrece:
- **Blog**: Artículos sobre técnicas de extracción, tipos de granos y recetas de café
- **Cursos**: Catálogo de cursos y talleres sobre preparación de café
- **Información**: Sección "Nosotros" con detalles sobre la empresa
- **Contacto**: Formulario para que los usuarios se comuniquen

El sitio está completamente **responsive** y optimizado para todos los dispositivos.

## 🎯 Características Principales

### Optimización Web
- **Lazy Loading**: Carga diferida de imágenes para mejor rendimiento
- **Preload/Prefetch**: Optimización de recursos críticos
- **Formatos de imagen múltiples**: Soporte para WebP y JPEG para compatibilidad

### Estructura HTML
- HTML5 semántico con estructura clara
- Meta etiquetas para SEO y responsividad
- Google Fonts integrado (Open Sans y PT Sans)
- Normalize.css para consistencia entre navegadores

### Diseño CSS
- Variables CSS para paleta de colores consistente
- Sistema de cuadrículas responsive
- Metodología BEM para clases CSS
- Fuentes tipográficas profesionales
- Colores:
  - Primario: `#784d3c` (marrón café)
  - Gris: `#e5e7e9`
  - Blanco: `#fff`
  - Negro: `#000000`

## 📁 Estructura del Proyecto

```
Blog_de_Cafe/
├── index.html              # Página principal con listado de blog
├── entrada.html            # Página de artículo individual
├── nosotros.html           # Información sobre la empresa
├── cursos.html             # Catálogo de cursos y talleres
├── contacto.html           # Formulario de contacto
├── README.md               # Este archivo
├── Blog_de_Cafe.code-workspace
├── css/
│   ├── normalize.css       # Normalización de estilos del navegador
│   └── style.css           # Estilos principales del proyecto
├── js/
│   └── modernizr.js        # Detección de características HTML5/CSS3
└── media/
    └── images/             # Imágenes del proyecto (blog, cursos, etc.)
```

## 🌐 Páginas Disponibles

### 1. **Página Principal** (`index.html`)
- Hero section con eslogan
- Listado de artículos del blog
- Sistema de navegación principal
- Footer con navegación secundaria

### 2. **Entrada de Blog** (`entrada.html`)
- Artículos detallados con títulos y contenido
- Imágenes a pantalla completa
- Párrafos de contenido estructurado
- Navegación consistente

### 3. **Sobre Nosotros** (`nosotros.html`)
- Información sobre la empresa
- Sección de imagen y texto
- Descripción de la misión y valores

### 4. **Cursos** (`cursos.html`)
- Catálogo de cursos disponibles
- Información de precios y cupos
- Descripciones detalladas de cada curso
- Botones de acción

### 5. **Contacto** (`contacto.html`)
- Formulario de contacto completo
- Campos: Nombre, Email, Mensaje
- Validación HTML5
- Diseño responsivo

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Marrón | `#784d3c` | Botones, headings, acentos |
| Gris | `#e5e7e9` | Fondos secundarios |
| Blanco | `#fff` | Fondos principales, texto claro |
| Negro | `#000000` | Texto principal |

## 🔤 Tipografía

- **Headings**: PT Sans (400, 700 pesos)
- **Párrafos**: Open Sans (normal e itálica)
- **Tamaño base**: 1rem = 10px (para cálculos facilitados)

## 📱 Responsividad

El proyecto utiliza técnicas modernas de CSS:
- `width: min(90%, 120rem)` para contenedores flexibles
- Viewport meta tag para dispositivos móviles
- Media queries para adaptación de diseño
- Imágenes responsivas con `picture` tags

## 🚀 Características Técnicas

### Optimización de Carga
```html
<!-- Prefetch para páginas futuras -->
<link rel="prefetch" href="nosotros.html" as="document">

<!-- Preload para recursos críticos -->
<link rel="preload" href="css/style.css" as="style">
```

### Formato de Imagen Responsivo
```html
<picture>
    <source srcset="media/images/blog1.webp" type="image/webp">
    <source srcset="media/images/blog1.jpg" type="image/jpeg">
    <img src="media/images/blog1.jpg" alt="imagen blog">
</picture>
```

### Lazy Loading
Las imágenes cargan bajo demanda con el atributo `loading="lazy"`.

## 📝 Convenciones de Código

- **Clases BEM**: `.bloque__elemento--modificador`
- **Utilidades**: `.no-margin`, `.centrar-texto`
- **Variables CSS**: `--fuenteHeading`, `--primario`, etc.
- **Comentarios en HTML**: Explicación de etiquetas de optimización

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos y responsive
- **JavaScript**: Modernizr para detección de características
- **Google Fonts**: Tipografía web profesional

## 💡 Puntos Destacados

✅ Código HTML semántico y bien estructurado  
✅ Estilos organizados y mantenibles  
✅ Optimización de rendimiento integrada  
✅ Totalmente responsivo (mobile-first)  
✅ Accesibilidad web considerada  
✅ Imágenes en múltiples formatos  

## 📌 Notas de Desarrollo

- El proyecto usa `box-sizing: border-box` para simplificar cálculos de dimensiones
- La raíz HTML establece `font-size: 62.5%` para facilitar conversiones rem/px
- Todos los enlaces internos son relativos para portabilidad
- El formulario de contacto está listo para integración backend

## 🔗 Navegación del Sitio

```
index.html
├── Nosotros → nosotros.html
├── Cursos → cursos.html
├── Contacto → contacto.html
└── Leer Entrada → entrada.html
```

Cada página tiene un footer con navegación completa para fácil acceso.

---

**Autor**: Cristian Lorenzo  
**Tipo de Proyecto**: Sitio Web Estático
**Año**: 2024
