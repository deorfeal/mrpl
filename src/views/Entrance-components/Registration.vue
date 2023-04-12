<template>
    <div class="entrance__registration registration">
        <OpenGuestMenuTop :closeButtonIsActive="true" :backArrowIsActive="true" :backPage="'EntranceMenu'"
            @clickOnBackArrow="clickOnBackArrow" @clickOnCloseButton="$emit('clickOnCloseButton')" />
        <form class="registration__form registration-form" action="#">
            <h1 class="registration-form__title">
                Registration
            </h1>
            <p class="registration-form__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet
            </p>
            <p class="registration-form__text">
                If you want to work with us, send a request and our manager will contact you
            </p>
            <div class="registration-form__row">
                <p class="registration-form__row-text">
                    Phone number
                </p>
                <input class="registration-form__row-input" type="tel">
            </div>
            <button class="registration-form__btn" type="submit">
                Send
            </button>
        </form>
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
.registration {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}

.registration-form {
    &__title {
        margin-bottom: 25px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.3px;
        color: #BFA575;
    }

    &__text {
        margin-bottom: 15px;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;

        &:nth-child(3) {
            margin-bottom: 25px;
        }
    }

    &__row {
        margin-bottom: 15px;
    }

    &__row-text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 10px;

    }

    &__row-input {
        padding: 5px 15px;
        height: 48px;
        width: 320px;
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;

        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;

        &::placeholder {
            font-size: 14px;
            line-height: 18px;
            letter-spacing: -0.3px;
            color: #7C7C7C;
        }
    }

    &__btn {
        border: 1px solid #BFA575;
        border-radius: 14px;

        margin-bottom: 40px;
        padding: 13px;
        width: 320px;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #BFA575;
        transition: background 0.3s, color 0.3s;

        &:hover {
            background: #BFA575;
            color: #fff;
        }
    }
}

@media (max-width: 1025px) {
    .registration {
        max-width: 605px;
        margin-left: auto;
        margin-right: auto;
    }

    .registration-form__btn {
        margin-left: auto;
        margin-right: auto;
    }

    .registration-form__row {
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
    }

    .registration-form__text {
        margin-bottom: 60px;
    }

    .registration-form__text:nth-child(3) {
        display: none;
    }
    .registration-form__title {
        @include adaptiv-phone-value('font-size', 20, 17, 1);
        @include adaptiv-phone-value('line-height', 25, 21, 1);
        @include adaptiv-phone-value('margin-bottom', 25, 15, 1);
    }
}
@media (max-width: 850px) {
    .registration-form__text:nth-child(2) {
        margin-bottom: 15px;
    }
    .registration-form__text:nth-child(3) {
        display: block;
        @include adaptiv-phone-value('margin-bottom', 60, 15, 1);
    }
}
@media (max-width: 400px) {
    .registration-form__row {
        width: 100%;
        max-width: unset;
    }
    .registration-form__row-input {
        width: 100%;
    }
    .registration-form__btn {
        width: 100%;
    }
}
</style>