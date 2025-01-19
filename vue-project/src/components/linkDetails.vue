<template>
  <div>
    <h2>Detalles</h2>
    <p><strong>Votos:</strong> {{ link.votes }}</p>
    <button @click="vote">Votar</button>
    
    <h3>Comentarios</h3>
    <div v-if="comments.length">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <ul>
          <li>{{ comment.content }}</li>
        </ul>
      </div>
    </div>
    <p v-else>No hay comentarios para mostrar.</p>
  </div>
  <textarea v-model="newComment" placeholder="Escribe tu comentario..." rows="4" cols="50"></textarea>
  <button @click="addComment">Enviar</button>
</template>

<script>
import { fetchLinkDetails, fetchComments, voteLink, commentLink } from "../api";

export default {
  name: "LinkDetails",
  data() {
    return {
      link: {}, 
      comments: [], 
      newComment: '',
    };
  },
  async mounted() {
    const linkId = this.$route.params.id;
    console.log("linkId obtenido de la URL:", linkId); 
    
    try {
      // Obtener detalles del enlace
      this.link = await fetchLinkDetails(linkId);
      console.log("Detalles del enlace:", this.link); // Consola para verificar los detalles del enlace

      // Obtener comentarios del enlace
      this.comments = await fetchComments(linkId);
      console.log("Comentarios del enlace:", this.comments); // Consola para verificar los comentarios
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  },
  methods: {
    async vote() {
      const linkId = this.$route.params.id;
      this.link = await voteLink(linkId); 
    },
    async addComment() {
      if (this.newComment.trim() === "") {
        alert("El comentario no puede estar vacío.");
        return;
      }

      const linkId = this.$route.params.id;
      
      try {
        const newComment = await commentLink(linkId, this.newComment);

        this.comments.push(newComment);
        
        this.newComment = "";
      } catch (error) {
        console.error("Error al agregar comentario:", error);
      }
  },
  }
};
</script>
