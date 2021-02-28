<template>
  <div class="default">
    <Header />
    <Nuxt />
    <Footer />
    <BookingModal />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingModal from '@/components/modals/BookingModal'

export default {
  components: { Header, Footer, BookingModal },
  computed: {
    meta() {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no',
        },
        { hid: 'description', name: 'description', content: 'Главная' },
      ]
    },
  },
  watch: {
    async $route() {
      if (this.$store.state.vkImages1280.length === 0) {
        await this.$store.dispatch('fetch')
      }
      if (this.$store.state.animalsImages1280.length === 0) {
        await this.$store.dispatch('fetchAnimals')
      }
    },
  },
  head() {
    const canonical = `https://shkapovka.ru${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    return {
      meta: [...this.meta],
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
      ],
      link: [{ rel: 'canonical', href: canonical }],
    }
  },
}
</script>

<style lang="scss">
.default {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  position: relative;
}
</style>
