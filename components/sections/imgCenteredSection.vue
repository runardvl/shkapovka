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
          У нас такие-то, такие-то и такие-то животные, с которыми можно
          познакомиться
        </p>
        <button class="btn-filled ic-section__btn">Забронировать</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImgCenteredSection',
}
</script>

<style lang="scss">
.ic-section {
  display: block;
  background-color: $white;
  margin-top: 64px;
  padding: 64px 16px 64px 16px;
  position: static;
  @media (width > 960px) {
    position: relative;
    padding: 128px;
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
    max-width: 288px;
    @media (width > 960px) {
      margin-top: 16px;
    }
  }
  &__btn {
    margin-top: 32px;
  }
}
</style>
