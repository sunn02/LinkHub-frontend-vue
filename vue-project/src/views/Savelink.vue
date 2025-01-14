<template>
    <div>
      <h2>Crear Enlace</h2>
      <input v-model="title" type="text" placeholder="Título del enlace" required />
      <input v-model="url" type="url" placeholder="URL del enlace" required />
      <input v-model="description" type="text" placeholder="Descripción" />
      <input v-model="tags" type="text" placeholder="Etiquetas (separadas por comas)" />
      <button @click="saveLink">Guardar Enlace</button>
      <button @click="goBack">Volver</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        url: '',
        description: '',
        tags: ''
      };
    },
    methods: {
      async saveLink() {
        const newLink = {
          title: this.title,
          url: this.url,
          description: this.description,
          tags: this.tags.split(',').map(tag => tag.trim())
        };
  
        try {
          const response = await fetch(`${API_URL}/links`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLink)
          });
          await response.json();
          this.$router.push({ name: 'home' });
        } catch (error) {
          console.error("Error al guardar el enlace:", error.message);
        }
      },
      goBack() {
        this.$router.push({ name: 'home' });
      }
    }
  };
  </script>
  