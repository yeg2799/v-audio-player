<template lang="pug">
#app
  VAudioPlayer
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { VAudioPlayer } from '../../../src/components/index'

export default Vue.extend({
  components: {
    VAudioPlayer
  }
})
</script>

<style lang="scss">
@import '../../../src/assets/style/scss/app.scss';
</style>
