<template>
  <div class="row main-content">
    <div class="container">
    <div class="col-12 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 class="z-index-lay display-3 fw-400">{{ address }}</h1>
      <ul class="fs-8 heavy-gray-text-color fw-light d-flex gap-3 pt-4 justify-content-center align-items-center">
        <li class="z-index-lay"><router-link class="heavy-gray-text-color hover" :to="{ name: 'home' }">Home</router-link></li>
        <li class="z-index-lay">|</li>
        <li class="z-index-lay">{{ link.linkPage }}</li>
      </ul>
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
  background: url("@/assets/img/Global/pager-bg.png"), #f2f7fd;
  background-repeat: no-repeat;
  background-position: 100%;
  padding: 4.688rem 0 5.313rem;
  z-index: 0;

  @media (max-width: 767px) {
    background: #f2f7fd;
  }

  &::before {
    content: "Shelly";
    font-size: 10.125rem;
    font-weight: 600;
    color: var(--main-color);
    opacity: 0.1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    @media (max-width: 767px) {
      font-size: 6rem;
    }
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

</style>