<template>
    <div class="entrance__sing-in sing-in">
        <div class="sing-in__top sing-in-top">
            <button class="sing-in-top__btn" type="button" @click="$emit('clickOnMenuButtton')">
                <div class="sing-in-top__btn-box">
                    <span>
                    </span>
                    <span>
                    </span>
                    <span>
                    </span>
                </div>
                <p class="sing-in-top__btn-text">
                    Guest menu
                </p>
            </button>
        </div>
        <form class="sing-in__form sing-in-form" action="#">
            <h1 class="sing-in-form__title">
                Sing In
            </h1>
            <div class="sing-in-form__row sing-in-form-row">
                <p class="sing-in-form-row__text">
                    Login
                </p>
                <input class="sing-in-form-row__input" type="text">
            </div>
            <div class="sing-in-form__row sing-in-form-row">
                <p class="sing-in-form-row__text">
                    Password
                </p>
                <input class="sing-in-form-row__input" type="password">
            </div>
            <button class="sing-in-form__btn" type="submit">
                Login
            </button>
            <button class="sing-in-form__link" href="#" @click="$emit('clickOnRemindButton')">
                Remind password
            </button>
        </form>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import '../../assets/scss/_vars.scss';
.sing-in {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
}

.sing-in-top {
    display: flex;
    height: 25px;
    position: absolute;
    left: 45px;
    right: 40px;
    @include adaptiv-value('top', 50, 90, 1);
    &__btn {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    &__btn-box {
        width: 30px;
        height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
            width: 100%;
            background: #677A45;
            height: 4px;
            border-radius: 20px;
        }
    }

    &__btn-text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #677A45;
    }
}

.sing-in-form {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.3px;
        color: #413F3F;
        margin-bottom: 40px;
    }

    &__btn {
        border: 1px solid #BFA575;
        border-radius: 14px;

        margin-bottom: 40px;
        padding: 13px;
        width: 100%;
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

    &__link {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        text-decoration-line: underline;
        color: #82B8E9;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        &:hover {
            text-decoration: unset;
        }
    }
}

.sing-in-form-row {
    margin-bottom: 15px;

    &:nth-child(3) {
        margin-bottom: 25px;
    }

    &__text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 10px;
    }

    &__input {
        padding: 5px 15px;
        height: 48px;
        width: 100%;
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
}
</style>