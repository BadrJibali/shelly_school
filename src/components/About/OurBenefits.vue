<template>
  <div class="row d-flex align-items-center">
    <div class="col-12 col-md-6 col-lg-6">
      <AddressSection class="pe-0 me-0 pe-lg-5 me-lg-5" :address="OurBenefitsData"/>
      <Button :path="id" class="mt-0 w-fit mt-md-2 mt-lg-2">Contacts</Button>
    </div>
    <div class="col-12 col-md-6 col-lg-6">
      <div class="row justify-content-center">
        <WelcomeCard :class="`class${index}`" class="col-12 col-md-6 col-lg-6 m-2 w-45" :card="card" v-for="(card, index) in cardsData" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import AddressSection from '@/components/AddressSection.vue';
import Button from "@/components/Button.vue";
import WelcomeCard from "@/components/Home/WelcomeCard.vue";

  export default {
    name: 'our-benefits',
    components: {
      AddressSection,
      Button,
      WelcomeCard,
    },
    data() {
      return {
        id: 'contacts', // Name Of Page,
      }
    },
    computed: {
      OurBenefitsData() {
        return this.$store.state.OurBenefitsAbout; 
      },

      cardsData() {
      return this.$store.state.cards;
      },
    },
  }
</script>

<style lang="scss" scoped>
// .class0 {
//   // margin-left: 2rem !important;
// }
// .class1 {
// // margin-left: 2rem !important;
// }

// .class2 {
//   position: relative;
//   // top: -2%;
//   right: -100%;
// }
// .class3 {
//   position: relative;
//   // bottom: 2%;
//   right: 0;
// }

.class1, .class3 {
  transform: translateY(15%);
  
    @media (max-width: 767px) {
    transform: translateY(0);
  }
}
// .class3 {
//   position: absolute;
//   bottom: 0%;
//   right: 0%;
// }

.w-45 {
  max-width: 100%;
  width: 47%;
  margin: auto;

  @media (max-width: 1199.98px) {
    width: 46%;
  }

  @media (max-width: 991px) {
    width: 45%;
  }

  @media (max-width: 767px) {
    width: 94%;
  }
}
</style>