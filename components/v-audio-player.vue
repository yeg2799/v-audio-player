<template lang="pug">
  .v-audio-player
    v-button(btnText="Play" @clicked="play")
    v-button(btnText="Stop" @clicked="stop")
    audio(ref="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
</template>

<script>
import { ref } from '@nuxtjs/composition-api';
import VueButton from '@/components/v-button.vue';
export default {
  components: {
    VueButton,
  },
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
