<template>
  <div class="card hover shadow ps-2 pt-2 rounded-3 border-0">
    <div class="card-header pt-3 pb-0 bg-transparent border-0">
      <img
        class="z-index-100"
        :src="require(`@/assets/img/${card.icon}`)"
        alt=""
      />
    </div>
    <div class="card-body">
      <h5 class="card-title fs-5 z-index-100">{{ card.title }}</h5>
      <p class="card-text fs-8 heavy-gray-text-color fw-light z-index-100">
        {{ card.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome-card",
  props: ["card"],
  components: {},
};
</script>

<style lang="scss" scoped>
.z-index-100 {
  z-index: 100;
}

.hover {
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    background-color: var(--overlay-color);
    width: 100%;
    height: 0;
    top: 0;
    right: 100%;
    transition: var(--main-transition);
    z-index: 0;
  }

  &:hover::before {
    right: 0;
    height: 100%;
  }
}
</style>