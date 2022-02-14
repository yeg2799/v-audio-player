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

<style lang="scss" scoped>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
   }
</style>
