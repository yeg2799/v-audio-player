<template lang="pug">
  .layout
    Nuxt
</template>

<script>
import { ref } from '@nuxtjs/composition-api';
export default {
  setup() {
    const data = ref('emre');
    return {
      data
    }
  }
}
</script>

<style>

</style>
