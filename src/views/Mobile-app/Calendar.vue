<template>
  <div class="wrapper-big">
    <MainHeaderVue :activeMenuOrder="0" />
    <MainBack :title="'Calendar'" />
    <main class="main main-calendar main-edit-artists main-app-calendar">
      <form class="main__edit-artist edit-artist" action="#">
        <div class="edit-artist__top edit-artist-top">
          <h1 class="edit-artist-top__title">Artist calendar</h1>
          <div class="edit-artist-top__box">
            <button class="edit-artist-top__box-btn" type="reset">
              Cancel
            </button>
            <button class="edit-artist-top__box-btn" type="submit">Add</button>
          </div>
        </div>
        <div class="edit-artist__big-wrapper">
          <div class="edit-artist__calendar edit-artist-calendar">
            <CalendarView />
            <div
              class="edit-artist-calendar__bottom edit-artist-calendar-bottom"
            >
              <a
                class="edit-artist-calendar-bottom__btn"
                data-fancybox
                href="#new-order"
              >
                Create order
              </a>
            </div>
          </div>
        </div>
      </form>
      <div class="main__offers offers">
        <div class="offers__top offers-top" v-if="isMonth">
          <div class="offers-top__month-info offers-top-month-info">
            <p class="offers-top-month-info__text">
              Month:
              <span> 7 сonfirmed </span>
              /
              <span> 2 оffered </span>
            </p>
          </div>
        </div>
        <div class="offers-top__day-info offers-top-day-info" v-if="isMonth != true">
          <p class="offers-top-day-info__text">
            Day:
            <span> 1 event </span>
          </p>
          <button class="offers-top-day-info__btn" type="button" @click="toMounth">
            Month wiev
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                fill="#677A45"
              />
            </svg>
          </button>
        </div>
        <div class="offers__lock offers-lock" v-if="isMonth != true">
          <p class="offers-lock__text">{{this.lockInfo}}</p>
          <label class="form-switch" @click="lockInput">
            <input type="checkbox" />
            <i></i>
          </label>
        </div>
      </div>
      <swiper
        class="main__offers-swiper offers-swiper"
        :loop="true"
        :modules="modules"
        :slides-per-view="1.2"
        :space-between="30"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="{ 301: { slidesPerView: 1 }, 901: { slidesPerView: 2 } }"
      >
        <swiper-slide class="offers-swiper__slide offers-swiper-slide">
          <div class="offers-swiper-slide__box offers-swiper-slide-box">
            <div class="offers-swiper-slide-box__top">
              <p class="offers-swiper-slide-box__top-text">3 January 2023</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="offers-swiper-slide-box__inner">
              <p class="offers-swiper-slide-box__text">
                Location:
                <span>
                  Gasthof Kloster Seligenporten, Klosterhof 9, 90602
                  Seligenporten
                </span>
              </p>
              <p class="offers-swiper-slide-box__text">
                Manager:
                <span> +4 217 555 01 13 ( Sarah Schmeida ) </span>
              </p>
            </div>
            <button class="offers-swiper-slide-box__btn" type="button">
              Contract
            </button>
          </div>
        </swiper-slide>
        <swiper-slide class="offers-swiper__slide offers-swiper-slide">
          <div class="offers-swiper-slide__box offers-swiper-slide-box">
            <div class="offers-swiper-slide-box__top">
              <p class="offers-swiper-slide-box__top-text">3 January 2023</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="offers-swiper-slide-box__inner">
              <p class="offers-swiper-slide-box__text">
                Location:
                <span>
                  Gasthof Kloster Seligenporten, Klosterhof 9, 90602
                  Seligenporten
                </span>
              </p>
              <p class="offers-swiper-slide-box__text">
                Manager:
                <span> +4 217 555 01 13 ( Sarah Schmeida ) </span>
              </p>
            </div>
            <button class="offers-swiper-slide-box__btn" type="button">
              Contract
            </button>
          </div>
        </swiper-slide>
        <swiper-slide class="offers-swiper__slide offers-swiper-slide">
          <div class="offers-swiper-slide__box offers-swiper-slide-box">
            <div class="offers-swiper-slide-box__top">
              <p class="offers-swiper-slide-box__top-text">3 January 2023</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="offers-swiper-slide-box__inner">
              <p class="offers-swiper-slide-box__text">
                Location:
                <span>
                  Gasthof Kloster Seligenporten, Klosterhof 9, 90602
                  Seligenporten
                </span>
              </p>
              <p class="offers-swiper-slide-box__text">
                Manager:
                <span> +4 217 555 01 13 ( Sarah Schmeida ) </span>
              </p>
            </div>
            <button class="offers-swiper-slide-box__btn" type="button">
              Contract
            </button>
          </div>
        </swiper-slide>
        <swiper-slide class="offers-swiper__slide offers-swiper-slide">
          <div class="offers-swiper-slide__box offers-swiper-slide-box">
            <div class="offers-swiper-slide-box__top">
              <p class="offers-swiper-slide-box__top-text">3 January 2023</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="offers-swiper-slide-box__inner">
              <p class="offers-swiper-slide-box__text">
                Location:
                <span>
                  Gasthof Kloster Seligenporten, Klosterhof 9, 90602
                  Seligenporten
                </span>
              </p>
              <p class="offers-swiper-slide-box__text">
                Manager:
                <span> +4 217 555 01 13 ( Sarah Schmeida ) </span>
              </p>
            </div>
            <button class="offers-swiper-slide-box__btn" type="button">
              Contract
            </button>
          </div>
        </swiper-slide>
      </swiper>
    </main>
  </div>
