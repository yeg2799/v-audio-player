<template lang="pug">
  .v-audio-player
    .v-audio-buttons
      v-button(icon="backward")
      v-button(@clicked="!isPlay ? play() : pause()" :icon="!isPlay ? 'play':'pause'" )
      v-button(icon="forward")
    .v-audio-
      input(type="range" id="cowbell" name="cowbell"  min="0" :max="duration" value="0" step="1")
      span(v-if="duration") {{ duration }}
    audio(ref="audio" :src="source")
</template>

<script>
import { computed, nextTick, onMounted, ref } from '@nuxtjs/composition-api';
import VueButton from '@/components/v-button.vue';
export default {
  components: {
    VueButton,
  },
  props: {
    source: {
      type: String,
      required: true,
      default: '',
    },
  },
  setup() {
    const audio = ref(null);
    const isPlay = ref(false);
    const play = () => {
      audio.value.play();
      isPlay.value = true;
    }
    const pause = () => {
      audio.value.pause();
      isPlay.value = false;
    }
    const duration = computed(() => {
        let secs = document.getElementsByTagName('audio')[0].duration;
        var hr  = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600))/60);
        var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

        if (min < 10){
          min = "0" + min;
        }
        if (sec < 10){
          sec  = "0" + sec;
        }

        return min + ':' + sec;
    });

    return {
      isPlay,
      play,
      audio,
      pause,
      duration,
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-audio-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
  }
  .v-audio-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    .button {
      margin: .5rem;
    }
  }
</style>
