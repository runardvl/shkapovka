import Vue from 'vue'
import VModal from 'vue-js-modal'

export default async (context, inject) => {
  await Vue.use(VModal)
}
