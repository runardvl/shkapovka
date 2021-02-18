<template>
  <div>
    <client-only>
      <modal
        name="bookingModal"
        :adaptive="true"
        :pivot-y="0.5"
        :max-width="496"
        :width="'95%'"
        height="auto"
        :reset="true"
        classes="booking-modal"
        :scrollable="true"
      >
        <header class="booking-modal__header">
          <h3 class="booking-modal__title">Оставьте заявку</h3>
          <p class="booking-modal__subtitle">
            Мы свяжемся с вами в рабочее время
          </p>
        </header>
        <BookingForm button-text="Забронировать" />
      </modal>
    </client-only>
  </div>
</template>

<script>
import BookingForm from '@/components/forms/BookingForm'
export default {
  name: 'BookingModal',
  components: { BookingForm },
  watch: {
    $route() {
      this.$modal.hide('bookingModal')
    },
  },
}
</script>

<style lang="scss">
.booking-modal {
  box-sizing: border-box;
  padding: 64px 16px;
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
