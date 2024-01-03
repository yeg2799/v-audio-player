<template lang="pug">
.v-audio-player
  button(type="button") Prev
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'VAudioPlayer',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" src="./v-audio-player.scss" />
