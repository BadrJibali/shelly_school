<template>
<div>
  <div v-for="(e, id) in teachersData" :key="id">
    <div v-if="e.id === singleTeacher">
      <FaceAddressSection :link="link" :address="e.name" class="mb-5" />
      <div class="container pt-5">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-3 mb-5">
            <PhotoTeacher class="mb-5 me-lg-4" :teacherPhoto="e"/>
          </div>
          <div class="col-12 col-md-12 col-lg-9">
            <InstructorTeacher class="mb-3" :teacher="e"/>
            <ParagraphSection class="mt-4 mb-5" :paragraph="e.prag1"/>
            <PersonalCardTeacher class="mb-5" :personal="e"/>
            <div class="mt-3 mb-5" >
              <PersonalSkills :progress="a" v-for="(a, index) in e.personalSkills" :key="index" :index="index"/>
            </div>
            <ParagraphSection class="mt-4 mb-4" :paragraph="e.prag2"/>
            <ParagraphSection class="mt-4 mb-5" :paragraph="e.prag3"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <h3 class="mb-5 fw-bold fs-1 text-center">Other Teachers</h3>
      <div class="col-12 col-md-6 col-lg-3" v-for="(e, index) in teachersData" :key="index">
        <TeacherCard :teacher="e" v-if="(index == '0')"/>
        <TeacherCard :teacher="e" v-else-if="(index == '1')"/>
        <TeacherCard :teacher="e" v-else-if="(index == '2')"/>
        <TeacherCard :teacher="e" v-else-if="(index == '3')"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import PhotoTeacher from '@/components/Teachers/PhotoTeacher.vue';
import InstructorTeacher from '@/components/Teachers/InstructorTeacher.vue';
import ParagraphSection from '@/components/Classes/ParagraphSection.vue';
import PersonalCardTeacher from '@/components/Teachers/PersonalCardTeacher.vue';
import PersonalSkills from '@/components/Teachers/PersonalSkills.vue';
import TeacherCard from '@/components/Teachers/TeacherCard.vue';

  export default {
    name:'teacher-single',
    props: ['singleTeacher'],
    components: {
      FaceAddressSection,
      PhotoTeacher,
      InstructorTeacher,
      ParagraphSection,
      PersonalCardTeacher,
      PersonalSkills,
      TeacherCard,
    },

    data() {
      return {
        link: { linkPage: "Classes"},
      }
    },

  computed: {
    teachersData() {
      return this.$store.state.teachers;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>