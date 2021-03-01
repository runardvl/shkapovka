<template>
  <div class="about-page">
    <SocialHead
      :title="pageMeta.title"
      :description="pageMeta.description"
      :image="pageMeta.image"
    />
    <div class="container">
      <h1 class="about-page__heading">О базе</h1>
    </div>
    <twoColSection
      :images="images"
      :first-btn-text="firstBtnText"
      :second-btn-text="secondBtnText"
    />
    <div class="about-page__buttons">
      <buttonsSection
        :first-btn-text="firstBtnText"
        :second-btn-text="secondBtnText"
      />
    </div>
  </div>
</template>

<script>
import twoColSection from '@/components/sections/twoColSection'
import buttonsSection from '@/components/sections/buttonsSection'
import SocialHead from '@/components/SocialHead'

export default {
  name: 'About',
  components: {
    twoColSection,
    buttonsSection,
    SocialHead,
  },
  data() {
    return {
      pageMeta: {
        title: 'О базе отдыха Шкаповка',
        description: 'Чем можно заняться на базе отдыха Шкаповка в Азнакаево',
      },
      images: ['about_image_1', 'about_image_2', 'about_image_3'],
      firstBtnText: 'Подписаться на нас',
      secondBtnText: 'Связаться с нами',
    }
  },
  head: {
    title: 'О базе отдыха Шкаповка',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Чем можно заняться на базе отдыха Шкаповка в Азнакаево',
      },
    ],
  },
}
</script>

<style lang="scss">
.about-page {
  &__heading {
    margin-top: $spacer16;
    @include heading1;
    @media (width > 960px) {
      margin-top: $spacer64;
    }
  }
  &__buttons {
    margin-bottom: $spacer64;
    @media (width > 960px) {
      margin-bottom: $spacer64;
    }
  }
}
</style>
