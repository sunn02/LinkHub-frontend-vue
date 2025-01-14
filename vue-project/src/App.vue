<template>
  <div id="app">
    <h1>Gestión de Enlaces</h1>
    <LinksList @view-details="viewDetails" />
    <LinkDetails v-if="selectedLinkId" :linkId="selectedLinkId" />
  </div>
</template>

<script>
import LinksList from "./components/linkList.vue";
import LinkDetails from "./components/linkDetails.vue";

export default {
  name: "App",
  components: { LinksList, LinkDetails },
  data() {
    return {
      selectedLinkId: null,
    };
  },
  methods: {
    viewDetails(linkId) {
      this.selectedLinkId = linkId;
    },
  },
};
</script>


