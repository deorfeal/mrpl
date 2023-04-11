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
                <button class="entrance-menu__list-btn" href="#" type="button">
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
</style>