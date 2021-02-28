<template>
  <div class="simple-layout">
    <woodPattern class="simple-layout__svg" />
    <Nuxt class="simple-layout__content" />
  </div>
</template>

<script>
import woodPattern from '@/assets/svg/wood-pattern.svg?inline'

export default {
  name: 'SimpleLayout',
  components: {
    woodPattern,
  },
}
</script>

<style lang="scss">
.simple-layout {
  position: relative;
  overflow: hidden;
  &__svg {
    position: absolute;
    top: 0;
    right: 0;
    height: 1500px;
    width: auto;
    z-index: 0;
  }
  &__content {
    position: relative;
  }
}
</style>
