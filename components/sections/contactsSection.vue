<template>
  <section class="container contacts-section">
    <div class="contacts-section__text">
      <div class="contacts-section__text-group">
        <p class="contacts-section__subtitle">
          По всем вопросам обращаться в рабочее время
        </p>
        <p class="contacts-section__title"><strong>с 9.00 до 21.00</strong></p>
      </div>
      <div class="contacts-section__text-group">
        <p class="contacts-section__subtitle">Телефон для связи</p>
        <a
          href="tel:+79171234567"
          class="contacts-section__title contacts-section__link"
          ><strong>+7 917 123-45-67</strong></a
        >
      </div>
      <div class="contacts-section__text-group">
        <p class="contacts-section__subtitle">
          Почта для дополнительной информации
        </p>
        <a
          href="mailto:help@shkapovka.ru"
          class="contacts-section__title contacts-section__link"
          ><strong>help@shkapovka.ru</strong></a
        >
      </div>
      <div class="contacts-section__text-group">
        <p class="contacts-section__subtitle">Мы в соц сетях</p>
        <div class="contacts-section__icon-link">
          <a
            href="https://vk.com/shkapovka"
            class="contacts-section__title soc-link"
            ><iconVk /> <strong>shkapovka</strong></a
          >
        </div>
        <div class="contacts-section__icon-link">
          <a
            href="https://instagram.com/shkapovka"
            class="contacts-section__title soc-link"
            ><iconInstagram /> <strong>shkapovka</strong></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import iconVk from '@/assets/svg/icon-vk.svg?inline'
import iconInstagram from '@/assets/svg/icon-instagram.svg?inline'

export default {
  name: 'ContactsSection',
  components: { iconVk, iconInstagram },
  props: {
    telephone: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.contacts-section {
  &__text {
    display: grid;
    grid-gap: 24px;
    padding-top: $spacer32;
    padding-bottom: $spacer64;
    @media (width > 960px) {
      padding-top: $spacer48;
      padding-bottom: $spacer64;
      grid-gap: 32px;
    }
  }
  &__text-group {
    display: grid;
    grid-gap: 8px;
  }
  &__subtitle {
    color: $darkText;
    @include body2;
  }
  &__title {
    color: $darkText;
    text-decoration: none;
    @include body1;
  }
  &__link {
    transition: $mainTransition;
    &:hover {
      color: $brownButtonActive;
    }
  }
  &__icon-link {
    display: grid;
    & > .soc-link {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      align-items: center;
      grid-auto-flow: column;
      grid-gap: 12px;
    }
  }
  .soc-link {
    color: $linkBlue;
    text-decoration: none;
  }
}
</style>
