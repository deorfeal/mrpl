<template>
    <div class="entrance__registration registration">
        <OpenGuestMenuTop :closeButtonIsActive="true" :backArrowIsActive="true" :backPage="'EntranceMenu'" @clickOnBackArrow="clickOnBackArrow" @clickOnCloseButton="$emit('clickOnCloseButton')" />
        <form class="registration__form registration-form" action="#">
            <h1 class="registration-form__title">
                Registration
            </h1>
            <p class="registration-form__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet
                <br> <br>
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
        margin-bottom: 25px;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
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
        margin-bottom: 40px;
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
</style>