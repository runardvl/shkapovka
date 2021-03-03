<template>
  <div class="contacts-page">
    <SocialHead
      :title="pageMeta.title"
      :description="pageMeta.description"
      :image="pageMeta.image"
    />
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
import SocialHead from '@/components/SocialHead'

export default {
  name: 'Contacts',
  components: {
    contactsSection,
    buttonsSection,
    SocialHead,
  },
  data() {
    return {
      pageMeta: {
        title: 'Контакты',
        description:
          'Координаты базы отдыха, ссылки на социальные сети, номер телефона, адрес базы отдыха Шкаповка',
      },
      firstBtnText: 'Подписаться на нас',
      secondBtnText: 'Связаться с нами',
    }
  },
  head: {
    title: 'Контакты',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Координаты базы отдыха, ссылки на социальные сети, номер телефона, адрес базы отдыха Шкаповка',
      },
    ],
  },
}
</script>

<style lang="scss">
.contacts-page {
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
