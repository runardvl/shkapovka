<template>
  <div class="container">
    <section class="bullets">
      <div class="bullets__item">
        <iconHouse class="bullets__icon" />
        <p class="bullets__text">Уютные домики, беседка, баня на дровах</p>
      </div>
      <div class="bullets__line" />
      <div class="bullets__item">
        <iconPine class="bullets__icon" />
        <p class="bullets__text">Дикая природа. Красивое озеро и густой лес</p>
      </div>
      <div class="bullets__line" />
      <div class="bullets__item">
        <iconHorse class="bullets__icon" />
        <p class="bullets__text">Катание на лошадках, фотосессии с животными</p>
      </div>
    </section>
  </div>
</template>

<script>
import iconHorse from '@/assets/svg/icon-horse.svg?inline'
import iconHouse from '@/assets/svg/icon-house.svg?inline'
import iconPine from '@/assets/svg/icon-pine.svg?inline'

export default {
  name: 'BulletsSection',
  components: {
    iconHorse,
    iconHouse,
    iconPine,
  },
}
</script>

<style lang="scss">
.bullets {
  background: #fff;
  padding: 64px 48px;
  display: grid;
  flex-wrap: wrap;
  @media (width > 768px) {
    grid-auto-flow: column;
  }
  &__item {
    @media (width > 768px) {
      max-width: 300px;
    }
  }
  &__icon > g {
    fill: $brownButtonDefault;
  }
  &__text {
    margin-top: 16px;
  }
  &__line {
    height: 1px;
    width: 100px;
    background: $darkText;
    opacity: 0.2;
    display: flex;
    justify-self: flex-start;
    margin: 48px 0;
    @media (width > 768px) {
      transform: rotate(90deg);
    }
  }
}
</style>
