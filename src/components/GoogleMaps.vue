<template>
<div class="rounded-3">
    <GmapMap
    :center="{lat:29.07441, lng:31.09785}"
    :zoom="7"
    map-type-id="satellite"
    style="width: 100%; height: 500px"
    :options="{
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      fullscreenControl: true,
      disableDefaultUi: false
    }">
    </GmapMap>
</div>
</template>

<script>


  export default {
    name: 'google-maps',
    data() {
      return {
        
      }
    },
    created () {
      
    },
  }
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>