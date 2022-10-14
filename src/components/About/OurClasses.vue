<template>
<div>
  <AddressSection :position="positionClasses" :address="classesHeaderData" class="pt-5 pb-5" />
  <ClassCarousel/>
  <Button :path="id" class="w-fit m-auto mb-5 mt-4 pt-1">Classes</Button>
</div>
</template>

<script>
import AddressSection from "@/components/AddressSection.vue";
import ClassCarousel from "@/components/Classes/ClassCarousel.vue";
import Button from "@/components/Button.vue";

  export default {
    name: 'our-classes',
    components: {
      AddressSection,
      ClassCarousel,
      Button,
    },

    data() {
      return {
        id: 'classes', // Name Of Page,
        positionClasses: 'address-start',
      }
    },

    computed: {
    classesHeaderData() {
      return this.$store.state.classes;
    },
    },
  }
</script>

<style lang="scss" scoped>

</style>