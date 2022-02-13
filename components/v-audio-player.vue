<template lang="pug">
  .v-audio-player
    .sound-name {{ soundName }}
    .v-audio-buttons
      v-button(icon="muted" @clicked="mutedVolume()")
      v-button(icon="backward")
      v-button(@clicked="!isPlay && !autoplay ? play() : pause()" :icon="!isPlay && !autoplay ? 'play':'pause'" )
      v-button(icon="forward")
      v-button(icon="volume" @clicked="toggleMute()")
    .v-audio-bottom
      span(v-if="currentTime") {{ currentTime }}
      input(type="range" min="0" :max="maxRange" value="0" step="1" @input="setCurrentTime($event.target.value)")
      span(v-if="duration") {{ duration }}
    audio(ref="audio" :src="source" :muted="muted" :autoplay="autoplay" id="audio-player" preload="metadata")
    input(v-if="isOpenVolume" type="range" orient="vertical" min="0" max="100" :value="volumeRange" step="1" @change="handleVolumeChange")
</template>

<script>
import { computed, onMounted, ref } from '@nuxtjs/composition-api';
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
    soundName: {
      type: String,
      default: '',
    },
  },
  setup() {
    const audio = ref(null);
    const isPlay = ref(false);
    const isOpenVolume = ref(false);
    const currentTime = ref('00:00');
    const secCurrentTime = ref(0);
    const duration = ref(0);
    const maxRange = ref(0);
    const volumeRange = ref(100);

    const play = () => {
      audio.value.play();
      isPlay.value = true;
    }
    const pause = () => {
      audio.value.pause();
      isPlay.value = false;
    }

    const setCurrentTime = (time) => {
      audio.value.currentTime = time;
      let minute = Math.floor(time / 60);
      let second = time % 60;
      if (time >= 60) {
        if (second < 10) {
          second = '0' + second;
        }
        currentTime.value = minute + ':' + second.toFixed(0);
      } else {
        currentTime.value = '00:' + second.toFixed(0);
      }
    }
    const toggleMute = () => {
      isOpenVolume.value = !isOpenVolume.value;
    }
    const handleVolumeChange = (e) => {
      audio.value.muted = false;
      audio.value.volume = e.target.value / 100;
      volumeRange.value = e.target.value;
    }
    const mutedVolume = () => {
      audio.value.muted = !audio.value.muted;
    }
    onMounted(() => {
      audio.value = document.getElementById('audio-player');
      audio.value.addEventListener('loadedmetadata', () => {
          let secs = audio.value.duration;
          maxRange.value = secs;
          var hr  = Math.floor(secs / 3600);
          var min = Math.floor((secs - (hr * 3600))/60);
          var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

          if (min < 10){
            min = "0" + min;
          }
          if (sec < 10){
            sec  = "0" + sec;
          }
          duration.value = min + ':' + sec;
      });
      audio.value.addEventListener('ended', () => {
        isPlay.value = false;
      });
    });

    setInterval(() => {
      if (isPlay.value === true) {
        let time = audio.value.currentTime;
        secCurrentTime.value = time;
        let minute = Math.floor(time / 60);
        let second = time % 60;
        if (time >= 60) {
          if (second < 10) {
            second = '0' + second;
          }
          currentTime.value = minute + ':' + second.toFixed(0);
        } else {
          currentTime.value = '00:' + second.toFixed(0);
        }
      }
    }, 1000);




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
      volumeRange,
      currentTime,
      secCurrentTime,
      setCurrentTime,
      maxRange,
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
  .v-audio-bottom {
    display: inline-flex;
    align-items: center;
    input {
      margin: 0 10px;
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
