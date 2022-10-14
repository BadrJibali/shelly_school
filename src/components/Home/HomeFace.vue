<template>
  <div
    class="
      row
      align-items-center
      text-center text-md-start text-lg-start
      m-auto m-md-0 m-lg-0
      px-3 px-md-0 px-lg-0
      py-5
    "
  >
    <div class="text col-12 col-md-7 col-lg-7">
      <h1 class="display-2 fw-600 pb-4 w-90">
        The Smarter Way to Learn <span class="underline color">Anything</span>
      </h1>
      <p class="fw-light fs-7 w-90">
        Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus
        turpis, id mollis est rutrum nec. Sed interdum nisi id libero tincidunt,
        sit amet vestibulum tortor porttitor. Cras ligula lacus, ullamcorper
        sed.
      </p>
      <div class="input-group-lg h-25 position-relative w-80 mt-5 mb-3">
        <input
          type="text"
          class="form-control border-0 shadow rounded-pill px-4 py-3 fs-7"
          placeholder="Search Classes"
        />
        <button
          class="
            border-0
            rounded-pill
            position-absolute
            no-color
            top-50
            end-0
            translate-middle-y
            px-3
            border-start-0
          "
          type="button"
        >
          <font-awesome-icon class="hover fs-5 color" icon="magnifying-glass" />
        </button>
      </div>
    </div>
    <div class="photo position-relative col-12 col-md-5 col-lg-5 ps-5">
      <img
        class="img-fluid ms-auto"
        src="@/assets/img/banner-img.png"
        alt="School Img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "home-face",
  components: {},
};
</script>

<style lang="scss" scoped>
.hover {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
}

.text {
  position: relative;

  &::after,
  &::before {
    content: "";
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    z-index: -1;
  }

  &::after {
    background-image: url("@/assets/img/circle.png");
    top: 78%;
    left: 10%;
    width: 4rem;
    height: 4rem;
  }

  &::before {
    background-image: url("@/assets/img/circle1.png");
    top: 79%;
    right: 18%;
    width: 6rem;
    height: 6rem;
  }
}

.photo {
  &::after {
    content: "";
    background-image: url("@/assets/img/elements.png");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.underline {
  position: relative;

  &::before {
    content: "";
    height: 0.13rem;
    width: 100%;
    background-color: var(--main-color);
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>