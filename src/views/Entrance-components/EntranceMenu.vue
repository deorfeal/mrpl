<template>
    <div class="entrance__menu entrance-menu">
        <OpenGuestMenuTop :closeButtonIsActive="true" :backArrowIsActive="false" @clickOnCloseButton="$emit('clickOnCloseButton')"/>
        <ul class="entrance-menu__list">
            <li class="entrance-menu__list-item" @click="$emit('clickOnRegButton')">
                <button class="entrance-menu__list-btn" href="#" type="button" >
                    Registration
                </button>
            </li>
            <li class="entrance-menu__list-item" @click="$emit('clickOnFaqButton')">
                <button class="entrance-menu__list-btn" href="#" type="button">
                    FAQ
                </button>
            </li>
            <li class="entrance-menu__list-item">
                <button class="entrance-menu__list-btn" href="#" type="button" @click="$emit('clickOnContactsButton')">
                    Contacts
                </button>
            </li>
            <li class="entrance-menu__list-item">
                <button class="entrance-menu__list-btn" href="#" type="button">
                    Terms and conditions
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import OpenGuestMenuTop from './OpenGuestMenuTop.vue';
export default {
    components: {
        OpenGuestMenuTop
    },
}
</script>

<style lang="scss">
@import '../../assets/scss/_vars.scss';
.entrance-menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    &__list {
    }

    &__list-item {
        cursor: pointer;
        padding: 15px 40px 15px 8px;
        border-bottom: 1px solid #ECEEF0;
        &:hover {
            &::after {
                transform: translateY(-50%) translateX(8px);
            }
        }
        &:last-child {
            border: unset;
        }
        position: relative;
        &::after {
            content: '';
            width: 24px;
            height: 24px;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            background-image: url(../../../public/images/entrance-arrow.svg);
            background-repeat: no-repeat;
            background-size: contain;
            transition: transform 0.3s;
        }
    }

    &__list-btn {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }
}

@media (max-width: 1025px) {
    .entrance-menu {
        max-width: 610px;
        margin-left: auto;
        margin-right: auto;
    }

   // @include adaptiv-phone-value('font-size', 17, 14, 1);
   // @include adaptiv-phone-value('line-height', 21, 17, 1);
}
@media (max-width: 400px) {
    .body-closed {
        .entrance {
            justify-content: flex-start;
        }
    }
    .entrance-menu {
        margin-top: 40px;
    }
}
</style>