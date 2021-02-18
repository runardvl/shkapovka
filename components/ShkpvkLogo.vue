<template>
  <nuxt-link class="ShkpvkLogo" to="/" no-prefetch>
    <shkapovkaLogo class="ShkpvkLogo__svg" />
  </nuxt-link>
</template>

<script>
import shkapovkaLogo from '@/assets/svg/shkapovka-logo.svg?inline'
export default {
  name: 'ShkapovkaLogo',
  components: {
    shkapovkaLogo,
  },
}
</script>

<style>
.ShkpvkLogo {
  animation: 1s appear;
  margin: auto;
  display: grid;
  justify-content: center;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
