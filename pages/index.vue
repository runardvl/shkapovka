<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Кастомный шрифт</h1>
      <p class="subtitle-s">Гугл шрифт</p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
.subtitle-s {
  padding-bottom: 15px;
  @include body2;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Theater', 'PT Sans', sans-serif;
  display: block;
  margin-top: 15px;
  @include heading1;
}

.links {
  padding-top: 15px;
}
</style>
