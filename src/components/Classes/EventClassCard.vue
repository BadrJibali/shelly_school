<template>
<div class="border-color border-2 rounded-3 p-4">
  <div class="header pb-4 pt-2 border-bottom">
    <ul>
      <li class="d-flex align-items-center gap-3 pt-2 pb-3">
        <div class="img">
          <img src="@/assets/img/single-event/cir3.png" alt="Location">
        </div>
        <div class="text">
          <p class="m-0">
            {{ eventDetails.address }}
          </p>
        </div>
      </li>
      <li class="d-flex align-items-center gap-3">
        <div class="img">
          <img src="@/assets/img/single-event/cir4.png" alt="Location">
        </div>
        <div class="text">
          <p class="my-0 d-flex flex-column">
            <span>{{ eventDetails.date }}</span>
            <span class="color">{{ eventDetails.time }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
  <div class="footer pt-4">
    <ul>
      <li class="d-flex align-items-center gap-3">
        <div class="img-size">
          <img class="rounded-circle p-0 border-0 img-thumbnail" :src="require(`@/assets/img/teachers-img/${eventDetails.teacherImg}`)" alt="Teacher">
        </div>
        <div class="text">
          <div class="my-0 d-flex flex-column justify-content-between">
            <span class="">{{ eventDetails.name }}</span>
            <span class="fs-8 heavy-gray-text-color">{{ eventDetails.job }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="button w-fit mt-5">
    <Button class="mx-auto w-fit" :path="id">Enroll Now</Button>
  </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue';

  export default {
    name: 'class-card',
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

.img-size {
  width: 3.2rem;
  height: 3.2rem;
}

.border-color {
  border: 0.1rem solid var(--main-color);
}

</style>