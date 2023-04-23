<template>
  <th>
    <div class="single-date-picker__calendar-week-header">
      {{ day }}
    </div>
  </th>
</template>
  
<script>
export default {
  props: {
    day: {
      type: String,
      default: () => ''
    }
  }
}
</script>
  
<style scoped>
.single-date-picker__calendar-week-header {
  margin-bottom: 15px;
  margin-top: 0;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #82B8E9;
}

@media (max-width: 550px) {
  .single-date-picker__calendar-week-header {
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 18px;
  }
}
</style>