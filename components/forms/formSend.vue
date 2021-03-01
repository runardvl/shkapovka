<template>
  <div class="form-send">
    <div class="form-send__checked">
      <check />
    </div>
    <h3 class="form-send__heading">Заявка отправлена</h3>
    <p class="form-send__text">
      Вы успешно оставили заявку, дождитесь пока менеджер свяжется с вами
    </p>
  </div>
</template>

<script>
import check from '@/assets/svg/icon_green-checked.svg?inline'

export default {
  name: 'FormSend',
  components: {
    check,
  },
}
</script>

<style lang="scss">
.form-send {
  display: grid;
  justify-items: center;
  height: 370px;
  align-content: center;
  &__checked {
    width: 128px;
    height: 128px;
    margin-bottom: 64px;
    svg {
      height: auto;
      width: 100%;
    }
  }
  &__heading {
    color: $darkText;
    margin-bottom: 8px;
    @include heading2;
  }
  &__text {
    color: $darkText;
    max-width: 322px;
    text-align: center;
    @include body1;
  }
}
</style>
