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
        </div>
    </aside>
</template>
  
<script>
export default {

}
</script>
  
<style lang="scss">
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
}
</style>