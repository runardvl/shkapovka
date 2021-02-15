<template>
  <div class="container">
    <section class="rs-section">
      <!-- offer block-->
      <div class="rs-section__offer">
        <h2 class="rs-section__title">
          Проведение мероприятий и регистрация браков
        </h2>
        <p class="rs-section__subtitle">
          Два больших зала на 40-60 человек, 3 домика, беседки, мангал,
          деревянная баня
        </p>
        <button class="btn rs-section__btn">Забронировать</button>
      </div>
      <!-- image block-->
      <img
        class="rs-section__image"
        :src="require(`~/assets/img/main-img_2.jpg`)"
        alt="Центральный вход на базу отдыха Шкаповка"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'RightSideTextSection',
}
</script>

<style lang="scss">
.rs-section {
  display: grid;
  justify-content: space-between;
  grid-auto-flow: row;
  margin-top: 64px;
  @media (width > 960px) {
    grid-auto-flow: column;
    margin-top: 128px;
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
