<template>
  <div class="main-page">
    <SocialHead
      :title="pageMeta.title"
      :description="pageMeta.description"
      :image="pageMeta.image"
    />
    <!--First Section-->
    <heroSection />
    <div class="first-pattern-group">
      <woodPattern class="first-pattern-group__svg pattern" />
      <bulletsSection />
      <!--Second Section-->
      <rightSideTextSection
        :title="secondBlock.title"
        :subtitle="secondBlock.subtitle"
        :btn-text="secondBlock.btnText"
        :section-image="secondBlock.sectionImage"
        :img-alt-text="secondBlock.imgAltText"
      />
    </div>
    <!--Third Section-->
    <imgCenteredSection />
    <!--Forth Section-->
    <div class="second-pattern-group">
      <woodPattern class="second-pattern-group__svg pattern" />
      <rightSideTextSection
        :title="forthBlock.title"
        :subtitle="forthBlock.subtitle"
        :btn-text="forthBlock.btnText"
        :section-image="forthBlock.sectionImage"
        :img-alt-text="forthBlock.imgAltText"
      />
    </div>
    <!--Fifth Section-->
    <schemaSection />
    <!--Sixth Section-->
    <socialSection
      :title="socialSection.title"
      :images="socialSection.images"
      :first-btn-text="socialSection.firstBtnText"
      :second-btn-text="socialSection.secondBtnText"
    />
    <div class="last-pattern-group">
      <woodPattern class="pattern last-pattern-group__svg" />
    </div>
  </div>
</template>

<script>
import heroSection from '@/components/sections/heroSection'
import bulletsSection from '@/components/sections/bulletsSection'
import rightSideTextSection from '@/components/sections/leftSideTextSection'
import imgCenteredSection from '@/components/sections/imgCenteredSection'
import schemaSection from '@/components/sections/schemaSection'
import socialSection from '@/components/sections/socialSection'
import woodPattern from '@/assets/svg/wood-pattern.svg?inline'

export default {
  components: {
    heroSection,
    bulletsSection,
    rightSideTextSection,
    imgCenteredSection,
    schemaSection,
    socialSection,
    woodPattern,
  },
  data() {
    return {
      pageMeta: {
        title: 'Шкаповка. База отдыха в Азнакаевском районе',
        description:
          'База отдыха на территории Азнакаевского района. Можно у нас устроить корпоратив, семейное мероприятие, фотосессию и много разных активностей, которые только можно вообразить. Звоните, пишите',
      },
      secondBlock: {
        title: 'Проведение мероприятий и регистрация браков',
        subtitle:
          'Два больших зала на 30 и на 60 человек. Четыре летних домика, с мангальной зоной. ',
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
  head: {
    title: 'База отдыха в Азнакаевском районе',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'База отдыха на территории Азнакаевского района. Можно у нас устроить корпоратив, семейное мероприятие, фотосессию и много разных активностей, которые только можно вообразить. Звоните, пишите',
      },
    ],
  },
}
</script>

<style lang="scss">
.bullets {
  z-index: 1;
  position: relative;
}
.rs-section {
  z-index: 1;
  position: relative;
}
.first-pattern-group {
  overflow: hidden;
  position: relative;
  &__svg {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
}
.second-pattern-group {
  overflow: hidden;
  position: relative;
  &__svg {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
}
.last-pattern-group {
  overflow: hidden;
  position: relative;
  &__svg {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
