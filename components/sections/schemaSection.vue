<template>
  <section class="s-section">
    <div class="container">
      <h2 class="s-section__title">Схема чтобы не потеряться на базе отдыха</h2>
      <!-- image block-->
      <img
        class="s-section__image"
        :src="require(`~/assets/img/main-img_5.jpg`)"
        alt="Схема территории базы отдыха Шкаповка"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SchemaSection',
}
</script>

<style lang="scss">
.s-section {
  background: $white;
  padding: $spacer64 0;
  position: relative;
  z-index: 2;
  @media (width > 960px) {
    padding: $spacer128 0;
  }
  &__title {
    max-width: 242px;
    margin-bottom: 32px;
    @include heading2;
    @media (width > 960px) {
      margin-left: 88px;
      max-width: 393px;
      margin-bottom: 48px;
    }
  }
}
</style>
