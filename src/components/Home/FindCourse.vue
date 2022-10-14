<template>
<div class="container">
<div class="row my-5  position-relative">
  <div class="d-flex mb-3 py-0 align-items-center">
    <font-awesome-icon class="me-2 fs-5 color" icon="phone" />
    <p class="m-0 color"><span class="heavy-gray-text-color fw-bold">Call:</span>  {{ phoneNumber }}.</p>
  </div>
  <div class="img-cir col-lg-6 d-none d-sm-none d-md-none d-lg-block position-relative">
    <img class="img-fluid" src="@/assets/img/courses-img/course-img.png" alt="Course Photo">
  </div>
  <div class="col-12 col-md-12 col-lg-6 event mb-4 d-flex flex-column">
    <EventCard :class="`class${index + 1}`" class="mb-3" :events="card" v-for="(card, index) in eventsCards" :key="index" v-show="index == 0 || index == 1 || index == 2"/>
    <ArrowButton class=" end" :path="way">ALL EVENTS</ArrowButton>
  </div>
</div>
</div>
</template>

<script>
import EventCard from '@/components/About/EventCard.vue';
import ArrowButton from '@/components/ArrowButton.vue';

  export default {
    name: 'event-card',
    data() {
      return {
        way: 'events', // Name Of Page,
      }
    },
    
    components: {
      EventCard,
      ArrowButton
    },

    computed: {
      eventsCards() {
        return this.$store.state.events;
      },

      phoneNumber() {
        return this.$store.state.phone.number;
      },
    },

    
  }
</script>

<style lang="scss" scoped>
.position {
  position: absolute;
  top: 3%;

  @media (max-width: 991px) {
    position: relative;
  }
}

.end {
  position: relative;
  left: 100%;
  transform: translateX(-100%);
  width: fit-content;
}

.img-cir {
  background-image: url("@/assets/img/abt-element.png");
  background-repeat: no-repeat;
  background-position: 60%;

  img {
    max-width: 100%;
  }
}

.event {
  position: relative;

  .class2 {
    transform: translateX(-15%);

    @media (max-width: 1199.98px) {
      transform: translateX(-5%);
    }

    @media (max-width: 991px) {
      transform: translateX(0);
    }
  }
}

</style>