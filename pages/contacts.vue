<template>
  <div class="contacts-page">
    <div class="container">
      <h1 class="contacts-page__heading">Контакты для обращения</h1>
    </div>
    <contactsSection />
    <div class="contacts-page__buttons">
      <buttonsSection
        :first-btn-text="firstBtnText"
        :second-btn-text="secondBtnText"
      />
    </div>
  </div>
</template>

<script>
import contactsSection from '@/components/sections/contactsSection'
import buttonsSection from '@/components/sections/buttonsSection'

export default {
  name: 'Contacts',
  components: {
    contactsSection,
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
.contacts-page {
  padding-top: $spacer16;
  padding-bottom: $spacer64;
  @media (width > 960px) {
    padding: $spacer64;
    padding-bottom: $spacer64;
  }
  &__heading {
    color: $darkText;
    @include heading1;
  }
}
</style>
