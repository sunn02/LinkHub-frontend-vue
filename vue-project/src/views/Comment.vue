<template>
    <div>
      <h2>Comentar</h2>
      <textarea v-model="comment" placeholder="Escribe tu comentario aquí"></textarea>
      <button @click="submitComment">Enviar</button>
      <button @click="goBack">Volver</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comment: ''
      };
    },
    methods: {
      async submitComment() {
        const { linkId } = this.$route.params;
        if (!this.comment) {
          alert("El comentario no puede estar vacío.");
          return;
        }
        try {
          await fetch(`${API_URL}/comments/${linkId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: this.comment })
          });
          this.$router.push({ name: 'details', params: { linkId } });
        } catch (error) {
          console.error("Error al enviar el comentario:", error.message);
        }
      },
      goBack() {
        const { linkId } = this.$route.params;
        this.$router.push({ name: 'details', params: { linkId } });
      }
    }
  };
  </script>
  