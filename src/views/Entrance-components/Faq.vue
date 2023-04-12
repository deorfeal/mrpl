<template>
    <div class="entrance__faq faq">
        <OpenGuestMenuTop :closeButtonIsActive="true" :backArrowIsActive="true" :backPage="'EntranceMenu'" @clickOnBackArrow="clickOnBackArrow"
            @clickOnCloseButton="$emit('clickOnCloseButton')" />
        <div class="faq__inner">
            <h1 class="faq__title">
                FAQ
            </h1>
            <ul class="faq__list">
                <li class="faq__list-item" @click="$emit('clickOnFirstQuestion')">
                    <p class="faq__list-text">
                        Question one
                    </p>
                </li>
                <li class="faq__list-item" @click="$emit('clickOnFirstQuestion')">
                    <p class="faq__list-text">
                        Question two
                    </p>
                </li>
                <li class="faq__list-item" @click="$emit('clickOnFirstQuestion')">
                    <p class="faq__list-text">
                        Question three
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import OpenGuestMenuTop from './OpenGuestMenuTop.vue';
export default {
    components: {
        OpenGuestMenuTop
    },
    methods: {
        clickOnBackArrow(backPageName) {
            this.$emit('clickOnBackArrow', backPageName)
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/_vars.scss';
.faq {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    &__inner {
 
    }

    &__title {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.3px;
        color: #BFA575;
        margin-bottom: 10px;
    }

    &__list {}

    &__list-item {
        cursor: pointer;
        padding: 20px 40px 15px 0px;
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

    &__list-text {
        font-size: 14px;
        line-height: 17px;
    }
}
@media (max-width: 1025px) {
    .faq {
        max-width: 610px;
        margin-left: auto;
        margin-right: auto;
    }
    .faq__title {
        @include adaptiv-phone-value('font-size', 20, 17, 1);
        @include adaptiv-phone-value('line-height', 25, 21, 1);
    }
}
@media (max-width: 400px) {
    .faq__inner {
        margin-top: 50px;
    }
}
</style>