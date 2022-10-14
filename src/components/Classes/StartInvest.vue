<template>
<div class="row">
  <div class="col-12">
    <div class="banner rounded-3">
      <span class="color fs-8">TRY NOW</span>
      <h1 class="display-4 fw-500 mt-2 mb-4">Start Investing in You</h1>
      <Button class="w-fit" :path="id">Classes</Button>
    </div>
  </div>
</div>
</template>

<script>
import Button from "@/components/Button.vue";

  export default {
    name: 'start-invest',
    components: {
      Button,
    },
    data() {
      return {
        id: 'classes', // Name Of Page,
      }
    },
  }
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/courses-img/classes-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  z-index: 1;
  padding: 7.2rem 5rem 8rem;
  margin-top: 7rem;
  margin-bottom: 5rem;

  @media (max-width: 575.98px) {
    padding: 3.2rem 1.5rem 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg,#fff,#fff);
    z-index: -1;
    opacity: 0.4;
  }
}

</style>