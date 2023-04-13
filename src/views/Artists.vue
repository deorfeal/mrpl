<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="0" />
        <MainBack :title="'Artists'" />
        <main class="main main-artists">
            <section class="main__artists artists">
                <div class="artists__top artists-top">
                    <h1 class="artists-top__title">
                        Artists
                    </h1>
                    <div class="artists-top__box artists-top-box">
                        <div class="artists-top-box__search artists-top-box-search">
                            <input class="artists-top-box-search__input" type="text">
                            <button class="artists-top-box-search__btn" type="button" @click="showSearch">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                                        fill="#82B8E9" />
                                </svg>
                            </button>
                        </div>
                        <a class="artists-top-box__btn" href="#">
                            Add artist
                        </a>
                    </div>
                </div>
                <div class="artists__inner">
                    <div class="artists__item artists-item">
                        <div class="artists-item__box artists-item-box">
                            <img class="artists-item__box-img" src="../../public/images/artists-img-1.png" alt="img">
                            <div class="artists-item-box__row">
                                <p class="artists-item-box__row-name">
                                    DJ Beat
                                </p>
                                <p class="artists-item-box__row-text">
                                    Wedding presenter & DJ
                                </p>
                            </div>
                        </div>
                        <div class="artists-item__buttons">
                            <a class="artists-item__buttons-btn" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 14C11.7167 14 11.4793 13.904 11.288 13.712C11.096 13.5207 11 13.2833 11 13C11 12.7167 11.096 12.479 11.288 12.287C11.4793 12.0957 11.7167 12 12 12C12.2833 12 12.521 12.0957 12.713 12.287C12.9043 12.479 13 12.7167 13 13C13 13.2833 12.9043 13.5207 12.713 13.712C12.521 13.904 12.2833 14 12 14ZM8 14C7.71667 14 7.479 13.904 7.287 13.712C7.09567 13.5207 7 13.2833 7 13C7 12.7167 7.09567 12.479 7.287 12.287C7.479 12.0957 7.71667 12 8 12C8.28333 12 8.521 12.0957 8.713 12.287C8.90433 12.479 9 12.7167 9 13C9 13.2833 8.90433 13.5207 8.713 13.712C8.521 13.904 8.28333 14 8 14ZM16 14C15.7167 14 15.4793 13.904 15.288 13.712C15.096 13.5207 15 13.2833 15 13C15 12.7167 15.096 12.479 15.288 12.287C15.4793 12.0957 15.7167 12 16 12C16.2833 12 16.5207 12.0957 16.712 12.287C16.904 12.479 17 12.7167 17 13C17 13.2833 16.904 13.5207 16.712 13.712C16.5207 13.904 16.2833 14 16 14ZM12 18C11.7167 18 11.4793 17.904 11.288 17.712C11.096 17.5207 11 17.2833 11 17C11 16.7167 11.096 16.4793 11.288 16.288C11.4793 16.096 11.7167 16 12 16C12.2833 16 12.521 16.096 12.713 16.288C12.9043 16.4793 13 16.7167 13 17C13 17.2833 12.9043 17.5207 12.713 17.712C12.521 17.904 12.2833 18 12 18ZM8 18C7.71667 18 7.479 17.904 7.287 17.712C7.09567 17.5207 7 17.2833 7 17C7 16.7167 7.09567 16.4793 7.287 16.288C7.479 16.096 7.71667 16 8 16C8.28333 16 8.521 16.096 8.713 16.288C8.90433 16.4793 9 16.7167 9 17C9 17.2833 8.90433 17.5207 8.713 17.712C8.521 17.904 8.28333 18 8 18ZM16 18C15.7167 18 15.4793 17.904 15.288 17.712C15.096 17.5207 15 17.2833 15 17C15 16.7167 15.096 16.4793 15.288 16.288C15.4793 16.096 15.7167 16 16 16C16.2833 16 16.5207 16.096 16.712 16.288C16.904 16.4793 17 16.7167 17 17C17 17.2833 16.904 17.5207 16.712 17.712C16.5207 17.904 16.2833 18 16 18ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V3C6 2.71667 6.09567 2.479 6.287 2.287C6.479 2.09567 6.71667 2 7 2C7.28333 2 7.521 2.09567 7.713 2.287C7.90433 2.479 8 2.71667 8 3V4H16V3C16 2.71667 16.096 2.479 16.288 2.287C16.4793 2.09567 16.7167 2 17 2C17.2833 2 17.5207 2.09567 17.712 2.287C17.904 2.479 18 2.71667 18 3V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
                                        fill="#82B8E9" />
                                </svg>
                            </a>
                            <a class="artists-item__buttons-btn" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V4C4 3.45 4.196 2.979 4.588 2.587C4.98 2.195 5.45067 1.99934 6 2H14L20 8V12H18V9H13V4H6V20H12V22H6ZM18.3 14.525L19.375 15.6L15.5 19.45V20.5H16.55L20.425 16.65L21.475 17.7L17.175 22H14V18.825L18.3 14.525ZM21.475 17.7L18.3 14.525L19.75 13.075C19.9333 12.8917 20.1667 12.8 20.45 12.8C20.7333 12.8 20.9667 12.8917 21.15 13.075L22.925 14.85C23.1083 15.0333 23.2 15.2667 23.2 15.55C23.2 15.8333 23.1083 16.0667 22.925 16.25L21.475 17.7Z"
                                        fill="#82B8E9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="artists__item artists-item">
                        <div class="artists-item__box artists-item-box">
                            <img class="artists-item__box-img" src="../../public/images/artists-img-2.png" alt="img">
                            <div class="artists-item-box__row">
                                <p class="artists-item-box__row-name">
                                    Sara Briliant
                                </p>
                                <p class="artists-item-box__row-text">
                                    Photographer
                                </p>
                            </div>
                        </div>
                        <div class="artists-item__buttons">
                            <a class="artists-item__buttons-btn" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 14C11.7167 14 11.4793 13.904 11.288 13.712C11.096 13.5207 11 13.2833 11 13C11 12.7167 11.096 12.479 11.288 12.287C11.4793 12.0957 11.7167 12 12 12C12.2833 12 12.521 12.0957 12.713 12.287C12.9043 12.479 13 12.7167 13 13C13 13.2833 12.9043 13.5207 12.713 13.712C12.521 13.904 12.2833 14 12 14ZM8 14C7.71667 14 7.479 13.904 7.287 13.712C7.09567 13.5207 7 13.2833 7 13C7 12.7167 7.09567 12.479 7.287 12.287C7.479 12.0957 7.71667 12 8 12C8.28333 12 8.521 12.0957 8.713 12.287C8.90433 12.479 9 12.7167 9 13C9 13.2833 8.90433 13.5207 8.713 13.712C8.521 13.904 8.28333 14 8 14ZM16 14C15.7167 14 15.4793 13.904 15.288 13.712C15.096 13.5207 15 13.2833 15 13C15 12.7167 15.096 12.479 15.288 12.287C15.4793 12.0957 15.7167 12 16 12C16.2833 12 16.5207 12.0957 16.712 12.287C16.904 12.479 17 12.7167 17 13C17 13.2833 16.904 13.5207 16.712 13.712C16.5207 13.904 16.2833 14 16 14ZM12 18C11.7167 18 11.4793 17.904 11.288 17.712C11.096 17.5207 11 17.2833 11 17C11 16.7167 11.096 16.4793 11.288 16.288C11.4793 16.096 11.7167 16 12 16C12.2833 16 12.521 16.096 12.713 16.288C12.9043 16.4793 13 16.7167 13 17C13 17.2833 12.9043 17.5207 12.713 17.712C12.521 17.904 12.2833 18 12 18ZM8 18C7.71667 18 7.479 17.904 7.287 17.712C7.09567 17.5207 7 17.2833 7 17C7 16.7167 7.09567 16.4793 7.287 16.288C7.479 16.096 7.71667 16 8 16C8.28333 16 8.521 16.096 8.713 16.288C8.90433 16.4793 9 16.7167 9 17C9 17.2833 8.90433 17.5207 8.713 17.712C8.521 17.904 8.28333 18 8 18ZM16 18C15.7167 18 15.4793 17.904 15.288 17.712C15.096 17.5207 15 17.2833 15 17C15 16.7167 15.096 16.4793 15.288 16.288C15.4793 16.096 15.7167 16 16 16C16.2833 16 16.5207 16.096 16.712 16.288C16.904 16.4793 17 16.7167 17 17C17 17.2833 16.904 17.5207 16.712 17.712C16.5207 17.904 16.2833 18 16 18ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V3C6 2.71667 6.09567 2.479 6.287 2.287C6.479 2.09567 6.71667 2 7 2C7.28333 2 7.521 2.09567 7.713 2.287C7.90433 2.479 8 2.71667 8 3V4H16V3C16 2.71667 16.096 2.479 16.288 2.287C16.4793 2.09567 16.7167 2 17 2C17.2833 2 17.5207 2.09567 17.712 2.287C17.904 2.479 18 2.71667 18 3V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
                                        fill="#82B8E9" />
                                </svg>
                            </a>
                            <a class="artists-item__buttons-btn" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V4C4 3.45 4.196 2.979 4.588 2.587C4.98 2.195 5.45067 1.99934 6 2H14L20 8V12H18V9H13V4H6V20H12V22H6ZM18.3 14.525L19.375 15.6L15.5 19.45V20.5H16.55L20.425 16.65L21.475 17.7L17.175 22H14V18.825L18.3 14.525ZM21.475 17.7L18.3 14.525L19.75 13.075C19.9333 12.8917 20.1667 12.8 20.45 12.8C20.7333 12.8 20.9667 12.8917 21.15 13.075L22.925 14.85C23.1083 15.0333 23.2 15.2667 23.2 15.55C23.2 15.8333 23.1083 16.0667 22.925 16.25L21.475 17.7Z"
                                        fill="#82B8E9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="artists__item artists-item">
                        <div class="artists-item__box artists-item-box">
                            <img class="artists-item__box-img" src="../../public/images/artists-img-1.png" alt="img">
                            <div class="artists-item-box__row">
                                <p class="artists-item-box__row-name">
                                    Mr. Gray
                                </p>
                                <p class="artists-item-box__row-text">
                                    Wedding presenter &amp; DJ
                                </p>
                            </div>
                        </div>
                        <div class="artists-item__buttons">
                            <a class="artists-item__buttons-btn" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 14C11.7167 14 11.4793 13.904 11.288 13.712C11.096 13.5207 11 13.2833 11 13C11 12.7167 11.096 12.479 11.288 12.287C11.4793 12.0957 11.7167 12 12 12C12.2833 12 12.521 12.0957 12.713 12.287C12.9043 12.479 13 12.7167 13 13C13 13.2833 12.9043 13.5207 12.713 13.712C12.521 13.904 12.2833 14 12 14ZM8 14C7.71667 14 7.479 13.904 7.287 13.712C7.09567 13.5207 7 13.2833 7 13C7 12.7167 7.09567 12.479 7.287 12.287C7.479 12.0957 7.71667 12 8 12C8.28333 12 8.521 12.0957 8.713 12.287C8.90433 12.479 9 12.7167 9 13C9 13.2833 8.90433 13.5207 8.713 13.712C8.521 13.904 8.28333 14 8 14ZM16 14C15.7167 14 15.4793 13.904 15.288 13.712C15.096 13.5207 15 13.2833 15 13C15 12.7167 15.096 12.479 15.288 12.287C15.4793 12.0957 15.7167 12 16 12C16.2833 12 16.5207 12.0957 16.712 12.287C16.904 12.479 17 12.7167 17 13C17 13.2833 16.904 13.5207 16.712 13.712C16.5207 13.904 16.2833 14 16 14ZM12 18C11.7167 18 11.4793 17.904 11.288 17.712C11.096 17.5207 11 17.2833 11 17C11 16.7167 11.096 16.4793 11.288 16.288C11.4793 16.096 11.7167 16 12 16C12.2833 16 12.521 16.096 12.713 16.288C12.9043 16.4793 13 16.7167 13 17C13 17.2833 12.9043 17.5207 12.713 17.712C12.521 17.904 12.2833 18 12 18ZM8 18C7.71667 18 7.479 17.904 7.287 17.712C7.09567 17.5207 7 17.2833 7 17C7 16.7167 7.09567 16.4793 7.287 16.288C7.479 16.096 7.71667 16 8 16C8.28333 16 8.521 16.096 8.713 16.288C8.90433 16.4793 9 16.7167 9 17C9 17.2833 8.90433 17.5207 8.713 17.712C8.521 17.904 8.28333 18 8 18ZM16 18C15.7167 18 15.4793 17.904 15.288 17.712C15.096 17.5207 15 17.2833 15 17C15 16.7167 15.096 16.4793 15.288 16.288C15.4793 16.096 15.7167 16 16 16C16.2833 16 16.5207 16.096 16.712 16.288C16.904 16.4793 17 16.7167 17 17C17 17.2833 16.904 17.5207 16.712 17.712C16.5207 17.904 16.2833 18 16 18ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V3C6 2.71667 6.09567 2.479 6.287 2.287C6.479 2.09567 6.71667 2 7 2C7.28333 2 7.521 2.09567 7.713 2.287C7.90433 2.479 8 2.71667 8 3V4H16V3C16 2.71667 16.096 2.479 16.288 2.287C16.4793 2.09567 16.7167 2 17 2C17.2833 2 17.5207 2.09567 17.712 2.287C17.904 2.479 18 2.71667 18 3V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
                                        fill="#82B8E9" />
                                </svg>
                            </a>
                            <a class="artists-item__buttons-btn" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V4C4 3.45 4.196 2.979 4.588 2.587C4.98 2.195 5.45067 1.99934 6 2H14L20 8V12H18V9H13V4H6V20H12V22H6ZM18.3 14.525L19.375 15.6L15.5 19.45V20.5H16.55L20.425 16.65L21.475 17.7L17.175 22H14V18.825L18.3 14.525ZM21.475 17.7L18.3 14.525L19.75 13.075C19.9333 12.8917 20.1667 12.8 20.45 12.8C20.7333 12.8 20.9667 12.8917 21.15 13.075L22.925 14.85C23.1083 15.0333 23.2 15.2667 23.2 15.55C23.2 15.8333 23.1083 16.0667 22.925 16.25L21.475 17.7Z"
                                        fill="#82B8E9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
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
    },
    data() {
        return {
        }
    },
    methods: {
        showSearch() {
            document.querySelector('.artists-top-box-search').classList.toggle('artists-top-box-search--active')
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.artists {
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    padding: 30px;
    padding-top: 20px;
    height: 100%;
    flex-grow: 1;
    &__inner {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}

.artists-top {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ECEEF0;
    padding-bottom: 15px;
    margin-bottom: 25px;

    &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.3px;
        color: #BFA575;
    }
}

.artists-top-box {
    margin-left: auto;
    display: flex;
    align-items: center;

    &__btn {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #BFA575;
        width: 160px;
        max-width: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 13px;
        border: 1px solid #BFA575;
        border-radius: 14px;
        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #BFA575;
            color: #fff;
        }
    }
}

.artists-top-box-search {
    display: flex;
    align-items: center;
    margin-right: 10px;

    &__input {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
        border: 1px solid #82B8E9;
        border-radius: 14px 0 0 14px;
        height: 48px;
        padding: 15px;
        display: none;
        &::placeholder {
            font-size: 17px;
            line-height: 21px;
            letter-spacing: -0.3px;
            color: #413F3F;
        }
    }

    &__btn {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #82B8E9;
        border-radius: 14px;
    }
}

.artists-top-box-search--active {
    .artists-top-box-search__input {
        display: block;
    }
    .artists-top-box-search__btn {
        border-radius: 0 14px 14px 0;
        border-left: unset;
    }
}  

.artists-item {
    background: #FFFFFF;
    border: 1px solid #ECEEF0;
    border-radius: 14px;
    display: flex;
    align-items: center;
    padding: 15px 30px 15px 15px;

    &__box-img {
        width: 48px;
        height: 48px;
        border: 1px solid rgba(124, 124, 124, 0.3);
        border-radius: 100%;
    }

    &__buttons {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 30px;
    }

    &__buttons-btn {}
}

.artists-item-box {
    display: flex;
    align-items: center;
    gap: 15px;
    &__row {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    &__row-name {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__row-text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
    }
}

@media (max-width: 750px) {
    .artists {
        margin-bottom: 70px;
        background: unset;
        box-shadow: unset;
        padding: unset;
        padding-top: 0;
    }
    .artists-top-box {
        width: 100%;
    }
    .artists-top-box-search__input {
        width: 100%;
        border-radius: 0;
        border: 1px solid #ECEEF0;
        margin-bottom: 15px;
    }
    .artists-top-box-search {
        margin-right: 0;
        width: 100%;
    }
    .artists-top {
        padding: unset;
        margin: unset;
        border: unset;
    }
    .artists-top__title {
        display: none;
    }
    .artists-top-box-search__btn {
        position: absolute;
        top: -42px;
        width: 24px;
        height: 24px;
        border: unset;
        border-radius: unset;
        right: 20px;
    }
    .main-artists {
        position: relative;
    }
    .artists-top-box__btn {
        position: fixed;
        bottom: 85px;
        right: 15px;
        width: 48px;
        height: 48px;
        font-size: 1px;
        background: #BFA575;
        z-index: 10;
        box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
    
        &::before {
            content: '';
            width: 24px;
            height: 24px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            background-image: url(../../public/images/plus-icon.svg);
            background-repeat: no-repeat;
        }
    }
    .artists-item {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }
    .artists-item-box__row {
        flex-direction: column;
        gap: 5px;
        align-items: flex-start;
    }
    .artists-item-box {
        padding: 15px;
        @include adaptiv-phone-value('gap', 15, 8, 1);
    }
    .artists-item__buttons {
        border-top: 1px solid #ECEEF0;
        width: 100%;
        position: relative;
        &::after {
            content: '';
            width: 1px;
            height: 100%;
            background: #ECEEF0;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .artists-item__buttons-btn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
    .artists-item-box__row-name {
        @include adaptiv-phone-value('font-size', 17, 14, 1);
        @include adaptiv-phone-value('line-height', 21, 17, 1);
    }
    .artists-item-box__row-text {
        @include adaptiv-phone-value('font-size', 17, 14, 1);
        @include adaptiv-phone-value('line-height', 21, 17, 1);
    }
}
</style>