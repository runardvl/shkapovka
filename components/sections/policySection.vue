<template>
  <section class="policy-section">
    <div class="container">
      <ul class="policy-section__items">
        <li
          v-for="(p, index) in policy"
          :key="index"
          class="policy-section__item"
        >
          <nuxt-link
            class="policy-section__item--link"
            :to="p.link"
            :prefetch="false"
            >{{ p.title }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PolicySection',
  data() {
    return {
      policy: [
        { title: 'Политика конфиденциальности', link: '/policy' },
        { title: 'Пользовательское соглашение', link: '/terms' },
      ],
    }
  },
}
</script>

<style lang="scss">
.policy-section {
  margin-top: 64px;
  margin-bottom: 16px;
  &__items {
    display: grid;
    grid-row-gap: 4px;
    justify-content: start;
    @media (width > 767px) {
      justify-content: center;
      grid-column-gap: 16px;
      grid-auto-flow: column;
    }
  }
  &__item {
    &--link {
      text-decoration: none;
      list-style: none;
      color: $greyInputDefault;
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
