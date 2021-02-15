<template>
  <shkapovkaLogo class="ShkpvkLogo" />
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
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
