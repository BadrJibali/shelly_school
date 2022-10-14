<template>
  <div class="py-4">
    <div class="number pb-3">
      <div class="back bg-gradient-color width-circle rounded-circle position-relative">
        <span class="fs-3 fw-700 transference position-absolute top-50 start-50 translate-middle">{{ program.number }}</span>
      </div>
    </div>
    <div class="text">
      <h5>{{ program.activity }}</h5>
      <p class="fs-8 fw-300 lh-lg m-0 heavy-gray-text-color">{{ program.text }}.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'programs-map',
    props: ['program']
  }
</script>

<style lang="scss" scoped>

.width-circle {
  width: 3.5rem;
  height: 3.5rem;
}

</style>