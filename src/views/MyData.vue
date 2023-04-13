<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="2" />
        <MainBack :title="'My data'"/>
        <main class="main">
            <section class="main__my-data my-data">
                <h1 class="my-data__title">
                    My data
                </h1>
                <div class="my-data__inner">
                    <div class="my-data__box my-data-box">
                        <img class="my-data-box__img" src="../../public/images/my-data-img-1.png" alt="img">
                        <div class="my-data-box__column">
                            <p class="my-data-box__column-name">
                                Savannah Nguyen
                            </p>
                            <p class="my-data-box__column-date">
                                <span>
                                    31
                                </span>
                                <span>
                                    Decemder
                                </span>
                                <span>
                                    1997
                                </span>
                            </p>
                            <a class="my-data-box__column-link" href="mailto:savannahhg.gmail.com">
                                savannahhg.gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <a class="my-data__btn" data-fancybox href="#log-out">
                    Log Out
                </a>
            </section>
            <form id="log-out" class="main__log-out log-out" action="#">
                <h2 class="log-out__title">
                    Log out from accaunt
                </h2>
                <p class="log-out__text">
                    Are you really want to log out of your account?
                </p>
                <div class="log-out__buttons">
                    <button class="log-out__buttons-btn is-close" tabindex="0">
                        Calcel
                    </button>
                    <button class="log-out__buttons-btn" type="submit">
                        Yes
                    </button>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
import MainBack from './Main-components/Main-back.vue';
import MainHeaderVue from './Main-components/Main-header.vue';

export default {
    components: {
        MainBack,
        MainHeaderVue
    },
    mounted() {
        document.querySelector('.wrapper-big').style.minHeight = +window.innerHeight + 'px'
    }
}
</script>

<style lang="scss">
.my-data {
    width: 100%;
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    padding: 30px;

    &__title {
        padding-bottom: 25px;
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.3px;
        color: #BFA575;

        border-bottom: 1px solid #ECEEF0;
        margin-bottom: 25px;
    }

    &__inner {}

    &__btn {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        margin-left: auto;
        margin-right: auto;
        color: #82B8E9;
        display: none;
        justify-content: center;
        align-items: center;
        padding: 18px;
        border-top: 1px solid #ECEEF0;
    }
}

.my-data-box {
    display: flex;
    gap: 15px;
    align-items: center;

    &__img {
        max-width: 80px;
        max-height: 80px;
        border-radius: 100%;
    }

    &__column {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    &__column-name {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__column-date {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
    }

    &__column-link {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #82B8E9;
        &:hover {
            text-decoration: underline;
        }
    }
}

@media (max-width: 750px) {
    .my-data__btn {
        display: flex;
        width: 100%;
    }
    .my-data {
        padding-left: 0;
        padding-right: 0;
        display: flex;
        margin-bottom: 70px;
        flex-direction: column;
        padding-bottom: 0;
    }
    .my-data__inner {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 20px;
        margin-right: 20px;
        height: 100%;
    }
    .my-data__title {
        margin-left: 20px;
        margin-right: 20px;
        display: none;
    }

    .my-data {
        padding-top: 30px;
    }
    .my-data-box {
        flex-direction: column;
        text-align: center;
    }
    .my-data-box__img {
        max-width: 120px;
        max-height: 120px;
        width: 120px;
        height: 120px;
    }
    .my-data-box {
        margin-bottom: 30px;
    }
    .my-data-box__column-name {
        font-size: 17px;
        line-height: 21px;
    }
    .my-data-box__column-date {
        font-size: 14px;
        line-height: 18px;
    }
    .my-data-box__column-link {
        font-size: 14px;
        line-height: 18px;
    }
}
</style>