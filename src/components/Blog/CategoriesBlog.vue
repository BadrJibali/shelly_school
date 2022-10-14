<template>
<div>
<AddressBox :address="cat" />
<ul class="px-4 py-4 fw-300">
  <li class="d-flex justify-content-between mb-1">
    <a class="black-text-color hover" href="#">Teachers</a>
    <span class="fw-300">{{ categories.teachers }}</span>
  </li>
  <li class="d-flex justify-content-between mb-1">
    <a class="black-text-color hover" href="#">School News</a>
    <span class="fw-300">{{ categories.schoolNews }}</span>
  </li>
  <li class="d-flex justify-content-between mb-1">
    <a class="black-text-color hover" href="#">Lessons</a>
    <span class="fw-300">{{ categories.lessons }}</span>
  </li>
  <li class="d-flex justify-content-between mb-1">
    <a class="black-text-color hover" href="#">Shelly</a>
    <span class="fw-300">{{ categories.shelly }}</span>
  </li>
</ul>
</div>
</template>

<script>
import AddressBox from '@/components/Blog/AddressBox.vue';

  export default {
    name: 'categories-blog',
    props: ['categories'],
    components: {
      AddressBox,
    },
    data() {
      return {
        cat: 'Categories',
    }
    },
  }
</script>

<style lang="scss" scoped>
.hover {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
}
</style>