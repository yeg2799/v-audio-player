<template lang="pug">
  .main-IndexPage
    v-audio-player(source="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3")
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