</template>

<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";

import MainBack from "../Main-components/Main-back.vue";
import MainHeaderVue from "../Main-components/Main-header.vue";
import EditArtists from "../Main-components/Edit-artists.vue";
import CalendarView from "../CalendarView.vue";
export default {
  components: {
    MainBack,
    MainHeaderVue,
    EditArtists,
    CalendarView,
    Swiper,
    SwiperSlide,
  },
  mounted() {
    document.querySelector(".wrapper-big").style.minHeight =
      +window.innerHeight + "px";
  },
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
  data() {
    return {
      lockInfo: 'Lock the day',
      isMonth: true,
    };
  },
  methods: {
    lockInput() {
      if ( this.lockInfo == 'Lock the day' ) {
        setTimeout(()=> {
          this.lockInfo = 'Unlock the day'
        }, 10)
      } else {
        setTimeout(()=> {
          this.lockInfo = 'Lock the day'
        }, 10)
      }
    },
    toMounth() {
      this.isMonth = true
    }
  },
  mounted() {
    for ( let item of document.querySelectorAll('.single-date-picker__date') )
      item.addEventListener('click', ()=> {
        this.isMonth = false
      })
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_vars.scss";
.main-app-calendar {
  margin-bottom: 75px;
  .edit-artist {
    margin-bottom: 25px;
  }
  .single-date-picker__selected {
    &::before {
      background: rgba(191, 165, 117, 0.16) !important;
      border-radius: 4px !important;
      left: 50% !important;
      right: unset !important;
      bottom: unset !important;
      top: 50% !important;
      width: 40px !important;
      height: 40px !important;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
.edit-artist-all-info__btn {
  svg:nth-child(1) {
    display: none;
  }
  svg:nth-child(2) {
    display: block;
  }
}
.main-calendar {
  .edit-artist__wrapper {
    display: none;
  }
}

.edit-artist__big-wrapper {
  display: flex;
  gap: 15px;
  justify-content: space-between;
}

.edit-artist-calendar {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;

  &__bottom {
  }
}

.edit-artist-calendar-bottom {
  &__btn {
    padding: 13px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff;
    border: 1px solid #677a45;
    border-radius: 14px;

    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #677a45;
    margin-bottom: 10px;
    transition: background 0.3s, color 0.3s;

    &:hover {
      background: #677a45;
      color: #fff;
    }
  }

  &__row {
    background: #ffffff;
    border: 1px solid #eceef0;
    border-radius: 14px;
    display: flex;
    gap: 25px;
    padding: 13px 30px;
    position: relative;

    &::before {
      content: "";
      width: 16px;
      height: 100%;
      background: #bfa575;
      background: #bfa575;
      border-radius: 13px 0px 0px 13px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
    }
  }

  &__row-text {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    color: #82b8e9;
    gap: 5px;

    span {
      color: #413f3f;
    }
  }
}

.form-switch {
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.form-switch i {
  position: relative;
  display: inline-block;
  margin-right: 0.5rem;
  width: 46px;
  height: 26px;
  background-color: #677A45;
  border-radius: 23px;
  vertical-align: text-bottom;
  transition: all 0.3s linear;
}
.form-switch i::before {
  content: "";
  position: absolute;
  left: 0;
  width: 42px;
  height: 22px;
  background-color: #677A45;
  border-radius: 11px;
  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
  transition: all 0.25s linear;
}
.form-switch i::after {
  content: "";
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 11px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
  transform: translate3d(2px, 2px, 0);
  transition: all 0.2s ease-in-out;
}
.form-switch:active i::after {
  width: 28px;
  transform: translate3d(2px, 2px, 0);
}
.form-switch:active input:checked + i::after {
  transform: translate3d(16px, 2px, 0);
}
.form-switch input {
  display: none;
}
.form-switch input:checked + i {
  background-color: #B3261E;
}
.form-switch input:checked + i::before {
  transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
}
.form-switch input:checked + i::after {
  transform: translate3d(22px, 2px, 0);
}

.offers {
}
.offers-top {
}
.offers-top-month-info {
  margin-bottom: 15px;
  &__text {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #413f3f;
    span {
      &:nth-child(1) {
        color: #bfa575;
      }
      &:last-child {
        color: #82b8e9;
      }
    }
  }
}
.offers-top-day-info {
  display: flex;
  &__text {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #413f3f;
    span {
      color: #bfa575;
    }
  }
  align-items: center;
  justify-content: space-between;
  &__btn {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    color: #677a45;
  }
}
.offers-lock {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  padding: 8px 12px 8px 15px;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  &__text {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #413f3f;
  }
}
.offers-swiper {
  max-width: 100%;
}
.offers-swiper-slide {
}
.offers-swiper-slide-box {
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  &__top {
    background: #bfa575;
    border-radius: 14px 14px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px 4px 15px;
  }

  &__top-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.3px;
    color: #ffffff;
  }

  &__inner {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    line-height: 18px;
    flex-wrap: wrap;
    letter-spacing: -0.3px;
    color: #82b8e9;
    span {
      color: #413f3f;
    }
  }

  &__btn {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;

    border-top: 1px solid #eceef0;

    color: #82b8e9;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 17px 0;
  }
}

@media (max-width: 1300px) {
  .edit-artist__big-wrapper {
    flex-direction: column;
    gap: 25px;
  }

  .edit-artist__inner {
    order: -1;
  }

  .edit-artist-calendar {
    gap: 30px;
  }
}

@media (max-width: 750px) {
  .edit-artist-calendar-bottom__row {
    flex-direction: column;
  }
  .main-calendar {
    .edit-artist-all-info {
      position: relative;
    }
    .edit-artist-all-info__btn {
      left: 50%;
      top: 0;
      transform: translateX(300%);
      right: unset;
    }
  }
}

@media (max-width: 550px) {
  .edit-artist-calendar-bottom__btn {
    display: none;
  }
  .edit-artist-top__box {
    display: none;
  }
  .main-calendar .edit-artist {
    background: unset;
  }
  .edit-artist-calendar-bottom__row {
    padding: 30px 15px 15px 15px;
  }
  .edit-artist-calendar-bottom__row::before {
    bottom: unset;
    right: 0;
    height: 16px;
    border-radius: 14px 14px 0 0;
    width: 100%;
  }
  .edit-artist {
    box-shadow: unset;
  }
  .main-calendar {
    .edit-artist-all-info__button {
      display: none;
      box-shadow: unset;
    }
    .edit-artist-all-info__inner {
      border: unset;
    }
    .edit-artist-all-info {
      border: unset;
    }
    .edit-artist-all-info {
      background: #ffffff;
      border: 1px solid #eceef0;
      box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
      border-radius: 14px;
    }
    .edit-artist-all-info {
      padding: 25px 15px 25px 15px;
    }
    .edit-artist-all-info__inner {
      padding-bottom: 0;
      margin-bottom: 0;
    }
    .edit-artist {
      padding: 0 !important;
    }
    .edit-artist__big-wrapper {
      gap: 10px;
    }
  }
  .edit-artist-calendar {
    gap: 10px;
  }
  .edit-artist-calendar-bottom__row {
    gap: 5px;
  }
  .main-calendar {
    .edit-artist-all-info__btn {
      top: 25px;
    }
  }
}
</style>