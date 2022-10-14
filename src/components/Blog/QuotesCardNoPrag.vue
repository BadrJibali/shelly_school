<template>
<div class="card all border-1 rounded-3 py-2 overflow-hidden">
  <div class="card-body d-flex flex-column align-items-center border-0 mx-3 px-0 py-4 position-relative">
    <div class="icon-color rounded-pill position-relative">
      <p class="card-text color-trans position-absolute top-50 start-50 translate-middle">{{blogs.lang}}</p>
    </div>
    <ul class="card-text mt-3 fw-300 fs-8 py-2 d-flex align-items-center gap-4 gray-text-color">
      <li class="">{{ blogs.date }}</li>
      <li class="">by {{ blogs.by }}</li>
      <li class=" d-flex align-items-center justify-content-between m-0"><font-awesome-icon class="color pe-1" icon="tags" /> <p class="m-0 w-100">{{ blogs.teacher }}</p></li>
    </ul>
    <h5 class="card-title all-text my-3"><a class="black-text-color hover" href="#">{{ blogs.title }}</a></h5>
    <ArrowButton class="mb-4" :path="way" >Read</ArrowButton>
  </div>
</div>
</template>

<script>
import ArrowButton from '@/components/ArrowButton.vue';

  export default {
    name: 'blog-card-quotes-no-pra',
    props: ['blogs'],
    components: {
      ArrowButton
    },
    data() {
      return {
        way: 'blog-single', // Name Of Page,
      }
    },
  }
</script>

<style lang="scss" scoped>

.all-text {

  &::before {
    content: "";
    background-image: url("@/assets/img/blogs-img/link.png");
    background-repeat: no-repeat;
    position: absolute;
    top: 75%;
    left: 50%;
    width: 70px;
    height: 70px;
    transform: translate(-50%, -50%);
  }
}
.hover {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
}

.icon-color {
  background: var(--gradient-background);
  width: 7rem;
  height: 2rem;
  transition: var(--main-transition);
}
</style>