<template>
  <table class="single-date-picker__calendar-month">
    <thead>
      <CalendarWeekHeader v-for="(day, index) in daysInWeek" :key="index" :day="day" />
    </thead>
    <tbody>
      <CalendarWeek v-for="(week, index) in datesPerWeek" :key="index" :week="week" :is-today="isToday"
        :is-selected="isSelected" @selectDate="selectDate" />
    </tbody>
  </table>
</template>
  
<script>
import CalendarWeekHeader from './CalendarWeekHeader.vue';
import CalendarWeek from './CalendarWeek.vue';
export default {
  components: {
    CalendarWeekHeader,
    CalendarWeek
  },
  props: {
    datesPerWeek: {
      type: Array,
      default: () => []
    },
    isToday: {
      type: Number,
      default: 0
    },
    isSelected: {
      type: Number,
      default: 0,
    },
    weekStartDay: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      daysInWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    }
  },
  created() {
    this.rotateDaysInWeek(this.daysInWeek, this.weekStartDay);
  },
  methods: {
    selectDate(date) {
      this.$emit('selectDate', date);
    },
    rotateDaysInWeek(daysInWeek, shifts) {
      while (shifts--) {
        var temp = daysInWeek.shift();
        daysInWeek.push(temp);
      }
    }
  }
}
</script>
  
<style lang="scss" scoped>
.single-date-picker__calendar-month {
  width: 100%;
  padding: 25px 0 0 0;
}

@media (max-width: 550px) {
  .single-date-picker__calendar-month {
    background: #fff;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    padding: 25px 20px;
  }
}
</style>