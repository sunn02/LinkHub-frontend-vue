<template>
  <div>
    <button @click="navigate('home')">Home</button>
    <button @click="navigate('savelink')">Crear Enlace</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(view) {
      this.$router.push({ name: view });
    }
  }
};
</script>
