<template>
    <div class="edit-artist__inner">
        <div class="edit-artist__wrapper" v-if="contentIsActive">
            <div class="edit-artist__item edit-artist-item">
                <div class="edit-artist-item__top" @click="showContent">
                    <p class="edit-artist-item__top-text">
                        Artist data
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.29008 17.29C9.38259 17.3827 9.49248 17.4562 9.61345 17.5064C9.73442 17.5566 9.86411 17.5824 9.99508 17.5824C10.126 17.5824 10.2557 17.5566 10.3767 17.5064C10.4977 17.4562 10.6076 17.3827 10.7001 17.29L15.2901 12.7C15.3828 12.6075 15.4563 12.4976 15.5065 12.3766C15.5567 12.2556 15.5825 12.126 15.5825 11.995C15.5825 11.864 15.5567 11.7343 15.5065 11.6134C15.4563 11.4924 15.3828 11.3825 15.2901 11.29L10.7001 6.7C10.6075 6.60742 10.4976 6.53398 10.3766 6.48387C10.2557 6.43377 10.126 6.40798 9.99508 6.40798C9.86415 6.40798 9.7345 6.43377 9.61353 6.48387C9.49257 6.53398 9.38266 6.60742 9.29008 6.7C9.19749 6.79258 9.12405 6.90249 9.07395 7.02346C9.02384 7.14442 8.99806 7.27407 8.99806 7.405C8.99806 7.53593 9.02384 7.66558 9.07395 7.78654C9.12405 7.90751 9.19749 8.01742 9.29008 8.11L13.1701 12L9.29008 15.88C8.90008 16.27 8.91008 16.91 9.29008 17.29Z"
                            fill="#677A45" />
                    </svg>
                </div>
                <div class="edit-artist-item__inner">
                    <div class="edit-artist-item__row edit-artist-item-row">
                        <div class="edit-artist-item-row__box edit-artist-item-row-box">
                            <p class="edit-artist-item-row-box__text">
                                Name
                            </p>
                            <input class="edit-artist-item-row-box__input" type="text" :value="allInfo.name">
                        </div>
                        <div class="edit-artist-item-row__box edit-artist-item-row-box">
                            <p class="edit-artist-item-row-box__text">
                                Phone number
                            </p>
                            <input class="edit-artist-item-row-box__input" type="text" :value="allInfo.phone">
                        </div>
                        <div class="edit-artist-item-row__box edit-artist-item-row-box">
                            <p class="edit-artist-item-row-box__text">
                                Artist type
                            </p>
                            <CustomSelect
                                :options="['Wedding presenter & DJ', 'Wedding presenter & DJ 2', 'Wedding presenter & DJ 3', 'Wedding presenter & DJ 4']"
                                :default="'Wedding presenter & DJ'" class="select">
                            </CustomSelect>
                        </div>
                    </div>
                    <div class="edit-artist-item__row edit-artist-item-row">
                        <div class="edit-artist-item-row__box edit-artist-item-row-box">
                            <p class="edit-artist-item-row-box__text">
                                Adress
                            </p>
                            <input class="edit-artist-item-row-box__input" type="text" :value="allInfo.adress">
                        </div>
                        <div class="edit-artist-item-row__box edit-artist-item-row-box">
                            <p class="edit-artist-item-row-box__text">
                                Profile link
                            </p>
                            <input class="edit-artist-item-row-box__input" type="text" :value="allInfo.profile">
                        </div>
                    </div>
                </div>
            </div>
            <div class="edit-artist__item edit-artist-item">
                <div class="edit-artist-item__top" @click="showContent">
                    <p class="edit-artist-item__top-text">
                        Artist price
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.29008 17.29C9.38259 17.3827 9.49248 17.4562 9.61345 17.5064C9.73442 17.5566 9.86411 17.5824 9.99508 17.5824C10.126 17.5824 10.2557 17.5566 10.3767 17.5064C10.4977 17.4562 10.6076 17.3827 10.7001 17.29L15.2901 12.7C15.3828 12.6075 15.4563 12.4976 15.5065 12.3766C15.5567 12.2556 15.5825 12.126 15.5825 11.995C15.5825 11.864 15.5567 11.7343 15.5065 11.6134C15.4563 11.4924 15.3828 11.3825 15.2901 11.29L10.7001 6.7C10.6075 6.60742 10.4976 6.53398 10.3766 6.48387C10.2557 6.43377 10.126 6.40798 9.99508 6.40798C9.86415 6.40798 9.7345 6.43377 9.61353 6.48387C9.49257 6.53398 9.38266 6.60742 9.29008 6.7C9.19749 6.79258 9.12405 6.90249 9.07395 7.02346C9.02384 7.14442 8.99806 7.27407 8.99806 7.405C8.99806 7.53593 9.02384 7.66558 9.07395 7.78654C9.12405 7.90751 9.19749 8.01742 9.29008 8.11L13.1701 12L9.29008 15.88C8.90008 16.27 8.91008 16.91 9.29008 17.29Z"
                            fill="#677A45" />
                    </svg>
                </div>
                <div class="edit-artist-item__inner">
                    <div class="edit-artist-item__row edit-artist-item-row">
                        <div class="edit-artist-item-row__wrapper">
                            <h3 class="edit-artist-item-row__title">
                                Contarct
                            </h3>
                            <div class="edit-artist-item-row__content">
                                <p class="edit-artist-item-row__content-text">
                                    1 year
                                </p>
                                <input class="edit-artist-item-row__content-input" type="text" :value="allInfo.contract[0]">
                                <p class="edit-artist-item-row__content-text">
                                    €
                                </p>
                            </div>
                            <div class="edit-artist-item-row__content">
                                <p class="edit-artist-item-row__content-text">
                                    2 year
                                </p>
                                <input class="edit-artist-item-row__content-input" type="text" :value="allInfo.contract[1]">
                                <p class="edit-artist-item-row__content-text">
                                    €
                                </p>
                            </div>
                            <div class="edit-artist-item-row__content">
                                <p class="edit-artist-item-row__content-text">
                                    3 year
                                </p>
                                <input class="edit-artist-item-row__content-input" type="text" :value="allInfo.contract[2]">
                                <p class="edit-artist-item-row__content-text">
                                    €
                                </p>
                            </div>
                            <div class="edit-artist-item-row__content">
                                <p class="edit-artist-item-row__content-text">
                                    4 year
                                </p>
                                <input class="edit-artist-item-row__content-input" type="text" :value="allInfo.contract[3]">
                                <p class="edit-artist-item-row__content-text">
                                    €
                                </p>
                            </div>
                            <div class="edit-artist-item-row__content">
                                <p class="edit-artist-item-row__content-text">
                                    5 year
                                </p>
                                <input class="edit-artist-item-row__content-input" type="text" :value="allInfo.contract[4]">
                                <p class="edit-artist-item-row__content-text">
                                    €
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="edit-artist-item__row edit-artist-item-row">
                        <div class="edit-artist-item-row__wrapper">
                            <h3 class="edit-artist-item-row__title">
                                Surcharges
                            </h3>
                            <div class="edit-artist-item-row__surcharges">
                                <p class="edit-artist-item-row__surcharges-text">
                                    Surcharge per km
                                </p>
                                <div class="edit-artist-item-row__surcharges-wrapper">
                                    <input class="edit-artist-item-row__surcharges-input" type="text" :value="allInfo.surcharges[0]">
                                    <p class="edit-artist-item-row__surcharges-subtext">
                                        €
                                    </p>
                                </div>
                            </div>
                            <div class="edit-artist-item-row__surcharges">
                                <p class="edit-artist-item-row__surcharges-text">
                                    Surcharge for hotel (250 km)
                                </p>
                                <div class="edit-artist-item-row__surcharges-wrapper">
                                    <input class="edit-artist-item-row__surcharges-input" type="text" :value="allInfo.surcharges[1]">
                                    <p class="edit-artist-item-row__surcharges-subtext">
                                        €
                                    </p>
                                </div>
                            </div>
                            <div class="edit-artist-item-row__surcharges">
                                <p class="edit-artist-item-row__surcharges-text">
                                    Double hotel (400/500 km)
                                </p>
                                <div class="edit-artist-item-row__surcharges-wrapper">
                                    <input class="edit-artist-item-row__surcharges-input" type="text" :value="allInfo.surcharges[2]">
                                    <p class="edit-artist-item-row__surcharges-subtext">
                                        € /
                                    </p>
                                    <input class="edit-artist-item-row__surcharges-input" type="text" :value="allInfo.surcharges[3]">
                                    <p class="edit-artist-item-row__surcharges-subtext">
                                        €
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-artist-item__row edit-artist-item-row">
                        <div class="edit-artist-item-row__wrapper">
                            <h3 class="edit-artist-item-row__title">
                                Additional
                            </h3>
                            <div class="edit-artist-item-row__surcharges">
                                <label class="container">Wedding ceremony
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="edit-artist-item-row__surcharges">
                                <p class="edit-artist-item-row__surcharges-text">
                                    Additional surcharge
                                </p>
                                <div class="edit-artist-item-row__surcharges-wrapper">
                                    <input class="edit-artist-item-row__surcharges-input" type="text" :value="allInfo.additional">
                                    <p class="edit-artist-item-row__surcharges-subtext">
                                        €
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <aside class="edit-artist__all-info edit-artist-all-info">
            <div class="edit-artist-all-info__top edit-artist-all-info-top">
                <img class="edit-artist-all-info-top__img" src="../../../public/images/edit-artist-all-info-img.svg"
                    alt="img">
                <img class="edit-artist-all-info-top__img" src="../../../public/images/artists-img-1.png" alt="img">
                <div class="edit-artist-all-info-top__box">
                    <input class="edit-artist-all-info-top__box-input" type="file">
                    <p class="edit-artist-all-info-top__box-text">
                        Change
                    </p>
                </div>
            </div>
            <div class="edit-artist-all-info__wrapper" v-if="allInfoIsActive">
                <a href="#" class="edit-artist-all-info__btn" type="button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 14C11.7167 14 11.4793 13.904 11.288 13.712C11.096 13.5207 11 13.2833 11 13C11 12.7167 11.096 12.479 11.288 12.287C11.4793 12.0957 11.7167 12 12 12C12.2833 12 12.521 12.0957 12.713 12.287C12.9043 12.479 13 12.7167 13 13C13 13.2833 12.9043 13.5207 12.713 13.712C12.521 13.904 12.2833 14 12 14ZM8 14C7.71667 14 7.479 13.904 7.287 13.712C7.09567 13.5207 7 13.2833 7 13C7 12.7167 7.09567 12.479 7.287 12.287C7.479 12.0957 7.71667 12 8 12C8.28333 12 8.521 12.0957 8.713 12.287C8.90433 12.479 9 12.7167 9 13C9 13.2833 8.90433 13.5207 8.713 13.712C8.521 13.904 8.28333 14 8 14ZM16 14C15.7167 14 15.4793 13.904 15.288 13.712C15.096 13.5207 15 13.2833 15 13C15 12.7167 15.096 12.479 15.288 12.287C15.4793 12.0957 15.7167 12 16 12C16.2833 12 16.5207 12.0957 16.712 12.287C16.904 12.479 17 12.7167 17 13C17 13.2833 16.904 13.5207 16.712 13.712C16.5207 13.904 16.2833 14 16 14ZM12 18C11.7167 18 11.4793 17.904 11.288 17.712C11.096 17.5207 11 17.2833 11 17C11 16.7167 11.096 16.4793 11.288 16.288C11.4793 16.096 11.7167 16 12 16C12.2833 16 12.521 16.096 12.713 16.288C12.9043 16.4793 13 16.7167 13 17C13 17.2833 12.9043 17.5207 12.713 17.712C12.521 17.904 12.2833 18 12 18ZM8 18C7.71667 18 7.479 17.904 7.287 17.712C7.09567 17.5207 7 17.2833 7 17C7 16.7167 7.09567 16.4793 7.287 16.288C7.479 16.096 7.71667 16 8 16C8.28333 16 8.521 16.096 8.713 16.288C8.90433 16.4793 9 16.7167 9 17C9 17.2833 8.90433 17.5207 8.713 17.712C8.521 17.904 8.28333 18 8 18ZM16 18C15.7167 18 15.4793 17.904 15.288 17.712C15.096 17.5207 15 17.2833 15 17C15 16.7167 15.096 16.4793 15.288 16.288C15.4793 16.096 15.7167 16 16 16C16.2833 16 16.5207 16.096 16.712 16.288C16.904 16.4793 17 16.7167 17 17C17 17.2833 16.904 17.5207 16.712 17.712C16.5207 17.904 16.2833 18 16 18ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V3C6 2.71667 6.09567 2.479 6.287 2.287C6.479 2.09567 6.71667 2 7 2C7.28333 2 7.521 2.09567 7.713 2.287C7.90433 2.479 8 2.71667 8 3V4H16V3C16 2.71667 16.096 2.479 16.288 2.287C16.4793 2.09567 16.7167 2 17 2C17.2833 2 17.5207 2.09567 17.712 2.287C17.904 2.479 18 2.71667 18 3V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
                            fill="#82B8E9" />
                    </svg>
                </a>
                <div class="edit-artist-all-info__inner">
                    <div class="edit-artist-all-info__box">
                        <p class="edit-artist-all-info__box-text">
                            Name
                        </p>
                        <p class="edit-artist-all-info__box-info">
                            DJ Beat
                        </p>
                    </div>
                    <div class="edit-artist-all-info__box">
                        <p class="edit-artist-all-info__box-text">
                            Phone number
                        </p>
                        <p class="edit-artist-all-info__box-info">
                            +43 258 500 50 05
                        </p>
                    </div>
                    <div class="edit-artist-all-info__box">
                        <p class="edit-artist-all-info__box-text">
                            Artist type
                        </p>
                        <p class="edit-artist-all-info__box-info">
                            Wedding presenter &amp; DJ
                        </p>
                    </div>
                    <div class="edit-artist-all-info__box">
                        <p class="edit-artist-all-info__box-text">
                            Profile link
                        </p>
                        <a class="edit-artist-all-info__box-link" href="#">
                            alexshow.de/angebote-dj-beat/
                        </a>
                    </div>
                    <div class="edit-artist-all-info__box">
                        <p class="edit-artist-all-info__box-text">
                            Adress
                        </p>
                        <p class="edit-artist-all-info__box-info">
                            Gasthof Kloster Seligenporten, Klosterhof 9, 90602 Seligenporten
                        </p>
                    </div>
                </div>
                <button class="edit-artist-all-info__button" type="button">
                    Delete artist
                </button>
            </div>
        </aside>
    </div>
