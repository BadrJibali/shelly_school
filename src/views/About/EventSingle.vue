<template>
<section>
  <div  v-for="(e, id) in eventsData" :key="id" v-show="e.id === event">
    <FaceAddressSection :link="link" :address="e.title" class="mb-5" />
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9">
          <EventGallery :data="eventGallery" :img="img" :folder="folder" class="mb-4" />
          <EventSingleText />
          <ActivitiesInvolved class="mt-4 mb-4" />
          <div class="row">
            <ProgramsMap class="col-12 col-md-6 col-lg-4" :program="activity" v-for="(activity, id) in activitiesData" :key="id" v-show="activity.id == '1' || activity.id == '2' || activity.id == '3'"/>
          </div>
          <GoogleMaps class="p-1 mx-0 mt-3 mb-5 rounded-3 bg-gradient-color" />
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <ClassCard />
          <ContactCard class="mt-5" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import EventGallery from '@/components/EventGallery.vue';
import ClassCard from '@/components/Classes/EventClassCard.vue';
import ContactCard from '@/components/Contacts/ContactCard.vue';
import EventSingleText from '@/components/About/EventSingleText.vue';
import ActivitiesInvolved from '@/components/About/ActivitiesInvolved.vue';
import ProgramsMap from '@/components/About/ProgramsMap.vue';
import GoogleMaps from '@/components/GoogleMaps.vue';

  export default {
    name: 'event-single',
    props: ['event'],
    components: {
      FaceAddressSection,
      EventGallery,
      ClassCard,
      ContactCard,
      EventSingleText,
      ActivitiesInvolved,
      ProgramsMap,
      GoogleMaps
    },

    data() {
      return {
        link: { linkPage: "Events"},
        folder: 'single-event',
        img: 'img'
      }
    },

    computed: {
      eventsData() {
        return this.$store.state.events;
      },

      eventGallery() {
        return this.$store.state.eventGallery; 
      },

      activitiesData() {
        return this.$store.state.eventDetails.activities;
      }
    },

  }
</script>
