<template>
  <div class="px-2">
    <p class="heavy-gray-text-color text-start fs-7 mt-5 lh-lg fw-300">{{ eventDetails.details1 }}</p>
    <p class="heavy-gray-text-color text-start fs-7 mt-4 lh-lg fw-300">{{ eventDetails.details2 }}</p>
  </div>
</template>

<script>
  export default {
    name: 'event-single-text',
    computed: {
      eventDetails() {
        return this.$store.state.eventDetails; 
      }
    },
  }
</script>
