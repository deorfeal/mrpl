<template>
    <div class="entrance__answer answer">
        <OpenGuestMenuTop :closeButtonIsActive="true" :backArrowIsActive="true" :backPage="'Faq'" @clickOnBackArrow="clickOnBackArrow"
            @clickOnCloseButton="$emit('clickOnCloseButton')" />
        <div class="answer__inner">
            <h1 class="answer__title">
                Question two
            </h1>
            <p class="answer__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet
            </p>
            <img class="answer__img" src="../../../public/images/entrance-img.png" alt="#">
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
.answer {
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
        margin-bottom: 25px;
    }

    &__text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        margin-bottom: 25px;
        color: #413F3F;
    }

    &__img {
        max-width: 605px;
        max-height: 309px;
        object-fit: cover;
    }
}
@media (max-width: 1400px) {
    .answer__img {
        width: 100%;
    }
}
@media (max-width: 1025px) {
    .answer {
        max-width: 610px;
        margin-left: auto;
        margin-right: auto;
    }
}
@media (max-width: 400px) {
    .answer {
        margin-top: 45px;
    }
    .answer__title {
        @include adaptiv-phone-value('font-size', 20, 17, 1);
        @include adaptiv-phone-value('line-height', 25, 21, 1);
        @include adaptiv-phone-value('margin-bottom', 25, 15, 1);
    }
    .answer__text {
        @include adaptiv-phone-value('margin-bottom', 25, 15, 1);
    }
}
</style>