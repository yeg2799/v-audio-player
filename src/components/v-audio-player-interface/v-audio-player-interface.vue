<template lang="pug">
.v-audio-player-interface
  span {{ currentTime }}
  input(ref="audioRangeRef" type="range" min="0" max="100" @input="handleInputEvent")
  span {{ totalTime }}
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue-demi'

export default defineComponent({
  name: 'VAudioPlayerInterface',
  setup() {
    const {  audioRef, totalTime, currentTime, calculateCurrentAudioTime, isPlayingAudio } = inject('operations')

    const handleInputEvent = e => {
      console.log(e)
    }

    onMounted(() => {
      setInterval(() => {
        if(isPlayingAudio.value) {
          calculateCurrentAudioTime({ currentSec: audioRef.value.currentTime })
        }
      },1000)

    })

    return {
      totalTime,
      currentTime,
      handleInputEvent
    }
  }
})
</script>

<style lang="scss" src="./v-audio-player-interface.scss" />
