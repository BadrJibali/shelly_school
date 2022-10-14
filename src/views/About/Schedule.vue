<template>
  <div>
    <FaceAddressSection :address="address" :link="link" />
    <div class="container px-0">
      <ScheduleCourses />
    </div>
  </div>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import ScheduleCourses from '@/components/About/ScheduleCourses.vue';

  export default {
    name: 'schedule',
    components: {
      FaceAddressSection,
      ScheduleCourses,
    },
    data() {
      return {
          address:"Schedule",
          link: { linkPage: "Schedule"},
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>