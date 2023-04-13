<template>
    <header class="header">
        <div class="header__inner">
            <a class="header__logo" href="#">
                <img class="header__logo-img" src="../../../public/images/main-logo.png" alt="logo">
            </a>
            <nav class="header__menu header-menu">
                <ul class="header-menu__list">
                    <li class="header-menu__list-item" id="0">
                        <a class="header-menu__list-link" href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 17H22V15H20V17ZM20 7V13H22V7M6 16H11V18H6M6 12H14V14H6M4 2C2.89 2 2 2.89 2 4V20C2 21.11 2.89 22 4 22H16C17.11 22 18 21.11 18 20V8L12 2M4 4H11V9H16V20H4V4Z"
                                    fill="#7C7C7C" />
                            </svg>
                            <p>Orders</p>
                        </a>
                    </li>
                    <li class="header-menu__list-item" id="1">
                        <a class="header-menu__list-link" href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
                                    fill="#7C7C7C" />
                                <path
                                    d="M11.9996 13.6C13.049 13.6 13.8996 12.7493 13.8996 11.7C13.8996 10.6506 13.049 9.79999 11.9996 9.79999C10.9503 9.79999 10.0996 10.6506 10.0996 11.7C10.0996 12.7493 10.9503 13.6 11.9996 13.6Z"
                                    fill="#7C7C7C" />
                                <path
                                    d="M12.0002 16.4C13.6002 16.4 15.1002 16.9 16.3002 17.7C15.3002 15.6 13.7002 14.3 12.0002 14.3C10.3002 14.3 8.7002 15.6 7.7002 17.7C8.9002 16.9 10.4002 16.4 12.0002 16.4Z"
                                    fill="#7C7C7C" />
                            </svg>
                            <p>Artists</p>
                        </a>
                    </li>
                    <li class="header-menu__list-item" id="2">
                        <a class="header-menu__list-link" href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 15H9V11H7.5V12.25H6V13.75H7.5V15ZM10 13.75H18V12.25H10V13.75ZM15 11H16.5V9.75H18V8.25H16.5V7H15V11ZM6 9.75H14V8.25H6V9.75ZM8 21V19H4C3.45 19 2.97933 18.8043 2.588 18.413C2.196 18.021 2 17.55 2 17V5C2 4.45 2.196 3.979 2.588 3.587C2.97933 3.19567 3.45 3 4 3H20C20.55 3 21.021 3.19567 21.413 3.587C21.8043 3.979 22 4.45 22 5V17C22 17.55 21.8043 18.021 21.413 18.413C21.021 18.8043 20.55 19 20 19H16V21H8ZM4 17H20V5H4V17Z"
                                    fill="#7C7C7C" />
                            </svg>
                            <p>My data</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="header__user-nav header-user-nav" @click="showLogOut">
                <img class="header-user-nav__img" src="../../../public/images/my-data-img-1.png" alt="img">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.29008 17.29C9.38259 17.3827 9.49248 17.4562 9.61345 17.5064C9.73442 17.5566 9.86411 17.5824 9.99508 17.5824C10.126 17.5824 10.2557 17.5566 10.3767 17.5064C10.4977 17.4562 10.6076 17.3827 10.7001 17.29L15.2901 12.7C15.3828 12.6075 15.4563 12.4976 15.5065 12.3766C15.5567 12.2556 15.5825 12.126 15.5825 11.995C15.5825 11.864 15.5567 11.7343 15.5065 11.6134C15.4563 11.4924 15.3828 11.3825 15.2901 11.29L10.7001 6.7C10.6075 6.60742 10.4976 6.53398 10.3766 6.48387C10.2557 6.43377 10.126 6.40798 9.99508 6.40798C9.86415 6.40798 9.7345 6.43377 9.61353 6.48387C9.49257 6.53398 9.38266 6.60742 9.29008 6.7C9.19749 6.79258 9.12405 6.90249 9.07395 7.02346C9.02384 7.14442 8.99806 7.27407 8.99806 7.405C8.99806 7.53593 9.02384 7.66558 9.07395 7.78654C9.12405 7.90751 9.19749 8.01742 9.29008 8.11L13.1701 12L9.29008 15.88C8.90008 16.27 8.91008 16.91 9.29008 17.29Z"
                        fill="#677A45" />
                </svg>
                <div class="header-user-nav__box">
                    <a class="header-user-nav__box-link" data-fancybox href="#log-out">
                        Log Out
                    </a>
                </div>
            </div>
        </div>
        <form id="log-out" class="log-out" action="#">
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
    </header>
