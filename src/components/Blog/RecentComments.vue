<template>
<ul class="fw-300 fs-8">
  <li class="d-flex gap-3 mb-1">
    <font-awesome-icon class="color pt-1 fs-6" icon="comment" />
    <div>
      <span class="fw-400">{{ recent.by }}</span>
      <a class="black-text-color ms-2 hover" href="#">{{ recent.comment }}</a>
    </div>
  </li>
</ul>
</template>

<script>

  export default {
    name: 'categories-blog',
    props: ['recent']
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