</template>

<script>
import CustomSelect from './CustomSelect.vue';
export default {
    props: ['allInfoIsActive', 'allInfo', 'contentIsActive'],
    components: {
        CustomSelect
    },
    mounted() {
        document.querySelector('.wrapper-big').style.minHeight = +window.innerHeight + 'px';
    },
    data() {
        return {
        }
    },
    methods: {
        showContent(emit) {
            emit.currentTarget.parentNode.classList.toggle('edit-artist-item--disabled')
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/_vars.scss';

.edit-artist-item {
    margin-bottom: 30px;

    &:nth-child(1) {
        .edit-artist-item-row {
            &:nth-child(1) {
                &::after {
                    content: unset;
                }

                .edit-artist-item-row-box:last-child {
                    width: unset;
                }
            }

            &:nth-child(2) {
                .edit-artist-item-row-box {
                    &:nth-child(2) {
                        min-width: 320px;
                        max-width: 320px;
                    }
                }
            }
        }

        .edit-artist-item__inner {
            padding: 25px 15px 0 15px;
        }
    }

    &:nth-child(2) {
        margin-bottom: 0;

        .edit-artist-item__inner {
            display: flex;
        }

        .edit-artist-item-row__wrapper {
            width: 100%;
        }

        .edit-artist-item-row:nth-child(1) {
            .edit-artist-item-row__content-text:nth-child(1) {
                min-width: 50px;
            }

            .edit-artist-item-row__wrapper {
                &:nth-child(1) {
                    padding: 0 25px 0 15px;
                }
            }
        }

        .edit-artist-item-row:nth-child(2) {
            .edit-artist-item-row__surcharges:last-child {
                .edit-artist-item-row__surcharges-subtext:nth-child(2) {
                    width: 30px;
                    min-width: 30px;
                }
            }
        }
    }

    &__top {
        cursor: pointer;
        padding: 5px 15px;
        background: #F6F8FA;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 14px;

        svg {
            transform: rotate(-90deg);
        }
    }

    &__top-text {
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__inner {
        padding-top: 25px;
        // checkbox

        /* Customize the label (the container) */
        .container {
            display: block;
            position: relative;

            cursor: pointer;
            font-size: 14px;
            line-height: 23px;
            /* identical to box height */

            letter-spacing: -0.3px;

            /* kBlackMainColor */

            color: #413F3F;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin: unset;
            padding: 0;
            padding-left: 32px;

        }

        /* Hide the browser's default checkbox */
        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;


        }

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 24px;
            width: 24px;
            background-color: #fff;
            border: 1px solid #ECEEF0;
            border-radius: 6px;
        }

        /* On mouse-over, add a grey background color */
        .container:hover input~.checkmark {
            background-color: #fff;
        }

        /* When the checkbox is checked, add a blue background */
        .container input:checked~.checkmark {
            background-color: #fff;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        .container input:checked~.checkmark:after {
            display: block;
        }

        /* Style the checkmark/indicator */
        .container .checkmark:after {
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            background-image: url(../../public/images/tick-icon.svg);
            width: 11px;
            background-repeat: no-repeat;
            background-size: contain;
            height: 9px;
        }

        // // 
    }
}

.edit-artist-item--disabled {
    .edit-artist-item__top {
        svg {
            transform: rotate(-275deg);
        }
    }

    .edit-artist-item__inner {
        display: none !important;
    }
}

.edit-artist-item-row {
    display: flex;
    gap: 15px;
    width: 100%;
    margin-bottom: 15px;
    position: relative;

    &:last-child {
        &::after {
            content: unset;
        }
    }

    &::after {
        content: '';
        height: 100%;
        width: 1px;
        background: #ECEEF0;
        position: absolute;
        right: 0;
        top: 0;
    }

    &:nth-child(2) {
        .edit-artist-item-row-box__input {
            width: 100%;
            max-width: 100%;
        }

        .edit-artist-item-row-box {
            &:first-child {
                width: 100%;
            }
        }
    }

    &__wrapper {
        padding: 0 25px 0 25px;
    }

    &__title {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 15px;
    }

    &__content {
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        gap: 10px;
    }

    &__content-text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__content-input {
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
        padding: 13px;
        width: 100%;
        margin-left: 5px;

        &::placeholder {
            font-size: 17px;
            line-height: 21px;
            letter-spacing: -0.3px;
            color: #413F3F;
        }
    }

    &__surcharges {
        margin-bottom: 15px;
    }

    &__surcharges-text {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 10px;
    }

    &__surcharges-subtext {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__surcharges-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__surcharges-input {
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;
        max-width: 100%;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
        padding: 13px;
        width: 100%;

        &::placeholder {
            font-size: 17px;
            line-height: 21px;
            letter-spacing: -0.3px;
            color: #413F3F;
        }
    }
}

.edit-artist-item-row-box {
    width: 100%;

    &__text {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 10px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
    }

    &__input {
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;

        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
        padding: 13px;
        width: 100%;

        &::placeholder {
            font-size: 17px;
            line-height: 21px;
            letter-spacing: -0.3px;
            color: #413F3F;
        }
    }
}

.edit-artist-all-info {
    min-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #ECEEF0;
    padding: 0 10px 0 25px;
    position: relative;

    &__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__btn {
        position: absolute;
        top: 0;
        right: 0;
    }

    &__inner {
        margin-bottom: 25px;
        border-bottom: 1px solid #ECEEF0;
        flex-grow: 1;
    }

    &__box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    &__box-text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
    }

    &__box-info {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        max-width: 280px;
        color: #413F3F;
    }

    &__box-link {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        text-decoration-line: underline;
        color: #82B8E9;
    }

    &__button {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        padding: 15px;
        color: #D4A5B4;
        border: 1px solid #D4A5B4;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 280px;
        max-width: 280px;
        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #D4A5B4;
            color: #fff;
        }
    }
}

.edit-artist-all-info-top {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 25px;

    &__img {
        max-width: 120px;
        max-height: 120px;
        border-radius: 100%;
        &:nth-child(2) {
            display: none;
        }
    }

    &__box {
        position: relative;
        overflow: hidden;
    }

    &__box-input {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        opacity: 0;
    }

    &__box-text {
        text-align: center;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #82B8E9;
    }
}

@media (max-width: 1300px) {
    .edit-artist__inner {
        flex-direction: column;
    }

    .edit-artist__inner {
        gap: 0;
    }

    .edit-artist-all-info {
        border: unset;
        padding: 0;
    }

    .edit-artist-item-row__wrapper {
        padding: 0 15px !important;
    }
}

@media (max-width: 750px) {
    .edit-artist-item-row {
        flex-direction: column;
    }

    .edit-artist-item:nth-child(2) .edit-artist-item__inner {
        flex-direction: column;
    }

    .edit-artist-all-info {
        align-items: center !important;
    }

    .edit-artist-item-row::after {
        content: unset;
    }

    .edit-artist-item__inner {
        padding: 20px 10px 0 10px !important;
    }

    .edit-artist-item-row-box {
        .select {
            width: 100%;
            max-width: 100%;
        }
    }

    .edit-artist-item-row__wrapper {
        padding: 0 5px !important;
    }

    .edit-artist-all-info {
        min-width: 100%;
    }

    .edit-artist-item:nth-child(1) .edit-artist-item-row:nth-child(2) .edit-artist-item-row-box:nth-child(2) {
        min-width: 100%;
        max-width: 100%;
    }

    .edit-artist-item-row:nth-child(2) .edit-artist-item-row-box:first-child {
        .edit-artist-item-row-box__input {
            padding: 23px 13px;
        }
    }

    .edit-artist-item:nth-child(1) {
        margin-bottom: 25px;
    }

    .edit-artist-item:nth-child(2) {
        .edit-artist-item-row:nth-child(1) {
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 1px solid #ECEEF0;
        }

        .edit-artist-item-row:nth-child(2) {
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 1px solid #ECEEF0;
        }
    }
}

@media (max-width: 550px) {
    .edit-artist-item__top {
        padding-right: 10px;
    }
}</style>