<template lang="pug">
  .main-IndexPage
    v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam")
</template>

<script>
import VueAudioPlayer from '@/components/v-audio-player.vue';
export default {
  name: 'IndexPage',
  component: {
    VueAudioPlayer,
  }
}
</script>
