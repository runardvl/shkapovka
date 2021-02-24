export const state = () => ({
  ownerId: '16800911',
  animalsAlbumId: '278045307',
  areaAlbumId: '278045247',
  vkAlbumData: {},
  vkImages1280: [],
  animalsAlbumData: {},
  animalsImages1280: [],
})

export const mutations = {
  SET_VK_ALBUM_DATA(state, vkAlbumData) {
    state.vkAlbumData = vkAlbumData
  },
  SET_ANIMALS_ALBUM_DATA(state, animalsAlbumData) {
    state.animalsAlbumData = animalsAlbumData
  },
  FILTER_VK_ALBUM_DATA_1280(state, vkAlbumData) {
    state.vkImages1280 = vkAlbumData.map((o) => o.photo_1280)
  },
  FILTER_ANIMALS_ALBUM_DATA_1280(state, animalsAlbumData) {
    state.animalsImages1280 = animalsAlbumData.map((o) => o.photo_1280)
  },
}

export const actions = {
  async fetch({ commit }) {
    await this.$axios
      .$get(
        `${process.env.VK_PROXY_URL}/proxy/method/photos.get?owner_id=${this.state.ownerId}&album_id=${this.state.areaAlbumId}&access_token=${process.env.VK_TOKEN}&v=5.52`
      )
      .then((response) => {
        commit('SET_VK_ALBUM_DATA', response.response)
        commit('FILTER_VK_ALBUM_DATA_1280', response.response.items)
      })
  },
  async fetchAnimals({ commit }) {
    await this.$axios
      .$get(
        `${process.env.VK_PROXY_URL}/proxy/method/photos.get?owner_id=${this.state.ownerId}&album_id=${this.state.animalsAlbumId}&access_token=${process.env.VK_TOKEN}&v=5.52`
      )
      .then((response) => {
        commit('SET_ANIMALS_ALBUM_DATA', response.response)
        commit('FILTER_ANIMALS_ALBUM_DATA_1280', response.response.items)
      })
  },
}

export const getters = {
  vkAlbumData: (state) => state.vkAlbumData,
  vkImages1280: (state) => state.vkImages1280,
  animalsAlbumData: (state) => state.animalsAlbumData,
  animalsImages1280: (state) => state.animalsImages1280,
}
