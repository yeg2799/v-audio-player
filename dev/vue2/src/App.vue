<template lang="pug">
#app
  VAudioPlayer(:vuePlayer="vuePlayer")
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import { VAudioPlayer } from '../../../src/components/index.ts'
import { AudioListMocks } from '../../../mock/audioList.mock'

export default defineComponent({
  components: {
    VAudioPlayer
  },
  setup() {
    const vuePlayer = {
      audioList: AudioListMocks,
      config: {
        muted: 'false',
        autoplay: false,
        volume: 50, // min 0 max 100
        controls: {
          prev: 1,
          next: false
        }
      }
    }

    return {
      vuePlayer
    }
  }
})
</script>

<style lang="scss">
@import '../../../src/assets/style/scss/app.scss';
</style>
