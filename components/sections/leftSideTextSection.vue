<template>
  <div class="container">
    <section class="rs-section">
      <!-- offer block-->
      <div class="rs-section__offer">
        <h2 class="rs-section__title">{{ title }}</h2>
        <p class="rs-section__subtitle">
          {{ subtitle }}
        </p>
        <button
          class="btn--filled rs-section__btn"
          @click.prevent="onClickHandler"
        >
          {{ btnText }}
        </button>
      </div>
      <!-- image block-->
      <img
        class="rs-section__image"
        :src="require(`~/assets/img/${sectionImage}.jpg`)"
        :alt="imgAltText"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'LeftSideTextSection',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
    sectionImage: {
      type: String,
      default: '',
    },
    imgAltText: {
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
.rs-section {
  display: grid;
  justify-content: space-between;
  grid-auto-flow: row;
  margin-top: $spacer64;
  margin-bottom: $spacer64;
  @media (width > 960px) {
    grid-auto-flow: column;
    margin-top: $spacer128;
    margin-bottom: $spacer128;
  }
  &__offer {
    max-width: 407px;
    display: grid;
    align-content: center;
  }
  &__title {
    margin-top: 16px;
    @include heading2;
    @media (width > 960px) {
      margin-top: 0;
    }
  }
  &__subtitle {
    margin-top: 8px;
    @media (width > 960px) {
      margin-top: 16px;
    }
  }
  &__btn {
    margin-top: 32px;
    @media (width > 960px) {
      margin-top: 40px;
    }
  }
  &__image {
    grid-row-start: 1;
  }
}
</style>
