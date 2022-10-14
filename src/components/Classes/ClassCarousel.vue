<template>
<section class="row p-0">
  <VueSlickCarousel class="" v-bind="settings" :slidesToShow="4">
    <div class="px-2">
      <ClassCard :courses="courses" v-for="(courses, index) in coursesData" :key="index" v-show="courses.id ==='1'" />
    </div>
    <div class="px-2">
      <ClassCard :courses="courses" v-for="(courses, index) in coursesData" :key="index" v-show="courses.id ==='2'" />
    </div>
    <div class="px-2">
      <ClassCard :courses="courses" v-for="(courses, index) in coursesData" :key="index" v-show="courses.id ==='3'" />
    </div>
    <div class="px-2">
      <ClassCard :courses="courses" v-for="(courses, index) in coursesData" :key="index" v-show="courses.id ==='4'" />
    </div>
    <div class="px-2">
      <ClassCard :courses="courses" v-for="(courses, index) in coursesData" :key="index" v-show="courses.id ==='5'" />
    </div>
  </VueSlickCarousel>
</section>
</template>

<script>
  import ClassCard from '@/components/Classes/ClassCard.vue'
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'class-carousel',
    components: {
      ClassCard,
      VueSlickCarousel,
    },
      data() {
    return {
      settings: {
        "dots": false,
        "infinite": true,
        "slidesToScroll": 1,
        "autoplay": true,
        "autoplaySpeed": 2500,
        "pauseOnDotsHover": true,
        "pauseOnFocus": true,
        "pauseOnHover": true,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 4,
              "slidesToScroll": 1,
              "infinite": true,
              "dots": false
            }
          },
          {
            "breakpoint": 991,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1,
              "initialSlide": 2,
              "infinite": true,
              "dots": false
            }
          },
          {
            "breakpoint": 767,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "initialSlide": 2,
              "infinite": true,
              "dots": false
            }
          },
          {
            "breakpoint": 575.98,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      }
    }
  },
  computed: {
    coursesData() {
      return this.$store.state.classSingleData;
    },
  },
  }
</script>

<style lang="scss" >
.slick-prev:before, .slick-next:before {
    color: var(--main-color);
}

.slick-next,
.slick-prev {
  top: -54px;
}
.slick-next {
  right: 30px;


@media (max-width: 1199.98px) {
right: 3%;
}

@media (max-width: 991px) {
right: 4%;
}

@media (max-width: 767px) {
right: 5%;
}

@media (max-width: 575.98px) {
right: 8%;
top: -5%;
}

}

.slick-prev {
  left: 92%;

@media (max-width: 1199.98px) {
left: 90%;
}

@media (max-width: 991px) {
left: 87%;
}

@media (max-width: 767px) {
left: 84%;
}

@media (max-width: 575.98px) {
left: 8%;
top: -5%;
}

}

</style>