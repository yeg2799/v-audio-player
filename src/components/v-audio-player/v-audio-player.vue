<template lang="pug">
.v-audio-player
  //- v-audio-player-list
  v-audio-player-control-panel
  audio(controls)
    source(src="horse.ogg" type="audio/ogg")
    source(src="horse.mp3" type="audio/mpeg")
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue-demi'
import { useRoot } from '@/hooks/index.ts'
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
    const { setAudioList, audioList } = useRoot()

    setAudioList(props.audioList)

    provide('root', { audioList })

    return {}
  }
})
</script>

<style lang="scss" src="./v-audio-player.scss" />
