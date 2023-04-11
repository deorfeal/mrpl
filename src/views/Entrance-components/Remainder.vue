<template>
    <div class="entrance__remainder remainder">
        <OpenGuestMenuTop :closeButtonIsActive="false" :backArrowIsActive="true" :backPage="'SingIn'" @clickOnBackArrow="clickOnBackArrow"
            @clickOnCloseButton="$emit('clickOnCloseButton')" />
        <form class="remainder__form remainder-form" action="#">
            <h1 class="remainder-form__title">
                Remind password
            </h1>
            <div class="remainder-form__row">
                <p class="remainder-form__row-text">
                    Login
                </p>
                <input class="remainder-form__row-input" type="text">
            </div>
            <button class="remainder-form__btn" type="submit">
                Remind
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
.remainder {
}

.remainder-form {
    margin-top: 285px;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    max-width: 320px;
    &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 40px;
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