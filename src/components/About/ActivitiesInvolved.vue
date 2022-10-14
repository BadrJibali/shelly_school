<template>
  <div>
    <h4 class="mb-3">Activities Involved</h4>
    <PointsText :points="activity.activity" v-for="(activity, id) in activitiesData" :key="id" />
  </div>
</template>

<script>

import PointsText from '@/components/PointsText.vue';
  export default {
    name: 'activities-involved',
    components: {
      PointsText
    },

    computed: {
      activitiesData() {
        return this.$store.state.eventDetails.activities;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>