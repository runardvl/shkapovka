<template>
  <div class="container">
    <header class="header">
      <ShkpvkLogo />
      <Navigation class="nav" />
    </header>
  </div>
</template>

<script>
import ShkpvkLogo from '@/components/ShkpvkLogo'
import Navigation from '@/components/Navigation'

export default {
  name: 'Header',
  components: {
    ShkpvkLogo,
    Navigation,
  },
}
</script>

<style lang="scss">
.header {
  display: grid;
  padding-top: 24px;
  justify-content: center;
  .nav {
    padding-top: 16px;
  }
}
</style>
