<template>
  <footer class="footer">
    <ShkpvkLogo />
    <Navigation class="nav" />
  </footer>
</template>

<script>
import Navigation from '@/components/Navigation'
import ShkpvkLogo from '@/components/ShkpvkLogo'

export default {
  name: 'Footer',
  components: {
    Navigation,
    ShkpvkLogo,
  },
}
</script>

<style lang="scss">
.footer {
  display: grid;
  margin-bottom: 16px;
  .nav {
    padding-top: 16px;
  }
}
</style>
