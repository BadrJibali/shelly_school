<template>
<div class="w-100">
  <h5 class="color col-12 fst-italic fw-400 mb-4">Instructor</h5>
  <div class="d-flex flex-column flex-md-row flex-lg-row align-items-start align-items-md-center align-items-lg-center gap-lg-4 gap-md-3 gap-4 justify-content-between">
    <div class="phone d-flex gap-2">
      <img class="img-fluid w-img p-0 me-1" src="@/assets/img/teachers-img/ro1.png" alt="Phone">
      <ul class="fs-8 d-flex flex-column justify-content-evenly">
        <li class="black-text-color">Phone</li>
        <li class="heavy-gray-text-color fw-light">{{ teacher.phone }}</li>
      </ul>
    </div>
    <div class="email d-flex gap-2">
      <img class="img-fluid w-img p-0 me-1" src="@/assets/img/teachers-img/ro2.png" alt="Phone">
      <ul class="fs-8 d-flex flex-column justify-content-evenly">
        <li class="black-text-color">Email</li>
        <li class="heavy-gray-text-color fw-light">{{ teacher.email }}</li>
      </ul>
    </div>
    <div class="call d-flex gap-2">
      <img class="img-fluid w-img p-0 me-1" src="@/assets/img/teachers-img/ro3.png" alt="Phone">
      <ul class="fs-6 d-flex flex-column justify-content-evenly">
        <li class="w-75"><a class="black-text-color hover" href="#">Call Teacher Now</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'instructor-teacher',
    props: ['teacher']
  }
</script>

<style lang="scss" scoped>
.w-img {
  width: 3.4rem;
  height: 3.4rem;
}

.hover {
  transition: var(--main-transition);
  // line-height: 1.7rem;

  &:hover {
    color: var(--hover-color);
    background: none;
  }
}
</style>