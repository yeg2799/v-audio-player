<template lang="pug">
.v-audio-player-control-panel
  // Prev Button
  svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.PREV)")
    path(d='M18 17L10 12L18 7V17Z' fill='#000000')
    path(d='M6 7H9V17H6V7Z' fill='#000000')


  // Play Button
  template(v-if="!isPlayingAudio")
   svg(xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.PLAY)")
    rect(width='24' height='24' fill='white')
    path(fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z' fill='#323232')

  //Pause Button
  template(v-else)
    svg(xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.PAUSE)")
      rect(width='24' height='24' fill='white')
      path(fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM14 8C14.5523 8 15 8.44772 15 9L15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15L13 9C13 8.44772 13.4477 8 14 8ZM10 8C10.5523 8 11 8.44772 11 9L11 15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15L9 9C9 8.44772 9.44772 8 10 8Z' fill='#323232')

  //Next Button
  svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.NEXT)")
    path(d='M6 17L14 12L6 7V17Z' fill='#000000')
    path(d='M18 7H15V12V17H18V7Z' fill='#000000')
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue-demi'
import { processEnum } from '@/enums'

export default defineComponent({
  name: 'VAudioPlayerControlPanel',
  setup() {
    const { increaseActiveAudioIndex, decreaseActiveAudioIndex } = inject('root');
    const { playAudio, pauseAudio, isPlayingAudio } = inject('operations');

    const clickedEvent = async event => {
      if(event === processEnum.PLAY) {
        playAudio()
      }

      if(event === processEnum.PAUSE) {
        pauseAudio()
      }

      if(event === processEnum.NEXT) {
        await increaseActiveAudioIndex();
        playAudio();
      }

      if(event === processEnum.PREV) {
        await decreaseActiveAudioIndex();
        playAudio();
      }
    }

    return {
      processEnum,
      clickedEvent,
      isPlayingAudio,
    }
  }
})
</script>
