<template>
  <div class="schedule">
    <div class="row my-5">
      <div class="col-12">

        <smart-pagination class="mt-3 mb-4" :currentPage.sync="currentPage" :totalPages="4"/>

        <div class=" d-none d-sm-none d-md-block">
        <v-table class="table mx-auto align-middle text-center table-bordered" :data="users" :currentPage.sync="currentPage"  @totalPagesChanged="totalPages = $event">
          <thead class="align-middle rounded-3" slot="head">
            <tr  class="bg-color rounded-3">
              <th class="header-t p-1 p-md-2 p-lg-3 fw-400" scope="col">Saturday</th>
              <th class="header-t p-1 p-md-2 p-lg-3 fw-400" scope="col">Sunday</th>
              <th class="header-t p-1 p-md-2 p-lg-3 fw-400" scope="col">Monday</th>
              <th class="header-t p-1 p-md-2 p-lg-3 fw-400" scope="col">Tuesday</th>
              <th class="header-t p-1 p-md-2 p-lg-3 fw-400" scope="col">Wednesday</th>
              <th class="header-t p-1 p-md-2 p-lg-3 fw-400" scope="col">Thursday</th>
              <th class="header-t p-1 p-md-2 p-lg-3 fw-400" scope="col">Friday</th>
            </tr>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <tr class="color-trans fs-5" v-show="index == '0' "  v-for="(row, index) in displayData" :key="index">
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Saturday' && x.classInfo.time === '8AM - 10AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Sunday' && x.classInfo.time === '8AM - 10AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Monday' && x.classInfo.time === '8AM - 10AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Tuesday' && x.classInfo.time === '8AM - 10AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Wednesday' && x.classInfo.time === '8AM - 10AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Thursday' && x.classInfo.time === '8AM - 10AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Friday' && x.classInfo.time === '8AM - 10AM')" :key="index" :classData='e'/></td>
            </tr>
            <tr class="color-trans fs-5" v-show="index == '1' "  v-for="(row, index) in displayData" :key="index">
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Saturday' && x.classInfo.time === '10AM - 12AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Sunday' && x.classInfo.time === '10AM - 12AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Monday' && x.classInfo.time === '10AM - 12AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Tuesday' && x.classInfo.time === '10AM - 12AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Wednesday' && x.classInfo.time === '10AM - 12AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Thursday' && x.classInfo.time === '10AM - 12AM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Friday' && x.classInfo.time === '10AM - 12AM')" :key="index" :classData='e'/></td>
            </tr>
            <tr class="color-trans fs-5" v-show="index == '2' "  v-for="(row, index) in displayData" :key="index">
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Saturday' && x.classInfo.time === '12AM - 02PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Sunday' && x.classInfo.time === '12AM - 02PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Monday' && x.classInfo.time === '12AM - 02PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Tuesday' && x.classInfo.time === '12AM - 02PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Wednesday' && x.classInfo.time === '12AM - 02PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Thursday' && x.classInfo.time === '12AM - 02PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Friday' && x.classInfo.time === '12AM - 02PM')" :key="index" :classData='e'/></td>
            </tr>
            <tr class="color-trans fs-5" v-show="index == '3' "  v-for="(row, index) in displayData" :key="index">
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Saturday' && x.classInfo.time === '02PM - 04PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Sunday' && x.classInfo.time === '02PM - 04PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Monday' && x.classInfo.time === '02PM - 04PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Tuesday' && x.classInfo.time === '02PM - 04PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Wednesday' && x.classInfo.time === '02PM - 04PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Thursday' && x.classInfo.time === '02PM - 04PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Friday' && x.classInfo.time === '02PM - 04PM')" :key="index" :classData='e'/></td>
            </tr>
            <tr class="color-trans fs-5" v-show="index == '4' "  v-for="(row, index) in displayData" :key="index">
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Saturday' && x.classInfo.time === '04PM - 06PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Sunday' && x.classInfo.time === '04PM - 06PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Monday' && x.classInfo.time === '04PM - 06PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Tuesday' && x.classInfo.time === '04PM - 06PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Wednesday' && x.classInfo.time === '04PM - 06PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Thursday' && x.classInfo.time === '04PM - 06PM')" :key="index" :classData='e'/></td>
              <td><CourseSchedule v-for="(e, index) in classInfoData.filter(x => x.classInfo.day === 'Friday' && x.classInfo.time === '04PM - 06PM')" :key="index" :classData='e'/></td>
            </tr>
            <h1>{{ row }}</h1>
          </tbody>
      </v-table>
        </div>
        <div class="container d-block d-sm-block d-md-none">
          <ul class="m-2">
            <li v-for="day in weekDays" :key="day">
                <h2 class="text-center fs-5 mt-5 color" v-if="day.day === 'Saturday'">{{ day.day }}</h2>
                <div v-for="(e, index) in classInfoData" :key="index">
                  <CourseSchedule v-if="e.classInfo.day === 'Saturday' && e.classInfo.day == day.day" class="p-3 rounded-3 mt-2" :classData='e'/>
                </div>
            </li>
            <li v-for="day in weekDays" :key="day">
                <h2 class="text-center fs-5 mt-5 color" v-if="day.day === 'Sunday'">{{ day.day }}</h2>
                <div v-for="(e, index) in classInfoData" :key="index">
                  <CourseSchedule v-if="e.classInfo.day === 'Sunday' && e.classInfo.day == day.day" class="p-3 rounded-3 mt-2" :classData='e'/>
                </div>
            </li>
            <li v-for="day in weekDays" :key="day">
                <h2 class="text-center fs-5 mt-5 color" v-if="day.day === 'Monday'">{{ day.day }}</h2>
                <div v-for="(e, index) in classInfoData" :key="index">
                  <CourseSchedule v-if=" e.classInfo.day === 'Monday' && e.classInfo.day == day.day" class="p-3 rounded-3 mt-2" :classData='e'/>
                </div>
            </li>
            <li v-for="day in weekDays" :key="day">
                <h2 class="text-center fs-5 mt-5 color" v-if="day.day === 'Tuesday'">{{ day.day }}</h2>
                <div v-for="(e, index) in classInfoData" :key="index">
                  <CourseSchedule v-if="e.classInfo.day === 'Tuesday' && e.classInfo.day == day.day" class="p-3 rounded-3 mt-2" :classData='e'/>
                </div>
            </li>
            <li v-for="day in weekDays" :key="day">
                <h2 class="text-center fs-5 mt-5 color" v-if="day.day === 'Wednesday'">{{ day.day }}</h2>
                <div v-for="(e, index) in classInfoData" :key="index">
                  <CourseSchedule v-if="e.classInfo.day === 'Wednesday' && e.classInfo.day == day.day" class="p-3 rounded-3 mt-2" :classData='e'/>
                </div>
            </li>
            <li v-for="day in weekDays" :key="day">
                <h2 class="text-center fs-5 mt-5 color" v-if="day.day === 'Thursday'">{{ day.day }}</h2>
                <div v-for="(e, index) in classInfoData" :key="index">
                  <CourseSchedule v-if=" e.classInfo.day === 'Thursday' && e.classInfo.day == day.day" class="p-3 rounded-3 mt-2" :classData='e'/>
                </div>
            </li>
            <li v-for="day in weekDays" :key="day">
                <h2 class="text-center fs-5 mt-5 color" v-if="day.day === 'Friday'">{{ day.day }}</h2>
                <div v-for="(e, index) in classInfoData" :key="index">
                  <CourseSchedule v-if=" e.classInfo.day === 'Friday' && e.classInfo.day == day.day" class="p-3 rounded-3 mt-2" :classData='e'/>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseSchedule from '@/components/About/CourseScheduleData.vue'

