<template>
  <footer class="footer-next">
    <div class="container">
      <div class="footer-next__wrapper">
        <div class="footer-next__logo-block">
          <ShkpvkLogo class="footer-next__logo" />
          <p class="footer-next__descriptor">База отдыха г. Азнакаево</p>
        </div>
        <div class="footer-next__sitemap">
          <span class="footer-next__sitemap-heading">
            <strong class="footer-next__sitemap-heading">Карта сайта</strong>
          </span>
          <Navigation class="footer-next__nav" :is-footer-nav="true" />
        </div>
        <div class="footer-next__credits">
          <span class="footer-next__credits-heading">
            <strong>Создание сайта</strong>
          </span>
          <ul class="footer-next__creators">
            <li v-for="c in credits" :key="c.name" class="footer-next__creator">
              {{ c.role }}
              <span class="footer-next__creator--separator">|</span>
              <a
                class="footer-next__creator--link"
                :href="`${c.link}`"
                :prefetch="false"
                target="_blank"
                >{{ c.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <policySection />
  </footer>
</template>

<script>
import Navigation from '@/components/Navigation'
import ShkpvkLogo from '@/components/ShkpvkLogo'
import policySection from '@/components/sections/policySection'

export default {
  name: 'FooterNext',
  components: {
    Navigation,
    ShkpvkLogo,
    policySection,
  },
  data() {
    return {
      credits: [
        {
          role: 'Дизайн',
          name: 'Ильнар',
          link: 'https://t.me/iamlenny',
        },
        {
          role: 'Фото',
          name: 'Диана',
          link: 'https://t.me/Diana_Robs1994',
        },
        { role: 'Разработка', name: 'Рунар', link: 'https://t.me/runardry' },
      ],
    }
  },
}
</script>

<style lang="scss">
.footer-next {
  padding: $spacer32 0 $spacer16 0;
  &__wrapper {
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 48px;
    @media (width > 767px) {
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  &__logo {
    justify-content: start;
    align-items: center;
  }
  &__descriptor {
    margin-top: $spacer8;
    color: $darkText;
    @include body1;
  }
  &__sitemap {
    display: grid;
    grid-gap: 16px;
    grid-template-rows: repeat(2, max-content);
  }
  &__credits {
    display: grid;
    grid-gap: 16px;
  }
  &__creators {
    display: grid;
    grid-gap: 8px;
  }
  &__creator {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    grid-gap: 16px;
    color: $darkText;
    @include body2;
    &--separator {
      color: $greyInputDefault;
    }
    &--link {
      text-decoration: none;
      list-style: none;
      color: $brownButtonDefault;
      transition: $mainTransition;
      @include body2;
      &:hover,
      &:focus {
        color: $brownButtonActive;
      }
    }
  }
}
</style>
