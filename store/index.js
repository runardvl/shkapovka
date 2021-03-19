export const state = () => ({
  ownerId: '16800911',
  animalsAlbumId: '278045307',
  areaAlbumId: '278045247',
  vkAlbumData: {},
  vkImages1280: [],
  animalsAlbumData: {},
  animalsImages1280: [],
  showFormSendInfo: false,
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
  SHOW_FORM_SEND_INFO(state, showFormSendInfo) {
    state.showFormSendInfo = showFormSendInfo
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    await this.$axios.$get(`/api/area`).then((response) => {
      // // eslint-disable-next-line no-console
      // console.log(response)
      commit('SET_VK_ALBUM_DATA', response)
      commit('FILTER_VK_ALBUM_DATA_1280', response.items)
    })
    await this.$axios.$get(`/api/animals`).then((response) => {
      // // eslint-disable-next-line no-console
      // console.log(response.items)
      commit('SET_ANIMALS_ALBUM_DATA', response)
      commit('FILTER_ANIMALS_ALBUM_DATA_1280', response.items)
    })
  },
  async fetch({ commit }) {
    await this.$axios.$get(`/api/area`).then((response) => {
      // // eslint-disable-next-line no-console
      // console.log(response)
      commit('SET_VK_ALBUM_DATA', response)
      commit('FILTER_VK_ALBUM_DATA_1280', response.items)
    })
  },
  async fetchAnimals({ commit }) {
    await this.$axios.$get(`/api/animals`).then((response) => {
      // // eslint-disable-next-line no-console
      // console.log(response.items)
      commit('SET_ANIMALS_ALBUM_DATA', response)
      commit('FILTER_ANIMALS_ALBUM_DATA_1280', response.items)
    })
  },
  async formSendInfo({ commit }, showFormInfo) {
    await commit('SHOW_FORM_SEND_INFO', showFormInfo)
  },
}

export const getters = {
  vkAlbumData: (state) => state.vkAlbumData,
  vkImages1280: (state) => state.vkImages1280,
  animalsAlbumData: (state) => state.animalsAlbumData,
  animalsImages1280: (state) => state.animalsImages1280,
}
