<template lang="pug">
  .v-player-list-wrapper
    .v-player-list-item(v-for="(sound, index) in soundList" :key="index" @click="play(sound)")
      .v-player-list-item-icon
        svg-sprite(icon="music")
      .v-player-list-item-text {{ sound.title }}
</template>

<script>
export default {
  props: {
    soundList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const play = (sound) => {
      emit('play', sound);
    }
    return {
      play,
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-player-list-wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 0.5rem;
    padding: 10px;
    height: 200px;
    overflow: scroll;
    .v-player-list-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #fafafa;
      border-bottom: 1px solid #000;
      padding: 5px;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background-color: #ddd;
      }
      .v-player-list-item-icon {
        display: inline-flex;
        align-items: center;
      }
      .v-player-list-item-text {
        margin: 0 10px;
      }
    }
  }
</style>
