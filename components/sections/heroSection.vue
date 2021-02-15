<template>
  <div class="container">
    <section class="hero">
      <h1 class="hero__title">
        База отдыха <br />
        в&nbsp;Азнакаево
      </h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style lang="scss">
.hero {
  margin-top: 32px;
  height: 240px;
  background: no-repeat 48% 0 url('~assets/img/main-img_1.jpg');
  background-size: 176%;
  display: grid;
  align-content: end;
  padding: 16px 32px;
  @media (width > 480px) {
    background-size: 100%;
  }
  @media (width > 960px) {
    height: 400px;
    background: no-repeat url('~assets/img/main-img_1.jpg');
    background-position-y: 26%;
    background-size: cover;
    padding: 28px 88px;
  }
  &__title {
    color: $white;
    @include heading1;
  }
}
</style>
