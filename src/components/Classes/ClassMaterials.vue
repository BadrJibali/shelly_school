<template>
<div class="border-color border-2 rounded-3 p-4 back-color-card d-flex align-items-center">
  <div class="me-3 p-4 position-relative rounded-circle img-size bg-gradient-color">
    <img class="img-fluid position-absolute top-50 start-50 translate-middle" src="@/assets/img/courses-img/ci1.png" alt="">
  </div>
  <ul class="d-flex flex-column justify-content-between">
    <li class="fs-6 mb-2">Class Program</li>
    <li class="fs-9 fst-italic fw-light heavy-gray-text-color">{{ downloadMaterials.classProgram.fileName }}, <span>{{ downloadMaterials.classProgram.fileSize }}</span>.</li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'class-materials',
    props: ['downloadMaterials'],
  }
</script>

<style lang="scss" scoped>
.back-color-card {
  background: var(--background-color);
}

.img-size {
  width: 3.3rem;
  height: 3.3rem;
}

.border-color {
  border: 0.1rem solid var(--main-color);
}
</style>