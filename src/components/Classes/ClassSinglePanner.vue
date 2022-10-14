<template>
<div class="row">
  <img class="img-panner img-fluid" :src="require(`@/assets/img/courses-img/${courses.pannerImg}`)" alt="course img">
</div>
</template>

<script>
  export default {
    name: 'class-single-panner',
    props: ['courses']
  }
</script>

<style lang="scss" scoped>
.img-panner {
  max-height: 37rem;
}
</style>