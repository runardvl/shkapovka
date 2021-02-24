<template>
  <div class="contacts-page">
    <div class="container">
      <h1 class="contacts-page__heading">Контакты для обращения</h1>
    </div>
    <contactsSection />
    <buttonsSection
      :first-btn-text="firstBtnText"
      :second-btn-text="secondBtnText"
    />
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
  &__heading {
    margin-top: 48px;
    color: $darkText;
    @include heading1;
    @media (width > 960px) {
      margin-top: 64px;
    }
  }
}
</style>
