<template>
<div class="row mt-5">
  <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="(courses, index) in classSingleData" :key="index">
    <ClassCard class="h-100" :courses="courses"/>
  </div>
    <ul class="pagination position-relative justify-content-end align-items-center gap-0 mb-5">
      <li class="page-item">
        <a class="page-link hover ps-2 border-0 color" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link hover px-3 border-0 color" href="#">1</a></li>
      <li class="page-item"><a class="page-link hover px-3 border-0 color" href="#">2</a></li>
      <li class="page-item"><a class="page-link hover px-3 border-0 color" href="#">3</a></li>
      <li class="page-item"><a class="page-link hover px-3 border-0 color" href="#">...</a></li>
      <li class="page-item">
        <a class="page-link hover pe-2 border-0 color" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
</div>
</template>

<script>
import ClassCard from '@/components/Classes/ClassCard.vue';

  export default {
    name: 'all-classes-cards',
    components: {
      ClassCard,
    },
    data() {
      return {
        
      }
    },
    computed: {
      classSingleData() {
        return this.$store.state.classSingleData; 
      }
    },
  }
</script>

<style lang="scss" scoped>
$width: 23%;
.rep {
  width: $width;
  margin-bottom: 0;

  @media (max-width: 991px) {
    width: 45%;
  }
  @media (max-width: 767px) {
    width: 80%;
    margin: auto;
  }
}
</style>