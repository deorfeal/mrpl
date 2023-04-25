<template>
  <div class="orders-item__inner">
    <div class="orders-item__box orders-item-box">
      <div class="orders-item-box__row">
        <p class="orders-item-box__row-text">
          <span> Client: </span>
          {{ this.valueOfItem.clientName }}
        </p>
      </div>
      <div class="orders-item-box__row">
        <p class="orders-item-box__row-text">
          <span> Phone number: </span>
          {{ this.valueOfItem.phoneNumber }}
        </p>
      </div>
      <div class="orders-item-box__row">
        <p class="orders-item-box__row-text">
          <span> Status: </span>
          <span
            class="orders-item-box__row-text"
            :style="{ color: this.activeColor }"
          >
            {{ this.valueOfItem.status }}
          </span>
        </p>
      </div>
      <a class="orders-item-box__btn" data-fancybox :href="'#Edit-filter' + this.valueOfItem.id"
        >Edit status</a
      >
    </div>
    <div class="main__status-filter status-filter" :id="'Edit-filter' + this.valueOfItem.id">
      <p class="status-filter__text">Edit status</p>
      <div class="status-filter__inner">
        <button
          ref="statusFilterStatusFirst"
          class="status-filter__status is-close"
          @click="chooseActiveFilterStatus"
          tabindex="0"
          :style="{ color: this.firstActiveColor }"
        >
          Contract send
        </button>
        <button
          ref="statusFilterStatusSecond"
          class="status-filter__status is-close"
          @click="chooseActiveFilterStatus"
          tabindex="0"
          :style="{ color: this.secondActiveColor }"
        >
          New
        </button>
        <button
          ref="statusFilterStatusThird"
          class="status-filter__status is-close"
          @click="chooseActiveFilterStatus"
          tabindex="0"
          :style="{ color: this.thirdActiveColor }"
        >
          Canceled
        </button>
      </div>
      <button class="status-filter__btn is-close" tabindex="0">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["valueOfItem"],
  data() {
    return {
      activeColor: "",
      firstActiveColor: "",
      secondActiveColor: "",
      thirdActiveColor: "",
    };
  },
  mounted() {
    if (this.valueOfItem.status == "Contract send") {
      this.activeColor = "#BFA575";
      this.firstActiveColor = "#677A45";
    } else if (this.valueOfItem.status == "New") {
      this.activeColor = "#677A45";
      this.secondActiveColor = "#677A45";
    } else if (this.valueOfItem.status == "Canceled") {
      this.activeColor = "#D4A5B4";
      this.thirdActiveColor = "#677A45";
    }
  },
};
</script>

<style lang="scss">
.orders-item-box {
  margin-left: 20px;
  display: flex;
  padding-left: 30px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #eceef0;
  border-radius: 14px;
  min-height: 52px;
  position: relative;

  &::before {
    content: "";
    width: 16px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #82b8e9;
    border-radius: 13px 0px 0px 13px;
  }

  &__row {
    margin-right: 25px;
  }

  &__row-text {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #413f3f;

    span {
      color: #82b8e9;
      margin-right: 5px;
    }
  }

  &__btn {
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #82b8e9;
    width: 160px;
    max-width: 160px;
    padding: 13px;
    border: 1px solid #82b8e9;
    border-radius: 0px 13px 13px 0px;
    margin-left: auto;
    transition: background 0.3s, color 0.3s;

    &:hover {
      background: #82b8e9;
      color: #fff;
    }
  }

  &__row-text--send {
    color: #bfa575 !important;
  }

  &__row-text--new {
    color: #677a45 !important;
  }

  &__row-text--canceled {
    color: #d4a5b4 !important;
  }
}
</style>