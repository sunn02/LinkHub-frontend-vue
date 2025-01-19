<template>
  <div id="app">
    <router-view></router-view>
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


