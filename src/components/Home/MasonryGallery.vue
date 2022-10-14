<template>
  <section data-masonry='{"percentPosition": true }' class="row justify-content-center back my-5">
    <VueMasonryWall
      class="justify-content-center"
      :items="itemsData"
      :options="options"
    >
      <template v-slot:default="{ item }">
        <div class="Item" v-viewer>
          <img
            :class="item.class"
            class="img-fluid rounded-3 shadow"
            :src="require(`@/assets/img/${item.img}`)"
            alt="Gallery"
          />
        </div>
      </template>
    </VueMasonryWall>
  </section>
</template>

<script>
// Masonry Gallery.
import VueMasonryWall from "vue-masonry-wall";

export default {
  name: "masonry-gallery",

  components: {
    VueMasonryWall,
  },

  props: ["item"],

  data() {
    return {
      options: {
        width: 250,
        padding: {
          2: 10,
          default: 0,
        },
      },
    };
  },

  computed: {
    itemsData() {
      return this.$store.state.items;
    },
  },

};
</script>

<style lang="scss" scoped>
.back {
  background-image: url("@/assets/img/abt-bg.png");
  background-repeat: no-repeat;
  background-position: 50%;
}

.Item {
  // overflow: hidden;
  width: 100%;
}

.Content {
  padding: 20px;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  line-height: 0;
  padding: 0;
  margin: 0;
}

.image-1 {
  width: 199px;
  height: 210px;
  margin-top: 190px;
  margin-left: 20px;

  @media (max-width: 1023px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0px;
  }

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-top: 0 !important;
    margin-left: 0 !important;
  }
}

.image-2 {
  width: 297px;
  height: 360px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
}

.image-3 {
  width: 197px;
  height: 290px;
  margin-top: 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
}

.image-4 {
  width: 94px;
  height: 87px;
  margin-top: 60px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
}

.image-5 {
  width: 297px;
  height: 192px;
  margin-left: -15px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
}

.image-6 {
  width: 198px;
  height: 240px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
}

.image-7 {
  width: 80px;
  height: 64px;
  margin-left: 60%;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
}

.image-8 {
  width: 198px;
  height: 240px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
}

.image-9 {
  width: 99px;
  height: 72px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
}

.image-10 {
  width: 199px;
  height: 190px;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
}
</style>