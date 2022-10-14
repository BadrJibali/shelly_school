<template>
<router-link :to="{ name: 'classes-single', params: { singleClass: courses.id } }"> <!-- EDIT link -->
  <div class="card position-relative rounded-3 border-0 shadow-sm width">
    <img :src="require(`@/assets/img/courses-img/${courses.img}`)" class="card-img-top img-fluid h-img bg-gradient-color pb-1" alt="Course img">
    <div class="card-body d-flex flex-column justify-content-between height p-4">
      <span class="position-absolute icon-position end-0 translate-middle-y me-3"><font-awesome-icon class="bg-gradient-color transference rounded-circle icon-size" icon="cart-plus" /></span>
      <h5 class="card-title black-text-color l pt-2 font-size"> {{ courses.courseName }} </h5>
      <p class="card-text fs-6 fw-light pt-2"><small class="text-muted">{{ courses.classInfo.time }}</small></p>
      <div class="d-flex align-items-center">
        <img :src="require(`@/assets/img/teachers-img/${courses.classInfo.courseTeacher.img}`)" class="p-0 me-2 border-0 img-thumbnail size-thumbnail rounded-circle" alt="Teacher img">
        <p class="card-text  heavy-gray-text-color w-100 m-0 p-0 fs-7">{{ courses.classInfo.courseTeacher.name }}.</p>
        <p class="card-text color font-size flex-shrink-1">{{ courses.coursePrice }}</p>
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
  export default {
    name: 'class-card',
    props: ['courses', 'singleClass'],
  }
</script>

<style lang="scss" scoped>
.l {
  line-height: 1.5rem;
  cursor: pointer;
}

.h-img{
  height: 13rem;

  @media (max-width: 767px) {
    height: 100%;
  }
}

.height {
  height: 12rem;
}

.size-thumbnail {
  width: 2rem;
  height: 2rem;
}

.icon-size {
  font-size: 20px;
  padding: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
}

.icon-position {
    top: 51%;
    transform: translateY(-50%);


  @media (max-width: 767px) {
    top: 63%;
  }

  @media (max-width: 575.98px) {
    top: 58%;
  }

  @media (max-width: 375px) {
    top: 54%;
  }

  @media (max-width: 320px) {
    top: 51%;
  }
}

.price-position {
  bottom: 5%;
  right: 8%;
}

.font-size {
  font-size: 1rem;
}
</style>