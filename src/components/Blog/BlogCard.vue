<template>
<div class="">
<div class="card border-0 h-100 w-100 rounded-3 overflow-hidden">
  <img :src="require(`@/assets/img/blogs-img/${blogs.img}`)" class="card-img-top img-fluid rounded-3" alt="Blog Photo">
  <div class="card-body border-0 mx-3 px-0 py-4 position-relative">
    <div class="icon-color rounded-pill position-absolute  top-0 start-0 translate-middle-y">
      <p class="card-text color-trans position-absolute top-50 start-50 translate-middle">{{blogs.lang}}</p>
    </div>
    <ul class="card-text fw-300 fs-8 py-2 d-flex gap-4 align-items-center gray-text-color">
      <li>{{ blogs.date }}</li>
      <li>by {{ blogs.by }}</li>
      <li class="d-flex align-items-center m-0"><font-awesome-icon class="color pe-1" icon="tags" /> <p class="m-0">{{ blogs.teacher }}</p></li>
    </ul>
    <h3 class="card-title">{{ blogs.title }}</h3>
    <p class="card-text fs-8 pb-2 fw-300 gray-text-color">{{ paragraph }}.</p>
    <ArrowButton :path="way" >Read</ArrowButton>
  </div>
</div>
</div>
</template>

<script>
import ArrowButton from '@/components/ArrowButton.vue';

  export default {
    name: 'blog-card',
    props: ['blogs', 'paragraph'],
    data() {
      return {
        way: 'blog-single', // Name Of Page,
      }
    },
    components: {
      ArrowButton,
    },

  }
</script>

<style lang="scss" scoped>

.icon-color {
  background: var(--gradient-background);
  width: 7rem;
  height: 2rem;
  transition: var(--main-transition);

}


</style>