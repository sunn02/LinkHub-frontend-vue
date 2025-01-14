<template>
    <div>
      <h2>Detalles</h2>
      <div v-if="link">
        <p><strong>Título:</strong> {{ link.title }}</p>
        <p><strong>URL:</strong> <a :href="link.url" target="_blank">{{ link.url }}</a></p>
        <p><strong>Descripción:</strong> {{ link.description }}</p>
        <p><strong>Etiquetas:</strong> {{ link.tags.join(', ') }}</p>
        <div>
          <button @click="voteLink">Votar</button>
          <button @click="commentLink">Comentar</button>
        </div>
        <div>
          <p><strong>Votos:</strong> {{ link.votes || 0 }}</p>
        </div>
      </div>
      <div v-else>
        <p>Cargando detalles...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        link: null
      };
    },
    async created() {
      const { linkId } = this.$route.params;
      await this.loadLinkDetails(linkId);
    },
    methods: {
      async loadLinkDetails(linkId) {
        try {
          const link = await fetch(`${API_URL}/links/${linkId}`).then(res => res.json());
          this.link = link;
        } catch (error) {
          console.error("Error al cargar los detalles:", error.message);
        }
      },
      async voteLink() {
        try {
          const response = await fetch(`${API_URL}/links/vote/${this.link._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vote: 1 })
          });
          const updatedLink = await response.json();
          this.link.votes = updatedLink.votes;
        } catch (error) {
          console.error("Error al votar:", error.message);
        }
      },
      commentLink() {
        this.$router.push({ name: 'comment', params: { linkId: this.link._id } });
      }
    }
  };
  </script>
  