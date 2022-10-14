<template>
<div>
  <FaceAddressSection :address="address" :link="link" />
  <div class="container px-lg-0">
    <StartInvest />
    <AllClassesCards />
  </div>
</div>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import StartInvest from '@/components/Classes/StartInvest.vue';
import AllClassesCards from '@/components/Classes/AllClassesCards.vue';

  export default {
    name: 'schedule',
    components: {
      FaceAddressSection,
      StartInvest,
      AllClassesCards,
    },
    data() {
      return {
          address:"Classes",
          link: { linkPage: "Classes"},
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>