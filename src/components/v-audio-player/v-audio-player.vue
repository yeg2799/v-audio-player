<template lang="pug">
.v-audio-player
  v-audio-player-list
  v-audio-player-control-panel
  .v-audio-player__info
    span Aktif olan ses itemının bilgileri burda gösterilecek
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi'
import { useRoot } from '@/hooks/index.ts'
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
    const { setAudioList } = useRoot()

    setAudioList(props.audioList)

    return {}
  }
})
</script>

<style lang="scss" src="./v-audio-player.scss" />
