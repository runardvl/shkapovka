<template>
  <div class="container">
    <footer class="footer">
      <Navigation class="nav" />
      <ShkpvkLogo />
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
  grid-gap: 16px;
  margin-top: 64px;
  margin-bottom: 16px;
  @media (width > 960px) {
    margin-top: 128px;
    margin-bottom: 48px;
    grid-gap: 24px;
  }
}
</style>
