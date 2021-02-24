import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default async (context, inject) => {
  await Vue.use(VueLazyload, {
    preLoad: 0,
    error: 'https://via.placeholder.com/300',
    // eslint-disable-next-line
    // loading: require(`${'~/assets/svg/shkapovka-logo.svg'}`),
    attempt: 3,
    lazyComponent: true,
    observer: false,
    throttleWait: 500,
  })
}
