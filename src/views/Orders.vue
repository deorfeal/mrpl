<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="0" />
        <MainBack :title="'Orders'" />
        <main class="main">
            <section class="main__orders orders">
                <form class="orders__item orders-item mix item-first" action="#">
                    <div class="orders-item__top orders-item-top">
                        <h1 class="orders-item-top__title">
                            Oders
                        </h1>
                        <div class="orders-item-top__box orders-item-top-box">
                            <a class="orders-item-top-box__btn" data-fancybox href="#">
                                Create order
                            </a>
                        </div>
                    </div>
                    <div class="orders-item__buttons">
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-first">
                            New orders
                        </button>
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-second">
                            Active orders
                        </button>
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-third">
                            Complited orders
                        </button>
                    </div>
                    <div class="orders-item__inner">
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Apply
                            </button>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Apply
                            </button>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Apply
                            </button>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Apply
                            </button>
                        </div>
                    </div>
                </form>
                <form class="orders__item orders-item mix item-second" action="#">
                    <div class="orders-item__top orders-item-top">
                        <h1 class="orders-item-top__title">
                            Oders
                        </h1>
                        <div class="orders-item-top__box orders-item-top-box">
                            <p class="orders-item-top-box__text">
                                <span>Status filter:</span>
                                All status
                            </p>
                            <a class="orders-item-top-box__btn" data-fancybox href="#">
                                Edit filter
                            </a>
                        </div>
                    </div>
                    <div class="orders-item__buttons">
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-first">
                            New orders
                        </button>
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-second">
                            Active orders
                        </button>
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-third">
                            Complited orders
                        </button>
                    </div>
                    <div class="orders-item__inner">
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Status:
                                    </span>
                                    <span class="orders-item-box__row-text--send">
                                        Contract send
                                    </span>
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Edit status
                            </button>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Status:
                                    </span>
                                    <span class="orders-item-box__row-text--new">
                                        New
                                    </span>
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Edit status
                            </button>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Status:
                                    </span>
                                    <span class="orders-item-box__row-text--canceled">
                                        Canceled
                                    </span>
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Edit status
                            </button>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Status:
                                    </span>
                                    <span class="orders-item-box__row-text--canceled">
                                        Canceled
                                    </span>
                                </p>
                            </div>
                            <button class="orders-item-box__btn" type="button">
                                Edit status
                            </button>
                        </div>
                    </div>
                </form>
                <form class="orders__item orders-item mix item-third" action="#">
                    <div class="orders-item__top orders-item-top">
                        <h1 class="orders-item-top__title">
                            Oders
                        </h1>
                    </div>
                    <div class="orders-item__buttons">
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-first">
                            New orders
                        </button>
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-second">
                            Active orders
                        </button>
                        <button class="orders-item__buttons-btn" type="button" data-filter=".item-third">
                            Complited orders
                        </button>
                    </div>
                    <div class="orders-item__inner">
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Date:
                                    </span>
                                    07.12.2024
                                </p>
                            </div>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Date:
                                    </span>
                                    07.12.2024
                                </p>
                            </div>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Date:
                                    </span>
                                    07.12.2024
                                </p>
                            </div>
                        </div>
                        <div class="orders-item__box orders-item-box">
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Client:
                                    </span>
                                    Darlene Robertson
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Phone number:
                                    </span>
                                    +4 217 555 01 13
                                </p>
                            </div>
                            <div class="orders-item-box__row">
                                <p class="orders-item-box__row-text">
                                    <span>
                                        Date:
                                    </span>
                                    07.12.2024
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
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
        document.querySelector('.wrapper-big').style.minHeight = +window.innerHeight + 'px';
        var mixer = mixitup('.orders', {
            load: {
                filter: '.item-first'
            },
            animation: {
                enable: false
            },
        })
    }
}
</script>

<style lang="scss">
.orders {
    max-width: 1400px;
    margin-left: auto;
    width: 100%;
    margin-right: auto;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    height: 100%;
    flex-grow: 1;
    padding: 30px;
    padding-top: 20px;
}

.orders-item {
    &:nth-child(2) {
        .orders-item-box::before {
            background: #677A45;
        }
        .orders-item-box__row:nth-child(3) {
            margin-left: auto;
            width: 170px;
        }
        .orders-item-box__btn {
            margin-left: unset;
        }
    }
    &:nth-child(3) {
        .orders-item-box::before {
            background: #BFA575;
        }
    }
    &__buttons {
        padding-left: 20px;
        display: flex;
        gap: 80px;
        align-items: center;
        margin-bottom: 25px;

        .mixitup-control-active {
            color: #677A45;

            &::before {
                opacity: 1;
            }
        }
    }

    &__buttons-btn {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        padding-bottom: 15px;
        position: relative;
        padding-left: 5px;
        padding-right: 5px;
        transition: color 0.3s;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 2px;
            background: #677A45;
            opacity: 0;
            transition: opacity 0.3s;
        }

        &:hover {
            color: #677A45;

            &::before {
                opacity: 1;
            }
        }
    }

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

.orders-item-top {
    margin-bottom: 25px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ECEEF0;
    min-height: 70px;

    &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.3px;
        color: #BFA575;
    }
}

.orders-item-top-box {
    display: flex;
    align-items: center;
    gap: 55px;

    &__btn {
        padding: 15px;
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        max-width: 160px;
        color: #BFA575;
        border: 1px solid #BFA575;
        border-radius: 14px;
        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #BFA575;
            color: #FFFFFF;
        }
    }

    &__text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;

        span {
            color: #82B8E9;
        }

        color: #413F3F;
    }
}

.orders-item-box {
    margin-left: 20px;
    display: flex;
    padding-left: 30px;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #ECEEF0;
    border-radius: 14px;
    min-height: 51px;
    position: relative;
    &::before {
        content: '';
        width: 16px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #82B8E9;
        border-radius: 13px 0px 0px 13px;
    }

    &__row {
        margin-right: 25px;
    }

    &__row-text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;

        span {
            color: #82B8E9;
            margin-right: 5px;
        }
    }

    &__btn {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #82B8E9;
        width: 160px;
        max-width: 160px;
        padding: 13px;
        border: 1px solid #82B8E9;
        border-radius: 0px 13px 13px 0px;
        margin-left: auto;
        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #82B8E9;
            color: #fff;
        }
    }

    &__row-text--send {
        color: #BFA575 !important;
    }

    &__row-text--new {
        color: #677A45 !important;
    }

    &__row-text--canceled {
        color: #D4A5B4 !important;
    }
}
</style>