<template>
<div>
  <div class="d-flex gap-3">
    <img class="img-fluid rounded-circle w-img" :src="require(`@/assets/img/blogs-img/${comment.img}`)" alt="photo">
    <ul class="">
      <li class="mb-2">
        <span class="me-3">{{ comment.name }}</span>
        <span class="fs-8 fw-300">{{ comment.date }}</span>
      </li>
      <li>
        <p class="fs-8 fw-300">{{ comment.note }}.</p>
      </li>
    </ul>
  </div>
  <div class="text-end fs-8">
    <font-awesome-icon class="color pe-2" icon="reply" />
    <a class="fs-8 heavy-gray-text-color hover" href="#">Replay</a>
  </div>
  
</div>
</template>

<script>
  export default {
    name: 'comments-blog',
    props: ['comment']
  }
</script>

<style lang="scss" scoped>
.w-img {
  width: 4.5rem;
  height: 4.5rem;
}

.hover {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
}
</style>