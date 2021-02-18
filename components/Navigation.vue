<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="item in menuItems" :key="item.link" class="nav__item">
        <nuxt-link
          class="nav__item-link"
          :to="`/${item.link}`"
          :prefetch="false"
          >{{ item.title }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      menuItems: [
        { title: 'Галерея', link: 'gallery' },
        { title: 'О базе', link: 'about' },
        { title: 'Правила', link: 'rules' },
        { title: 'Контакты', link: 'contacts' },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav__list {
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, max-content);
  justify-content: center;
  grid-gap: 20px;
  @media (width > 960px) {
    grid-gap: 32px;
  }
}
.nav__item {
  &-link {
    text-decoration: none;
    list-style: none;
    color: $darkText;
    transition: $mainTransition;
    @include body2;
    &:hover,
    &:focus {
      color: $brownButtonDefault;
    }
  }
}
</style>
