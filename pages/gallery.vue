<template>
  <div class="gallery-page">
    <h1 class="gallery-page__heading container">Галерея</h1>
    <div class="gallery-page__territory">
      <VKGallery
        :section-heading="firsSectionHeading"
        :vk-album="vkAlbumData"
        :vk-images1280="vkImages1280"
      />
    </div>
    <div class="gallery-page__animals">
      <VKGallery
        :section-heading="secondSectionHeading"
        :vk-album="animalsAlbumData"
        :vk-images1280="animalsImages1280"
      />
    </div>
    <div class="gallery-page__buttons">
      <buttonsSection
        :first-btn-text="firstBtnText"
        :second-btn-text="secondBtnText"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VKGallery from '@/components/VKGallery'
import buttonsSection from '@/components/sections/buttonsSection'

export default {
  name: 'Gallery',
  components: { VKGallery, buttonsSection },
  async fetch({ store }) {
    if (store.getters.vkImages1280.length === 0) {
      await store.dispatch('fetch')
    }
    if (store.getters.animalsImages1280.length === 0) {
      await store.dispatch('fetchAnimals')
    }
  },
  data() {
    return {
      firsSectionHeading: 'Территория базы отдыха',
      secondSectionHeading: 'Животные на базе',
      firstBtnText: 'Подписаться на нас',
      secondBtnText: 'Связаться с нами',
    }
  },
  computed: {
    ...mapActions(['fetch']),
    ...mapState([
      'vkAlbumData',
      'vkImages1280',
      'animalsAlbumData',
      'animalsImages1280',
    ]),
  },

  methods: {
    onClickHandler() {
      this.$modal.show('bookingModal')
    },
  },
}
</script>

<style lang="scss">
.gallery-page {
  padding-top: $spacer48;
  @media (width > 960px) {
    padding-top: $spacer64;
  }
  &__heading {
    @include heading1;
  }
  &__territory {
    margin-top: $spacer32;
    margin-bottom: $spacer64;
    @media (width > 960px) {
      margin-top: $spacer64;
      margin-bottom: $spacer128;
    }
  }
  &__animals {
    background-color: $white;
    padding-top: $spacer64;
    padding-bottom: $spacer64;
    @media (width > 960px) {
      padding-top: $spacer128;
      padding-bottom: $spacer128;
    }
  }
  &__buttons {
    padding-top: $spacer64;
    padding-bottom: $spacer64;
    @media (width > 960px) {
      padding-top: $spacer64;
      padding-bottom: $spacer64;
    }
  }
}
</style>
