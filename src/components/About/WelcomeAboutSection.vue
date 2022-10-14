<template>
  <div class="row d-flex align-items-center flex-row flex-md-row-reverse flex-lg-row">
    <div class="col-12 col-md-6 col-lg-6">
      <WelcomeTo :welcome="welcomeAboutData" :position="WelcomeAbout" :word="word" class="pb-4 mb-0 w-100 w-lg-75" />
      <Button :path="id" class="mt-0 w-fit mt-md-2 mt-lg-2">Classes</Button>
    </div>
    <div class="col-12 col-md-6 col-lg-6">
      <img class="img-fluid" :src="require(`@/assets/img/about-img/${welcomeAboutData.img}`)" alt="About Photo">
    </div>
  </div>
</template>

<script>
import WelcomeTo from '@/components/Home/WelcomeTo.vue';
import Button from "@/components/Button.vue";

  export default {
    name: 'welcome-section',
    props: ['welcome'],
    components: {
      WelcomeTo,
      Button,
    },
    data() {
      return {
        WelcomeAbout: 'address-start',
        id: 'classes', // Name Of Page,
        word: 'School', // Name Of Page,
      }
    },
    computed: {
      welcomeAboutData() {
        return this.$store.state.welcomeAbout 
      }
    },
  }
</script>
