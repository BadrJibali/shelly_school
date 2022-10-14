<template>
<router-link :to="{ name: 'event-single', params: { event: events.id } }"> <!-- EDIT link -->
  <div :class="classes.id" class="card before border-0 rounded-3 py-2 px-3 shadow-sm h-100">
    <div class="card-body">
      <ul>
        <li class="d-flex justify-content-between">
          <div class="card-text d-flex">
            <font-awesome-icon class="me-3 fs-6 color" icon="calendar-days" /> <p class="m-0 p-0 fs-8 fw-300 gray-text-color"><span class="pe-4">{{ events.date }}</span><span class="pe-4">{{ events.time }}</span></p>
          </div>
          <div class="card-text fw-bold fs-6 color">
            {{ events.price }}
          </div>
        </li>
        <li class="my-4">
          <h5 class="card-title color">{{ events.title }}</h5>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <div class="card-text d-flex align-items-center">
            <img class="me-2" :src="require(`@/assets/img/teachers-img/${events.img}`)" alt="Organizer Photo"> <p class="m-0 p-0 fs-8 gray-text-color">{{ events.organizer }}</p>
          </div>
          <div class="card-text d-flex align-items-center">
            <font-awesome-icon class="me-2 fs-6 color" icon="location-dot" /> <p class="m-0 p-0 fs-8 fw-300 gray-text-color">{{ events.address }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</router-link>
</template>

<script>
  export default {
    name: 'event-card',
    props: ['events', 'event'],
    data() {
      return {
        classes: [
          { id: 'class1'},
          { id: 'class2'},
          { id: 'class3'},
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

.before {
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    background: var(--gradient-background);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0.4rem;
  }
}
</style>