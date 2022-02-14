<template lang="pug">
  .v-audio-player
    .sound-name(v-if="soundName && !isMultiple") {{ soundName }}
    v-player-list(v-if="isMultiple && soundList.length > 0" :soundList="soundList" :source="audio ? audio.src : source" @play="playList")
    .v-audio-buttons
      v-button(icon="muted" @clicked="mutedVolume()")
      v-button(icon="backward" v-if="isMultiple" @clicked="backwardSound()")
      v-button(@clicked="!isPlay && !autoplay ? play() : pause()" :icon="!isPlay && !autoplay ? 'play':'pause'" )
      v-button(icon="forward" v-if="isMultiple" @clicked="forwardSound()")
      .volume-button
        v-button(icon="volume" @clicked="toggleMute()")
        input(v-if="isOpenVolume" type="range" orient="vertical" min="0" max="100" :value="volumeRange" step="1" @change="handleVolumeChange")
    .v-audio-bottom
      span(v-if="currentTime") {{ currentTime }}
      input(type="range" min="0" :max="maxRange" :value="currentTimeRange" step="1" @input="setCurrentTime($event.target.value)")
      span(v-if="duration") {{ duration }}
    audio(ref="audio" :src="source" :muted="muted" :autoplay="autoplay" id="audio-player" preload="metadata")
</template>

<script>
import { computed, onMounted, ref } from '@nuxtjs/composition-api';
import VueButton from '@/components/v-button.vue';
import VuePlayerList from '@/components/v-player-list.vue';
export default {
  components: {
    VueButton,
    VuePlayerList,
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
    isMultiple: {
      type: Boolean,
      default: false,
    },
    soundList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const audio = ref(null);
    const isPlay = ref(false);
    const isOpenVolume = ref(false);
    const currentTime = ref('00:00');
    const currentTimeRange = ref(0);
    const duration = ref(0);
    const maxRange = ref(0);
    const volumeRange = ref(100);

    const play = () => {
      audio.value.play();
      isPlay.value = true;
    }
    const playList = (sound) => {
      audio.value.src = sound.source;
      audio.value.play();
      isPlay.value = true;
      isOpenVolume.value = false;
      volumeRange.value = 100;
      audio.value.volume = 1;
    }
    const pause = () => {
      audio.value.pause();
      isPlay.value = false;
    }
    const forwardSound = () => {
      let index = props.soundList.findIndex(sound => sound.source === audio.value.src);
      if (index < props.soundList.length - 1) {
        index++;
        playList(props.soundList[index]);
      } else {
        playList(props.soundList[0]);
      }
    }
    const backwardSound = () => {
      let index = props.soundList.findIndex(sound => sound.source === audio.value.src);
      if (index > 0) {
        index--;
        playList(props.soundList[index]);
      } else {
        playList(props.soundList[props.soundList.length - 1]);
      }
    }

    const setCurrentTime = (time) => {
      audio.value.currentTime = time;
      let minute = Math.floor(time / 60);
      let second = time % 60;

      if (second < 10) {
        second = '0' + second.toFixed(0);
      } else {
         second = second.toFixed(0);
      }

      if (time >= 60) {
        currentTime.value = minute + ':' + second;
      } else {
        currentTime.value = '00:' + second;
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
        currentTimeRange.value = Math.floor(time).toString();
        let minute = Math.floor(time / 60);
        let second = time % 60;

        if (second < 10) {
          second = '0' + second.toFixed(0);
        } else {
          second = second.toFixed(0);
        }

        if (time >= 60) {
          currentTime.value = minute + ':' + second;
        } else {
          currentTime.value = '00:' + second;
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
      currentTimeRange,
      setCurrentTime,
      maxRange,
      playList,
      forwardSound,
      backwardSound,
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
  }
  .v-audio-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
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
  .volume-button {
    position: relative;

  }
  input[type=range][orient=vertical] {
      writing-mode: bt-lr; /* IE */
      -webkit-appearance: slider-vertical; /* Chromium */
      width: 8px;
      height: 100px;
      padding: 0 5px;
      position: absolute;
      bottom: 0;
      right: 0;
    }

</style>
