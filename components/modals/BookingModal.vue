<template>
  <div>
    <client-only>
      <modal
        name="bookingModal"
        :adaptive="true"
        :pivot-y="0.5"
        :max-width="496"
        :max-height="530"
        :width="'95%'"
        height="auto"
        :reset="true"
        classes="booking-modal"
        :scrollable="true"
      >
        <!--Close button-->
        <button
          class="btn--close-modal booking-modal__close"
          @click.prevent="modalClose"
        >
          <iconClose />
        </button>
        <header v-show="!showFormSendInfo" class="booking-modal__header">
          <h3 class="booking-modal__title">Оставьте заявку</h3>
          <p class="booking-modal__subtitle">
            Мы свяжемся с вами в рабочее время
          </p>
        </header>
        <BookingForm
          v-show="!showFormSendInfo"
          button-text="Забронировать"
          :show-form-send-info="showFormSendInfo"
          @closePopup="modalClose"
        />
        <formSend v-if="showFormSendInfo" />
      </modal>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import iconClose from '@/assets/svg/icon-close.svg?inline'
import BookingForm from '@/components/forms/BookingForm'
import formSend from '@/components/forms/formSend'

export default {
  name: 'BookingModal',
  components: { BookingForm, iconClose, formSend },
  data() {
    return {}
  },
  computed: {
    ...mapState(['showFormSendInfo']),
  },
  watch: {
    $route() {
      this.$modal.hide('bookingModal')
    },
  },
  methods: {
    modalClose() {
      this.$modal.hide('bookingModal')
    },
  },
}
</script>

<style lang="scss">
.booking-modal {
  box-sizing: border-box;
  padding: 64px 16px;
  position: relative;
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    &:focus {
      outline: none;
    }
  }
  &__header {
    display: grid;
    justify-content: center;
  }
  &__title {
    justify-self: center;
    @include heading2;
  }
  &__subtitle {
    justify-self: center;
    text-align: center;
    @include body1;
  }
  &__content {
    display: grid;
    justify-content: center;
  }
}
.vm--overlay {
  background-color: rgba($darkText, 0.95);
}
</style>
