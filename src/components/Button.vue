<template>
  <dev class="d-flex align-items-center justify-content-center rounded-pill p-1 v">
    <font-awesome-icon class="ico" icon="circle-arrow-right" />
    <button @click="redirectButton" class="btn ps-0" ><slot></slot></button>
  </dev>
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
.v {
  transition: var(--main-transition);
  background: var(--main-color);
  color: #fff;

  .ico {
    height: 2rem;
    padding: 0.2rem;
    margin-right: 0.3rem;
  }

  .btn {
    color: #fff;
  }

  .hover {
    transition: var(--main-transition);
  }

  &:hover {
    background-color: var(--hover-color);
  }

  &:hover > .hover {
    letter-spacing: 1px;
    color: var(--background-color);
  }
}

.ls {
  letter-spacing: 0.1px;
  font-size: 1.05rem;
}
</style>