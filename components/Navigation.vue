<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="item in menuItems" :key="item.link" class="nav__item">
        {{ item.title }}
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
  grid-gap: 24px;
  @media (width > 960px) {
    grid-gap: 32px;
  }
}
.nav__item {
  list-style: none;
  color: $textDark;
  @include body2;
}
</style>
