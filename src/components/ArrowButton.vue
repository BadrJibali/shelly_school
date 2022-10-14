<template>
<div class="">
  <div class="d-flex align-items-center p-0 m-0 position-relative">
    <a @click="redirectButton" class=" p-0 color fs-7 hover text-capitalize" ><slot></slot></a>
    <font-awesome-icon class="fs-7 ms-2 color hover" icon="arrow-right" />
  </div>
</div>

</template>

<script>

  export default {
    name: 'button',
    props: ['path'],
    methods: {
      redirectButton() {
        this.$router.push( { name: this.path } );
      }
    }

  }
</script>

<style lang="scss" scoped>
div {
  // width: fit-content;
  cursor: pointer;

  .hover {
    transition: var(--main-transition);
  }

  &:hover > .hover {
    color: var(--hover-color);
  }
}

.end {
  left: 90%;
}
</style>