<template>
  <div>
    <client-only>
      <modal
        name="bookingModal"
        :adaptive="true"
        :pivot-y="0.5"
        :max-width="496"
        :height="'auto'"
        :width="'95%'"
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
        <main class="booking-modal__content">
          <form class="booking-modal__form" action="">
            <label class="booking-modal__form-label">
              Имя
              <input
                class="booking-modal__form-input v-input"
                type="text"
                placeholder="Имя"
                required
              />
            </label>
            <label class="booking-modal__form-label">
              Телефон
              <input
                class="booking-modal__form-input"
                type="tel"
                placeholder="+7 (123) 456-78-90"
                required
              />
            </label>
            <button class="btn-filled booking-modal__submit">
              Забронировать
            </button>
          </form>
        </main>
      </modal>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'BookingModal',
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
  &__form {
    display: grid;
    justify-content: center;
  }
  &__form-label {
    display: grid;
  }
}
.vm--overlay {
  background-color: rgba($darkText, 0.95);
}
</style>
