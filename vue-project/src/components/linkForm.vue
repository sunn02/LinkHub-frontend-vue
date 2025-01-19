<template>
    <div>
      <input v-model="title" placeholder="Título del enlace" required />
      <input v-model="url" placeholder="URL del enlace" required />
      <input v-model="description" placeholder="Descripción del enlace" />
      <input v-model="tags" placeholder="Etiquetas (separadas por comas)" />
      <button @click="save">Guardar enlace</button>
    </div>
  </template>
  
  <script>
  import { saveNewLink } from "../api";
  
  export default {
    name: "LinkForm",
    data() {
      return {
        title: "",
        url: "",
        description: "",
        tags: "",
      };
    },
    methods: {
      async save() {
        const newLink = {
          title: this.title,
          url: this.url,
          description: this.description,
          tags: this.tags.split(",").map((tag) => tag.trim()),
        };
        await saveNewLink(newLink);
        this.$router.push("/");
      },
    },
  };
  </script>
  