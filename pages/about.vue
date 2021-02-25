<template>
  <div class="about-page">
    <div class="container">
      <h1 class="about-page__heading">О базе</h1>
    </div>
    <twoColSection
      :images="images"
      :first-btn-text="firstBtnText"
      :second-btn-text="secondBtnText"
    />
  </div>
</template>

<script>
import twoColSection from '@/components/sections/twoColSection'

export default {
  name: 'About',
  components: {
    twoColSection,
  },
  data() {
    return {
      images: ['about_image_1', 'about_image_2', 'about_image_3'],
      firstBtnText: 'Подписаться на нас',
      secondBtnText: 'Связаться с нами',
    }
  },
}
</script>

<style lang="scss">
.about-page {
  &__heading {
    margin-top: 48px;
    margin-bottom: 32px;
    @include heading1;
    @media (width > 960px) {
      margin-top: 64px;
      margin-bottom: 48px;
    }
  }
}
</style>
