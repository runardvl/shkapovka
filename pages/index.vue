<template>
  <div class="main-page">
    <heroSection />
    <bulletsSection />
    <rightSideTextSection />
    <imgCenteredSection />
  </div>
</template>

<script>
import heroSection from '@/components/sections/heroSection'
import bulletsSection from '@/components/sections/bulletsSection'
import rightSideTextSection from '@/components/sections/rightSideTextSection'
import imgCenteredSection from '@/components/sections/imgCenteredSection'

export default {
  components: {
    heroSection,
    bulletsSection,
    rightSideTextSection,
    imgCenteredSection,
  },
}
</script>
