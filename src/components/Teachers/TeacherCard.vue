<template>
<div class="card h-100 border-0 rounded-3">
  <img :src="require(`@/assets/img/teachers-img/${teacher.img}`)" class="card-img-top h-100 img-fluid rounded-3" alt="Teacher Photo">
  <div class="card-body border-0 position-relative">
    <div class="icon-color rounded-circle d-flex align-items-end justify-content-center position-absolute top-0 end-0 translate-middle">
      <div class="social-links p-2 rounded-pill">
        <a class="m-auto" href="#"><font-awesome-icon class="font p-1 color-trans" :icon="['fab', 'facebook-f']" /></a>
        <a class="m-auto" href="#"><font-awesome-icon class="font color-trans" :icon="['fab', 'linkedin-in']" /></a>
        <a class="m-auto" href="#"><font-awesome-icon class="font color-trans" :icon="['fab', 'instagram']" /></a>
        <a class="m-auto">.</a>
      </div>
    </div>
    <router-link :to="{ name: 'teacher-single', params: { singleTeacher: teacher.id } }"> <!-- EDIT link -->
      <h5 class="card-title black-text-color">{{ teacher.name }}</h5>
    </router-link>
    <p class="card-text color">{{ teacher.job }}</p>
  </div>
</div>
</template>

<script>
  export default {
    name: 'teacher-card',
    props: ['teacher', 'singleTeacher'],
  }
</script>

<style lang="scss" scoped>

.social-links {
  background: var(--gradient-background);
  transition: var(--main-transition);
  width: 2.8rem;
  z-index: -1;

  height: 0;
  opacity: 0;
  display: none;
  flex-direction: column;
  justify-content: space-around;
}

.icon-color {
  background: var(--gradient-background);
  width: 2.8rem;
  height: 2.8rem;
  transition: var(--main-transition);

  &::before {
    content: "\2b";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: 200;
    border-radius: 10rem;
    color: var(--background-color);
    cursor: pointer;
  }

  .font {
    font-size: 1.15rem;
  }

  &:hover>:first-child {
    height: 9rem;
    opacity: 1;
    display: flex;
  }
}


</style>