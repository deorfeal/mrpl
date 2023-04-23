<template>
  <td>
    <div v-show="date" class="single-date-picker__date" :class="{
      'single-date-picker__today': isToday,
      'single-date-picker__selected': isSelected
    }" @click="selectDate">
      {{ date }}
    </div>
  </td>
</template>
  
<script>
export default {
  props: {
    date: {
      type: Number,
      default: () => 1
    },
    isToday: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectDate() {
      this.$emit('selectDate', this.date);
    }
  }
}
</script>
  
<style lang="scss" scoped>
.single-date-picker__date {
  font-size: 10px;
  font-size: 14px;
  height: 22px;
  width: 22px;
  display: table-cell;
  vertical-align: middle;
  box-sizing: border-box;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  margin-left: auto;
  margin-right: auto;
  color: #413F3F;
  cursor: pointer;
  display: block;

  &:hover,
  &.single-date-picker__selected {
    &::before {
      content: '';
      width: 12px;
      position: absolute;
      right: 8px;
      background: #D4A5B4;
      bottom: 8px;
      border-radius: 100%;
      height: 12px;
    }
  }

  &.single-date-picker__today {
    &::before {
      content: '';
      width: 12px;
      position: absolute;
      right: 8px;
      background: #D4A5B4;
      bottom: 8px;
      border-radius: 100%;
      height: 12px;
    }
  }

}

@media (max-width: 550px) {
  .single-date-picker__date {
    font-size: 17px;
    line-height: 21px;
    width: 20px;
    height: 20px;
  }
  .single-date-picker__selected {
    &::before {
      content: '';
      width: 6px !important;
      position: absolute;
      right: 50% !important;
      transform: translateX(50%);
      background: #D4A5B4;
      bottom: 0px !important;
      border-radius: 100%;
      height: 6px !important;
    }
  }

  .single-date-picker__today {
    &::before {
      content: '';
      width: 6px !important;
      position: absolute;
      right: 50% !important;
      transform: translateX(50%);
      background: #D4A5B4;
      bottom: 0px !important;
      border-radius: 100%;
      height: 6px !important;
    }
  }
}
</style>