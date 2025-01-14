<template>
  <div>
    <input type="text" v-model="tagFilter" placeholder="Filtrar por etiqueta" />
    <button @click="showLinks">Filtrar</button>
    <div v-if="links.length">
      <div v-for="link in links" :key="link._id">
        <p><strong>Título:</strong> {{ link.title }}</p>
        <p><strong>URL:</strong> <a :href="link.url" target="_blank">{{ link.url }}</a></p>
        <p><strong>Descripción:</strong> {{ link.description }}</p>
        <p><strong>Etiquetas:</strong> {{ link.tags.join(', ') || 'Sin etiquetas' }}</p>
        <button @click="navigateToDetails(link._id)">Ver detalles</button>
      </div>
    </div>
    <div v-else>
      <p>No se encontraron enlaces.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [],
      tagFilter: ''
    };
  },
  methods: {
    async showLinks() {
      const url = this.tagFilter ? `${API_URL}/links/tags/${this.tagFilter}` : `${API_URL}/links`;
      try {
        const response = await fetch(url);
        const links = await response.json();
        this.links = links;
      } catch (error) {
        console.error("Error al cargar los enlaces:", error.message);
      }
    },
    navigateToDetails(linkId) {
      this.$router.push({ name: 'details', params: { linkId } });
    }
  },
  mounted() {
    this.showLinks();
  }
};
</script>
