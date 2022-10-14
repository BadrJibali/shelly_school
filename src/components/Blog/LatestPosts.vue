<template>
<ul>
  <li class="d-flex gap-3 mb-1">
    <img class="w-img rounded-3" :src="require(`@/assets/img/blogs-img/${post.img}`)" alt="">
    <div class="d-flex flex-column justify-content-between">
      <a class="fs-8 black-text-color hover">{{ post.address }}</a>
      <span class="heavy-gray-text-color fs-8 fw-300">{{ post.date }}</span>
    </div>
  </li>
</ul>
</template>

<script>


  export default {
    name: 'categories-blog',
    props: ['post'],
  }
</script>

<style lang="scss" scoped>
.w-img {
  width: 3.5rem;
  height: 3.5rem;
}

.hover {
  transition: var(--main-transition);
  cursor: pointer;

  &:hover {
    color: var(--hover-color);
  }
}
</style>