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
        <buttonsSection
          :first-btn-text="firstBtnText"
          :second-btn-text="secondBtnText"
        />
      </div>
    </section>
  </div>
</template>

<script>
import buttonsSection from '@/components/sections/buttonsSection'
// import woodPattern from '@/assets/svg/wood-pattern.svg?inline'

export default {
  name: 'SocialSection',
  components: {
    buttonsSection,
    // woodPattern,
  },
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
  position: relative;
  &__title {
    margin-top: 64px;
    position: relative;
    z-index: 1;
    @include heading2;
  }
  &__images {
    margin-top: 32px;
    @include images-grid;
    @media (width > 960px) {
      margin-top: 48px;
    }
  }
  &__buttons {
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
  &__pattern {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
  }
}
</style>
