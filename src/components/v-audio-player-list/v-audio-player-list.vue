<template lang="pug">
.v-audio-player-list
  .v-audio-player-list__item(
    v-for="(item, index) in audioList"
    :key="index"
    :class="[activeItemClass(index), nextItemClass(index), prevItemClass(index)]"
    @click="handleClickEvent(item, index)"
  )
    .v-audio-player-list__item-poster(v-if="item.poster")
      img(:src="item.poster")
    .v-audio-player-list__item-artist
      .v-audio-player-list__item-artist-name(v-if="item.artistName")
        span {{ item.artistName }}
      .v-audio-player-list__item-art(v-if="item.musicName")
        span {{ item.musicName }}
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue-demi'

export default defineComponent({
  name: 'VAudioPlayerList',
  setup() {
    const { audioList, activeAudioIndex, setActiveAudioIndex } = inject('root')
    const { playSelectedItemAudio, isPlayingAudio, pauseAudio } = inject('operations')

    const activeItemClass = index => {
      return { 'v-audio-player-list__item--active': index === activeAudioIndex.value }
    }

    const nextItemClass = index => {
      if (audioList.value.length - 1 === activeAudioIndex.value) {
        return { 'v-audio-player-list__item--next': index === 0 }
      }

      return { 'v-audio-player-list__item--next': index === activeAudioIndex.value + 1 }
    }

    const prevItemClass = index => {
      if (activeAudioIndex.value === 0) {
        return { 'v-audio-player-list__item--prev': index === audioList.value.length - 1 }
      }

      return { 'v-audio-player-list__item--prev': index === activeAudioIndex.value - 1 }
    }

    const handleClickEvent = async (item, index) => {
      if (index === activeAudioIndex.value && isPlayingAudio.value) {
        pauseAudio()

        return
      }

      await setActiveAudioIndex(index)
      playSelectedItemAudio(item)
    }

    return {
      audioList,
      activeItemClass,
      activeAudioIndex,
      nextItemClass,
      prevItemClass,
      handleClickEvent
    }
  }
})
</script>

<style lang="scss" src="./v-audio-player-list.scss" />
