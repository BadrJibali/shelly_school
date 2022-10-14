<template>
<section>
  <div v-for="(e, id) in classSingleData" :key="id">
    <div v-if="e.id === singleClass">
      <ClassSinglePanner :courses="e" />
      <div class="container">
        <div class="row position-relative">
          <div class="col-12 col-md-8 col-lg-9 pe-lg-4">
            <HeaderAddressClass class="mt-5 mb-4 pb-2" :addressName="e" />
            <ParagraphSection class="my-4 pe-lg-5" :paragraph="e.courseDetails.prag1"/>
            <ParagraphSection class="mb-5 mt-4 pe-lg-5" :paragraph="e.courseDetails.prag2"/>
            <EventGallery  :data="classSingleData" :img="imgs" :folder="folder" class="mb-4 px-0"/>
            <ParagraphSection class="mb-4 mt-5 pe-lg-5" :paragraph="e.courseDetails.prag3"/>
            <ParagraphSection class="mb-5 mt-4 pe-lg-5" :paragraph="e.courseDetails.prag4"/>
            <h5>Education Programs</h5>
            <ParagraphSection class="my-4  pe-lg-5" :paragraph="e.educationPrograms.prag1"/>
            <ParagraphSection class="my-4 pe-lg-5" :paragraph="e.educationPrograms.prag2"/>
            <h5 class="mb-4 mt-5">Activities Involved</h5>
            <div class="row mb-4">
              <PointsText class="col-12 col-md-12 col-lg-6 mb-2" :points="activity.activity" v-for="(activity, id) in e.activitiesInvolved" :key="id" />
            </div>
            <Button class="w-fit" :path="pathWay">Enroll Now</Button>
          </div>
          <div class="col-12 col-md-4 col-lg-3 position-y">
            <InformationClassCard :infoCard="e" class="mt-4 mb-3" />
            <ClassMaterials :downloadMaterials="e" class="my-4"/>
            <ClassSingleCarousel class="mt-4 mb-5 pb-4" />
            <ContactCard class="mt-5"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import HeaderAddressClass from '@/components/Classes/HeaderAddressClass.vue';
import ParagraphSection from '@/components/Classes/ParagraphSection.vue';
import EventGallery from '@/components/EventGallery.vue';
import PointsText from '@/components/PointsText.vue';
import Button from '@/components/Button.vue';
import ClassSinglePanner from '@/components/Classes/ClassSinglePanner.vue';
import InformationClassCard from '@/components/Classes/InformationClassCard.vue';
import ClassMaterials from '@/components/Classes/ClassMaterials.vue';
import ClassSingleCarousel from '@/components/Classes/ClassSingleCarousel.vue';
import ContactCard from '@/components/Contacts/ContactCard.vue';


  export default {
    name: 'class-single',
    props: ['singleClass'],
    components: {
      HeaderAddressClass,
      ParagraphSection,
      EventGallery,
      PointsText,
      Button,
      ClassSinglePanner,
      InformationClassCard,
      ClassMaterials,
      ClassSingleCarousel,
      ContactCard,
    },

    data() {
      return {
        imgs: 'imgs.img',
        folder: 'courses-img',
        pathWay: 'contacts' // Name Of Page,
      }
    },

    computed: {
      classSingleData() {
        return this.$store.state.classSingleData; 
      }
    },
    
  }
</script>

<style lang="scss" scoped>
.position-y {
  transform: translateY(-7%);

  @media (max-width: 991px) {
    transform: translateY(0);
  }
}
</style>