<template lang="pug">
  .button(@click="handleClick")
    svg-sprite(v-if="icon" :icon="icon")
    .button-text(v-if="btnText") {{ btnText }}
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('clicked');
    }
    return {
      handleClick,
    }
  }
}
</script>

<style>

</style>
