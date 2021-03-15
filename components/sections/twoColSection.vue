<template>
  <section class="tc-section">
    <div class="tc-section__heading-wrap">
      <h2 class="tc-section__heading container">Чем у нас можно заняться</h2>
    </div>
    <div class="tc-section__wrapper container">
      <!--Images block-->
      <div class="tc-section__images">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="tc-section__img-wrapper"
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
        <span class="tc-section__list-heading"
          ><strong>В любое время года</strong></span
        >
        <ul class="tc-section__list">
          <li class="tc-section__list-item">
            Проведение выездной свадебной регистрации молодожёнов
          </li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">
            Аренда помещения на 30 и 60 посадочных мест
          </li>
          <li class="tc-section__list-item">
            Фотосессии с животными (козлики, барашки, кролики, кошки, лошади,
            ослики и собаки)
          </li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">Катание на лошадях и осликах</li>
          <li class="tc-section__list-item">
            Контактный сельскохозяйственный зоопарк
          </li>
        </ul>
        <span class="tc-section__list-heading"><strong>Летом</strong></span>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">Аренда тюбингов</li>
          <li class="tc-section__list-item">Аренда салазок/ледянок/лыж</li>
          <li class="tc-section__list-item">
            Катание на льду со своими коньками
          </li>
        </ul>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">
            Жилые дома с мангальной зоной в летний период*
          </li>
          <li class="tc-section__list-item">
            Аренда бани на 40 человек, в парилке 10 человек в летний период*
          </li>
          <li class="tc-section__list-item">
            Аренда катамаранов и лодок для прогулок по искусственному водоёму
          </li>
        </ul>
        <span class="tc-section__list-heading"><strong>Зимой</strong></span>
        <ul class="tc-section__list">
          <li class="tc-section__list-item">
            Аренда тюбингов, салазок, ледянок, лыж
          </li>
          <li class="tc-section__list-item">
            Катание на льду со своими коньками
          </li>
        </ul>
        <span class="tc-section__list-heading"
          ><strong>При наличии</strong></span
        >
        <ul class="tc-section__list">
          <li class="tc-section__list-item">Покупка барана/коз живым весом</li>
          <li class="tc-section__list-item">
            Покупка мяса (баранина, конина, козы)
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TwoColSection',
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
  padding-top: $spacer32;
  padding-bottom: $spacer64;
  @media (width > 960px) {
    padding-top: $spacer64;
    padding-bottom: $spacer64;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    @media (width > 674px) {
      grid-gap: 32px;
      grid-auto-flow: column;
      grid-template-columns: max-content 1fr;
    }
  }
  &__heading {
    color: $darkText;
    @include heading2;
    &-wrap {
      margin-bottom: $spacer16;
      @media (width > 960px) {
        margin-bottom: $spacer32;
      }
    }
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
    @media (width > 960px) {
      width: 320px;
      height: auto;
    }
  }
  &__text {
    display: grid;
    grid-gap: 8px;
    @media (width > 960px) {
      grid-gap: 8px;
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
  &__list-heading {
    margin-top: 24px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
