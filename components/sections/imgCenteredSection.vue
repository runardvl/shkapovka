<template>
  <section class="ic-section">
    <div class="container">
      <!-- image block-->
      <img
        class="ic-section__image"
        :src="require(`~/assets/img/main-img_3.jpg`)"
        alt="Ферма на базе отдыха Шкаповка"
      />
      <!-- text block-->
      <div class="ic-section__offer">
        <h2 class="ic-section__title">Фотосессии с животными</h2>
        <p class="ic-section__subtitle">
          На базе отдыха козлики, барашки, кролики, кошки, лошади, ослики и
          собаки, которые поучаствуют в вашей фотосессии
        </p>
        <button
          class="btn--filled ic-section__btn"
          @click.prevent="onClickHandler"
        >
          Забронировать
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImgCenteredSection',
  methods: {
    onClickHandler() {
      this.$modal.show('bookingModal')
    },
  },
}
</script>

<style lang="scss">
.ic-section {
  display: block;
  background-color: $white;
  padding: $spacer64 16px $spacer64 16px;
  position: static;
  @media (width > 960px) {
    position: relative;
    padding: $spacer128;
  }
  &__image {
    padding-bottom: 0;
    @media (width > 960px) {
      padding-bottom: 284px;
    }
  }
  &__offer {
    position: static;
    @media (width > 960px) {
      position: absolute;
      bottom: 128px;
      left: 50%;
      margin-left: -72px;
    }
  }
  &__title {
    margin-top: 32px;
    @include heading2;
    @media (width > 960px) {
      margin-top: 64px;
    }
  }
  &__subtitle {
    margin-top: 40px;
    max-width: 420px;
    @media (width > 960px) {
      margin-top: 16px;
    }
  }
  &__btn {
    margin-top: 32px;
  }
}
</style>
