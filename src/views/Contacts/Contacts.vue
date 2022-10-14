<template>
<div class="">
  <FaceAddressSection class="mb-5" :address="address" :link="link" />
  <div class="container pb-5">
    <div class="row">
      <div class=" col-12">
        <GoogleMaps class="p-1 mx-auto mt-5 mb-5 rounded-3 bg-gradient-color"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-9">
        <h4 class="mt-4">Add Comment</h4>
        <AddComment class="mt-4 mb-3" />
      </div>
      <div class="col-12 col-lg-3">
        <ContactCard class="border-0" />
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import GoogleMaps from '@/components/GoogleMaps.vue';
import AddComment from '@/components/Blog/AddComment.vue';
import ContactCard from '@/components/Contacts/ContactCard.vue';



  export default {
    name: 'contacts',
    components: {
    FaceAddressSection,
    GoogleMaps,
    AddComment,
    ContactCard,
    },
    data() {
      return {
        address:"Contacts",
        link: { linkPage: "Contacts"},
      }
    },
  }
</script>
