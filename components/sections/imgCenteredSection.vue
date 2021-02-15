<template>
  <div class="container">
    <section class="ic-section">
      <!-- image block-->
      <img
        class="ic-section__image"
        :src="require(`~/assets/img/main-img_3.jpg`)"
        alt="Ферма на базе отдыха Шкаповка"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'ImgCenteredSection',
}
</script>

<style lang="scss">
.ic-section {
  display: block;
  margin-top: 128px;
}
</style>
