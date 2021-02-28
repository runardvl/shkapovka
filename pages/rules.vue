<template>
  <div class="rules-page">
    <div class="container">
      <h1 class="rules-page__heading">Правила и полезная инфа</h1>
    </div>
    <rulesSection
      :first-btn-text="firstBtnText"
      :second-btn-text="secondBtnText"
    />
  </div>
</template>

<script>
import rulesSection from '@/components/sections/rulesSection'

export default {
  name: 'Rules',
  components: {
    rulesSection,
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
  padding-top: 64px;
  &__heading {
    color: $darkText;
    @include heading1;
  }
}
</style>
