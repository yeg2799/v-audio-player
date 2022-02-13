<template lang="pug">
  .main-IndexPage
    v-audio-player
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
