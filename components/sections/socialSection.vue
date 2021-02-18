<template>
  <div class="container">
    <section class="soc-section">
      <h2 class="soc-section__title">{{ title }}</h2>
      <div class="soc-section__images">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="soc-section__img-wrapper"
        >
          <img
            class="soc-section__img"
            :src="require(`~/assets/img/${img}.jpg`)"
            alt="Фотография территории базы отдыха Шкаповка в Азнакаевском районе"
          />
        </div>
      </div>
      <div class="soc-section__buttons">
        <button class="btn-filled soc-section__btn">
          {{ firstBtnText }}
        </button>
        <client-only>
          <button
            class="btn-outlined soc-section__btn"
            @click.prevent="onClickHandler"
          >
            {{ secondBtnText }}
          </button>
        </client-only>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SocialSection',
  props: {
    title: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => [],
    },
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
.soc-section {
  &__title {
    margin-top: 64px;
    @include heading2;
  }
  &__images {
    margin-top: 32px;
    display: grid;
    grid-gap: 20px;
    align-items: stretch;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    @media (width > 516px) {
      grid-template-columns: repeat(auto-fill, minmax(135px, 232px));
      grid-gap: 32px;
    }
  }
  &__img {
    max-width: 100%;
  }
  &__buttons {
    display: grid;
    margin-top: 32px;
    justify-content: center;
    grid-gap: 16px;
    @media (width > 960px) {
      grid-auto-flow: column;
      margin-top: 64px;
    }
  }
}
</style>
