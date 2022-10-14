<template>
<section>
  <FaceAddressSection :link="link" :address="address" class="mb-5" />
  <div class="container pt-md-2 pt-lg-5">
    <div class="row pt-5">
      <div class="col-12 col-md-6 col-lg-6 mb-4" v-for="(card, id) in eventsCards" :key="id">
        <EventCard :events="card" />
      </div>
    </div>
    <ul class="pagination position-relative justify-content-end align-items-center gap-0 mb-5">
      <li class="page-item">
        <a class="page-link hover border-0 color" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">1</a></li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">2</a></li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">3</a></li>
      <li class="page-item"><a class="page-link hover border-0 color" href="#">...</a></li>
      <li class="page-item">
        <a class="page-link hover border-0 pe-2 color" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import EventCard from '@/components/About/EventCard.vue';

  export default {
    name: 'events',
    components: {
      FaceAddressSection,
      EventCard,
    },

    data() {
      return {
        address: "Events",
        link: { linkPage: "Events"},
      }
    },

    computed: {
      eventsCards() {
        return this.$store.state.events;
      },
    },
  }
</script>

<style lang="scss" scoped>
.width {
  max-width: 100%;
  width: 49%;
  margin: auto;

  @media (max-width: 1199.98px) {
    width: 48.7%;
  }

  @media (max-width: 991px) {
    width: 48.3%;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
}

.hover {
  transition: var(--main-transition);

  &:focus {
    box-shadow: none;
  }

  &:hover {
    color: var(--hover-color);
    background: none;
  }
}
</style>