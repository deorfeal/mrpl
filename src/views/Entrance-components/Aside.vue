<template>
    <aside class="entrance__aside entrance-aside">
        <div class="entrance-aside__box entrance-aside-box">
            <a class="entrance-aside-box__logo" href="#">
                <img class="entrance-aside-box__logo-img" src="../../../public/images/entrance-logo.png" alt="">
            </a>
            <p class="entrance-aside-box__text">
                Welcome to
                <span>
                    ALEXSHOW
                </span>
                for managers
            </p>
            <p class="entrance-aside-box__text entrance-aside-box__text--mobile">
                Welcome to  
                <span>ALEXSHOW</span>
                application
            </p>
        </div>
    </aside>
</template>
  
<script>
export default {

}
</script>
  
<style lang="scss">
@import '../../assets/scss/_vars.scss';
.entrance-aside {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
}

.entrance-aside-box {
    &__logo {
        max-width: 80px;
        max-height: 80px;
        display: block;
        margin-bottom: 25px;
    }

    &__logo-img {
        width: 100%;
        height: 100%;
    }

    &__text {
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: -0.3px;
        color: #413F3F;
        max-width: 295px;

        span {
            color: #BFA575;
        }
    }
    &__text--mobile {
        display: none;
    }
}

@media (max-width: 1025px) {
    .body-closed {
        .entrance-aside {
            display: none;
        }
    }
}
@media (max-width: 850px) {
    .entrance-aside {
        margin-top: unset;
        width: 100%;
        padding-top: 80px;
        margin-bottom: 40px;
    }
    .entrance-aside-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .entrance-aside-box__logo {
        @include adaptiv-phone-value('margin-bottom', 25, 15, 1);
        @include adaptiv-phone-value('max-width', 80, 40, 1);
        @include adaptiv-phone-value('max-height', 80, 40, 1);
    }
    .entrance-aside-box__text {
        @include adaptiv-phone-value('font-size', 24, 22, 1);
        @include adaptiv-phone-value('line-height', 30, 27, 1);
    }
    .entrance-aside-box__text {
        display: none;
    }
    .entrance-aside-box__text--mobile {
        display: block;
    }
}

@media (max-width: 400px) {
    .entrance-aside {
        text-align: left;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .entrance-aside-box {
        text-align: left;
        align-items: flex-start;
        justify-content: flex-start;
    }
}
</style>