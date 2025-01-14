<template>
    <div>
      <input v-model="tagFilter" placeholder="Filtrar por etiqueta" />
      <button @click="filterLinks">Filtrar</button>
      <div v-if="links.length">
        <div v-for="link in links" :key="link._id" class="link-item">
          <p><strong>Título:</strong> {{ link.title }}</p>
          <p><strong>URL:</strong> <a :href="link.url" target="_blank">{{ link.url }}</a></p>
          <p><strong>Descripción:</strong> {{ link.description }}</p>
          <p><strong>Etiquetas:</strong> {{ link.tags?.join(", ") || "Sin etiquetas" }}</p>
          <button @click="$emit('view-details', link._id)">Ver detalles</button>
        </div>
      </div>
      <p v-else>No se encontraron enlaces.</p>
    </div>
  </template>
  
  <script>
  import { fetchLinks } from "../services/api";
  
  export default {
    name: "LinksList",
    data() {
      return {
        links: [],
        tagFilter: "",
      };
    },
    async mounted() {
      this.links = await fetchLinks();
    },
    methods: {
      async filterLinks() {
        this.links = await fetchLinks(this.tagFilter);
      },
    },
  };
  </script>
  