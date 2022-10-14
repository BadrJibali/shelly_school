<template>
<div class="position-relative">
  <img :src="require(`@/assets/img/teachers-img/${teacherPhoto.img}`)" class="card-img-top img-fluid rounded-3" alt="Teacher Photo">
  <div class="d-flex position-absolute top-100 start-50 translate-middle justify-content-center align-items-center gap-3">
  <a class="social-link icon bg-gradient-color position-relative rounded-circle" href="#">
    <font-awesome-icon class="fs-3 color-trans position-absolute top-50 start-50 translate-middle" :icon="['fab', 'facebook-f']"/>
  </a>
  <a class="social-link icon bg-gradient-color position-relative rounded-circle" href="#">
    <font-awesome-icon class="fs-3 color-trans position-absolute top-50 start-50 translate-middle" :icon="['fab', 'linkedin-in']"/>
  </a>
  <a class="social-link icon bg-gradient-color position-relative rounded-circle" href="#">
    <font-awesome-icon class="fs-3 color-trans position-absolute top-50 start-50 translate-middle" :icon="['fab', 'instagram']"/>
  </a>
  </div>
</div>
</template>

<script>
  export default {
    name: 'photo-teacher',
    props: ['teacherPhoto']
  }
</script>

<style lang="scss" scoped>
.icon {
  width: 3rem;
  height: 3rem;
}

.social-link {
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--hover-color);
    transform: scale(1.12);
  }
}
</style>