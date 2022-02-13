<template lang="pug">
  .v-audio-player
    v-button(btnText="Play" @clicked="play" icon="play")
    input( type="range" id="cowbell" name="cowbell"  min="0" max="100" value="90" step="1")
    v-button(btnText="Pause" @clicked="pause" icon="pause")
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
    const pause = () => {
      audio.value.pause();
    }

    return {
      play,
      audio,
      pause,
    }
  }
}
</script>

<style>

</style>
