<template>
  <div class="home container">
    <!-- Start Home Face -->
    <HomeFace />
    <!-- End Home Face -->
    
    <!-- Start Home Welcome -->
    <WelcomeTo :welcome="welcomeData" :position="positionWelcome" class="pb-4 mb-2 mt-5" />
    <div class="row position-relative justify-content-evenly">
      <WelcomeCard class="rep m-2" :card="card" v-for="(card, index) in cardsData" :key="index" />
    </div>
    <!-- End Home Welcome -->
    
    <!-- Start Home Gallery -->
    <MasonryGallery class="pb-4"/>
    <!-- End Home Gallery -->

    <!-- Start Home Our Classes -->
    <AddressSection :position="positionClasses" :address="classesHeaderData" class="back-ground-photo pt-5 pb-5" />
    <ClassCarousel class="px-0"/>
    <Button :path="id" class="m-auto mb-5 mt-4 pt-1">Classes</Button>
    <!-- End Home Our Classes -->

    <!-- Start Home Teachers -->
    <AddressSection :position="positionTeachers" class="pt-5 mt-5 pb-5 m-auto mb-2" :address="teachersHeaderData" />
    <div class="row mb-5">
      <div class="col-12 col-md-6 col-lg-3" v-for="(teacher, index) in teachersData" :key="index">
      <TeacherCard class="w-100 mb-3" :teacher="teacher" v-if="index == '0' || index == '1' || index == '2' || index == '3'"/>
      </div>
    </div>
    <!-- End Home Teachers -->

    <!-- Start Home Find Courses -->
    <AddressSection :position="positionCourses" class="position px-3 px-md-0 pt-5 px-lg-0 pb-md-2 pb-lg-0" :address="findCoursesHeaderData" />
    <FindCourse class="mb-4" />
    <!-- End Home Find Courses -->

    <!-- Start Home Recent News -->
    <AddressSection :position="positionNews"  :address="recentNewsHeaderData" class="pt-5" />
    <div class="row mt-5">
      <BlogCard class="col-12 col-md-6 col-lg-4 mb-4" :paragraph="blog.note | shorten(90, '  ...Read More')" :blogs="blog" v-for="(blog, index) in recentNewsData" :key="index"/>
    </div>
    <!-- End Home Recent News -->
  </div>
</template>

<script>
import HomeFace from "@/components/Home/HomeFace.vue";
import WelcomeTo from "@/components/Home/WelcomeTo.vue";
import WelcomeCard from "@/components/Home/WelcomeCard.vue";
import MasonryGallery from "@/components/Home/MasonryGallery.vue";
import AddressSection from "@/components/AddressSection.vue";
import ClassCarousel from "@/components/Classes/ClassCarousel.vue";
import Button from "@/components/Button.vue";
import TeacherCard from "@/components/Teachers/TeacherCard.vue"
import EventCard from "@/components/About/EventCard.vue"
import FindCourse from "@/components/Home/FindCourse.vue"
import BlogCard from "@/components/Blog/BlogCard.vue"



export default {
  name: "Home",
  components: {
    HomeFace,
    WelcomeTo,
    WelcomeCard,
    MasonryGallery,
    AddressSection,
    ClassCarousel,
    Button,
    TeacherCard,
    EventCard,
    FindCourse,
    BlogCard,

  },

  data() {
    return {
      id: 'classes', // Name Of Page,
      positionWelcome: 'address-center',
      positionClasses: 'address-start',
      positionTeachers: 'address-center',
      positionCourses: 'address-start',
      positionNews: 'address-center',
    }
  },

  computed: {

    welcomeData() {
      return this.$store.state.welcome;
    },

    cardsData() {
      return this.$store.state.cards;
    },

    classesHeaderData() {
      return this.$store.state.classes;
    },

    teachersHeaderData() {
      return this.$store.state.address;
    },

    teachersData() {
      return this.$store.state.teachers;
    },

    findCoursesHeaderData() {
      return this.$store.state.findCourses;
    },

    recentNewsHeaderData() {
      return this.$store.state.recentNews;
    },

    recentNewsData() {
      return this.$store.state.blogs;
    },
    

  },

  filters: {
    shorten: function (value, textLength, suffix) {
      return value.substring(0, textLength) + suffix;
    }
  }

};
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

// Address Start Position 
.back-ground-photo {
  position: relative;

  @media (max-width: 767px) {
    padding: 0 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url("@/assets/img/sec-bg.png");
    background-repeat: no-repeat;
    top: 0;
    left: -3.75rem;
    width: 7.125rem;
    height: 6.75rem;
    z-index: -1;

    @media (max-width: 767px) {
      background-image: none;
    }
  }
}

.position {
  margin-bottom: -2rem;
}
</style>
