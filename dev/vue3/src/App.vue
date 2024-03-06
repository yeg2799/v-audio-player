<template lang="pug">
VAudioPlayer(:vuePlayer="vuePlayer")
</template>

<script setup lang="ts">
import { VAudioPlayer } from '../../../src/components'
import { AudioListMocks } from '../../../mock/audioList.mock'

const vuePlayer = {
  audioList: AudioListMocks,
  config: {
    muted: false,
    autoplay: false,
    volume: 50, // min 0 max 100
    controls: {
      prev: true,
      next: true
    }
  }
}
</script>

<style lang="scss">
@import '../../../src/assets/style/scss/app.scss';
</style>
