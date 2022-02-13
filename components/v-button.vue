<template lang="pug">
  .button(@click="handleClick")
    svg-sprite(:icon="icon")
    .button-text {{ btnText }}
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
      default: 'Button'
    },
    icon: {
      type: String,
      required: true,
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
