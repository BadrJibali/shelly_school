<template>
  <ul>
    <li class="mb-3" v-if="index == '0'">
      <div class="d-flex justify-content-between mb-2">
        <span class="fs-8">Teaching</span>
        <span class="fs-8 fw-light">{{ progress.teaching }}%</span>
      </div>
      <div class="">
        <progress-bar bar-color="#f45905" bar-border-radius="10" size="15" :val="progress.teaching"></progress-bar>
      </div>
    </li>
    <li class="mb-3" v-if="index == '1'">
      <div class="d-flex justify-content-between mb-2">
        <span class="fs-8">Speaking</span>
        <span class="fs-8 fw-light">{{ progress.speaking }}%</span>
      </div>
      <div class="">
        <progress-bar bar-color="#155799" bar-border-radius="10" size="15" :val="progress.speaking"></progress-bar>
      </div>
    </li>
    <li class="mb-3" v-if="index == '2'">
      <div class="d-flex justify-content-between mb-2">
        <span class="fs-8">Family Support</span>
        <span class="fs-8 fw-light">{{ progress.familySupport }}%</span>
      </div>
      <div class="">
        <progress-bar bar-color="#fdc830" bar-border-radius="10" size="15" :val="progress.familySupport"></progress-bar>
      </div>
    </li>
    <li class="mb-3" v-if="index == '3'">
      <div class="d-flex justify-content-between mb-2">
        <span class="fs-8">Children's Well-being</span>
        <span class="fs-8 fw-light">{{ progress.childrenWellbeing }}%</span>
      </div>
      <div class="">
        <progress-bar bar-color="#159957" bar-border-radius="10" size="15" :val="progress.childrenWellbeing"></progress-bar>
      </div>
    </li>
  </ul>
</template>

<script>
import ProgressBar from 'vue-simple-progress'

  export default {
    name: 'personal-skills',
    props: ['progress', 'index'],
    components: {
      ProgressBar,
    },
  }
</script>

<style lang="scss" scoped>

</style>