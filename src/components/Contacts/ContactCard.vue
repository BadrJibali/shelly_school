<template>
<div class="border-color border-2 rounded-3 p-4">
  <h4 class="pt-3 pb-2">Our Contacts</h4>
    <ul>
      <li class="d-flex align-items-center gap-3 pt-2 pb-3">
        <div class="img">
          <img src="@/assets/img/single-event/icon15.png" alt="Location">
        </div>
        <div class="text">
          <p class="my-0 d-flex flex-column">
            <span class="fs-7 fw-600">Call</span>
            <span class="heavy-gray-text-color fs-8 fw-light">{{ contactsData.phone }}</span>
          </p>
        </div>
      </li>
      <li class="d-flex align-items-center gap-3 pt-2 pb-3">
        <div class="img">
          <img src="@/assets/img/single-event/icon16.png" alt="Location">
        </div>
        <div class="text">
          <p class="my-0 d-flex flex-column">
            <span class="fs-7 fw-600">Work Time</span>
            <span class="heavy-gray-text-color fs-8 fw-light">{{ contactsData.time }}</span>
          </p>
        </div>
      </li>
      <li class="d-flex align-items-center gap-3 pt-2 pb-3">
        <div class="img">
          <img src="@/assets/img/single-event/icon17.png" alt="Location">
        </div>
        <div class="text">
          <p class="my-0 d-flex flex-column">
            <span class="fs-7 fw-600">Address</span>
            <span class="heavy-gray-text-color fs-8 fw-light">{{ contactsData.address }}.</span>
          </p>
        </div>
      </li>
    </ul>
</div>
</template>

<script>
  export default {
    name: 'contact-card',

    computed: {
      contactsData() {
        return this.$store.state.contactsData; 
      }
    },
  }
</script>

<style lang="scss" scoped>
.img-size {
  width: 3.2rem;
  height: 3.2rem;
}

.border-color {
  border: 0.1rem solid var(--main-color);
}
</style>