export default {
  name: "schedule-table",
  components: {
    CourseSchedule,
  },
  data() {
    return {
      currentPage: 1,
      users: [
        {},
        {},
        {},
        {},
        {},
      ],
      weekDays: [
        {day:'Saturday'},
        {day:'Sunday'},
        {day:'Monday'},
        {day:'Tuesday'},
        {day:'Wednesday'},
        {day:'Thursday'},
        {day:'Friday'},
      ]
    }
  },

  computed: {
    classInfoData() {
      return this.$store.state.classSingleData;
    },
  },
};
</script>

<style lang="scss" >

  .pagination {
    text-align: center;
    justify-content: center;
    gap: 2rem;
    margin: auto;

    @media (max-width: 991px) {
      gap: 1rem;
    }

    @media (max-width: 767px) {
      gap: 1rem;
    }

    @media (max-width: 575.98px) {
      gap: 0.5rem;
    }
  }

  .page-link {
    border-radius: 3rem;
    padding: 0.6rem 2rem;
    color: var(--heavy-gray-text-color);

    @media (max-width: 991px) {
      padding: 0.5rem 0.85rem;
    }

    @media (max-width: 767px) {
      padding: 0.25rem 0.55rem;
    }

    @media (max-width: 575.98px) {
      padding: 0.1rem 0.3rem;
    }
  }

.page-link:focus {
    outline: none;
    box-shadow: none; 
}

.page-link:hover {
    color: var(--main-color);
    border-color: transparent;
}

  .page-item.active .page-link {
    background-color: var(--main-color); 
    border-color: transparent;
}

.page-item:first-child .page-link {
    border-top-left-radius:  3rem;
    border-bottom-left-radius:  3rem;
}

.page-item:last-child .page-link {
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
}

.table-bordered>:not(caption)>* {
  border-width: 0;
}

table {
  overflow: hidden;
  border-radius: 0.3rem;

  @media (max-width: 991px) {
    height: 100% !important;
    width: fit-content !important;
  }
  @media (max-width: 767px) {
    height: 100% !important;
    width: fit-content !important;
  }
}

.table-bordered>:not(caption)>*>* {
  border-width: 2px;
  border-color: #e5dfdf;
  border-radius: 0.3rem;
}

.table > :not(caption) > * > * {
  height: 10rem;
  width: 8rem;
  padding: 0;


  @media (max-width: 991px) {
    height: fit-content !important;
    width: 5rem !important;
  }

  @media (max-width: 767px) {
    height: fit-content !important;
    width: 2rem !important;
  }
}

.header-t {
  height: 5rem !important;
}

.empty:nth-child(4) {
  background: red;
  height: 6rem;
  width: 100%;
}

</style>