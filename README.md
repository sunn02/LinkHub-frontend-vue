
# 🌟 Frontend Vue

Este repositorio contiene la versión del frontend del proyecto **LinkHub**, desarrollada con **Vue.js**.

## ✅ Requisitos Previos

- [Node.js](https://nodejs.org/) instalado en tu sistema.
- [Vue CLI](https://cli.vuejs.org/) instalado globalmente:
   ```bash
   npm install -g @vue/cli
   ```

---

## 🛠️ Cómo Instalar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sunn02/LinkHub-frontend-vue
   cd LinkHub-frontend-vue/vue-project
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## ▶️ Cómo Ejecutar

1. Inicia el servidor de desarrollo:
   ```bash
   npm run serve
   ```

2. Abre tu navegador y visita [http://localhost:8080](http://localhost:8080).

---

## 🚀 Cómo Desplegar

1. Genera una versión optimizada para producción:
   ```bash
   npm run build
   ```

2. Sube la carpeta `dist/` a cualquier servidor de hosting estático, como:
   - **Netlify**
   - **Vercel**
   - **GitHub Pages**
   - Cualquier servidor estático.

---

## 📜 Notas

- Este proyecto es una **Single Page Application (SPA)** que se conecta a un backend RESTful para manejar enlaces, comentarios y votos.
- Configura la URL del backend en el archivo `src/api.js`:
   ```javascript
   const API_URL = "http://localhost:3005";

---

## 🛠️ Herramientas Utilizadas

- **Vue Router**: Para gestionar la navegación entre las páginas.

