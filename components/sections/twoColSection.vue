<template>
  <section class="container tc-section">
    <h2 class="tc-section__heading">Чем у нас можно заняться</h2>
    <div class="tc-section__wrapper">
      <!--Images block-->
      <div class="tc-section__images">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="tc-section__img-wrapper"
          @click="openLightboxOnSlide(index + 1)"
        >
          <img
            class="tc-section__img"
            :src="require(`~/assets/img/about/${img}.jpg`)"
            alt="Фотография территории базы отдыха Шкаповка в Азнакаевском районе"
          />
        </div>
      </div>
      <!--Text block-->
      <div class="tc-section__text">
        <ul class="tc-section__list">
          <li class="tc-section__list-item">
            Проведение выездной свадебной регистрации
          </li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">Прожарка шашлыка на мангале</li>
          <li class="tc-section__list-item">Готовка в котле на огне</li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">
            Аренда помещения на 30 и 60 посадочных мест
          </li>
          <li class="tc-section__list-item">
            Аренда бани на 40 человек, в парилке 10 человек
          </li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">Аренда тюбингов</li>
          <li class="tc-section__list-item">Аренда салазок/ледянок/лыж</li>
          <li class="tc-section__list-item">
            Катание на льду со своими коньками
          </li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">Экскурсия и общение с животными</li>
          <li class="tc-section__list-item">Катание на лошади, пони</li>
          <li class="tc-section__list-item">
            Катание на льду со своими коньками
          </li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">Покупка барана/коз живым весом</li>
          <li class="tc-section__list-item">
            Покупка мяса (баранье, козье, конина)
          </li>
        </ul>
      </div>
    </div>
    <div class="soc-section__buttons">
      <buttonsSection
        :first-btn-text="firstBtnText"
        :second-btn-text="secondBtnText"
      />
    </div>
    <client-only>
      <FsLightbox
        :toggler="toggler"
        :sources="[
          '~assets/img/about/about_image_1.jpg',
          '~assets/img/about/about_image_2.jpg',
          '~assets/img/about/about_image_3.jpg',
        ]"
        :slide="slide"
      />
    </client-only>
  </section>
</template>

<script>
import FsLightbox from 'fslightbox-vue'
import buttonsSection from '@/components/sections/buttonsSection'
export default {
  name: 'TwoColSection',
  components: { FsLightbox, buttonsSection },
  props: {
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
  data() {
    return { toggler: false, slide: 1 }
  },
  methods: {
    openLightboxOnSlide(number) {
      this.slide = number
      this.toggler = !this.toggler
    },
  },
}
</script>

<style lang="scss">
.tc-section {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    padding-top: 16px;
    padding-bottom: 64px;
    @media (width > 674px) {
      grid-gap: 32px;
      grid-auto-flow: column;
      grid-template-columns: max-content 1fr;
    }
    @media (width > 960px) {
      padding-top: 32px;
      padding-bottom: 128px;
    }
  }
  &__heading {
    color: $darkText;
    @include heading2;
  }
  &__images {
    display: grid;
    grid-gap: 16px;
    grid-row: 2/3;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: max-content;
    @media (width > 674px) {
      grid-row: 1/2;
      grid-gap: 32px;
      grid-template-columns: max-content;
      grid-template-rows: repeat(3, max-content);
    }
  }
  &__img {
    object-fit: cover;
    width: 136px;
    height: 96px;
    @media (width > 512px) {
      width: 232px;
      height: 160px;
    }
  }
  &__text {
    display: grid;
    grid-gap: 24px;
    @media (width > 960px) {
      grid-gap: 32px;
    }
  }
  &__list {
    display: grid;
    grid-gap: 8px;
    &-item {
      color: $darkText;
      @include body1;
    }
  }
}
</style>
