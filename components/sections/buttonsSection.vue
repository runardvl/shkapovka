<template>
  <div class="buttons-section container">
    <nuxt-link to="/contacts" class="btn--filled gallery-page__btn">
      Подписаться на нас
    </nuxt-link>
    <client-only>
      <button
        class="btn--outlined gallery-page__btn"
        @click.prevent="onClickHandler"
      >
        Связаться с нами
      </button>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSection',
  methods: {
    onClickHandler() {
      this.$modal.show('bookingModal')
    },
  },
}
</script>

<style lang="scss">
.buttons-section {
  position: relative;
  z-index: 1;
  display: grid;
  margin-top: 32px;
  justify-content: center;
  grid-gap: 16px;
  @media (width > 960px) {
    grid-auto-flow: column;
    margin-top: 64px;
  }
}
</style>
