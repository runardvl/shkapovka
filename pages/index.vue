<template>
  <div class="main-page">
    <!--First Section-->
    <heroSection />
    <bulletsSection />
    <!--Second Section-->
    <rightSideTextSection
      :title="secondBlock.title"
      :subtitle="secondBlock.subtitle"
      :btn-text="secondBlock.btnText"
      :section-image="secondBlock.sectionImage"
      :img-alt-text="secondBlock.imgAltText"
    />
    <!--Third Section-->
    <imgCenteredSection />
    <!--Forth Section-->
    <rightSideTextSection
      :title="forthBlock.title"
      :subtitle="forthBlock.subtitle"
      :btn-text="forthBlock.btnText"
      :section-image="forthBlock.sectionImage"
      :img-alt-text="forthBlock.imgAltText"
    />
    <!--Fifth Section-->
    <schemaSection />
    <!--Sixth Section-->
    <socialSection
      :title="socialSection.title"
      :images="socialSection.images"
      :first-btn-text="socialSection.firstBtnText"
      :second-btn-text="socialSection.secondBtnText"
    />
  </div>
</template>

<script>
import heroSection from '@/components/sections/heroSection'
import bulletsSection from '@/components/sections/bulletsSection'
import rightSideTextSection from '@/components/sections/rightSideTextSection'
import imgCenteredSection from '@/components/sections/imgCenteredSection'
import schemaSection from '@/components/sections/schemaSection'
import socialSection from '@/components/sections/socialSection'

export default {
  components: {
    heroSection,
    bulletsSection,
    rightSideTextSection,
    imgCenteredSection,
    schemaSection,
    socialSection,
  },
  data() {
    return {
      secondBlock: {
        title: 'Проведение мероприятий и регистрация браков',
        subtitle:
          'Два больших зала на 40-60 человек, 3 домика, беседки, мангал, деревянная баня',
        btnText: 'Забронировать',
        sectionImage: 'main-img_2',
        imgAltText: 'Центральный вход на базу отдыха Шкаповка',
      },
      forthBlock: {
        title: 'Активный отдых и развлечения',
        subtitle:
          'Верховая езда, катание на лодочках, катание на коньках, бильярд, баскетбольная площадка',
        btnText: 'Забронировать',
        sectionImage: 'main-img_4',
        imgAltText: 'Лошади на базе отдыха Шкаповка',
      },
      socialSection: {
        title: 'Смотрите больше фоток в социальных сетях',
        firstBtnText: 'Подписаться на нас',
        secondBtnText: 'Связаться с нами',
        images: [
          'main-gallery_1',
          'main-gallery_2',
          'main-gallery_3',
          'main-gallery_4',
          'main-gallery_5',
          'main-gallery_6',
          'main-gallery_7',
          'main-gallery_8',
        ],
      },
    }
  },
}
</script>
