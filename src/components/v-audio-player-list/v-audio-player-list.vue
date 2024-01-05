<template lang="pug">
.v-audio-player-list
  .v-audio-player-list__item(v-for="(item, index) in audioList" :key="index")
    .v-audio-player-list__item-artist
      span {{ item.artist }} -
    .v-audio-player-list__item-music
      span {{ item.musicName }}
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue-demi'

export default defineComponent({
  name: 'VAudioPlayerList',
  setup() {
    const { audioList } = inject('root')

    console.log(audioList.value, 'audioList')

    return {
      audioList
    }
  }
})
</script>

<style lang="scss" src="./v-audio-player-list.scss" />
