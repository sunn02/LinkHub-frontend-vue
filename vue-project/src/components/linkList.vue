<template>
  <div>
    <!-- Filtrar automáticamente al escribir -->
    <input v-model="tagFilter" @input="filterLinks" placeholder="Filtrar por etiqueta" />
    
    <div v-if="links.length">
      <div v-for="link in links" :key="link._id" class="link-item">
        <p><strong>Título:</strong> {{ link.title }}</p>
        <p><strong>URL:</strong> <a :href="link.url" target="_blank">{{ link.url }}</a></p>
        <p><strong>Descripción:</strong> {{ link.description }}</p>
        <p><strong>Etiquetas:</strong> {{ link.tags?.join(", ") || "Sin etiquetas" }}</p>
        
        <router-link :to="`/details/${link._id}`">
          <button>Ver detalles</button>
        </router-link>
      </div>
    </div>
    <p v-else>No se encontraron enlaces.</p>
    <router-link :to="`/new-link`">
      <button>Añadir enlace</button>
    </router-link>
  </div>

</template>

<script>
import { fetchLinks } from "../api.js";

export default {
  name: "LinksList",
  data() {
    return {
      links: [], 
      tagFilter: "", // Filtro de etiqueta
    };
  },
  async mounted() {
    this.links = await fetchLinks(); // Cargar enlaces al montar
  },
  methods: {
    async filterLinks() {
      // Filtrar enlaces por etiqueta
      if (this.tagFilter) {
        this.links = await fetchLinks(this.tagFilter); // Filtrar por etiqueta
      } else {
        this.links = await fetchLinks(); // Si no hay filtro, mostrar todos los enlaces
      }
    },
  },
};
</script>
