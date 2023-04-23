<template>
  <div class="wrapper-big">
    <MainHeaderVue :activeMenuOrder="2" />
    <MainBack :title="'Statistic'" />
    <main class="main main-statistic-app">
      <section class="main__statistic statistic">
        <div class="statistic__inner">
          <div class="statistic__item statistic-item">
            <p class="statistic-item__text">Offered in 2023</p>
            <p class="statistic-item__text-count">87</p>
          </div>
          <div class="statistic__item statistic-item">
            <p class="statistic-item__text">Under consideration</p>
            <p class="statistic-item__text-count">2</p>
          </div>
          <div class="statistic__item statistic-item">
            <p class="statistic-item__text">Signed contracts</p>
            <p class="statistic-item__text-count">32</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
  
  <script>
import MainBack from "../Main-components/Main-back.vue";
import MainHeaderVue from "../Main-components/Main-header.vue";

export default {
  components: {
    MainBack,
    MainHeaderVue,
  },
  mounted() {
    document.querySelector(".wrapper-big").style.minHeight =
      +window.innerHeight + "px";
  },
  data() {},
  methods: {},
};
</script>
<style lang="scss">
.statistic {
  &__inner {
    padding: 15px 25px;
    background: #ffffff;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
  }
}
.statistic-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 0;
  &:nth-child(1) {
    .statistic-item__text-count {
      color: #413f3f;
    }
  }
  &:nth-child(2) {
    border-top: 1px solid #eceef0;
    border-bottom: 1px solid #eceef0;
    .statistic-item__text-count {
      color: #82b8e9;
    }
  }
  &:nth-child(3) {
    .statistic-item__text-count {
      color: #bfa575;
    }
  }
  &__text {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #7c7c7c;
  }

  &__text-count {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
  }
}
</style>