<template>
  <div class="rules-page">
    <SocialHead
      :title="pageMeta.title"
      :description="pageMeta.description"
      :image="pageMeta.image"
    />
    <div class="container">
      <h1 class="rules-page__heading">Правила и полезная инфа</h1>
    </div>
    <rulesSection
      :first-btn-text="firstBtnText"
      :second-btn-text="secondBtnText"
    />
    <buttonsSection
      :first-btn-text="firstBtnText"
      :second-btn-text="secondBtnText"
    />
  </div>
</template>

<script>
import rulesSection from '@/components/sections/rulesSection'
import buttonsSection from '@/components/sections/buttonsSection'
import SocialHead from '@/components/SocialHead'

export default {
  name: 'Rules',
  components: {
    rulesSection,
    buttonsSection,
    SocialHead,
  },
  data() {
    return {
      pageMeta: {
        title: 'О базе отдыха Шкаповка',
        description: 'Чем можно заняться на базе отдыха Шкаповка в Азнакаево',
      },
      firstBtnText: 'Подписаться на нас',
      secondBtnText: 'Связаться с нами',
    }
  },
  head: {
    title: 'Правила Шкаповки',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Правила и полезная информация базы отдыха Шкаповка в Азнакаево',
      },
    ],
  },
}
</script>

<style lang="scss">
.rules-page {
  padding-top: $spacer16;
  padding-bottom: $spacer64;
  @media (width > 960px) {
    padding-top: $spacer64;
    padding-bottom: $spacer64;
  }
  &__heading {
    color: $darkText;
    @include heading1;
  }
}
</style>
