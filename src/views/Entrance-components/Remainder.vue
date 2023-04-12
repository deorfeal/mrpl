<template>
    <div class="entrance__remainder remainder">
        <OpenGuestMenuTop :closeButtonIsActive="false" :backArrowIsActive="true" :backPage="'SingIn'"
            @clickOnBackArrow="clickOnBackArrow" @clickOnCloseButton="$emit('clickOnCloseButton')" />
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.remainder-form {
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
        padding: 13px;
        width: 320px;
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
    .remainder {
        .menu-top__back {
            margin-left: unset;
        }
    }
}

@media (max-width: 850px) {
    .big-wrapper--reminder {
        .entrance-aside {
            display: none;
        }
    }
}

@media (max-width: 400px) {
    .big-wrapper--reminder {
        position: relative;

        .entrance {
            position: unset;
            margin-top: 80px;
            justify-content: unset;
            padding-top: 30px;
        }

        .remainder-form__title {
            display: none;
        }

        .menu-top {
            left: 0;
            right: 0;
            padding-left: 20px;
            padding-right: 20px;
            top: 0;
            height: 65px;
            max-height: 65px;
            background: #FFFFFF;
            box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);

            &::after {
                content: 'Remind password';
                font-size: 17px;
                line-height: 21px;
                text-align: center;
                letter-spacing: -0.3px;
                color: #413F3F;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateY(-50%) translateX(-50%);
            }
        }
    }

    .remainder-form {
        width: 100%;
        max-width: 100%;
    }

    .remainder-form__btn {
        width: 100%;
        max-width: 100%;
    }

    .remainder-form__row-input {
        width: 100%;
        max-width: 100%;
    }
}</style>