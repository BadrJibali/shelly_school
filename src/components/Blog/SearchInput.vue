<template>
<div>
  <form class="position-relative" action="">
    <input type="search" placeholder="Search" class="form-control rounded-pill px-4 py-3 fs-7">
    <button class=" border-0 rounded-pill position-absolute no-color top-50 end-0 translate-middle-y px-4 border-start-0 " type="button">
      <font-awesome-icon class="hover fs-5 color" icon="magnifying-glass" />
    </button>
  </form>
</div>
</template>

<script>
  export default {
    name: 'search-input',
  }
</script>

<style lang="scss" scoped>
input {

  &::placeholder {
    font-style: italic;
    font-weight: 300;
  }

  &:focus {
    border-color: var(--hover-color); 
    box-shadow: none; 
  }
}
</style>