<template lang="pug">
.v-audio-player-interface
  span {{ currentTime }}
  input(
    ref="audioRangeRef"
    type="range"
    min="0"
    :max="parseTimeToSeconds({ time: totalTime })"
    :value="parseTimeToSeconds({ time: currentTime })"
    @input="handleInputEvent"
  )
  span {{ totalTime }}
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue-demi'
import { timeParser } from '@/helpers/index.ts'

export default defineComponent({
  name: 'VAudioPlayerInterface',
  setup() {
    const currentTimeInterval = ref(null)
    const { parseTimeToSeconds } = timeParser()

    const { audioRef, totalTime, currentTime, calculateCurrentAudioTime, isPlayingAudio, updateAudioTime } = inject('operations')

    const handleInputEvent = async e => {
      await clearInterval(currentTimeInterval.value)
      await calculateCurrentAudioTime({ currentSec: e.target.value })
      await updateAudioTime({ currentTime: e.target.value })
      setCurrentTime()
    }

    onMounted(() => {
      setCurrentTime()
    })

    const setCurrentTime = () => {
      currentTimeInterval.value = setInterval(() => {
        if (isPlayingAudio.value) {
          calculateCurrentAudioTime({ currentSec: audioRef.value.currentTime })
        }
      }, 1000)
    }

    return {
      totalTime,
      currentTime,
      handleInputEvent,
      parseTimeToSeconds
    }
  }
})
</script>

<style lang="scss" src="./v-audio-player-interface.scss" />
