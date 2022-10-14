<template>
  <div class="color-trans p-1 px-md-1 px-lg-3 py-md-3 py-lg-4 h-100 w-auto d-flex flex-column justify-content-center align-items-center text-center gap-1 back-ground">
    <h5 @click="redirectButton" class="fs-7 l">{{ classData.courseName }}</h5>
    <span class="fs-8">{{ classData.classInfo.time }}</span>
  </div>
</template>

<script>
  export default {
    name: 'course-schedule',
    props: ['classData'],
    computed: {
      classInfoData() {
        return this.$store.state.classSingleData;
      },
    },
    methods: {
      redirectButton() {
        this.$router.push( { name: 'classes-single' } );
      }
    }
  }
</script>

<style lang="scss" scoped>
.l {
  line-height: 1.5rem;
  cursor: pointer;
}

.back-ground {
  background: var(--gradient-background);
}
</style>