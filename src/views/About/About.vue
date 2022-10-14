<template>
  <div class="about">
    <FaceAddressSection :address="address" :link="link" />
    <div class="container">
      <WelcomeAboutSection class="mt-5 pt-5 mb-3 pb-3" />
      <OurMission class="mt-5 pt-5 mb-3 pb-3" />
      <OurBenefits class="my-5 pt-5"/>
      <OurClasses class="my-5 pt-5 pb-4"/>
    </div>
  </div>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import WelcomeAboutSection from '@/components/About/WelcomeAboutSection.vue';
import OurMission from '@/components/About/OurMission.vue';
import OurBenefits from '@/components/About/OurBenefits.vue';
import OurClasses from '@/components/About/OurClasses.vue';



export default {
  name: 'about',
  components: {
    FaceAddressSection,
    WelcomeAboutSection,
    OurMission,
    OurBenefits,
    OurClasses,
  },
  data() {
    return {
        address:"About Us",
        link: { linkPage: "About"},
    }
  },
  
}
</script>

<style lang="scss" scoped>

</style>