<template>
  <div class="wrapper-big">
    <MainHeaderVue :activeMenuOrder="0" />
    <MainBack :title="'Orders'" />
    <main class="main orders-main">
      <section class="main__orders orders">
        <form class="orders__item orders-item mix item-first" action="#">
          <div class="orders-item__top orders-item-top">
            <h1 class="orders-item-top__title">Oders</h1>
            <div class="orders-item-top__box orders-item-top-box">
              <a
                class="orders-item-top-box__btn"
                data-fancybox
                href="#new-order"
              >
                Create order
              </a>
            </div>
          </div>
          <div class="orders-item__buttons">
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-first"
            >
              New orders
            </button>
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-second"
            >
              Active orders
            </button>
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-third"
            >
              Complited orders
            </button>
          </div>
          <div class="orders-item__inner">
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">Apply</button>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">Apply</button>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">Apply</button>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">Apply</button>
            </div>
          </div>
        </form>
        <form class="orders__item orders-item mix item-second" action="#">
          <div class="orders-item__top orders-item-top">
            <h1 class="orders-item-top__title">Oders</h1>
            <div class="orders-item-top__box orders-item-top-box">
              <p class="orders-item-top-box__text">
                <span>Status filter:</span>
                {{ this.filterStatus }}
              </p>
              <a
                class="orders-item-top-box__btn"
                data-fancybox
                href="#status-filter"
              >
                Edit filter
              </a>
            </div>
          </div>
          <div class="orders-item__buttons">
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-first"
            >
              New orders
            </button>
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-second"
            >
              Active orders
            </button>
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-third"
            >
              Complited orders
            </button>
          </div>
          <div class="orders-item__inner">
            <OrdersActiveItem v-for="item in this.activeOrdersItemValues" :key="item.id" :valueOfItem="item"/>
            <!-- <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Status: </span>
                  <span class="orders-item-box__row-text--send">
                    Contract send
                  </span>
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">
                Edit status
              </button>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Status: </span>
                  <span class="orders-item-box__row-text--new"> New </span>
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">
                Edit status
              </button>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Status: </span>
                  <span class="orders-item-box__row-text--canceled">
                    Canceled
                  </span>
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">
                Edit status
              </button>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Status: </span>
                  <span class="orders-item-box__row-text--canceled">
                    Canceled
                  </span>
                </p>
              </div>
              <button class="orders-item-box__btn" type="button">
                Edit status
              </button>
            </div> -->
          </div>
        </form>
        <form class="orders__item orders-item mix item-third" action="#">
          <div class="orders-item__top orders-item-top">
            <h1 class="orders-item-top__title">Oders</h1>
          </div>
          <div class="orders-item__buttons">
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-first"
            >
              New orders
            </button>
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-second"
            >
              Active orders
            </button>
            <button
              class="orders-item__buttons-btn"
              type="button"
              data-filter=".item-third"
            >
              Complited orders
            </button>
          </div>
          <div class="orders-item__inner">
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Date: </span>
                  07.12.2024
                </p>
              </div>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Date: </span>
                  07.12.2024
                </p>
              </div>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Date: </span>
                  07.12.2024
                </p>
              </div>
            </div>
            <div class="orders-item__box orders-item-box">
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Client: </span>
                  Darlene Robertson
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Phone number: </span>
                  +4 217 555 01 13
                </p>
              </div>
              <div class="orders-item-box__row">
                <p class="orders-item-box__row-text">
                  <span> Date: </span>
                  07.12.2024
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
      <form class="main__new-order new-order" id="new-order" action="#">
        <div class="new-order__inner">
          <h2 class="new-order__title">New order</h2>
          <div class="new-order__row">
            <p class="new-order__row-text">Name</p>
            <input class="new-order__row-input" type="text" />
          </div>
          <div class="new-order__row">
            <p class="new-order__row-text">Phone number</p>
            <input
              class="new-order__row-input new-order__row-input--phone"
              placeholder="+4 XXX XXX"
              type="tel"
              id="phone"
              pattern="\+4 \d{3} \d{3} \d{3}"
              maxlength="12"
            />
          </div>
          <div class="new-order__row">
            <p class="new-order__row-text">Date</p>
            <input
              class="new-order__row-input"
              type="text"
              placeholder="MM/DD/YY"
            />
          </div>
          <div class="new-order__row">
            <p class="new-order__row-text">PLZ</p>
            <input
              class="new-order__row-input"
              type="text"
              placeholder="+- 50 км"
            />
          </div>
          <div class="new-order__bottom new-order-bottom">
            <p class="new-order-bottom__text">I am interested in:</p>
            <div class="new-order-bottom__inner">
              <label class="container">
                Wedding presenter &amp; DJ
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                Singer
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                Photographer
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                Additional Services
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                Catering
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                Videograph
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="new-order__buttons">
          <button class="new-order__buttons-btn is-close" tabindex="0">
            Cancel
          </button>
          <button class="new-order__buttons-btn" type="submit">Create</button>
        </div>
      </form>
      <div class="main__status-filter status-filter" id="status-filter">
        <p class="status-filter__text">Status filter</p>
        <div class="status-filter__inner">
          <button
            class="status-filter__status is-close"
            @click="chooseActiveFilterStatus"
            tabindex="0"
          >
            All status
          </button>
          <button
            class="status-filter__status is-close"
            @click="chooseActiveFilterStatus"
            tabindex="0"
          >
            Processed
          </button>
          <button
            class="status-filter__status is-close"
            @click="chooseActiveFilterStatus"
            tabindex="0"
          >
            Call with a client
          </button>
          <button
            class="status-filter__status is-close"
            @click="chooseActiveFilterStatus"
            tabindex="0"
          >
            Zoom call
          </button>
          <button
            class="status-filter__status is-close"
            @click="chooseActiveFilterStatus"
            tabindex="0"
          >
            Send contract
          </button>
          <button
            class="status-filter__status is-close"
            @click="chooseActiveFilterStatus"
            tabindex="0"
          >
            Canceled
          </button>
        </div>
        <button class="status-filter__btn is-close" tabindex="0">Cancel</button>
      </div>
    </main>
  </div>
