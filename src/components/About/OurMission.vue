<template>
  <div class="row mb-5 d-flex align-items-center flex-column-reverse flex-sm-column-reverse flex-md-row flex-lg-row flex-xxl-row">
    <div class="col-12 col-md-6 col-lg-6">
      <img class="img-fluid mt-4 mt-md-0 mt-lg-0" :src="require(`@/assets/img/about-img/${OurMissionData.img}`)" alt="About Photo">
    </div>
    <div class="col-12 col-md-6 col-lg-6">
      <h6 class="color fs-7">ABOUT US</h6>
      <AddressSection class="pe-0 me-0 mb-2 pe-lg-5 me-lg-5" :address="OurMissionData"/>
      <PointsText :points="point.point" v-for="(point, id) in OurMissionData.points" :key="id" />
    </div>
  </div>
</template>

<script>
import AddressSection from '@/components/AddressSection.vue';
import PointsText from '@/components/PointsText.vue';

  export default {
    name: 'our-mission',
    props: ['welcome'],
    components: {
      AddressSection,
      PointsText,
    },
    data() {
      return {
        word: 'School', // Name Of Page,
      }
    },
    computed: {
      OurMissionData() {
        return this.$store.state.OurMissionAbout; 
      }
    },
  }
</script>
