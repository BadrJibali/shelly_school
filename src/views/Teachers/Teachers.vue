<template>
<div>
  <FaceAddressSection class="mb-5" :address="address" :link="link" />
  <div class="container">
    <div class="row pt-5">
      <div class="col-12 col-md-6 col-lg-3 mt-5" v-for="(teacher, index) in teachersData" :key="index">
        <TeacherCard :teacher="teacher"/>
      </div>
    </div>
    <ul class="pagination position-relative justify-content-end align-items-center gap-0 mt-4 mb-5">
      <li class="page-item">
        <a class="page-link hover border-0 color" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">1</a></li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">2</a></li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">3</a></li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">...</a></li>
      <li class="page-item">
        <a class="page-link hover border-0 pe-2 color" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import TeacherCard from '@/components/Teachers/TeacherCard.vue';

  export default {
  name: 'teachers',
  components: {
    FaceAddressSection,
    TeacherCard,
  },
  computed: {
    teachersData() {
      return this.$store.state.teachers;
    },
  },
  data() {
    return {
      address:"Teachers",
      link: { linkPage: "Teachers"},
    }
  },
  }
</script>

<style lang="scss" scoped>
.hover {

  &:focus {
    box-shadow: none;
  }

  &:hover {
    color: var(--hover-color);
    background: none;
  }
}
</style>