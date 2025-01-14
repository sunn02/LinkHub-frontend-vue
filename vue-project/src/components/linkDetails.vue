<template>
    <div>
      <h2>Detalles</h2>
      <p><strong>Votos:</strong> {{ link.votes || 0 }}</p>
      <button @click="vote">Votar</button>
      <h3>Comentarios</h3>
      <div v-if="comments.length">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <p><strong>Comentario:</strong> {{ comment.content }}</p>
          <p><strong>Fecha:</strong> {{ new Date(comment.createdAt).toLocaleString() }}</p>
        </div>
      </div>
      <p v-else>No hay comentarios para mostrar.</p>
    </div>
  </template>
  
  <script>
  import { fetchLinkDetails, fetchComments, voteLink } from "../services/api";
  
  export default {
    name: "LinkDetails",
    props: ["linkId"],
    data() {
      return {
        link: {},
        comments: [],
      };
    },
    async mounted() {
      this.link = await fetchLinkDetails(this.linkId);
      this.comments = await fetchComments(this.linkId);
    },
    methods: {
      async vote() {
        this.link = await voteLink(this.linkId);
      },
    },
  };
  </script>
  