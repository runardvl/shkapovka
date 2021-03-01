<template>
  <div class="rules-page">
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

export default {
  name: 'Rules',
  components: {
    rulesSection,
    buttonsSection,
  },
  data() {
    return {
      firstBtnText: 'Подписаться на нас',
      secondBtnText: 'Связаться с нами',
    }
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
