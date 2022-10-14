<template>
<ul class="fw-300 fs-7">
  <li class="d-flex align-items-center gap-3 mb-3">
    <font-awesome-icon class="color fs-6" icon="calendar-days" />
    <a class="black-text-color fw-400 hover" href="#">{{ archives.month }}</a>
  </li>
</ul>

</template>

<script>

  export default {
    name: 'categories-blog',
    props: ['archives']
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