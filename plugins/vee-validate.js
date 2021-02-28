// noinspection NpmUsedModulesInstalled
import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/ru.json'

Object.keys(rules).forEach((rule) => {
  // eslint-disable-next-line import/namespace
  extend(rule, { ...rules[rule], message: messages[rule] })
})

// Register it globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false
