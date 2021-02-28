<template>
  <section class="container rules-section">
    <div class="rules-section__text">
      <p class="rules-section__paragraph">
        Время работы базы отдыха <br />
        <strong>с 9.00 до 21.00</strong>
      </p>
      <p class="rules-section__paragraph">
        На базе <strong>не предусмотрен сбор и вывоз ТБО</strong> образуемых
        гостями, клиентом/заказчик осуществляется сбор и вывоз за свой счет
        (мусор забираете с собой)
      </p>
      <p class="rules-section__paragraph">
        В целях пожарной безопасности на территории
        <strong
          >строго запрещено курение, разведение огня, запуск фонариков и
          фейрверков вне установленных мест.</strong
        >
        За нарушение данного требования материальную и полную административную
        ответственность за последствия несет <strong>Клиент</strong>, так же
        администрация база отдыха Шкаповка имеет полное право разорвать договор
        аренды и удалить гостей с территории базы. (будет испорчен ваш праздник
        по вашей вине)
      </p>
      <p class="rules-section__paragraph">
        Для обеспечения безопасности,
        <strong>проезд на автомобиле территорию базы запрещен.</strong> При
        необходимости доставки личных вещей, продуктов и т.д. Заказчик должен
        определить номера машин (3 автомобиля), которым будет выдано разрешение
        на проезд территории базы.
      </p>
      <p class="rules-section__paragraph">
        Если у клиента гости с детьми, Клиент (родители) обеспечивают
        безопасность детям, админисрация не несет ответственности за ваших
        детей. (если собаки/кошки /лошади/барашки и т.д. укусит
        <strong>виноваты родители,</strong> без сопровождение взрослых детей не
        отправлять на ферму)
      </p>
      <p class="rules-section__paragraph">
        Клиент (заказчик) обеспечивает полное соблюдение своими гостями данных
        основных правил. За вред нанесённых здоровью и имущества гостей
        полученных в результате нарушения ими правил, нетрезвого состояния
        администрация ответственности не несёт. Клиент самостоятельно определяет
        степень риска своих действий и отвечает за их последствия.При нанесении
        ущерба имуществу, поломке, утере инвентаря базы по вине гостей, клиент
        (заказчик) возмещает понесенные убытки базы.
      </p>
    </div>
    <buttonsSection
      :first-btn-text="firstBtnText"
      :second-btn-text="secondBtnText"
    />
  </section>
</template>

<script>
import buttonsSection from '@/components/sections/buttonsSection'

export default {
  name: 'RulesSection',
  components: { buttonsSection },
  props: {
    firstBtnText: {
      type: String,
      default: '',
    },
    secondBtnText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.rules-section {
  &__text {
    padding-top: 32px;
    padding-bottom: 32px;
    display: grid;
    grid-gap: 24px;
    max-width: 584px;
    @media (width > 960px) {
      grid-gap: 32px;
      padding-top: 48px;
      padding-bottom: 64px;
    }
  }
}
</style>
