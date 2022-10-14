<template>
<ul class="position-relative d-inline-block fw-300 fs-7">
  <li class="d-inline-block mx-1 my-2"><a class="hover rounded-pill py-1 px-2 border border-1 heavy-gray-text-color" href="#">{{ tags.tag }}</a></li>
</ul>
</template>

<script>

  export default {
    name: 'categories-blog',
    props: ['tags']
  }
</script>

<style lang="scss" scoped>
.hover {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
}
</style>