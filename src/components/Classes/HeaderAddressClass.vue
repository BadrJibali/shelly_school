<template>
<div class="d-flex flex-column justify-content-start">
  <h1 class="text-start display-2">{{ addressName.courseName }}</h1>
  <ul class="fs-8 heavy-gray-text-color fw-light d-flex gap-3 pt-4 justify-content-start align-items-center">
    <li class="z-index-lay"><router-link class="heavy-gray-text-color hover" :to="{ name: 'home' }">Home</router-link></li>
    <li class="z-index-lay">|</li>
    <li class="z-index-lay">Classes</li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'header-address-class',
    props: ['addressName'],
  }
</script>

<style lang="scss" scoped>

</style>