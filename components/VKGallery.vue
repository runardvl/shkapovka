<template>
  <section class="vk-gallery container">
    <h2 class="vk-gallery__heading">{{ sectionHeading }}</h2>
    <div class="vk-gallery__images">
      <div
        v-for="(img, index) in vkAlbum.items"
        :key="index"
        class="vk-gallery__img-wrapper"
        @click="openLightboxOnSlide(index + 1)"
      >
        <img
          v-lazy="img.photo_604"
          class="vk-gallery__img"
          alt="Фотография территории базы отдыха Шкаповка в Азнакаевском районе"
        />
      </div>
    </div>
    <client-only>
      <FsLightbox :toggler="toggler" :sources="vkImages1280" :slide="slide" />
    </client-only>
  </section>
</template>

<script>
import FsLightbox from 'fslightbox-vue'
export default {
  name: 'VKGallery',
  components: { FsLightbox },
  props: {
    sectionHeading: {
      type: String,
      default: '',
    },
    vkAlbum: {
      type: Object,
      default: () => {},
    },
    vkImages1280: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { toggler: false, slide: 1 }
  },
  methods: {
    openLightboxOnSlide(number) {
      this.slide = number
      this.toggler = !this.toggler
    },
  },
}
</script>

<style lang="scss">
.vk-gallery {
  &__heading {
    @include heading2;
  }
  &__images {
    margin-top: $spacer16;
    @include images-grid;
    @media (width > 960px) {
      margin-top: $spacer32;
    }
  }
  &__img-wrapper {
    cursor: pointer;
    position: relative;
  }
  &__img {
    object-fit: cover;
    width: 232px;
    height: 160px;
  }
}
</style>
