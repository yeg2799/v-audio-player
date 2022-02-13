<template>
  <component :is="require(`~/assets/icons/${icon}.svg?inline`)" class="icon" />
</template>

<script>
export default {
  name: 'SvgSprite',
  props: {
    icon: String,
  },
};
</script>
<style scoped>
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    object-fit: contain;
    pointer-events: none;
    user-select: none;
  }
</style>
