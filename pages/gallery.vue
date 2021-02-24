<template>
  <div class="gallery-page">
    <h1 class="gallery-page__heading container">Галерея</h1>
    <VKGallery
      :section-heading="firsSectionHeading"
      :first-album="vkAlbumData"
      :vk-images1280="vkImages1280"
    />
    <VKGallery
      :section-heading="secondSectionHeading"
      :first-album="animalsAlbumData"
      :vk-images1280="animalsImages1280"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VKGallery from '@/components/VKGallery'

export default {
  name: 'Gallery',
  components: { VKGallery },
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
}
</script>

<style lang="scss">
.gallery-page {
  &__heading {
    @include heading1;
  }
}
</style>
