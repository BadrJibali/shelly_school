<template>
  <div class="row">
    <div class="col-12 pb-0" :class="position">
      <h1 class="fw-bold display-5 text-capitalize pb-2">
        {{ address.school }}
      </h1>
      <p class="gray-text-color width lh-lg fs-8 fw-light">
        {{ address.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome-to",
  props: ["address", "position"]
};
</script>

<style lang="scss" scoped>
.width {

  @media (max-width: 767px) {
    width: 90%;
  }
}
</style>