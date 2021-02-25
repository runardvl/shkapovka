<template>
  <div class="container">
    <div class="error-page">
      <h1 v-if="error.statusCode === 404" class="error-page__heading">
        Страница не найдена
      </h1>
      <h1 v-else class="error-page__heading">Ой, вам не повезло...</h1>
      <div class="error-page__numbers-wrapper">
        <div class="error-page__first-number">
          <numberFour
            preserve-aspect-ratio="xMidYMid meet"
            view-box="0 0 194 186"
          />
        </div>
        <div class="error-page__second-number">
          <numberZero />
        </div>
        <div class="error-page__third-number">
          <numberFour />
        </div>
      </div>
      <NuxtLink class="btn--filled error-page__link" to="/"
        >Вернуться на главную</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import numberFour from '@/assets/svg/number-four.svg'
import numberZero from '@/assets/svg/number-zero.svg'

export default {
  components: {
    numberFour,
    numberZero,
  },
  // eslint-disable-next-line vue/require-prop-types
  layout: 'simple-layout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    },
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.error-page {
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
  align-content: center;
  &__heading {
    text-align: center;
    margin-bottom: 32px;
    color: $darkText;
    @include body1;
  }
  &__numbers-wrapper {
    margin-bottom: 94px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 12px;
    @media (width > 960px) {
      grid-gap: 20px;
    }
  }
  &__first-number {
    transform: rotate(-2.3deg);
    & svg {
      width: 100%;
      height: auto;
      max-width: 130px;
    }
  }
  &__second-number {
    transform: rotate(2.12deg);
    display: grid;
    justify-items: center;
    & svg {
      width: 83%;
      height: auto;
      max-width: 130px;
    }
  }
  &__third-number {
    transform: rotate(3.75deg);
    & svg {
      width: 100%;
      height: auto;
      max-width: 130px;
    }
  }
}
</style>