</template>

<script>
import MainBack from "./Main-components/Main-back.vue";
import MainHeaderVue from "./Main-components/Main-header.vue";
import OrdersActiveItem from "./Main-components/Orders-active-item.vue";
export default {
  components: {
    MainBack,
    MainHeaderVue,
    OrdersActiveItem
  },
  mounted() {
    document.querySelector(".wrapper-big").style.minHeight =
      +window.innerHeight + "px";
    var mixer = mixitup(".orders", {
      load: {
        filter: ".item-first",
      },
      animation: {
        enable: false,
      },
    });

    const phoneInput = document.querySelector(".new-order__row-input--phone");
    phoneInput.addEventListener("input", handleInput);
    phoneInput.addEventListener("keydown", handleKeyDown);

    let prevInputValue = "";
    function handleInput(event) {
      const inputValue = event.target.value;
      if (inputValue.startsWith("+4 ")) {
        // Do nothing
      } else if (inputValue.length === 1) {
        event.target.value = "+4 ";
      } else {
        event.target.value = prevInputValue;
      }
      prevInputValue = event.target.value;
    }

    function handleKeyDown(event) {
      const key = event.key;
      const inputValue = event.target.value;
      if (key === "Backspace" || key === "Delete") {
        if (inputValue.length === 4) {
          event.preventDefault();
          event.target.value = "";
        } else if (inputValue.length > 4) {
          prevInputValue = inputValue.slice(0, -1);
        }
      } else if (/^\d$/.test(key)) {
        if (inputValue.length < 12) {
          prevInputValue = inputValue + key;
        }
      } else {
        event.preventDefault();
      }
    }
  },
  data() {
    return {
      filterStatus: "All status",
      phoneValue: "",
      phoneCurrenValue: "",
      activeOrdersItemValues: [
        {
          clientName: 'Darlene Robertson',
          phoneNumber: '+4 217 555 01 13',
          status: 'Contract send',
          id: 0,
        },
        {
          clientName: 'Darlene Robertson',
          phoneNumber: '+4 217 555 01 13',
          status: 'New',
          id: 1,
        },
        {
          clientName: 'Darlene Robertson',
          phoneNumber: '+4 217 555 01 13',
          status: 'Canceled',
          id: 2,
        },
        {
          clientName: 'Darlene Robertson',
          phoneNumber: '+4 217 555 01 13',
          status: 'Canceled',
          id: 3,
        }
      ]
    };
  },
  methods: {
    chooseActiveFilterStatus(emit) {
      this.filterStatus = emit.target.innerHTML;
      console.log(this.filterStatus);
    },
    focusOnPhoneInput() {
      this.phoneCurrenValue = "+4 ";
      document.querySelector(".new-order__row-input--phone").value =
        this.phoneCurrenValue;
    },
  },
  watch: {},
};
</script>

