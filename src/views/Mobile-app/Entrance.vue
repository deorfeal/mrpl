<template>
  <div class="big-wrapper">
    <div class="entrance">
      <Aside />
      <div class="entrance__wrapper">
        <component
          @clickOnMenuButtton="openGuestMenu"
          @clickOnCloseButton="closeGuestMenu"
          @clickOnRegButton="openRegPage"
          @clickOnBackArrow="openBackPage"
          @clickOnFaqButton="openFaqPage"
          @clickOnFirstQuestion="openAnswerPage"
          @clickOnRemindButton="openRemindPage"
          @clickOnContactsButton="openContactsPage"
          @clickOnToLoginButton="closeGuestMenu"
          :is="currentTab"
        >
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../Entrance-components/Aside.vue";
import SingIn from "../Entrance-components/SingIn.vue";
import EntranceMenu from "../Entrance-components/EntranceMenu.vue";
import RegistrationVue from "../Entrance-components/Registration.vue";
import Faq from "../Entrance-components/Faq.vue";
import AnswerVue from "../Entrance-components/Answer.vue";
import RemainderVue from "../Entrance-components/Remainder.vue";
import Contacts from "../Entrance-components/Contacts.vue";
export default {
  components: {
    Aside,
    SingIn,
    EntranceMenu,
    RegistrationVue,
    Faq,
    AnswerVue,
    RemainderVue,
    Contacts,
  },
  methods: {
    openGuestMenu() {
      this.currentTab = "EntranceMenu";
    },
    closeGuestMenu() {
      this.currentTab = "SingIn";
    },
    openRegPage() {
      this.currentTab = "RegistrationVue";
    },
    openBackPage(backPageName) {
      this.currentTab = backPageName;
    },
    openFaqPage() {
      this.currentTab = "Faq";
    },
    openAnswerPage() {
      this.currentTab = "AnswerVue";
    },
    openRemindPage() {
      this.currentTab = "RemainderVue";
    },
    openContactsPage() {
      this.currentTab = "Contacts";
    },
  },
  data() {
    return {
      currentTab: "SingIn",
      tabs: [
        "SingIn",
        "EntranceMenu",
        "RegistrationVue",
        "Faq",
        "RemainderVue",
        "Contacts",
      ],
    };
  },
  watch: {
    currentTab() {
      if (this.currentTab != "SingIn" && this.currentTab != "RemainderVue") {
        document.body.classList.add("body-closed");
      } else {
        document.body.classList.remove("body-closed");
      }

      //

      if (window.innerWidth <= 850) {
        if (this.currentTab == "RemainderVue") {
          document
            .querySelector(".big-wrapper")
            .classList.add("big-wrapper--reminder");
        } else {
          document
            .querySelector(".big-wrapper")
            .classList.remove("big-wrapper--reminder");
        }
      }

      window.addEventListener("resize", () => {
        if (window.innerWidth <= 850) {
          if (this.currentTab == "RemainderVue") {
            document
              .querySelector(".big-wrapper")
              .classList.add("big-wrapper--reminder");
          } else {
            console.log("smt");
            document
              .querySelector(".big-wrapper")
              .classList.remove("big-wrapper--reminder");
          }
        }
      });
    },
  },
  mounted() {
    if (window.innerWidth <= 1025) {
      document.querySelector(".entrance").style.minHeight =
        window.innerHeight - 30 + "px";
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1025) {
        document.querySelector(".entrance").style.minHeight =
          window.innerHeight - 30 + "px";
      } else {
        document.querySelector(".entrance").style.minHeight = "940px";
      }
    });
    document
      .querySelector(".big-wrapper")
      .parentNode.classList.add("app--center");
  },
};
</script>

<style lang="scss">
</style>