<template lang="pug">
  .v-audio-player
    .player-button(@click="play") play
    .stop-sound(@click="stop") stop
    audio(ref="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
</template>

<script>
import { ref } from '@nuxtjs/composition-api';
export default {
  props: {

  },
  setup() {
    const audio = ref(null);
    const play = () => {
      audio.value.play();
    }
    const stop = () => {
      audio.value.pause();
    }

    return {
      play,
      audio,
      stop,
    }
  }
}
</script>

<style>

</style>
