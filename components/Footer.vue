<template>
  <div class="container">
    <footer class="footer">
      <ShkpvkLogo />
      <Navigation class="nav" />
    </footer>
  </div>
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
  margin-top: 32px;
  margin-bottom: 16px;
  .nav {
    padding-top: 16px;
  }
}
</style>
