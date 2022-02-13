<template lang="pug">
  .button(@click="handleClick")
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