<style lang="scss">
@import "../assets/scss/_vars.scss";

.orders {
  margin-left: auto;
  width: 100%;
  margin-right: auto;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  height: 100%;
  flex-grow: 1;
  padding: 30px;
  padding-top: 20px;

  // checkbox

  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  // //
}

.orders-item {
  &:nth-child(2) {
    .orders-item-box::before {
      background: #677a45;
    }

    .orders-item-box__row:nth-child(3) {
      margin-left: auto;
      width: 170px;
    }

    .orders-item-box__btn {
      margin-left: unset;
    }
  }

  &:nth-child(3) {
    .orders-item-box::before {
      background: #bfa575;
    }
  }

  &__buttons {
    padding-left: 20px;
    display: flex;
    gap: 80px;
    align-items: center;
    margin-bottom: 25px;

    .mixitup-control-active {
      color: #677a45;

      &::before {
        opacity: 1;
      }
    }
  }

  &__buttons-btn {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #7c7c7c;
    padding-bottom: 15px;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    transition: color 0.3s;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background: #677a45;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover {
      color: #677a45;

      &::before {
        opacity: 1;
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.orders-item-top {
  margin-bottom: 25px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eceef0;
  min-height: 70px;

  &__title {
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.3px;
    color: #bfa575;
  }
}

.orders-item-top-box {
  display: flex;
  align-items: center;
  gap: 55px;

  &__btn {
    padding: 15px;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    max-width: 160px;
    color: #bfa575;
    border: 1px solid #bfa575;
    border-radius: 14px;
    transition: background 0.3s, color 0.3s;

    &:hover {
      background: #bfa575;
      color: #ffffff;
    }
  }

  &__text {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;

    span {
      color: #82b8e9;
    }

    color: #413f3f;
  }
}
//

.new-order {
  padding: 0;
  background: #ffffff;
  max-width: 350px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  display: none;

  &__inner {
    padding: 25px 15px 35px 15px;
  }

  &__title {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.3px;
    margin-bottom: 25px;
    color: #bfa575;
  }

  &__row {
    margin-bottom: 15px;
  }

  &__row-text {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #7c7c7c;
    margin-bottom: 10px;
  }

  &__row-input {
    padding: 5px 15px;
    height: 48px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #eceef0;
    border-radius: 14px;

    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #7c7c7c;

    &::placeholder {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.3px;
      color: #7c7c7c;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    border-top: 1px solid #eceef0;
    position: relative;

    &::after {
      content: "";
      height: 100%;
      width: 1px;
      background: #eceef0;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__buttons-btn {
    font-size: 17px;
    padding: 18px 0;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #d4a5b4;
    width: 50%;

    &:nth-child(2) {
      color: #82b8e9;
    }
  }

  // checkbox

  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;

    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: -0.3px;

    /* kBlackMainColor */

    color: #413f3f;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: unset;
    padding: 0;
    padding-left: 32px;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #fff;

    border: 1px solid #eceef0;
    border-radius: 6px;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #fff;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #fff;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-image: url(../../public/images/tick-icon.svg);
    width: 11px;
    background-repeat: no-repeat;
    background-size: contain;
    height: 9px;
  }

  // //
}

.new-order-bottom {
  &__text {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #7c7c7c;
  }

  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px 30px;
  }
}

//

.status-filter {
  background: #ffffff;
  padding: 0;
  padding-top: 25px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  max-width: 345px;
  display: none;
  width: 345px;

  &__text {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.3px;
    margin-bottom: 15px;
    color: #bfa575;
  }

  &__inner {
    width: 100%;
    padding: 0 15px;
  }

  &__status {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #eceef0;
    display: block;
    width: 100%;

    &:last-child {
      margin-bottom: 30px;
      border: unset;
    }
  }

  &__btn {
    padding-top: 15px;
    border-top: 1px solid #eceef0;
    font-size: 17px;
    line-height: 21px;
    padding-bottom: 20px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #d4a5b4;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 1000px) {
  .orders-item-box {
    margin-left: 0;
    flex-direction: column;
    padding-left: 0;
    padding-top: 30px;

    &::before {
      width: 100%;
      height: 16px;
      border-radius: 13px 13px 0 0;
    }
  }

  .orders-item:nth-child(2) .orders-item-box__row:nth-child(3) {
    margin-left: unset;
  }

  .orders-item__buttons {
    padding-left: 0;
  }

  .orders-item-box__btn {
    //font-size: 17px;
    //line-height: 21px;
    padding: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: unset;
    border: unset;
    border-top: 1px solid #eceef0;
    margin-top: 15px;
    border-radius: 0 0 13px 13px;

    &:hover {
      background: #fff;
      color: #82b8e9;
    }
  }

  .orders-item-box__row {
    margin-bottom: 5px;
  }

  .orders-item:nth-child(3) {
    .orders-item-box {
      padding-bottom: 10px;
    }
  }

  .orders-item__buttons {
    gap: 25px;
  }

  .orders-item-box__row {
    margin-right: 0;
  }
}

@media (max-width: 750px) {
  .orders {
    margin-bottom: 70px;
    background: unset;
    box-shadow: unset;
    padding: unset;
    padding-top: 20px;
  }

  .orders-item-top-box__btn {
    position: fixed;
    bottom: 85px;
    right: 15px;
    width: 48px;
    height: 48px;
    font-size: 1px;
    background: #bfa575;
    z-index: 10;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    &::before {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      background-image: url(../../public/images/plus-icon.svg);
      background-repeat: no-repeat;
    }
  }

  .orders-item:nth-child(2) {
    .orders-item-top-box__btn::before {
      background-image: url(../../public/images/filter-icon.svg);
    }
  }

  .orders-main {
    position: relative;
  }

  .orders-item-top {
    padding: unset;
    margin: unset;
    min-height: unset;
    border: unset;
  }

  .orders-item-top__title {
    display: none;
  }

  .orders-item__buttons {
    padding-top: 5px;
    position: absolute;
    background: #fff;
    top: -1px;
    justify-content: center;
    left: 0;
    z-index: 10;
    right: 0;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    flex-wrap: wrap;
  }

  .orders-item__inner {
    margin-top: 25px;
  }

  .orders-item-top-box__text {
    display: none;
  }

  .orders-item__buttons-btn {
    @include adaptiv-phone-value("font-size", 17, 14, 1);
    @include adaptiv-phone-value("line-height", 21, 17, 1);
  }

  .orders-item-box__row-text {
    @include adaptiv-phone-value("font-size", 17, 14, 1);
    @include adaptiv-phone-value("line-height", 21, 17, 1);
  }
}

@media (max-width: 550px) {
  .orders-item-box__row {
    margin-right: auto;
    margin-left: 15px;
  }

  .orders-item:nth-child(2) .orders-item-box__row:nth-child(3) {
    margin-left: 15px;
  }
}
</style>