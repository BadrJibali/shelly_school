<template>
<div class="d-flex align-items-center gap-3 pb-2">
  <font-awesome-icon class="color fs-8" icon="paintbrush" />
  <p class="m-0 fs-8 gray-text-color fw-300">{{ points }}.</p>
</div>
</template>

<script>
  export default {
    name: 'points-text',
    props: ["points"]
  }
</script>

<style lang="scss" scoped>

</style>