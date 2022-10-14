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
    <p class="card-text fs-5 my-3 text-center w-75 pb-2">{{ blogs.note }}.</p>
    <div class="text-center all-text">
      <h5 class="fs-7 heavy-gray-text-color">{{ blogs.name }}</h5>
      <span class="fs-8 fst-italic color">{{ blogs.job }}</span>
    </div>
  </div>
</div>
</template>

<script>


  export default {
    name: 'blog-card-quote',
    props: ['blogs'],
    components: {

    },
  }
</script>

<style lang="scss" scoped>
.all {
  background-image: url("@/assets/img/blogs-img/element-bg2.png");
  background-repeat: no-repeat;
  background-position: 50%;
}

.all-text {
  background-image: url("@/assets/img/blogs-img/quote.png");
  background-repeat: no-repeat;
  background-position: 50%;
}
.icon-color {
  background: var(--gradient-background);
  width: 7rem;
  height: 2rem;
  transition: var(--main-transition);

}
</style>