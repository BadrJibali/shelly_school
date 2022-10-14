<template>
<div class="border-color border-2 rounded-3 p-4 back-color-card">
  <h2 class="text-center fs-5 fw-600 mt-4 mb-3">Class Information</h2>
  <div class="header pb-3 pt-2 border-bottom">
    <ul>
      <li class="d-flex align-items-center justify-content-between fst-italic">
        <p class="fw-light heavy-gray-text-color fs-7">{{ infoCard.classInfo.fromTo }}</p>
        <p class="color fs-7">{{ infoCard.classInfo.time }}</p>
      </li>
      <li class="d-flex align-items-center justify-content-between fst-italic">
        <p class="fw-light heavy-gray-text-color fs-7">Age</p>
        <p class="color fs-7">{{ infoCard.classInfo.age }}</p>
      </li>
      <li class="d-flex align-items-center justify-content-between fst-italic">
        <p class="fw-light heavy-gray-text-color fs-7">Class Size</p>
        <p class="color fs-7">{{ infoCard.classInfo.classSize }}</p>
      </li>
      <li class="d-flex align-items-center justify-content-between fst-italic">
        <p class="fw-light heavy-gray-text-color fs-7">Course Duration</p>
        <p class="color fs-7">{{ infoCard.classInfo.couresDuration }}</p>
      </li>
    </ul>
  </div>
  <div class="footer pt-4">
    <ul>
      <li class="d-flex align-items-center gap-3">
        <div class="img-size">
          <img class="rounded-circle w-100 h-100 p-0 border-0 img-thumbnail" :src="require(`@/assets/img/courses-img/${infoCard.classInfo.courseTeacher.img}`)" alt="Teacher">
        </div>
        <div class="text">
          <div class="my-0 d-flex flex-column justify-content-between">
            <span class="">{{ infoCard.classInfo.courseTeacher.name }}</span>
            <span class="fs-8 heavy-gray-text-color">{{ infoCard.classInfo.courseTeacher.teacherSecialty }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="button mt-4">
    <Button class="mx-auto w-fit" :path="id">Enroll Now</Button>
  </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue';

  export default {
    name: 'class-card',
    props: ['infoCard'],
    components: {
      Button,
    },

    data() {
      return {
        id: 'contacts', // Name Of Page,
      }
    },

    computed: {
      eventDetails() {
        return this.$store.state.eventDetails; 
      }
    },
  }
</script>

<style lang="scss" scoped>
.back-color-card {
  background: var(--background-color);
}

.img-size {
  width: 3.2rem;
  height: 3.2rem;
}

.border-color {
  border: 0.1rem solid var(--main-color);
}

</style>