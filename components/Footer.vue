<template>
  <footer class="footer">
    <div class="container">
      <Navigation class="footer__nav" />
      <ShkpvkLogo class="footer__logo" />
    </div>
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
  grid-gap: 16px;
  position: relative;
  padding-bottom: 32px;
  @media (width > 960px) {
    padding-bottom: 48px;
    grid-gap: 24px;
  }
  &__logo {
    position: relative;
    margin-top: 24px;
  }
  &__nav {
    position: relative;
  }
}
</style>
