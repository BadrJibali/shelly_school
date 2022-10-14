<template>
  <section>
    <hooper class="h-100 rounded-3" group="group1" :transition="500" :infiniteScroll="true">
      <slide class="h-100" v-for="(slide, indx) in data" :key="indx" :index="indx">
        <img class="img-fluid h-100 w-100 rounded-3" :src="require(`@/assets/img/${folder}/${slide.img}`)" alt="Image">
      </slide>
      <hooper-navigation class="align-middle" slot="hooper-addons"></hooper-navigation>
    </hooper>

    <hooper class="mt-3 h-100" group="group1" :centerMode="true" :transition="500" :itemsToShow="4" :autoPlay="true" :playSpeed="3000" :infiniteScroll="true">
      <slide class="px-2 h-100" v-for="(slide, indx) in data" :key="indx" :index="indx">
        <img class="img-fluid rounded-3" :src="require(`@/assets/img/${folder}/${slide.img}`)" alt="Image">
      </slide>
    </hooper>
  </section>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

  export default {
    name : 'event-gallery',
    props: ['img', 'data', 'folder'],
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
  }
</script>
