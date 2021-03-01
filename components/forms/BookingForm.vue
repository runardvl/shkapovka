<template>
  <div class="booking-form">
    <ValidationObserver v-slot="{ invalid }">
      <form
        class="booking-form__form"
        enctype="multipart/form-data"
        @submit.prevent="submitForm"
      >
        <!-- First Name -->
        <ValidationProvider
          v-slot="{ errors }"
          class="input-wrapper"
          name="Имя"
          rules="required|alpha"
        >
          <label class="booking-form__form-label">
            <span v-if="!errors[0]" class="label__text">Имя</span>
            <span v-else class="booking-form__error">{{ errors[0] }}</span>
            <input
              id="firstName"
              v-model="userInfo.name"
              name="user_name"
              class="v-input booking-form__form-input"
              type="text"
              placeholder="Василий"
            />
          </label>
        </ValidationProvider>
        <!-- Phone-->
        <ValidationProvider
          v-slot="{ errors }"
          class="input-wrapper"
          name="Телефон"
          :rules="{
            required: true,
            regex:
              // '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$',
              '^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$',
          }"
        >
          <label class="booking-form__form-label">
            <span v-if="!errors[0]" class="label__text">Телефон</span>
            <span class="booking-form__error">{{ errors[0] }}</span>
            <input
              id="phone"
              v-model="userInfo.phone"
              v-mask="'+# (###) ###-##-##'"
              name="user_phone"
              class="v-input booking-form__form-input"
              :class="classObject"
              type="tel"
              placeholder="+7 (000) 000-00-00"
            />
          </label>
        </ValidationProvider>
        <!--submit-->
        <button
          class="btn--filled booking-form__submit"
          type="submit"
          :disabled="invalid"
        >
          {{ buttonText }}
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'BookingForm',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    confirmation: '',
    value: '',
    userInfo: {
      name: null,
      phone: null,
    },
  }),
  computed: {
    classObject() {
      return {
        'v-input--error': this.error,
      }
    },
  },
  methods: {
    async submitForm() {
      try {
        await this.$axios.$post('/api/submit', this.userInfo).then(() => {
          this.$store.dispatch('formSendInfo', true)
          setTimeout(() => {
            this.userInfo.name = this.userInfo.phone = ''
            this.$emit('closePopup')
            this.$store.dispatch('formSendInfo', false)
          }, 5000)
        })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Error is ' + err)
      }
    },
  },
}
</script>

<style lang="scss">
.booking-form {
  &__form {
    display: grid;
    justify-content: center;
    grid-gap: 16px;
    margin-top: 32px;
  }
  &__form-input {
    display: grid;
    margin-top: 4px;
  }
  &__form-label {
    display: grid;
  }
  &__submit {
    margin-top: 16px;
  }
  &__error {
    max-width: 256px;
    color: $redError;
  }
}
</style>
