<template>
  <div class="row">
    <div :class="position" class="col-12 pt-5 pb-0">
      <h1 class="fw-bold display-5 text-capitalize pb-2">
        Welcome to <span class="color">{{ welcome.school }}</span> {{ word }}
      </h1>
      <p class="gray-text-color width lh-lg fs-8 fw-light">
        {{ welcome.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome-to",
  props: ['welcome', 'position', 'word'],

};
</script>

<style lang="scss" scoped>
.width {

  @media (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
}
</style>