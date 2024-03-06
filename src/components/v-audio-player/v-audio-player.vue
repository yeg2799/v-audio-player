<template lang="pug">
.v-audio-player
  v-audio-player-list
  v-audio-player-control-panel
  v-audio-player-interface

  //audioRef
  audio(ref="audioRef" :src="activeAudio.source" :muted="false" :autoplay="false" preload="metadata")
</template>

<script lang="ts">
import { defineComponent, provide, onMounted, watch } from 'vue-demi'
import { useRoot, useAudioOperations } from '@/hooks/index.ts'
import VAudioPlayerList from '../v-audio-player-list/v-audio-player-list.vue'
import VAudioPlayerControlPanel from '../v-audio-player-control-panel/v-audio-player-control-panel.vue'
import VAudioPlayerInterface from '../v-audio-player-interface/v-audio-player-interface.vue'

export default defineComponent({
  name: 'VAudioPlayer',
  components: {
    VAudioPlayerList,
    VAudioPlayerControlPanel,
    VAudioPlayerInterface
  },
  props: {
    vuePlayer: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const {
      setAudioConfig,
      config,
      audioRef,
      soundRef,
      playAudio,
      playSelectedItemAudio,
      pauseAudio,
      changeSoundLevel,
      resetSoundLevel,
      isPlayingAudio,
      soundLevel,
      soundLevelType,
      calculateTotalAudioTime,
      calculateCurrentAudioTime,
      totalTime,
      currentTime,
      updateAudioTime
    } = useAudioOperations()

    const {
      setAudioList,
      audioList,
      activeAudio,
      activeAudioIndex,
      increaseActiveAudioIndex,
      decreaseActiveAudioIndex,
      setActiveAudioIndex
    } = useRoot()

    setAudioList(props.vuePlayer.audioList)
    setAudioConfig(props.vuePlayer.config)

    onMounted(() => {
      audioRef.value.addEventListener('loadedmetadata', () => {
        calculateTotalAudioTime({ durationSec: audioRef.value.duration })
      })
    })

    provide('operations', {
      config,
      audioRef,
      soundRef,
      playAudio,
      playSelectedItemAudio,
      pauseAudio,
      changeSoundLevel,
      resetSoundLevel,
      isPlayingAudio,
      soundLevel,
      soundLevelType,
      calculateTotalAudioTime,
      calculateCurrentAudioTime,
      totalTime,
      currentTime,
      updateAudioTime
    })
    provide('root', {
      audioList,
      activeAudio,
      activeAudioIndex,
      increaseActiveAudioIndex,
      decreaseActiveAudioIndex,
      setActiveAudioIndex
    })

    watch(isPlayingAudio, item => {
      if (item) {
        emit('on-played')
      } else {
        emit('on-paused')
      }
    })

    return {
      audioRef,
      activeAudio
    }
  }
})
</script>

<style lang="scss" src="./v-audio-player.scss" />
