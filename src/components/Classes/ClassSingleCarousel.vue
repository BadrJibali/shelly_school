<template>
<section>
  <hooper class="h-100 rounded-3 position-relative" :autoPlay="true" :playSpeed="3000" :itemsToShow="1" :transition="500" :infiniteScroll="true" >
    <slide v-for="(slide, indx) in classSingleData" :key="indx" :index="indx">
      <ClassCard :courses="slide" />
    </slide>

    <hooper-pagination class="ho" slot="hooper-addons"></hooper-pagination>

  </hooper>
</section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import ClassCard from '@/components/Classes/ClassCard.vue';

  export default {
    name : 'event-gallery',
    components: {
      Hooper,
      Slide,
      HooperPagination,
      ClassCard,
    },
    computed: {
      classSingleData() {
        return this.$store.state.classSingleData 
      }
    },
  }
</script>
