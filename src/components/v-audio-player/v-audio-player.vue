<template lang="pug">
.v-audio-player
  v-audio-player-list
  v-audio-player-control-panel
  audio(ref="audioRef" :src="activeAudio.source" :muted="false" :autoplay="false")
</template>

<script lang="ts">
import { defineComponent, provide} from 'vue-demi'
import { useRoot, useAudioOperations } from '@/hooks/index.ts'
import VAudioPlayerList from '../v-audio-player-list/v-audio-player-list.vue'
import VAudioPlayerControlPanel from '../v-audio-player-control-panel/v-audio-player-control-panel.vue'

export default defineComponent({
  name: 'VAudioPlayer',
  components: {
    VAudioPlayerList,
    VAudioPlayerControlPanel
  },
  props: {
    audioList: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const { audioRef, soundRef, playAudio,playSelectedItemAudio,  pauseAudio, changeSoundLevel, resetSoundLevel, isPlayingAudio, soundLevel, soundLevelType } = useAudioOperations();
    const { setAudioList, audioList, activeAudio, activeAudioIndex, increaseActiveAudioIndex, decreaseActiveAudioIndex, setActiveAudioIndex } = useRoot()

    setAudioList(props.audioList)

    provide('operations', { audioRef, soundRef, playAudio, playSelectedItemAudio, pauseAudio, changeSoundLevel, resetSoundLevel, isPlayingAudio, soundLevel, soundLevelType })
    provide('root', { audioList, activeAudio, activeAudioIndex, increaseActiveAudioIndex, decreaseActiveAudioIndex, setActiveAudioIndex })

    return {
      audioRef,
      activeAudio,
    }
  }
})
</script>

<style lang="scss" src="./v-audio-player.scss" />
