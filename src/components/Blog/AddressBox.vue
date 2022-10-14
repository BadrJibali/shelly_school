<template>
<div class="address rounded-pill text-center px-1 py-3">
  <h5 class="m-0 text-capitalize">{{ address }}</h5>
</div>
</template>

<script>
  export default {
    name: 'address-box',
    props: ['address']
  }
</script>

<style lang="scss" scoped>
.address {
  border: 1px solid var(--main-color);
}
</style>