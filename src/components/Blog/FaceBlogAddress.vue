<template>
  <div class="row main-content">
    <div class="container px-0">
    <div class="col-12 pad color-trans d-flex flex-column justify-content-center align-items-center text-center">
      <ul class="fs-8 fw-light d-flex justify-content-center gap-1 gap-md-3 gap-lg-3 mb-3 w-100">
        <li class="z-index-lay"><router-link class="color-trans hover" :to="{ name: 'home' }">Home</router-link></li>
        <li class="z-index-lay">|</li>
        <li class="z-index-lay"><router-link class="color-trans hover" :to="{ name: 'blog' }">Blog</router-link></li>
        <li class="z-index-lay">|</li>
        <li class="z-index-lay">{{ link.title }}</li>
      </ul>
      <h1 class="z-index-lay display-3 fw-400">{{ link.title }}</h1>
      <div class="color-trans border-0 mx-3 px-0 py-4 mt-5 position-relative">
        <div class="icon-color rounded-pill position-absolute  top-0 start-50 translate-middle">
          <p class="card-text color-trans position-absolute top-50 start-50 translate-middle">{{link.lang}}</p>
        </div>
        <ul class="card-text color-trans fw-300 fs-8 py-2 d-flex gap-4 align-items-center">
          <li>{{ link.date }}</li>
          <li>by {{ link.by }}</li>
          <li class="d-flex align-items-center m-0"><font-awesome-icon class="color pe-1" icon="tags" /> <p class="m-0">{{ link.teacher }}</p></li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'face-address-section',
    props: ['address', 'link'],
  }
</script>

<style lang="scss" scoped>
.main-content {
  position: relative;
  background: url("@/assets/img/blogs-img/blogger.jpg"), #f2f7fd;
  background-repeat: no-repeat;
  background-size: cover;
  height: 45rem;

  z-index: 0;

  @media (max-width: 991px) {
    height: 100%;
  }

  @media (max-width: 767px) {
    height: 100%;
  }


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);

    @media (max-width: 767px) {
      font-size: 6rem;
    }
  }
}

.pad {
  padding: 15rem 14rem;

  @media (max-width: 991px) {
    padding: 10rem 1rem;
  }

  @media (max-width: 767px) {
    padding: 6rem 1rem;
  }
}

.z-index-lay {
  position: relative;
  z-index: 1000;
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