<template>
<div>
  <AddressBox :address="cat" />
  <div class="py-4 w-100">
    <Calendar class="cal-w border-0 color" color="orange" v-model='selectedDate' :attributes='attrs' :columns="$screens({ default: 1, laptop: 2 })" />
  </div>
</div>
</template>

<script>
import AddressBox from '@/components/Blog/AddressBox.vue';
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

  export default {
    name: 'categories-blog',
    components: {
      AddressBox,
      Calendar,
      DatePicker,
    },
    data() {
      return {
        cat: 'Calendar',
        selectedDate: null,
        attrs: [
          {
            key: 'today',
            highlight: true,
            fillMode: 'solid',
            dates: new Date(),
          },
        ],
      }
    },
  }
</script>

<style lang="scss">
.cal-w {
  width: 100%;
}

.vc-highlight {
  background: var(--gradient-background) !important;
}

.vc-pane-layout {
  justify-content: center !important;
}

.vc-day-content:focus {
  background: var(--gradient-background) !important;
}

.hover {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
}
</style>