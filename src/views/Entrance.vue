<template>
    <div class="big-wrapper">
        <div class="entrance">
            <Aside />
            <div class="entrance__wrapper">
                <component @clickOnMenuButtton="openGuestMenu" @clickOnCloseButton="closeGuestMenu"
                    @clickOnRegButton="openRegPage" @clickOnBackArrow="openBackPage" @clickOnFaqButton="openFaqPage"
                    @clickOnFirstQuestion="openAnswerPage" @clickOnRemindButton="openRemindPage" :is="currentTab">
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Aside from './Entrance-components/Aside.vue';
import SingIn from './Entrance-components/SingIn.vue';
import EntranceMenu from './Entrance-components/EntranceMenu.vue';
import RegistrationVue from './Entrance-components/Registration.vue';
import Faq from './Entrance-components/Faq.vue';
import AnswerVue from './Entrance-components/Answer.vue';
import RemainderVue from './Entrance-components/Remainder.vue';
export default {
    components: {
        Aside,
        SingIn,
        EntranceMenu,
        RegistrationVue,
        Faq,
        AnswerVue,
        RemainderVue
    },
    methods: {
        openGuestMenu() {
            this.currentTab = 'EntranceMenu'
        },
        closeGuestMenu() {
            this.currentTab = 'SingIn'
        },
        openRegPage() {
            this.currentTab = 'RegistrationVue'
        },
        openBackPage(backPageName) {
            this.currentTab = backPageName
        },
        openFaqPage() {
            this.currentTab = 'Faq'
        },
        openAnswerPage() {
            this.currentTab = 'AnswerVue'
        },
        openRemindPage() {
            this.currentTab = 'RemainderVue'
        },
    },
    data() {
        return {
            currentTab: 'SingIn',
            tabs: ['SingIn', 'EntranceMenu', 'RegistrationVue', 'Faq', 'RemainderVue']
        }
    },
    watch: {
        currentTab() {
            if (this.currentTab != 'SingIn' && this.currentTab != 'RemainderVue') {
                document.body.classList.add('body-closed')
            } else {
                document.body.classList.remove('body-closed')
            }

            // 

            if (window.innerWidth <= 850) {
                if (this.currentTab == 'RemainderVue') {
                    document.querySelector('.big-wrapper').classList.add('big-wrapper--reminder')
                } else {
                    document.querySelector('.big-wrapper').classList.remove('big-wrapper--reminder')
                }
            }

            window.addEventListener('resize', () => {
                if (window.innerWidth <= 850) {
                    if (this.currentTab == 'RemainderVue') {
                        document.querySelector('.big-wrapper').classList.add('big-wrapper--reminder')
                    } else {
                        console.log('smt')
                        document.querySelector('.big-wrapper').classList.remove('big-wrapper--reminder')
                    }
                }
            })
        }
    },
    mounted() {
        if (window.innerWidth <= 1025) {
            document.querySelector('.entrance').style.minHeight = window.innerHeight - 30 + 'px'
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1025) {
                document.querySelector('.entrance').style.minHeight = window.innerHeight - 30 + 'px'
            } else {
                document.querySelector('.entrance').style.minHeight = '940px'
            }
        });
        document.querySelector('.big-wrapper').parentNode.classList.add('app--center');
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.app--center {
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.entrance {
    @import '../assets/scss/_vars.scss';
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 940px;

    margin-top: auto;
    margin-bottom: auto;

    margin-left: auto;
    margin-right: auto;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    width: 100%;

    &::before {
        content: '';
        width: 1px;
        height: 100%;
        background: #ECEEF0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    &__wrapper {
        position: relative;
        width: 50%;
        padding: 40px;
        @include adaptiv-value('padding-top', 70, 110, 1);
        @include adaptiv-value('padding-bottom', 70, 110, 1);
    }
}

@media (max-width: 1025px) {
    .body-closed {
        .entrance::before {
            content: unset;
        }

        .entrance__wrapper {
            width: 100%;
        }
    }
}

@media (max-width: 850px) {
    .entrance {
        flex-direction: column;
        min-height: unset;
        padding: 15px;
        padding-top: 45px;
        justify-content: center;
    }

    .entrance::before {
        content: unset;
    }

    .entrance__wrapper {
        padding: 0;
        position: unset;
        width: 100%;
    }
}

@media (max-width: 400px) {
    .entrance {
        justify-content: flex-start;
    }
}
</style>