<template lang="pug">
  .v-audio-player
    .v-audio-buttons
      v-button(icon="muted" @clicked="mutedVolume()")
      v-button(icon="backward")
      v-button(@clicked="!isPlay && !autoplay ? play() : pause()" :icon="!isPlay && !autoplay ? 'play':'pause'" )
      v-button(icon="forward")
      v-button(icon="volume" @clicked="toggleMute()")
    .v-audio-
      span(v-if="currentTime") {{ currentTime }}
      input(type="range" min="0" :max="duration" value="0" step="1" @input="setCurrentTime($event.target.value)")
      span(v-if="duration") {{ duration }}
    audio(ref="audio" :src="source" :muted="muted" :autoplay="autoplay")
    input(v-if="isOpenVolume" type="range" orient="vertical" min="0" max="100" value="0" step="1" @change="handleVolumeChange")
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api';
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
    muted: {
      type: Boolean,
      default: false,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const audio = ref(null);
    const isPlay = ref(false);
    const isOpenVolume = ref(false);
    const currentTime = ref(0);
    const play = () => {
      audio.value.play();
      isPlay.value = true;
    }
    const pause = () => {
      audio.value.pause();
      isPlay.value = false;
    }
    const duration = computed(() => {
        // let secs = document.getElementsByTagName('audio')[0].duration;
        // var hr  = Math.floor(secs / 3600);
        // var min = Math.floor((secs - (hr * 3600))/60);
        // var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

        // if (min < 10){
        //   min = "0" + min;
        // }
        // if (sec < 10){
        //   sec  = "0" + sec;
        // }

        // return min + ':' + sec;
        return '';
    });
    const setCurrentTime = (time) => {
      audio.value.currentTime = time;

      if (time > 60) {
        currentTime.value = (time / 60).toFixed(2);
      } else {
        currentTime.value = time;
      }

    }
    const toggleMute = () => {
      audio.value.muted = !audio.value.muted;
      isOpenVolume.value = !isOpenVolume.value;
    }
    const handleVolumeChange = (e) => {
      audio.value.volume = e.target.value / 100;
    }
    const mutedVolume = () => {
      audio.value.muted = !audio.value.muted;
    }

    return {
      isPlay,
      play,
      audio,
      pause,
      duration,
      handleVolumeChange,
      isOpenVolume,
      toggleMute,
      mutedVolume,
      currentTime,
      setCurrentTime,
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
  input[type=range]{
    width: 300px;
  }
  input[type=range][orient=vertical] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* Chromium */
    width: 8px;
    height: 175px;
    padding: 0 5px;
}
</style>