</template>

<script>
export default {
    props: ['activeMenuOrder'],
    data() {
        return {

        }
    },
    mounted() {
        for (let item of document.querySelectorAll('.header-menu__list-item')) {
            if (item.id == this.activeMenuOrder) {
                item.classList.add('header-menu__list-item--active')
            }
        }
    },
    methods: {
        showLogOut() {
            document.querySelector('.header-user-nav').classList.toggle('header-user-nav--active')
        }
    }
}
</script>

<style lang="scss">
.header {
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    padding: 15px 25px 15px 40px;
    margin-bottom: 15px;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        max-width: 132px;
        max-height: 32px;
    }

    &__logo-img {
        width: 100%;
        height: 100%;
    }
    z-index: 100;
}

.header-menu {
    &__list {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    &__list-item {}

    &__list-item--active {
        .header-menu__list-link {
            color: #677A45;

            p {
                &::before {
                    opacity: 1;
                }
            }
        }

        svg {
            path {
                fill: #677A45;
            }
        }
    }

    &__list-link {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        transition: color 0.3s;

        svg path {
            transition: fill 0.3s;
        }

        p {
            position: relative;

            &::before {
                content: '';
                opacity: 0;
                width: 16px;
                height: 2px;
                position: absolute;
                left: 0;
                background: #677A45;
                bottom: -4px;
                transition: opacity 0.3s;
            }
        }

        &:hover {
            color: #677A45;

            svg {
                path {
                    fill: #677A45;
                }
            }

            p {
                &::before {
                    opacity: 1;
                }
            }
        }
    }
}

.header-user-nav {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    svg {
        transform: rotate(90deg);
    }

    &__img {
        max-width: 32px;
        max-height: 32px;
        border-radius: 100%;
        background-size: contain;
    }

    &__box {
        position: absolute;
        bottom: -87px;
        right: 0;
        width: 220px;
        display: none;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        padding: 18px 25px;
        box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
        border-radius: 14px;
        cursor: default;
    }

    &__box-link {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #82B8E9;

        &:hover {
            text-decoration: underline;
        }
    }
}

.header-user-nav--active {
    svg {
        transform: rotate(-90deg);
    }

    .header-user-nav__box {
        display: flex;
    }
}

//

.log-out {
    padding: 0;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    max-width: 343px;
    padding-top: 25px;
    display: none;

    &__title {
        max-width: 315px;
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        margin-bottom: 8px;
        color: #BFA575;
    }

    &__text {
        max-width: 315px;
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #413F3F;
        margin-bottom: 25px;
    }

    &__buttons {
        display: flex;
        align-items: center;
        border-top: 1px solid #ECEEF0;
        position: relative;

        &::after {
            content: '';
            height: 100%;
            width: 1px;
            background: #ECEEF0;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &__buttons-btn {
        font-size: 17px;
        padding: 18px 0;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #D4A5B4;
        width: 50%;

        &:nth-child(2) {
            color: #82B8E9;
        }
    }
}

@media (max-width: 750px) {
    .header-user-nav {
        display: none;
    }

    .header__logo {
        display: none;
    }

    .header__inner {
        justify-content: center;
    
    }
    .header-menu__list {
        gap: 95px;
    }
    .header {
        padding: 10px 0;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: 0px;
    }

    .header-menu__list-link {
        flex-direction: column;
        gap: 4px;
    }

    .header-menu__list-item {
        &:nth-child(1) {
            order: 2;
        }

        &:nth-child(2) {
            order: 3;
        }

        &:nth-child(3) {
            order: 1;
        }
    }

    .header-menu__list-link p::before {
        content: unset;
    }

    .header-menu__list-item--active {
        position: relative;
        &::before {
            content: '';
            width: 4px;
            height: 4px;
            background: #677A45;
            border-radius: 100%;
            position: absolute;
            left: 6px;
            top: 1px;
        }
    }
}

</style>