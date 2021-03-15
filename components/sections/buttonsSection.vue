<template>
  <div class="buttons-section container">
    <a
      href="https://instagram.com/shkapovka.ru"
      class="btn--filled gallery-page__btn"
      target="_blank"
    >
      {{ firstBtnText }}
    </a>
    <client-only>
      <button
        class="btn--outlined gallery-page__btn"
        @click.prevent="onClickHandler"
      >
        {{ secondBtnText }}
      </button>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSection',
  props: {
    firstBtnText: {
      type: String,
      default: '',
    },
    secondBtnText: {
      type: String,
      default: '',
    },
  },
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
  justify-content: center;
  grid-gap: 16px;
  @media (width > 960px) {
    grid-auto-flow: column;
  }
}
</style>
