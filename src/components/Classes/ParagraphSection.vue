<template>
  <p class="fw-light fs-8 lh heavy-gray-text-color">{{ paragraph }}.</p>
</template>

<script>
  export default {
    name: 'paragraph-section',
    props: ['paragraph'],
  }
</script>

<style lang="scss" scoped>
.lh {
  line-height: 1.6rem;
}
</style>