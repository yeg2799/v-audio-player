<template lang="pug">
.v-audio-player
  //- v-audio-player-list
  v-audio-player-control-panel
  audio(ref="audio" :src="`https://dinlehome.files.wordpress.com/2021/03/kor-official-music-video-kron1k.mp3`" :muted="false" :autoplay="false" id="audio-player" preload="metadata")
</template>

<script lang="ts">
import { defineComponent, provide, ref, onMounted } from 'vue-demi'
import { useRoot, useAudioOperations } from '@/hooks/index.ts'
// import VAudioPlayerList from '../v-audio-player-list/v-audio-player-list.vue'
import VAudioPlayerControlPanel from '../v-audio-player-control-panel/v-audio-player-control-panel.vue'

export default defineComponent({
  name: 'VAudioPlayer',
  components: {
    // VAudioPlayerList,
    VAudioPlayerControlPanel
  },
  props: {
    audioList: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const { audio, playAudio, pauseAudio, isPlayingAudio } = useAudioOperations();

    const { setAudioList, audioList } = useRoot()

    setAudioList(props.audioList)

    provide('root', { audioList })
    provide('operations', { audio, playAudio, pauseAudio, isPlayingAudio })

    return {
      audio,
    }
  }
})
</script>

<style lang="scss" src="./v-audio-player.scss" />
